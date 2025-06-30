
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Note
 * 
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>
/**
 * Model NoteCollaborator
 * 
 */
export type NoteCollaborator = $Result.DefaultSelection<Prisma.$NoteCollaboratorPayload>
/**
 * Model UserPresence
 * 
 */
export type UserPresence = $Result.DefaultSelection<Prisma.$UserPresencePayload>
/**
 * Model NoteVersion
 * 
 */
export type NoteVersion = $Result.DefaultSelection<Prisma.$NoteVersionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Permission: {
  OWNER: 'OWNER',
  EDITOR: 'EDITOR',
  VIEWER: 'VIEWER'
};

export type Permission = (typeof Permission)[keyof typeof Permission]

}

export type Permission = $Enums.Permission

export const Permission: typeof $Enums.Permission

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<ExtArgs>;

  /**
   * `prisma.noteCollaborator`: Exposes CRUD operations for the **NoteCollaborator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NoteCollaborators
    * const noteCollaborators = await prisma.noteCollaborator.findMany()
    * ```
    */
  get noteCollaborator(): Prisma.NoteCollaboratorDelegate<ExtArgs>;

  /**
   * `prisma.userPresence`: Exposes CRUD operations for the **UserPresence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPresences
    * const userPresences = await prisma.userPresence.findMany()
    * ```
    */
  get userPresence(): Prisma.UserPresenceDelegate<ExtArgs>;

  /**
   * `prisma.noteVersion`: Exposes CRUD operations for the **NoteVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NoteVersions
    * const noteVersions = await prisma.noteVersion.findMany()
    * ```
    */
  get noteVersion(): Prisma.NoteVersionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Note: 'Note',
    NoteCollaborator: 'NoteCollaborator',
    UserPresence: 'UserPresence',
    NoteVersion: 'NoteVersion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "note" | "noteCollaborator" | "userPresence" | "noteVersion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Note: {
        payload: Prisma.$NotePayload<ExtArgs>
        fields: Prisma.NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          createMany: {
            args: Prisma.NoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
      NoteCollaborator: {
        payload: Prisma.$NoteCollaboratorPayload<ExtArgs>
        fields: Prisma.NoteCollaboratorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteCollaboratorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteCollaboratorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteCollaboratorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteCollaboratorPayload>
          }
          findFirst: {
            args: Prisma.NoteCollaboratorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteCollaboratorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteCollaboratorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteCollaboratorPayload>
          }
          findMany: {
            args: Prisma.NoteCollaboratorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteCollaboratorPayload>[]
          }
          create: {
            args: Prisma.NoteCollaboratorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteCollaboratorPayload>
          }
          createMany: {
            args: Prisma.NoteCollaboratorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteCollaboratorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteCollaboratorPayload>[]
          }
          delete: {
            args: Prisma.NoteCollaboratorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteCollaboratorPayload>
          }
          update: {
            args: Prisma.NoteCollaboratorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteCollaboratorPayload>
          }
          deleteMany: {
            args: Prisma.NoteCollaboratorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteCollaboratorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NoteCollaboratorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteCollaboratorPayload>
          }
          aggregate: {
            args: Prisma.NoteCollaboratorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNoteCollaborator>
          }
          groupBy: {
            args: Prisma.NoteCollaboratorGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteCollaboratorGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCollaboratorCountArgs<ExtArgs>
            result: $Utils.Optional<NoteCollaboratorCountAggregateOutputType> | number
          }
        }
      }
      UserPresence: {
        payload: Prisma.$UserPresencePayload<ExtArgs>
        fields: Prisma.UserPresenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPresenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPresencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPresenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPresencePayload>
          }
          findFirst: {
            args: Prisma.UserPresenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPresencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPresenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPresencePayload>
          }
          findMany: {
            args: Prisma.UserPresenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPresencePayload>[]
          }
          create: {
            args: Prisma.UserPresenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPresencePayload>
          }
          createMany: {
            args: Prisma.UserPresenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPresenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPresencePayload>[]
          }
          delete: {
            args: Prisma.UserPresenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPresencePayload>
          }
          update: {
            args: Prisma.UserPresenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPresencePayload>
          }
          deleteMany: {
            args: Prisma.UserPresenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPresenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserPresenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPresencePayload>
          }
          aggregate: {
            args: Prisma.UserPresenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPresence>
          }
          groupBy: {
            args: Prisma.UserPresenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPresenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPresenceCountArgs<ExtArgs>
            result: $Utils.Optional<UserPresenceCountAggregateOutputType> | number
          }
        }
      }
      NoteVersion: {
        payload: Prisma.$NoteVersionPayload<ExtArgs>
        fields: Prisma.NoteVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteVersionPayload>
          }
          findFirst: {
            args: Prisma.NoteVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteVersionPayload>
          }
          findMany: {
            args: Prisma.NoteVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteVersionPayload>[]
          }
          create: {
            args: Prisma.NoteVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteVersionPayload>
          }
          createMany: {
            args: Prisma.NoteVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteVersionPayload>[]
          }
          delete: {
            args: Prisma.NoteVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteVersionPayload>
          }
          update: {
            args: Prisma.NoteVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteVersionPayload>
          }
          deleteMany: {
            args: Prisma.NoteVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NoteVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteVersionPayload>
          }
          aggregate: {
            args: Prisma.NoteVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNoteVersion>
          }
          groupBy: {
            args: Prisma.NoteVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteVersionCountArgs<ExtArgs>
            result: $Utils.Optional<NoteVersionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
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
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    notes: number
    collaborators: number
    presences: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | UserCountOutputTypeCountNotesArgs
    collaborators?: boolean | UserCountOutputTypeCountCollaboratorsArgs
    presences?: boolean | UserCountOutputTypeCountPresencesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteCollaboratorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPresencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPresenceWhereInput
  }


  /**
   * Count Type NoteCountOutputType
   */

  export type NoteCountOutputType = {
    collaborators: number
    presences: number
    versions: number
  }

  export type NoteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collaborators?: boolean | NoteCountOutputTypeCountCollaboratorsArgs
    presences?: boolean | NoteCountOutputTypeCountPresencesArgs
    versions?: boolean | NoteCountOutputTypeCountVersionsArgs
  }

  // Custom InputTypes
  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteCountOutputType
     */
    select?: NoteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeCountCollaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteCollaboratorWhereInput
  }

  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeCountPresencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPresenceWhereInput
  }

  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteVersionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    firstName: string | null
    lastName: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    firstName: string | null
    lastName: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    firstName: number
    lastName: number
    avatar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    firstName?: true
    lastName?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    firstName?: true
    lastName?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    firstName?: true
    lastName?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    firstName: string
    lastName: string
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notes?: boolean | User$notesArgs<ExtArgs>
    collaborators?: boolean | User$collaboratorsArgs<ExtArgs>
    presences?: boolean | User$presencesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | User$notesArgs<ExtArgs>
    collaborators?: boolean | User$collaboratorsArgs<ExtArgs>
    presences?: boolean | User$presencesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      notes: Prisma.$NotePayload<ExtArgs>[]
      collaborators: Prisma.$NoteCollaboratorPayload<ExtArgs>[]
      presences: Prisma.$UserPresencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      firstName: string
      lastName: string
      avatar: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notes<T extends User$notesArgs<ExtArgs> = {}>(args?: Subset<T, User$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany"> | Null>
    collaborators<T extends User$collaboratorsArgs<ExtArgs> = {}>(args?: Subset<T, User$collaboratorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteCollaboratorPayload<ExtArgs>, T, "findMany"> | Null>
    presences<T extends User$presencesArgs<ExtArgs> = {}>(args?: Subset<T, User$presencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPresencePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.notes
   */
  export type User$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * User.collaborators
   */
  export type User$collaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteCollaborator
     */
    select?: NoteCollaboratorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteCollaboratorInclude<ExtArgs> | null
    where?: NoteCollaboratorWhereInput
    orderBy?: NoteCollaboratorOrderByWithRelationInput | NoteCollaboratorOrderByWithRelationInput[]
    cursor?: NoteCollaboratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteCollaboratorScalarFieldEnum | NoteCollaboratorScalarFieldEnum[]
  }

  /**
   * User.presences
   */
  export type User$presencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPresence
     */
    select?: UserPresenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresenceInclude<ExtArgs> | null
    where?: UserPresenceWhereInput
    orderBy?: UserPresenceOrderByWithRelationInput | UserPresenceOrderByWithRelationInput[]
    cursor?: UserPresenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPresenceScalarFieldEnum | UserPresenceScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    contentType: string | null
    isPublic: boolean | null
    ownerId: string | null
    lastEditedBy: string | null
    lastEditedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    contentType: string | null
    isPublic: boolean | null
    ownerId: string | null
    lastEditedBy: string | null
    lastEditedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteCountAggregateOutputType = {
    id: number
    title: number
    content: number
    contentType: number
    isPublic: number
    ownerId: number
    lastEditedBy: number
    lastEditedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NoteMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    contentType?: true
    isPublic?: true
    ownerId?: true
    lastEditedBy?: true
    lastEditedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    contentType?: true
    isPublic?: true
    ownerId?: true
    lastEditedBy?: true
    lastEditedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    contentType?: true
    isPublic?: true
    ownerId?: true
    lastEditedBy?: true
    lastEditedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithAggregationInput | NoteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    id: string
    title: string
    content: string
    contentType: string
    isPublic: boolean
    ownerId: string
    lastEditedBy: string | null
    lastEditedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: NoteCountAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    contentType?: boolean
    isPublic?: boolean
    ownerId?: boolean
    lastEditedBy?: boolean
    lastEditedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    collaborators?: boolean | Note$collaboratorsArgs<ExtArgs>
    presences?: boolean | Note$presencesArgs<ExtArgs>
    versions?: boolean | Note$versionsArgs<ExtArgs>
    _count?: boolean | NoteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    contentType?: boolean
    isPublic?: boolean
    ownerId?: boolean
    lastEditedBy?: boolean
    lastEditedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    contentType?: boolean
    isPublic?: boolean
    ownerId?: boolean
    lastEditedBy?: boolean
    lastEditedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    collaborators?: boolean | Note$collaboratorsArgs<ExtArgs>
    presences?: boolean | Note$presencesArgs<ExtArgs>
    versions?: boolean | Note$versionsArgs<ExtArgs>
    _count?: boolean | NoteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Note"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      collaborators: Prisma.$NoteCollaboratorPayload<ExtArgs>[]
      presences: Prisma.$UserPresencePayload<ExtArgs>[]
      versions: Prisma.$NoteVersionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      contentType: string
      isPublic: boolean
      ownerId: string
      lastEditedBy: string | null
      lastEditedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["note"]>
    composites: {}
  }

  type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> = $Result.GetResult<Prisma.$NotePayload, S>

  type NoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NoteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Note'], meta: { name: 'Note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteFindUniqueArgs>(args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteFindFirstArgs>(args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteWithIdOnly = await prisma.note.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteFindManyArgs>(args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
     */
    create<T extends NoteCreateArgs>(args: SelectSubset<T, NoteCreateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notes.
     * @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteCreateManyArgs>(args?: SelectSubset<T, NoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {NoteCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
     */
    delete<T extends NoteDeleteArgs>(args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteUpdateArgs>(args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteDeleteManyArgs>(args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteUpdateManyArgs>(args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
     */
    upsert<T extends NoteUpsertArgs>(args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
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
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Note model
   */
  readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    collaborators<T extends Note$collaboratorsArgs<ExtArgs> = {}>(args?: Subset<T, Note$collaboratorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteCollaboratorPayload<ExtArgs>, T, "findMany"> | Null>
    presences<T extends Note$presencesArgs<ExtArgs> = {}>(args?: Subset<T, Note$presencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPresencePayload<ExtArgs>, T, "findMany"> | Null>
    versions<T extends Note$versionsArgs<ExtArgs> = {}>(args?: Subset<T, Note$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteVersionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Note model
   */ 
  interface NoteFieldRefs {
    readonly id: FieldRef<"Note", 'String'>
    readonly title: FieldRef<"Note", 'String'>
    readonly content: FieldRef<"Note", 'String'>
    readonly contentType: FieldRef<"Note", 'String'>
    readonly isPublic: FieldRef<"Note", 'Boolean'>
    readonly ownerId: FieldRef<"Note", 'String'>
    readonly lastEditedBy: FieldRef<"Note", 'String'>
    readonly lastEditedAt: FieldRef<"Note", 'DateTime'>
    readonly createdAt: FieldRef<"Note", 'DateTime'>
    readonly updatedAt: FieldRef<"Note", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findMany
   */
  export type NoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note create
   */
  export type NoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }

  /**
   * Note createMany
   */
  export type NoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Note createManyAndReturn
   */
  export type NoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note update
   */
  export type NoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
  }

  /**
   * Note upsert
   */
  export type NoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }

  /**
   * Note delete
   */
  export type NoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
  }

  /**
   * Note.collaborators
   */
  export type Note$collaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteCollaborator
     */
    select?: NoteCollaboratorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteCollaboratorInclude<ExtArgs> | null
    where?: NoteCollaboratorWhereInput
    orderBy?: NoteCollaboratorOrderByWithRelationInput | NoteCollaboratorOrderByWithRelationInput[]
    cursor?: NoteCollaboratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteCollaboratorScalarFieldEnum | NoteCollaboratorScalarFieldEnum[]
  }

  /**
   * Note.presences
   */
  export type Note$presencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPresence
     */
    select?: UserPresenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresenceInclude<ExtArgs> | null
    where?: UserPresenceWhereInput
    orderBy?: UserPresenceOrderByWithRelationInput | UserPresenceOrderByWithRelationInput[]
    cursor?: UserPresenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPresenceScalarFieldEnum | UserPresenceScalarFieldEnum[]
  }

  /**
   * Note.versions
   */
  export type Note$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteVersion
     */
    select?: NoteVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteVersionInclude<ExtArgs> | null
    where?: NoteVersionWhereInput
    orderBy?: NoteVersionOrderByWithRelationInput | NoteVersionOrderByWithRelationInput[]
    cursor?: NoteVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteVersionScalarFieldEnum | NoteVersionScalarFieldEnum[]
  }

  /**
   * Note without action
   */
  export type NoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
  }


  /**
   * Model NoteCollaborator
   */

  export type AggregateNoteCollaborator = {
    _count: NoteCollaboratorCountAggregateOutputType | null
    _min: NoteCollaboratorMinAggregateOutputType | null
    _max: NoteCollaboratorMaxAggregateOutputType | null
  }

  export type NoteCollaboratorMinAggregateOutputType = {
    id: string | null
    noteId: string | null
    userId: string | null
    permission: $Enums.Permission | null
    addedAt: Date | null
  }

  export type NoteCollaboratorMaxAggregateOutputType = {
    id: string | null
    noteId: string | null
    userId: string | null
    permission: $Enums.Permission | null
    addedAt: Date | null
  }

  export type NoteCollaboratorCountAggregateOutputType = {
    id: number
    noteId: number
    userId: number
    permission: number
    addedAt: number
    _all: number
  }


  export type NoteCollaboratorMinAggregateInputType = {
    id?: true
    noteId?: true
    userId?: true
    permission?: true
    addedAt?: true
  }

  export type NoteCollaboratorMaxAggregateInputType = {
    id?: true
    noteId?: true
    userId?: true
    permission?: true
    addedAt?: true
  }

  export type NoteCollaboratorCountAggregateInputType = {
    id?: true
    noteId?: true
    userId?: true
    permission?: true
    addedAt?: true
    _all?: true
  }

  export type NoteCollaboratorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoteCollaborator to aggregate.
     */
    where?: NoteCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteCollaborators to fetch.
     */
    orderBy?: NoteCollaboratorOrderByWithRelationInput | NoteCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NoteCollaborators
    **/
    _count?: true | NoteCollaboratorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteCollaboratorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteCollaboratorMaxAggregateInputType
  }

  export type GetNoteCollaboratorAggregateType<T extends NoteCollaboratorAggregateArgs> = {
        [P in keyof T & keyof AggregateNoteCollaborator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoteCollaborator[P]>
      : GetScalarType<T[P], AggregateNoteCollaborator[P]>
  }




  export type NoteCollaboratorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteCollaboratorWhereInput
    orderBy?: NoteCollaboratorOrderByWithAggregationInput | NoteCollaboratorOrderByWithAggregationInput[]
    by: NoteCollaboratorScalarFieldEnum[] | NoteCollaboratorScalarFieldEnum
    having?: NoteCollaboratorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCollaboratorCountAggregateInputType | true
    _min?: NoteCollaboratorMinAggregateInputType
    _max?: NoteCollaboratorMaxAggregateInputType
  }

  export type NoteCollaboratorGroupByOutputType = {
    id: string
    noteId: string
    userId: string
    permission: $Enums.Permission
    addedAt: Date
    _count: NoteCollaboratorCountAggregateOutputType | null
    _min: NoteCollaboratorMinAggregateOutputType | null
    _max: NoteCollaboratorMaxAggregateOutputType | null
  }

  type GetNoteCollaboratorGroupByPayload<T extends NoteCollaboratorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteCollaboratorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteCollaboratorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteCollaboratorGroupByOutputType[P]>
            : GetScalarType<T[P], NoteCollaboratorGroupByOutputType[P]>
        }
      >
    >


  export type NoteCollaboratorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    noteId?: boolean
    userId?: boolean
    permission?: boolean
    addedAt?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noteCollaborator"]>

  export type NoteCollaboratorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    noteId?: boolean
    userId?: boolean
    permission?: boolean
    addedAt?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noteCollaborator"]>

  export type NoteCollaboratorSelectScalar = {
    id?: boolean
    noteId?: boolean
    userId?: boolean
    permission?: boolean
    addedAt?: boolean
  }

  export type NoteCollaboratorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NoteCollaboratorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NoteCollaboratorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NoteCollaborator"
    objects: {
      note: Prisma.$NotePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      noteId: string
      userId: string
      permission: $Enums.Permission
      addedAt: Date
    }, ExtArgs["result"]["noteCollaborator"]>
    composites: {}
  }

  type NoteCollaboratorGetPayload<S extends boolean | null | undefined | NoteCollaboratorDefaultArgs> = $Result.GetResult<Prisma.$NoteCollaboratorPayload, S>

  type NoteCollaboratorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NoteCollaboratorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NoteCollaboratorCountAggregateInputType | true
    }

  export interface NoteCollaboratorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NoteCollaborator'], meta: { name: 'NoteCollaborator' } }
    /**
     * Find zero or one NoteCollaborator that matches the filter.
     * @param {NoteCollaboratorFindUniqueArgs} args - Arguments to find a NoteCollaborator
     * @example
     * // Get one NoteCollaborator
     * const noteCollaborator = await prisma.noteCollaborator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteCollaboratorFindUniqueArgs>(args: SelectSubset<T, NoteCollaboratorFindUniqueArgs<ExtArgs>>): Prisma__NoteCollaboratorClient<$Result.GetResult<Prisma.$NoteCollaboratorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NoteCollaborator that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NoteCollaboratorFindUniqueOrThrowArgs} args - Arguments to find a NoteCollaborator
     * @example
     * // Get one NoteCollaborator
     * const noteCollaborator = await prisma.noteCollaborator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteCollaboratorFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteCollaboratorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteCollaboratorClient<$Result.GetResult<Prisma.$NoteCollaboratorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NoteCollaborator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCollaboratorFindFirstArgs} args - Arguments to find a NoteCollaborator
     * @example
     * // Get one NoteCollaborator
     * const noteCollaborator = await prisma.noteCollaborator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteCollaboratorFindFirstArgs>(args?: SelectSubset<T, NoteCollaboratorFindFirstArgs<ExtArgs>>): Prisma__NoteCollaboratorClient<$Result.GetResult<Prisma.$NoteCollaboratorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NoteCollaborator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCollaboratorFindFirstOrThrowArgs} args - Arguments to find a NoteCollaborator
     * @example
     * // Get one NoteCollaborator
     * const noteCollaborator = await prisma.noteCollaborator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteCollaboratorFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteCollaboratorFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteCollaboratorClient<$Result.GetResult<Prisma.$NoteCollaboratorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NoteCollaborators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCollaboratorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NoteCollaborators
     * const noteCollaborators = await prisma.noteCollaborator.findMany()
     * 
     * // Get first 10 NoteCollaborators
     * const noteCollaborators = await prisma.noteCollaborator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteCollaboratorWithIdOnly = await prisma.noteCollaborator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteCollaboratorFindManyArgs>(args?: SelectSubset<T, NoteCollaboratorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteCollaboratorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NoteCollaborator.
     * @param {NoteCollaboratorCreateArgs} args - Arguments to create a NoteCollaborator.
     * @example
     * // Create one NoteCollaborator
     * const NoteCollaborator = await prisma.noteCollaborator.create({
     *   data: {
     *     // ... data to create a NoteCollaborator
     *   }
     * })
     * 
     */
    create<T extends NoteCollaboratorCreateArgs>(args: SelectSubset<T, NoteCollaboratorCreateArgs<ExtArgs>>): Prisma__NoteCollaboratorClient<$Result.GetResult<Prisma.$NoteCollaboratorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NoteCollaborators.
     * @param {NoteCollaboratorCreateManyArgs} args - Arguments to create many NoteCollaborators.
     * @example
     * // Create many NoteCollaborators
     * const noteCollaborator = await prisma.noteCollaborator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteCollaboratorCreateManyArgs>(args?: SelectSubset<T, NoteCollaboratorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NoteCollaborators and returns the data saved in the database.
     * @param {NoteCollaboratorCreateManyAndReturnArgs} args - Arguments to create many NoteCollaborators.
     * @example
     * // Create many NoteCollaborators
     * const noteCollaborator = await prisma.noteCollaborator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NoteCollaborators and only return the `id`
     * const noteCollaboratorWithIdOnly = await prisma.noteCollaborator.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteCollaboratorCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteCollaboratorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteCollaboratorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NoteCollaborator.
     * @param {NoteCollaboratorDeleteArgs} args - Arguments to delete one NoteCollaborator.
     * @example
     * // Delete one NoteCollaborator
     * const NoteCollaborator = await prisma.noteCollaborator.delete({
     *   where: {
     *     // ... filter to delete one NoteCollaborator
     *   }
     * })
     * 
     */
    delete<T extends NoteCollaboratorDeleteArgs>(args: SelectSubset<T, NoteCollaboratorDeleteArgs<ExtArgs>>): Prisma__NoteCollaboratorClient<$Result.GetResult<Prisma.$NoteCollaboratorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NoteCollaborator.
     * @param {NoteCollaboratorUpdateArgs} args - Arguments to update one NoteCollaborator.
     * @example
     * // Update one NoteCollaborator
     * const noteCollaborator = await prisma.noteCollaborator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteCollaboratorUpdateArgs>(args: SelectSubset<T, NoteCollaboratorUpdateArgs<ExtArgs>>): Prisma__NoteCollaboratorClient<$Result.GetResult<Prisma.$NoteCollaboratorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NoteCollaborators.
     * @param {NoteCollaboratorDeleteManyArgs} args - Arguments to filter NoteCollaborators to delete.
     * @example
     * // Delete a few NoteCollaborators
     * const { count } = await prisma.noteCollaborator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteCollaboratorDeleteManyArgs>(args?: SelectSubset<T, NoteCollaboratorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoteCollaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCollaboratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NoteCollaborators
     * const noteCollaborator = await prisma.noteCollaborator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteCollaboratorUpdateManyArgs>(args: SelectSubset<T, NoteCollaboratorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NoteCollaborator.
     * @param {NoteCollaboratorUpsertArgs} args - Arguments to update or create a NoteCollaborator.
     * @example
     * // Update or create a NoteCollaborator
     * const noteCollaborator = await prisma.noteCollaborator.upsert({
     *   create: {
     *     // ... data to create a NoteCollaborator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NoteCollaborator we want to update
     *   }
     * })
     */
    upsert<T extends NoteCollaboratorUpsertArgs>(args: SelectSubset<T, NoteCollaboratorUpsertArgs<ExtArgs>>): Prisma__NoteCollaboratorClient<$Result.GetResult<Prisma.$NoteCollaboratorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NoteCollaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCollaboratorCountArgs} args - Arguments to filter NoteCollaborators to count.
     * @example
     * // Count the number of NoteCollaborators
     * const count = await prisma.noteCollaborator.count({
     *   where: {
     *     // ... the filter for the NoteCollaborators we want to count
     *   }
     * })
    **/
    count<T extends NoteCollaboratorCountArgs>(
      args?: Subset<T, NoteCollaboratorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCollaboratorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NoteCollaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCollaboratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoteCollaboratorAggregateArgs>(args: Subset<T, NoteCollaboratorAggregateArgs>): Prisma.PrismaPromise<GetNoteCollaboratorAggregateType<T>>

    /**
     * Group by NoteCollaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCollaboratorGroupByArgs} args - Group by arguments.
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
      T extends NoteCollaboratorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteCollaboratorGroupByArgs['orderBy'] }
        : { orderBy?: NoteCollaboratorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, NoteCollaboratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteCollaboratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NoteCollaborator model
   */
  readonly fields: NoteCollaboratorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NoteCollaborator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteCollaboratorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    note<T extends NoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NoteDefaultArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NoteCollaborator model
   */ 
  interface NoteCollaboratorFieldRefs {
    readonly id: FieldRef<"NoteCollaborator", 'String'>
    readonly noteId: FieldRef<"NoteCollaborator", 'String'>
    readonly userId: FieldRef<"NoteCollaborator", 'String'>
    readonly permission: FieldRef<"NoteCollaborator", 'Permission'>
    readonly addedAt: FieldRef<"NoteCollaborator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NoteCollaborator findUnique
   */
  export type NoteCollaboratorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteCollaborator
     */
    select?: NoteCollaboratorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which NoteCollaborator to fetch.
     */
    where: NoteCollaboratorWhereUniqueInput
  }

  /**
   * NoteCollaborator findUniqueOrThrow
   */
  export type NoteCollaboratorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteCollaborator
     */
    select?: NoteCollaboratorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which NoteCollaborator to fetch.
     */
    where: NoteCollaboratorWhereUniqueInput
  }

  /**
   * NoteCollaborator findFirst
   */
  export type NoteCollaboratorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteCollaborator
     */
    select?: NoteCollaboratorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which NoteCollaborator to fetch.
     */
    where?: NoteCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteCollaborators to fetch.
     */
    orderBy?: NoteCollaboratorOrderByWithRelationInput | NoteCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoteCollaborators.
     */
    cursor?: NoteCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoteCollaborators.
     */
    distinct?: NoteCollaboratorScalarFieldEnum | NoteCollaboratorScalarFieldEnum[]
  }

  /**
   * NoteCollaborator findFirstOrThrow
   */
  export type NoteCollaboratorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteCollaborator
     */
    select?: NoteCollaboratorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which NoteCollaborator to fetch.
     */
    where?: NoteCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteCollaborators to fetch.
     */
    orderBy?: NoteCollaboratorOrderByWithRelationInput | NoteCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoteCollaborators.
     */
    cursor?: NoteCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoteCollaborators.
     */
    distinct?: NoteCollaboratorScalarFieldEnum | NoteCollaboratorScalarFieldEnum[]
  }

  /**
   * NoteCollaborator findMany
   */
  export type NoteCollaboratorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteCollaborator
     */
    select?: NoteCollaboratorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which NoteCollaborators to fetch.
     */
    where?: NoteCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteCollaborators to fetch.
     */
    orderBy?: NoteCollaboratorOrderByWithRelationInput | NoteCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NoteCollaborators.
     */
    cursor?: NoteCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteCollaborators.
     */
    skip?: number
    distinct?: NoteCollaboratorScalarFieldEnum | NoteCollaboratorScalarFieldEnum[]
  }

  /**
   * NoteCollaborator create
   */
  export type NoteCollaboratorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteCollaborator
     */
    select?: NoteCollaboratorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteCollaboratorInclude<ExtArgs> | null
    /**
     * The data needed to create a NoteCollaborator.
     */
    data: XOR<NoteCollaboratorCreateInput, NoteCollaboratorUncheckedCreateInput>
  }

  /**
   * NoteCollaborator createMany
   */
  export type NoteCollaboratorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NoteCollaborators.
     */
    data: NoteCollaboratorCreateManyInput | NoteCollaboratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NoteCollaborator createManyAndReturn
   */
  export type NoteCollaboratorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteCollaborator
     */
    select?: NoteCollaboratorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NoteCollaborators.
     */
    data: NoteCollaboratorCreateManyInput | NoteCollaboratorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteCollaboratorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NoteCollaborator update
   */
  export type NoteCollaboratorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteCollaborator
     */
    select?: NoteCollaboratorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteCollaboratorInclude<ExtArgs> | null
    /**
     * The data needed to update a NoteCollaborator.
     */
    data: XOR<NoteCollaboratorUpdateInput, NoteCollaboratorUncheckedUpdateInput>
    /**
     * Choose, which NoteCollaborator to update.
     */
    where: NoteCollaboratorWhereUniqueInput
  }

  /**
   * NoteCollaborator updateMany
   */
  export type NoteCollaboratorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NoteCollaborators.
     */
    data: XOR<NoteCollaboratorUpdateManyMutationInput, NoteCollaboratorUncheckedUpdateManyInput>
    /**
     * Filter which NoteCollaborators to update
     */
    where?: NoteCollaboratorWhereInput
  }

  /**
   * NoteCollaborator upsert
   */
  export type NoteCollaboratorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteCollaborator
     */
    select?: NoteCollaboratorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteCollaboratorInclude<ExtArgs> | null
    /**
     * The filter to search for the NoteCollaborator to update in case it exists.
     */
    where: NoteCollaboratorWhereUniqueInput
    /**
     * In case the NoteCollaborator found by the `where` argument doesn't exist, create a new NoteCollaborator with this data.
     */
    create: XOR<NoteCollaboratorCreateInput, NoteCollaboratorUncheckedCreateInput>
    /**
     * In case the NoteCollaborator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteCollaboratorUpdateInput, NoteCollaboratorUncheckedUpdateInput>
  }

  /**
   * NoteCollaborator delete
   */
  export type NoteCollaboratorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteCollaborator
     */
    select?: NoteCollaboratorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteCollaboratorInclude<ExtArgs> | null
    /**
     * Filter which NoteCollaborator to delete.
     */
    where: NoteCollaboratorWhereUniqueInput
  }

  /**
   * NoteCollaborator deleteMany
   */
  export type NoteCollaboratorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoteCollaborators to delete
     */
    where?: NoteCollaboratorWhereInput
  }

  /**
   * NoteCollaborator without action
   */
  export type NoteCollaboratorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteCollaborator
     */
    select?: NoteCollaboratorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteCollaboratorInclude<ExtArgs> | null
  }


  /**
   * Model UserPresence
   */

  export type AggregateUserPresence = {
    _count: UserPresenceCountAggregateOutputType | null
    _avg: UserPresenceAvgAggregateOutputType | null
    _sum: UserPresenceSumAggregateOutputType | null
    _min: UserPresenceMinAggregateOutputType | null
    _max: UserPresenceMaxAggregateOutputType | null
  }

  export type UserPresenceAvgAggregateOutputType = {
    cursorPos: number | null
  }

  export type UserPresenceSumAggregateOutputType = {
    cursorPos: number | null
  }

  export type UserPresenceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    noteId: string | null
    cursorPos: number | null
    color: string | null
    isActive: boolean | null
    lastSeen: Date | null
    createdAt: Date | null
  }

  export type UserPresenceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    noteId: string | null
    cursorPos: number | null
    color: string | null
    isActive: boolean | null
    lastSeen: Date | null
    createdAt: Date | null
  }

  export type UserPresenceCountAggregateOutputType = {
    id: number
    userId: number
    noteId: number
    cursorPos: number
    selection: number
    color: number
    isActive: number
    lastSeen: number
    createdAt: number
    _all: number
  }


  export type UserPresenceAvgAggregateInputType = {
    cursorPos?: true
  }

  export type UserPresenceSumAggregateInputType = {
    cursorPos?: true
  }

  export type UserPresenceMinAggregateInputType = {
    id?: true
    userId?: true
    noteId?: true
    cursorPos?: true
    color?: true
    isActive?: true
    lastSeen?: true
    createdAt?: true
  }

  export type UserPresenceMaxAggregateInputType = {
    id?: true
    userId?: true
    noteId?: true
    cursorPos?: true
    color?: true
    isActive?: true
    lastSeen?: true
    createdAt?: true
  }

  export type UserPresenceCountAggregateInputType = {
    id?: true
    userId?: true
    noteId?: true
    cursorPos?: true
    selection?: true
    color?: true
    isActive?: true
    lastSeen?: true
    createdAt?: true
    _all?: true
  }

  export type UserPresenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPresence to aggregate.
     */
    where?: UserPresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPresences to fetch.
     */
    orderBy?: UserPresenceOrderByWithRelationInput | UserPresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPresences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPresences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPresences
    **/
    _count?: true | UserPresenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPresenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPresenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPresenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPresenceMaxAggregateInputType
  }

  export type GetUserPresenceAggregateType<T extends UserPresenceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPresence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPresence[P]>
      : GetScalarType<T[P], AggregateUserPresence[P]>
  }




  export type UserPresenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPresenceWhereInput
    orderBy?: UserPresenceOrderByWithAggregationInput | UserPresenceOrderByWithAggregationInput[]
    by: UserPresenceScalarFieldEnum[] | UserPresenceScalarFieldEnum
    having?: UserPresenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPresenceCountAggregateInputType | true
    _avg?: UserPresenceAvgAggregateInputType
    _sum?: UserPresenceSumAggregateInputType
    _min?: UserPresenceMinAggregateInputType
    _max?: UserPresenceMaxAggregateInputType
  }

  export type UserPresenceGroupByOutputType = {
    id: string
    userId: string
    noteId: string
    cursorPos: number | null
    selection: JsonValue | null
    color: string
    isActive: boolean
    lastSeen: Date
    createdAt: Date
    _count: UserPresenceCountAggregateOutputType | null
    _avg: UserPresenceAvgAggregateOutputType | null
    _sum: UserPresenceSumAggregateOutputType | null
    _min: UserPresenceMinAggregateOutputType | null
    _max: UserPresenceMaxAggregateOutputType | null
  }

  type GetUserPresenceGroupByPayload<T extends UserPresenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPresenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPresenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPresenceGroupByOutputType[P]>
            : GetScalarType<T[P], UserPresenceGroupByOutputType[P]>
        }
      >
    >


  export type UserPresenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    noteId?: boolean
    cursorPos?: boolean
    selection?: boolean
    color?: boolean
    isActive?: boolean
    lastSeen?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPresence"]>

  export type UserPresenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    noteId?: boolean
    cursorPos?: boolean
    selection?: boolean
    color?: boolean
    isActive?: boolean
    lastSeen?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPresence"]>

  export type UserPresenceSelectScalar = {
    id?: boolean
    userId?: boolean
    noteId?: boolean
    cursorPos?: boolean
    selection?: boolean
    color?: boolean
    isActive?: boolean
    lastSeen?: boolean
    createdAt?: boolean
  }

  export type UserPresenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }
  export type UserPresenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }

  export type $UserPresencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPresence"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      note: Prisma.$NotePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      noteId: string
      cursorPos: number | null
      selection: Prisma.JsonValue | null
      color: string
      isActive: boolean
      lastSeen: Date
      createdAt: Date
    }, ExtArgs["result"]["userPresence"]>
    composites: {}
  }

  type UserPresenceGetPayload<S extends boolean | null | undefined | UserPresenceDefaultArgs> = $Result.GetResult<Prisma.$UserPresencePayload, S>

  type UserPresenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserPresenceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserPresenceCountAggregateInputType | true
    }

  export interface UserPresenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPresence'], meta: { name: 'UserPresence' } }
    /**
     * Find zero or one UserPresence that matches the filter.
     * @param {UserPresenceFindUniqueArgs} args - Arguments to find a UserPresence
     * @example
     * // Get one UserPresence
     * const userPresence = await prisma.userPresence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPresenceFindUniqueArgs>(args: SelectSubset<T, UserPresenceFindUniqueArgs<ExtArgs>>): Prisma__UserPresenceClient<$Result.GetResult<Prisma.$UserPresencePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserPresence that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserPresenceFindUniqueOrThrowArgs} args - Arguments to find a UserPresence
     * @example
     * // Get one UserPresence
     * const userPresence = await prisma.userPresence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPresenceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPresenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPresenceClient<$Result.GetResult<Prisma.$UserPresencePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserPresence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPresenceFindFirstArgs} args - Arguments to find a UserPresence
     * @example
     * // Get one UserPresence
     * const userPresence = await prisma.userPresence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPresenceFindFirstArgs>(args?: SelectSubset<T, UserPresenceFindFirstArgs<ExtArgs>>): Prisma__UserPresenceClient<$Result.GetResult<Prisma.$UserPresencePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserPresence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPresenceFindFirstOrThrowArgs} args - Arguments to find a UserPresence
     * @example
     * // Get one UserPresence
     * const userPresence = await prisma.userPresence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPresenceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPresenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPresenceClient<$Result.GetResult<Prisma.$UserPresencePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserPresences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPresenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPresences
     * const userPresences = await prisma.userPresence.findMany()
     * 
     * // Get first 10 UserPresences
     * const userPresences = await prisma.userPresence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPresenceWithIdOnly = await prisma.userPresence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPresenceFindManyArgs>(args?: SelectSubset<T, UserPresenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPresencePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserPresence.
     * @param {UserPresenceCreateArgs} args - Arguments to create a UserPresence.
     * @example
     * // Create one UserPresence
     * const UserPresence = await prisma.userPresence.create({
     *   data: {
     *     // ... data to create a UserPresence
     *   }
     * })
     * 
     */
    create<T extends UserPresenceCreateArgs>(args: SelectSubset<T, UserPresenceCreateArgs<ExtArgs>>): Prisma__UserPresenceClient<$Result.GetResult<Prisma.$UserPresencePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserPresences.
     * @param {UserPresenceCreateManyArgs} args - Arguments to create many UserPresences.
     * @example
     * // Create many UserPresences
     * const userPresence = await prisma.userPresence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPresenceCreateManyArgs>(args?: SelectSubset<T, UserPresenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPresences and returns the data saved in the database.
     * @param {UserPresenceCreateManyAndReturnArgs} args - Arguments to create many UserPresences.
     * @example
     * // Create many UserPresences
     * const userPresence = await prisma.userPresence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPresences and only return the `id`
     * const userPresenceWithIdOnly = await prisma.userPresence.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPresenceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPresenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPresencePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserPresence.
     * @param {UserPresenceDeleteArgs} args - Arguments to delete one UserPresence.
     * @example
     * // Delete one UserPresence
     * const UserPresence = await prisma.userPresence.delete({
     *   where: {
     *     // ... filter to delete one UserPresence
     *   }
     * })
     * 
     */
    delete<T extends UserPresenceDeleteArgs>(args: SelectSubset<T, UserPresenceDeleteArgs<ExtArgs>>): Prisma__UserPresenceClient<$Result.GetResult<Prisma.$UserPresencePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserPresence.
     * @param {UserPresenceUpdateArgs} args - Arguments to update one UserPresence.
     * @example
     * // Update one UserPresence
     * const userPresence = await prisma.userPresence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPresenceUpdateArgs>(args: SelectSubset<T, UserPresenceUpdateArgs<ExtArgs>>): Prisma__UserPresenceClient<$Result.GetResult<Prisma.$UserPresencePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserPresences.
     * @param {UserPresenceDeleteManyArgs} args - Arguments to filter UserPresences to delete.
     * @example
     * // Delete a few UserPresences
     * const { count } = await prisma.userPresence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPresenceDeleteManyArgs>(args?: SelectSubset<T, UserPresenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPresences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPresenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPresences
     * const userPresence = await prisma.userPresence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPresenceUpdateManyArgs>(args: SelectSubset<T, UserPresenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPresence.
     * @param {UserPresenceUpsertArgs} args - Arguments to update or create a UserPresence.
     * @example
     * // Update or create a UserPresence
     * const userPresence = await prisma.userPresence.upsert({
     *   create: {
     *     // ... data to create a UserPresence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPresence we want to update
     *   }
     * })
     */
    upsert<T extends UserPresenceUpsertArgs>(args: SelectSubset<T, UserPresenceUpsertArgs<ExtArgs>>): Prisma__UserPresenceClient<$Result.GetResult<Prisma.$UserPresencePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserPresences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPresenceCountArgs} args - Arguments to filter UserPresences to count.
     * @example
     * // Count the number of UserPresences
     * const count = await prisma.userPresence.count({
     *   where: {
     *     // ... the filter for the UserPresences we want to count
     *   }
     * })
    **/
    count<T extends UserPresenceCountArgs>(
      args?: Subset<T, UserPresenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPresenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPresence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPresenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPresenceAggregateArgs>(args: Subset<T, UserPresenceAggregateArgs>): Prisma.PrismaPromise<GetUserPresenceAggregateType<T>>

    /**
     * Group by UserPresence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPresenceGroupByArgs} args - Group by arguments.
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
      T extends UserPresenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPresenceGroupByArgs['orderBy'] }
        : { orderBy?: UserPresenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserPresenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPresenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPresence model
   */
  readonly fields: UserPresenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPresence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPresenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    note<T extends NoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NoteDefaultArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPresence model
   */ 
  interface UserPresenceFieldRefs {
    readonly id: FieldRef<"UserPresence", 'String'>
    readonly userId: FieldRef<"UserPresence", 'String'>
    readonly noteId: FieldRef<"UserPresence", 'String'>
    readonly cursorPos: FieldRef<"UserPresence", 'Int'>
    readonly selection: FieldRef<"UserPresence", 'Json'>
    readonly color: FieldRef<"UserPresence", 'String'>
    readonly isActive: FieldRef<"UserPresence", 'Boolean'>
    readonly lastSeen: FieldRef<"UserPresence", 'DateTime'>
    readonly createdAt: FieldRef<"UserPresence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPresence findUnique
   */
  export type UserPresenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPresence
     */
    select?: UserPresenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPresence to fetch.
     */
    where: UserPresenceWhereUniqueInput
  }

  /**
   * UserPresence findUniqueOrThrow
   */
  export type UserPresenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPresence
     */
    select?: UserPresenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPresence to fetch.
     */
    where: UserPresenceWhereUniqueInput
  }

  /**
   * UserPresence findFirst
   */
  export type UserPresenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPresence
     */
    select?: UserPresenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPresence to fetch.
     */
    where?: UserPresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPresences to fetch.
     */
    orderBy?: UserPresenceOrderByWithRelationInput | UserPresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPresences.
     */
    cursor?: UserPresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPresences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPresences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPresences.
     */
    distinct?: UserPresenceScalarFieldEnum | UserPresenceScalarFieldEnum[]
  }

  /**
   * UserPresence findFirstOrThrow
   */
  export type UserPresenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPresence
     */
    select?: UserPresenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPresence to fetch.
     */
    where?: UserPresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPresences to fetch.
     */
    orderBy?: UserPresenceOrderByWithRelationInput | UserPresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPresences.
     */
    cursor?: UserPresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPresences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPresences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPresences.
     */
    distinct?: UserPresenceScalarFieldEnum | UserPresenceScalarFieldEnum[]
  }

  /**
   * UserPresence findMany
   */
  export type UserPresenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPresence
     */
    select?: UserPresenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPresences to fetch.
     */
    where?: UserPresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPresences to fetch.
     */
    orderBy?: UserPresenceOrderByWithRelationInput | UserPresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPresences.
     */
    cursor?: UserPresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPresences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPresences.
     */
    skip?: number
    distinct?: UserPresenceScalarFieldEnum | UserPresenceScalarFieldEnum[]
  }

  /**
   * UserPresence create
   */
  export type UserPresenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPresence
     */
    select?: UserPresenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresenceInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPresence.
     */
    data: XOR<UserPresenceCreateInput, UserPresenceUncheckedCreateInput>
  }

  /**
   * UserPresence createMany
   */
  export type UserPresenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPresences.
     */
    data: UserPresenceCreateManyInput | UserPresenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPresence createManyAndReturn
   */
  export type UserPresenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPresence
     */
    select?: UserPresenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserPresences.
     */
    data: UserPresenceCreateManyInput | UserPresenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPresence update
   */
  export type UserPresenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPresence
     */
    select?: UserPresenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresenceInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPresence.
     */
    data: XOR<UserPresenceUpdateInput, UserPresenceUncheckedUpdateInput>
    /**
     * Choose, which UserPresence to update.
     */
    where: UserPresenceWhereUniqueInput
  }

  /**
   * UserPresence updateMany
   */
  export type UserPresenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPresences.
     */
    data: XOR<UserPresenceUpdateManyMutationInput, UserPresenceUncheckedUpdateManyInput>
    /**
     * Filter which UserPresences to update
     */
    where?: UserPresenceWhereInput
  }

  /**
   * UserPresence upsert
   */
  export type UserPresenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPresence
     */
    select?: UserPresenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresenceInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPresence to update in case it exists.
     */
    where: UserPresenceWhereUniqueInput
    /**
     * In case the UserPresence found by the `where` argument doesn't exist, create a new UserPresence with this data.
     */
    create: XOR<UserPresenceCreateInput, UserPresenceUncheckedCreateInput>
    /**
     * In case the UserPresence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPresenceUpdateInput, UserPresenceUncheckedUpdateInput>
  }

  /**
   * UserPresence delete
   */
  export type UserPresenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPresence
     */
    select?: UserPresenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresenceInclude<ExtArgs> | null
    /**
     * Filter which UserPresence to delete.
     */
    where: UserPresenceWhereUniqueInput
  }

  /**
   * UserPresence deleteMany
   */
  export type UserPresenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPresences to delete
     */
    where?: UserPresenceWhereInput
  }

  /**
   * UserPresence without action
   */
  export type UserPresenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPresence
     */
    select?: UserPresenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPresenceInclude<ExtArgs> | null
  }


  /**
   * Model NoteVersion
   */

  export type AggregateNoteVersion = {
    _count: NoteVersionCountAggregateOutputType | null
    _avg: NoteVersionAvgAggregateOutputType | null
    _sum: NoteVersionSumAggregateOutputType | null
    _min: NoteVersionMinAggregateOutputType | null
    _max: NoteVersionMaxAggregateOutputType | null
  }

  export type NoteVersionAvgAggregateOutputType = {
    version: number | null
  }

  export type NoteVersionSumAggregateOutputType = {
    version: number | null
  }

  export type NoteVersionMinAggregateOutputType = {
    id: string | null
    noteId: string | null
    title: string | null
    content: string | null
    version: number | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type NoteVersionMaxAggregateOutputType = {
    id: string | null
    noteId: string | null
    title: string | null
    content: string | null
    version: number | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type NoteVersionCountAggregateOutputType = {
    id: number
    noteId: number
    title: number
    content: number
    version: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type NoteVersionAvgAggregateInputType = {
    version?: true
  }

  export type NoteVersionSumAggregateInputType = {
    version?: true
  }

  export type NoteVersionMinAggregateInputType = {
    id?: true
    noteId?: true
    title?: true
    content?: true
    version?: true
    createdBy?: true
    createdAt?: true
  }

  export type NoteVersionMaxAggregateInputType = {
    id?: true
    noteId?: true
    title?: true
    content?: true
    version?: true
    createdBy?: true
    createdAt?: true
  }

  export type NoteVersionCountAggregateInputType = {
    id?: true
    noteId?: true
    title?: true
    content?: true
    version?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type NoteVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoteVersion to aggregate.
     */
    where?: NoteVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteVersions to fetch.
     */
    orderBy?: NoteVersionOrderByWithRelationInput | NoteVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NoteVersions
    **/
    _count?: true | NoteVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoteVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoteVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteVersionMaxAggregateInputType
  }

  export type GetNoteVersionAggregateType<T extends NoteVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateNoteVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoteVersion[P]>
      : GetScalarType<T[P], AggregateNoteVersion[P]>
  }




  export type NoteVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteVersionWhereInput
    orderBy?: NoteVersionOrderByWithAggregationInput | NoteVersionOrderByWithAggregationInput[]
    by: NoteVersionScalarFieldEnum[] | NoteVersionScalarFieldEnum
    having?: NoteVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteVersionCountAggregateInputType | true
    _avg?: NoteVersionAvgAggregateInputType
    _sum?: NoteVersionSumAggregateInputType
    _min?: NoteVersionMinAggregateInputType
    _max?: NoteVersionMaxAggregateInputType
  }

  export type NoteVersionGroupByOutputType = {
    id: string
    noteId: string
    title: string
    content: string
    version: number
    createdBy: string
    createdAt: Date
    _count: NoteVersionCountAggregateOutputType | null
    _avg: NoteVersionAvgAggregateOutputType | null
    _sum: NoteVersionSumAggregateOutputType | null
    _min: NoteVersionMinAggregateOutputType | null
    _max: NoteVersionMaxAggregateOutputType | null
  }

  type GetNoteVersionGroupByPayload<T extends NoteVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteVersionGroupByOutputType[P]>
            : GetScalarType<T[P], NoteVersionGroupByOutputType[P]>
        }
      >
    >


  export type NoteVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    noteId?: boolean
    title?: boolean
    content?: boolean
    version?: boolean
    createdBy?: boolean
    createdAt?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noteVersion"]>

  export type NoteVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    noteId?: boolean
    title?: boolean
    content?: boolean
    version?: boolean
    createdBy?: boolean
    createdAt?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noteVersion"]>

  export type NoteVersionSelectScalar = {
    id?: boolean
    noteId?: boolean
    title?: boolean
    content?: boolean
    version?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type NoteVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }
  export type NoteVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }

  export type $NoteVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NoteVersion"
    objects: {
      note: Prisma.$NotePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      noteId: string
      title: string
      content: string
      version: number
      createdBy: string
      createdAt: Date
    }, ExtArgs["result"]["noteVersion"]>
    composites: {}
  }

  type NoteVersionGetPayload<S extends boolean | null | undefined | NoteVersionDefaultArgs> = $Result.GetResult<Prisma.$NoteVersionPayload, S>

  type NoteVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NoteVersionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NoteVersionCountAggregateInputType | true
    }

  export interface NoteVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NoteVersion'], meta: { name: 'NoteVersion' } }
    /**
     * Find zero or one NoteVersion that matches the filter.
     * @param {NoteVersionFindUniqueArgs} args - Arguments to find a NoteVersion
     * @example
     * // Get one NoteVersion
     * const noteVersion = await prisma.noteVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteVersionFindUniqueArgs>(args: SelectSubset<T, NoteVersionFindUniqueArgs<ExtArgs>>): Prisma__NoteVersionClient<$Result.GetResult<Prisma.$NoteVersionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NoteVersion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NoteVersionFindUniqueOrThrowArgs} args - Arguments to find a NoteVersion
     * @example
     * // Get one NoteVersion
     * const noteVersion = await prisma.noteVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteVersionClient<$Result.GetResult<Prisma.$NoteVersionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NoteVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteVersionFindFirstArgs} args - Arguments to find a NoteVersion
     * @example
     * // Get one NoteVersion
     * const noteVersion = await prisma.noteVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteVersionFindFirstArgs>(args?: SelectSubset<T, NoteVersionFindFirstArgs<ExtArgs>>): Prisma__NoteVersionClient<$Result.GetResult<Prisma.$NoteVersionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NoteVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteVersionFindFirstOrThrowArgs} args - Arguments to find a NoteVersion
     * @example
     * // Get one NoteVersion
     * const noteVersion = await prisma.noteVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteVersionClient<$Result.GetResult<Prisma.$NoteVersionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NoteVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NoteVersions
     * const noteVersions = await prisma.noteVersion.findMany()
     * 
     * // Get first 10 NoteVersions
     * const noteVersions = await prisma.noteVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteVersionWithIdOnly = await prisma.noteVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteVersionFindManyArgs>(args?: SelectSubset<T, NoteVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteVersionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NoteVersion.
     * @param {NoteVersionCreateArgs} args - Arguments to create a NoteVersion.
     * @example
     * // Create one NoteVersion
     * const NoteVersion = await prisma.noteVersion.create({
     *   data: {
     *     // ... data to create a NoteVersion
     *   }
     * })
     * 
     */
    create<T extends NoteVersionCreateArgs>(args: SelectSubset<T, NoteVersionCreateArgs<ExtArgs>>): Prisma__NoteVersionClient<$Result.GetResult<Prisma.$NoteVersionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NoteVersions.
     * @param {NoteVersionCreateManyArgs} args - Arguments to create many NoteVersions.
     * @example
     * // Create many NoteVersions
     * const noteVersion = await prisma.noteVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteVersionCreateManyArgs>(args?: SelectSubset<T, NoteVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NoteVersions and returns the data saved in the database.
     * @param {NoteVersionCreateManyAndReturnArgs} args - Arguments to create many NoteVersions.
     * @example
     * // Create many NoteVersions
     * const noteVersion = await prisma.noteVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NoteVersions and only return the `id`
     * const noteVersionWithIdOnly = await prisma.noteVersion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteVersionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NoteVersion.
     * @param {NoteVersionDeleteArgs} args - Arguments to delete one NoteVersion.
     * @example
     * // Delete one NoteVersion
     * const NoteVersion = await prisma.noteVersion.delete({
     *   where: {
     *     // ... filter to delete one NoteVersion
     *   }
     * })
     * 
     */
    delete<T extends NoteVersionDeleteArgs>(args: SelectSubset<T, NoteVersionDeleteArgs<ExtArgs>>): Prisma__NoteVersionClient<$Result.GetResult<Prisma.$NoteVersionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NoteVersion.
     * @param {NoteVersionUpdateArgs} args - Arguments to update one NoteVersion.
     * @example
     * // Update one NoteVersion
     * const noteVersion = await prisma.noteVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteVersionUpdateArgs>(args: SelectSubset<T, NoteVersionUpdateArgs<ExtArgs>>): Prisma__NoteVersionClient<$Result.GetResult<Prisma.$NoteVersionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NoteVersions.
     * @param {NoteVersionDeleteManyArgs} args - Arguments to filter NoteVersions to delete.
     * @example
     * // Delete a few NoteVersions
     * const { count } = await prisma.noteVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteVersionDeleteManyArgs>(args?: SelectSubset<T, NoteVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoteVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NoteVersions
     * const noteVersion = await prisma.noteVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteVersionUpdateManyArgs>(args: SelectSubset<T, NoteVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NoteVersion.
     * @param {NoteVersionUpsertArgs} args - Arguments to update or create a NoteVersion.
     * @example
     * // Update or create a NoteVersion
     * const noteVersion = await prisma.noteVersion.upsert({
     *   create: {
     *     // ... data to create a NoteVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NoteVersion we want to update
     *   }
     * })
     */
    upsert<T extends NoteVersionUpsertArgs>(args: SelectSubset<T, NoteVersionUpsertArgs<ExtArgs>>): Prisma__NoteVersionClient<$Result.GetResult<Prisma.$NoteVersionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NoteVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteVersionCountArgs} args - Arguments to filter NoteVersions to count.
     * @example
     * // Count the number of NoteVersions
     * const count = await prisma.noteVersion.count({
     *   where: {
     *     // ... the filter for the NoteVersions we want to count
     *   }
     * })
    **/
    count<T extends NoteVersionCountArgs>(
      args?: Subset<T, NoteVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NoteVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoteVersionAggregateArgs>(args: Subset<T, NoteVersionAggregateArgs>): Prisma.PrismaPromise<GetNoteVersionAggregateType<T>>

    /**
     * Group by NoteVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteVersionGroupByArgs} args - Group by arguments.
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
      T extends NoteVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteVersionGroupByArgs['orderBy'] }
        : { orderBy?: NoteVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, NoteVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NoteVersion model
   */
  readonly fields: NoteVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NoteVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    note<T extends NoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NoteDefaultArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NoteVersion model
   */ 
  interface NoteVersionFieldRefs {
    readonly id: FieldRef<"NoteVersion", 'String'>
    readonly noteId: FieldRef<"NoteVersion", 'String'>
    readonly title: FieldRef<"NoteVersion", 'String'>
    readonly content: FieldRef<"NoteVersion", 'String'>
    readonly version: FieldRef<"NoteVersion", 'Int'>
    readonly createdBy: FieldRef<"NoteVersion", 'String'>
    readonly createdAt: FieldRef<"NoteVersion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NoteVersion findUnique
   */
  export type NoteVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteVersion
     */
    select?: NoteVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteVersionInclude<ExtArgs> | null
    /**
     * Filter, which NoteVersion to fetch.
     */
    where: NoteVersionWhereUniqueInput
  }

  /**
   * NoteVersion findUniqueOrThrow
   */
  export type NoteVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteVersion
     */
    select?: NoteVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteVersionInclude<ExtArgs> | null
    /**
     * Filter, which NoteVersion to fetch.
     */
    where: NoteVersionWhereUniqueInput
  }

  /**
   * NoteVersion findFirst
   */
  export type NoteVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteVersion
     */
    select?: NoteVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteVersionInclude<ExtArgs> | null
    /**
     * Filter, which NoteVersion to fetch.
     */
    where?: NoteVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteVersions to fetch.
     */
    orderBy?: NoteVersionOrderByWithRelationInput | NoteVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoteVersions.
     */
    cursor?: NoteVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoteVersions.
     */
    distinct?: NoteVersionScalarFieldEnum | NoteVersionScalarFieldEnum[]
  }

  /**
   * NoteVersion findFirstOrThrow
   */
  export type NoteVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteVersion
     */
    select?: NoteVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteVersionInclude<ExtArgs> | null
    /**
     * Filter, which NoteVersion to fetch.
     */
    where?: NoteVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteVersions to fetch.
     */
    orderBy?: NoteVersionOrderByWithRelationInput | NoteVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoteVersions.
     */
    cursor?: NoteVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoteVersions.
     */
    distinct?: NoteVersionScalarFieldEnum | NoteVersionScalarFieldEnum[]
  }

  /**
   * NoteVersion findMany
   */
  export type NoteVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteVersion
     */
    select?: NoteVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteVersionInclude<ExtArgs> | null
    /**
     * Filter, which NoteVersions to fetch.
     */
    where?: NoteVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteVersions to fetch.
     */
    orderBy?: NoteVersionOrderByWithRelationInput | NoteVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NoteVersions.
     */
    cursor?: NoteVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteVersions.
     */
    skip?: number
    distinct?: NoteVersionScalarFieldEnum | NoteVersionScalarFieldEnum[]
  }

  /**
   * NoteVersion create
   */
  export type NoteVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteVersion
     */
    select?: NoteVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a NoteVersion.
     */
    data: XOR<NoteVersionCreateInput, NoteVersionUncheckedCreateInput>
  }

  /**
   * NoteVersion createMany
   */
  export type NoteVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NoteVersions.
     */
    data: NoteVersionCreateManyInput | NoteVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NoteVersion createManyAndReturn
   */
  export type NoteVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteVersion
     */
    select?: NoteVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NoteVersions.
     */
    data: NoteVersionCreateManyInput | NoteVersionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteVersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NoteVersion update
   */
  export type NoteVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteVersion
     */
    select?: NoteVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a NoteVersion.
     */
    data: XOR<NoteVersionUpdateInput, NoteVersionUncheckedUpdateInput>
    /**
     * Choose, which NoteVersion to update.
     */
    where: NoteVersionWhereUniqueInput
  }

  /**
   * NoteVersion updateMany
   */
  export type NoteVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NoteVersions.
     */
    data: XOR<NoteVersionUpdateManyMutationInput, NoteVersionUncheckedUpdateManyInput>
    /**
     * Filter which NoteVersions to update
     */
    where?: NoteVersionWhereInput
  }

  /**
   * NoteVersion upsert
   */
  export type NoteVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteVersion
     */
    select?: NoteVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the NoteVersion to update in case it exists.
     */
    where: NoteVersionWhereUniqueInput
    /**
     * In case the NoteVersion found by the `where` argument doesn't exist, create a new NoteVersion with this data.
     */
    create: XOR<NoteVersionCreateInput, NoteVersionUncheckedCreateInput>
    /**
     * In case the NoteVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteVersionUpdateInput, NoteVersionUncheckedUpdateInput>
  }

  /**
   * NoteVersion delete
   */
  export type NoteVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteVersion
     */
    select?: NoteVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteVersionInclude<ExtArgs> | null
    /**
     * Filter which NoteVersion to delete.
     */
    where: NoteVersionWhereUniqueInput
  }

  /**
   * NoteVersion deleteMany
   */
  export type NoteVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoteVersions to delete
     */
    where?: NoteVersionWhereInput
  }

  /**
   * NoteVersion without action
   */
  export type NoteVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteVersion
     */
    select?: NoteVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteVersionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    firstName: 'firstName',
    lastName: 'lastName',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    contentType: 'contentType',
    isPublic: 'isPublic',
    ownerId: 'ownerId',
    lastEditedBy: 'lastEditedBy',
    lastEditedAt: 'lastEditedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const NoteCollaboratorScalarFieldEnum: {
    id: 'id',
    noteId: 'noteId',
    userId: 'userId',
    permission: 'permission',
    addedAt: 'addedAt'
  };

  export type NoteCollaboratorScalarFieldEnum = (typeof NoteCollaboratorScalarFieldEnum)[keyof typeof NoteCollaboratorScalarFieldEnum]


  export const UserPresenceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    noteId: 'noteId',
    cursorPos: 'cursorPos',
    selection: 'selection',
    color: 'color',
    isActive: 'isActive',
    lastSeen: 'lastSeen',
    createdAt: 'createdAt'
  };

  export type UserPresenceScalarFieldEnum = (typeof UserPresenceScalarFieldEnum)[keyof typeof UserPresenceScalarFieldEnum]


  export const NoteVersionScalarFieldEnum: {
    id: 'id',
    noteId: 'noteId',
    title: 'title',
    content: 'content',
    version: 'version',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type NoteVersionScalarFieldEnum = (typeof NoteVersionScalarFieldEnum)[keyof typeof NoteVersionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Permission'
   */
  export type EnumPermissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Permission'>
    


  /**
   * Reference to a field of type 'Permission[]'
   */
  export type ListEnumPermissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Permission[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    notes?: NoteListRelationFilter
    collaborators?: NoteCollaboratorListRelationFilter
    presences?: UserPresenceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notes?: NoteOrderByRelationAggregateInput
    collaborators?: NoteCollaboratorOrderByRelationAggregateInput
    presences?: UserPresenceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    notes?: NoteListRelationFilter
    collaborators?: NoteCollaboratorListRelationFilter
    presences?: UserPresenceListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    id?: StringFilter<"Note"> | string
    title?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    contentType?: StringFilter<"Note"> | string
    isPublic?: BoolFilter<"Note"> | boolean
    ownerId?: StringFilter<"Note"> | string
    lastEditedBy?: StringNullableFilter<"Note"> | string | null
    lastEditedAt?: DateTimeFilter<"Note"> | Date | string
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
    collaborators?: NoteCollaboratorListRelationFilter
    presences?: UserPresenceListRelationFilter
    versions?: NoteVersionListRelationFilter
  }

  export type NoteOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    contentType?: SortOrder
    isPublic?: SortOrder
    ownerId?: SortOrder
    lastEditedBy?: SortOrderInput | SortOrder
    lastEditedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    collaborators?: NoteCollaboratorOrderByRelationAggregateInput
    presences?: UserPresenceOrderByRelationAggregateInput
    versions?: NoteVersionOrderByRelationAggregateInput
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    title?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    contentType?: StringFilter<"Note"> | string
    isPublic?: BoolFilter<"Note"> | boolean
    ownerId?: StringFilter<"Note"> | string
    lastEditedBy?: StringNullableFilter<"Note"> | string | null
    lastEditedAt?: DateTimeFilter<"Note"> | Date | string
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
    collaborators?: NoteCollaboratorListRelationFilter
    presences?: UserPresenceListRelationFilter
    versions?: NoteVersionListRelationFilter
  }, "id">

  export type NoteOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    contentType?: SortOrder
    isPublic?: SortOrder
    ownerId?: SortOrder
    lastEditedBy?: SortOrderInput | SortOrder
    lastEditedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NoteCountOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    OR?: NoteScalarWhereWithAggregatesInput[]
    NOT?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Note"> | string
    title?: StringWithAggregatesFilter<"Note"> | string
    content?: StringWithAggregatesFilter<"Note"> | string
    contentType?: StringWithAggregatesFilter<"Note"> | string
    isPublic?: BoolWithAggregatesFilter<"Note"> | boolean
    ownerId?: StringWithAggregatesFilter<"Note"> | string
    lastEditedBy?: StringNullableWithAggregatesFilter<"Note"> | string | null
    lastEditedAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
  }

  export type NoteCollaboratorWhereInput = {
    AND?: NoteCollaboratorWhereInput | NoteCollaboratorWhereInput[]
    OR?: NoteCollaboratorWhereInput[]
    NOT?: NoteCollaboratorWhereInput | NoteCollaboratorWhereInput[]
    id?: StringFilter<"NoteCollaborator"> | string
    noteId?: StringFilter<"NoteCollaborator"> | string
    userId?: StringFilter<"NoteCollaborator"> | string
    permission?: EnumPermissionFilter<"NoteCollaborator"> | $Enums.Permission
    addedAt?: DateTimeFilter<"NoteCollaborator"> | Date | string
    note?: XOR<NoteRelationFilter, NoteWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NoteCollaboratorOrderByWithRelationInput = {
    id?: SortOrder
    noteId?: SortOrder
    userId?: SortOrder
    permission?: SortOrder
    addedAt?: SortOrder
    note?: NoteOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type NoteCollaboratorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    noteId_userId?: NoteCollaboratorNoteIdUserIdCompoundUniqueInput
    AND?: NoteCollaboratorWhereInput | NoteCollaboratorWhereInput[]
    OR?: NoteCollaboratorWhereInput[]
    NOT?: NoteCollaboratorWhereInput | NoteCollaboratorWhereInput[]
    noteId?: StringFilter<"NoteCollaborator"> | string
    userId?: StringFilter<"NoteCollaborator"> | string
    permission?: EnumPermissionFilter<"NoteCollaborator"> | $Enums.Permission
    addedAt?: DateTimeFilter<"NoteCollaborator"> | Date | string
    note?: XOR<NoteRelationFilter, NoteWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "noteId_userId">

  export type NoteCollaboratorOrderByWithAggregationInput = {
    id?: SortOrder
    noteId?: SortOrder
    userId?: SortOrder
    permission?: SortOrder
    addedAt?: SortOrder
    _count?: NoteCollaboratorCountOrderByAggregateInput
    _max?: NoteCollaboratorMaxOrderByAggregateInput
    _min?: NoteCollaboratorMinOrderByAggregateInput
  }

  export type NoteCollaboratorScalarWhereWithAggregatesInput = {
    AND?: NoteCollaboratorScalarWhereWithAggregatesInput | NoteCollaboratorScalarWhereWithAggregatesInput[]
    OR?: NoteCollaboratorScalarWhereWithAggregatesInput[]
    NOT?: NoteCollaboratorScalarWhereWithAggregatesInput | NoteCollaboratorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NoteCollaborator"> | string
    noteId?: StringWithAggregatesFilter<"NoteCollaborator"> | string
    userId?: StringWithAggregatesFilter<"NoteCollaborator"> | string
    permission?: EnumPermissionWithAggregatesFilter<"NoteCollaborator"> | $Enums.Permission
    addedAt?: DateTimeWithAggregatesFilter<"NoteCollaborator"> | Date | string
  }

  export type UserPresenceWhereInput = {
    AND?: UserPresenceWhereInput | UserPresenceWhereInput[]
    OR?: UserPresenceWhereInput[]
    NOT?: UserPresenceWhereInput | UserPresenceWhereInput[]
    id?: StringFilter<"UserPresence"> | string
    userId?: StringFilter<"UserPresence"> | string
    noteId?: StringFilter<"UserPresence"> | string
    cursorPos?: IntNullableFilter<"UserPresence"> | number | null
    selection?: JsonNullableFilter<"UserPresence">
    color?: StringFilter<"UserPresence"> | string
    isActive?: BoolFilter<"UserPresence"> | boolean
    lastSeen?: DateTimeFilter<"UserPresence"> | Date | string
    createdAt?: DateTimeFilter<"UserPresence"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    note?: XOR<NoteRelationFilter, NoteWhereInput>
  }

  export type UserPresenceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    noteId?: SortOrder
    cursorPos?: SortOrderInput | SortOrder
    selection?: SortOrderInput | SortOrder
    color?: SortOrder
    isActive?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    note?: NoteOrderByWithRelationInput
  }

  export type UserPresenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_noteId?: UserPresenceUserIdNoteIdCompoundUniqueInput
    AND?: UserPresenceWhereInput | UserPresenceWhereInput[]
    OR?: UserPresenceWhereInput[]
    NOT?: UserPresenceWhereInput | UserPresenceWhereInput[]
    userId?: StringFilter<"UserPresence"> | string
    noteId?: StringFilter<"UserPresence"> | string
    cursorPos?: IntNullableFilter<"UserPresence"> | number | null
    selection?: JsonNullableFilter<"UserPresence">
    color?: StringFilter<"UserPresence"> | string
    isActive?: BoolFilter<"UserPresence"> | boolean
    lastSeen?: DateTimeFilter<"UserPresence"> | Date | string
    createdAt?: DateTimeFilter<"UserPresence"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    note?: XOR<NoteRelationFilter, NoteWhereInput>
  }, "id" | "userId_noteId">

  export type UserPresenceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    noteId?: SortOrder
    cursorPos?: SortOrderInput | SortOrder
    selection?: SortOrderInput | SortOrder
    color?: SortOrder
    isActive?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    _count?: UserPresenceCountOrderByAggregateInput
    _avg?: UserPresenceAvgOrderByAggregateInput
    _max?: UserPresenceMaxOrderByAggregateInput
    _min?: UserPresenceMinOrderByAggregateInput
    _sum?: UserPresenceSumOrderByAggregateInput
  }

  export type UserPresenceScalarWhereWithAggregatesInput = {
    AND?: UserPresenceScalarWhereWithAggregatesInput | UserPresenceScalarWhereWithAggregatesInput[]
    OR?: UserPresenceScalarWhereWithAggregatesInput[]
    NOT?: UserPresenceScalarWhereWithAggregatesInput | UserPresenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPresence"> | string
    userId?: StringWithAggregatesFilter<"UserPresence"> | string
    noteId?: StringWithAggregatesFilter<"UserPresence"> | string
    cursorPos?: IntNullableWithAggregatesFilter<"UserPresence"> | number | null
    selection?: JsonNullableWithAggregatesFilter<"UserPresence">
    color?: StringWithAggregatesFilter<"UserPresence"> | string
    isActive?: BoolWithAggregatesFilter<"UserPresence"> | boolean
    lastSeen?: DateTimeWithAggregatesFilter<"UserPresence"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"UserPresence"> | Date | string
  }

  export type NoteVersionWhereInput = {
    AND?: NoteVersionWhereInput | NoteVersionWhereInput[]
    OR?: NoteVersionWhereInput[]
    NOT?: NoteVersionWhereInput | NoteVersionWhereInput[]
    id?: StringFilter<"NoteVersion"> | string
    noteId?: StringFilter<"NoteVersion"> | string
    title?: StringFilter<"NoteVersion"> | string
    content?: StringFilter<"NoteVersion"> | string
    version?: IntFilter<"NoteVersion"> | number
    createdBy?: StringFilter<"NoteVersion"> | string
    createdAt?: DateTimeFilter<"NoteVersion"> | Date | string
    note?: XOR<NoteRelationFilter, NoteWhereInput>
  }

  export type NoteVersionOrderByWithRelationInput = {
    id?: SortOrder
    noteId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    version?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    note?: NoteOrderByWithRelationInput
  }

  export type NoteVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    noteId_version?: NoteVersionNoteIdVersionCompoundUniqueInput
    AND?: NoteVersionWhereInput | NoteVersionWhereInput[]
    OR?: NoteVersionWhereInput[]
    NOT?: NoteVersionWhereInput | NoteVersionWhereInput[]
    noteId?: StringFilter<"NoteVersion"> | string
    title?: StringFilter<"NoteVersion"> | string
    content?: StringFilter<"NoteVersion"> | string
    version?: IntFilter<"NoteVersion"> | number
    createdBy?: StringFilter<"NoteVersion"> | string
    createdAt?: DateTimeFilter<"NoteVersion"> | Date | string
    note?: XOR<NoteRelationFilter, NoteWhereInput>
  }, "id" | "noteId_version">

  export type NoteVersionOrderByWithAggregationInput = {
    id?: SortOrder
    noteId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    version?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    _count?: NoteVersionCountOrderByAggregateInput
    _avg?: NoteVersionAvgOrderByAggregateInput
    _max?: NoteVersionMaxOrderByAggregateInput
    _min?: NoteVersionMinOrderByAggregateInput
    _sum?: NoteVersionSumOrderByAggregateInput
  }

  export type NoteVersionScalarWhereWithAggregatesInput = {
    AND?: NoteVersionScalarWhereWithAggregatesInput | NoteVersionScalarWhereWithAggregatesInput[]
    OR?: NoteVersionScalarWhereWithAggregatesInput[]
    NOT?: NoteVersionScalarWhereWithAggregatesInput | NoteVersionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NoteVersion"> | string
    noteId?: StringWithAggregatesFilter<"NoteVersion"> | string
    title?: StringWithAggregatesFilter<"NoteVersion"> | string
    content?: StringWithAggregatesFilter<"NoteVersion"> | string
    version?: IntWithAggregatesFilter<"NoteVersion"> | number
    createdBy?: StringWithAggregatesFilter<"NoteVersion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NoteVersion"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    firstName: string
    lastName: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteCreateNestedManyWithoutOwnerInput
    collaborators?: NoteCollaboratorCreateNestedManyWithoutUserInput
    presences?: UserPresenceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    firstName: string
    lastName: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteUncheckedCreateNestedManyWithoutOwnerInput
    collaborators?: NoteCollaboratorUncheckedCreateNestedManyWithoutUserInput
    presences?: UserPresenceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUpdateManyWithoutOwnerNestedInput
    collaborators?: NoteCollaboratorUpdateManyWithoutUserNestedInput
    presences?: UserPresenceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUncheckedUpdateManyWithoutOwnerNestedInput
    collaborators?: NoteCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    presences?: UserPresenceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    firstName: string
    lastName: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateInput = {
    id?: string
    title: string
    content: string
    contentType?: string
    isPublic?: boolean
    lastEditedBy?: string | null
    lastEditedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutNotesInput
    collaborators?: NoteCollaboratorCreateNestedManyWithoutNoteInput
    presences?: UserPresenceCreateNestedManyWithoutNoteInput
    versions?: NoteVersionCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    contentType?: string
    isPublic?: boolean
    ownerId: string
    lastEditedBy?: string | null
    lastEditedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    collaborators?: NoteCollaboratorUncheckedCreateNestedManyWithoutNoteInput
    presences?: UserPresenceUncheckedCreateNestedManyWithoutNoteInput
    versions?: NoteVersionUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutNotesNestedInput
    collaborators?: NoteCollaboratorUpdateManyWithoutNoteNestedInput
    presences?: UserPresenceUpdateManyWithoutNoteNestedInput
    versions?: NoteVersionUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborators?: NoteCollaboratorUncheckedUpdateManyWithoutNoteNestedInput
    presences?: UserPresenceUncheckedUpdateManyWithoutNoteNestedInput
    versions?: NoteVersionUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type NoteCreateManyInput = {
    id?: string
    title: string
    content: string
    contentType?: string
    isPublic?: boolean
    ownerId: string
    lastEditedBy?: string | null
    lastEditedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCollaboratorCreateInput = {
    id?: string
    permission?: $Enums.Permission
    addedAt?: Date | string
    note: NoteCreateNestedOneWithoutCollaboratorsInput
    user: UserCreateNestedOneWithoutCollaboratorsInput
  }

  export type NoteCollaboratorUncheckedCreateInput = {
    id?: string
    noteId: string
    userId: string
    permission?: $Enums.Permission
    addedAt?: Date | string
  }

  export type NoteCollaboratorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission?: EnumPermissionFieldUpdateOperationsInput | $Enums.Permission
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NoteUpdateOneRequiredWithoutCollaboratorsNestedInput
    user?: UserUpdateOneRequiredWithoutCollaboratorsNestedInput
  }

  export type NoteCollaboratorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    noteId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    permission?: EnumPermissionFieldUpdateOperationsInput | $Enums.Permission
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCollaboratorCreateManyInput = {
    id?: string
    noteId: string
    userId: string
    permission?: $Enums.Permission
    addedAt?: Date | string
  }

  export type NoteCollaboratorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission?: EnumPermissionFieldUpdateOperationsInput | $Enums.Permission
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCollaboratorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    noteId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    permission?: EnumPermissionFieldUpdateOperationsInput | $Enums.Permission
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPresenceCreateInput = {
    id?: string
    cursorPos?: number | null
    selection?: NullableJsonNullValueInput | InputJsonValue
    color: string
    isActive?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPresencesInput
    note: NoteCreateNestedOneWithoutPresencesInput
  }

  export type UserPresenceUncheckedCreateInput = {
    id?: string
    userId: string
    noteId: string
    cursorPos?: number | null
    selection?: NullableJsonNullValueInput | InputJsonValue
    color: string
    isActive?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
  }

  export type UserPresenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cursorPos?: NullableIntFieldUpdateOperationsInput | number | null
    selection?: NullableJsonNullValueInput | InputJsonValue
    color?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPresencesNestedInput
    note?: NoteUpdateOneRequiredWithoutPresencesNestedInput
  }

  export type UserPresenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    noteId?: StringFieldUpdateOperationsInput | string
    cursorPos?: NullableIntFieldUpdateOperationsInput | number | null
    selection?: NullableJsonNullValueInput | InputJsonValue
    color?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPresenceCreateManyInput = {
    id?: string
    userId: string
    noteId: string
    cursorPos?: number | null
    selection?: NullableJsonNullValueInput | InputJsonValue
    color: string
    isActive?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
  }

  export type UserPresenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cursorPos?: NullableIntFieldUpdateOperationsInput | number | null
    selection?: NullableJsonNullValueInput | InputJsonValue
    color?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPresenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    noteId?: StringFieldUpdateOperationsInput | string
    cursorPos?: NullableIntFieldUpdateOperationsInput | number | null
    selection?: NullableJsonNullValueInput | InputJsonValue
    color?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteVersionCreateInput = {
    id?: string
    title: string
    content: string
    version: number
    createdBy: string
    createdAt?: Date | string
    note: NoteCreateNestedOneWithoutVersionsInput
  }

  export type NoteVersionUncheckedCreateInput = {
    id?: string
    noteId: string
    title: string
    content: string
    version: number
    createdBy: string
    createdAt?: Date | string
  }

  export type NoteVersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NoteUpdateOneRequiredWithoutVersionsNestedInput
  }

  export type NoteVersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    noteId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteVersionCreateManyInput = {
    id?: string
    noteId: string
    title: string
    content: string
    version: number
    createdBy: string
    createdAt?: Date | string
  }

  export type NoteVersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteVersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    noteId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NoteListRelationFilter = {
    every?: NoteWhereInput
    some?: NoteWhereInput
    none?: NoteWhereInput
  }

  export type NoteCollaboratorListRelationFilter = {
    every?: NoteCollaboratorWhereInput
    some?: NoteCollaboratorWhereInput
    none?: NoteCollaboratorWhereInput
  }

  export type UserPresenceListRelationFilter = {
    every?: UserPresenceWhereInput
    some?: UserPresenceWhereInput
    none?: UserPresenceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteCollaboratorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPresenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NoteVersionListRelationFilter = {
    every?: NoteVersionWhereInput
    some?: NoteVersionWhereInput
    none?: NoteVersionWhereInput
  }

  export type NoteVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    contentType?: SortOrder
    isPublic?: SortOrder
    ownerId?: SortOrder
    lastEditedBy?: SortOrder
    lastEditedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    contentType?: SortOrder
    isPublic?: SortOrder
    ownerId?: SortOrder
    lastEditedBy?: SortOrder
    lastEditedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    contentType?: SortOrder
    isPublic?: SortOrder
    ownerId?: SortOrder
    lastEditedBy?: SortOrder
    lastEditedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumPermissionFilter<$PrismaModel = never> = {
    equals?: $Enums.Permission | EnumPermissionFieldRefInput<$PrismaModel>
    in?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionFilter<$PrismaModel> | $Enums.Permission
  }

  export type NoteRelationFilter = {
    is?: NoteWhereInput
    isNot?: NoteWhereInput
  }

  export type NoteCollaboratorNoteIdUserIdCompoundUniqueInput = {
    noteId: string
    userId: string
  }

  export type NoteCollaboratorCountOrderByAggregateInput = {
    id?: SortOrder
    noteId?: SortOrder
    userId?: SortOrder
    permission?: SortOrder
    addedAt?: SortOrder
  }

  export type NoteCollaboratorMaxOrderByAggregateInput = {
    id?: SortOrder
    noteId?: SortOrder
    userId?: SortOrder
    permission?: SortOrder
    addedAt?: SortOrder
  }

  export type NoteCollaboratorMinOrderByAggregateInput = {
    id?: SortOrder
    noteId?: SortOrder
    userId?: SortOrder
    permission?: SortOrder
    addedAt?: SortOrder
  }

  export type EnumPermissionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Permission | EnumPermissionFieldRefInput<$PrismaModel>
    in?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionWithAggregatesFilter<$PrismaModel> | $Enums.Permission
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissionFilter<$PrismaModel>
    _max?: NestedEnumPermissionFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserPresenceUserIdNoteIdCompoundUniqueInput = {
    userId: string
    noteId: string
  }

  export type UserPresenceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    noteId?: SortOrder
    cursorPos?: SortOrder
    selection?: SortOrder
    color?: SortOrder
    isActive?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
  }

  export type UserPresenceAvgOrderByAggregateInput = {
    cursorPos?: SortOrder
  }

  export type UserPresenceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    noteId?: SortOrder
    cursorPos?: SortOrder
    color?: SortOrder
    isActive?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
  }

  export type UserPresenceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    noteId?: SortOrder
    cursorPos?: SortOrder
    color?: SortOrder
    isActive?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
  }

  export type UserPresenceSumOrderByAggregateInput = {
    cursorPos?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NoteVersionNoteIdVersionCompoundUniqueInput = {
    noteId: string
    version: number
  }

  export type NoteVersionCountOrderByAggregateInput = {
    id?: SortOrder
    noteId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    version?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type NoteVersionAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type NoteVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    noteId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    version?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type NoteVersionMinOrderByAggregateInput = {
    id?: SortOrder
    noteId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    version?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type NoteVersionSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NoteCreateNestedManyWithoutOwnerInput = {
    create?: XOR<NoteCreateWithoutOwnerInput, NoteUncheckedCreateWithoutOwnerInput> | NoteCreateWithoutOwnerInput[] | NoteUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutOwnerInput | NoteCreateOrConnectWithoutOwnerInput[]
    createMany?: NoteCreateManyOwnerInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type NoteCollaboratorCreateNestedManyWithoutUserInput = {
    create?: XOR<NoteCollaboratorCreateWithoutUserInput, NoteCollaboratorUncheckedCreateWithoutUserInput> | NoteCollaboratorCreateWithoutUserInput[] | NoteCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCollaboratorCreateOrConnectWithoutUserInput | NoteCollaboratorCreateOrConnectWithoutUserInput[]
    createMany?: NoteCollaboratorCreateManyUserInputEnvelope
    connect?: NoteCollaboratorWhereUniqueInput | NoteCollaboratorWhereUniqueInput[]
  }

  export type UserPresenceCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPresenceCreateWithoutUserInput, UserPresenceUncheckedCreateWithoutUserInput> | UserPresenceCreateWithoutUserInput[] | UserPresenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPresenceCreateOrConnectWithoutUserInput | UserPresenceCreateOrConnectWithoutUserInput[]
    createMany?: UserPresenceCreateManyUserInputEnvelope
    connect?: UserPresenceWhereUniqueInput | UserPresenceWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<NoteCreateWithoutOwnerInput, NoteUncheckedCreateWithoutOwnerInput> | NoteCreateWithoutOwnerInput[] | NoteUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutOwnerInput | NoteCreateOrConnectWithoutOwnerInput[]
    createMany?: NoteCreateManyOwnerInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type NoteCollaboratorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NoteCollaboratorCreateWithoutUserInput, NoteCollaboratorUncheckedCreateWithoutUserInput> | NoteCollaboratorCreateWithoutUserInput[] | NoteCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCollaboratorCreateOrConnectWithoutUserInput | NoteCollaboratorCreateOrConnectWithoutUserInput[]
    createMany?: NoteCollaboratorCreateManyUserInputEnvelope
    connect?: NoteCollaboratorWhereUniqueInput | NoteCollaboratorWhereUniqueInput[]
  }

  export type UserPresenceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPresenceCreateWithoutUserInput, UserPresenceUncheckedCreateWithoutUserInput> | UserPresenceCreateWithoutUserInput[] | UserPresenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPresenceCreateOrConnectWithoutUserInput | UserPresenceCreateOrConnectWithoutUserInput[]
    createMany?: UserPresenceCreateManyUserInputEnvelope
    connect?: UserPresenceWhereUniqueInput | UserPresenceWhereUniqueInput[]
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

  export type NoteUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<NoteCreateWithoutOwnerInput, NoteUncheckedCreateWithoutOwnerInput> | NoteCreateWithoutOwnerInput[] | NoteUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutOwnerInput | NoteCreateOrConnectWithoutOwnerInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutOwnerInput | NoteUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: NoteCreateManyOwnerInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutOwnerInput | NoteUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutOwnerInput | NoteUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type NoteCollaboratorUpdateManyWithoutUserNestedInput = {
    create?: XOR<NoteCollaboratorCreateWithoutUserInput, NoteCollaboratorUncheckedCreateWithoutUserInput> | NoteCollaboratorCreateWithoutUserInput[] | NoteCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCollaboratorCreateOrConnectWithoutUserInput | NoteCollaboratorCreateOrConnectWithoutUserInput[]
    upsert?: NoteCollaboratorUpsertWithWhereUniqueWithoutUserInput | NoteCollaboratorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NoteCollaboratorCreateManyUserInputEnvelope
    set?: NoteCollaboratorWhereUniqueInput | NoteCollaboratorWhereUniqueInput[]
    disconnect?: NoteCollaboratorWhereUniqueInput | NoteCollaboratorWhereUniqueInput[]
    delete?: NoteCollaboratorWhereUniqueInput | NoteCollaboratorWhereUniqueInput[]
    connect?: NoteCollaboratorWhereUniqueInput | NoteCollaboratorWhereUniqueInput[]
    update?: NoteCollaboratorUpdateWithWhereUniqueWithoutUserInput | NoteCollaboratorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NoteCollaboratorUpdateManyWithWhereWithoutUserInput | NoteCollaboratorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NoteCollaboratorScalarWhereInput | NoteCollaboratorScalarWhereInput[]
  }

  export type UserPresenceUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPresenceCreateWithoutUserInput, UserPresenceUncheckedCreateWithoutUserInput> | UserPresenceCreateWithoutUserInput[] | UserPresenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPresenceCreateOrConnectWithoutUserInput | UserPresenceCreateOrConnectWithoutUserInput[]
    upsert?: UserPresenceUpsertWithWhereUniqueWithoutUserInput | UserPresenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPresenceCreateManyUserInputEnvelope
    set?: UserPresenceWhereUniqueInput | UserPresenceWhereUniqueInput[]
    disconnect?: UserPresenceWhereUniqueInput | UserPresenceWhereUniqueInput[]
    delete?: UserPresenceWhereUniqueInput | UserPresenceWhereUniqueInput[]
    connect?: UserPresenceWhereUniqueInput | UserPresenceWhereUniqueInput[]
    update?: UserPresenceUpdateWithWhereUniqueWithoutUserInput | UserPresenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPresenceUpdateManyWithWhereWithoutUserInput | UserPresenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPresenceScalarWhereInput | UserPresenceScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<NoteCreateWithoutOwnerInput, NoteUncheckedCreateWithoutOwnerInput> | NoteCreateWithoutOwnerInput[] | NoteUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutOwnerInput | NoteCreateOrConnectWithoutOwnerInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutOwnerInput | NoteUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: NoteCreateManyOwnerInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutOwnerInput | NoteUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutOwnerInput | NoteUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type NoteCollaboratorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NoteCollaboratorCreateWithoutUserInput, NoteCollaboratorUncheckedCreateWithoutUserInput> | NoteCollaboratorCreateWithoutUserInput[] | NoteCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCollaboratorCreateOrConnectWithoutUserInput | NoteCollaboratorCreateOrConnectWithoutUserInput[]
    upsert?: NoteCollaboratorUpsertWithWhereUniqueWithoutUserInput | NoteCollaboratorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NoteCollaboratorCreateManyUserInputEnvelope
    set?: NoteCollaboratorWhereUniqueInput | NoteCollaboratorWhereUniqueInput[]
    disconnect?: NoteCollaboratorWhereUniqueInput | NoteCollaboratorWhereUniqueInput[]
    delete?: NoteCollaboratorWhereUniqueInput | NoteCollaboratorWhereUniqueInput[]
    connect?: NoteCollaboratorWhereUniqueInput | NoteCollaboratorWhereUniqueInput[]
    update?: NoteCollaboratorUpdateWithWhereUniqueWithoutUserInput | NoteCollaboratorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NoteCollaboratorUpdateManyWithWhereWithoutUserInput | NoteCollaboratorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NoteCollaboratorScalarWhereInput | NoteCollaboratorScalarWhereInput[]
  }

  export type UserPresenceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPresenceCreateWithoutUserInput, UserPresenceUncheckedCreateWithoutUserInput> | UserPresenceCreateWithoutUserInput[] | UserPresenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPresenceCreateOrConnectWithoutUserInput | UserPresenceCreateOrConnectWithoutUserInput[]
    upsert?: UserPresenceUpsertWithWhereUniqueWithoutUserInput | UserPresenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPresenceCreateManyUserInputEnvelope
    set?: UserPresenceWhereUniqueInput | UserPresenceWhereUniqueInput[]
    disconnect?: UserPresenceWhereUniqueInput | UserPresenceWhereUniqueInput[]
    delete?: UserPresenceWhereUniqueInput | UserPresenceWhereUniqueInput[]
    connect?: UserPresenceWhereUniqueInput | UserPresenceWhereUniqueInput[]
    update?: UserPresenceUpdateWithWhereUniqueWithoutUserInput | UserPresenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPresenceUpdateManyWithWhereWithoutUserInput | UserPresenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPresenceScalarWhereInput | UserPresenceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNotesInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    connect?: UserWhereUniqueInput
  }

  export type NoteCollaboratorCreateNestedManyWithoutNoteInput = {
    create?: XOR<NoteCollaboratorCreateWithoutNoteInput, NoteCollaboratorUncheckedCreateWithoutNoteInput> | NoteCollaboratorCreateWithoutNoteInput[] | NoteCollaboratorUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteCollaboratorCreateOrConnectWithoutNoteInput | NoteCollaboratorCreateOrConnectWithoutNoteInput[]
    createMany?: NoteCollaboratorCreateManyNoteInputEnvelope
    connect?: NoteCollaboratorWhereUniqueInput | NoteCollaboratorWhereUniqueInput[]
  }

  export type UserPresenceCreateNestedManyWithoutNoteInput = {
    create?: XOR<UserPresenceCreateWithoutNoteInput, UserPresenceUncheckedCreateWithoutNoteInput> | UserPresenceCreateWithoutNoteInput[] | UserPresenceUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: UserPresenceCreateOrConnectWithoutNoteInput | UserPresenceCreateOrConnectWithoutNoteInput[]
    createMany?: UserPresenceCreateManyNoteInputEnvelope
    connect?: UserPresenceWhereUniqueInput | UserPresenceWhereUniqueInput[]
  }

  export type NoteVersionCreateNestedManyWithoutNoteInput = {
    create?: XOR<NoteVersionCreateWithoutNoteInput, NoteVersionUncheckedCreateWithoutNoteInput> | NoteVersionCreateWithoutNoteInput[] | NoteVersionUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteVersionCreateOrConnectWithoutNoteInput | NoteVersionCreateOrConnectWithoutNoteInput[]
    createMany?: NoteVersionCreateManyNoteInputEnvelope
    connect?: NoteVersionWhereUniqueInput | NoteVersionWhereUniqueInput[]
  }

  export type NoteCollaboratorUncheckedCreateNestedManyWithoutNoteInput = {
    create?: XOR<NoteCollaboratorCreateWithoutNoteInput, NoteCollaboratorUncheckedCreateWithoutNoteInput> | NoteCollaboratorCreateWithoutNoteInput[] | NoteCollaboratorUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteCollaboratorCreateOrConnectWithoutNoteInput | NoteCollaboratorCreateOrConnectWithoutNoteInput[]
    createMany?: NoteCollaboratorCreateManyNoteInputEnvelope
    connect?: NoteCollaboratorWhereUniqueInput | NoteCollaboratorWhereUniqueInput[]
  }

  export type UserPresenceUncheckedCreateNestedManyWithoutNoteInput = {
    create?: XOR<UserPresenceCreateWithoutNoteInput, UserPresenceUncheckedCreateWithoutNoteInput> | UserPresenceCreateWithoutNoteInput[] | UserPresenceUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: UserPresenceCreateOrConnectWithoutNoteInput | UserPresenceCreateOrConnectWithoutNoteInput[]
    createMany?: UserPresenceCreateManyNoteInputEnvelope
    connect?: UserPresenceWhereUniqueInput | UserPresenceWhereUniqueInput[]
  }

  export type NoteVersionUncheckedCreateNestedManyWithoutNoteInput = {
    create?: XOR<NoteVersionCreateWithoutNoteInput, NoteVersionUncheckedCreateWithoutNoteInput> | NoteVersionCreateWithoutNoteInput[] | NoteVersionUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteVersionCreateOrConnectWithoutNoteInput | NoteVersionCreateOrConnectWithoutNoteInput[]
    createMany?: NoteVersionCreateManyNoteInputEnvelope
    connect?: NoteVersionWhereUniqueInput | NoteVersionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    upsert?: UserUpsertWithoutNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotesInput, UserUpdateWithoutNotesInput>, UserUncheckedUpdateWithoutNotesInput>
  }

  export type NoteCollaboratorUpdateManyWithoutNoteNestedInput = {
    create?: XOR<NoteCollaboratorCreateWithoutNoteInput, NoteCollaboratorUncheckedCreateWithoutNoteInput> | NoteCollaboratorCreateWithoutNoteInput[] | NoteCollaboratorUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteCollaboratorCreateOrConnectWithoutNoteInput | NoteCollaboratorCreateOrConnectWithoutNoteInput[]
    upsert?: NoteCollaboratorUpsertWithWhereUniqueWithoutNoteInput | NoteCollaboratorUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: NoteCollaboratorCreateManyNoteInputEnvelope
    set?: NoteCollaboratorWhereUniqueInput | NoteCollaboratorWhereUniqueInput[]
    disconnect?: NoteCollaboratorWhereUniqueInput | NoteCollaboratorWhereUniqueInput[]
    delete?: NoteCollaboratorWhereUniqueInput | NoteCollaboratorWhereUniqueInput[]
    connect?: NoteCollaboratorWhereUniqueInput | NoteCollaboratorWhereUniqueInput[]
    update?: NoteCollaboratorUpdateWithWhereUniqueWithoutNoteInput | NoteCollaboratorUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: NoteCollaboratorUpdateManyWithWhereWithoutNoteInput | NoteCollaboratorUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: NoteCollaboratorScalarWhereInput | NoteCollaboratorScalarWhereInput[]
  }

  export type UserPresenceUpdateManyWithoutNoteNestedInput = {
    create?: XOR<UserPresenceCreateWithoutNoteInput, UserPresenceUncheckedCreateWithoutNoteInput> | UserPresenceCreateWithoutNoteInput[] | UserPresenceUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: UserPresenceCreateOrConnectWithoutNoteInput | UserPresenceCreateOrConnectWithoutNoteInput[]
    upsert?: UserPresenceUpsertWithWhereUniqueWithoutNoteInput | UserPresenceUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: UserPresenceCreateManyNoteInputEnvelope
    set?: UserPresenceWhereUniqueInput | UserPresenceWhereUniqueInput[]
    disconnect?: UserPresenceWhereUniqueInput | UserPresenceWhereUniqueInput[]
    delete?: UserPresenceWhereUniqueInput | UserPresenceWhereUniqueInput[]
    connect?: UserPresenceWhereUniqueInput | UserPresenceWhereUniqueInput[]
    update?: UserPresenceUpdateWithWhereUniqueWithoutNoteInput | UserPresenceUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: UserPresenceUpdateManyWithWhereWithoutNoteInput | UserPresenceUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: UserPresenceScalarWhereInput | UserPresenceScalarWhereInput[]
  }

  export type NoteVersionUpdateManyWithoutNoteNestedInput = {
    create?: XOR<NoteVersionCreateWithoutNoteInput, NoteVersionUncheckedCreateWithoutNoteInput> | NoteVersionCreateWithoutNoteInput[] | NoteVersionUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteVersionCreateOrConnectWithoutNoteInput | NoteVersionCreateOrConnectWithoutNoteInput[]
    upsert?: NoteVersionUpsertWithWhereUniqueWithoutNoteInput | NoteVersionUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: NoteVersionCreateManyNoteInputEnvelope
    set?: NoteVersionWhereUniqueInput | NoteVersionWhereUniqueInput[]
    disconnect?: NoteVersionWhereUniqueInput | NoteVersionWhereUniqueInput[]
    delete?: NoteVersionWhereUniqueInput | NoteVersionWhereUniqueInput[]
    connect?: NoteVersionWhereUniqueInput | NoteVersionWhereUniqueInput[]
    update?: NoteVersionUpdateWithWhereUniqueWithoutNoteInput | NoteVersionUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: NoteVersionUpdateManyWithWhereWithoutNoteInput | NoteVersionUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: NoteVersionScalarWhereInput | NoteVersionScalarWhereInput[]
  }

  export type NoteCollaboratorUncheckedUpdateManyWithoutNoteNestedInput = {
    create?: XOR<NoteCollaboratorCreateWithoutNoteInput, NoteCollaboratorUncheckedCreateWithoutNoteInput> | NoteCollaboratorCreateWithoutNoteInput[] | NoteCollaboratorUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteCollaboratorCreateOrConnectWithoutNoteInput | NoteCollaboratorCreateOrConnectWithoutNoteInput[]
    upsert?: NoteCollaboratorUpsertWithWhereUniqueWithoutNoteInput | NoteCollaboratorUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: NoteCollaboratorCreateManyNoteInputEnvelope
    set?: NoteCollaboratorWhereUniqueInput | NoteCollaboratorWhereUniqueInput[]
    disconnect?: NoteCollaboratorWhereUniqueInput | NoteCollaboratorWhereUniqueInput[]
    delete?: NoteCollaboratorWhereUniqueInput | NoteCollaboratorWhereUniqueInput[]
    connect?: NoteCollaboratorWhereUniqueInput | NoteCollaboratorWhereUniqueInput[]
    update?: NoteCollaboratorUpdateWithWhereUniqueWithoutNoteInput | NoteCollaboratorUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: NoteCollaboratorUpdateManyWithWhereWithoutNoteInput | NoteCollaboratorUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: NoteCollaboratorScalarWhereInput | NoteCollaboratorScalarWhereInput[]
  }

  export type UserPresenceUncheckedUpdateManyWithoutNoteNestedInput = {
    create?: XOR<UserPresenceCreateWithoutNoteInput, UserPresenceUncheckedCreateWithoutNoteInput> | UserPresenceCreateWithoutNoteInput[] | UserPresenceUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: UserPresenceCreateOrConnectWithoutNoteInput | UserPresenceCreateOrConnectWithoutNoteInput[]
    upsert?: UserPresenceUpsertWithWhereUniqueWithoutNoteInput | UserPresenceUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: UserPresenceCreateManyNoteInputEnvelope
    set?: UserPresenceWhereUniqueInput | UserPresenceWhereUniqueInput[]
    disconnect?: UserPresenceWhereUniqueInput | UserPresenceWhereUniqueInput[]
    delete?: UserPresenceWhereUniqueInput | UserPresenceWhereUniqueInput[]
    connect?: UserPresenceWhereUniqueInput | UserPresenceWhereUniqueInput[]
    update?: UserPresenceUpdateWithWhereUniqueWithoutNoteInput | UserPresenceUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: UserPresenceUpdateManyWithWhereWithoutNoteInput | UserPresenceUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: UserPresenceScalarWhereInput | UserPresenceScalarWhereInput[]
  }

  export type NoteVersionUncheckedUpdateManyWithoutNoteNestedInput = {
    create?: XOR<NoteVersionCreateWithoutNoteInput, NoteVersionUncheckedCreateWithoutNoteInput> | NoteVersionCreateWithoutNoteInput[] | NoteVersionUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteVersionCreateOrConnectWithoutNoteInput | NoteVersionCreateOrConnectWithoutNoteInput[]
    upsert?: NoteVersionUpsertWithWhereUniqueWithoutNoteInput | NoteVersionUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: NoteVersionCreateManyNoteInputEnvelope
    set?: NoteVersionWhereUniqueInput | NoteVersionWhereUniqueInput[]
    disconnect?: NoteVersionWhereUniqueInput | NoteVersionWhereUniqueInput[]
    delete?: NoteVersionWhereUniqueInput | NoteVersionWhereUniqueInput[]
    connect?: NoteVersionWhereUniqueInput | NoteVersionWhereUniqueInput[]
    update?: NoteVersionUpdateWithWhereUniqueWithoutNoteInput | NoteVersionUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: NoteVersionUpdateManyWithWhereWithoutNoteInput | NoteVersionUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: NoteVersionScalarWhereInput | NoteVersionScalarWhereInput[]
  }

  export type NoteCreateNestedOneWithoutCollaboratorsInput = {
    create?: XOR<NoteCreateWithoutCollaboratorsInput, NoteUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: NoteCreateOrConnectWithoutCollaboratorsInput
    connect?: NoteWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCollaboratorsInput = {
    create?: XOR<UserCreateWithoutCollaboratorsInput, UserUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollaboratorsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPermissionFieldUpdateOperationsInput = {
    set?: $Enums.Permission
  }

  export type NoteUpdateOneRequiredWithoutCollaboratorsNestedInput = {
    create?: XOR<NoteCreateWithoutCollaboratorsInput, NoteUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: NoteCreateOrConnectWithoutCollaboratorsInput
    upsert?: NoteUpsertWithoutCollaboratorsInput
    connect?: NoteWhereUniqueInput
    update?: XOR<XOR<NoteUpdateToOneWithWhereWithoutCollaboratorsInput, NoteUpdateWithoutCollaboratorsInput>, NoteUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type UserUpdateOneRequiredWithoutCollaboratorsNestedInput = {
    create?: XOR<UserCreateWithoutCollaboratorsInput, UserUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollaboratorsInput
    upsert?: UserUpsertWithoutCollaboratorsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCollaboratorsInput, UserUpdateWithoutCollaboratorsInput>, UserUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type UserCreateNestedOneWithoutPresencesInput = {
    create?: XOR<UserCreateWithoutPresencesInput, UserUncheckedCreateWithoutPresencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPresencesInput
    connect?: UserWhereUniqueInput
  }

  export type NoteCreateNestedOneWithoutPresencesInput = {
    create?: XOR<NoteCreateWithoutPresencesInput, NoteUncheckedCreateWithoutPresencesInput>
    connectOrCreate?: NoteCreateOrConnectWithoutPresencesInput
    connect?: NoteWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPresencesNestedInput = {
    create?: XOR<UserCreateWithoutPresencesInput, UserUncheckedCreateWithoutPresencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPresencesInput
    upsert?: UserUpsertWithoutPresencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPresencesInput, UserUpdateWithoutPresencesInput>, UserUncheckedUpdateWithoutPresencesInput>
  }

  export type NoteUpdateOneRequiredWithoutPresencesNestedInput = {
    create?: XOR<NoteCreateWithoutPresencesInput, NoteUncheckedCreateWithoutPresencesInput>
    connectOrCreate?: NoteCreateOrConnectWithoutPresencesInput
    upsert?: NoteUpsertWithoutPresencesInput
    connect?: NoteWhereUniqueInput
    update?: XOR<XOR<NoteUpdateToOneWithWhereWithoutPresencesInput, NoteUpdateWithoutPresencesInput>, NoteUncheckedUpdateWithoutPresencesInput>
  }

  export type NoteCreateNestedOneWithoutVersionsInput = {
    create?: XOR<NoteCreateWithoutVersionsInput, NoteUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: NoteCreateOrConnectWithoutVersionsInput
    connect?: NoteWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NoteUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<NoteCreateWithoutVersionsInput, NoteUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: NoteCreateOrConnectWithoutVersionsInput
    upsert?: NoteUpsertWithoutVersionsInput
    connect?: NoteWhereUniqueInput
    update?: XOR<XOR<NoteUpdateToOneWithWhereWithoutVersionsInput, NoteUpdateWithoutVersionsInput>, NoteUncheckedUpdateWithoutVersionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPermissionFilter<$PrismaModel = never> = {
    equals?: $Enums.Permission | EnumPermissionFieldRefInput<$PrismaModel>
    in?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionFilter<$PrismaModel> | $Enums.Permission
  }

  export type NestedEnumPermissionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Permission | EnumPermissionFieldRefInput<$PrismaModel>
    in?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionWithAggregatesFilter<$PrismaModel> | $Enums.Permission
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissionFilter<$PrismaModel>
    _max?: NestedEnumPermissionFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NoteCreateWithoutOwnerInput = {
    id?: string
    title: string
    content: string
    contentType?: string
    isPublic?: boolean
    lastEditedBy?: string | null
    lastEditedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    collaborators?: NoteCollaboratorCreateNestedManyWithoutNoteInput
    presences?: UserPresenceCreateNestedManyWithoutNoteInput
    versions?: NoteVersionCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    content: string
    contentType?: string
    isPublic?: boolean
    lastEditedBy?: string | null
    lastEditedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    collaborators?: NoteCollaboratorUncheckedCreateNestedManyWithoutNoteInput
    presences?: UserPresenceUncheckedCreateNestedManyWithoutNoteInput
    versions?: NoteVersionUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteCreateOrConnectWithoutOwnerInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutOwnerInput, NoteUncheckedCreateWithoutOwnerInput>
  }

  export type NoteCreateManyOwnerInputEnvelope = {
    data: NoteCreateManyOwnerInput | NoteCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type NoteCollaboratorCreateWithoutUserInput = {
    id?: string
    permission?: $Enums.Permission
    addedAt?: Date | string
    note: NoteCreateNestedOneWithoutCollaboratorsInput
  }

  export type NoteCollaboratorUncheckedCreateWithoutUserInput = {
    id?: string
    noteId: string
    permission?: $Enums.Permission
    addedAt?: Date | string
  }

  export type NoteCollaboratorCreateOrConnectWithoutUserInput = {
    where: NoteCollaboratorWhereUniqueInput
    create: XOR<NoteCollaboratorCreateWithoutUserInput, NoteCollaboratorUncheckedCreateWithoutUserInput>
  }

  export type NoteCollaboratorCreateManyUserInputEnvelope = {
    data: NoteCollaboratorCreateManyUserInput | NoteCollaboratorCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPresenceCreateWithoutUserInput = {
    id?: string
    cursorPos?: number | null
    selection?: NullableJsonNullValueInput | InputJsonValue
    color: string
    isActive?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    note: NoteCreateNestedOneWithoutPresencesInput
  }

  export type UserPresenceUncheckedCreateWithoutUserInput = {
    id?: string
    noteId: string
    cursorPos?: number | null
    selection?: NullableJsonNullValueInput | InputJsonValue
    color: string
    isActive?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
  }

  export type UserPresenceCreateOrConnectWithoutUserInput = {
    where: UserPresenceWhereUniqueInput
    create: XOR<UserPresenceCreateWithoutUserInput, UserPresenceUncheckedCreateWithoutUserInput>
  }

  export type UserPresenceCreateManyUserInputEnvelope = {
    data: UserPresenceCreateManyUserInput | UserPresenceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NoteUpsertWithWhereUniqueWithoutOwnerInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutOwnerInput, NoteUncheckedUpdateWithoutOwnerInput>
    create: XOR<NoteCreateWithoutOwnerInput, NoteUncheckedCreateWithoutOwnerInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutOwnerInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutOwnerInput, NoteUncheckedUpdateWithoutOwnerInput>
  }

  export type NoteUpdateManyWithWhereWithoutOwnerInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutOwnerInput>
  }

  export type NoteScalarWhereInput = {
    AND?: NoteScalarWhereInput | NoteScalarWhereInput[]
    OR?: NoteScalarWhereInput[]
    NOT?: NoteScalarWhereInput | NoteScalarWhereInput[]
    id?: StringFilter<"Note"> | string
    title?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    contentType?: StringFilter<"Note"> | string
    isPublic?: BoolFilter<"Note"> | boolean
    ownerId?: StringFilter<"Note"> | string
    lastEditedBy?: StringNullableFilter<"Note"> | string | null
    lastEditedAt?: DateTimeFilter<"Note"> | Date | string
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
  }

  export type NoteCollaboratorUpsertWithWhereUniqueWithoutUserInput = {
    where: NoteCollaboratorWhereUniqueInput
    update: XOR<NoteCollaboratorUpdateWithoutUserInput, NoteCollaboratorUncheckedUpdateWithoutUserInput>
    create: XOR<NoteCollaboratorCreateWithoutUserInput, NoteCollaboratorUncheckedCreateWithoutUserInput>
  }

  export type NoteCollaboratorUpdateWithWhereUniqueWithoutUserInput = {
    where: NoteCollaboratorWhereUniqueInput
    data: XOR<NoteCollaboratorUpdateWithoutUserInput, NoteCollaboratorUncheckedUpdateWithoutUserInput>
  }

  export type NoteCollaboratorUpdateManyWithWhereWithoutUserInput = {
    where: NoteCollaboratorScalarWhereInput
    data: XOR<NoteCollaboratorUpdateManyMutationInput, NoteCollaboratorUncheckedUpdateManyWithoutUserInput>
  }

  export type NoteCollaboratorScalarWhereInput = {
    AND?: NoteCollaboratorScalarWhereInput | NoteCollaboratorScalarWhereInput[]
    OR?: NoteCollaboratorScalarWhereInput[]
    NOT?: NoteCollaboratorScalarWhereInput | NoteCollaboratorScalarWhereInput[]
    id?: StringFilter<"NoteCollaborator"> | string
    noteId?: StringFilter<"NoteCollaborator"> | string
    userId?: StringFilter<"NoteCollaborator"> | string
    permission?: EnumPermissionFilter<"NoteCollaborator"> | $Enums.Permission
    addedAt?: DateTimeFilter<"NoteCollaborator"> | Date | string
  }

  export type UserPresenceUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPresenceWhereUniqueInput
    update: XOR<UserPresenceUpdateWithoutUserInput, UserPresenceUncheckedUpdateWithoutUserInput>
    create: XOR<UserPresenceCreateWithoutUserInput, UserPresenceUncheckedCreateWithoutUserInput>
  }

  export type UserPresenceUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPresenceWhereUniqueInput
    data: XOR<UserPresenceUpdateWithoutUserInput, UserPresenceUncheckedUpdateWithoutUserInput>
  }

  export type UserPresenceUpdateManyWithWhereWithoutUserInput = {
    where: UserPresenceScalarWhereInput
    data: XOR<UserPresenceUpdateManyMutationInput, UserPresenceUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPresenceScalarWhereInput = {
    AND?: UserPresenceScalarWhereInput | UserPresenceScalarWhereInput[]
    OR?: UserPresenceScalarWhereInput[]
    NOT?: UserPresenceScalarWhereInput | UserPresenceScalarWhereInput[]
    id?: StringFilter<"UserPresence"> | string
    userId?: StringFilter<"UserPresence"> | string
    noteId?: StringFilter<"UserPresence"> | string
    cursorPos?: IntNullableFilter<"UserPresence"> | number | null
    selection?: JsonNullableFilter<"UserPresence">
    color?: StringFilter<"UserPresence"> | string
    isActive?: BoolFilter<"UserPresence"> | boolean
    lastSeen?: DateTimeFilter<"UserPresence"> | Date | string
    createdAt?: DateTimeFilter<"UserPresence"> | Date | string
  }

  export type UserCreateWithoutNotesInput = {
    id?: string
    email: string
    username: string
    firstName: string
    lastName: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    collaborators?: NoteCollaboratorCreateNestedManyWithoutUserInput
    presences?: UserPresenceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotesInput = {
    id?: string
    email: string
    username: string
    firstName: string
    lastName: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    collaborators?: NoteCollaboratorUncheckedCreateNestedManyWithoutUserInput
    presences?: UserPresenceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
  }

  export type NoteCollaboratorCreateWithoutNoteInput = {
    id?: string
    permission?: $Enums.Permission
    addedAt?: Date | string
    user: UserCreateNestedOneWithoutCollaboratorsInput
  }

  export type NoteCollaboratorUncheckedCreateWithoutNoteInput = {
    id?: string
    userId: string
    permission?: $Enums.Permission
    addedAt?: Date | string
  }

  export type NoteCollaboratorCreateOrConnectWithoutNoteInput = {
    where: NoteCollaboratorWhereUniqueInput
    create: XOR<NoteCollaboratorCreateWithoutNoteInput, NoteCollaboratorUncheckedCreateWithoutNoteInput>
  }

  export type NoteCollaboratorCreateManyNoteInputEnvelope = {
    data: NoteCollaboratorCreateManyNoteInput | NoteCollaboratorCreateManyNoteInput[]
    skipDuplicates?: boolean
  }

  export type UserPresenceCreateWithoutNoteInput = {
    id?: string
    cursorPos?: number | null
    selection?: NullableJsonNullValueInput | InputJsonValue
    color: string
    isActive?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPresencesInput
  }

  export type UserPresenceUncheckedCreateWithoutNoteInput = {
    id?: string
    userId: string
    cursorPos?: number | null
    selection?: NullableJsonNullValueInput | InputJsonValue
    color: string
    isActive?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
  }

  export type UserPresenceCreateOrConnectWithoutNoteInput = {
    where: UserPresenceWhereUniqueInput
    create: XOR<UserPresenceCreateWithoutNoteInput, UserPresenceUncheckedCreateWithoutNoteInput>
  }

  export type UserPresenceCreateManyNoteInputEnvelope = {
    data: UserPresenceCreateManyNoteInput | UserPresenceCreateManyNoteInput[]
    skipDuplicates?: boolean
  }

  export type NoteVersionCreateWithoutNoteInput = {
    id?: string
    title: string
    content: string
    version: number
    createdBy: string
    createdAt?: Date | string
  }

  export type NoteVersionUncheckedCreateWithoutNoteInput = {
    id?: string
    title: string
    content: string
    version: number
    createdBy: string
    createdAt?: Date | string
  }

  export type NoteVersionCreateOrConnectWithoutNoteInput = {
    where: NoteVersionWhereUniqueInput
    create: XOR<NoteVersionCreateWithoutNoteInput, NoteVersionUncheckedCreateWithoutNoteInput>
  }

  export type NoteVersionCreateManyNoteInputEnvelope = {
    data: NoteVersionCreateManyNoteInput | NoteVersionCreateManyNoteInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutNotesInput = {
    update: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborators?: NoteCollaboratorUpdateManyWithoutUserNestedInput
    presences?: UserPresenceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborators?: NoteCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    presences?: UserPresenceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NoteCollaboratorUpsertWithWhereUniqueWithoutNoteInput = {
    where: NoteCollaboratorWhereUniqueInput
    update: XOR<NoteCollaboratorUpdateWithoutNoteInput, NoteCollaboratorUncheckedUpdateWithoutNoteInput>
    create: XOR<NoteCollaboratorCreateWithoutNoteInput, NoteCollaboratorUncheckedCreateWithoutNoteInput>
  }

  export type NoteCollaboratorUpdateWithWhereUniqueWithoutNoteInput = {
    where: NoteCollaboratorWhereUniqueInput
    data: XOR<NoteCollaboratorUpdateWithoutNoteInput, NoteCollaboratorUncheckedUpdateWithoutNoteInput>
  }

  export type NoteCollaboratorUpdateManyWithWhereWithoutNoteInput = {
    where: NoteCollaboratorScalarWhereInput
    data: XOR<NoteCollaboratorUpdateManyMutationInput, NoteCollaboratorUncheckedUpdateManyWithoutNoteInput>
  }

  export type UserPresenceUpsertWithWhereUniqueWithoutNoteInput = {
    where: UserPresenceWhereUniqueInput
    update: XOR<UserPresenceUpdateWithoutNoteInput, UserPresenceUncheckedUpdateWithoutNoteInput>
    create: XOR<UserPresenceCreateWithoutNoteInput, UserPresenceUncheckedCreateWithoutNoteInput>
  }

  export type UserPresenceUpdateWithWhereUniqueWithoutNoteInput = {
    where: UserPresenceWhereUniqueInput
    data: XOR<UserPresenceUpdateWithoutNoteInput, UserPresenceUncheckedUpdateWithoutNoteInput>
  }

  export type UserPresenceUpdateManyWithWhereWithoutNoteInput = {
    where: UserPresenceScalarWhereInput
    data: XOR<UserPresenceUpdateManyMutationInput, UserPresenceUncheckedUpdateManyWithoutNoteInput>
  }

  export type NoteVersionUpsertWithWhereUniqueWithoutNoteInput = {
    where: NoteVersionWhereUniqueInput
    update: XOR<NoteVersionUpdateWithoutNoteInput, NoteVersionUncheckedUpdateWithoutNoteInput>
    create: XOR<NoteVersionCreateWithoutNoteInput, NoteVersionUncheckedCreateWithoutNoteInput>
  }

  export type NoteVersionUpdateWithWhereUniqueWithoutNoteInput = {
    where: NoteVersionWhereUniqueInput
    data: XOR<NoteVersionUpdateWithoutNoteInput, NoteVersionUncheckedUpdateWithoutNoteInput>
  }

  export type NoteVersionUpdateManyWithWhereWithoutNoteInput = {
    where: NoteVersionScalarWhereInput
    data: XOR<NoteVersionUpdateManyMutationInput, NoteVersionUncheckedUpdateManyWithoutNoteInput>
  }

  export type NoteVersionScalarWhereInput = {
    AND?: NoteVersionScalarWhereInput | NoteVersionScalarWhereInput[]
    OR?: NoteVersionScalarWhereInput[]
    NOT?: NoteVersionScalarWhereInput | NoteVersionScalarWhereInput[]
    id?: StringFilter<"NoteVersion"> | string
    noteId?: StringFilter<"NoteVersion"> | string
    title?: StringFilter<"NoteVersion"> | string
    content?: StringFilter<"NoteVersion"> | string
    version?: IntFilter<"NoteVersion"> | number
    createdBy?: StringFilter<"NoteVersion"> | string
    createdAt?: DateTimeFilter<"NoteVersion"> | Date | string
  }

  export type NoteCreateWithoutCollaboratorsInput = {
    id?: string
    title: string
    content: string
    contentType?: string
    isPublic?: boolean
    lastEditedBy?: string | null
    lastEditedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutNotesInput
    presences?: UserPresenceCreateNestedManyWithoutNoteInput
    versions?: NoteVersionCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutCollaboratorsInput = {
    id?: string
    title: string
    content: string
    contentType?: string
    isPublic?: boolean
    ownerId: string
    lastEditedBy?: string | null
    lastEditedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    presences?: UserPresenceUncheckedCreateNestedManyWithoutNoteInput
    versions?: NoteVersionUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteCreateOrConnectWithoutCollaboratorsInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutCollaboratorsInput, NoteUncheckedCreateWithoutCollaboratorsInput>
  }

  export type UserCreateWithoutCollaboratorsInput = {
    id?: string
    email: string
    username: string
    firstName: string
    lastName: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteCreateNestedManyWithoutOwnerInput
    presences?: UserPresenceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCollaboratorsInput = {
    id?: string
    email: string
    username: string
    firstName: string
    lastName: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteUncheckedCreateNestedManyWithoutOwnerInput
    presences?: UserPresenceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCollaboratorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCollaboratorsInput, UserUncheckedCreateWithoutCollaboratorsInput>
  }

  export type NoteUpsertWithoutCollaboratorsInput = {
    update: XOR<NoteUpdateWithoutCollaboratorsInput, NoteUncheckedUpdateWithoutCollaboratorsInput>
    create: XOR<NoteCreateWithoutCollaboratorsInput, NoteUncheckedCreateWithoutCollaboratorsInput>
    where?: NoteWhereInput
  }

  export type NoteUpdateToOneWithWhereWithoutCollaboratorsInput = {
    where?: NoteWhereInput
    data: XOR<NoteUpdateWithoutCollaboratorsInput, NoteUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type NoteUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutNotesNestedInput
    presences?: UserPresenceUpdateManyWithoutNoteNestedInput
    versions?: NoteVersionUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    presences?: UserPresenceUncheckedUpdateManyWithoutNoteNestedInput
    versions?: NoteVersionUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type UserUpsertWithoutCollaboratorsInput = {
    update: XOR<UserUpdateWithoutCollaboratorsInput, UserUncheckedUpdateWithoutCollaboratorsInput>
    create: XOR<UserCreateWithoutCollaboratorsInput, UserUncheckedCreateWithoutCollaboratorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCollaboratorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCollaboratorsInput, UserUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type UserUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUpdateManyWithoutOwnerNestedInput
    presences?: UserPresenceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUncheckedUpdateManyWithoutOwnerNestedInput
    presences?: UserPresenceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPresencesInput = {
    id?: string
    email: string
    username: string
    firstName: string
    lastName: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteCreateNestedManyWithoutOwnerInput
    collaborators?: NoteCollaboratorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPresencesInput = {
    id?: string
    email: string
    username: string
    firstName: string
    lastName: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteUncheckedCreateNestedManyWithoutOwnerInput
    collaborators?: NoteCollaboratorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPresencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPresencesInput, UserUncheckedCreateWithoutPresencesInput>
  }

  export type NoteCreateWithoutPresencesInput = {
    id?: string
    title: string
    content: string
    contentType?: string
    isPublic?: boolean
    lastEditedBy?: string | null
    lastEditedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutNotesInput
    collaborators?: NoteCollaboratorCreateNestedManyWithoutNoteInput
    versions?: NoteVersionCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutPresencesInput = {
    id?: string
    title: string
    content: string
    contentType?: string
    isPublic?: boolean
    ownerId: string
    lastEditedBy?: string | null
    lastEditedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    collaborators?: NoteCollaboratorUncheckedCreateNestedManyWithoutNoteInput
    versions?: NoteVersionUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteCreateOrConnectWithoutPresencesInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutPresencesInput, NoteUncheckedCreateWithoutPresencesInput>
  }

  export type UserUpsertWithoutPresencesInput = {
    update: XOR<UserUpdateWithoutPresencesInput, UserUncheckedUpdateWithoutPresencesInput>
    create: XOR<UserCreateWithoutPresencesInput, UserUncheckedCreateWithoutPresencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPresencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPresencesInput, UserUncheckedUpdateWithoutPresencesInput>
  }

  export type UserUpdateWithoutPresencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUpdateManyWithoutOwnerNestedInput
    collaborators?: NoteCollaboratorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPresencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUncheckedUpdateManyWithoutOwnerNestedInput
    collaborators?: NoteCollaboratorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NoteUpsertWithoutPresencesInput = {
    update: XOR<NoteUpdateWithoutPresencesInput, NoteUncheckedUpdateWithoutPresencesInput>
    create: XOR<NoteCreateWithoutPresencesInput, NoteUncheckedCreateWithoutPresencesInput>
    where?: NoteWhereInput
  }

  export type NoteUpdateToOneWithWhereWithoutPresencesInput = {
    where?: NoteWhereInput
    data: XOR<NoteUpdateWithoutPresencesInput, NoteUncheckedUpdateWithoutPresencesInput>
  }

  export type NoteUpdateWithoutPresencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutNotesNestedInput
    collaborators?: NoteCollaboratorUpdateManyWithoutNoteNestedInput
    versions?: NoteVersionUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutPresencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborators?: NoteCollaboratorUncheckedUpdateManyWithoutNoteNestedInput
    versions?: NoteVersionUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type NoteCreateWithoutVersionsInput = {
    id?: string
    title: string
    content: string
    contentType?: string
    isPublic?: boolean
    lastEditedBy?: string | null
    lastEditedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutNotesInput
    collaborators?: NoteCollaboratorCreateNestedManyWithoutNoteInput
    presences?: UserPresenceCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutVersionsInput = {
    id?: string
    title: string
    content: string
    contentType?: string
    isPublic?: boolean
    ownerId: string
    lastEditedBy?: string | null
    lastEditedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    collaborators?: NoteCollaboratorUncheckedCreateNestedManyWithoutNoteInput
    presences?: UserPresenceUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteCreateOrConnectWithoutVersionsInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutVersionsInput, NoteUncheckedCreateWithoutVersionsInput>
  }

  export type NoteUpsertWithoutVersionsInput = {
    update: XOR<NoteUpdateWithoutVersionsInput, NoteUncheckedUpdateWithoutVersionsInput>
    create: XOR<NoteCreateWithoutVersionsInput, NoteUncheckedCreateWithoutVersionsInput>
    where?: NoteWhereInput
  }

  export type NoteUpdateToOneWithWhereWithoutVersionsInput = {
    where?: NoteWhereInput
    data: XOR<NoteUpdateWithoutVersionsInput, NoteUncheckedUpdateWithoutVersionsInput>
  }

  export type NoteUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutNotesNestedInput
    collaborators?: NoteCollaboratorUpdateManyWithoutNoteNestedInput
    presences?: UserPresenceUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborators?: NoteCollaboratorUncheckedUpdateManyWithoutNoteNestedInput
    presences?: UserPresenceUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type NoteCreateManyOwnerInput = {
    id?: string
    title: string
    content: string
    contentType?: string
    isPublic?: boolean
    lastEditedBy?: string | null
    lastEditedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteCollaboratorCreateManyUserInput = {
    id?: string
    noteId: string
    permission?: $Enums.Permission
    addedAt?: Date | string
  }

  export type UserPresenceCreateManyUserInput = {
    id?: string
    noteId: string
    cursorPos?: number | null
    selection?: NullableJsonNullValueInput | InputJsonValue
    color: string
    isActive?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
  }

  export type NoteUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborators?: NoteCollaboratorUpdateManyWithoutNoteNestedInput
    presences?: UserPresenceUpdateManyWithoutNoteNestedInput
    versions?: NoteVersionUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborators?: NoteCollaboratorUncheckedUpdateManyWithoutNoteNestedInput
    presences?: UserPresenceUncheckedUpdateManyWithoutNoteNestedInput
    versions?: NoteVersionUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    lastEditedBy?: NullableStringFieldUpdateOperationsInput | string | null
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCollaboratorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission?: EnumPermissionFieldUpdateOperationsInput | $Enums.Permission
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NoteUpdateOneRequiredWithoutCollaboratorsNestedInput
  }

  export type NoteCollaboratorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    noteId?: StringFieldUpdateOperationsInput | string
    permission?: EnumPermissionFieldUpdateOperationsInput | $Enums.Permission
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCollaboratorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    noteId?: StringFieldUpdateOperationsInput | string
    permission?: EnumPermissionFieldUpdateOperationsInput | $Enums.Permission
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPresenceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cursorPos?: NullableIntFieldUpdateOperationsInput | number | null
    selection?: NullableJsonNullValueInput | InputJsonValue
    color?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NoteUpdateOneRequiredWithoutPresencesNestedInput
  }

  export type UserPresenceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    noteId?: StringFieldUpdateOperationsInput | string
    cursorPos?: NullableIntFieldUpdateOperationsInput | number | null
    selection?: NullableJsonNullValueInput | InputJsonValue
    color?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPresenceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    noteId?: StringFieldUpdateOperationsInput | string
    cursorPos?: NullableIntFieldUpdateOperationsInput | number | null
    selection?: NullableJsonNullValueInput | InputJsonValue
    color?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCollaboratorCreateManyNoteInput = {
    id?: string
    userId: string
    permission?: $Enums.Permission
    addedAt?: Date | string
  }

  export type UserPresenceCreateManyNoteInput = {
    id?: string
    userId: string
    cursorPos?: number | null
    selection?: NullableJsonNullValueInput | InputJsonValue
    color: string
    isActive?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
  }

  export type NoteVersionCreateManyNoteInput = {
    id?: string
    title: string
    content: string
    version: number
    createdBy: string
    createdAt?: Date | string
  }

  export type NoteCollaboratorUpdateWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission?: EnumPermissionFieldUpdateOperationsInput | $Enums.Permission
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCollaboratorsNestedInput
  }

  export type NoteCollaboratorUncheckedUpdateWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    permission?: EnumPermissionFieldUpdateOperationsInput | $Enums.Permission
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCollaboratorUncheckedUpdateManyWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    permission?: EnumPermissionFieldUpdateOperationsInput | $Enums.Permission
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPresenceUpdateWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    cursorPos?: NullableIntFieldUpdateOperationsInput | number | null
    selection?: NullableJsonNullValueInput | InputJsonValue
    color?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPresencesNestedInput
  }

  export type UserPresenceUncheckedUpdateWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cursorPos?: NullableIntFieldUpdateOperationsInput | number | null
    selection?: NullableJsonNullValueInput | InputJsonValue
    color?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPresenceUncheckedUpdateManyWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cursorPos?: NullableIntFieldUpdateOperationsInput | number | null
    selection?: NullableJsonNullValueInput | InputJsonValue
    color?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteVersionUpdateWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteVersionUncheckedUpdateWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteVersionUncheckedUpdateManyWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NoteCountOutputTypeDefaultArgs instead
     */
    export type NoteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NoteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NoteDefaultArgs instead
     */
    export type NoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NoteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NoteCollaboratorDefaultArgs instead
     */
    export type NoteCollaboratorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NoteCollaboratorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserPresenceDefaultArgs instead
     */
    export type UserPresenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserPresenceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NoteVersionDefaultArgs instead
     */
    export type NoteVersionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NoteVersionDefaultArgs<ExtArgs>

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