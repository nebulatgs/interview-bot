
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model PullRequest
 * 
 */
export type PullRequest = {
  id: number
  title: string
  body: string | null
  url: string
  createdAt: Date
  updatedAt: Date
  state: string
  author: string
  authorUrl: string
  authorAvatarUrl: string
  repositoryId: number
}

/**
 * Model Repository
 * 
 */
export type Repository = {
  id: number
  html_url: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PullRequests
 * const pullRequests = await prisma.pullRequest.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PullRequests
   * const pullRequests = await prisma.pullRequest.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.pullRequest`: Exposes CRUD operations for the **PullRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PullRequests
    * const pullRequests = await prisma.pullRequest.findMany()
    * ```
    */
  get pullRequest(): Prisma.PullRequestDelegate<GlobalReject>;

  /**
   * `prisma.repository`: Exposes CRUD operations for the **Repository** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Repositories
    * const repositories = await prisma.repository.findMany()
    * ```
    */
  get repository(): Prisma.RepositoryDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.7.1
   * Query Engine version: 272861e07ab64f234d3ffc4094e32bd61775599c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    PullRequest: 'PullRequest',
    Repository: 'Repository'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RepositoryCountOutputType
   */


  export type RepositoryCountOutputType = {
    PullRequest: number
  }

  export type RepositoryCountOutputTypeSelect = {
    PullRequest?: boolean
  }

  export type RepositoryCountOutputTypeGetPayload<S extends boolean | null | undefined | RepositoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RepositoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RepositoryCountOutputTypeArgs)
    ? RepositoryCountOutputType 
    : S extends { select: any } & (RepositoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RepositoryCountOutputType ? RepositoryCountOutputType[P] : never
  } 
      : RepositoryCountOutputType




  // Custom InputTypes

  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RepositoryCountOutputType
     * 
    **/
    select?: RepositoryCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model PullRequest
   */


  export type AggregatePullRequest = {
    _count: PullRequestCountAggregateOutputType | null
    _avg: PullRequestAvgAggregateOutputType | null
    _sum: PullRequestSumAggregateOutputType | null
    _min: PullRequestMinAggregateOutputType | null
    _max: PullRequestMaxAggregateOutputType | null
  }

  export type PullRequestAvgAggregateOutputType = {
    id: number | null
    repositoryId: number | null
  }

  export type PullRequestSumAggregateOutputType = {
    id: number | null
    repositoryId: number | null
  }

  export type PullRequestMinAggregateOutputType = {
    id: number | null
    title: string | null
    body: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    state: string | null
    author: string | null
    authorUrl: string | null
    authorAvatarUrl: string | null
    repositoryId: number | null
  }

  export type PullRequestMaxAggregateOutputType = {
    id: number | null
    title: string | null
    body: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    state: string | null
    author: string | null
    authorUrl: string | null
    authorAvatarUrl: string | null
    repositoryId: number | null
  }

  export type PullRequestCountAggregateOutputType = {
    id: number
    title: number
    body: number
    url: number
    createdAt: number
    updatedAt: number
    state: number
    author: number
    authorUrl: number
    authorAvatarUrl: number
    repositoryId: number
    _all: number
  }


  export type PullRequestAvgAggregateInputType = {
    id?: true
    repositoryId?: true
  }

  export type PullRequestSumAggregateInputType = {
    id?: true
    repositoryId?: true
  }

  export type PullRequestMinAggregateInputType = {
    id?: true
    title?: true
    body?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    state?: true
    author?: true
    authorUrl?: true
    authorAvatarUrl?: true
    repositoryId?: true
  }

  export type PullRequestMaxAggregateInputType = {
    id?: true
    title?: true
    body?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    state?: true
    author?: true
    authorUrl?: true
    authorAvatarUrl?: true
    repositoryId?: true
  }

  export type PullRequestCountAggregateInputType = {
    id?: true
    title?: true
    body?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    state?: true
    author?: true
    authorUrl?: true
    authorAvatarUrl?: true
    repositoryId?: true
    _all?: true
  }

  export type PullRequestAggregateArgs = {
    /**
     * Filter which PullRequest to aggregate.
     * 
    **/
    where?: PullRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullRequests to fetch.
     * 
    **/
    orderBy?: Enumerable<PullRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PullRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullRequests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullRequests.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PullRequests
    **/
    _count?: true | PullRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PullRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PullRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PullRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PullRequestMaxAggregateInputType
  }

  export type GetPullRequestAggregateType<T extends PullRequestAggregateArgs> = {
        [P in keyof T & keyof AggregatePullRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePullRequest[P]>
      : GetScalarType<T[P], AggregatePullRequest[P]>
  }




  export type PullRequestGroupByArgs = {
    where?: PullRequestWhereInput
    orderBy?: Enumerable<PullRequestOrderByWithAggregationInput>
    by: Array<PullRequestScalarFieldEnum>
    having?: PullRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PullRequestCountAggregateInputType | true
    _avg?: PullRequestAvgAggregateInputType
    _sum?: PullRequestSumAggregateInputType
    _min?: PullRequestMinAggregateInputType
    _max?: PullRequestMaxAggregateInputType
  }


  export type PullRequestGroupByOutputType = {
    id: number
    title: string
    body: string | null
    url: string
    createdAt: Date
    updatedAt: Date
    state: string
    author: string
    authorUrl: string
    authorAvatarUrl: string
    repositoryId: number
    _count: PullRequestCountAggregateOutputType | null
    _avg: PullRequestAvgAggregateOutputType | null
    _sum: PullRequestSumAggregateOutputType | null
    _min: PullRequestMinAggregateOutputType | null
    _max: PullRequestMaxAggregateOutputType | null
  }

  type GetPullRequestGroupByPayload<T extends PullRequestGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PullRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PullRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PullRequestGroupByOutputType[P]>
            : GetScalarType<T[P], PullRequestGroupByOutputType[P]>
        }
      >
    >


  export type PullRequestSelect = {
    id?: boolean
    title?: boolean
    body?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    state?: boolean
    author?: boolean
    authorUrl?: boolean
    authorAvatarUrl?: boolean
    repository?: boolean | RepositoryArgs
    repositoryId?: boolean
  }


  export type PullRequestInclude = {
    repository?: boolean | RepositoryArgs
  } 

  export type PullRequestGetPayload<S extends boolean | null | undefined | PullRequestArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PullRequest :
    S extends undefined ? never :
    S extends { include: any } & (PullRequestArgs | PullRequestFindManyArgs)
    ? PullRequest  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'repository' ? RepositoryGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PullRequestArgs | PullRequestFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'repository' ? RepositoryGetPayload<S['select'][P]> :  P extends keyof PullRequest ? PullRequest[P] : never
  } 
      : PullRequest


  type PullRequestCountArgs = Merge<
    Omit<PullRequestFindManyArgs, 'select' | 'include'> & {
      select?: PullRequestCountAggregateInputType | true
    }
  >

  export interface PullRequestDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one PullRequest that matches the filter.
     * @param {PullRequestFindUniqueArgs} args - Arguments to find a PullRequest
     * @example
     * // Get one PullRequest
     * const pullRequest = await prisma.pullRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PullRequestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PullRequestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PullRequest'> extends True ? Prisma__PullRequestClient<PullRequestGetPayload<T>> : Prisma__PullRequestClient<PullRequestGetPayload<T> | null, null>

    /**
     * Find one PullRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PullRequestFindUniqueOrThrowArgs} args - Arguments to find a PullRequest
     * @example
     * // Get one PullRequest
     * const pullRequest = await prisma.pullRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PullRequestFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PullRequestFindUniqueOrThrowArgs>
    ): Prisma__PullRequestClient<PullRequestGetPayload<T>>

    /**
     * Find the first PullRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestFindFirstArgs} args - Arguments to find a PullRequest
     * @example
     * // Get one PullRequest
     * const pullRequest = await prisma.pullRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PullRequestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PullRequestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PullRequest'> extends True ? Prisma__PullRequestClient<PullRequestGetPayload<T>> : Prisma__PullRequestClient<PullRequestGetPayload<T> | null, null>

    /**
     * Find the first PullRequest that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestFindFirstOrThrowArgs} args - Arguments to find a PullRequest
     * @example
     * // Get one PullRequest
     * const pullRequest = await prisma.pullRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PullRequestFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PullRequestFindFirstOrThrowArgs>
    ): Prisma__PullRequestClient<PullRequestGetPayload<T>>

    /**
     * Find zero or more PullRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PullRequests
     * const pullRequests = await prisma.pullRequest.findMany()
     * 
     * // Get first 10 PullRequests
     * const pullRequests = await prisma.pullRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pullRequestWithIdOnly = await prisma.pullRequest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PullRequestFindManyArgs>(
      args?: SelectSubset<T, PullRequestFindManyArgs>
    ): PrismaPromise<Array<PullRequestGetPayload<T>>>

    /**
     * Create a PullRequest.
     * @param {PullRequestCreateArgs} args - Arguments to create a PullRequest.
     * @example
     * // Create one PullRequest
     * const PullRequest = await prisma.pullRequest.create({
     *   data: {
     *     // ... data to create a PullRequest
     *   }
     * })
     * 
    **/
    create<T extends PullRequestCreateArgs>(
      args: SelectSubset<T, PullRequestCreateArgs>
    ): Prisma__PullRequestClient<PullRequestGetPayload<T>>

    /**
     * Create many PullRequests.
     *     @param {PullRequestCreateManyArgs} args - Arguments to create many PullRequests.
     *     @example
     *     // Create many PullRequests
     *     const pullRequest = await prisma.pullRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PullRequestCreateManyArgs>(
      args?: SelectSubset<T, PullRequestCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PullRequest.
     * @param {PullRequestDeleteArgs} args - Arguments to delete one PullRequest.
     * @example
     * // Delete one PullRequest
     * const PullRequest = await prisma.pullRequest.delete({
     *   where: {
     *     // ... filter to delete one PullRequest
     *   }
     * })
     * 
    **/
    delete<T extends PullRequestDeleteArgs>(
      args: SelectSubset<T, PullRequestDeleteArgs>
    ): Prisma__PullRequestClient<PullRequestGetPayload<T>>

    /**
     * Update one PullRequest.
     * @param {PullRequestUpdateArgs} args - Arguments to update one PullRequest.
     * @example
     * // Update one PullRequest
     * const pullRequest = await prisma.pullRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PullRequestUpdateArgs>(
      args: SelectSubset<T, PullRequestUpdateArgs>
    ): Prisma__PullRequestClient<PullRequestGetPayload<T>>

    /**
     * Delete zero or more PullRequests.
     * @param {PullRequestDeleteManyArgs} args - Arguments to filter PullRequests to delete.
     * @example
     * // Delete a few PullRequests
     * const { count } = await prisma.pullRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PullRequestDeleteManyArgs>(
      args?: SelectSubset<T, PullRequestDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PullRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PullRequests
     * const pullRequest = await prisma.pullRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PullRequestUpdateManyArgs>(
      args: SelectSubset<T, PullRequestUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PullRequest.
     * @param {PullRequestUpsertArgs} args - Arguments to update or create a PullRequest.
     * @example
     * // Update or create a PullRequest
     * const pullRequest = await prisma.pullRequest.upsert({
     *   create: {
     *     // ... data to create a PullRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PullRequest we want to update
     *   }
     * })
    **/
    upsert<T extends PullRequestUpsertArgs>(
      args: SelectSubset<T, PullRequestUpsertArgs>
    ): Prisma__PullRequestClient<PullRequestGetPayload<T>>

    /**
     * Count the number of PullRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestCountArgs} args - Arguments to filter PullRequests to count.
     * @example
     * // Count the number of PullRequests
     * const count = await prisma.pullRequest.count({
     *   where: {
     *     // ... the filter for the PullRequests we want to count
     *   }
     * })
    **/
    count<T extends PullRequestCountArgs>(
      args?: Subset<T, PullRequestCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PullRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PullRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PullRequestAggregateArgs>(args: Subset<T, PullRequestAggregateArgs>): PrismaPromise<GetPullRequestAggregateType<T>>

    /**
     * Group by PullRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PullRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PullRequestGroupByArgs['orderBy'] }
        : { orderBy?: PullRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PullRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPullRequestGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PullRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PullRequestClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    repository<T extends RepositoryArgs= {}>(args?: Subset<T, RepositoryArgs>): Prisma__RepositoryClient<RepositoryGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PullRequest base type for findUnique actions
   */
  export type PullRequestFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PullRequest
     * 
    **/
    select?: PullRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PullRequestInclude | null
    /**
     * Filter, which PullRequest to fetch.
     * 
    **/
    where: PullRequestWhereUniqueInput
  }

  /**
   * PullRequest: findUnique
   */
  export interface PullRequestFindUniqueArgs extends PullRequestFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PullRequest findUniqueOrThrow
   */
  export type PullRequestFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PullRequest
     * 
    **/
    select?: PullRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PullRequestInclude | null
    /**
     * Filter, which PullRequest to fetch.
     * 
    **/
    where: PullRequestWhereUniqueInput
  }


  /**
   * PullRequest base type for findFirst actions
   */
  export type PullRequestFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PullRequest
     * 
    **/
    select?: PullRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PullRequestInclude | null
    /**
     * Filter, which PullRequest to fetch.
     * 
    **/
    where?: PullRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullRequests to fetch.
     * 
    **/
    orderBy?: Enumerable<PullRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PullRequests.
     * 
    **/
    cursor?: PullRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullRequests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullRequests.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PullRequests.
     * 
    **/
    distinct?: Enumerable<PullRequestScalarFieldEnum>
  }

  /**
   * PullRequest: findFirst
   */
  export interface PullRequestFindFirstArgs extends PullRequestFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PullRequest findFirstOrThrow
   */
  export type PullRequestFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PullRequest
     * 
    **/
    select?: PullRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PullRequestInclude | null
    /**
     * Filter, which PullRequest to fetch.
     * 
    **/
    where?: PullRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullRequests to fetch.
     * 
    **/
    orderBy?: Enumerable<PullRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PullRequests.
     * 
    **/
    cursor?: PullRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullRequests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullRequests.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PullRequests.
     * 
    **/
    distinct?: Enumerable<PullRequestScalarFieldEnum>
  }


  /**
   * PullRequest findMany
   */
  export type PullRequestFindManyArgs = {
    /**
     * Select specific fields to fetch from the PullRequest
     * 
    **/
    select?: PullRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PullRequestInclude | null
    /**
     * Filter, which PullRequests to fetch.
     * 
    **/
    where?: PullRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullRequests to fetch.
     * 
    **/
    orderBy?: Enumerable<PullRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PullRequests.
     * 
    **/
    cursor?: PullRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullRequests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullRequests.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PullRequestScalarFieldEnum>
  }


  /**
   * PullRequest create
   */
  export type PullRequestCreateArgs = {
    /**
     * Select specific fields to fetch from the PullRequest
     * 
    **/
    select?: PullRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PullRequestInclude | null
    /**
     * The data needed to create a PullRequest.
     * 
    **/
    data: XOR<PullRequestCreateInput, PullRequestUncheckedCreateInput>
  }


  /**
   * PullRequest createMany
   */
  export type PullRequestCreateManyArgs = {
    /**
     * The data used to create many PullRequests.
     * 
    **/
    data: Enumerable<PullRequestCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PullRequest update
   */
  export type PullRequestUpdateArgs = {
    /**
     * Select specific fields to fetch from the PullRequest
     * 
    **/
    select?: PullRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PullRequestInclude | null
    /**
     * The data needed to update a PullRequest.
     * 
    **/
    data: XOR<PullRequestUpdateInput, PullRequestUncheckedUpdateInput>
    /**
     * Choose, which PullRequest to update.
     * 
    **/
    where: PullRequestWhereUniqueInput
  }


  /**
   * PullRequest updateMany
   */
  export type PullRequestUpdateManyArgs = {
    /**
     * The data used to update PullRequests.
     * 
    **/
    data: XOR<PullRequestUpdateManyMutationInput, PullRequestUncheckedUpdateManyInput>
    /**
     * Filter which PullRequests to update
     * 
    **/
    where?: PullRequestWhereInput
  }


  /**
   * PullRequest upsert
   */
  export type PullRequestUpsertArgs = {
    /**
     * Select specific fields to fetch from the PullRequest
     * 
    **/
    select?: PullRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PullRequestInclude | null
    /**
     * The filter to search for the PullRequest to update in case it exists.
     * 
    **/
    where: PullRequestWhereUniqueInput
    /**
     * In case the PullRequest found by the `where` argument doesn't exist, create a new PullRequest with this data.
     * 
    **/
    create: XOR<PullRequestCreateInput, PullRequestUncheckedCreateInput>
    /**
     * In case the PullRequest was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PullRequestUpdateInput, PullRequestUncheckedUpdateInput>
  }


  /**
   * PullRequest delete
   */
  export type PullRequestDeleteArgs = {
    /**
     * Select specific fields to fetch from the PullRequest
     * 
    **/
    select?: PullRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PullRequestInclude | null
    /**
     * Filter which PullRequest to delete.
     * 
    **/
    where: PullRequestWhereUniqueInput
  }


  /**
   * PullRequest deleteMany
   */
  export type PullRequestDeleteManyArgs = {
    /**
     * Filter which PullRequests to delete
     * 
    **/
    where?: PullRequestWhereInput
  }


  /**
   * PullRequest without action
   */
  export type PullRequestArgs = {
    /**
     * Select specific fields to fetch from the PullRequest
     * 
    **/
    select?: PullRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PullRequestInclude | null
  }



  /**
   * Model Repository
   */


  export type AggregateRepository = {
    _count: RepositoryCountAggregateOutputType | null
    _avg: RepositoryAvgAggregateOutputType | null
    _sum: RepositorySumAggregateOutputType | null
    _min: RepositoryMinAggregateOutputType | null
    _max: RepositoryMaxAggregateOutputType | null
  }

  export type RepositoryAvgAggregateOutputType = {
    id: number | null
  }

  export type RepositorySumAggregateOutputType = {
    id: number | null
  }

  export type RepositoryMinAggregateOutputType = {
    id: number | null
    html_url: string | null
  }

  export type RepositoryMaxAggregateOutputType = {
    id: number | null
    html_url: string | null
  }

  export type RepositoryCountAggregateOutputType = {
    id: number
    html_url: number
    _all: number
  }


  export type RepositoryAvgAggregateInputType = {
    id?: true
  }

  export type RepositorySumAggregateInputType = {
    id?: true
  }

  export type RepositoryMinAggregateInputType = {
    id?: true
    html_url?: true
  }

  export type RepositoryMaxAggregateInputType = {
    id?: true
    html_url?: true
  }

  export type RepositoryCountAggregateInputType = {
    id?: true
    html_url?: true
    _all?: true
  }

  export type RepositoryAggregateArgs = {
    /**
     * Filter which Repository to aggregate.
     * 
    **/
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     * 
    **/
    orderBy?: Enumerable<RepositoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Repositories
    **/
    _count?: true | RepositoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepositoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepositorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepositoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepositoryMaxAggregateInputType
  }

  export type GetRepositoryAggregateType<T extends RepositoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRepository]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepository[P]>
      : GetScalarType<T[P], AggregateRepository[P]>
  }




  export type RepositoryGroupByArgs = {
    where?: RepositoryWhereInput
    orderBy?: Enumerable<RepositoryOrderByWithAggregationInput>
    by: Array<RepositoryScalarFieldEnum>
    having?: RepositoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepositoryCountAggregateInputType | true
    _avg?: RepositoryAvgAggregateInputType
    _sum?: RepositorySumAggregateInputType
    _min?: RepositoryMinAggregateInputType
    _max?: RepositoryMaxAggregateInputType
  }


  export type RepositoryGroupByOutputType = {
    id: number
    html_url: string
    _count: RepositoryCountAggregateOutputType | null
    _avg: RepositoryAvgAggregateOutputType | null
    _sum: RepositorySumAggregateOutputType | null
    _min: RepositoryMinAggregateOutputType | null
    _max: RepositoryMaxAggregateOutputType | null
  }

  type GetRepositoryGroupByPayload<T extends RepositoryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RepositoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepositoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepositoryGroupByOutputType[P]>
            : GetScalarType<T[P], RepositoryGroupByOutputType[P]>
        }
      >
    >


  export type RepositorySelect = {
    id?: boolean
    html_url?: boolean
    PullRequest?: boolean | PullRequestFindManyArgs
    _count?: boolean | RepositoryCountOutputTypeArgs
  }


  export type RepositoryInclude = {
    PullRequest?: boolean | PullRequestFindManyArgs
    _count?: boolean | RepositoryCountOutputTypeArgs
  } 

  export type RepositoryGetPayload<S extends boolean | null | undefined | RepositoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Repository :
    S extends undefined ? never :
    S extends { include: any } & (RepositoryArgs | RepositoryFindManyArgs)
    ? Repository  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'PullRequest' ? Array < PullRequestGetPayload<S['include'][P]>>  :
        P extends '_count' ? RepositoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RepositoryArgs | RepositoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'PullRequest' ? Array < PullRequestGetPayload<S['select'][P]>>  :
        P extends '_count' ? RepositoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Repository ? Repository[P] : never
  } 
      : Repository


  type RepositoryCountArgs = Merge<
    Omit<RepositoryFindManyArgs, 'select' | 'include'> & {
      select?: RepositoryCountAggregateInputType | true
    }
  >

  export interface RepositoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Repository that matches the filter.
     * @param {RepositoryFindUniqueArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RepositoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RepositoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Repository'> extends True ? Prisma__RepositoryClient<RepositoryGetPayload<T>> : Prisma__RepositoryClient<RepositoryGetPayload<T> | null, null>

    /**
     * Find one Repository that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RepositoryFindUniqueOrThrowArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RepositoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RepositoryFindUniqueOrThrowArgs>
    ): Prisma__RepositoryClient<RepositoryGetPayload<T>>

    /**
     * Find the first Repository that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindFirstArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RepositoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RepositoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Repository'> extends True ? Prisma__RepositoryClient<RepositoryGetPayload<T>> : Prisma__RepositoryClient<RepositoryGetPayload<T> | null, null>

    /**
     * Find the first Repository that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindFirstOrThrowArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RepositoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RepositoryFindFirstOrThrowArgs>
    ): Prisma__RepositoryClient<RepositoryGetPayload<T>>

    /**
     * Find zero or more Repositories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repositories
     * const repositories = await prisma.repository.findMany()
     * 
     * // Get first 10 Repositories
     * const repositories = await prisma.repository.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repositoryWithIdOnly = await prisma.repository.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RepositoryFindManyArgs>(
      args?: SelectSubset<T, RepositoryFindManyArgs>
    ): PrismaPromise<Array<RepositoryGetPayload<T>>>

    /**
     * Create a Repository.
     * @param {RepositoryCreateArgs} args - Arguments to create a Repository.
     * @example
     * // Create one Repository
     * const Repository = await prisma.repository.create({
     *   data: {
     *     // ... data to create a Repository
     *   }
     * })
     * 
    **/
    create<T extends RepositoryCreateArgs>(
      args: SelectSubset<T, RepositoryCreateArgs>
    ): Prisma__RepositoryClient<RepositoryGetPayload<T>>

    /**
     * Create many Repositories.
     *     @param {RepositoryCreateManyArgs} args - Arguments to create many Repositories.
     *     @example
     *     // Create many Repositories
     *     const repository = await prisma.repository.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RepositoryCreateManyArgs>(
      args?: SelectSubset<T, RepositoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Repository.
     * @param {RepositoryDeleteArgs} args - Arguments to delete one Repository.
     * @example
     * // Delete one Repository
     * const Repository = await prisma.repository.delete({
     *   where: {
     *     // ... filter to delete one Repository
     *   }
     * })
     * 
    **/
    delete<T extends RepositoryDeleteArgs>(
      args: SelectSubset<T, RepositoryDeleteArgs>
    ): Prisma__RepositoryClient<RepositoryGetPayload<T>>

    /**
     * Update one Repository.
     * @param {RepositoryUpdateArgs} args - Arguments to update one Repository.
     * @example
     * // Update one Repository
     * const repository = await prisma.repository.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RepositoryUpdateArgs>(
      args: SelectSubset<T, RepositoryUpdateArgs>
    ): Prisma__RepositoryClient<RepositoryGetPayload<T>>

    /**
     * Delete zero or more Repositories.
     * @param {RepositoryDeleteManyArgs} args - Arguments to filter Repositories to delete.
     * @example
     * // Delete a few Repositories
     * const { count } = await prisma.repository.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RepositoryDeleteManyArgs>(
      args?: SelectSubset<T, RepositoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repositories
     * const repository = await prisma.repository.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RepositoryUpdateManyArgs>(
      args: SelectSubset<T, RepositoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Repository.
     * @param {RepositoryUpsertArgs} args - Arguments to update or create a Repository.
     * @example
     * // Update or create a Repository
     * const repository = await prisma.repository.upsert({
     *   create: {
     *     // ... data to create a Repository
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Repository we want to update
     *   }
     * })
    **/
    upsert<T extends RepositoryUpsertArgs>(
      args: SelectSubset<T, RepositoryUpsertArgs>
    ): Prisma__RepositoryClient<RepositoryGetPayload<T>>

    /**
     * Count the number of Repositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryCountArgs} args - Arguments to filter Repositories to count.
     * @example
     * // Count the number of Repositories
     * const count = await prisma.repository.count({
     *   where: {
     *     // ... the filter for the Repositories we want to count
     *   }
     * })
    **/
    count<T extends RepositoryCountArgs>(
      args?: Subset<T, RepositoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepositoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Repository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RepositoryAggregateArgs>(args: Subset<T, RepositoryAggregateArgs>): PrismaPromise<GetRepositoryAggregateType<T>>

    /**
     * Group by Repository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RepositoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepositoryGroupByArgs['orderBy'] }
        : { orderBy?: RepositoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RepositoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepositoryGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Repository.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RepositoryClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    PullRequest<T extends PullRequestFindManyArgs= {}>(args?: Subset<T, PullRequestFindManyArgs>): PrismaPromise<Array<PullRequestGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Repository base type for findUnique actions
   */
  export type RepositoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Repository
     * 
    **/
    select?: RepositorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RepositoryInclude | null
    /**
     * Filter, which Repository to fetch.
     * 
    **/
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository: findUnique
   */
  export interface RepositoryFindUniqueArgs extends RepositoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Repository findUniqueOrThrow
   */
  export type RepositoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Repository
     * 
    **/
    select?: RepositorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RepositoryInclude | null
    /**
     * Filter, which Repository to fetch.
     * 
    **/
    where: RepositoryWhereUniqueInput
  }


  /**
   * Repository base type for findFirst actions
   */
  export type RepositoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Repository
     * 
    **/
    select?: RepositorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RepositoryInclude | null
    /**
     * Filter, which Repository to fetch.
     * 
    **/
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     * 
    **/
    orderBy?: Enumerable<RepositoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repositories.
     * 
    **/
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repositories.
     * 
    **/
    distinct?: Enumerable<RepositoryScalarFieldEnum>
  }

  /**
   * Repository: findFirst
   */
  export interface RepositoryFindFirstArgs extends RepositoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Repository findFirstOrThrow
   */
  export type RepositoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Repository
     * 
    **/
    select?: RepositorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RepositoryInclude | null
    /**
     * Filter, which Repository to fetch.
     * 
    **/
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     * 
    **/
    orderBy?: Enumerable<RepositoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repositories.
     * 
    **/
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repositories.
     * 
    **/
    distinct?: Enumerable<RepositoryScalarFieldEnum>
  }


  /**
   * Repository findMany
   */
  export type RepositoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Repository
     * 
    **/
    select?: RepositorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RepositoryInclude | null
    /**
     * Filter, which Repositories to fetch.
     * 
    **/
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     * 
    **/
    orderBy?: Enumerable<RepositoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Repositories.
     * 
    **/
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RepositoryScalarFieldEnum>
  }


  /**
   * Repository create
   */
  export type RepositoryCreateArgs = {
    /**
     * Select specific fields to fetch from the Repository
     * 
    **/
    select?: RepositorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RepositoryInclude | null
    /**
     * The data needed to create a Repository.
     * 
    **/
    data: XOR<RepositoryCreateInput, RepositoryUncheckedCreateInput>
  }


  /**
   * Repository createMany
   */
  export type RepositoryCreateManyArgs = {
    /**
     * The data used to create many Repositories.
     * 
    **/
    data: Enumerable<RepositoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Repository update
   */
  export type RepositoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Repository
     * 
    **/
    select?: RepositorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RepositoryInclude | null
    /**
     * The data needed to update a Repository.
     * 
    **/
    data: XOR<RepositoryUpdateInput, RepositoryUncheckedUpdateInput>
    /**
     * Choose, which Repository to update.
     * 
    **/
    where: RepositoryWhereUniqueInput
  }


  /**
   * Repository updateMany
   */
  export type RepositoryUpdateManyArgs = {
    /**
     * The data used to update Repositories.
     * 
    **/
    data: XOR<RepositoryUpdateManyMutationInput, RepositoryUncheckedUpdateManyInput>
    /**
     * Filter which Repositories to update
     * 
    **/
    where?: RepositoryWhereInput
  }


  /**
   * Repository upsert
   */
  export type RepositoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Repository
     * 
    **/
    select?: RepositorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RepositoryInclude | null
    /**
     * The filter to search for the Repository to update in case it exists.
     * 
    **/
    where: RepositoryWhereUniqueInput
    /**
     * In case the Repository found by the `where` argument doesn't exist, create a new Repository with this data.
     * 
    **/
    create: XOR<RepositoryCreateInput, RepositoryUncheckedCreateInput>
    /**
     * In case the Repository was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RepositoryUpdateInput, RepositoryUncheckedUpdateInput>
  }


  /**
   * Repository delete
   */
  export type RepositoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Repository
     * 
    **/
    select?: RepositorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RepositoryInclude | null
    /**
     * Filter which Repository to delete.
     * 
    **/
    where: RepositoryWhereUniqueInput
  }


  /**
   * Repository deleteMany
   */
  export type RepositoryDeleteManyArgs = {
    /**
     * Filter which Repositories to delete
     * 
    **/
    where?: RepositoryWhereInput
  }


  /**
   * Repository without action
   */
  export type RepositoryArgs = {
    /**
     * Select specific fields to fetch from the Repository
     * 
    **/
    select?: RepositorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RepositoryInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const PullRequestScalarFieldEnum: {
    id: 'id',
    title: 'title',
    body: 'body',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    state: 'state',
    author: 'author',
    authorUrl: 'authorUrl',
    authorAvatarUrl: 'authorAvatarUrl',
    repositoryId: 'repositoryId'
  };

  export type PullRequestScalarFieldEnum = (typeof PullRequestScalarFieldEnum)[keyof typeof PullRequestScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RepositoryScalarFieldEnum: {
    id: 'id',
    html_url: 'html_url'
  };

  export type RepositoryScalarFieldEnum = (typeof RepositoryScalarFieldEnum)[keyof typeof RepositoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type PullRequestWhereInput = {
    AND?: Enumerable<PullRequestWhereInput>
    OR?: Enumerable<PullRequestWhereInput>
    NOT?: Enumerable<PullRequestWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    body?: StringNullableFilter | string | null
    url?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    state?: StringFilter | string
    author?: StringFilter | string
    authorUrl?: StringFilter | string
    authorAvatarUrl?: StringFilter | string
    repository?: XOR<RepositoryRelationFilter, RepositoryWhereInput>
    repositoryId?: IntFilter | number
  }

  export type PullRequestOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    state?: SortOrder
    author?: SortOrder
    authorUrl?: SortOrder
    authorAvatarUrl?: SortOrder
    repository?: RepositoryOrderByWithRelationInput
    repositoryId?: SortOrder
  }

  export type PullRequestWhereUniqueInput = {
    id?: number
  }

  export type PullRequestOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    state?: SortOrder
    author?: SortOrder
    authorUrl?: SortOrder
    authorAvatarUrl?: SortOrder
    repositoryId?: SortOrder
    _count?: PullRequestCountOrderByAggregateInput
    _avg?: PullRequestAvgOrderByAggregateInput
    _max?: PullRequestMaxOrderByAggregateInput
    _min?: PullRequestMinOrderByAggregateInput
    _sum?: PullRequestSumOrderByAggregateInput
  }

  export type PullRequestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PullRequestScalarWhereWithAggregatesInput>
    OR?: Enumerable<PullRequestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PullRequestScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    body?: StringNullableWithAggregatesFilter | string | null
    url?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    state?: StringWithAggregatesFilter | string
    author?: StringWithAggregatesFilter | string
    authorUrl?: StringWithAggregatesFilter | string
    authorAvatarUrl?: StringWithAggregatesFilter | string
    repositoryId?: IntWithAggregatesFilter | number
  }

  export type RepositoryWhereInput = {
    AND?: Enumerable<RepositoryWhereInput>
    OR?: Enumerable<RepositoryWhereInput>
    NOT?: Enumerable<RepositoryWhereInput>
    id?: IntFilter | number
    html_url?: StringFilter | string
    PullRequest?: PullRequestListRelationFilter
  }

  export type RepositoryOrderByWithRelationInput = {
    id?: SortOrder
    html_url?: SortOrder
    PullRequest?: PullRequestOrderByRelationAggregateInput
  }

  export type RepositoryWhereUniqueInput = {
    id?: number
  }

  export type RepositoryOrderByWithAggregationInput = {
    id?: SortOrder
    html_url?: SortOrder
    _count?: RepositoryCountOrderByAggregateInput
    _avg?: RepositoryAvgOrderByAggregateInput
    _max?: RepositoryMaxOrderByAggregateInput
    _min?: RepositoryMinOrderByAggregateInput
    _sum?: RepositorySumOrderByAggregateInput
  }

  export type RepositoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RepositoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<RepositoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RepositoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    html_url?: StringWithAggregatesFilter | string
  }

  export type PullRequestCreateInput = {
    id: number
    title: string
    body?: string | null
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    state: string
    author: string
    authorUrl: string
    authorAvatarUrl: string
    repository: RepositoryCreateNestedOneWithoutPullRequestInput
  }

  export type PullRequestUncheckedCreateInput = {
    id: number
    title: string
    body?: string | null
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    state: string
    author: string
    authorUrl: string
    authorAvatarUrl: string
    repositoryId: number
  }

  export type PullRequestUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    authorUrl?: StringFieldUpdateOperationsInput | string
    authorAvatarUrl?: StringFieldUpdateOperationsInput | string
    repository?: RepositoryUpdateOneRequiredWithoutPullRequestNestedInput
  }

  export type PullRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    authorUrl?: StringFieldUpdateOperationsInput | string
    authorAvatarUrl?: StringFieldUpdateOperationsInput | string
    repositoryId?: IntFieldUpdateOperationsInput | number
  }

  export type PullRequestCreateManyInput = {
    id: number
    title: string
    body?: string | null
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    state: string
    author: string
    authorUrl: string
    authorAvatarUrl: string
    repositoryId: number
  }

  export type PullRequestUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    authorUrl?: StringFieldUpdateOperationsInput | string
    authorAvatarUrl?: StringFieldUpdateOperationsInput | string
  }

  export type PullRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    authorUrl?: StringFieldUpdateOperationsInput | string
    authorAvatarUrl?: StringFieldUpdateOperationsInput | string
    repositoryId?: IntFieldUpdateOperationsInput | number
  }

  export type RepositoryCreateInput = {
    id: number
    html_url: string
    PullRequest?: PullRequestCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryUncheckedCreateInput = {
    id: number
    html_url: string
    PullRequest?: PullRequestUncheckedCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    html_url?: StringFieldUpdateOperationsInput | string
    PullRequest?: PullRequestUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    html_url?: StringFieldUpdateOperationsInput | string
    PullRequest?: PullRequestUncheckedUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryCreateManyInput = {
    id: number
    html_url: string
  }

  export type RepositoryUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    html_url?: StringFieldUpdateOperationsInput | string
  }

  export type RepositoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    html_url?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type RepositoryRelationFilter = {
    is?: RepositoryWhereInput
    isNot?: RepositoryWhereInput
  }

  export type PullRequestCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    state?: SortOrder
    author?: SortOrder
    authorUrl?: SortOrder
    authorAvatarUrl?: SortOrder
    repositoryId?: SortOrder
  }

  export type PullRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    repositoryId?: SortOrder
  }

  export type PullRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    state?: SortOrder
    author?: SortOrder
    authorUrl?: SortOrder
    authorAvatarUrl?: SortOrder
    repositoryId?: SortOrder
  }

  export type PullRequestMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    state?: SortOrder
    author?: SortOrder
    authorUrl?: SortOrder
    authorAvatarUrl?: SortOrder
    repositoryId?: SortOrder
  }

  export type PullRequestSumOrderByAggregateInput = {
    id?: SortOrder
    repositoryId?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type PullRequestListRelationFilter = {
    every?: PullRequestWhereInput
    some?: PullRequestWhereInput
    none?: PullRequestWhereInput
  }

  export type PullRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RepositoryCountOrderByAggregateInput = {
    id?: SortOrder
    html_url?: SortOrder
  }

  export type RepositoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RepositoryMaxOrderByAggregateInput = {
    id?: SortOrder
    html_url?: SortOrder
  }

  export type RepositoryMinOrderByAggregateInput = {
    id?: SortOrder
    html_url?: SortOrder
  }

  export type RepositorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RepositoryCreateNestedOneWithoutPullRequestInput = {
    create?: XOR<RepositoryCreateWithoutPullRequestInput, RepositoryUncheckedCreateWithoutPullRequestInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutPullRequestInput
    connect?: RepositoryWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RepositoryUpdateOneRequiredWithoutPullRequestNestedInput = {
    create?: XOR<RepositoryCreateWithoutPullRequestInput, RepositoryUncheckedCreateWithoutPullRequestInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutPullRequestInput
    upsert?: RepositoryUpsertWithoutPullRequestInput
    connect?: RepositoryWhereUniqueInput
    update?: XOR<RepositoryUpdateWithoutPullRequestInput, RepositoryUncheckedUpdateWithoutPullRequestInput>
  }

  export type PullRequestCreateNestedManyWithoutRepositoryInput = {
    create?: XOR<Enumerable<PullRequestCreateWithoutRepositoryInput>, Enumerable<PullRequestUncheckedCreateWithoutRepositoryInput>>
    connectOrCreate?: Enumerable<PullRequestCreateOrConnectWithoutRepositoryInput>
    createMany?: PullRequestCreateManyRepositoryInputEnvelope
    connect?: Enumerable<PullRequestWhereUniqueInput>
  }

  export type PullRequestUncheckedCreateNestedManyWithoutRepositoryInput = {
    create?: XOR<Enumerable<PullRequestCreateWithoutRepositoryInput>, Enumerable<PullRequestUncheckedCreateWithoutRepositoryInput>>
    connectOrCreate?: Enumerable<PullRequestCreateOrConnectWithoutRepositoryInput>
    createMany?: PullRequestCreateManyRepositoryInputEnvelope
    connect?: Enumerable<PullRequestWhereUniqueInput>
  }

  export type PullRequestUpdateManyWithoutRepositoryNestedInput = {
    create?: XOR<Enumerable<PullRequestCreateWithoutRepositoryInput>, Enumerable<PullRequestUncheckedCreateWithoutRepositoryInput>>
    connectOrCreate?: Enumerable<PullRequestCreateOrConnectWithoutRepositoryInput>
    upsert?: Enumerable<PullRequestUpsertWithWhereUniqueWithoutRepositoryInput>
    createMany?: PullRequestCreateManyRepositoryInputEnvelope
    set?: Enumerable<PullRequestWhereUniqueInput>
    disconnect?: Enumerable<PullRequestWhereUniqueInput>
    delete?: Enumerable<PullRequestWhereUniqueInput>
    connect?: Enumerable<PullRequestWhereUniqueInput>
    update?: Enumerable<PullRequestUpdateWithWhereUniqueWithoutRepositoryInput>
    updateMany?: Enumerable<PullRequestUpdateManyWithWhereWithoutRepositoryInput>
    deleteMany?: Enumerable<PullRequestScalarWhereInput>
  }

  export type PullRequestUncheckedUpdateManyWithoutRepositoryNestedInput = {
    create?: XOR<Enumerable<PullRequestCreateWithoutRepositoryInput>, Enumerable<PullRequestUncheckedCreateWithoutRepositoryInput>>
    connectOrCreate?: Enumerable<PullRequestCreateOrConnectWithoutRepositoryInput>
    upsert?: Enumerable<PullRequestUpsertWithWhereUniqueWithoutRepositoryInput>
    createMany?: PullRequestCreateManyRepositoryInputEnvelope
    set?: Enumerable<PullRequestWhereUniqueInput>
    disconnect?: Enumerable<PullRequestWhereUniqueInput>
    delete?: Enumerable<PullRequestWhereUniqueInput>
    connect?: Enumerable<PullRequestWhereUniqueInput>
    update?: Enumerable<PullRequestUpdateWithWhereUniqueWithoutRepositoryInput>
    updateMany?: Enumerable<PullRequestUpdateManyWithWhereWithoutRepositoryInput>
    deleteMany?: Enumerable<PullRequestScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type RepositoryCreateWithoutPullRequestInput = {
    id: number
    html_url: string
  }

  export type RepositoryUncheckedCreateWithoutPullRequestInput = {
    id: number
    html_url: string
  }

  export type RepositoryCreateOrConnectWithoutPullRequestInput = {
    where: RepositoryWhereUniqueInput
    create: XOR<RepositoryCreateWithoutPullRequestInput, RepositoryUncheckedCreateWithoutPullRequestInput>
  }

  export type RepositoryUpsertWithoutPullRequestInput = {
    update: XOR<RepositoryUpdateWithoutPullRequestInput, RepositoryUncheckedUpdateWithoutPullRequestInput>
    create: XOR<RepositoryCreateWithoutPullRequestInput, RepositoryUncheckedCreateWithoutPullRequestInput>
  }

  export type RepositoryUpdateWithoutPullRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    html_url?: StringFieldUpdateOperationsInput | string
  }

  export type RepositoryUncheckedUpdateWithoutPullRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    html_url?: StringFieldUpdateOperationsInput | string
  }

  export type PullRequestCreateWithoutRepositoryInput = {
    id: number
    title: string
    body?: string | null
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    state: string
    author: string
    authorUrl: string
    authorAvatarUrl: string
  }

  export type PullRequestUncheckedCreateWithoutRepositoryInput = {
    id: number
    title: string
    body?: string | null
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    state: string
    author: string
    authorUrl: string
    authorAvatarUrl: string
  }

  export type PullRequestCreateOrConnectWithoutRepositoryInput = {
    where: PullRequestWhereUniqueInput
    create: XOR<PullRequestCreateWithoutRepositoryInput, PullRequestUncheckedCreateWithoutRepositoryInput>
  }

  export type PullRequestCreateManyRepositoryInputEnvelope = {
    data: Enumerable<PullRequestCreateManyRepositoryInput>
    skipDuplicates?: boolean
  }

  export type PullRequestUpsertWithWhereUniqueWithoutRepositoryInput = {
    where: PullRequestWhereUniqueInput
    update: XOR<PullRequestUpdateWithoutRepositoryInput, PullRequestUncheckedUpdateWithoutRepositoryInput>
    create: XOR<PullRequestCreateWithoutRepositoryInput, PullRequestUncheckedCreateWithoutRepositoryInput>
  }

  export type PullRequestUpdateWithWhereUniqueWithoutRepositoryInput = {
    where: PullRequestWhereUniqueInput
    data: XOR<PullRequestUpdateWithoutRepositoryInput, PullRequestUncheckedUpdateWithoutRepositoryInput>
  }

  export type PullRequestUpdateManyWithWhereWithoutRepositoryInput = {
    where: PullRequestScalarWhereInput
    data: XOR<PullRequestUpdateManyMutationInput, PullRequestUncheckedUpdateManyWithoutPullRequestInput>
  }

  export type PullRequestScalarWhereInput = {
    AND?: Enumerable<PullRequestScalarWhereInput>
    OR?: Enumerable<PullRequestScalarWhereInput>
    NOT?: Enumerable<PullRequestScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    body?: StringNullableFilter | string | null
    url?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    state?: StringFilter | string
    author?: StringFilter | string
    authorUrl?: StringFilter | string
    authorAvatarUrl?: StringFilter | string
    repositoryId?: IntFilter | number
  }

  export type PullRequestCreateManyRepositoryInput = {
    id: number
    title: string
    body?: string | null
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    state: string
    author: string
    authorUrl: string
    authorAvatarUrl: string
  }

  export type PullRequestUpdateWithoutRepositoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    authorUrl?: StringFieldUpdateOperationsInput | string
    authorAvatarUrl?: StringFieldUpdateOperationsInput | string
  }

  export type PullRequestUncheckedUpdateWithoutRepositoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    authorUrl?: StringFieldUpdateOperationsInput | string
    authorAvatarUrl?: StringFieldUpdateOperationsInput | string
  }

  export type PullRequestUncheckedUpdateManyWithoutPullRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    authorUrl?: StringFieldUpdateOperationsInput | string
    authorAvatarUrl?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}