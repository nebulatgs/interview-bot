import { createHmac, randomUUID } from "crypto";
import {
	App,
	DEDICATED_COMPRESSOR_3KB,
	HttpResponse,
	WebSocket,
} from "uWebSockets.js";

const app = App();

const subscribers = new Map<string, WebSocket>();
const valid = new Map<string, boolean>();

app
	.ws("/ws", {
		idleTimeout: 0,
		maxBackpressure: 1024,
		maxPayloadLength: 512,
		compression: DEDICATED_COMPRESSOR_3KB,
		open: (ws) => {
			ws.id = randomUUID();
			subscribers.set(ws.id, ws);
			ws.send(ws.id);
		},
		message: (ws, message) => {
			const sig = Buffer.from(message).toString();
			const hmac = createHmac("sha256", process.env.SECRET ?? "");
			hmac.update(ws.id);
			const digest = hmac.digest("hex");
			const isValid = digest === sig;
			console.log("isValid:", isValid);
			valid.set(ws.id, isValid);
		},
		close: (ws) => {
			subscribers.delete(ws.id);
			valid.delete(ws.id);
		},
	})
	.post("/webhook", async (res, req) => {
		const signature = req.getHeader("x-hub-signature-256");
		const event = req.getHeader("x-github-event");
		const json = await readJson(res);
		const isValid = await verifyWebhook(signature, json);
		if (isValid) {
			res.writeStatus("200 OK").end("Accepted");
			console.log("Event:", event);
			subscribers.forEach((ws) => {
				if (valid.get(ws.id)) {
					ws.send(json.toString(), false, true);
				}
			});
		} else {
			console.error("Invalid signature");
			res.writeStatus("401 Unauthorized").end("Unauthorized");
		}
	})
	.listen(Number(process.env.PORT ?? "8080"), (listenSocket) => {
		if (listenSocket) {
			console.log("Listening to port", process.env.PORT ?? 8080);
		}
	});

async function verifyWebhook(signature: string, json: Buffer) {
	const hmac = createHmac("sha256", process.env.SECRET ?? "");
	hmac.update(json);
	const digest = hmac.digest("hex");
	return `sha256=${digest}` === signature;
}

function readJson(res: HttpResponse) {
	return new Promise<Buffer>((resolve, reject) => {
		let buffer: Buffer;
		res.onData((ab, isLast) => {
			let chunk = Buffer.from(ab);
			if (isLast) {
				if (buffer) {
					resolve(Buffer.concat([buffer, chunk]));
				} else {
					resolve(chunk);
				}
			} else {
				if (buffer) {
					buffer = Buffer.concat([buffer, chunk]);
				} else {
					buffer = Buffer.concat([chunk]);
				}
			}
		});
		res.onAborted(reject);
	});
}
