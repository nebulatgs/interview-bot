import { createHmac } from "crypto";
import { EmbedBuilder } from "discord.js";
import { Client } from "discordx";
import { MessageEvent, WebSocket } from "ws";
import { prisma } from "./prisma.js";

export async function initEventStream(bot: Client) {
	const ws = new WebSocket(
		process.env.EVENTSTREAM_URL ?? "ws://localhost:8080/ws"
	);

	ws.onmessage = (event) => {
		const message = event.data.toString();

		// digest the provided UUID to authenticate the connection
		const hmac = createHmac("sha256", process.env.SECRET ?? "");
		hmac.update(message);
		const digest = hmac.digest("hex");
		ws.send(digest);

		// overwrite the auth handler with the data handler
		ws.onmessage = handleData;
	};

	async function handleData(event: MessageEvent) {
		const data = JSON.parse(event.data.toString());

		const actions: Record<string, { color: number; title: string }> = {
			opened: {
				color: 0x238636,
				title: "Pull Request Opened",
			},
			reopened: {
				color: 0x238636,
				title: "Pull Request Reopened",
			},
			merged: {
				color: 0x8957e5,
				title: "Pull Request Merged",
			},
			closed: {
				color: 0xda3633,
				title: "Pull Request Closed",
			},
		};

		if (actions[data.action]) {
			const action = actions[data.action];

			const embed = new EmbedBuilder()
				.setColor(action.color)
				.setTitle(action.title).setDescription(`
				**Repository:** ${data.repository.full_name}
				**Pull Request:** [${data.pull_request.title}](${data.pull_request.html_url})
				**Author:** ${data.pull_request.user.login}
			`);

			const channel = await bot.channels.fetch("874391761865277445");
			if (channel?.isTextBased()) {
				channel.send({ embeds: [embed] });
			}
		}

		await prisma.repository.upsert({
			where: { id: data.repository.id },
			create: { id: data.repository.id, html_url: data.repository.html_url },
			update: { id: data.repository.id, html_url: data.repository.html_url },
		});
		await prisma.pullRequest.upsert({
			where: { id: data.pull_request.id },
			create: {
				id: data.pull_request.id,
				url: data.pull_request.url,
				title: data.pull_request.title,
				body: data.pull_request.body,
				author: data.pull_request.user.login,
				authorUrl: data.pull_request.user.html_url,
				authorAvatarUrl: data.pull_request.user.avatar_url,
				repositoryId: data.repository.id,
				state: data.pull_request.state,
			},
			update: {
				id: data.pull_request.id,
				url: data.pull_request.url,
				title: data.pull_request.title,
				body: data.pull_request.body,
				author: data.pull_request.user.login,
				authorUrl: data.pull_request.user.html_url,
				authorAvatarUrl: data.pull_request.user.avatar_url,
				repositoryId: data.repository.id,
				state: data.pull_request.state,
			},
		});
	}
}
