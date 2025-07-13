
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
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model ContactPerson
 * 
 */
export type ContactPerson = $Result.DefaultSelection<Prisma.$ContactPersonPayload>
/**
 * Model Status
 * 
 */
export type Status = $Result.DefaultSelection<Prisma.$StatusPayload>
/**
 * Model ProjectRoleType
 * 
 */
export type ProjectRoleType = $Result.DefaultSelection<Prisma.$ProjectRoleTypePayload>
/**
 * Model ProjectRole
 * 
 */
export type ProjectRole = $Result.DefaultSelection<Prisma.$ProjectRolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TimeReport
 * 
 */
export type TimeReport = $Result.DefaultSelection<Prisma.$TimeReportPayload>
/**
 * Model ProjectTask
 * 
 */
export type ProjectTask = $Result.DefaultSelection<Prisma.$ProjectTaskPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  worker: 'worker'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TaskStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  BLOCKED: 'BLOCKED',
  DONE: 'DONE'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
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
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactPerson`: Exposes CRUD operations for the **ContactPerson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactPeople
    * const contactPeople = await prisma.contactPerson.findMany()
    * ```
    */
  get contactPerson(): Prisma.ContactPersonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.status`: Exposes CRUD operations for the **Status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statuses
    * const statuses = await prisma.status.findMany()
    * ```
    */
  get status(): Prisma.StatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectRoleType`: Exposes CRUD operations for the **ProjectRoleType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectRoleTypes
    * const projectRoleTypes = await prisma.projectRoleType.findMany()
    * ```
    */
  get projectRoleType(): Prisma.ProjectRoleTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectRole`: Exposes CRUD operations for the **ProjectRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectRoles
    * const projectRoles = await prisma.projectRole.findMany()
    * ```
    */
  get projectRole(): Prisma.ProjectRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timeReport`: Exposes CRUD operations for the **TimeReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeReports
    * const timeReports = await prisma.timeReport.findMany()
    * ```
    */
  get timeReport(): Prisma.TimeReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectTask`: Exposes CRUD operations for the **ProjectTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectTasks
    * const projectTasks = await prisma.projectTask.findMany()
    * ```
    */
  get projectTask(): Prisma.ProjectTaskDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Project: 'Project',
    Customer: 'Customer',
    ContactPerson: 'ContactPerson',
    Status: 'Status',
    ProjectRoleType: 'ProjectRoleType',
    ProjectRole: 'ProjectRole',
    User: 'User',
    TimeReport: 'TimeReport',
    ProjectTask: 'ProjectTask'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "project" | "customer" | "contactPerson" | "status" | "projectRoleType" | "projectRole" | "user" | "timeReport" | "projectTask"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      ContactPerson: {
        payload: Prisma.$ContactPersonPayload<ExtArgs>
        fields: Prisma.ContactPersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactPersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactPersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>
          }
          findFirst: {
            args: Prisma.ContactPersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactPersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>
          }
          findMany: {
            args: Prisma.ContactPersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>[]
          }
          create: {
            args: Prisma.ContactPersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>
          }
          createMany: {
            args: Prisma.ContactPersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactPersonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>[]
          }
          delete: {
            args: Prisma.ContactPersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>
          }
          update: {
            args: Prisma.ContactPersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>
          }
          deleteMany: {
            args: Prisma.ContactPersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactPersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactPersonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>[]
          }
          upsert: {
            args: Prisma.ContactPersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>
          }
          aggregate: {
            args: Prisma.ContactPersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactPerson>
          }
          groupBy: {
            args: Prisma.ContactPersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactPersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactPersonCountArgs<ExtArgs>
            result: $Utils.Optional<ContactPersonCountAggregateOutputType> | number
          }
        }
      }
      Status: {
        payload: Prisma.$StatusPayload<ExtArgs>
        fields: Prisma.StatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          findFirst: {
            args: Prisma.StatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          findMany: {
            args: Prisma.StatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          create: {
            args: Prisma.StatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          createMany: {
            args: Prisma.StatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          delete: {
            args: Prisma.StatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          update: {
            args: Prisma.StatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          deleteMany: {
            args: Prisma.StatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          upsert: {
            args: Prisma.StatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          aggregate: {
            args: Prisma.StatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatus>
          }
          groupBy: {
            args: Prisma.StatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusCountArgs<ExtArgs>
            result: $Utils.Optional<StatusCountAggregateOutputType> | number
          }
        }
      }
      ProjectRoleType: {
        payload: Prisma.$ProjectRoleTypePayload<ExtArgs>
        fields: Prisma.ProjectRoleTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectRoleTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRoleTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectRoleTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRoleTypePayload>
          }
          findFirst: {
            args: Prisma.ProjectRoleTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRoleTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectRoleTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRoleTypePayload>
          }
          findMany: {
            args: Prisma.ProjectRoleTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRoleTypePayload>[]
          }
          create: {
            args: Prisma.ProjectRoleTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRoleTypePayload>
          }
          createMany: {
            args: Prisma.ProjectRoleTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectRoleTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRoleTypePayload>[]
          }
          delete: {
            args: Prisma.ProjectRoleTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRoleTypePayload>
          }
          update: {
            args: Prisma.ProjectRoleTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRoleTypePayload>
          }
          deleteMany: {
            args: Prisma.ProjectRoleTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectRoleTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectRoleTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRoleTypePayload>[]
          }
          upsert: {
            args: Prisma.ProjectRoleTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRoleTypePayload>
          }
          aggregate: {
            args: Prisma.ProjectRoleTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectRoleType>
          }
          groupBy: {
            args: Prisma.ProjectRoleTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectRoleTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectRoleTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectRoleTypeCountAggregateOutputType> | number
          }
        }
      }
      ProjectRole: {
        payload: Prisma.$ProjectRolePayload<ExtArgs>
        fields: Prisma.ProjectRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRolePayload>
          }
          findFirst: {
            args: Prisma.ProjectRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRolePayload>
          }
          findMany: {
            args: Prisma.ProjectRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRolePayload>[]
          }
          create: {
            args: Prisma.ProjectRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRolePayload>
          }
          createMany: {
            args: Prisma.ProjectRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRolePayload>[]
          }
          delete: {
            args: Prisma.ProjectRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRolePayload>
          }
          update: {
            args: Prisma.ProjectRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRolePayload>
          }
          deleteMany: {
            args: Prisma.ProjectRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRolePayload>[]
          }
          upsert: {
            args: Prisma.ProjectRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRolePayload>
          }
          aggregate: {
            args: Prisma.ProjectRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectRole>
          }
          groupBy: {
            args: Prisma.ProjectRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectRoleCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectRoleCountAggregateOutputType> | number
          }
        }
      }
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      TimeReport: {
        payload: Prisma.$TimeReportPayload<ExtArgs>
        fields: Prisma.TimeReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeReportPayload>
          }
          findFirst: {
            args: Prisma.TimeReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeReportPayload>
          }
          findMany: {
            args: Prisma.TimeReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeReportPayload>[]
          }
          create: {
            args: Prisma.TimeReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeReportPayload>
          }
          createMany: {
            args: Prisma.TimeReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimeReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeReportPayload>[]
          }
          delete: {
            args: Prisma.TimeReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeReportPayload>
          }
          update: {
            args: Prisma.TimeReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeReportPayload>
          }
          deleteMany: {
            args: Prisma.TimeReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimeReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimeReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeReportPayload>[]
          }
          upsert: {
            args: Prisma.TimeReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeReportPayload>
          }
          aggregate: {
            args: Prisma.TimeReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeReport>
          }
          groupBy: {
            args: Prisma.TimeReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeReportCountArgs<ExtArgs>
            result: $Utils.Optional<TimeReportCountAggregateOutputType> | number
          }
        }
      }
      ProjectTask: {
        payload: Prisma.$ProjectTaskPayload<ExtArgs>
        fields: Prisma.ProjectTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTaskPayload>
          }
          findFirst: {
            args: Prisma.ProjectTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTaskPayload>
          }
          findMany: {
            args: Prisma.ProjectTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTaskPayload>[]
          }
          create: {
            args: Prisma.ProjectTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTaskPayload>
          }
          createMany: {
            args: Prisma.ProjectTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTaskPayload>[]
          }
          delete: {
            args: Prisma.ProjectTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTaskPayload>
          }
          update: {
            args: Prisma.ProjectTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTaskPayload>
          }
          deleteMany: {
            args: Prisma.ProjectTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTaskPayload>[]
          }
          upsert: {
            args: Prisma.ProjectTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTaskPayload>
          }
          aggregate: {
            args: Prisma.ProjectTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectTask>
          }
          groupBy: {
            args: Prisma.ProjectTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectTaskCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectTaskCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    project?: ProjectOmit
    customer?: CustomerOmit
    contactPerson?: ContactPersonOmit
    status?: StatusOmit
    projectRoleType?: ProjectRoleTypeOmit
    projectRole?: ProjectRoleOmit
    user?: UserOmit
    timeReport?: TimeReportOmit
    projectTask?: ProjectTaskOmit
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
    | 'updateManyAndReturn'
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
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    timeReports: number
    tasks: number
    projectRoles: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timeReports?: boolean | ProjectCountOutputTypeCountTimeReportsArgs
    tasks?: boolean | ProjectCountOutputTypeCountTasksArgs
    projectRoles?: boolean | ProjectCountOutputTypeCountProjectRolesArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTimeReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeReportWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTaskWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProjectRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectRoleWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    contactPersons: number
    projects: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactPersons?: boolean | CustomerCountOutputTypeCountContactPersonsArgs
    projects?: boolean | CustomerCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountContactPersonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactPersonWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ContactPersonCountOutputType
   */

  export type ContactPersonCountOutputType = {
    projects: number
  }

  export type ContactPersonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | ContactPersonCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * ContactPersonCountOutputType without action
   */
  export type ContactPersonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPersonCountOutputType
     */
    select?: ContactPersonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContactPersonCountOutputType without action
   */
  export type ContactPersonCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type StatusCountOutputType
   */

  export type StatusCountOutputType = {
    projects: number
  }

  export type StatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | StatusCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * StatusCountOutputType without action
   */
  export type StatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusCountOutputType
     */
    select?: StatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StatusCountOutputType without action
   */
  export type StatusCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ProjectRoleTypeCountOutputType
   */

  export type ProjectRoleTypeCountOutputType = {
    projectRoles: number
  }

  export type ProjectRoleTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectRoles?: boolean | ProjectRoleTypeCountOutputTypeCountProjectRolesArgs
  }

  // Custom InputTypes
  /**
   * ProjectRoleTypeCountOutputType without action
   */
  export type ProjectRoleTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRoleTypeCountOutputType
     */
    select?: ProjectRoleTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectRoleTypeCountOutputType without action
   */
  export type ProjectRoleTypeCountOutputTypeCountProjectRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectRoleWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    projectRoles: number
    timeReports: number
    assignedTasks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectRoles?: boolean | UserCountOutputTypeCountProjectRolesArgs
    timeReports?: boolean | UserCountOutputTypeCountTimeReportsArgs
    assignedTasks?: boolean | UserCountOutputTypeCountAssignedTasksArgs
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
  export type UserCountOutputTypeCountProjectRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectRoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTimeReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTaskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    hourLeft: number | null
    totalCost: number | null
    salesValue: number | null
    statusId: number | null
    customerId: number | null
    contactPersonId: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    hourLeft: number | null
    totalCost: number | null
    salesValue: number | null
    statusId: number | null
    customerId: number | null
    contactPersonId: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    startDate: Date | null
    deadline: Date | null
    hourLeft: number | null
    projectType: string | null
    totalCost: number | null
    salesValue: number | null
    statusId: number | null
    customerId: number | null
    contactPersonId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    startDate: Date | null
    deadline: Date | null
    hourLeft: number | null
    projectType: string | null
    totalCost: number | null
    salesValue: number | null
    statusId: number | null
    customerId: number | null
    contactPersonId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    startDate: number
    deadline: number
    hourLeft: number
    projectType: number
    totalCost: number
    salesValue: number
    statusId: number
    customerId: number
    contactPersonId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    hourLeft?: true
    totalCost?: true
    salesValue?: true
    statusId?: true
    customerId?: true
    contactPersonId?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    hourLeft?: true
    totalCost?: true
    salesValue?: true
    statusId?: true
    customerId?: true
    contactPersonId?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    deadline?: true
    hourLeft?: true
    projectType?: true
    totalCost?: true
    salesValue?: true
    statusId?: true
    customerId?: true
    contactPersonId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    deadline?: true
    hourLeft?: true
    projectType?: true
    totalCost?: true
    salesValue?: true
    statusId?: true
    customerId?: true
    contactPersonId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    deadline?: true
    hourLeft?: true
    projectType?: true
    totalCost?: true
    salesValue?: true
    statusId?: true
    customerId?: true
    contactPersonId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    name: string
    description: string
    startDate: Date
    deadline: Date
    hourLeft: number
    projectType: string
    totalCost: number
    salesValue: number
    statusId: number | null
    customerId: number | null
    contactPersonId: number | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    deadline?: boolean
    hourLeft?: boolean
    projectType?: boolean
    totalCost?: boolean
    salesValue?: boolean
    statusId?: boolean
    customerId?: boolean
    contactPersonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean | Project$statusArgs<ExtArgs>
    customer?: boolean | Project$customerArgs<ExtArgs>
    contactPerson?: boolean | Project$contactPersonArgs<ExtArgs>
    timeReports?: boolean | Project$timeReportsArgs<ExtArgs>
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    projectRoles?: boolean | Project$projectRolesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    deadline?: boolean
    hourLeft?: boolean
    projectType?: boolean
    totalCost?: boolean
    salesValue?: boolean
    statusId?: boolean
    customerId?: boolean
    contactPersonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean | Project$statusArgs<ExtArgs>
    customer?: boolean | Project$customerArgs<ExtArgs>
    contactPerson?: boolean | Project$contactPersonArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    deadline?: boolean
    hourLeft?: boolean
    projectType?: boolean
    totalCost?: boolean
    salesValue?: boolean
    statusId?: boolean
    customerId?: boolean
    contactPersonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean | Project$statusArgs<ExtArgs>
    customer?: boolean | Project$customerArgs<ExtArgs>
    contactPerson?: boolean | Project$contactPersonArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    deadline?: boolean
    hourLeft?: boolean
    projectType?: boolean
    totalCost?: boolean
    salesValue?: boolean
    statusId?: boolean
    customerId?: boolean
    contactPersonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "startDate" | "deadline" | "hourLeft" | "projectType" | "totalCost" | "salesValue" | "statusId" | "customerId" | "contactPersonId" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    status?: boolean | Project$statusArgs<ExtArgs>
    customer?: boolean | Project$customerArgs<ExtArgs>
    contactPerson?: boolean | Project$contactPersonArgs<ExtArgs>
    timeReports?: boolean | Project$timeReportsArgs<ExtArgs>
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    projectRoles?: boolean | Project$projectRolesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    status?: boolean | Project$statusArgs<ExtArgs>
    customer?: boolean | Project$customerArgs<ExtArgs>
    contactPerson?: boolean | Project$contactPersonArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    status?: boolean | Project$statusArgs<ExtArgs>
    customer?: boolean | Project$customerArgs<ExtArgs>
    contactPerson?: boolean | Project$contactPersonArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      status: Prisma.$StatusPayload<ExtArgs> | null
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      contactPerson: Prisma.$ContactPersonPayload<ExtArgs> | null
      timeReports: Prisma.$TimeReportPayload<ExtArgs>[]
      tasks: Prisma.$ProjectTaskPayload<ExtArgs>[]
      projectRoles: Prisma.$ProjectRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      startDate: Date
      deadline: Date
      hourLeft: number
      projectType: string
      totalCost: number
      salesValue: number
      statusId: number | null
      customerId: number | null
      contactPersonId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    status<T extends Project$statusArgs<ExtArgs> = {}>(args?: Subset<T, Project$statusArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    customer<T extends Project$customerArgs<ExtArgs> = {}>(args?: Subset<T, Project$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    contactPerson<T extends Project$contactPersonArgs<ExtArgs> = {}>(args?: Subset<T, Project$contactPersonArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    timeReports<T extends Project$timeReportsArgs<ExtArgs> = {}>(args?: Subset<T, Project$timeReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends Project$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Project$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectRoles<T extends Project$projectRolesArgs<ExtArgs> = {}>(args?: Subset<T, Project$projectRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly startDate: FieldRef<"Project", 'DateTime'>
    readonly deadline: FieldRef<"Project", 'DateTime'>
    readonly hourLeft: FieldRef<"Project", 'Float'>
    readonly projectType: FieldRef<"Project", 'String'>
    readonly totalCost: FieldRef<"Project", 'Float'>
    readonly salesValue: FieldRef<"Project", 'Float'>
    readonly statusId: FieldRef<"Project", 'Int'>
    readonly customerId: FieldRef<"Project", 'Int'>
    readonly contactPersonId: FieldRef<"Project", 'Int'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.status
   */
  export type Project$statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    where?: StatusWhereInput
  }

  /**
   * Project.customer
   */
  export type Project$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * Project.contactPerson
   */
  export type Project$contactPersonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    where?: ContactPersonWhereInput
  }

  /**
   * Project.timeReports
   */
  export type Project$timeReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeReport
     */
    select?: TimeReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeReport
     */
    omit?: TimeReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeReportInclude<ExtArgs> | null
    where?: TimeReportWhereInput
    orderBy?: TimeReportOrderByWithRelationInput | TimeReportOrderByWithRelationInput[]
    cursor?: TimeReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeReportScalarFieldEnum | TimeReportScalarFieldEnum[]
  }

  /**
   * Project.tasks
   */
  export type Project$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTask
     */
    select?: ProjectTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTask
     */
    omit?: ProjectTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTaskInclude<ExtArgs> | null
    where?: ProjectTaskWhereInput
    orderBy?: ProjectTaskOrderByWithRelationInput | ProjectTaskOrderByWithRelationInput[]
    cursor?: ProjectTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectTaskScalarFieldEnum | ProjectTaskScalarFieldEnum[]
  }

  /**
   * Project.projectRoles
   */
  export type Project$projectRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRole
     */
    omit?: ProjectRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleInclude<ExtArgs> | null
    where?: ProjectRoleWhereInput
    orderBy?: ProjectRoleOrderByWithRelationInput | ProjectRoleOrderByWithRelationInput[]
    cursor?: ProjectRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectRoleScalarFieldEnum | ProjectRoleScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
    hourlyRate: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
    hourlyRate: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    name: string | null
    orderer: string | null
    poNumber: string | null
    hourlyRate: number | null
    partialInvoice: boolean | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    orderer: string | null
    poNumber: string | null
    hourlyRate: number | null
    partialInvoice: boolean | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    orderer: number
    poNumber: number
    hourlyRate: number
    partialInvoice: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
    hourlyRate?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
    hourlyRate?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    orderer?: true
    poNumber?: true
    hourlyRate?: true
    partialInvoice?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    orderer?: true
    poNumber?: true
    hourlyRate?: true
    partialInvoice?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    orderer?: true
    poNumber?: true
    hourlyRate?: true
    partialInvoice?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    name: string
    orderer: string
    poNumber: string
    hourlyRate: number
    partialInvoice: boolean
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    orderer?: boolean
    poNumber?: boolean
    hourlyRate?: boolean
    partialInvoice?: boolean
    contactPersons?: boolean | Customer$contactPersonsArgs<ExtArgs>
    projects?: boolean | Customer$projectsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    orderer?: boolean
    poNumber?: boolean
    hourlyRate?: boolean
    partialInvoice?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    orderer?: boolean
    poNumber?: boolean
    hourlyRate?: boolean
    partialInvoice?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    orderer?: boolean
    poNumber?: boolean
    hourlyRate?: boolean
    partialInvoice?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "orderer" | "poNumber" | "hourlyRate" | "partialInvoice", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactPersons?: boolean | Customer$contactPersonsArgs<ExtArgs>
    projects?: boolean | Customer$projectsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      contactPersons: Prisma.$ContactPersonPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      orderer: string
      poNumber: string
      hourlyRate: number
      partialInvoice: boolean
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contactPersons<T extends Customer$contactPersonsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$contactPersonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends Customer$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly orderer: FieldRef<"Customer", 'String'>
    readonly poNumber: FieldRef<"Customer", 'String'>
    readonly hourlyRate: FieldRef<"Customer", 'Float'>
    readonly partialInvoice: FieldRef<"Customer", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.contactPersons
   */
  export type Customer$contactPersonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    where?: ContactPersonWhereInput
    orderBy?: ContactPersonOrderByWithRelationInput | ContactPersonOrderByWithRelationInput[]
    cursor?: ContactPersonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactPersonScalarFieldEnum | ContactPersonScalarFieldEnum[]
  }

  /**
   * Customer.projects
   */
  export type Customer$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model ContactPerson
   */

  export type AggregateContactPerson = {
    _count: ContactPersonCountAggregateOutputType | null
    _avg: ContactPersonAvgAggregateOutputType | null
    _sum: ContactPersonSumAggregateOutputType | null
    _min: ContactPersonMinAggregateOutputType | null
    _max: ContactPersonMaxAggregateOutputType | null
  }

  export type ContactPersonAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type ContactPersonSumAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type ContactPersonMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    customerId: number | null
  }

  export type ContactPersonMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    customerId: number | null
  }

  export type ContactPersonCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    customerId: number
    _all: number
  }


  export type ContactPersonAvgAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type ContactPersonSumAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type ContactPersonMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    customerId?: true
  }

  export type ContactPersonMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    customerId?: true
  }

  export type ContactPersonCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    customerId?: true
    _all?: true
  }

  export type ContactPersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactPerson to aggregate.
     */
    where?: ContactPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPeople to fetch.
     */
    orderBy?: ContactPersonOrderByWithRelationInput | ContactPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactPeople
    **/
    _count?: true | ContactPersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactPersonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactPersonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactPersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactPersonMaxAggregateInputType
  }

  export type GetContactPersonAggregateType<T extends ContactPersonAggregateArgs> = {
        [P in keyof T & keyof AggregateContactPerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactPerson[P]>
      : GetScalarType<T[P], AggregateContactPerson[P]>
  }




  export type ContactPersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactPersonWhereInput
    orderBy?: ContactPersonOrderByWithAggregationInput | ContactPersonOrderByWithAggregationInput[]
    by: ContactPersonScalarFieldEnum[] | ContactPersonScalarFieldEnum
    having?: ContactPersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactPersonCountAggregateInputType | true
    _avg?: ContactPersonAvgAggregateInputType
    _sum?: ContactPersonSumAggregateInputType
    _min?: ContactPersonMinAggregateInputType
    _max?: ContactPersonMaxAggregateInputType
  }

  export type ContactPersonGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    customerId: number
    _count: ContactPersonCountAggregateOutputType | null
    _avg: ContactPersonAvgAggregateOutputType | null
    _sum: ContactPersonSumAggregateOutputType | null
    _min: ContactPersonMinAggregateOutputType | null
    _max: ContactPersonMaxAggregateOutputType | null
  }

  type GetContactPersonGroupByPayload<T extends ContactPersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactPersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactPersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactPersonGroupByOutputType[P]>
            : GetScalarType<T[P], ContactPersonGroupByOutputType[P]>
        }
      >
    >


  export type ContactPersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    customerId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    projects?: boolean | ContactPerson$projectsArgs<ExtArgs>
    _count?: boolean | ContactPersonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactPerson"]>

  export type ContactPersonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    customerId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactPerson"]>

  export type ContactPersonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    customerId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactPerson"]>

  export type ContactPersonSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    customerId?: boolean
  }

  export type ContactPersonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "customerId", ExtArgs["result"]["contactPerson"]>
  export type ContactPersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    projects?: boolean | ContactPerson$projectsArgs<ExtArgs>
    _count?: boolean | ContactPersonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContactPersonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type ContactPersonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $ContactPersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactPerson"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      customerId: number
    }, ExtArgs["result"]["contactPerson"]>
    composites: {}
  }

  type ContactPersonGetPayload<S extends boolean | null | undefined | ContactPersonDefaultArgs> = $Result.GetResult<Prisma.$ContactPersonPayload, S>

  type ContactPersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactPersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactPersonCountAggregateInputType | true
    }

  export interface ContactPersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactPerson'], meta: { name: 'ContactPerson' } }
    /**
     * Find zero or one ContactPerson that matches the filter.
     * @param {ContactPersonFindUniqueArgs} args - Arguments to find a ContactPerson
     * @example
     * // Get one ContactPerson
     * const contactPerson = await prisma.contactPerson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactPersonFindUniqueArgs>(args: SelectSubset<T, ContactPersonFindUniqueArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactPerson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactPersonFindUniqueOrThrowArgs} args - Arguments to find a ContactPerson
     * @example
     * // Get one ContactPerson
     * const contactPerson = await prisma.contactPerson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactPersonFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactPersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactPerson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonFindFirstArgs} args - Arguments to find a ContactPerson
     * @example
     * // Get one ContactPerson
     * const contactPerson = await prisma.contactPerson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactPersonFindFirstArgs>(args?: SelectSubset<T, ContactPersonFindFirstArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactPerson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonFindFirstOrThrowArgs} args - Arguments to find a ContactPerson
     * @example
     * // Get one ContactPerson
     * const contactPerson = await prisma.contactPerson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactPersonFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactPersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactPeople that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactPeople
     * const contactPeople = await prisma.contactPerson.findMany()
     * 
     * // Get first 10 ContactPeople
     * const contactPeople = await prisma.contactPerson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactPersonWithIdOnly = await prisma.contactPerson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactPersonFindManyArgs>(args?: SelectSubset<T, ContactPersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactPerson.
     * @param {ContactPersonCreateArgs} args - Arguments to create a ContactPerson.
     * @example
     * // Create one ContactPerson
     * const ContactPerson = await prisma.contactPerson.create({
     *   data: {
     *     // ... data to create a ContactPerson
     *   }
     * })
     * 
     */
    create<T extends ContactPersonCreateArgs>(args: SelectSubset<T, ContactPersonCreateArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactPeople.
     * @param {ContactPersonCreateManyArgs} args - Arguments to create many ContactPeople.
     * @example
     * // Create many ContactPeople
     * const contactPerson = await prisma.contactPerson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactPersonCreateManyArgs>(args?: SelectSubset<T, ContactPersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactPeople and returns the data saved in the database.
     * @param {ContactPersonCreateManyAndReturnArgs} args - Arguments to create many ContactPeople.
     * @example
     * // Create many ContactPeople
     * const contactPerson = await prisma.contactPerson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactPeople and only return the `id`
     * const contactPersonWithIdOnly = await prisma.contactPerson.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactPersonCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactPersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactPerson.
     * @param {ContactPersonDeleteArgs} args - Arguments to delete one ContactPerson.
     * @example
     * // Delete one ContactPerson
     * const ContactPerson = await prisma.contactPerson.delete({
     *   where: {
     *     // ... filter to delete one ContactPerson
     *   }
     * })
     * 
     */
    delete<T extends ContactPersonDeleteArgs>(args: SelectSubset<T, ContactPersonDeleteArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactPerson.
     * @param {ContactPersonUpdateArgs} args - Arguments to update one ContactPerson.
     * @example
     * // Update one ContactPerson
     * const contactPerson = await prisma.contactPerson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactPersonUpdateArgs>(args: SelectSubset<T, ContactPersonUpdateArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactPeople.
     * @param {ContactPersonDeleteManyArgs} args - Arguments to filter ContactPeople to delete.
     * @example
     * // Delete a few ContactPeople
     * const { count } = await prisma.contactPerson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactPersonDeleteManyArgs>(args?: SelectSubset<T, ContactPersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactPeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactPeople
     * const contactPerson = await prisma.contactPerson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactPersonUpdateManyArgs>(args: SelectSubset<T, ContactPersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactPeople and returns the data updated in the database.
     * @param {ContactPersonUpdateManyAndReturnArgs} args - Arguments to update many ContactPeople.
     * @example
     * // Update many ContactPeople
     * const contactPerson = await prisma.contactPerson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactPeople and only return the `id`
     * const contactPersonWithIdOnly = await prisma.contactPerson.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactPersonUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactPersonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactPerson.
     * @param {ContactPersonUpsertArgs} args - Arguments to update or create a ContactPerson.
     * @example
     * // Update or create a ContactPerson
     * const contactPerson = await prisma.contactPerson.upsert({
     *   create: {
     *     // ... data to create a ContactPerson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactPerson we want to update
     *   }
     * })
     */
    upsert<T extends ContactPersonUpsertArgs>(args: SelectSubset<T, ContactPersonUpsertArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactPeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonCountArgs} args - Arguments to filter ContactPeople to count.
     * @example
     * // Count the number of ContactPeople
     * const count = await prisma.contactPerson.count({
     *   where: {
     *     // ... the filter for the ContactPeople we want to count
     *   }
     * })
    **/
    count<T extends ContactPersonCountArgs>(
      args?: Subset<T, ContactPersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactPersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactPerson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactPersonAggregateArgs>(args: Subset<T, ContactPersonAggregateArgs>): Prisma.PrismaPromise<GetContactPersonAggregateType<T>>

    /**
     * Group by ContactPerson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonGroupByArgs} args - Group by arguments.
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
      T extends ContactPersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactPersonGroupByArgs['orderBy'] }
        : { orderBy?: ContactPersonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactPersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactPerson model
   */
  readonly fields: ContactPersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactPerson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactPersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projects<T extends ContactPerson$projectsArgs<ExtArgs> = {}>(args?: Subset<T, ContactPerson$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ContactPerson model
   */
  interface ContactPersonFieldRefs {
    readonly id: FieldRef<"ContactPerson", 'Int'>
    readonly name: FieldRef<"ContactPerson", 'String'>
    readonly email: FieldRef<"ContactPerson", 'String'>
    readonly phone: FieldRef<"ContactPerson", 'String'>
    readonly customerId: FieldRef<"ContactPerson", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ContactPerson findUnique
   */
  export type ContactPersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * Filter, which ContactPerson to fetch.
     */
    where: ContactPersonWhereUniqueInput
  }

  /**
   * ContactPerson findUniqueOrThrow
   */
  export type ContactPersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * Filter, which ContactPerson to fetch.
     */
    where: ContactPersonWhereUniqueInput
  }

  /**
   * ContactPerson findFirst
   */
  export type ContactPersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * Filter, which ContactPerson to fetch.
     */
    where?: ContactPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPeople to fetch.
     */
    orderBy?: ContactPersonOrderByWithRelationInput | ContactPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactPeople.
     */
    cursor?: ContactPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactPeople.
     */
    distinct?: ContactPersonScalarFieldEnum | ContactPersonScalarFieldEnum[]
  }

  /**
   * ContactPerson findFirstOrThrow
   */
  export type ContactPersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * Filter, which ContactPerson to fetch.
     */
    where?: ContactPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPeople to fetch.
     */
    orderBy?: ContactPersonOrderByWithRelationInput | ContactPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactPeople.
     */
    cursor?: ContactPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactPeople.
     */
    distinct?: ContactPersonScalarFieldEnum | ContactPersonScalarFieldEnum[]
  }

  /**
   * ContactPerson findMany
   */
  export type ContactPersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * Filter, which ContactPeople to fetch.
     */
    where?: ContactPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPeople to fetch.
     */
    orderBy?: ContactPersonOrderByWithRelationInput | ContactPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactPeople.
     */
    cursor?: ContactPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPeople.
     */
    skip?: number
    distinct?: ContactPersonScalarFieldEnum | ContactPersonScalarFieldEnum[]
  }

  /**
   * ContactPerson create
   */
  export type ContactPersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactPerson.
     */
    data: XOR<ContactPersonCreateInput, ContactPersonUncheckedCreateInput>
  }

  /**
   * ContactPerson createMany
   */
  export type ContactPersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactPeople.
     */
    data: ContactPersonCreateManyInput | ContactPersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactPerson createManyAndReturn
   */
  export type ContactPersonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * The data used to create many ContactPeople.
     */
    data: ContactPersonCreateManyInput | ContactPersonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactPerson update
   */
  export type ContactPersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactPerson.
     */
    data: XOR<ContactPersonUpdateInput, ContactPersonUncheckedUpdateInput>
    /**
     * Choose, which ContactPerson to update.
     */
    where: ContactPersonWhereUniqueInput
  }

  /**
   * ContactPerson updateMany
   */
  export type ContactPersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactPeople.
     */
    data: XOR<ContactPersonUpdateManyMutationInput, ContactPersonUncheckedUpdateManyInput>
    /**
     * Filter which ContactPeople to update
     */
    where?: ContactPersonWhereInput
    /**
     * Limit how many ContactPeople to update.
     */
    limit?: number
  }

  /**
   * ContactPerson updateManyAndReturn
   */
  export type ContactPersonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * The data used to update ContactPeople.
     */
    data: XOR<ContactPersonUpdateManyMutationInput, ContactPersonUncheckedUpdateManyInput>
    /**
     * Filter which ContactPeople to update
     */
    where?: ContactPersonWhereInput
    /**
     * Limit how many ContactPeople to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactPerson upsert
   */
  export type ContactPersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactPerson to update in case it exists.
     */
    where: ContactPersonWhereUniqueInput
    /**
     * In case the ContactPerson found by the `where` argument doesn't exist, create a new ContactPerson with this data.
     */
    create: XOR<ContactPersonCreateInput, ContactPersonUncheckedCreateInput>
    /**
     * In case the ContactPerson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactPersonUpdateInput, ContactPersonUncheckedUpdateInput>
  }

  /**
   * ContactPerson delete
   */
  export type ContactPersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * Filter which ContactPerson to delete.
     */
    where: ContactPersonWhereUniqueInput
  }

  /**
   * ContactPerson deleteMany
   */
  export type ContactPersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactPeople to delete
     */
    where?: ContactPersonWhereInput
    /**
     * Limit how many ContactPeople to delete.
     */
    limit?: number
  }

  /**
   * ContactPerson.projects
   */
  export type ContactPerson$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * ContactPerson without action
   */
  export type ContactPersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
  }


  /**
   * Model Status
   */

  export type AggregateStatus = {
    _count: StatusCountAggregateOutputType | null
    _avg: StatusAvgAggregateOutputType | null
    _sum: StatusSumAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  export type StatusAvgAggregateOutputType = {
    id: number | null
  }

  export type StatusSumAggregateOutputType = {
    id: number | null
  }

  export type StatusMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type StatusMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type StatusCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type StatusAvgAggregateInputType = {
    id?: true
  }

  export type StatusSumAggregateInputType = {
    id?: true
  }

  export type StatusMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type StatusMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type StatusCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type StatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Status to aggregate.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Statuses
    **/
    _count?: true | StatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusMaxAggregateInputType
  }

  export type GetStatusAggregateType<T extends StatusAggregateArgs> = {
        [P in keyof T & keyof AggregateStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatus[P]>
      : GetScalarType<T[P], AggregateStatus[P]>
  }




  export type StatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusWhereInput
    orderBy?: StatusOrderByWithAggregationInput | StatusOrderByWithAggregationInput[]
    by: StatusScalarFieldEnum[] | StatusScalarFieldEnum
    having?: StatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusCountAggregateInputType | true
    _avg?: StatusAvgAggregateInputType
    _sum?: StatusSumAggregateInputType
    _min?: StatusMinAggregateInputType
    _max?: StatusMaxAggregateInputType
  }

  export type StatusGroupByOutputType = {
    id: number
    name: string
    _count: StatusCountAggregateOutputType | null
    _avg: StatusAvgAggregateOutputType | null
    _sum: StatusSumAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  type GetStatusGroupByPayload<T extends StatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusGroupByOutputType[P]>
            : GetScalarType<T[P], StatusGroupByOutputType[P]>
        }
      >
    >


  export type StatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projects?: boolean | Status$projectsArgs<ExtArgs>
    _count?: boolean | StatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["status"]>

  export type StatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["status"]>

  export type StatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["status"]>

  export type StatusSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type StatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["status"]>
  export type StatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | Status$projectsArgs<ExtArgs>
    _count?: boolean | StatusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Status"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["status"]>
    composites: {}
  }

  type StatusGetPayload<S extends boolean | null | undefined | StatusDefaultArgs> = $Result.GetResult<Prisma.$StatusPayload, S>

  type StatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusCountAggregateInputType | true
    }

  export interface StatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Status'], meta: { name: 'Status' } }
    /**
     * Find zero or one Status that matches the filter.
     * @param {StatusFindUniqueArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusFindUniqueArgs>(args: SelectSubset<T, StatusFindUniqueArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusFindUniqueOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindFirstArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusFindFirstArgs>(args?: SelectSubset<T, StatusFindFirstArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindFirstOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statuses
     * const statuses = await prisma.status.findMany()
     * 
     * // Get first 10 Statuses
     * const statuses = await prisma.status.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusWithIdOnly = await prisma.status.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatusFindManyArgs>(args?: SelectSubset<T, StatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Status.
     * @param {StatusCreateArgs} args - Arguments to create a Status.
     * @example
     * // Create one Status
     * const Status = await prisma.status.create({
     *   data: {
     *     // ... data to create a Status
     *   }
     * })
     * 
     */
    create<T extends StatusCreateArgs>(args: SelectSubset<T, StatusCreateArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Statuses.
     * @param {StatusCreateManyArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const status = await prisma.status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusCreateManyArgs>(args?: SelectSubset<T, StatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Statuses and returns the data saved in the database.
     * @param {StatusCreateManyAndReturnArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const status = await prisma.status.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Statuses and only return the `id`
     * const statusWithIdOnly = await prisma.status.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatusCreateManyAndReturnArgs>(args?: SelectSubset<T, StatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Status.
     * @param {StatusDeleteArgs} args - Arguments to delete one Status.
     * @example
     * // Delete one Status
     * const Status = await prisma.status.delete({
     *   where: {
     *     // ... filter to delete one Status
     *   }
     * })
     * 
     */
    delete<T extends StatusDeleteArgs>(args: SelectSubset<T, StatusDeleteArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Status.
     * @param {StatusUpdateArgs} args - Arguments to update one Status.
     * @example
     * // Update one Status
     * const status = await prisma.status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusUpdateArgs>(args: SelectSubset<T, StatusUpdateArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Statuses.
     * @param {StatusDeleteManyArgs} args - Arguments to filter Statuses to delete.
     * @example
     * // Delete a few Statuses
     * const { count } = await prisma.status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusDeleteManyArgs>(args?: SelectSubset<T, StatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusUpdateManyArgs>(args: SelectSubset<T, StatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses and returns the data updated in the database.
     * @param {StatusUpdateManyAndReturnArgs} args - Arguments to update many Statuses.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Statuses and only return the `id`
     * const statusWithIdOnly = await prisma.status.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StatusUpdateManyAndReturnArgs>(args: SelectSubset<T, StatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Status.
     * @param {StatusUpsertArgs} args - Arguments to update or create a Status.
     * @example
     * // Update or create a Status
     * const status = await prisma.status.upsert({
     *   create: {
     *     // ... data to create a Status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Status we want to update
     *   }
     * })
     */
    upsert<T extends StatusUpsertArgs>(args: SelectSubset<T, StatusUpsertArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusCountArgs} args - Arguments to filter Statuses to count.
     * @example
     * // Count the number of Statuses
     * const count = await prisma.status.count({
     *   where: {
     *     // ... the filter for the Statuses we want to count
     *   }
     * })
    **/
    count<T extends StatusCountArgs>(
      args?: Subset<T, StatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatusAggregateArgs>(args: Subset<T, StatusAggregateArgs>): Prisma.PrismaPromise<GetStatusAggregateType<T>>

    /**
     * Group by Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusGroupByArgs} args - Group by arguments.
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
      T extends StatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusGroupByArgs['orderBy'] }
        : { orderBy?: StatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Status model
   */
  readonly fields: StatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends Status$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Status$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Status model
   */
  interface StatusFieldRefs {
    readonly id: FieldRef<"Status", 'Int'>
    readonly name: FieldRef<"Status", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Status findUnique
   */
  export type StatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status findUniqueOrThrow
   */
  export type StatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status findFirst
   */
  export type StatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status findFirstOrThrow
   */
  export type StatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status findMany
   */
  export type StatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Statuses to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status create
   */
  export type StatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The data needed to create a Status.
     */
    data: XOR<StatusCreateInput, StatusUncheckedCreateInput>
  }

  /**
   * Status createMany
   */
  export type StatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Statuses.
     */
    data: StatusCreateManyInput | StatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Status createManyAndReturn
   */
  export type StatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * The data used to create many Statuses.
     */
    data: StatusCreateManyInput | StatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Status update
   */
  export type StatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The data needed to update a Status.
     */
    data: XOR<StatusUpdateInput, StatusUncheckedUpdateInput>
    /**
     * Choose, which Status to update.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status updateMany
   */
  export type StatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Statuses.
     */
    data: XOR<StatusUpdateManyMutationInput, StatusUncheckedUpdateManyInput>
    /**
     * Filter which Statuses to update
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to update.
     */
    limit?: number
  }

  /**
   * Status updateManyAndReturn
   */
  export type StatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * The data used to update Statuses.
     */
    data: XOR<StatusUpdateManyMutationInput, StatusUncheckedUpdateManyInput>
    /**
     * Filter which Statuses to update
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to update.
     */
    limit?: number
  }

  /**
   * Status upsert
   */
  export type StatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The filter to search for the Status to update in case it exists.
     */
    where: StatusWhereUniqueInput
    /**
     * In case the Status found by the `where` argument doesn't exist, create a new Status with this data.
     */
    create: XOR<StatusCreateInput, StatusUncheckedCreateInput>
    /**
     * In case the Status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusUpdateInput, StatusUncheckedUpdateInput>
  }

  /**
   * Status delete
   */
  export type StatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter which Status to delete.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status deleteMany
   */
  export type StatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statuses to delete
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to delete.
     */
    limit?: number
  }

  /**
   * Status.projects
   */
  export type Status$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Status without action
   */
  export type StatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
  }


  /**
   * Model ProjectRoleType
   */

  export type AggregateProjectRoleType = {
    _count: ProjectRoleTypeCountAggregateOutputType | null
    _avg: ProjectRoleTypeAvgAggregateOutputType | null
    _sum: ProjectRoleTypeSumAggregateOutputType | null
    _min: ProjectRoleTypeMinAggregateOutputType | null
    _max: ProjectRoleTypeMaxAggregateOutputType | null
  }

  export type ProjectRoleTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjectRoleTypeSumAggregateOutputType = {
    id: number | null
  }

  export type ProjectRoleTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ProjectRoleTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ProjectRoleTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ProjectRoleTypeAvgAggregateInputType = {
    id?: true
  }

  export type ProjectRoleTypeSumAggregateInputType = {
    id?: true
  }

  export type ProjectRoleTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProjectRoleTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProjectRoleTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ProjectRoleTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectRoleType to aggregate.
     */
    where?: ProjectRoleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectRoleTypes to fetch.
     */
    orderBy?: ProjectRoleTypeOrderByWithRelationInput | ProjectRoleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectRoleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectRoleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectRoleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectRoleTypes
    **/
    _count?: true | ProjectRoleTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectRoleTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectRoleTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectRoleTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectRoleTypeMaxAggregateInputType
  }

  export type GetProjectRoleTypeAggregateType<T extends ProjectRoleTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectRoleType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectRoleType[P]>
      : GetScalarType<T[P], AggregateProjectRoleType[P]>
  }




  export type ProjectRoleTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectRoleTypeWhereInput
    orderBy?: ProjectRoleTypeOrderByWithAggregationInput | ProjectRoleTypeOrderByWithAggregationInput[]
    by: ProjectRoleTypeScalarFieldEnum[] | ProjectRoleTypeScalarFieldEnum
    having?: ProjectRoleTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectRoleTypeCountAggregateInputType | true
    _avg?: ProjectRoleTypeAvgAggregateInputType
    _sum?: ProjectRoleTypeSumAggregateInputType
    _min?: ProjectRoleTypeMinAggregateInputType
    _max?: ProjectRoleTypeMaxAggregateInputType
  }

  export type ProjectRoleTypeGroupByOutputType = {
    id: number
    name: string
    _count: ProjectRoleTypeCountAggregateOutputType | null
    _avg: ProjectRoleTypeAvgAggregateOutputType | null
    _sum: ProjectRoleTypeSumAggregateOutputType | null
    _min: ProjectRoleTypeMinAggregateOutputType | null
    _max: ProjectRoleTypeMaxAggregateOutputType | null
  }

  type GetProjectRoleTypeGroupByPayload<T extends ProjectRoleTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectRoleTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectRoleTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectRoleTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectRoleTypeGroupByOutputType[P]>
        }
      >
    >


  export type ProjectRoleTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectRoles?: boolean | ProjectRoleType$projectRolesArgs<ExtArgs>
    _count?: boolean | ProjectRoleTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectRoleType"]>

  export type ProjectRoleTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["projectRoleType"]>

  export type ProjectRoleTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["projectRoleType"]>

  export type ProjectRoleTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ProjectRoleTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["projectRoleType"]>
  export type ProjectRoleTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectRoles?: boolean | ProjectRoleType$projectRolesArgs<ExtArgs>
    _count?: boolean | ProjectRoleTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectRoleTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectRoleTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectRoleTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectRoleType"
    objects: {
      projectRoles: Prisma.$ProjectRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["projectRoleType"]>
    composites: {}
  }

  type ProjectRoleTypeGetPayload<S extends boolean | null | undefined | ProjectRoleTypeDefaultArgs> = $Result.GetResult<Prisma.$ProjectRoleTypePayload, S>

  type ProjectRoleTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectRoleTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectRoleTypeCountAggregateInputType | true
    }

  export interface ProjectRoleTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectRoleType'], meta: { name: 'ProjectRoleType' } }
    /**
     * Find zero or one ProjectRoleType that matches the filter.
     * @param {ProjectRoleTypeFindUniqueArgs} args - Arguments to find a ProjectRoleType
     * @example
     * // Get one ProjectRoleType
     * const projectRoleType = await prisma.projectRoleType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectRoleTypeFindUniqueArgs>(args: SelectSubset<T, ProjectRoleTypeFindUniqueArgs<ExtArgs>>): Prisma__ProjectRoleTypeClient<$Result.GetResult<Prisma.$ProjectRoleTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectRoleType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectRoleTypeFindUniqueOrThrowArgs} args - Arguments to find a ProjectRoleType
     * @example
     * // Get one ProjectRoleType
     * const projectRoleType = await prisma.projectRoleType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectRoleTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectRoleTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectRoleTypeClient<$Result.GetResult<Prisma.$ProjectRoleTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectRoleType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRoleTypeFindFirstArgs} args - Arguments to find a ProjectRoleType
     * @example
     * // Get one ProjectRoleType
     * const projectRoleType = await prisma.projectRoleType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectRoleTypeFindFirstArgs>(args?: SelectSubset<T, ProjectRoleTypeFindFirstArgs<ExtArgs>>): Prisma__ProjectRoleTypeClient<$Result.GetResult<Prisma.$ProjectRoleTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectRoleType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRoleTypeFindFirstOrThrowArgs} args - Arguments to find a ProjectRoleType
     * @example
     * // Get one ProjectRoleType
     * const projectRoleType = await prisma.projectRoleType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectRoleTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectRoleTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectRoleTypeClient<$Result.GetResult<Prisma.$ProjectRoleTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectRoleTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRoleTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectRoleTypes
     * const projectRoleTypes = await prisma.projectRoleType.findMany()
     * 
     * // Get first 10 ProjectRoleTypes
     * const projectRoleTypes = await prisma.projectRoleType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectRoleTypeWithIdOnly = await prisma.projectRoleType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectRoleTypeFindManyArgs>(args?: SelectSubset<T, ProjectRoleTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectRoleTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectRoleType.
     * @param {ProjectRoleTypeCreateArgs} args - Arguments to create a ProjectRoleType.
     * @example
     * // Create one ProjectRoleType
     * const ProjectRoleType = await prisma.projectRoleType.create({
     *   data: {
     *     // ... data to create a ProjectRoleType
     *   }
     * })
     * 
     */
    create<T extends ProjectRoleTypeCreateArgs>(args: SelectSubset<T, ProjectRoleTypeCreateArgs<ExtArgs>>): Prisma__ProjectRoleTypeClient<$Result.GetResult<Prisma.$ProjectRoleTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectRoleTypes.
     * @param {ProjectRoleTypeCreateManyArgs} args - Arguments to create many ProjectRoleTypes.
     * @example
     * // Create many ProjectRoleTypes
     * const projectRoleType = await prisma.projectRoleType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectRoleTypeCreateManyArgs>(args?: SelectSubset<T, ProjectRoleTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectRoleTypes and returns the data saved in the database.
     * @param {ProjectRoleTypeCreateManyAndReturnArgs} args - Arguments to create many ProjectRoleTypes.
     * @example
     * // Create many ProjectRoleTypes
     * const projectRoleType = await prisma.projectRoleType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectRoleTypes and only return the `id`
     * const projectRoleTypeWithIdOnly = await prisma.projectRoleType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectRoleTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectRoleTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectRoleTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectRoleType.
     * @param {ProjectRoleTypeDeleteArgs} args - Arguments to delete one ProjectRoleType.
     * @example
     * // Delete one ProjectRoleType
     * const ProjectRoleType = await prisma.projectRoleType.delete({
     *   where: {
     *     // ... filter to delete one ProjectRoleType
     *   }
     * })
     * 
     */
    delete<T extends ProjectRoleTypeDeleteArgs>(args: SelectSubset<T, ProjectRoleTypeDeleteArgs<ExtArgs>>): Prisma__ProjectRoleTypeClient<$Result.GetResult<Prisma.$ProjectRoleTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectRoleType.
     * @param {ProjectRoleTypeUpdateArgs} args - Arguments to update one ProjectRoleType.
     * @example
     * // Update one ProjectRoleType
     * const projectRoleType = await prisma.projectRoleType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectRoleTypeUpdateArgs>(args: SelectSubset<T, ProjectRoleTypeUpdateArgs<ExtArgs>>): Prisma__ProjectRoleTypeClient<$Result.GetResult<Prisma.$ProjectRoleTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectRoleTypes.
     * @param {ProjectRoleTypeDeleteManyArgs} args - Arguments to filter ProjectRoleTypes to delete.
     * @example
     * // Delete a few ProjectRoleTypes
     * const { count } = await prisma.projectRoleType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectRoleTypeDeleteManyArgs>(args?: SelectSubset<T, ProjectRoleTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectRoleTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRoleTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectRoleTypes
     * const projectRoleType = await prisma.projectRoleType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectRoleTypeUpdateManyArgs>(args: SelectSubset<T, ProjectRoleTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectRoleTypes and returns the data updated in the database.
     * @param {ProjectRoleTypeUpdateManyAndReturnArgs} args - Arguments to update many ProjectRoleTypes.
     * @example
     * // Update many ProjectRoleTypes
     * const projectRoleType = await prisma.projectRoleType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectRoleTypes and only return the `id`
     * const projectRoleTypeWithIdOnly = await prisma.projectRoleType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectRoleTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectRoleTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectRoleTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectRoleType.
     * @param {ProjectRoleTypeUpsertArgs} args - Arguments to update or create a ProjectRoleType.
     * @example
     * // Update or create a ProjectRoleType
     * const projectRoleType = await prisma.projectRoleType.upsert({
     *   create: {
     *     // ... data to create a ProjectRoleType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectRoleType we want to update
     *   }
     * })
     */
    upsert<T extends ProjectRoleTypeUpsertArgs>(args: SelectSubset<T, ProjectRoleTypeUpsertArgs<ExtArgs>>): Prisma__ProjectRoleTypeClient<$Result.GetResult<Prisma.$ProjectRoleTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectRoleTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRoleTypeCountArgs} args - Arguments to filter ProjectRoleTypes to count.
     * @example
     * // Count the number of ProjectRoleTypes
     * const count = await prisma.projectRoleType.count({
     *   where: {
     *     // ... the filter for the ProjectRoleTypes we want to count
     *   }
     * })
    **/
    count<T extends ProjectRoleTypeCountArgs>(
      args?: Subset<T, ProjectRoleTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectRoleTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectRoleType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRoleTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectRoleTypeAggregateArgs>(args: Subset<T, ProjectRoleTypeAggregateArgs>): Prisma.PrismaPromise<GetProjectRoleTypeAggregateType<T>>

    /**
     * Group by ProjectRoleType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRoleTypeGroupByArgs} args - Group by arguments.
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
      T extends ProjectRoleTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectRoleTypeGroupByArgs['orderBy'] }
        : { orderBy?: ProjectRoleTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectRoleTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectRoleTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectRoleType model
   */
  readonly fields: ProjectRoleTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectRoleType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectRoleTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectRoles<T extends ProjectRoleType$projectRolesArgs<ExtArgs> = {}>(args?: Subset<T, ProjectRoleType$projectRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProjectRoleType model
   */
  interface ProjectRoleTypeFieldRefs {
    readonly id: FieldRef<"ProjectRoleType", 'Int'>
    readonly name: FieldRef<"ProjectRoleType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectRoleType findUnique
   */
  export type ProjectRoleTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRoleType
     */
    select?: ProjectRoleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRoleType
     */
    omit?: ProjectRoleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRoleType to fetch.
     */
    where: ProjectRoleTypeWhereUniqueInput
  }

  /**
   * ProjectRoleType findUniqueOrThrow
   */
  export type ProjectRoleTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRoleType
     */
    select?: ProjectRoleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRoleType
     */
    omit?: ProjectRoleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRoleType to fetch.
     */
    where: ProjectRoleTypeWhereUniqueInput
  }

  /**
   * ProjectRoleType findFirst
   */
  export type ProjectRoleTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRoleType
     */
    select?: ProjectRoleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRoleType
     */
    omit?: ProjectRoleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRoleType to fetch.
     */
    where?: ProjectRoleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectRoleTypes to fetch.
     */
    orderBy?: ProjectRoleTypeOrderByWithRelationInput | ProjectRoleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectRoleTypes.
     */
    cursor?: ProjectRoleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectRoleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectRoleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectRoleTypes.
     */
    distinct?: ProjectRoleTypeScalarFieldEnum | ProjectRoleTypeScalarFieldEnum[]
  }

  /**
   * ProjectRoleType findFirstOrThrow
   */
  export type ProjectRoleTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRoleType
     */
    select?: ProjectRoleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRoleType
     */
    omit?: ProjectRoleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRoleType to fetch.
     */
    where?: ProjectRoleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectRoleTypes to fetch.
     */
    orderBy?: ProjectRoleTypeOrderByWithRelationInput | ProjectRoleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectRoleTypes.
     */
    cursor?: ProjectRoleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectRoleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectRoleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectRoleTypes.
     */
    distinct?: ProjectRoleTypeScalarFieldEnum | ProjectRoleTypeScalarFieldEnum[]
  }

  /**
   * ProjectRoleType findMany
   */
  export type ProjectRoleTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRoleType
     */
    select?: ProjectRoleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRoleType
     */
    omit?: ProjectRoleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRoleTypes to fetch.
     */
    where?: ProjectRoleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectRoleTypes to fetch.
     */
    orderBy?: ProjectRoleTypeOrderByWithRelationInput | ProjectRoleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectRoleTypes.
     */
    cursor?: ProjectRoleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectRoleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectRoleTypes.
     */
    skip?: number
    distinct?: ProjectRoleTypeScalarFieldEnum | ProjectRoleTypeScalarFieldEnum[]
  }

  /**
   * ProjectRoleType create
   */
  export type ProjectRoleTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRoleType
     */
    select?: ProjectRoleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRoleType
     */
    omit?: ProjectRoleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectRoleType.
     */
    data: XOR<ProjectRoleTypeCreateInput, ProjectRoleTypeUncheckedCreateInput>
  }

  /**
   * ProjectRoleType createMany
   */
  export type ProjectRoleTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectRoleTypes.
     */
    data: ProjectRoleTypeCreateManyInput | ProjectRoleTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectRoleType createManyAndReturn
   */
  export type ProjectRoleTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRoleType
     */
    select?: ProjectRoleTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRoleType
     */
    omit?: ProjectRoleTypeOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectRoleTypes.
     */
    data: ProjectRoleTypeCreateManyInput | ProjectRoleTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectRoleType update
   */
  export type ProjectRoleTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRoleType
     */
    select?: ProjectRoleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRoleType
     */
    omit?: ProjectRoleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectRoleType.
     */
    data: XOR<ProjectRoleTypeUpdateInput, ProjectRoleTypeUncheckedUpdateInput>
    /**
     * Choose, which ProjectRoleType to update.
     */
    where: ProjectRoleTypeWhereUniqueInput
  }

  /**
   * ProjectRoleType updateMany
   */
  export type ProjectRoleTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectRoleTypes.
     */
    data: XOR<ProjectRoleTypeUpdateManyMutationInput, ProjectRoleTypeUncheckedUpdateManyInput>
    /**
     * Filter which ProjectRoleTypes to update
     */
    where?: ProjectRoleTypeWhereInput
    /**
     * Limit how many ProjectRoleTypes to update.
     */
    limit?: number
  }

  /**
   * ProjectRoleType updateManyAndReturn
   */
  export type ProjectRoleTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRoleType
     */
    select?: ProjectRoleTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRoleType
     */
    omit?: ProjectRoleTypeOmit<ExtArgs> | null
    /**
     * The data used to update ProjectRoleTypes.
     */
    data: XOR<ProjectRoleTypeUpdateManyMutationInput, ProjectRoleTypeUncheckedUpdateManyInput>
    /**
     * Filter which ProjectRoleTypes to update
     */
    where?: ProjectRoleTypeWhereInput
    /**
     * Limit how many ProjectRoleTypes to update.
     */
    limit?: number
  }

  /**
   * ProjectRoleType upsert
   */
  export type ProjectRoleTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRoleType
     */
    select?: ProjectRoleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRoleType
     */
    omit?: ProjectRoleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectRoleType to update in case it exists.
     */
    where: ProjectRoleTypeWhereUniqueInput
    /**
     * In case the ProjectRoleType found by the `where` argument doesn't exist, create a new ProjectRoleType with this data.
     */
    create: XOR<ProjectRoleTypeCreateInput, ProjectRoleTypeUncheckedCreateInput>
    /**
     * In case the ProjectRoleType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectRoleTypeUpdateInput, ProjectRoleTypeUncheckedUpdateInput>
  }

  /**
   * ProjectRoleType delete
   */
  export type ProjectRoleTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRoleType
     */
    select?: ProjectRoleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRoleType
     */
    omit?: ProjectRoleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleTypeInclude<ExtArgs> | null
    /**
     * Filter which ProjectRoleType to delete.
     */
    where: ProjectRoleTypeWhereUniqueInput
  }

  /**
   * ProjectRoleType deleteMany
   */
  export type ProjectRoleTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectRoleTypes to delete
     */
    where?: ProjectRoleTypeWhereInput
    /**
     * Limit how many ProjectRoleTypes to delete.
     */
    limit?: number
  }

  /**
   * ProjectRoleType.projectRoles
   */
  export type ProjectRoleType$projectRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRole
     */
    omit?: ProjectRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleInclude<ExtArgs> | null
    where?: ProjectRoleWhereInput
    orderBy?: ProjectRoleOrderByWithRelationInput | ProjectRoleOrderByWithRelationInput[]
    cursor?: ProjectRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectRoleScalarFieldEnum | ProjectRoleScalarFieldEnum[]
  }

  /**
   * ProjectRoleType without action
   */
  export type ProjectRoleTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRoleType
     */
    select?: ProjectRoleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRoleType
     */
    omit?: ProjectRoleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleTypeInclude<ExtArgs> | null
  }


  /**
   * Model ProjectRole
   */

  export type AggregateProjectRole = {
    _count: ProjectRoleCountAggregateOutputType | null
    _avg: ProjectRoleAvgAggregateOutputType | null
    _sum: ProjectRoleSumAggregateOutputType | null
    _min: ProjectRoleMinAggregateOutputType | null
    _max: ProjectRoleMaxAggregateOutputType | null
  }

  export type ProjectRoleAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
    roleId: number | null
    hoursQuoted: number | null
  }

  export type ProjectRoleSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
    roleId: number | null
    hoursQuoted: number | null
  }

  export type ProjectRoleMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
    roleId: number | null
    hoursQuoted: number | null
  }

  export type ProjectRoleMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    userId: number | null
    roleId: number | null
    hoursQuoted: number | null
  }

  export type ProjectRoleCountAggregateOutputType = {
    id: number
    projectId: number
    userId: number
    roleId: number
    hoursQuoted: number
    _all: number
  }


  export type ProjectRoleAvgAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    roleId?: true
    hoursQuoted?: true
  }

  export type ProjectRoleSumAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    roleId?: true
    hoursQuoted?: true
  }

  export type ProjectRoleMinAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    roleId?: true
    hoursQuoted?: true
  }

  export type ProjectRoleMaxAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    roleId?: true
    hoursQuoted?: true
  }

  export type ProjectRoleCountAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    roleId?: true
    hoursQuoted?: true
    _all?: true
  }

  export type ProjectRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectRole to aggregate.
     */
    where?: ProjectRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectRoles to fetch.
     */
    orderBy?: ProjectRoleOrderByWithRelationInput | ProjectRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectRoles
    **/
    _count?: true | ProjectRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectRoleMaxAggregateInputType
  }

  export type GetProjectRoleAggregateType<T extends ProjectRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectRole[P]>
      : GetScalarType<T[P], AggregateProjectRole[P]>
  }




  export type ProjectRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectRoleWhereInput
    orderBy?: ProjectRoleOrderByWithAggregationInput | ProjectRoleOrderByWithAggregationInput[]
    by: ProjectRoleScalarFieldEnum[] | ProjectRoleScalarFieldEnum
    having?: ProjectRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectRoleCountAggregateInputType | true
    _avg?: ProjectRoleAvgAggregateInputType
    _sum?: ProjectRoleSumAggregateInputType
    _min?: ProjectRoleMinAggregateInputType
    _max?: ProjectRoleMaxAggregateInputType
  }

  export type ProjectRoleGroupByOutputType = {
    id: number
    projectId: number
    userId: number
    roleId: number
    hoursQuoted: number
    _count: ProjectRoleCountAggregateOutputType | null
    _avg: ProjectRoleAvgAggregateOutputType | null
    _sum: ProjectRoleSumAggregateOutputType | null
    _min: ProjectRoleMinAggregateOutputType | null
    _max: ProjectRoleMaxAggregateOutputType | null
  }

  type GetProjectRoleGroupByPayload<T extends ProjectRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectRoleGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectRoleGroupByOutputType[P]>
        }
      >
    >


  export type ProjectRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    roleId?: boolean
    hoursQuoted?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | ProjectRoleTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectRole"]>

  export type ProjectRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    roleId?: boolean
    hoursQuoted?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | ProjectRoleTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectRole"]>

  export type ProjectRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    roleId?: boolean
    hoursQuoted?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | ProjectRoleTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectRole"]>

  export type ProjectRoleSelectScalar = {
    id?: boolean
    projectId?: boolean
    userId?: boolean
    roleId?: boolean
    hoursQuoted?: boolean
  }

  export type ProjectRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "userId" | "roleId" | "hoursQuoted", ExtArgs["result"]["projectRole"]>
  export type ProjectRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | ProjectRoleTypeDefaultArgs<ExtArgs>
  }
  export type ProjectRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | ProjectRoleTypeDefaultArgs<ExtArgs>
  }
  export type ProjectRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | ProjectRoleTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectRole"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      role: Prisma.$ProjectRoleTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      userId: number
      roleId: number
      hoursQuoted: number
    }, ExtArgs["result"]["projectRole"]>
    composites: {}
  }

  type ProjectRoleGetPayload<S extends boolean | null | undefined | ProjectRoleDefaultArgs> = $Result.GetResult<Prisma.$ProjectRolePayload, S>

  type ProjectRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectRoleCountAggregateInputType | true
    }

  export interface ProjectRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectRole'], meta: { name: 'ProjectRole' } }
    /**
     * Find zero or one ProjectRole that matches the filter.
     * @param {ProjectRoleFindUniqueArgs} args - Arguments to find a ProjectRole
     * @example
     * // Get one ProjectRole
     * const projectRole = await prisma.projectRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectRoleFindUniqueArgs>(args: SelectSubset<T, ProjectRoleFindUniqueArgs<ExtArgs>>): Prisma__ProjectRoleClient<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectRoleFindUniqueOrThrowArgs} args - Arguments to find a ProjectRole
     * @example
     * // Get one ProjectRole
     * const projectRole = await prisma.projectRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectRoleClient<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRoleFindFirstArgs} args - Arguments to find a ProjectRole
     * @example
     * // Get one ProjectRole
     * const projectRole = await prisma.projectRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectRoleFindFirstArgs>(args?: SelectSubset<T, ProjectRoleFindFirstArgs<ExtArgs>>): Prisma__ProjectRoleClient<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRoleFindFirstOrThrowArgs} args - Arguments to find a ProjectRole
     * @example
     * // Get one ProjectRole
     * const projectRole = await prisma.projectRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectRoleClient<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectRoles
     * const projectRoles = await prisma.projectRole.findMany()
     * 
     * // Get first 10 ProjectRoles
     * const projectRoles = await prisma.projectRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectRoleWithIdOnly = await prisma.projectRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectRoleFindManyArgs>(args?: SelectSubset<T, ProjectRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectRole.
     * @param {ProjectRoleCreateArgs} args - Arguments to create a ProjectRole.
     * @example
     * // Create one ProjectRole
     * const ProjectRole = await prisma.projectRole.create({
     *   data: {
     *     // ... data to create a ProjectRole
     *   }
     * })
     * 
     */
    create<T extends ProjectRoleCreateArgs>(args: SelectSubset<T, ProjectRoleCreateArgs<ExtArgs>>): Prisma__ProjectRoleClient<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectRoles.
     * @param {ProjectRoleCreateManyArgs} args - Arguments to create many ProjectRoles.
     * @example
     * // Create many ProjectRoles
     * const projectRole = await prisma.projectRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectRoleCreateManyArgs>(args?: SelectSubset<T, ProjectRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectRoles and returns the data saved in the database.
     * @param {ProjectRoleCreateManyAndReturnArgs} args - Arguments to create many ProjectRoles.
     * @example
     * // Create many ProjectRoles
     * const projectRole = await prisma.projectRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectRoles and only return the `id`
     * const projectRoleWithIdOnly = await prisma.projectRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectRole.
     * @param {ProjectRoleDeleteArgs} args - Arguments to delete one ProjectRole.
     * @example
     * // Delete one ProjectRole
     * const ProjectRole = await prisma.projectRole.delete({
     *   where: {
     *     // ... filter to delete one ProjectRole
     *   }
     * })
     * 
     */
    delete<T extends ProjectRoleDeleteArgs>(args: SelectSubset<T, ProjectRoleDeleteArgs<ExtArgs>>): Prisma__ProjectRoleClient<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectRole.
     * @param {ProjectRoleUpdateArgs} args - Arguments to update one ProjectRole.
     * @example
     * // Update one ProjectRole
     * const projectRole = await prisma.projectRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectRoleUpdateArgs>(args: SelectSubset<T, ProjectRoleUpdateArgs<ExtArgs>>): Prisma__ProjectRoleClient<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectRoles.
     * @param {ProjectRoleDeleteManyArgs} args - Arguments to filter ProjectRoles to delete.
     * @example
     * // Delete a few ProjectRoles
     * const { count } = await prisma.projectRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectRoleDeleteManyArgs>(args?: SelectSubset<T, ProjectRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectRoles
     * const projectRole = await prisma.projectRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectRoleUpdateManyArgs>(args: SelectSubset<T, ProjectRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectRoles and returns the data updated in the database.
     * @param {ProjectRoleUpdateManyAndReturnArgs} args - Arguments to update many ProjectRoles.
     * @example
     * // Update many ProjectRoles
     * const projectRole = await prisma.projectRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectRoles and only return the `id`
     * const projectRoleWithIdOnly = await prisma.projectRole.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectRole.
     * @param {ProjectRoleUpsertArgs} args - Arguments to update or create a ProjectRole.
     * @example
     * // Update or create a ProjectRole
     * const projectRole = await prisma.projectRole.upsert({
     *   create: {
     *     // ... data to create a ProjectRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectRole we want to update
     *   }
     * })
     */
    upsert<T extends ProjectRoleUpsertArgs>(args: SelectSubset<T, ProjectRoleUpsertArgs<ExtArgs>>): Prisma__ProjectRoleClient<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRoleCountArgs} args - Arguments to filter ProjectRoles to count.
     * @example
     * // Count the number of ProjectRoles
     * const count = await prisma.projectRole.count({
     *   where: {
     *     // ... the filter for the ProjectRoles we want to count
     *   }
     * })
    **/
    count<T extends ProjectRoleCountArgs>(
      args?: Subset<T, ProjectRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectRoleAggregateArgs>(args: Subset<T, ProjectRoleAggregateArgs>): Prisma.PrismaPromise<GetProjectRoleAggregateType<T>>

    /**
     * Group by ProjectRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRoleGroupByArgs} args - Group by arguments.
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
      T extends ProjectRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectRoleGroupByArgs['orderBy'] }
        : { orderBy?: ProjectRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectRole model
   */
  readonly fields: ProjectRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends ProjectRoleTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectRoleTypeDefaultArgs<ExtArgs>>): Prisma__ProjectRoleTypeClient<$Result.GetResult<Prisma.$ProjectRoleTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectRole model
   */
  interface ProjectRoleFieldRefs {
    readonly id: FieldRef<"ProjectRole", 'Int'>
    readonly projectId: FieldRef<"ProjectRole", 'Int'>
    readonly userId: FieldRef<"ProjectRole", 'Int'>
    readonly roleId: FieldRef<"ProjectRole", 'Int'>
    readonly hoursQuoted: FieldRef<"ProjectRole", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ProjectRole findUnique
   */
  export type ProjectRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRole
     */
    omit?: ProjectRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRole to fetch.
     */
    where: ProjectRoleWhereUniqueInput
  }

  /**
   * ProjectRole findUniqueOrThrow
   */
  export type ProjectRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRole
     */
    omit?: ProjectRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRole to fetch.
     */
    where: ProjectRoleWhereUniqueInput
  }

  /**
   * ProjectRole findFirst
   */
  export type ProjectRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRole
     */
    omit?: ProjectRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRole to fetch.
     */
    where?: ProjectRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectRoles to fetch.
     */
    orderBy?: ProjectRoleOrderByWithRelationInput | ProjectRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectRoles.
     */
    cursor?: ProjectRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectRoles.
     */
    distinct?: ProjectRoleScalarFieldEnum | ProjectRoleScalarFieldEnum[]
  }

  /**
   * ProjectRole findFirstOrThrow
   */
  export type ProjectRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRole
     */
    omit?: ProjectRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRole to fetch.
     */
    where?: ProjectRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectRoles to fetch.
     */
    orderBy?: ProjectRoleOrderByWithRelationInput | ProjectRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectRoles.
     */
    cursor?: ProjectRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectRoles.
     */
    distinct?: ProjectRoleScalarFieldEnum | ProjectRoleScalarFieldEnum[]
  }

  /**
   * ProjectRole findMany
   */
  export type ProjectRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRole
     */
    omit?: ProjectRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRoles to fetch.
     */
    where?: ProjectRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectRoles to fetch.
     */
    orderBy?: ProjectRoleOrderByWithRelationInput | ProjectRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectRoles.
     */
    cursor?: ProjectRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectRoles.
     */
    skip?: number
    distinct?: ProjectRoleScalarFieldEnum | ProjectRoleScalarFieldEnum[]
  }

  /**
   * ProjectRole create
   */
  export type ProjectRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRole
     */
    omit?: ProjectRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectRole.
     */
    data: XOR<ProjectRoleCreateInput, ProjectRoleUncheckedCreateInput>
  }

  /**
   * ProjectRole createMany
   */
  export type ProjectRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectRoles.
     */
    data: ProjectRoleCreateManyInput | ProjectRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectRole createManyAndReturn
   */
  export type ProjectRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRole
     */
    omit?: ProjectRoleOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectRoles.
     */
    data: ProjectRoleCreateManyInput | ProjectRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectRole update
   */
  export type ProjectRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRole
     */
    omit?: ProjectRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectRole.
     */
    data: XOR<ProjectRoleUpdateInput, ProjectRoleUncheckedUpdateInput>
    /**
     * Choose, which ProjectRole to update.
     */
    where: ProjectRoleWhereUniqueInput
  }

  /**
   * ProjectRole updateMany
   */
  export type ProjectRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectRoles.
     */
    data: XOR<ProjectRoleUpdateManyMutationInput, ProjectRoleUncheckedUpdateManyInput>
    /**
     * Filter which ProjectRoles to update
     */
    where?: ProjectRoleWhereInput
    /**
     * Limit how many ProjectRoles to update.
     */
    limit?: number
  }

  /**
   * ProjectRole updateManyAndReturn
   */
  export type ProjectRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRole
     */
    omit?: ProjectRoleOmit<ExtArgs> | null
    /**
     * The data used to update ProjectRoles.
     */
    data: XOR<ProjectRoleUpdateManyMutationInput, ProjectRoleUncheckedUpdateManyInput>
    /**
     * Filter which ProjectRoles to update
     */
    where?: ProjectRoleWhereInput
    /**
     * Limit how many ProjectRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectRole upsert
   */
  export type ProjectRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRole
     */
    omit?: ProjectRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectRole to update in case it exists.
     */
    where: ProjectRoleWhereUniqueInput
    /**
     * In case the ProjectRole found by the `where` argument doesn't exist, create a new ProjectRole with this data.
     */
    create: XOR<ProjectRoleCreateInput, ProjectRoleUncheckedCreateInput>
    /**
     * In case the ProjectRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectRoleUpdateInput, ProjectRoleUncheckedUpdateInput>
  }

  /**
   * ProjectRole delete
   */
  export type ProjectRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRole
     */
    omit?: ProjectRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleInclude<ExtArgs> | null
    /**
     * Filter which ProjectRole to delete.
     */
    where: ProjectRoleWhereUniqueInput
  }

  /**
   * ProjectRole deleteMany
   */
  export type ProjectRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectRoles to delete
     */
    where?: ProjectRoleWhereInput
    /**
     * Limit how many ProjectRoles to delete.
     */
    limit?: number
  }

  /**
   * ProjectRole without action
   */
  export type ProjectRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRole
     */
    omit?: ProjectRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    username: string | null
    password: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    username: string | null
    password: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    username: number
    password: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    username?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    username?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    username?: true
    password?: true
    role?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    username: string
    password: string
    role: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    projectRoles?: boolean | User$projectRolesArgs<ExtArgs>
    timeReports?: boolean | User$timeReportsArgs<ExtArgs>
    assignedTasks?: boolean | User$assignedTasksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "username" | "password" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectRoles?: boolean | User$projectRolesArgs<ExtArgs>
    timeReports?: boolean | User$timeReportsArgs<ExtArgs>
    assignedTasks?: boolean | User$assignedTasksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      projectRoles: Prisma.$ProjectRolePayload<ExtArgs>[]
      timeReports: Prisma.$TimeReportPayload<ExtArgs>[]
      assignedTasks: Prisma.$ProjectTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      username: string
      password: string
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectRoles<T extends User$projectRolesArgs<ExtArgs> = {}>(args?: Subset<T, User$projectRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    timeReports<T extends User$timeReportsArgs<ExtArgs> = {}>(args?: Subset<T, User$timeReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedTasks<T extends User$assignedTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.projectRoles
   */
  export type User$projectRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRole
     */
    select?: ProjectRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRole
     */
    omit?: ProjectRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRoleInclude<ExtArgs> | null
    where?: ProjectRoleWhereInput
    orderBy?: ProjectRoleOrderByWithRelationInput | ProjectRoleOrderByWithRelationInput[]
    cursor?: ProjectRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectRoleScalarFieldEnum | ProjectRoleScalarFieldEnum[]
  }

  /**
   * User.timeReports
   */
  export type User$timeReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeReport
     */
    select?: TimeReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeReport
     */
    omit?: TimeReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeReportInclude<ExtArgs> | null
    where?: TimeReportWhereInput
    orderBy?: TimeReportOrderByWithRelationInput | TimeReportOrderByWithRelationInput[]
    cursor?: TimeReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeReportScalarFieldEnum | TimeReportScalarFieldEnum[]
  }

  /**
   * User.assignedTasks
   */
  export type User$assignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTask
     */
    select?: ProjectTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTask
     */
    omit?: ProjectTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTaskInclude<ExtArgs> | null
    where?: ProjectTaskWhereInput
    orderBy?: ProjectTaskOrderByWithRelationInput | ProjectTaskOrderByWithRelationInput[]
    cursor?: ProjectTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectTaskScalarFieldEnum | ProjectTaskScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TimeReport
   */

  export type AggregateTimeReport = {
    _count: TimeReportCountAggregateOutputType | null
    _avg: TimeReportAvgAggregateOutputType | null
    _sum: TimeReportSumAggregateOutputType | null
    _min: TimeReportMinAggregateOutputType | null
    _max: TimeReportMaxAggregateOutputType | null
  }

  export type TimeReportAvgAggregateOutputType = {
    id: number | null
    hoursWorked: number | null
    userId: number | null
    projectId: number | null
  }

  export type TimeReportSumAggregateOutputType = {
    id: number | null
    hoursWorked: number | null
    userId: number | null
    projectId: number | null
  }

  export type TimeReportMinAggregateOutputType = {
    id: number | null
    date: Date | null
    hoursWorked: number | null
    part: string | null
    description: string | null
    notes: string | null
    userId: number | null
    projectId: number | null
    createdAt: Date | null
  }

  export type TimeReportMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    hoursWorked: number | null
    part: string | null
    description: string | null
    notes: string | null
    userId: number | null
    projectId: number | null
    createdAt: Date | null
  }

  export type TimeReportCountAggregateOutputType = {
    id: number
    date: number
    hoursWorked: number
    part: number
    description: number
    notes: number
    userId: number
    projectId: number
    createdAt: number
    _all: number
  }


  export type TimeReportAvgAggregateInputType = {
    id?: true
    hoursWorked?: true
    userId?: true
    projectId?: true
  }

  export type TimeReportSumAggregateInputType = {
    id?: true
    hoursWorked?: true
    userId?: true
    projectId?: true
  }

  export type TimeReportMinAggregateInputType = {
    id?: true
    date?: true
    hoursWorked?: true
    part?: true
    description?: true
    notes?: true
    userId?: true
    projectId?: true
    createdAt?: true
  }

  export type TimeReportMaxAggregateInputType = {
    id?: true
    date?: true
    hoursWorked?: true
    part?: true
    description?: true
    notes?: true
    userId?: true
    projectId?: true
    createdAt?: true
  }

  export type TimeReportCountAggregateInputType = {
    id?: true
    date?: true
    hoursWorked?: true
    part?: true
    description?: true
    notes?: true
    userId?: true
    projectId?: true
    createdAt?: true
    _all?: true
  }

  export type TimeReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeReport to aggregate.
     */
    where?: TimeReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeReports to fetch.
     */
    orderBy?: TimeReportOrderByWithRelationInput | TimeReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeReports
    **/
    _count?: true | TimeReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimeReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimeReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeReportMaxAggregateInputType
  }

  export type GetTimeReportAggregateType<T extends TimeReportAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeReport[P]>
      : GetScalarType<T[P], AggregateTimeReport[P]>
  }




  export type TimeReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeReportWhereInput
    orderBy?: TimeReportOrderByWithAggregationInput | TimeReportOrderByWithAggregationInput[]
    by: TimeReportScalarFieldEnum[] | TimeReportScalarFieldEnum
    having?: TimeReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeReportCountAggregateInputType | true
    _avg?: TimeReportAvgAggregateInputType
    _sum?: TimeReportSumAggregateInputType
    _min?: TimeReportMinAggregateInputType
    _max?: TimeReportMaxAggregateInputType
  }

  export type TimeReportGroupByOutputType = {
    id: number
    date: Date
    hoursWorked: number
    part: string | null
    description: string | null
    notes: string | null
    userId: number
    projectId: number
    createdAt: Date
    _count: TimeReportCountAggregateOutputType | null
    _avg: TimeReportAvgAggregateOutputType | null
    _sum: TimeReportSumAggregateOutputType | null
    _min: TimeReportMinAggregateOutputType | null
    _max: TimeReportMaxAggregateOutputType | null
  }

  type GetTimeReportGroupByPayload<T extends TimeReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeReportGroupByOutputType[P]>
            : GetScalarType<T[P], TimeReportGroupByOutputType[P]>
        }
      >
    >


  export type TimeReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    hoursWorked?: boolean
    part?: boolean
    description?: boolean
    notes?: boolean
    userId?: boolean
    projectId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeReport"]>

  export type TimeReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    hoursWorked?: boolean
    part?: boolean
    description?: boolean
    notes?: boolean
    userId?: boolean
    projectId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeReport"]>

  export type TimeReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    hoursWorked?: boolean
    part?: boolean
    description?: boolean
    notes?: boolean
    userId?: boolean
    projectId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeReport"]>

  export type TimeReportSelectScalar = {
    id?: boolean
    date?: boolean
    hoursWorked?: boolean
    part?: boolean
    description?: boolean
    notes?: boolean
    userId?: boolean
    projectId?: boolean
    createdAt?: boolean
  }

  export type TimeReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "hoursWorked" | "part" | "description" | "notes" | "userId" | "projectId" | "createdAt", ExtArgs["result"]["timeReport"]>
  export type TimeReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type TimeReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type TimeReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $TimeReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimeReport"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      hoursWorked: number
      part: string | null
      description: string | null
      notes: string | null
      userId: number
      projectId: number
      createdAt: Date
    }, ExtArgs["result"]["timeReport"]>
    composites: {}
  }

  type TimeReportGetPayload<S extends boolean | null | undefined | TimeReportDefaultArgs> = $Result.GetResult<Prisma.$TimeReportPayload, S>

  type TimeReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimeReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimeReportCountAggregateInputType | true
    }

  export interface TimeReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeReport'], meta: { name: 'TimeReport' } }
    /**
     * Find zero or one TimeReport that matches the filter.
     * @param {TimeReportFindUniqueArgs} args - Arguments to find a TimeReport
     * @example
     * // Get one TimeReport
     * const timeReport = await prisma.timeReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimeReportFindUniqueArgs>(args: SelectSubset<T, TimeReportFindUniqueArgs<ExtArgs>>): Prisma__TimeReportClient<$Result.GetResult<Prisma.$TimeReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TimeReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimeReportFindUniqueOrThrowArgs} args - Arguments to find a TimeReport
     * @example
     * // Get one TimeReport
     * const timeReport = await prisma.timeReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimeReportFindUniqueOrThrowArgs>(args: SelectSubset<T, TimeReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimeReportClient<$Result.GetResult<Prisma.$TimeReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeReportFindFirstArgs} args - Arguments to find a TimeReport
     * @example
     * // Get one TimeReport
     * const timeReport = await prisma.timeReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimeReportFindFirstArgs>(args?: SelectSubset<T, TimeReportFindFirstArgs<ExtArgs>>): Prisma__TimeReportClient<$Result.GetResult<Prisma.$TimeReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeReportFindFirstOrThrowArgs} args - Arguments to find a TimeReport
     * @example
     * // Get one TimeReport
     * const timeReport = await prisma.timeReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimeReportFindFirstOrThrowArgs>(args?: SelectSubset<T, TimeReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimeReportClient<$Result.GetResult<Prisma.$TimeReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TimeReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeReports
     * const timeReports = await prisma.timeReport.findMany()
     * 
     * // Get first 10 TimeReports
     * const timeReports = await prisma.timeReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeReportWithIdOnly = await prisma.timeReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimeReportFindManyArgs>(args?: SelectSubset<T, TimeReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TimeReport.
     * @param {TimeReportCreateArgs} args - Arguments to create a TimeReport.
     * @example
     * // Create one TimeReport
     * const TimeReport = await prisma.timeReport.create({
     *   data: {
     *     // ... data to create a TimeReport
     *   }
     * })
     * 
     */
    create<T extends TimeReportCreateArgs>(args: SelectSubset<T, TimeReportCreateArgs<ExtArgs>>): Prisma__TimeReportClient<$Result.GetResult<Prisma.$TimeReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TimeReports.
     * @param {TimeReportCreateManyArgs} args - Arguments to create many TimeReports.
     * @example
     * // Create many TimeReports
     * const timeReport = await prisma.timeReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimeReportCreateManyArgs>(args?: SelectSubset<T, TimeReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimeReports and returns the data saved in the database.
     * @param {TimeReportCreateManyAndReturnArgs} args - Arguments to create many TimeReports.
     * @example
     * // Create many TimeReports
     * const timeReport = await prisma.timeReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimeReports and only return the `id`
     * const timeReportWithIdOnly = await prisma.timeReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimeReportCreateManyAndReturnArgs>(args?: SelectSubset<T, TimeReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TimeReport.
     * @param {TimeReportDeleteArgs} args - Arguments to delete one TimeReport.
     * @example
     * // Delete one TimeReport
     * const TimeReport = await prisma.timeReport.delete({
     *   where: {
     *     // ... filter to delete one TimeReport
     *   }
     * })
     * 
     */
    delete<T extends TimeReportDeleteArgs>(args: SelectSubset<T, TimeReportDeleteArgs<ExtArgs>>): Prisma__TimeReportClient<$Result.GetResult<Prisma.$TimeReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TimeReport.
     * @param {TimeReportUpdateArgs} args - Arguments to update one TimeReport.
     * @example
     * // Update one TimeReport
     * const timeReport = await prisma.timeReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimeReportUpdateArgs>(args: SelectSubset<T, TimeReportUpdateArgs<ExtArgs>>): Prisma__TimeReportClient<$Result.GetResult<Prisma.$TimeReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TimeReports.
     * @param {TimeReportDeleteManyArgs} args - Arguments to filter TimeReports to delete.
     * @example
     * // Delete a few TimeReports
     * const { count } = await prisma.timeReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimeReportDeleteManyArgs>(args?: SelectSubset<T, TimeReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeReports
     * const timeReport = await prisma.timeReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimeReportUpdateManyArgs>(args: SelectSubset<T, TimeReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeReports and returns the data updated in the database.
     * @param {TimeReportUpdateManyAndReturnArgs} args - Arguments to update many TimeReports.
     * @example
     * // Update many TimeReports
     * const timeReport = await prisma.timeReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TimeReports and only return the `id`
     * const timeReportWithIdOnly = await prisma.timeReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TimeReportUpdateManyAndReturnArgs>(args: SelectSubset<T, TimeReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TimeReport.
     * @param {TimeReportUpsertArgs} args - Arguments to update or create a TimeReport.
     * @example
     * // Update or create a TimeReport
     * const timeReport = await prisma.timeReport.upsert({
     *   create: {
     *     // ... data to create a TimeReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeReport we want to update
     *   }
     * })
     */
    upsert<T extends TimeReportUpsertArgs>(args: SelectSubset<T, TimeReportUpsertArgs<ExtArgs>>): Prisma__TimeReportClient<$Result.GetResult<Prisma.$TimeReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TimeReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeReportCountArgs} args - Arguments to filter TimeReports to count.
     * @example
     * // Count the number of TimeReports
     * const count = await prisma.timeReport.count({
     *   where: {
     *     // ... the filter for the TimeReports we want to count
     *   }
     * })
    **/
    count<T extends TimeReportCountArgs>(
      args?: Subset<T, TimeReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimeReportAggregateArgs>(args: Subset<T, TimeReportAggregateArgs>): Prisma.PrismaPromise<GetTimeReportAggregateType<T>>

    /**
     * Group by TimeReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeReportGroupByArgs} args - Group by arguments.
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
      T extends TimeReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeReportGroupByArgs['orderBy'] }
        : { orderBy?: TimeReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimeReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimeReport model
   */
  readonly fields: TimeReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TimeReport model
   */
  interface TimeReportFieldRefs {
    readonly id: FieldRef<"TimeReport", 'Int'>
    readonly date: FieldRef<"TimeReport", 'DateTime'>
    readonly hoursWorked: FieldRef<"TimeReport", 'Float'>
    readonly part: FieldRef<"TimeReport", 'String'>
    readonly description: FieldRef<"TimeReport", 'String'>
    readonly notes: FieldRef<"TimeReport", 'String'>
    readonly userId: FieldRef<"TimeReport", 'Int'>
    readonly projectId: FieldRef<"TimeReport", 'Int'>
    readonly createdAt: FieldRef<"TimeReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TimeReport findUnique
   */
  export type TimeReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeReport
     */
    select?: TimeReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeReport
     */
    omit?: TimeReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeReportInclude<ExtArgs> | null
    /**
     * Filter, which TimeReport to fetch.
     */
    where: TimeReportWhereUniqueInput
  }

  /**
   * TimeReport findUniqueOrThrow
   */
  export type TimeReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeReport
     */
    select?: TimeReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeReport
     */
    omit?: TimeReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeReportInclude<ExtArgs> | null
    /**
     * Filter, which TimeReport to fetch.
     */
    where: TimeReportWhereUniqueInput
  }

  /**
   * TimeReport findFirst
   */
  export type TimeReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeReport
     */
    select?: TimeReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeReport
     */
    omit?: TimeReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeReportInclude<ExtArgs> | null
    /**
     * Filter, which TimeReport to fetch.
     */
    where?: TimeReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeReports to fetch.
     */
    orderBy?: TimeReportOrderByWithRelationInput | TimeReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeReports.
     */
    cursor?: TimeReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeReports.
     */
    distinct?: TimeReportScalarFieldEnum | TimeReportScalarFieldEnum[]
  }

  /**
   * TimeReport findFirstOrThrow
   */
  export type TimeReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeReport
     */
    select?: TimeReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeReport
     */
    omit?: TimeReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeReportInclude<ExtArgs> | null
    /**
     * Filter, which TimeReport to fetch.
     */
    where?: TimeReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeReports to fetch.
     */
    orderBy?: TimeReportOrderByWithRelationInput | TimeReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeReports.
     */
    cursor?: TimeReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeReports.
     */
    distinct?: TimeReportScalarFieldEnum | TimeReportScalarFieldEnum[]
  }

  /**
   * TimeReport findMany
   */
  export type TimeReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeReport
     */
    select?: TimeReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeReport
     */
    omit?: TimeReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeReportInclude<ExtArgs> | null
    /**
     * Filter, which TimeReports to fetch.
     */
    where?: TimeReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeReports to fetch.
     */
    orderBy?: TimeReportOrderByWithRelationInput | TimeReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeReports.
     */
    cursor?: TimeReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeReports.
     */
    skip?: number
    distinct?: TimeReportScalarFieldEnum | TimeReportScalarFieldEnum[]
  }

  /**
   * TimeReport create
   */
  export type TimeReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeReport
     */
    select?: TimeReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeReport
     */
    omit?: TimeReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeReportInclude<ExtArgs> | null
    /**
     * The data needed to create a TimeReport.
     */
    data: XOR<TimeReportCreateInput, TimeReportUncheckedCreateInput>
  }

  /**
   * TimeReport createMany
   */
  export type TimeReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeReports.
     */
    data: TimeReportCreateManyInput | TimeReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeReport createManyAndReturn
   */
  export type TimeReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeReport
     */
    select?: TimeReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeReport
     */
    omit?: TimeReportOmit<ExtArgs> | null
    /**
     * The data used to create many TimeReports.
     */
    data: TimeReportCreateManyInput | TimeReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeReport update
   */
  export type TimeReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeReport
     */
    select?: TimeReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeReport
     */
    omit?: TimeReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeReportInclude<ExtArgs> | null
    /**
     * The data needed to update a TimeReport.
     */
    data: XOR<TimeReportUpdateInput, TimeReportUncheckedUpdateInput>
    /**
     * Choose, which TimeReport to update.
     */
    where: TimeReportWhereUniqueInput
  }

  /**
   * TimeReport updateMany
   */
  export type TimeReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeReports.
     */
    data: XOR<TimeReportUpdateManyMutationInput, TimeReportUncheckedUpdateManyInput>
    /**
     * Filter which TimeReports to update
     */
    where?: TimeReportWhereInput
    /**
     * Limit how many TimeReports to update.
     */
    limit?: number
  }

  /**
   * TimeReport updateManyAndReturn
   */
  export type TimeReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeReport
     */
    select?: TimeReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeReport
     */
    omit?: TimeReportOmit<ExtArgs> | null
    /**
     * The data used to update TimeReports.
     */
    data: XOR<TimeReportUpdateManyMutationInput, TimeReportUncheckedUpdateManyInput>
    /**
     * Filter which TimeReports to update
     */
    where?: TimeReportWhereInput
    /**
     * Limit how many TimeReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeReport upsert
   */
  export type TimeReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeReport
     */
    select?: TimeReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeReport
     */
    omit?: TimeReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeReportInclude<ExtArgs> | null
    /**
     * The filter to search for the TimeReport to update in case it exists.
     */
    where: TimeReportWhereUniqueInput
    /**
     * In case the TimeReport found by the `where` argument doesn't exist, create a new TimeReport with this data.
     */
    create: XOR<TimeReportCreateInput, TimeReportUncheckedCreateInput>
    /**
     * In case the TimeReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeReportUpdateInput, TimeReportUncheckedUpdateInput>
  }

  /**
   * TimeReport delete
   */
  export type TimeReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeReport
     */
    select?: TimeReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeReport
     */
    omit?: TimeReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeReportInclude<ExtArgs> | null
    /**
     * Filter which TimeReport to delete.
     */
    where: TimeReportWhereUniqueInput
  }

  /**
   * TimeReport deleteMany
   */
  export type TimeReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeReports to delete
     */
    where?: TimeReportWhereInput
    /**
     * Limit how many TimeReports to delete.
     */
    limit?: number
  }

  /**
   * TimeReport without action
   */
  export type TimeReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeReport
     */
    select?: TimeReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeReport
     */
    omit?: TimeReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeReportInclude<ExtArgs> | null
  }


  /**
   * Model ProjectTask
   */

  export type AggregateProjectTask = {
    _count: ProjectTaskCountAggregateOutputType | null
    _avg: ProjectTaskAvgAggregateOutputType | null
    _sum: ProjectTaskSumAggregateOutputType | null
    _min: ProjectTaskMinAggregateOutputType | null
    _max: ProjectTaskMaxAggregateOutputType | null
  }

  export type ProjectTaskAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    assignedToId: number | null
  }

  export type ProjectTaskSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    assignedToId: number | null
  }

  export type ProjectTaskMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    status: $Enums.TaskStatus | null
    isCompleted: boolean | null
    dueDate: Date | null
    projectId: number | null
    assignedToId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectTaskMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    status: $Enums.TaskStatus | null
    isCompleted: boolean | null
    dueDate: Date | null
    projectId: number | null
    assignedToId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectTaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    isCompleted: number
    dueDate: number
    projectId: number
    assignedToId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectTaskAvgAggregateInputType = {
    id?: true
    projectId?: true
    assignedToId?: true
  }

  export type ProjectTaskSumAggregateInputType = {
    id?: true
    projectId?: true
    assignedToId?: true
  }

  export type ProjectTaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    isCompleted?: true
    dueDate?: true
    projectId?: true
    assignedToId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectTaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    isCompleted?: true
    dueDate?: true
    projectId?: true
    assignedToId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectTaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    isCompleted?: true
    dueDate?: true
    projectId?: true
    assignedToId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTask to aggregate.
     */
    where?: ProjectTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTasks to fetch.
     */
    orderBy?: ProjectTaskOrderByWithRelationInput | ProjectTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectTasks
    **/
    _count?: true | ProjectTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectTaskMaxAggregateInputType
  }

  export type GetProjectTaskAggregateType<T extends ProjectTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectTask[P]>
      : GetScalarType<T[P], AggregateProjectTask[P]>
  }




  export type ProjectTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTaskWhereInput
    orderBy?: ProjectTaskOrderByWithAggregationInput | ProjectTaskOrderByWithAggregationInput[]
    by: ProjectTaskScalarFieldEnum[] | ProjectTaskScalarFieldEnum
    having?: ProjectTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectTaskCountAggregateInputType | true
    _avg?: ProjectTaskAvgAggregateInputType
    _sum?: ProjectTaskSumAggregateInputType
    _min?: ProjectTaskMinAggregateInputType
    _max?: ProjectTaskMaxAggregateInputType
  }

  export type ProjectTaskGroupByOutputType = {
    id: number
    title: string
    description: string | null
    status: $Enums.TaskStatus
    isCompleted: boolean
    dueDate: Date | null
    projectId: number
    assignedToId: number | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectTaskCountAggregateOutputType | null
    _avg: ProjectTaskAvgAggregateOutputType | null
    _sum: ProjectTaskSumAggregateOutputType | null
    _min: ProjectTaskMinAggregateOutputType | null
    _max: ProjectTaskMaxAggregateOutputType | null
  }

  type GetProjectTaskGroupByPayload<T extends ProjectTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectTaskGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectTaskGroupByOutputType[P]>
        }
      >
    >


  export type ProjectTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    isCompleted?: boolean
    dueDate?: boolean
    projectId?: boolean
    assignedToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignedTo?: boolean | ProjectTask$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["projectTask"]>

  export type ProjectTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    isCompleted?: boolean
    dueDate?: boolean
    projectId?: boolean
    assignedToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignedTo?: boolean | ProjectTask$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["projectTask"]>

  export type ProjectTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    isCompleted?: boolean
    dueDate?: boolean
    projectId?: boolean
    assignedToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignedTo?: boolean | ProjectTask$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["projectTask"]>

  export type ProjectTaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    isCompleted?: boolean
    dueDate?: boolean
    projectId?: boolean
    assignedToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "isCompleted" | "dueDate" | "projectId" | "assignedToId" | "createdAt" | "updatedAt", ExtArgs["result"]["projectTask"]>
  export type ProjectTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignedTo?: boolean | ProjectTask$assignedToArgs<ExtArgs>
  }
  export type ProjectTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignedTo?: boolean | ProjectTask$assignedToArgs<ExtArgs>
  }
  export type ProjectTaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignedTo?: boolean | ProjectTask$assignedToArgs<ExtArgs>
  }

  export type $ProjectTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectTask"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      assignedTo: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      status: $Enums.TaskStatus
      isCompleted: boolean
      dueDate: Date | null
      projectId: number
      assignedToId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectTask"]>
    composites: {}
  }

  type ProjectTaskGetPayload<S extends boolean | null | undefined | ProjectTaskDefaultArgs> = $Result.GetResult<Prisma.$ProjectTaskPayload, S>

  type ProjectTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectTaskCountAggregateInputType | true
    }

  export interface ProjectTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectTask'], meta: { name: 'ProjectTask' } }
    /**
     * Find zero or one ProjectTask that matches the filter.
     * @param {ProjectTaskFindUniqueArgs} args - Arguments to find a ProjectTask
     * @example
     * // Get one ProjectTask
     * const projectTask = await prisma.projectTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectTaskFindUniqueArgs>(args: SelectSubset<T, ProjectTaskFindUniqueArgs<ExtArgs>>): Prisma__ProjectTaskClient<$Result.GetResult<Prisma.$ProjectTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectTaskFindUniqueOrThrowArgs} args - Arguments to find a ProjectTask
     * @example
     * // Get one ProjectTask
     * const projectTask = await prisma.projectTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectTaskClient<$Result.GetResult<Prisma.$ProjectTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTaskFindFirstArgs} args - Arguments to find a ProjectTask
     * @example
     * // Get one ProjectTask
     * const projectTask = await prisma.projectTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectTaskFindFirstArgs>(args?: SelectSubset<T, ProjectTaskFindFirstArgs<ExtArgs>>): Prisma__ProjectTaskClient<$Result.GetResult<Prisma.$ProjectTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTaskFindFirstOrThrowArgs} args - Arguments to find a ProjectTask
     * @example
     * // Get one ProjectTask
     * const projectTask = await prisma.projectTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectTaskClient<$Result.GetResult<Prisma.$ProjectTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectTasks
     * const projectTasks = await prisma.projectTask.findMany()
     * 
     * // Get first 10 ProjectTasks
     * const projectTasks = await prisma.projectTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectTaskWithIdOnly = await prisma.projectTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectTaskFindManyArgs>(args?: SelectSubset<T, ProjectTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectTask.
     * @param {ProjectTaskCreateArgs} args - Arguments to create a ProjectTask.
     * @example
     * // Create one ProjectTask
     * const ProjectTask = await prisma.projectTask.create({
     *   data: {
     *     // ... data to create a ProjectTask
     *   }
     * })
     * 
     */
    create<T extends ProjectTaskCreateArgs>(args: SelectSubset<T, ProjectTaskCreateArgs<ExtArgs>>): Prisma__ProjectTaskClient<$Result.GetResult<Prisma.$ProjectTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectTasks.
     * @param {ProjectTaskCreateManyArgs} args - Arguments to create many ProjectTasks.
     * @example
     * // Create many ProjectTasks
     * const projectTask = await prisma.projectTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectTaskCreateManyArgs>(args?: SelectSubset<T, ProjectTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectTasks and returns the data saved in the database.
     * @param {ProjectTaskCreateManyAndReturnArgs} args - Arguments to create many ProjectTasks.
     * @example
     * // Create many ProjectTasks
     * const projectTask = await prisma.projectTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectTasks and only return the `id`
     * const projectTaskWithIdOnly = await prisma.projectTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectTask.
     * @param {ProjectTaskDeleteArgs} args - Arguments to delete one ProjectTask.
     * @example
     * // Delete one ProjectTask
     * const ProjectTask = await prisma.projectTask.delete({
     *   where: {
     *     // ... filter to delete one ProjectTask
     *   }
     * })
     * 
     */
    delete<T extends ProjectTaskDeleteArgs>(args: SelectSubset<T, ProjectTaskDeleteArgs<ExtArgs>>): Prisma__ProjectTaskClient<$Result.GetResult<Prisma.$ProjectTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectTask.
     * @param {ProjectTaskUpdateArgs} args - Arguments to update one ProjectTask.
     * @example
     * // Update one ProjectTask
     * const projectTask = await prisma.projectTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectTaskUpdateArgs>(args: SelectSubset<T, ProjectTaskUpdateArgs<ExtArgs>>): Prisma__ProjectTaskClient<$Result.GetResult<Prisma.$ProjectTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectTasks.
     * @param {ProjectTaskDeleteManyArgs} args - Arguments to filter ProjectTasks to delete.
     * @example
     * // Delete a few ProjectTasks
     * const { count } = await prisma.projectTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectTaskDeleteManyArgs>(args?: SelectSubset<T, ProjectTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectTasks
     * const projectTask = await prisma.projectTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectTaskUpdateManyArgs>(args: SelectSubset<T, ProjectTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTasks and returns the data updated in the database.
     * @param {ProjectTaskUpdateManyAndReturnArgs} args - Arguments to update many ProjectTasks.
     * @example
     * // Update many ProjectTasks
     * const projectTask = await prisma.projectTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectTasks and only return the `id`
     * const projectTaskWithIdOnly = await prisma.projectTask.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectTask.
     * @param {ProjectTaskUpsertArgs} args - Arguments to update or create a ProjectTask.
     * @example
     * // Update or create a ProjectTask
     * const projectTask = await prisma.projectTask.upsert({
     *   create: {
     *     // ... data to create a ProjectTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectTask we want to update
     *   }
     * })
     */
    upsert<T extends ProjectTaskUpsertArgs>(args: SelectSubset<T, ProjectTaskUpsertArgs<ExtArgs>>): Prisma__ProjectTaskClient<$Result.GetResult<Prisma.$ProjectTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTaskCountArgs} args - Arguments to filter ProjectTasks to count.
     * @example
     * // Count the number of ProjectTasks
     * const count = await prisma.projectTask.count({
     *   where: {
     *     // ... the filter for the ProjectTasks we want to count
     *   }
     * })
    **/
    count<T extends ProjectTaskCountArgs>(
      args?: Subset<T, ProjectTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectTaskAggregateArgs>(args: Subset<T, ProjectTaskAggregateArgs>): Prisma.PrismaPromise<GetProjectTaskAggregateType<T>>

    /**
     * Group by ProjectTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTaskGroupByArgs} args - Group by arguments.
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
      T extends ProjectTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectTaskGroupByArgs['orderBy'] }
        : { orderBy?: ProjectTaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectTask model
   */
  readonly fields: ProjectTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends ProjectTask$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, ProjectTask$assignedToArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectTask model
   */
  interface ProjectTaskFieldRefs {
    readonly id: FieldRef<"ProjectTask", 'Int'>
    readonly title: FieldRef<"ProjectTask", 'String'>
    readonly description: FieldRef<"ProjectTask", 'String'>
    readonly status: FieldRef<"ProjectTask", 'TaskStatus'>
    readonly isCompleted: FieldRef<"ProjectTask", 'Boolean'>
    readonly dueDate: FieldRef<"ProjectTask", 'DateTime'>
    readonly projectId: FieldRef<"ProjectTask", 'Int'>
    readonly assignedToId: FieldRef<"ProjectTask", 'Int'>
    readonly createdAt: FieldRef<"ProjectTask", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectTask findUnique
   */
  export type ProjectTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTask
     */
    select?: ProjectTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTask
     */
    omit?: ProjectTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTaskInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTask to fetch.
     */
    where: ProjectTaskWhereUniqueInput
  }

  /**
   * ProjectTask findUniqueOrThrow
   */
  export type ProjectTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTask
     */
    select?: ProjectTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTask
     */
    omit?: ProjectTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTaskInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTask to fetch.
     */
    where: ProjectTaskWhereUniqueInput
  }

  /**
   * ProjectTask findFirst
   */
  export type ProjectTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTask
     */
    select?: ProjectTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTask
     */
    omit?: ProjectTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTaskInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTask to fetch.
     */
    where?: ProjectTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTasks to fetch.
     */
    orderBy?: ProjectTaskOrderByWithRelationInput | ProjectTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTasks.
     */
    cursor?: ProjectTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTasks.
     */
    distinct?: ProjectTaskScalarFieldEnum | ProjectTaskScalarFieldEnum[]
  }

  /**
   * ProjectTask findFirstOrThrow
   */
  export type ProjectTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTask
     */
    select?: ProjectTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTask
     */
    omit?: ProjectTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTaskInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTask to fetch.
     */
    where?: ProjectTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTasks to fetch.
     */
    orderBy?: ProjectTaskOrderByWithRelationInput | ProjectTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTasks.
     */
    cursor?: ProjectTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTasks.
     */
    distinct?: ProjectTaskScalarFieldEnum | ProjectTaskScalarFieldEnum[]
  }

  /**
   * ProjectTask findMany
   */
  export type ProjectTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTask
     */
    select?: ProjectTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTask
     */
    omit?: ProjectTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTaskInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTasks to fetch.
     */
    where?: ProjectTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTasks to fetch.
     */
    orderBy?: ProjectTaskOrderByWithRelationInput | ProjectTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectTasks.
     */
    cursor?: ProjectTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTasks.
     */
    skip?: number
    distinct?: ProjectTaskScalarFieldEnum | ProjectTaskScalarFieldEnum[]
  }

  /**
   * ProjectTask create
   */
  export type ProjectTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTask
     */
    select?: ProjectTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTask
     */
    omit?: ProjectTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectTask.
     */
    data: XOR<ProjectTaskCreateInput, ProjectTaskUncheckedCreateInput>
  }

  /**
   * ProjectTask createMany
   */
  export type ProjectTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectTasks.
     */
    data: ProjectTaskCreateManyInput | ProjectTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectTask createManyAndReturn
   */
  export type ProjectTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTask
     */
    select?: ProjectTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTask
     */
    omit?: ProjectTaskOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectTasks.
     */
    data: ProjectTaskCreateManyInput | ProjectTaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectTask update
   */
  export type ProjectTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTask
     */
    select?: ProjectTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTask
     */
    omit?: ProjectTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectTask.
     */
    data: XOR<ProjectTaskUpdateInput, ProjectTaskUncheckedUpdateInput>
    /**
     * Choose, which ProjectTask to update.
     */
    where: ProjectTaskWhereUniqueInput
  }

  /**
   * ProjectTask updateMany
   */
  export type ProjectTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectTasks.
     */
    data: XOR<ProjectTaskUpdateManyMutationInput, ProjectTaskUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTasks to update
     */
    where?: ProjectTaskWhereInput
    /**
     * Limit how many ProjectTasks to update.
     */
    limit?: number
  }

  /**
   * ProjectTask updateManyAndReturn
   */
  export type ProjectTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTask
     */
    select?: ProjectTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTask
     */
    omit?: ProjectTaskOmit<ExtArgs> | null
    /**
     * The data used to update ProjectTasks.
     */
    data: XOR<ProjectTaskUpdateManyMutationInput, ProjectTaskUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTasks to update
     */
    where?: ProjectTaskWhereInput
    /**
     * Limit how many ProjectTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectTask upsert
   */
  export type ProjectTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTask
     */
    select?: ProjectTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTask
     */
    omit?: ProjectTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectTask to update in case it exists.
     */
    where: ProjectTaskWhereUniqueInput
    /**
     * In case the ProjectTask found by the `where` argument doesn't exist, create a new ProjectTask with this data.
     */
    create: XOR<ProjectTaskCreateInput, ProjectTaskUncheckedCreateInput>
    /**
     * In case the ProjectTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectTaskUpdateInput, ProjectTaskUncheckedUpdateInput>
  }

  /**
   * ProjectTask delete
   */
  export type ProjectTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTask
     */
    select?: ProjectTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTask
     */
    omit?: ProjectTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTaskInclude<ExtArgs> | null
    /**
     * Filter which ProjectTask to delete.
     */
    where: ProjectTaskWhereUniqueInput
  }

  /**
   * ProjectTask deleteMany
   */
  export type ProjectTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTasks to delete
     */
    where?: ProjectTaskWhereInput
    /**
     * Limit how many ProjectTasks to delete.
     */
    limit?: number
  }

  /**
   * ProjectTask.assignedTo
   */
  export type ProjectTask$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ProjectTask without action
   */
  export type ProjectTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTask
     */
    select?: ProjectTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTask
     */
    omit?: ProjectTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTaskInclude<ExtArgs> | null
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


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    startDate: 'startDate',
    deadline: 'deadline',
    hourLeft: 'hourLeft',
    projectType: 'projectType',
    totalCost: 'totalCost',
    salesValue: 'salesValue',
    statusId: 'statusId',
    customerId: 'customerId',
    contactPersonId: 'contactPersonId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    orderer: 'orderer',
    poNumber: 'poNumber',
    hourlyRate: 'hourlyRate',
    partialInvoice: 'partialInvoice'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ContactPersonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    customerId: 'customerId'
  };

  export type ContactPersonScalarFieldEnum = (typeof ContactPersonScalarFieldEnum)[keyof typeof ContactPersonScalarFieldEnum]


  export const StatusScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type StatusScalarFieldEnum = (typeof StatusScalarFieldEnum)[keyof typeof StatusScalarFieldEnum]


  export const ProjectRoleTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ProjectRoleTypeScalarFieldEnum = (typeof ProjectRoleTypeScalarFieldEnum)[keyof typeof ProjectRoleTypeScalarFieldEnum]


  export const ProjectRoleScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    userId: 'userId',
    roleId: 'roleId',
    hoursQuoted: 'hoursQuoted'
  };

  export type ProjectRoleScalarFieldEnum = (typeof ProjectRoleScalarFieldEnum)[keyof typeof ProjectRoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    username: 'username',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TimeReportScalarFieldEnum: {
    id: 'id',
    date: 'date',
    hoursWorked: 'hoursWorked',
    part: 'part',
    description: 'description',
    notes: 'notes',
    userId: 'userId',
    projectId: 'projectId',
    createdAt: 'createdAt'
  };

  export type TimeReportScalarFieldEnum = (typeof TimeReportScalarFieldEnum)[keyof typeof TimeReportScalarFieldEnum]


  export const ProjectTaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    isCompleted: 'isCompleted',
    dueDate: 'dueDate',
    projectId: 'projectId',
    assignedToId: 'assignedToId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectTaskScalarFieldEnum = (typeof ProjectTaskScalarFieldEnum)[keyof typeof ProjectTaskScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    startDate?: DateTimeFilter<"Project"> | Date | string
    deadline?: DateTimeFilter<"Project"> | Date | string
    hourLeft?: FloatFilter<"Project"> | number
    projectType?: StringFilter<"Project"> | string
    totalCost?: FloatFilter<"Project"> | number
    salesValue?: FloatFilter<"Project"> | number
    statusId?: IntNullableFilter<"Project"> | number | null
    customerId?: IntNullableFilter<"Project"> | number | null
    contactPersonId?: IntNullableFilter<"Project"> | number | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    status?: XOR<StatusNullableScalarRelationFilter, StatusWhereInput> | null
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    contactPerson?: XOR<ContactPersonNullableScalarRelationFilter, ContactPersonWhereInput> | null
    timeReports?: TimeReportListRelationFilter
    tasks?: ProjectTaskListRelationFilter
    projectRoles?: ProjectRoleListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    deadline?: SortOrder
    hourLeft?: SortOrder
    projectType?: SortOrder
    totalCost?: SortOrder
    salesValue?: SortOrder
    statusId?: SortOrderInput | SortOrder
    customerId?: SortOrderInput | SortOrder
    contactPersonId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: StatusOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    contactPerson?: ContactPersonOrderByWithRelationInput
    timeReports?: TimeReportOrderByRelationAggregateInput
    tasks?: ProjectTaskOrderByRelationAggregateInput
    projectRoles?: ProjectRoleOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    startDate?: DateTimeFilter<"Project"> | Date | string
    deadline?: DateTimeFilter<"Project"> | Date | string
    hourLeft?: FloatFilter<"Project"> | number
    projectType?: StringFilter<"Project"> | string
    totalCost?: FloatFilter<"Project"> | number
    salesValue?: FloatFilter<"Project"> | number
    statusId?: IntNullableFilter<"Project"> | number | null
    customerId?: IntNullableFilter<"Project"> | number | null
    contactPersonId?: IntNullableFilter<"Project"> | number | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    status?: XOR<StatusNullableScalarRelationFilter, StatusWhereInput> | null
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    contactPerson?: XOR<ContactPersonNullableScalarRelationFilter, ContactPersonWhereInput> | null
    timeReports?: TimeReportListRelationFilter
    tasks?: ProjectTaskListRelationFilter
    projectRoles?: ProjectRoleListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    deadline?: SortOrder
    hourLeft?: SortOrder
    projectType?: SortOrder
    totalCost?: SortOrder
    salesValue?: SortOrder
    statusId?: SortOrderInput | SortOrder
    customerId?: SortOrderInput | SortOrder
    contactPersonId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    startDate?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    deadline?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    hourLeft?: FloatWithAggregatesFilter<"Project"> | number
    projectType?: StringWithAggregatesFilter<"Project"> | string
    totalCost?: FloatWithAggregatesFilter<"Project"> | number
    salesValue?: FloatWithAggregatesFilter<"Project"> | number
    statusId?: IntNullableWithAggregatesFilter<"Project"> | number | null
    customerId?: IntNullableWithAggregatesFilter<"Project"> | number | null
    contactPersonId?: IntNullableWithAggregatesFilter<"Project"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    orderer?: StringFilter<"Customer"> | string
    poNumber?: StringFilter<"Customer"> | string
    hourlyRate?: FloatFilter<"Customer"> | number
    partialInvoice?: BoolFilter<"Customer"> | boolean
    contactPersons?: ContactPersonListRelationFilter
    projects?: ProjectListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    orderer?: SortOrder
    poNumber?: SortOrder
    hourlyRate?: SortOrder
    partialInvoice?: SortOrder
    contactPersons?: ContactPersonOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    orderer?: StringFilter<"Customer"> | string
    poNumber?: StringFilter<"Customer"> | string
    hourlyRate?: FloatFilter<"Customer"> | number
    partialInvoice?: BoolFilter<"Customer"> | boolean
    contactPersons?: ContactPersonListRelationFilter
    projects?: ProjectListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    orderer?: SortOrder
    poNumber?: SortOrder
    hourlyRate?: SortOrder
    partialInvoice?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    name?: StringWithAggregatesFilter<"Customer"> | string
    orderer?: StringWithAggregatesFilter<"Customer"> | string
    poNumber?: StringWithAggregatesFilter<"Customer"> | string
    hourlyRate?: FloatWithAggregatesFilter<"Customer"> | number
    partialInvoice?: BoolWithAggregatesFilter<"Customer"> | boolean
  }

  export type ContactPersonWhereInput = {
    AND?: ContactPersonWhereInput | ContactPersonWhereInput[]
    OR?: ContactPersonWhereInput[]
    NOT?: ContactPersonWhereInput | ContactPersonWhereInput[]
    id?: IntFilter<"ContactPerson"> | number
    name?: StringFilter<"ContactPerson"> | string
    email?: StringFilter<"ContactPerson"> | string
    phone?: StringFilter<"ContactPerson"> | string
    customerId?: IntFilter<"ContactPerson"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    projects?: ProjectListRelationFilter
  }

  export type ContactPersonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    customerId?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type ContactPersonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactPersonWhereInput | ContactPersonWhereInput[]
    OR?: ContactPersonWhereInput[]
    NOT?: ContactPersonWhereInput | ContactPersonWhereInput[]
    name?: StringFilter<"ContactPerson"> | string
    email?: StringFilter<"ContactPerson"> | string
    phone?: StringFilter<"ContactPerson"> | string
    customerId?: IntFilter<"ContactPerson"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    projects?: ProjectListRelationFilter
  }, "id">

  export type ContactPersonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    customerId?: SortOrder
    _count?: ContactPersonCountOrderByAggregateInput
    _avg?: ContactPersonAvgOrderByAggregateInput
    _max?: ContactPersonMaxOrderByAggregateInput
    _min?: ContactPersonMinOrderByAggregateInput
    _sum?: ContactPersonSumOrderByAggregateInput
  }

  export type ContactPersonScalarWhereWithAggregatesInput = {
    AND?: ContactPersonScalarWhereWithAggregatesInput | ContactPersonScalarWhereWithAggregatesInput[]
    OR?: ContactPersonScalarWhereWithAggregatesInput[]
    NOT?: ContactPersonScalarWhereWithAggregatesInput | ContactPersonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContactPerson"> | number
    name?: StringWithAggregatesFilter<"ContactPerson"> | string
    email?: StringWithAggregatesFilter<"ContactPerson"> | string
    phone?: StringWithAggregatesFilter<"ContactPerson"> | string
    customerId?: IntWithAggregatesFilter<"ContactPerson"> | number
  }

  export type StatusWhereInput = {
    AND?: StatusWhereInput | StatusWhereInput[]
    OR?: StatusWhereInput[]
    NOT?: StatusWhereInput | StatusWhereInput[]
    id?: IntFilter<"Status"> | number
    name?: StringFilter<"Status"> | string
    projects?: ProjectListRelationFilter
  }

  export type StatusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type StatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StatusWhereInput | StatusWhereInput[]
    OR?: StatusWhereInput[]
    NOT?: StatusWhereInput | StatusWhereInput[]
    name?: StringFilter<"Status"> | string
    projects?: ProjectListRelationFilter
  }, "id">

  export type StatusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: StatusCountOrderByAggregateInput
    _avg?: StatusAvgOrderByAggregateInput
    _max?: StatusMaxOrderByAggregateInput
    _min?: StatusMinOrderByAggregateInput
    _sum?: StatusSumOrderByAggregateInput
  }

  export type StatusScalarWhereWithAggregatesInput = {
    AND?: StatusScalarWhereWithAggregatesInput | StatusScalarWhereWithAggregatesInput[]
    OR?: StatusScalarWhereWithAggregatesInput[]
    NOT?: StatusScalarWhereWithAggregatesInput | StatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Status"> | number
    name?: StringWithAggregatesFilter<"Status"> | string
  }

  export type ProjectRoleTypeWhereInput = {
    AND?: ProjectRoleTypeWhereInput | ProjectRoleTypeWhereInput[]
    OR?: ProjectRoleTypeWhereInput[]
    NOT?: ProjectRoleTypeWhereInput | ProjectRoleTypeWhereInput[]
    id?: IntFilter<"ProjectRoleType"> | number
    name?: StringFilter<"ProjectRoleType"> | string
    projectRoles?: ProjectRoleListRelationFilter
  }

  export type ProjectRoleTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    projectRoles?: ProjectRoleOrderByRelationAggregateInput
  }

  export type ProjectRoleTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectRoleTypeWhereInput | ProjectRoleTypeWhereInput[]
    OR?: ProjectRoleTypeWhereInput[]
    NOT?: ProjectRoleTypeWhereInput | ProjectRoleTypeWhereInput[]
    name?: StringFilter<"ProjectRoleType"> | string
    projectRoles?: ProjectRoleListRelationFilter
  }, "id">

  export type ProjectRoleTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ProjectRoleTypeCountOrderByAggregateInput
    _avg?: ProjectRoleTypeAvgOrderByAggregateInput
    _max?: ProjectRoleTypeMaxOrderByAggregateInput
    _min?: ProjectRoleTypeMinOrderByAggregateInput
    _sum?: ProjectRoleTypeSumOrderByAggregateInput
  }

  export type ProjectRoleTypeScalarWhereWithAggregatesInput = {
    AND?: ProjectRoleTypeScalarWhereWithAggregatesInput | ProjectRoleTypeScalarWhereWithAggregatesInput[]
    OR?: ProjectRoleTypeScalarWhereWithAggregatesInput[]
    NOT?: ProjectRoleTypeScalarWhereWithAggregatesInput | ProjectRoleTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectRoleType"> | number
    name?: StringWithAggregatesFilter<"ProjectRoleType"> | string
  }

  export type ProjectRoleWhereInput = {
    AND?: ProjectRoleWhereInput | ProjectRoleWhereInput[]
    OR?: ProjectRoleWhereInput[]
    NOT?: ProjectRoleWhereInput | ProjectRoleWhereInput[]
    id?: IntFilter<"ProjectRole"> | number
    projectId?: IntFilter<"ProjectRole"> | number
    userId?: IntFilter<"ProjectRole"> | number
    roleId?: IntFilter<"ProjectRole"> | number
    hoursQuoted?: FloatFilter<"ProjectRole"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<ProjectRoleTypeScalarRelationFilter, ProjectRoleTypeWhereInput>
  }

  export type ProjectRoleOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    hoursQuoted?: SortOrder
    project?: ProjectOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    role?: ProjectRoleTypeOrderByWithRelationInput
  }

  export type ProjectRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectRoleWhereInput | ProjectRoleWhereInput[]
    OR?: ProjectRoleWhereInput[]
    NOT?: ProjectRoleWhereInput | ProjectRoleWhereInput[]
    projectId?: IntFilter<"ProjectRole"> | number
    userId?: IntFilter<"ProjectRole"> | number
    roleId?: IntFilter<"ProjectRole"> | number
    hoursQuoted?: FloatFilter<"ProjectRole"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<ProjectRoleTypeScalarRelationFilter, ProjectRoleTypeWhereInput>
  }, "id">

  export type ProjectRoleOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    hoursQuoted?: SortOrder
    _count?: ProjectRoleCountOrderByAggregateInput
    _avg?: ProjectRoleAvgOrderByAggregateInput
    _max?: ProjectRoleMaxOrderByAggregateInput
    _min?: ProjectRoleMinOrderByAggregateInput
    _sum?: ProjectRoleSumOrderByAggregateInput
  }

  export type ProjectRoleScalarWhereWithAggregatesInput = {
    AND?: ProjectRoleScalarWhereWithAggregatesInput | ProjectRoleScalarWhereWithAggregatesInput[]
    OR?: ProjectRoleScalarWhereWithAggregatesInput[]
    NOT?: ProjectRoleScalarWhereWithAggregatesInput | ProjectRoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectRole"> | number
    projectId?: IntWithAggregatesFilter<"ProjectRole"> | number
    userId?: IntWithAggregatesFilter<"ProjectRole"> | number
    roleId?: IntWithAggregatesFilter<"ProjectRole"> | number
    hoursQuoted?: FloatWithAggregatesFilter<"ProjectRole"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    projectRoles?: ProjectRoleListRelationFilter
    timeReports?: TimeReportListRelationFilter
    assignedTasks?: ProjectTaskListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    projectRoles?: ProjectRoleOrderByRelationAggregateInput
    timeReports?: TimeReportOrderByRelationAggregateInput
    assignedTasks?: ProjectTaskOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    projectRoles?: ProjectRoleListRelationFilter
    timeReports?: TimeReportListRelationFilter
    assignedTasks?: ProjectTaskListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type TimeReportWhereInput = {
    AND?: TimeReportWhereInput | TimeReportWhereInput[]
    OR?: TimeReportWhereInput[]
    NOT?: TimeReportWhereInput | TimeReportWhereInput[]
    id?: IntFilter<"TimeReport"> | number
    date?: DateTimeFilter<"TimeReport"> | Date | string
    hoursWorked?: FloatFilter<"TimeReport"> | number
    part?: StringNullableFilter<"TimeReport"> | string | null
    description?: StringNullableFilter<"TimeReport"> | string | null
    notes?: StringNullableFilter<"TimeReport"> | string | null
    userId?: IntFilter<"TimeReport"> | number
    projectId?: IntFilter<"TimeReport"> | number
    createdAt?: DateTimeFilter<"TimeReport"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type TimeReportOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    hoursWorked?: SortOrder
    part?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type TimeReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TimeReportWhereInput | TimeReportWhereInput[]
    OR?: TimeReportWhereInput[]
    NOT?: TimeReportWhereInput | TimeReportWhereInput[]
    date?: DateTimeFilter<"TimeReport"> | Date | string
    hoursWorked?: FloatFilter<"TimeReport"> | number
    part?: StringNullableFilter<"TimeReport"> | string | null
    description?: StringNullableFilter<"TimeReport"> | string | null
    notes?: StringNullableFilter<"TimeReport"> | string | null
    userId?: IntFilter<"TimeReport"> | number
    projectId?: IntFilter<"TimeReport"> | number
    createdAt?: DateTimeFilter<"TimeReport"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type TimeReportOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    hoursWorked?: SortOrder
    part?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    _count?: TimeReportCountOrderByAggregateInput
    _avg?: TimeReportAvgOrderByAggregateInput
    _max?: TimeReportMaxOrderByAggregateInput
    _min?: TimeReportMinOrderByAggregateInput
    _sum?: TimeReportSumOrderByAggregateInput
  }

  export type TimeReportScalarWhereWithAggregatesInput = {
    AND?: TimeReportScalarWhereWithAggregatesInput | TimeReportScalarWhereWithAggregatesInput[]
    OR?: TimeReportScalarWhereWithAggregatesInput[]
    NOT?: TimeReportScalarWhereWithAggregatesInput | TimeReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TimeReport"> | number
    date?: DateTimeWithAggregatesFilter<"TimeReport"> | Date | string
    hoursWorked?: FloatWithAggregatesFilter<"TimeReport"> | number
    part?: StringNullableWithAggregatesFilter<"TimeReport"> | string | null
    description?: StringNullableWithAggregatesFilter<"TimeReport"> | string | null
    notes?: StringNullableWithAggregatesFilter<"TimeReport"> | string | null
    userId?: IntWithAggregatesFilter<"TimeReport"> | number
    projectId?: IntWithAggregatesFilter<"TimeReport"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TimeReport"> | Date | string
  }

  export type ProjectTaskWhereInput = {
    AND?: ProjectTaskWhereInput | ProjectTaskWhereInput[]
    OR?: ProjectTaskWhereInput[]
    NOT?: ProjectTaskWhereInput | ProjectTaskWhereInput[]
    id?: IntFilter<"ProjectTask"> | number
    title?: StringFilter<"ProjectTask"> | string
    description?: StringNullableFilter<"ProjectTask"> | string | null
    status?: EnumTaskStatusFilter<"ProjectTask"> | $Enums.TaskStatus
    isCompleted?: BoolFilter<"ProjectTask"> | boolean
    dueDate?: DateTimeNullableFilter<"ProjectTask"> | Date | string | null
    projectId?: IntFilter<"ProjectTask"> | number
    assignedToId?: IntNullableFilter<"ProjectTask"> | number | null
    createdAt?: DateTimeFilter<"ProjectTask"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectTask"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ProjectTaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    isCompleted?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    projectId?: SortOrder
    assignedToId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
  }

  export type ProjectTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectTaskWhereInput | ProjectTaskWhereInput[]
    OR?: ProjectTaskWhereInput[]
    NOT?: ProjectTaskWhereInput | ProjectTaskWhereInput[]
    title?: StringFilter<"ProjectTask"> | string
    description?: StringNullableFilter<"ProjectTask"> | string | null
    status?: EnumTaskStatusFilter<"ProjectTask"> | $Enums.TaskStatus
    isCompleted?: BoolFilter<"ProjectTask"> | boolean
    dueDate?: DateTimeNullableFilter<"ProjectTask"> | Date | string | null
    projectId?: IntFilter<"ProjectTask"> | number
    assignedToId?: IntNullableFilter<"ProjectTask"> | number | null
    createdAt?: DateTimeFilter<"ProjectTask"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectTask"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ProjectTaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    isCompleted?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    projectId?: SortOrder
    assignedToId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectTaskCountOrderByAggregateInput
    _avg?: ProjectTaskAvgOrderByAggregateInput
    _max?: ProjectTaskMaxOrderByAggregateInput
    _min?: ProjectTaskMinOrderByAggregateInput
    _sum?: ProjectTaskSumOrderByAggregateInput
  }

  export type ProjectTaskScalarWhereWithAggregatesInput = {
    AND?: ProjectTaskScalarWhereWithAggregatesInput | ProjectTaskScalarWhereWithAggregatesInput[]
    OR?: ProjectTaskScalarWhereWithAggregatesInput[]
    NOT?: ProjectTaskScalarWhereWithAggregatesInput | ProjectTaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectTask"> | number
    title?: StringWithAggregatesFilter<"ProjectTask"> | string
    description?: StringNullableWithAggregatesFilter<"ProjectTask"> | string | null
    status?: EnumTaskStatusWithAggregatesFilter<"ProjectTask"> | $Enums.TaskStatus
    isCompleted?: BoolWithAggregatesFilter<"ProjectTask"> | boolean
    dueDate?: DateTimeNullableWithAggregatesFilter<"ProjectTask"> | Date | string | null
    projectId?: IntWithAggregatesFilter<"ProjectTask"> | number
    assignedToId?: IntNullableWithAggregatesFilter<"ProjectTask"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ProjectTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectTask"> | Date | string
  }

  export type ProjectCreateInput = {
    name: string
    description: string
    startDate: Date | string
    deadline: Date | string
    hourLeft: number
    projectType: string
    totalCost?: number
    salesValue?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: StatusCreateNestedOneWithoutProjectsInput
    customer?: CustomerCreateNestedOneWithoutProjectsInput
    contactPerson?: ContactPersonCreateNestedOneWithoutProjectsInput
    timeReports?: TimeReportCreateNestedManyWithoutProjectInput
    tasks?: ProjectTaskCreateNestedManyWithoutProjectInput
    projectRoles?: ProjectRoleCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    deadline: Date | string
    hourLeft: number
    projectType: string
    totalCost?: number
    salesValue?: number
    statusId?: number | null
    customerId?: number | null
    contactPersonId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    timeReports?: TimeReportUncheckedCreateNestedManyWithoutProjectInput
    tasks?: ProjectTaskUncheckedCreateNestedManyWithoutProjectInput
    projectRoles?: ProjectRoleUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    hourLeft?: FloatFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StatusUpdateOneWithoutProjectsNestedInput
    customer?: CustomerUpdateOneWithoutProjectsNestedInput
    contactPerson?: ContactPersonUpdateOneWithoutProjectsNestedInput
    timeReports?: TimeReportUpdateManyWithoutProjectNestedInput
    tasks?: ProjectTaskUpdateManyWithoutProjectNestedInput
    projectRoles?: ProjectRoleUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    hourLeft?: FloatFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    contactPersonId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeReports?: TimeReportUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: ProjectTaskUncheckedUpdateManyWithoutProjectNestedInput
    projectRoles?: ProjectRoleUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    deadline: Date | string
    hourLeft: number
    projectType: string
    totalCost?: number
    salesValue?: number
    statusId?: number | null
    customerId?: number | null
    contactPersonId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    hourLeft?: FloatFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    hourLeft?: FloatFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    contactPersonId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    name: string
    orderer: string
    poNumber: string
    hourlyRate: number
    partialInvoice: boolean
    contactPersons?: ContactPersonCreateNestedManyWithoutCustomerInput
    projects?: ProjectCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    name: string
    orderer: string
    poNumber: string
    hourlyRate: number
    partialInvoice: boolean
    contactPersons?: ContactPersonUncheckedCreateNestedManyWithoutCustomerInput
    projects?: ProjectUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    orderer?: StringFieldUpdateOperationsInput | string
    poNumber?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    partialInvoice?: BoolFieldUpdateOperationsInput | boolean
    contactPersons?: ContactPersonUpdateManyWithoutCustomerNestedInput
    projects?: ProjectUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    orderer?: StringFieldUpdateOperationsInput | string
    poNumber?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    partialInvoice?: BoolFieldUpdateOperationsInput | boolean
    contactPersons?: ContactPersonUncheckedUpdateManyWithoutCustomerNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    name: string
    orderer: string
    poNumber: string
    hourlyRate: number
    partialInvoice: boolean
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    orderer?: StringFieldUpdateOperationsInput | string
    poNumber?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    partialInvoice?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    orderer?: StringFieldUpdateOperationsInput | string
    poNumber?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    partialInvoice?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContactPersonCreateInput = {
    name: string
    email: string
    phone: string
    customer: CustomerCreateNestedOneWithoutContactPersonsInput
    projects?: ProjectCreateNestedManyWithoutContactPersonInput
  }

  export type ContactPersonUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    customerId: number
    projects?: ProjectUncheckedCreateNestedManyWithoutContactPersonInput
  }

  export type ContactPersonUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutContactPersonsNestedInput
    projects?: ProjectUpdateManyWithoutContactPersonNestedInput
  }

  export type ContactPersonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    customerId?: IntFieldUpdateOperationsInput | number
    projects?: ProjectUncheckedUpdateManyWithoutContactPersonNestedInput
  }

  export type ContactPersonCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    customerId: number
  }

  export type ContactPersonUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type ContactPersonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    customerId?: IntFieldUpdateOperationsInput | number
  }

  export type StatusCreateInput = {
    name: string
    projects?: ProjectCreateNestedManyWithoutStatusInput
  }

  export type StatusUncheckedCreateInput = {
    id?: number
    name: string
    projects?: ProjectUncheckedCreateNestedManyWithoutStatusInput
  }

  export type StatusUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutStatusNestedInput
  }

  export type StatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type StatusCreateManyInput = {
    id?: number
    name: string
  }

  export type StatusUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectRoleTypeCreateInput = {
    name: string
    projectRoles?: ProjectRoleCreateNestedManyWithoutRoleInput
  }

  export type ProjectRoleTypeUncheckedCreateInput = {
    id?: number
    name: string
    projectRoles?: ProjectRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type ProjectRoleTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    projectRoles?: ProjectRoleUpdateManyWithoutRoleNestedInput
  }

  export type ProjectRoleTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectRoles?: ProjectRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type ProjectRoleTypeCreateManyInput = {
    id?: number
    name: string
  }

  export type ProjectRoleTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectRoleTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectRoleCreateInput = {
    hoursQuoted: number
    project: ProjectCreateNestedOneWithoutProjectRolesInput
    user: UserCreateNestedOneWithoutProjectRolesInput
    role: ProjectRoleTypeCreateNestedOneWithoutProjectRolesInput
  }

  export type ProjectRoleUncheckedCreateInput = {
    id?: number
    projectId: number
    userId: number
    roleId: number
    hoursQuoted: number
  }

  export type ProjectRoleUpdateInput = {
    hoursQuoted?: FloatFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneRequiredWithoutProjectRolesNestedInput
    user?: UserUpdateOneRequiredWithoutProjectRolesNestedInput
    role?: ProjectRoleTypeUpdateOneRequiredWithoutProjectRolesNestedInput
  }

  export type ProjectRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    hoursQuoted?: FloatFieldUpdateOperationsInput | number
  }

  export type ProjectRoleCreateManyInput = {
    id?: number
    projectId: number
    userId: number
    roleId: number
    hoursQuoted: number
  }

  export type ProjectRoleUpdateManyMutationInput = {
    hoursQuoted?: FloatFieldUpdateOperationsInput | number
  }

  export type ProjectRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    hoursQuoted?: FloatFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    name: string
    email: string
    username: string
    password: string
    role: string
    projectRoles?: ProjectRoleCreateNestedManyWithoutUserInput
    timeReports?: TimeReportCreateNestedManyWithoutUserInput
    assignedTasks?: ProjectTaskCreateNestedManyWithoutAssignedToInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    username: string
    password: string
    role: string
    projectRoles?: ProjectRoleUncheckedCreateNestedManyWithoutUserInput
    timeReports?: TimeReportUncheckedCreateNestedManyWithoutUserInput
    assignedTasks?: ProjectTaskUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    projectRoles?: ProjectRoleUpdateManyWithoutUserNestedInput
    timeReports?: TimeReportUpdateManyWithoutUserNestedInput
    assignedTasks?: ProjectTaskUpdateManyWithoutAssignedToNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    projectRoles?: ProjectRoleUncheckedUpdateManyWithoutUserNestedInput
    timeReports?: TimeReportUncheckedUpdateManyWithoutUserNestedInput
    assignedTasks?: ProjectTaskUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    username: string
    password: string
    role: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type TimeReportCreateInput = {
    date: Date | string
    hoursWorked: number
    part?: string | null
    description?: string | null
    notes?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTimeReportsInput
    project: ProjectCreateNestedOneWithoutTimeReportsInput
  }

  export type TimeReportUncheckedCreateInput = {
    id?: number
    date: Date | string
    hoursWorked: number
    part?: string | null
    description?: string | null
    notes?: string | null
    userId: number
    projectId: number
    createdAt?: Date | string
  }

  export type TimeReportUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    part?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimeReportsNestedInput
    project?: ProjectUpdateOneRequiredWithoutTimeReportsNestedInput
  }

  export type TimeReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    part?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeReportCreateManyInput = {
    id?: number
    date: Date | string
    hoursWorked: number
    part?: string | null
    description?: string | null
    notes?: string | null
    userId: number
    projectId: number
    createdAt?: Date | string
  }

  export type TimeReportUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    part?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    part?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTaskCreateInput = {
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    isCompleted?: boolean
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutTasksInput
    assignedTo?: UserCreateNestedOneWithoutAssignedTasksInput
  }

  export type ProjectTaskUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    isCompleted?: boolean
    dueDate?: Date | string | null
    projectId: number
    assignedToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectTaskUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedTasksNestedInput
  }

  export type ProjectTaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectId?: IntFieldUpdateOperationsInput | number
    assignedToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTaskCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    isCompleted?: boolean
    dueDate?: Date | string | null
    projectId: number
    assignedToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectTaskUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectId?: IntFieldUpdateOperationsInput | number
    assignedToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type StatusNullableScalarRelationFilter = {
    is?: StatusWhereInput | null
    isNot?: StatusWhereInput | null
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type ContactPersonNullableScalarRelationFilter = {
    is?: ContactPersonWhereInput | null
    isNot?: ContactPersonWhereInput | null
  }

  export type TimeReportListRelationFilter = {
    every?: TimeReportWhereInput
    some?: TimeReportWhereInput
    none?: TimeReportWhereInput
  }

  export type ProjectTaskListRelationFilter = {
    every?: ProjectTaskWhereInput
    some?: ProjectTaskWhereInput
    none?: ProjectTaskWhereInput
  }

  export type ProjectRoleListRelationFilter = {
    every?: ProjectRoleWhereInput
    some?: ProjectRoleWhereInput
    none?: ProjectRoleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TimeReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    deadline?: SortOrder
    hourLeft?: SortOrder
    projectType?: SortOrder
    totalCost?: SortOrder
    salesValue?: SortOrder
    statusId?: SortOrder
    customerId?: SortOrder
    contactPersonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    hourLeft?: SortOrder
    totalCost?: SortOrder
    salesValue?: SortOrder
    statusId?: SortOrder
    customerId?: SortOrder
    contactPersonId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    deadline?: SortOrder
    hourLeft?: SortOrder
    projectType?: SortOrder
    totalCost?: SortOrder
    salesValue?: SortOrder
    statusId?: SortOrder
    customerId?: SortOrder
    contactPersonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    deadline?: SortOrder
    hourLeft?: SortOrder
    projectType?: SortOrder
    totalCost?: SortOrder
    salesValue?: SortOrder
    statusId?: SortOrder
    customerId?: SortOrder
    contactPersonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    hourLeft?: SortOrder
    totalCost?: SortOrder
    salesValue?: SortOrder
    statusId?: SortOrder
    customerId?: SortOrder
    contactPersonId?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ContactPersonListRelationFilter = {
    every?: ContactPersonWhereInput
    some?: ContactPersonWhereInput
    none?: ContactPersonWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ContactPersonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    orderer?: SortOrder
    poNumber?: SortOrder
    hourlyRate?: SortOrder
    partialInvoice?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
    hourlyRate?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    orderer?: SortOrder
    poNumber?: SortOrder
    hourlyRate?: SortOrder
    partialInvoice?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    orderer?: SortOrder
    poNumber?: SortOrder
    hourlyRate?: SortOrder
    partialInvoice?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
    hourlyRate?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type ContactPersonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    customerId?: SortOrder
  }

  export type ContactPersonAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type ContactPersonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    customerId?: SortOrder
  }

  export type ContactPersonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    customerId?: SortOrder
  }

  export type ContactPersonSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type StatusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StatusAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StatusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StatusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StatusSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjectRoleTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProjectRoleTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjectRoleTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProjectRoleTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProjectRoleTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProjectRoleTypeScalarRelationFilter = {
    is?: ProjectRoleTypeWhereInput
    isNot?: ProjectRoleTypeWhereInput
  }

  export type ProjectRoleCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    hoursQuoted?: SortOrder
  }

  export type ProjectRoleAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    hoursQuoted?: SortOrder
  }

  export type ProjectRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    hoursQuoted?: SortOrder
  }

  export type ProjectRoleMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    hoursQuoted?: SortOrder
  }

  export type ProjectRoleSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    hoursQuoted?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type TimeReportCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    hoursWorked?: SortOrder
    part?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type TimeReportAvgOrderByAggregateInput = {
    id?: SortOrder
    hoursWorked?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type TimeReportMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    hoursWorked?: SortOrder
    part?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type TimeReportMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    hoursWorked?: SortOrder
    part?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type TimeReportSumOrderByAggregateInput = {
    id?: SortOrder
    hoursWorked?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
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

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ProjectTaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    isCompleted?: SortOrder
    dueDate?: SortOrder
    projectId?: SortOrder
    assignedToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectTaskAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    assignedToId?: SortOrder
  }

  export type ProjectTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    isCompleted?: SortOrder
    dueDate?: SortOrder
    projectId?: SortOrder
    assignedToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectTaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    isCompleted?: SortOrder
    dueDate?: SortOrder
    projectId?: SortOrder
    assignedToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectTaskSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    assignedToId?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StatusCreateNestedOneWithoutProjectsInput = {
    create?: XOR<StatusCreateWithoutProjectsInput, StatusUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: StatusCreateOrConnectWithoutProjectsInput
    connect?: StatusWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutProjectsInput = {
    create?: XOR<CustomerCreateWithoutProjectsInput, CustomerUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutProjectsInput
    connect?: CustomerWhereUniqueInput
  }

  export type ContactPersonCreateNestedOneWithoutProjectsInput = {
    create?: XOR<ContactPersonCreateWithoutProjectsInput, ContactPersonUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ContactPersonCreateOrConnectWithoutProjectsInput
    connect?: ContactPersonWhereUniqueInput
  }

  export type TimeReportCreateNestedManyWithoutProjectInput = {
    create?: XOR<TimeReportCreateWithoutProjectInput, TimeReportUncheckedCreateWithoutProjectInput> | TimeReportCreateWithoutProjectInput[] | TimeReportUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TimeReportCreateOrConnectWithoutProjectInput | TimeReportCreateOrConnectWithoutProjectInput[]
    createMany?: TimeReportCreateManyProjectInputEnvelope
    connect?: TimeReportWhereUniqueInput | TimeReportWhereUniqueInput[]
  }

  export type ProjectTaskCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectTaskCreateWithoutProjectInput, ProjectTaskUncheckedCreateWithoutProjectInput> | ProjectTaskCreateWithoutProjectInput[] | ProjectTaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTaskCreateOrConnectWithoutProjectInput | ProjectTaskCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectTaskCreateManyProjectInputEnvelope
    connect?: ProjectTaskWhereUniqueInput | ProjectTaskWhereUniqueInput[]
  }

  export type ProjectRoleCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectRoleCreateWithoutProjectInput, ProjectRoleUncheckedCreateWithoutProjectInput> | ProjectRoleCreateWithoutProjectInput[] | ProjectRoleUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectRoleCreateOrConnectWithoutProjectInput | ProjectRoleCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectRoleCreateManyProjectInputEnvelope
    connect?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
  }

  export type TimeReportUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TimeReportCreateWithoutProjectInput, TimeReportUncheckedCreateWithoutProjectInput> | TimeReportCreateWithoutProjectInput[] | TimeReportUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TimeReportCreateOrConnectWithoutProjectInput | TimeReportCreateOrConnectWithoutProjectInput[]
    createMany?: TimeReportCreateManyProjectInputEnvelope
    connect?: TimeReportWhereUniqueInput | TimeReportWhereUniqueInput[]
  }

  export type ProjectTaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectTaskCreateWithoutProjectInput, ProjectTaskUncheckedCreateWithoutProjectInput> | ProjectTaskCreateWithoutProjectInput[] | ProjectTaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTaskCreateOrConnectWithoutProjectInput | ProjectTaskCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectTaskCreateManyProjectInputEnvelope
    connect?: ProjectTaskWhereUniqueInput | ProjectTaskWhereUniqueInput[]
  }

  export type ProjectRoleUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectRoleCreateWithoutProjectInput, ProjectRoleUncheckedCreateWithoutProjectInput> | ProjectRoleCreateWithoutProjectInput[] | ProjectRoleUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectRoleCreateOrConnectWithoutProjectInput | ProjectRoleCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectRoleCreateManyProjectInputEnvelope
    connect?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StatusUpdateOneWithoutProjectsNestedInput = {
    create?: XOR<StatusCreateWithoutProjectsInput, StatusUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: StatusCreateOrConnectWithoutProjectsInput
    upsert?: StatusUpsertWithoutProjectsInput
    disconnect?: StatusWhereInput | boolean
    delete?: StatusWhereInput | boolean
    connect?: StatusWhereUniqueInput
    update?: XOR<XOR<StatusUpdateToOneWithWhereWithoutProjectsInput, StatusUpdateWithoutProjectsInput>, StatusUncheckedUpdateWithoutProjectsInput>
  }

  export type CustomerUpdateOneWithoutProjectsNestedInput = {
    create?: XOR<CustomerCreateWithoutProjectsInput, CustomerUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutProjectsInput
    upsert?: CustomerUpsertWithoutProjectsInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutProjectsInput, CustomerUpdateWithoutProjectsInput>, CustomerUncheckedUpdateWithoutProjectsInput>
  }

  export type ContactPersonUpdateOneWithoutProjectsNestedInput = {
    create?: XOR<ContactPersonCreateWithoutProjectsInput, ContactPersonUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ContactPersonCreateOrConnectWithoutProjectsInput
    upsert?: ContactPersonUpsertWithoutProjectsInput
    disconnect?: ContactPersonWhereInput | boolean
    delete?: ContactPersonWhereInput | boolean
    connect?: ContactPersonWhereUniqueInput
    update?: XOR<XOR<ContactPersonUpdateToOneWithWhereWithoutProjectsInput, ContactPersonUpdateWithoutProjectsInput>, ContactPersonUncheckedUpdateWithoutProjectsInput>
  }

  export type TimeReportUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TimeReportCreateWithoutProjectInput, TimeReportUncheckedCreateWithoutProjectInput> | TimeReportCreateWithoutProjectInput[] | TimeReportUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TimeReportCreateOrConnectWithoutProjectInput | TimeReportCreateOrConnectWithoutProjectInput[]
    upsert?: TimeReportUpsertWithWhereUniqueWithoutProjectInput | TimeReportUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TimeReportCreateManyProjectInputEnvelope
    set?: TimeReportWhereUniqueInput | TimeReportWhereUniqueInput[]
    disconnect?: TimeReportWhereUniqueInput | TimeReportWhereUniqueInput[]
    delete?: TimeReportWhereUniqueInput | TimeReportWhereUniqueInput[]
    connect?: TimeReportWhereUniqueInput | TimeReportWhereUniqueInput[]
    update?: TimeReportUpdateWithWhereUniqueWithoutProjectInput | TimeReportUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TimeReportUpdateManyWithWhereWithoutProjectInput | TimeReportUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TimeReportScalarWhereInput | TimeReportScalarWhereInput[]
  }

  export type ProjectTaskUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectTaskCreateWithoutProjectInput, ProjectTaskUncheckedCreateWithoutProjectInput> | ProjectTaskCreateWithoutProjectInput[] | ProjectTaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTaskCreateOrConnectWithoutProjectInput | ProjectTaskCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectTaskUpsertWithWhereUniqueWithoutProjectInput | ProjectTaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectTaskCreateManyProjectInputEnvelope
    set?: ProjectTaskWhereUniqueInput | ProjectTaskWhereUniqueInput[]
    disconnect?: ProjectTaskWhereUniqueInput | ProjectTaskWhereUniqueInput[]
    delete?: ProjectTaskWhereUniqueInput | ProjectTaskWhereUniqueInput[]
    connect?: ProjectTaskWhereUniqueInput | ProjectTaskWhereUniqueInput[]
    update?: ProjectTaskUpdateWithWhereUniqueWithoutProjectInput | ProjectTaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectTaskUpdateManyWithWhereWithoutProjectInput | ProjectTaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectTaskScalarWhereInput | ProjectTaskScalarWhereInput[]
  }

  export type ProjectRoleUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectRoleCreateWithoutProjectInput, ProjectRoleUncheckedCreateWithoutProjectInput> | ProjectRoleCreateWithoutProjectInput[] | ProjectRoleUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectRoleCreateOrConnectWithoutProjectInput | ProjectRoleCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectRoleUpsertWithWhereUniqueWithoutProjectInput | ProjectRoleUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectRoleCreateManyProjectInputEnvelope
    set?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    disconnect?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    delete?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    connect?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    update?: ProjectRoleUpdateWithWhereUniqueWithoutProjectInput | ProjectRoleUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectRoleUpdateManyWithWhereWithoutProjectInput | ProjectRoleUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectRoleScalarWhereInput | ProjectRoleScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TimeReportUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TimeReportCreateWithoutProjectInput, TimeReportUncheckedCreateWithoutProjectInput> | TimeReportCreateWithoutProjectInput[] | TimeReportUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TimeReportCreateOrConnectWithoutProjectInput | TimeReportCreateOrConnectWithoutProjectInput[]
    upsert?: TimeReportUpsertWithWhereUniqueWithoutProjectInput | TimeReportUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TimeReportCreateManyProjectInputEnvelope
    set?: TimeReportWhereUniqueInput | TimeReportWhereUniqueInput[]
    disconnect?: TimeReportWhereUniqueInput | TimeReportWhereUniqueInput[]
    delete?: TimeReportWhereUniqueInput | TimeReportWhereUniqueInput[]
    connect?: TimeReportWhereUniqueInput | TimeReportWhereUniqueInput[]
    update?: TimeReportUpdateWithWhereUniqueWithoutProjectInput | TimeReportUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TimeReportUpdateManyWithWhereWithoutProjectInput | TimeReportUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TimeReportScalarWhereInput | TimeReportScalarWhereInput[]
  }

  export type ProjectTaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectTaskCreateWithoutProjectInput, ProjectTaskUncheckedCreateWithoutProjectInput> | ProjectTaskCreateWithoutProjectInput[] | ProjectTaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTaskCreateOrConnectWithoutProjectInput | ProjectTaskCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectTaskUpsertWithWhereUniqueWithoutProjectInput | ProjectTaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectTaskCreateManyProjectInputEnvelope
    set?: ProjectTaskWhereUniqueInput | ProjectTaskWhereUniqueInput[]
    disconnect?: ProjectTaskWhereUniqueInput | ProjectTaskWhereUniqueInput[]
    delete?: ProjectTaskWhereUniqueInput | ProjectTaskWhereUniqueInput[]
    connect?: ProjectTaskWhereUniqueInput | ProjectTaskWhereUniqueInput[]
    update?: ProjectTaskUpdateWithWhereUniqueWithoutProjectInput | ProjectTaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectTaskUpdateManyWithWhereWithoutProjectInput | ProjectTaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectTaskScalarWhereInput | ProjectTaskScalarWhereInput[]
  }

  export type ProjectRoleUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectRoleCreateWithoutProjectInput, ProjectRoleUncheckedCreateWithoutProjectInput> | ProjectRoleCreateWithoutProjectInput[] | ProjectRoleUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectRoleCreateOrConnectWithoutProjectInput | ProjectRoleCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectRoleUpsertWithWhereUniqueWithoutProjectInput | ProjectRoleUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectRoleCreateManyProjectInputEnvelope
    set?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    disconnect?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    delete?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    connect?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    update?: ProjectRoleUpdateWithWhereUniqueWithoutProjectInput | ProjectRoleUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectRoleUpdateManyWithWhereWithoutProjectInput | ProjectRoleUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectRoleScalarWhereInput | ProjectRoleScalarWhereInput[]
  }

  export type ContactPersonCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ContactPersonCreateWithoutCustomerInput, ContactPersonUncheckedCreateWithoutCustomerInput> | ContactPersonCreateWithoutCustomerInput[] | ContactPersonUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ContactPersonCreateOrConnectWithoutCustomerInput | ContactPersonCreateOrConnectWithoutCustomerInput[]
    createMany?: ContactPersonCreateManyCustomerInputEnvelope
    connect?: ContactPersonWhereUniqueInput | ContactPersonWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ProjectCreateWithoutCustomerInput, ProjectUncheckedCreateWithoutCustomerInput> | ProjectCreateWithoutCustomerInput[] | ProjectUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCustomerInput | ProjectCreateOrConnectWithoutCustomerInput[]
    createMany?: ProjectCreateManyCustomerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ContactPersonUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ContactPersonCreateWithoutCustomerInput, ContactPersonUncheckedCreateWithoutCustomerInput> | ContactPersonCreateWithoutCustomerInput[] | ContactPersonUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ContactPersonCreateOrConnectWithoutCustomerInput | ContactPersonCreateOrConnectWithoutCustomerInput[]
    createMany?: ContactPersonCreateManyCustomerInputEnvelope
    connect?: ContactPersonWhereUniqueInput | ContactPersonWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ProjectCreateWithoutCustomerInput, ProjectUncheckedCreateWithoutCustomerInput> | ProjectCreateWithoutCustomerInput[] | ProjectUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCustomerInput | ProjectCreateOrConnectWithoutCustomerInput[]
    createMany?: ProjectCreateManyCustomerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ContactPersonUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ContactPersonCreateWithoutCustomerInput, ContactPersonUncheckedCreateWithoutCustomerInput> | ContactPersonCreateWithoutCustomerInput[] | ContactPersonUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ContactPersonCreateOrConnectWithoutCustomerInput | ContactPersonCreateOrConnectWithoutCustomerInput[]
    upsert?: ContactPersonUpsertWithWhereUniqueWithoutCustomerInput | ContactPersonUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ContactPersonCreateManyCustomerInputEnvelope
    set?: ContactPersonWhereUniqueInput | ContactPersonWhereUniqueInput[]
    disconnect?: ContactPersonWhereUniqueInput | ContactPersonWhereUniqueInput[]
    delete?: ContactPersonWhereUniqueInput | ContactPersonWhereUniqueInput[]
    connect?: ContactPersonWhereUniqueInput | ContactPersonWhereUniqueInput[]
    update?: ContactPersonUpdateWithWhereUniqueWithoutCustomerInput | ContactPersonUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ContactPersonUpdateManyWithWhereWithoutCustomerInput | ContactPersonUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ContactPersonScalarWhereInput | ContactPersonScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ProjectCreateWithoutCustomerInput, ProjectUncheckedCreateWithoutCustomerInput> | ProjectCreateWithoutCustomerInput[] | ProjectUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCustomerInput | ProjectCreateOrConnectWithoutCustomerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCustomerInput | ProjectUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ProjectCreateManyCustomerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCustomerInput | ProjectUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCustomerInput | ProjectUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ContactPersonUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ContactPersonCreateWithoutCustomerInput, ContactPersonUncheckedCreateWithoutCustomerInput> | ContactPersonCreateWithoutCustomerInput[] | ContactPersonUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ContactPersonCreateOrConnectWithoutCustomerInput | ContactPersonCreateOrConnectWithoutCustomerInput[]
    upsert?: ContactPersonUpsertWithWhereUniqueWithoutCustomerInput | ContactPersonUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ContactPersonCreateManyCustomerInputEnvelope
    set?: ContactPersonWhereUniqueInput | ContactPersonWhereUniqueInput[]
    disconnect?: ContactPersonWhereUniqueInput | ContactPersonWhereUniqueInput[]
    delete?: ContactPersonWhereUniqueInput | ContactPersonWhereUniqueInput[]
    connect?: ContactPersonWhereUniqueInput | ContactPersonWhereUniqueInput[]
    update?: ContactPersonUpdateWithWhereUniqueWithoutCustomerInput | ContactPersonUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ContactPersonUpdateManyWithWhereWithoutCustomerInput | ContactPersonUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ContactPersonScalarWhereInput | ContactPersonScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ProjectCreateWithoutCustomerInput, ProjectUncheckedCreateWithoutCustomerInput> | ProjectCreateWithoutCustomerInput[] | ProjectUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCustomerInput | ProjectCreateOrConnectWithoutCustomerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCustomerInput | ProjectUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ProjectCreateManyCustomerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCustomerInput | ProjectUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCustomerInput | ProjectUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutContactPersonsInput = {
    create?: XOR<CustomerCreateWithoutContactPersonsInput, CustomerUncheckedCreateWithoutContactPersonsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutContactPersonsInput
    connect?: CustomerWhereUniqueInput
  }

  export type ProjectCreateNestedManyWithoutContactPersonInput = {
    create?: XOR<ProjectCreateWithoutContactPersonInput, ProjectUncheckedCreateWithoutContactPersonInput> | ProjectCreateWithoutContactPersonInput[] | ProjectUncheckedCreateWithoutContactPersonInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutContactPersonInput | ProjectCreateOrConnectWithoutContactPersonInput[]
    createMany?: ProjectCreateManyContactPersonInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutContactPersonInput = {
    create?: XOR<ProjectCreateWithoutContactPersonInput, ProjectUncheckedCreateWithoutContactPersonInput> | ProjectCreateWithoutContactPersonInput[] | ProjectUncheckedCreateWithoutContactPersonInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutContactPersonInput | ProjectCreateOrConnectWithoutContactPersonInput[]
    createMany?: ProjectCreateManyContactPersonInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type CustomerUpdateOneRequiredWithoutContactPersonsNestedInput = {
    create?: XOR<CustomerCreateWithoutContactPersonsInput, CustomerUncheckedCreateWithoutContactPersonsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutContactPersonsInput
    upsert?: CustomerUpsertWithoutContactPersonsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutContactPersonsInput, CustomerUpdateWithoutContactPersonsInput>, CustomerUncheckedUpdateWithoutContactPersonsInput>
  }

  export type ProjectUpdateManyWithoutContactPersonNestedInput = {
    create?: XOR<ProjectCreateWithoutContactPersonInput, ProjectUncheckedCreateWithoutContactPersonInput> | ProjectCreateWithoutContactPersonInput[] | ProjectUncheckedCreateWithoutContactPersonInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutContactPersonInput | ProjectCreateOrConnectWithoutContactPersonInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutContactPersonInput | ProjectUpsertWithWhereUniqueWithoutContactPersonInput[]
    createMany?: ProjectCreateManyContactPersonInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutContactPersonInput | ProjectUpdateWithWhereUniqueWithoutContactPersonInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutContactPersonInput | ProjectUpdateManyWithWhereWithoutContactPersonInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutContactPersonNestedInput = {
    create?: XOR<ProjectCreateWithoutContactPersonInput, ProjectUncheckedCreateWithoutContactPersonInput> | ProjectCreateWithoutContactPersonInput[] | ProjectUncheckedCreateWithoutContactPersonInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutContactPersonInput | ProjectCreateOrConnectWithoutContactPersonInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutContactPersonInput | ProjectUpsertWithWhereUniqueWithoutContactPersonInput[]
    createMany?: ProjectCreateManyContactPersonInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutContactPersonInput | ProjectUpdateWithWhereUniqueWithoutContactPersonInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutContactPersonInput | ProjectUpdateManyWithWhereWithoutContactPersonInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectCreateNestedManyWithoutStatusInput = {
    create?: XOR<ProjectCreateWithoutStatusInput, ProjectUncheckedCreateWithoutStatusInput> | ProjectCreateWithoutStatusInput[] | ProjectUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutStatusInput | ProjectCreateOrConnectWithoutStatusInput[]
    createMany?: ProjectCreateManyStatusInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<ProjectCreateWithoutStatusInput, ProjectUncheckedCreateWithoutStatusInput> | ProjectCreateWithoutStatusInput[] | ProjectUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutStatusInput | ProjectCreateOrConnectWithoutStatusInput[]
    createMany?: ProjectCreateManyStatusInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUpdateManyWithoutStatusNestedInput = {
    create?: XOR<ProjectCreateWithoutStatusInput, ProjectUncheckedCreateWithoutStatusInput> | ProjectCreateWithoutStatusInput[] | ProjectUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutStatusInput | ProjectCreateOrConnectWithoutStatusInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutStatusInput | ProjectUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: ProjectCreateManyStatusInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutStatusInput | ProjectUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutStatusInput | ProjectUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<ProjectCreateWithoutStatusInput, ProjectUncheckedCreateWithoutStatusInput> | ProjectCreateWithoutStatusInput[] | ProjectUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutStatusInput | ProjectCreateOrConnectWithoutStatusInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutStatusInput | ProjectUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: ProjectCreateManyStatusInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutStatusInput | ProjectUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutStatusInput | ProjectUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<ProjectRoleCreateWithoutRoleInput, ProjectRoleUncheckedCreateWithoutRoleInput> | ProjectRoleCreateWithoutRoleInput[] | ProjectRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ProjectRoleCreateOrConnectWithoutRoleInput | ProjectRoleCreateOrConnectWithoutRoleInput[]
    createMany?: ProjectRoleCreateManyRoleInputEnvelope
    connect?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
  }

  export type ProjectRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<ProjectRoleCreateWithoutRoleInput, ProjectRoleUncheckedCreateWithoutRoleInput> | ProjectRoleCreateWithoutRoleInput[] | ProjectRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ProjectRoleCreateOrConnectWithoutRoleInput | ProjectRoleCreateOrConnectWithoutRoleInput[]
    createMany?: ProjectRoleCreateManyRoleInputEnvelope
    connect?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
  }

  export type ProjectRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<ProjectRoleCreateWithoutRoleInput, ProjectRoleUncheckedCreateWithoutRoleInput> | ProjectRoleCreateWithoutRoleInput[] | ProjectRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ProjectRoleCreateOrConnectWithoutRoleInput | ProjectRoleCreateOrConnectWithoutRoleInput[]
    upsert?: ProjectRoleUpsertWithWhereUniqueWithoutRoleInput | ProjectRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: ProjectRoleCreateManyRoleInputEnvelope
    set?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    disconnect?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    delete?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    connect?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    update?: ProjectRoleUpdateWithWhereUniqueWithoutRoleInput | ProjectRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: ProjectRoleUpdateManyWithWhereWithoutRoleInput | ProjectRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: ProjectRoleScalarWhereInput | ProjectRoleScalarWhereInput[]
  }

  export type ProjectRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<ProjectRoleCreateWithoutRoleInput, ProjectRoleUncheckedCreateWithoutRoleInput> | ProjectRoleCreateWithoutRoleInput[] | ProjectRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ProjectRoleCreateOrConnectWithoutRoleInput | ProjectRoleCreateOrConnectWithoutRoleInput[]
    upsert?: ProjectRoleUpsertWithWhereUniqueWithoutRoleInput | ProjectRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: ProjectRoleCreateManyRoleInputEnvelope
    set?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    disconnect?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    delete?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    connect?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    update?: ProjectRoleUpdateWithWhereUniqueWithoutRoleInput | ProjectRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: ProjectRoleUpdateManyWithWhereWithoutRoleInput | ProjectRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: ProjectRoleScalarWhereInput | ProjectRoleScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutProjectRolesInput = {
    create?: XOR<ProjectCreateWithoutProjectRolesInput, ProjectUncheckedCreateWithoutProjectRolesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectRolesInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProjectRolesInput = {
    create?: XOR<UserCreateWithoutProjectRolesInput, UserUncheckedCreateWithoutProjectRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectRolesInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectRoleTypeCreateNestedOneWithoutProjectRolesInput = {
    create?: XOR<ProjectRoleTypeCreateWithoutProjectRolesInput, ProjectRoleTypeUncheckedCreateWithoutProjectRolesInput>
    connectOrCreate?: ProjectRoleTypeCreateOrConnectWithoutProjectRolesInput
    connect?: ProjectRoleTypeWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutProjectRolesNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectRolesInput, ProjectUncheckedCreateWithoutProjectRolesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectRolesInput
    upsert?: ProjectUpsertWithoutProjectRolesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProjectRolesInput, ProjectUpdateWithoutProjectRolesInput>, ProjectUncheckedUpdateWithoutProjectRolesInput>
  }

  export type UserUpdateOneRequiredWithoutProjectRolesNestedInput = {
    create?: XOR<UserCreateWithoutProjectRolesInput, UserUncheckedCreateWithoutProjectRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectRolesInput
    upsert?: UserUpsertWithoutProjectRolesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectRolesInput, UserUpdateWithoutProjectRolesInput>, UserUncheckedUpdateWithoutProjectRolesInput>
  }

  export type ProjectRoleTypeUpdateOneRequiredWithoutProjectRolesNestedInput = {
    create?: XOR<ProjectRoleTypeCreateWithoutProjectRolesInput, ProjectRoleTypeUncheckedCreateWithoutProjectRolesInput>
    connectOrCreate?: ProjectRoleTypeCreateOrConnectWithoutProjectRolesInput
    upsert?: ProjectRoleTypeUpsertWithoutProjectRolesInput
    connect?: ProjectRoleTypeWhereUniqueInput
    update?: XOR<XOR<ProjectRoleTypeUpdateToOneWithWhereWithoutProjectRolesInput, ProjectRoleTypeUpdateWithoutProjectRolesInput>, ProjectRoleTypeUncheckedUpdateWithoutProjectRolesInput>
  }

  export type ProjectRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectRoleCreateWithoutUserInput, ProjectRoleUncheckedCreateWithoutUserInput> | ProjectRoleCreateWithoutUserInput[] | ProjectRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectRoleCreateOrConnectWithoutUserInput | ProjectRoleCreateOrConnectWithoutUserInput[]
    createMany?: ProjectRoleCreateManyUserInputEnvelope
    connect?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
  }

  export type TimeReportCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeReportCreateWithoutUserInput, TimeReportUncheckedCreateWithoutUserInput> | TimeReportCreateWithoutUserInput[] | TimeReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeReportCreateOrConnectWithoutUserInput | TimeReportCreateOrConnectWithoutUserInput[]
    createMany?: TimeReportCreateManyUserInputEnvelope
    connect?: TimeReportWhereUniqueInput | TimeReportWhereUniqueInput[]
  }

  export type ProjectTaskCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<ProjectTaskCreateWithoutAssignedToInput, ProjectTaskUncheckedCreateWithoutAssignedToInput> | ProjectTaskCreateWithoutAssignedToInput[] | ProjectTaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: ProjectTaskCreateOrConnectWithoutAssignedToInput | ProjectTaskCreateOrConnectWithoutAssignedToInput[]
    createMany?: ProjectTaskCreateManyAssignedToInputEnvelope
    connect?: ProjectTaskWhereUniqueInput | ProjectTaskWhereUniqueInput[]
  }

  export type ProjectRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectRoleCreateWithoutUserInput, ProjectRoleUncheckedCreateWithoutUserInput> | ProjectRoleCreateWithoutUserInput[] | ProjectRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectRoleCreateOrConnectWithoutUserInput | ProjectRoleCreateOrConnectWithoutUserInput[]
    createMany?: ProjectRoleCreateManyUserInputEnvelope
    connect?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
  }

  export type TimeReportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeReportCreateWithoutUserInput, TimeReportUncheckedCreateWithoutUserInput> | TimeReportCreateWithoutUserInput[] | TimeReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeReportCreateOrConnectWithoutUserInput | TimeReportCreateOrConnectWithoutUserInput[]
    createMany?: TimeReportCreateManyUserInputEnvelope
    connect?: TimeReportWhereUniqueInput | TimeReportWhereUniqueInput[]
  }

  export type ProjectTaskUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<ProjectTaskCreateWithoutAssignedToInput, ProjectTaskUncheckedCreateWithoutAssignedToInput> | ProjectTaskCreateWithoutAssignedToInput[] | ProjectTaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: ProjectTaskCreateOrConnectWithoutAssignedToInput | ProjectTaskCreateOrConnectWithoutAssignedToInput[]
    createMany?: ProjectTaskCreateManyAssignedToInputEnvelope
    connect?: ProjectTaskWhereUniqueInput | ProjectTaskWhereUniqueInput[]
  }

  export type ProjectRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectRoleCreateWithoutUserInput, ProjectRoleUncheckedCreateWithoutUserInput> | ProjectRoleCreateWithoutUserInput[] | ProjectRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectRoleCreateOrConnectWithoutUserInput | ProjectRoleCreateOrConnectWithoutUserInput[]
    upsert?: ProjectRoleUpsertWithWhereUniqueWithoutUserInput | ProjectRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectRoleCreateManyUserInputEnvelope
    set?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    disconnect?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    delete?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    connect?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    update?: ProjectRoleUpdateWithWhereUniqueWithoutUserInput | ProjectRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectRoleUpdateManyWithWhereWithoutUserInput | ProjectRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectRoleScalarWhereInput | ProjectRoleScalarWhereInput[]
  }

  export type TimeReportUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeReportCreateWithoutUserInput, TimeReportUncheckedCreateWithoutUserInput> | TimeReportCreateWithoutUserInput[] | TimeReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeReportCreateOrConnectWithoutUserInput | TimeReportCreateOrConnectWithoutUserInput[]
    upsert?: TimeReportUpsertWithWhereUniqueWithoutUserInput | TimeReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeReportCreateManyUserInputEnvelope
    set?: TimeReportWhereUniqueInput | TimeReportWhereUniqueInput[]
    disconnect?: TimeReportWhereUniqueInput | TimeReportWhereUniqueInput[]
    delete?: TimeReportWhereUniqueInput | TimeReportWhereUniqueInput[]
    connect?: TimeReportWhereUniqueInput | TimeReportWhereUniqueInput[]
    update?: TimeReportUpdateWithWhereUniqueWithoutUserInput | TimeReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeReportUpdateManyWithWhereWithoutUserInput | TimeReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeReportScalarWhereInput | TimeReportScalarWhereInput[]
  }

  export type ProjectTaskUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<ProjectTaskCreateWithoutAssignedToInput, ProjectTaskUncheckedCreateWithoutAssignedToInput> | ProjectTaskCreateWithoutAssignedToInput[] | ProjectTaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: ProjectTaskCreateOrConnectWithoutAssignedToInput | ProjectTaskCreateOrConnectWithoutAssignedToInput[]
    upsert?: ProjectTaskUpsertWithWhereUniqueWithoutAssignedToInput | ProjectTaskUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: ProjectTaskCreateManyAssignedToInputEnvelope
    set?: ProjectTaskWhereUniqueInput | ProjectTaskWhereUniqueInput[]
    disconnect?: ProjectTaskWhereUniqueInput | ProjectTaskWhereUniqueInput[]
    delete?: ProjectTaskWhereUniqueInput | ProjectTaskWhereUniqueInput[]
    connect?: ProjectTaskWhereUniqueInput | ProjectTaskWhereUniqueInput[]
    update?: ProjectTaskUpdateWithWhereUniqueWithoutAssignedToInput | ProjectTaskUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: ProjectTaskUpdateManyWithWhereWithoutAssignedToInput | ProjectTaskUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: ProjectTaskScalarWhereInput | ProjectTaskScalarWhereInput[]
  }

  export type ProjectRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectRoleCreateWithoutUserInput, ProjectRoleUncheckedCreateWithoutUserInput> | ProjectRoleCreateWithoutUserInput[] | ProjectRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectRoleCreateOrConnectWithoutUserInput | ProjectRoleCreateOrConnectWithoutUserInput[]
    upsert?: ProjectRoleUpsertWithWhereUniqueWithoutUserInput | ProjectRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectRoleCreateManyUserInputEnvelope
    set?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    disconnect?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    delete?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    connect?: ProjectRoleWhereUniqueInput | ProjectRoleWhereUniqueInput[]
    update?: ProjectRoleUpdateWithWhereUniqueWithoutUserInput | ProjectRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectRoleUpdateManyWithWhereWithoutUserInput | ProjectRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectRoleScalarWhereInput | ProjectRoleScalarWhereInput[]
  }

  export type TimeReportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeReportCreateWithoutUserInput, TimeReportUncheckedCreateWithoutUserInput> | TimeReportCreateWithoutUserInput[] | TimeReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeReportCreateOrConnectWithoutUserInput | TimeReportCreateOrConnectWithoutUserInput[]
    upsert?: TimeReportUpsertWithWhereUniqueWithoutUserInput | TimeReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeReportCreateManyUserInputEnvelope
    set?: TimeReportWhereUniqueInput | TimeReportWhereUniqueInput[]
    disconnect?: TimeReportWhereUniqueInput | TimeReportWhereUniqueInput[]
    delete?: TimeReportWhereUniqueInput | TimeReportWhereUniqueInput[]
    connect?: TimeReportWhereUniqueInput | TimeReportWhereUniqueInput[]
    update?: TimeReportUpdateWithWhereUniqueWithoutUserInput | TimeReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeReportUpdateManyWithWhereWithoutUserInput | TimeReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeReportScalarWhereInput | TimeReportScalarWhereInput[]
  }

  export type ProjectTaskUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<ProjectTaskCreateWithoutAssignedToInput, ProjectTaskUncheckedCreateWithoutAssignedToInput> | ProjectTaskCreateWithoutAssignedToInput[] | ProjectTaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: ProjectTaskCreateOrConnectWithoutAssignedToInput | ProjectTaskCreateOrConnectWithoutAssignedToInput[]
    upsert?: ProjectTaskUpsertWithWhereUniqueWithoutAssignedToInput | ProjectTaskUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: ProjectTaskCreateManyAssignedToInputEnvelope
    set?: ProjectTaskWhereUniqueInput | ProjectTaskWhereUniqueInput[]
    disconnect?: ProjectTaskWhereUniqueInput | ProjectTaskWhereUniqueInput[]
    delete?: ProjectTaskWhereUniqueInput | ProjectTaskWhereUniqueInput[]
    connect?: ProjectTaskWhereUniqueInput | ProjectTaskWhereUniqueInput[]
    update?: ProjectTaskUpdateWithWhereUniqueWithoutAssignedToInput | ProjectTaskUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: ProjectTaskUpdateManyWithWhereWithoutAssignedToInput | ProjectTaskUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: ProjectTaskScalarWhereInput | ProjectTaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTimeReportsInput = {
    create?: XOR<UserCreateWithoutTimeReportsInput, UserUncheckedCreateWithoutTimeReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeReportsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutTimeReportsInput = {
    create?: XOR<ProjectCreateWithoutTimeReportsInput, ProjectUncheckedCreateWithoutTimeReportsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTimeReportsInput
    connect?: ProjectWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutTimeReportsNestedInput = {
    create?: XOR<UserCreateWithoutTimeReportsInput, UserUncheckedCreateWithoutTimeReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeReportsInput
    upsert?: UserUpsertWithoutTimeReportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTimeReportsInput, UserUpdateWithoutTimeReportsInput>, UserUncheckedUpdateWithoutTimeReportsInput>
  }

  export type ProjectUpdateOneRequiredWithoutTimeReportsNestedInput = {
    create?: XOR<ProjectCreateWithoutTimeReportsInput, ProjectUncheckedCreateWithoutTimeReportsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTimeReportsInput
    upsert?: ProjectUpsertWithoutTimeReportsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTimeReportsInput, ProjectUpdateWithoutTimeReportsInput>, ProjectUncheckedUpdateWithoutTimeReportsInput>
  }

  export type ProjectCreateNestedOneWithoutTasksInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedTasksInput = {
    create?: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProjectUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    upsert?: ProjectUpsertWithoutTasksInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTasksInput, ProjectUpdateWithoutTasksInput>, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateOneWithoutAssignedTasksNestedInput = {
    create?: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput
    upsert?: UserUpsertWithoutAssignedTasksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedTasksInput, UserUpdateWithoutAssignedTasksInput>, UserUncheckedUpdateWithoutAssignedTasksInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StatusCreateWithoutProjectsInput = {
    name: string
  }

  export type StatusUncheckedCreateWithoutProjectsInput = {
    id?: number
    name: string
  }

  export type StatusCreateOrConnectWithoutProjectsInput = {
    where: StatusWhereUniqueInput
    create: XOR<StatusCreateWithoutProjectsInput, StatusUncheckedCreateWithoutProjectsInput>
  }

  export type CustomerCreateWithoutProjectsInput = {
    name: string
    orderer: string
    poNumber: string
    hourlyRate: number
    partialInvoice: boolean
    contactPersons?: ContactPersonCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutProjectsInput = {
    id?: number
    name: string
    orderer: string
    poNumber: string
    hourlyRate: number
    partialInvoice: boolean
    contactPersons?: ContactPersonUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutProjectsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutProjectsInput, CustomerUncheckedCreateWithoutProjectsInput>
  }

  export type ContactPersonCreateWithoutProjectsInput = {
    name: string
    email: string
    phone: string
    customer: CustomerCreateNestedOneWithoutContactPersonsInput
  }

  export type ContactPersonUncheckedCreateWithoutProjectsInput = {
    id?: number
    name: string
    email: string
    phone: string
    customerId: number
  }

  export type ContactPersonCreateOrConnectWithoutProjectsInput = {
    where: ContactPersonWhereUniqueInput
    create: XOR<ContactPersonCreateWithoutProjectsInput, ContactPersonUncheckedCreateWithoutProjectsInput>
  }

  export type TimeReportCreateWithoutProjectInput = {
    date: Date | string
    hoursWorked: number
    part?: string | null
    description?: string | null
    notes?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTimeReportsInput
  }

  export type TimeReportUncheckedCreateWithoutProjectInput = {
    id?: number
    date: Date | string
    hoursWorked: number
    part?: string | null
    description?: string | null
    notes?: string | null
    userId: number
    createdAt?: Date | string
  }

  export type TimeReportCreateOrConnectWithoutProjectInput = {
    where: TimeReportWhereUniqueInput
    create: XOR<TimeReportCreateWithoutProjectInput, TimeReportUncheckedCreateWithoutProjectInput>
  }

  export type TimeReportCreateManyProjectInputEnvelope = {
    data: TimeReportCreateManyProjectInput | TimeReportCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectTaskCreateWithoutProjectInput = {
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    isCompleted?: boolean
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo?: UserCreateNestedOneWithoutAssignedTasksInput
  }

  export type ProjectTaskUncheckedCreateWithoutProjectInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    isCompleted?: boolean
    dueDate?: Date | string | null
    assignedToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectTaskCreateOrConnectWithoutProjectInput = {
    where: ProjectTaskWhereUniqueInput
    create: XOR<ProjectTaskCreateWithoutProjectInput, ProjectTaskUncheckedCreateWithoutProjectInput>
  }

  export type ProjectTaskCreateManyProjectInputEnvelope = {
    data: ProjectTaskCreateManyProjectInput | ProjectTaskCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectRoleCreateWithoutProjectInput = {
    hoursQuoted: number
    user: UserCreateNestedOneWithoutProjectRolesInput
    role: ProjectRoleTypeCreateNestedOneWithoutProjectRolesInput
  }

  export type ProjectRoleUncheckedCreateWithoutProjectInput = {
    id?: number
    userId: number
    roleId: number
    hoursQuoted: number
  }

  export type ProjectRoleCreateOrConnectWithoutProjectInput = {
    where: ProjectRoleWhereUniqueInput
    create: XOR<ProjectRoleCreateWithoutProjectInput, ProjectRoleUncheckedCreateWithoutProjectInput>
  }

  export type ProjectRoleCreateManyProjectInputEnvelope = {
    data: ProjectRoleCreateManyProjectInput | ProjectRoleCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type StatusUpsertWithoutProjectsInput = {
    update: XOR<StatusUpdateWithoutProjectsInput, StatusUncheckedUpdateWithoutProjectsInput>
    create: XOR<StatusCreateWithoutProjectsInput, StatusUncheckedCreateWithoutProjectsInput>
    where?: StatusWhereInput
  }

  export type StatusUpdateToOneWithWhereWithoutProjectsInput = {
    where?: StatusWhereInput
    data: XOR<StatusUpdateWithoutProjectsInput, StatusUncheckedUpdateWithoutProjectsInput>
  }

  export type StatusUpdateWithoutProjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StatusUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUpsertWithoutProjectsInput = {
    update: XOR<CustomerUpdateWithoutProjectsInput, CustomerUncheckedUpdateWithoutProjectsInput>
    create: XOR<CustomerCreateWithoutProjectsInput, CustomerUncheckedCreateWithoutProjectsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutProjectsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutProjectsInput, CustomerUncheckedUpdateWithoutProjectsInput>
  }

  export type CustomerUpdateWithoutProjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    orderer?: StringFieldUpdateOperationsInput | string
    poNumber?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    partialInvoice?: BoolFieldUpdateOperationsInput | boolean
    contactPersons?: ContactPersonUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    orderer?: StringFieldUpdateOperationsInput | string
    poNumber?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    partialInvoice?: BoolFieldUpdateOperationsInput | boolean
    contactPersons?: ContactPersonUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type ContactPersonUpsertWithoutProjectsInput = {
    update: XOR<ContactPersonUpdateWithoutProjectsInput, ContactPersonUncheckedUpdateWithoutProjectsInput>
    create: XOR<ContactPersonCreateWithoutProjectsInput, ContactPersonUncheckedCreateWithoutProjectsInput>
    where?: ContactPersonWhereInput
  }

  export type ContactPersonUpdateToOneWithWhereWithoutProjectsInput = {
    where?: ContactPersonWhereInput
    data: XOR<ContactPersonUpdateWithoutProjectsInput, ContactPersonUncheckedUpdateWithoutProjectsInput>
  }

  export type ContactPersonUpdateWithoutProjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutContactPersonsNestedInput
  }

  export type ContactPersonUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    customerId?: IntFieldUpdateOperationsInput | number
  }

  export type TimeReportUpsertWithWhereUniqueWithoutProjectInput = {
    where: TimeReportWhereUniqueInput
    update: XOR<TimeReportUpdateWithoutProjectInput, TimeReportUncheckedUpdateWithoutProjectInput>
    create: XOR<TimeReportCreateWithoutProjectInput, TimeReportUncheckedCreateWithoutProjectInput>
  }

  export type TimeReportUpdateWithWhereUniqueWithoutProjectInput = {
    where: TimeReportWhereUniqueInput
    data: XOR<TimeReportUpdateWithoutProjectInput, TimeReportUncheckedUpdateWithoutProjectInput>
  }

  export type TimeReportUpdateManyWithWhereWithoutProjectInput = {
    where: TimeReportScalarWhereInput
    data: XOR<TimeReportUpdateManyMutationInput, TimeReportUncheckedUpdateManyWithoutProjectInput>
  }

  export type TimeReportScalarWhereInput = {
    AND?: TimeReportScalarWhereInput | TimeReportScalarWhereInput[]
    OR?: TimeReportScalarWhereInput[]
    NOT?: TimeReportScalarWhereInput | TimeReportScalarWhereInput[]
    id?: IntFilter<"TimeReport"> | number
    date?: DateTimeFilter<"TimeReport"> | Date | string
    hoursWorked?: FloatFilter<"TimeReport"> | number
    part?: StringNullableFilter<"TimeReport"> | string | null
    description?: StringNullableFilter<"TimeReport"> | string | null
    notes?: StringNullableFilter<"TimeReport"> | string | null
    userId?: IntFilter<"TimeReport"> | number
    projectId?: IntFilter<"TimeReport"> | number
    createdAt?: DateTimeFilter<"TimeReport"> | Date | string
  }

  export type ProjectTaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectTaskWhereUniqueInput
    update: XOR<ProjectTaskUpdateWithoutProjectInput, ProjectTaskUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectTaskCreateWithoutProjectInput, ProjectTaskUncheckedCreateWithoutProjectInput>
  }

  export type ProjectTaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectTaskWhereUniqueInput
    data: XOR<ProjectTaskUpdateWithoutProjectInput, ProjectTaskUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectTaskUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectTaskScalarWhereInput
    data: XOR<ProjectTaskUpdateManyMutationInput, ProjectTaskUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectTaskScalarWhereInput = {
    AND?: ProjectTaskScalarWhereInput | ProjectTaskScalarWhereInput[]
    OR?: ProjectTaskScalarWhereInput[]
    NOT?: ProjectTaskScalarWhereInput | ProjectTaskScalarWhereInput[]
    id?: IntFilter<"ProjectTask"> | number
    title?: StringFilter<"ProjectTask"> | string
    description?: StringNullableFilter<"ProjectTask"> | string | null
    status?: EnumTaskStatusFilter<"ProjectTask"> | $Enums.TaskStatus
    isCompleted?: BoolFilter<"ProjectTask"> | boolean
    dueDate?: DateTimeNullableFilter<"ProjectTask"> | Date | string | null
    projectId?: IntFilter<"ProjectTask"> | number
    assignedToId?: IntNullableFilter<"ProjectTask"> | number | null
    createdAt?: DateTimeFilter<"ProjectTask"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectTask"> | Date | string
  }

  export type ProjectRoleUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectRoleWhereUniqueInput
    update: XOR<ProjectRoleUpdateWithoutProjectInput, ProjectRoleUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectRoleCreateWithoutProjectInput, ProjectRoleUncheckedCreateWithoutProjectInput>
  }

  export type ProjectRoleUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectRoleWhereUniqueInput
    data: XOR<ProjectRoleUpdateWithoutProjectInput, ProjectRoleUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectRoleUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectRoleScalarWhereInput
    data: XOR<ProjectRoleUpdateManyMutationInput, ProjectRoleUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectRoleScalarWhereInput = {
    AND?: ProjectRoleScalarWhereInput | ProjectRoleScalarWhereInput[]
    OR?: ProjectRoleScalarWhereInput[]
    NOT?: ProjectRoleScalarWhereInput | ProjectRoleScalarWhereInput[]
    id?: IntFilter<"ProjectRole"> | number
    projectId?: IntFilter<"ProjectRole"> | number
    userId?: IntFilter<"ProjectRole"> | number
    roleId?: IntFilter<"ProjectRole"> | number
    hoursQuoted?: FloatFilter<"ProjectRole"> | number
  }

  export type ContactPersonCreateWithoutCustomerInput = {
    name: string
    email: string
    phone: string
    projects?: ProjectCreateNestedManyWithoutContactPersonInput
  }

  export type ContactPersonUncheckedCreateWithoutCustomerInput = {
    id?: number
    name: string
    email: string
    phone: string
    projects?: ProjectUncheckedCreateNestedManyWithoutContactPersonInput
  }

  export type ContactPersonCreateOrConnectWithoutCustomerInput = {
    where: ContactPersonWhereUniqueInput
    create: XOR<ContactPersonCreateWithoutCustomerInput, ContactPersonUncheckedCreateWithoutCustomerInput>
  }

  export type ContactPersonCreateManyCustomerInputEnvelope = {
    data: ContactPersonCreateManyCustomerInput | ContactPersonCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutCustomerInput = {
    name: string
    description: string
    startDate: Date | string
    deadline: Date | string
    hourLeft: number
    projectType: string
    totalCost?: number
    salesValue?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: StatusCreateNestedOneWithoutProjectsInput
    contactPerson?: ContactPersonCreateNestedOneWithoutProjectsInput
    timeReports?: TimeReportCreateNestedManyWithoutProjectInput
    tasks?: ProjectTaskCreateNestedManyWithoutProjectInput
    projectRoles?: ProjectRoleCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCustomerInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    deadline: Date | string
    hourLeft: number
    projectType: string
    totalCost?: number
    salesValue?: number
    statusId?: number | null
    contactPersonId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    timeReports?: TimeReportUncheckedCreateNestedManyWithoutProjectInput
    tasks?: ProjectTaskUncheckedCreateNestedManyWithoutProjectInput
    projectRoles?: ProjectRoleUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCustomerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCustomerInput, ProjectUncheckedCreateWithoutCustomerInput>
  }

  export type ProjectCreateManyCustomerInputEnvelope = {
    data: ProjectCreateManyCustomerInput | ProjectCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ContactPersonUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ContactPersonWhereUniqueInput
    update: XOR<ContactPersonUpdateWithoutCustomerInput, ContactPersonUncheckedUpdateWithoutCustomerInput>
    create: XOR<ContactPersonCreateWithoutCustomerInput, ContactPersonUncheckedCreateWithoutCustomerInput>
  }

  export type ContactPersonUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ContactPersonWhereUniqueInput
    data: XOR<ContactPersonUpdateWithoutCustomerInput, ContactPersonUncheckedUpdateWithoutCustomerInput>
  }

  export type ContactPersonUpdateManyWithWhereWithoutCustomerInput = {
    where: ContactPersonScalarWhereInput
    data: XOR<ContactPersonUpdateManyMutationInput, ContactPersonUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ContactPersonScalarWhereInput = {
    AND?: ContactPersonScalarWhereInput | ContactPersonScalarWhereInput[]
    OR?: ContactPersonScalarWhereInput[]
    NOT?: ContactPersonScalarWhereInput | ContactPersonScalarWhereInput[]
    id?: IntFilter<"ContactPerson"> | number
    name?: StringFilter<"ContactPerson"> | string
    email?: StringFilter<"ContactPerson"> | string
    phone?: StringFilter<"ContactPerson"> | string
    customerId?: IntFilter<"ContactPerson"> | number
  }

  export type ProjectUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutCustomerInput, ProjectUncheckedUpdateWithoutCustomerInput>
    create: XOR<ProjectCreateWithoutCustomerInput, ProjectUncheckedCreateWithoutCustomerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutCustomerInput, ProjectUncheckedUpdateWithoutCustomerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutCustomerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    startDate?: DateTimeFilter<"Project"> | Date | string
    deadline?: DateTimeFilter<"Project"> | Date | string
    hourLeft?: FloatFilter<"Project"> | number
    projectType?: StringFilter<"Project"> | string
    totalCost?: FloatFilter<"Project"> | number
    salesValue?: FloatFilter<"Project"> | number
    statusId?: IntNullableFilter<"Project"> | number | null
    customerId?: IntNullableFilter<"Project"> | number | null
    contactPersonId?: IntNullableFilter<"Project"> | number | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type CustomerCreateWithoutContactPersonsInput = {
    name: string
    orderer: string
    poNumber: string
    hourlyRate: number
    partialInvoice: boolean
    projects?: ProjectCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutContactPersonsInput = {
    id?: number
    name: string
    orderer: string
    poNumber: string
    hourlyRate: number
    partialInvoice: boolean
    projects?: ProjectUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutContactPersonsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutContactPersonsInput, CustomerUncheckedCreateWithoutContactPersonsInput>
  }

  export type ProjectCreateWithoutContactPersonInput = {
    name: string
    description: string
    startDate: Date | string
    deadline: Date | string
    hourLeft: number
    projectType: string
    totalCost?: number
    salesValue?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: StatusCreateNestedOneWithoutProjectsInput
    customer?: CustomerCreateNestedOneWithoutProjectsInput
    timeReports?: TimeReportCreateNestedManyWithoutProjectInput
    tasks?: ProjectTaskCreateNestedManyWithoutProjectInput
    projectRoles?: ProjectRoleCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutContactPersonInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    deadline: Date | string
    hourLeft: number
    projectType: string
    totalCost?: number
    salesValue?: number
    statusId?: number | null
    customerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    timeReports?: TimeReportUncheckedCreateNestedManyWithoutProjectInput
    tasks?: ProjectTaskUncheckedCreateNestedManyWithoutProjectInput
    projectRoles?: ProjectRoleUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutContactPersonInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutContactPersonInput, ProjectUncheckedCreateWithoutContactPersonInput>
  }

  export type ProjectCreateManyContactPersonInputEnvelope = {
    data: ProjectCreateManyContactPersonInput | ProjectCreateManyContactPersonInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutContactPersonsInput = {
    update: XOR<CustomerUpdateWithoutContactPersonsInput, CustomerUncheckedUpdateWithoutContactPersonsInput>
    create: XOR<CustomerCreateWithoutContactPersonsInput, CustomerUncheckedCreateWithoutContactPersonsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutContactPersonsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutContactPersonsInput, CustomerUncheckedUpdateWithoutContactPersonsInput>
  }

  export type CustomerUpdateWithoutContactPersonsInput = {
    name?: StringFieldUpdateOperationsInput | string
    orderer?: StringFieldUpdateOperationsInput | string
    poNumber?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    partialInvoice?: BoolFieldUpdateOperationsInput | boolean
    projects?: ProjectUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutContactPersonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    orderer?: StringFieldUpdateOperationsInput | string
    poNumber?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    partialInvoice?: BoolFieldUpdateOperationsInput | boolean
    projects?: ProjectUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type ProjectUpsertWithWhereUniqueWithoutContactPersonInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutContactPersonInput, ProjectUncheckedUpdateWithoutContactPersonInput>
    create: XOR<ProjectCreateWithoutContactPersonInput, ProjectUncheckedCreateWithoutContactPersonInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutContactPersonInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutContactPersonInput, ProjectUncheckedUpdateWithoutContactPersonInput>
  }

  export type ProjectUpdateManyWithWhereWithoutContactPersonInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutContactPersonInput>
  }

  export type ProjectCreateWithoutStatusInput = {
    name: string
    description: string
    startDate: Date | string
    deadline: Date | string
    hourLeft: number
    projectType: string
    totalCost?: number
    salesValue?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutProjectsInput
    contactPerson?: ContactPersonCreateNestedOneWithoutProjectsInput
    timeReports?: TimeReportCreateNestedManyWithoutProjectInput
    tasks?: ProjectTaskCreateNestedManyWithoutProjectInput
    projectRoles?: ProjectRoleCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutStatusInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    deadline: Date | string
    hourLeft: number
    projectType: string
    totalCost?: number
    salesValue?: number
    customerId?: number | null
    contactPersonId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    timeReports?: TimeReportUncheckedCreateNestedManyWithoutProjectInput
    tasks?: ProjectTaskUncheckedCreateNestedManyWithoutProjectInput
    projectRoles?: ProjectRoleUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutStatusInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutStatusInput, ProjectUncheckedCreateWithoutStatusInput>
  }

  export type ProjectCreateManyStatusInputEnvelope = {
    data: ProjectCreateManyStatusInput | ProjectCreateManyStatusInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutStatusInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutStatusInput, ProjectUncheckedUpdateWithoutStatusInput>
    create: XOR<ProjectCreateWithoutStatusInput, ProjectUncheckedCreateWithoutStatusInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutStatusInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutStatusInput, ProjectUncheckedUpdateWithoutStatusInput>
  }

  export type ProjectUpdateManyWithWhereWithoutStatusInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutStatusInput>
  }

  export type ProjectRoleCreateWithoutRoleInput = {
    hoursQuoted: number
    project: ProjectCreateNestedOneWithoutProjectRolesInput
    user: UserCreateNestedOneWithoutProjectRolesInput
  }

  export type ProjectRoleUncheckedCreateWithoutRoleInput = {
    id?: number
    projectId: number
    userId: number
    hoursQuoted: number
  }

  export type ProjectRoleCreateOrConnectWithoutRoleInput = {
    where: ProjectRoleWhereUniqueInput
    create: XOR<ProjectRoleCreateWithoutRoleInput, ProjectRoleUncheckedCreateWithoutRoleInput>
  }

  export type ProjectRoleCreateManyRoleInputEnvelope = {
    data: ProjectRoleCreateManyRoleInput | ProjectRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type ProjectRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: ProjectRoleWhereUniqueInput
    update: XOR<ProjectRoleUpdateWithoutRoleInput, ProjectRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<ProjectRoleCreateWithoutRoleInput, ProjectRoleUncheckedCreateWithoutRoleInput>
  }

  export type ProjectRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: ProjectRoleWhereUniqueInput
    data: XOR<ProjectRoleUpdateWithoutRoleInput, ProjectRoleUncheckedUpdateWithoutRoleInput>
  }

  export type ProjectRoleUpdateManyWithWhereWithoutRoleInput = {
    where: ProjectRoleScalarWhereInput
    data: XOR<ProjectRoleUpdateManyMutationInput, ProjectRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type ProjectCreateWithoutProjectRolesInput = {
    name: string
    description: string
    startDate: Date | string
    deadline: Date | string
    hourLeft: number
    projectType: string
    totalCost?: number
    salesValue?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: StatusCreateNestedOneWithoutProjectsInput
    customer?: CustomerCreateNestedOneWithoutProjectsInput
    contactPerson?: ContactPersonCreateNestedOneWithoutProjectsInput
    timeReports?: TimeReportCreateNestedManyWithoutProjectInput
    tasks?: ProjectTaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutProjectRolesInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    deadline: Date | string
    hourLeft: number
    projectType: string
    totalCost?: number
    salesValue?: number
    statusId?: number | null
    customerId?: number | null
    contactPersonId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    timeReports?: TimeReportUncheckedCreateNestedManyWithoutProjectInput
    tasks?: ProjectTaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProjectRolesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectRolesInput, ProjectUncheckedCreateWithoutProjectRolesInput>
  }

  export type UserCreateWithoutProjectRolesInput = {
    name: string
    email: string
    username: string
    password: string
    role: string
    timeReports?: TimeReportCreateNestedManyWithoutUserInput
    assignedTasks?: ProjectTaskCreateNestedManyWithoutAssignedToInput
  }

  export type UserUncheckedCreateWithoutProjectRolesInput = {
    id?: number
    name: string
    email: string
    username: string
    password: string
    role: string
    timeReports?: TimeReportUncheckedCreateNestedManyWithoutUserInput
    assignedTasks?: ProjectTaskUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type UserCreateOrConnectWithoutProjectRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectRolesInput, UserUncheckedCreateWithoutProjectRolesInput>
  }

  export type ProjectRoleTypeCreateWithoutProjectRolesInput = {
    name: string
  }

  export type ProjectRoleTypeUncheckedCreateWithoutProjectRolesInput = {
    id?: number
    name: string
  }

  export type ProjectRoleTypeCreateOrConnectWithoutProjectRolesInput = {
    where: ProjectRoleTypeWhereUniqueInput
    create: XOR<ProjectRoleTypeCreateWithoutProjectRolesInput, ProjectRoleTypeUncheckedCreateWithoutProjectRolesInput>
  }

  export type ProjectUpsertWithoutProjectRolesInput = {
    update: XOR<ProjectUpdateWithoutProjectRolesInput, ProjectUncheckedUpdateWithoutProjectRolesInput>
    create: XOR<ProjectCreateWithoutProjectRolesInput, ProjectUncheckedCreateWithoutProjectRolesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProjectRolesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProjectRolesInput, ProjectUncheckedUpdateWithoutProjectRolesInput>
  }

  export type ProjectUpdateWithoutProjectRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    hourLeft?: FloatFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StatusUpdateOneWithoutProjectsNestedInput
    customer?: CustomerUpdateOneWithoutProjectsNestedInput
    contactPerson?: ContactPersonUpdateOneWithoutProjectsNestedInput
    timeReports?: TimeReportUpdateManyWithoutProjectNestedInput
    tasks?: ProjectTaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProjectRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    hourLeft?: FloatFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    contactPersonId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeReports?: TimeReportUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: ProjectTaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutProjectRolesInput = {
    update: XOR<UserUpdateWithoutProjectRolesInput, UserUncheckedUpdateWithoutProjectRolesInput>
    create: XOR<UserCreateWithoutProjectRolesInput, UserUncheckedCreateWithoutProjectRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectRolesInput, UserUncheckedUpdateWithoutProjectRolesInput>
  }

  export type UserUpdateWithoutProjectRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    timeReports?: TimeReportUpdateManyWithoutUserNestedInput
    assignedTasks?: ProjectTaskUpdateManyWithoutAssignedToNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    timeReports?: TimeReportUncheckedUpdateManyWithoutUserNestedInput
    assignedTasks?: ProjectTaskUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type ProjectRoleTypeUpsertWithoutProjectRolesInput = {
    update: XOR<ProjectRoleTypeUpdateWithoutProjectRolesInput, ProjectRoleTypeUncheckedUpdateWithoutProjectRolesInput>
    create: XOR<ProjectRoleTypeCreateWithoutProjectRolesInput, ProjectRoleTypeUncheckedCreateWithoutProjectRolesInput>
    where?: ProjectRoleTypeWhereInput
  }

  export type ProjectRoleTypeUpdateToOneWithWhereWithoutProjectRolesInput = {
    where?: ProjectRoleTypeWhereInput
    data: XOR<ProjectRoleTypeUpdateWithoutProjectRolesInput, ProjectRoleTypeUncheckedUpdateWithoutProjectRolesInput>
  }

  export type ProjectRoleTypeUpdateWithoutProjectRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectRoleTypeUncheckedUpdateWithoutProjectRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectRoleCreateWithoutUserInput = {
    hoursQuoted: number
    project: ProjectCreateNestedOneWithoutProjectRolesInput
    role: ProjectRoleTypeCreateNestedOneWithoutProjectRolesInput
  }

  export type ProjectRoleUncheckedCreateWithoutUserInput = {
    id?: number
    projectId: number
    roleId: number
    hoursQuoted: number
  }

  export type ProjectRoleCreateOrConnectWithoutUserInput = {
    where: ProjectRoleWhereUniqueInput
    create: XOR<ProjectRoleCreateWithoutUserInput, ProjectRoleUncheckedCreateWithoutUserInput>
  }

  export type ProjectRoleCreateManyUserInputEnvelope = {
    data: ProjectRoleCreateManyUserInput | ProjectRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TimeReportCreateWithoutUserInput = {
    date: Date | string
    hoursWorked: number
    part?: string | null
    description?: string | null
    notes?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutTimeReportsInput
  }

  export type TimeReportUncheckedCreateWithoutUserInput = {
    id?: number
    date: Date | string
    hoursWorked: number
    part?: string | null
    description?: string | null
    notes?: string | null
    projectId: number
    createdAt?: Date | string
  }

  export type TimeReportCreateOrConnectWithoutUserInput = {
    where: TimeReportWhereUniqueInput
    create: XOR<TimeReportCreateWithoutUserInput, TimeReportUncheckedCreateWithoutUserInput>
  }

  export type TimeReportCreateManyUserInputEnvelope = {
    data: TimeReportCreateManyUserInput | TimeReportCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectTaskCreateWithoutAssignedToInput = {
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    isCompleted?: boolean
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutTasksInput
  }

  export type ProjectTaskUncheckedCreateWithoutAssignedToInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    isCompleted?: boolean
    dueDate?: Date | string | null
    projectId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectTaskCreateOrConnectWithoutAssignedToInput = {
    where: ProjectTaskWhereUniqueInput
    create: XOR<ProjectTaskCreateWithoutAssignedToInput, ProjectTaskUncheckedCreateWithoutAssignedToInput>
  }

  export type ProjectTaskCreateManyAssignedToInputEnvelope = {
    data: ProjectTaskCreateManyAssignedToInput | ProjectTaskCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type ProjectRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectRoleWhereUniqueInput
    update: XOR<ProjectRoleUpdateWithoutUserInput, ProjectRoleUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectRoleCreateWithoutUserInput, ProjectRoleUncheckedCreateWithoutUserInput>
  }

  export type ProjectRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectRoleWhereUniqueInput
    data: XOR<ProjectRoleUpdateWithoutUserInput, ProjectRoleUncheckedUpdateWithoutUserInput>
  }

  export type ProjectRoleUpdateManyWithWhereWithoutUserInput = {
    where: ProjectRoleScalarWhereInput
    data: XOR<ProjectRoleUpdateManyMutationInput, ProjectRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type TimeReportUpsertWithWhereUniqueWithoutUserInput = {
    where: TimeReportWhereUniqueInput
    update: XOR<TimeReportUpdateWithoutUserInput, TimeReportUncheckedUpdateWithoutUserInput>
    create: XOR<TimeReportCreateWithoutUserInput, TimeReportUncheckedCreateWithoutUserInput>
  }

  export type TimeReportUpdateWithWhereUniqueWithoutUserInput = {
    where: TimeReportWhereUniqueInput
    data: XOR<TimeReportUpdateWithoutUserInput, TimeReportUncheckedUpdateWithoutUserInput>
  }

  export type TimeReportUpdateManyWithWhereWithoutUserInput = {
    where: TimeReportScalarWhereInput
    data: XOR<TimeReportUpdateManyMutationInput, TimeReportUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectTaskUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: ProjectTaskWhereUniqueInput
    update: XOR<ProjectTaskUpdateWithoutAssignedToInput, ProjectTaskUncheckedUpdateWithoutAssignedToInput>
    create: XOR<ProjectTaskCreateWithoutAssignedToInput, ProjectTaskUncheckedCreateWithoutAssignedToInput>
  }

  export type ProjectTaskUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: ProjectTaskWhereUniqueInput
    data: XOR<ProjectTaskUpdateWithoutAssignedToInput, ProjectTaskUncheckedUpdateWithoutAssignedToInput>
  }

  export type ProjectTaskUpdateManyWithWhereWithoutAssignedToInput = {
    where: ProjectTaskScalarWhereInput
    data: XOR<ProjectTaskUpdateManyMutationInput, ProjectTaskUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type UserCreateWithoutTimeReportsInput = {
    name: string
    email: string
    username: string
    password: string
    role: string
    projectRoles?: ProjectRoleCreateNestedManyWithoutUserInput
    assignedTasks?: ProjectTaskCreateNestedManyWithoutAssignedToInput
  }

  export type UserUncheckedCreateWithoutTimeReportsInput = {
    id?: number
    name: string
    email: string
    username: string
    password: string
    role: string
    projectRoles?: ProjectRoleUncheckedCreateNestedManyWithoutUserInput
    assignedTasks?: ProjectTaskUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type UserCreateOrConnectWithoutTimeReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTimeReportsInput, UserUncheckedCreateWithoutTimeReportsInput>
  }

  export type ProjectCreateWithoutTimeReportsInput = {
    name: string
    description: string
    startDate: Date | string
    deadline: Date | string
    hourLeft: number
    projectType: string
    totalCost?: number
    salesValue?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: StatusCreateNestedOneWithoutProjectsInput
    customer?: CustomerCreateNestedOneWithoutProjectsInput
    contactPerson?: ContactPersonCreateNestedOneWithoutProjectsInput
    tasks?: ProjectTaskCreateNestedManyWithoutProjectInput
    projectRoles?: ProjectRoleCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTimeReportsInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    deadline: Date | string
    hourLeft: number
    projectType: string
    totalCost?: number
    salesValue?: number
    statusId?: number | null
    customerId?: number | null
    contactPersonId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: ProjectTaskUncheckedCreateNestedManyWithoutProjectInput
    projectRoles?: ProjectRoleUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTimeReportsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTimeReportsInput, ProjectUncheckedCreateWithoutTimeReportsInput>
  }

  export type UserUpsertWithoutTimeReportsInput = {
    update: XOR<UserUpdateWithoutTimeReportsInput, UserUncheckedUpdateWithoutTimeReportsInput>
    create: XOR<UserCreateWithoutTimeReportsInput, UserUncheckedCreateWithoutTimeReportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTimeReportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTimeReportsInput, UserUncheckedUpdateWithoutTimeReportsInput>
  }

  export type UserUpdateWithoutTimeReportsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    projectRoles?: ProjectRoleUpdateManyWithoutUserNestedInput
    assignedTasks?: ProjectTaskUpdateManyWithoutAssignedToNestedInput
  }

  export type UserUncheckedUpdateWithoutTimeReportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    projectRoles?: ProjectRoleUncheckedUpdateManyWithoutUserNestedInput
    assignedTasks?: ProjectTaskUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type ProjectUpsertWithoutTimeReportsInput = {
    update: XOR<ProjectUpdateWithoutTimeReportsInput, ProjectUncheckedUpdateWithoutTimeReportsInput>
    create: XOR<ProjectCreateWithoutTimeReportsInput, ProjectUncheckedCreateWithoutTimeReportsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTimeReportsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTimeReportsInput, ProjectUncheckedUpdateWithoutTimeReportsInput>
  }

  export type ProjectUpdateWithoutTimeReportsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    hourLeft?: FloatFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StatusUpdateOneWithoutProjectsNestedInput
    customer?: CustomerUpdateOneWithoutProjectsNestedInput
    contactPerson?: ContactPersonUpdateOneWithoutProjectsNestedInput
    tasks?: ProjectTaskUpdateManyWithoutProjectNestedInput
    projectRoles?: ProjectRoleUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTimeReportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    hourLeft?: FloatFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    contactPersonId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: ProjectTaskUncheckedUpdateManyWithoutProjectNestedInput
    projectRoles?: ProjectRoleUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutTasksInput = {
    name: string
    description: string
    startDate: Date | string
    deadline: Date | string
    hourLeft: number
    projectType: string
    totalCost?: number
    salesValue?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: StatusCreateNestedOneWithoutProjectsInput
    customer?: CustomerCreateNestedOneWithoutProjectsInput
    contactPerson?: ContactPersonCreateNestedOneWithoutProjectsInput
    timeReports?: TimeReportCreateNestedManyWithoutProjectInput
    projectRoles?: ProjectRoleCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTasksInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    deadline: Date | string
    hourLeft: number
    projectType: string
    totalCost?: number
    salesValue?: number
    statusId?: number | null
    customerId?: number | null
    contactPersonId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    timeReports?: TimeReportUncheckedCreateNestedManyWithoutProjectInput
    projectRoles?: ProjectRoleUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTasksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
  }

  export type UserCreateWithoutAssignedTasksInput = {
    name: string
    email: string
    username: string
    password: string
    role: string
    projectRoles?: ProjectRoleCreateNestedManyWithoutUserInput
    timeReports?: TimeReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssignedTasksInput = {
    id?: number
    name: string
    email: string
    username: string
    password: string
    role: string
    projectRoles?: ProjectRoleUncheckedCreateNestedManyWithoutUserInput
    timeReports?: TimeReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssignedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
  }

  export type ProjectUpsertWithoutTasksInput = {
    update: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTasksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    hourLeft?: FloatFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StatusUpdateOneWithoutProjectsNestedInput
    customer?: CustomerUpdateOneWithoutProjectsNestedInput
    contactPerson?: ContactPersonUpdateOneWithoutProjectsNestedInput
    timeReports?: TimeReportUpdateManyWithoutProjectNestedInput
    projectRoles?: ProjectRoleUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    hourLeft?: FloatFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    contactPersonId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeReports?: TimeReportUncheckedUpdateManyWithoutProjectNestedInput
    projectRoles?: ProjectRoleUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutAssignedTasksInput = {
    update: XOR<UserUpdateWithoutAssignedTasksInput, UserUncheckedUpdateWithoutAssignedTasksInput>
    create: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedTasksInput, UserUncheckedUpdateWithoutAssignedTasksInput>
  }

  export type UserUpdateWithoutAssignedTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    projectRoles?: ProjectRoleUpdateManyWithoutUserNestedInput
    timeReports?: TimeReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    projectRoles?: ProjectRoleUncheckedUpdateManyWithoutUserNestedInput
    timeReports?: TimeReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TimeReportCreateManyProjectInput = {
    id?: number
    date: Date | string
    hoursWorked: number
    part?: string | null
    description?: string | null
    notes?: string | null
    userId: number
    createdAt?: Date | string
  }

  export type ProjectTaskCreateManyProjectInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    isCompleted?: boolean
    dueDate?: Date | string | null
    assignedToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectRoleCreateManyProjectInput = {
    id?: number
    userId: number
    roleId: number
    hoursQuoted: number
  }

  export type TimeReportUpdateWithoutProjectInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    part?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimeReportsNestedInput
  }

  export type TimeReportUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    part?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeReportUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    part?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTaskUpdateWithoutProjectInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserUpdateOneWithoutAssignedTasksNestedInput
  }

  export type ProjectTaskUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTaskUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectRoleUpdateWithoutProjectInput = {
    hoursQuoted?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutProjectRolesNestedInput
    role?: ProjectRoleTypeUpdateOneRequiredWithoutProjectRolesNestedInput
  }

  export type ProjectRoleUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    hoursQuoted?: FloatFieldUpdateOperationsInput | number
  }

  export type ProjectRoleUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    hoursQuoted?: FloatFieldUpdateOperationsInput | number
  }

  export type ContactPersonCreateManyCustomerInput = {
    id?: number
    name: string
    email: string
    phone: string
  }

  export type ProjectCreateManyCustomerInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    deadline: Date | string
    hourLeft: number
    projectType: string
    totalCost?: number
    salesValue?: number
    statusId?: number | null
    contactPersonId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactPersonUpdateWithoutCustomerInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutContactPersonNestedInput
  }

  export type ContactPersonUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutContactPersonNestedInput
  }

  export type ContactPersonUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUpdateWithoutCustomerInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    hourLeft?: FloatFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StatusUpdateOneWithoutProjectsNestedInput
    contactPerson?: ContactPersonUpdateOneWithoutProjectsNestedInput
    timeReports?: TimeReportUpdateManyWithoutProjectNestedInput
    tasks?: ProjectTaskUpdateManyWithoutProjectNestedInput
    projectRoles?: ProjectRoleUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    hourLeft?: FloatFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    contactPersonId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeReports?: TimeReportUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: ProjectTaskUncheckedUpdateManyWithoutProjectNestedInput
    projectRoles?: ProjectRoleUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    hourLeft?: FloatFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    contactPersonId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyContactPersonInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    deadline: Date | string
    hourLeft: number
    projectType: string
    totalCost?: number
    salesValue?: number
    statusId?: number | null
    customerId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateWithoutContactPersonInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    hourLeft?: FloatFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StatusUpdateOneWithoutProjectsNestedInput
    customer?: CustomerUpdateOneWithoutProjectsNestedInput
    timeReports?: TimeReportUpdateManyWithoutProjectNestedInput
    tasks?: ProjectTaskUpdateManyWithoutProjectNestedInput
    projectRoles?: ProjectRoleUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutContactPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    hourLeft?: FloatFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeReports?: TimeReportUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: ProjectTaskUncheckedUpdateManyWithoutProjectNestedInput
    projectRoles?: ProjectRoleUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutContactPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    hourLeft?: FloatFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    statusId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyStatusInput = {
    id?: number
    name: string
    description: string
    startDate: Date | string
    deadline: Date | string
    hourLeft: number
    projectType: string
    totalCost?: number
    salesValue?: number
    customerId?: number | null
    contactPersonId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateWithoutStatusInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    hourLeft?: FloatFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutProjectsNestedInput
    contactPerson?: ContactPersonUpdateOneWithoutProjectsNestedInput
    timeReports?: TimeReportUpdateManyWithoutProjectNestedInput
    tasks?: ProjectTaskUpdateManyWithoutProjectNestedInput
    projectRoles?: ProjectRoleUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    hourLeft?: FloatFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    contactPersonId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeReports?: TimeReportUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: ProjectTaskUncheckedUpdateManyWithoutProjectNestedInput
    projectRoles?: ProjectRoleUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    hourLeft?: FloatFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    contactPersonId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectRoleCreateManyRoleInput = {
    id?: number
    projectId: number
    userId: number
    hoursQuoted: number
  }

  export type ProjectRoleUpdateWithoutRoleInput = {
    hoursQuoted?: FloatFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneRequiredWithoutProjectRolesNestedInput
    user?: UserUpdateOneRequiredWithoutProjectRolesNestedInput
  }

  export type ProjectRoleUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    hoursQuoted?: FloatFieldUpdateOperationsInput | number
  }

  export type ProjectRoleUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    hoursQuoted?: FloatFieldUpdateOperationsInput | number
  }

  export type ProjectRoleCreateManyUserInput = {
    id?: number
    projectId: number
    roleId: number
    hoursQuoted: number
  }

  export type TimeReportCreateManyUserInput = {
    id?: number
    date: Date | string
    hoursWorked: number
    part?: string | null
    description?: string | null
    notes?: string | null
    projectId: number
    createdAt?: Date | string
  }

  export type ProjectTaskCreateManyAssignedToInput = {
    id?: number
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    isCompleted?: boolean
    dueDate?: Date | string | null
    projectId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectRoleUpdateWithoutUserInput = {
    hoursQuoted?: FloatFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneRequiredWithoutProjectRolesNestedInput
    role?: ProjectRoleTypeUpdateOneRequiredWithoutProjectRolesNestedInput
  }

  export type ProjectRoleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    hoursQuoted?: FloatFieldUpdateOperationsInput | number
  }

  export type ProjectRoleUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    hoursQuoted?: FloatFieldUpdateOperationsInput | number
  }

  export type TimeReportUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    part?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTimeReportsNestedInput
  }

  export type TimeReportUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    part?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeReportUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    hoursWorked?: FloatFieldUpdateOperationsInput | number
    part?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTaskUpdateWithoutAssignedToInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
  }

  export type ProjectTaskUncheckedUpdateWithoutAssignedToInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTaskUncheckedUpdateManyWithoutAssignedToInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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