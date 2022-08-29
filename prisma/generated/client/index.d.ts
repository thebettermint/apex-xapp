
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
 * Model InvoiceItem
 * 
 */
export type InvoiceItem = {
  id: string
  number: number | null
  name: string | null
  description: string
  token: string | null
  amount: string
  invoiceId: string | null
}

/**
 * Model Invoice
 * 
 */
export type Invoice = {
  id: string
  invoiceId: string
  uuid: string
  email: string
  title: string | null
  from: Prisma.JsonValue | null
  number: string
  token: string | null
  issuer: string | null
  due: Date | null
  receiveto: string
  createdAt: Date
  updatedAt: Date
  senderId: string | null
}

/**
 * Model Account
 * 
 */
export type Account = {
  id: string
  address: string
  name: string | null
  description: string | null
  preferredToken: Prisma.JsonValue | null
  tag: string
  createdAt: Date
  updatedAt: Date
  walletId: string | null
}

/**
 * Model Wallet
 * 
 */
export type Wallet = {
  id: string
  key: string
  name: string | null
  description: string | null
  preferredToken: Prisma.JsonValue | null
  method: Prisma.JsonValue
  createdAt: Date
  updatedAt: Date
  userId: string | null
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  username: string
  email: string
  passwordHash: string
  lastName: string | null
  role: Role
  verificationToken: string | null
  verified: boolean
  acceptTerms: boolean
  resetToken: string | null
  passwordReset: Date | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Client
 * 
 */
export type Client = {
  id: string
  email: string
  name: string
  firstName: string | null
  lastName: string | null
  title: string | null
  company: string | null
  type: Type
  wallet: string | null
  tag: string | null
  description: string | null
  createdAt: Date
  updatedAt: Date
  replacedBy: string | null
  status: Status
  userId: string | null
  orgId: string | null
}

/**
 * Model Employee
 * 
 */
export type Employee = {
  id: string
  email: string
  name: string
  firstName: string | null
  lastName: string | null
  type: Type
  wallet: string | null
  tag: string | null
  description: string | null
  createdAt: Date
  updatedAt: Date
  replacedBy: string | null
  status: Status
  userId: string | null
  orgId: string | null
}

/**
 * Model Lead
 * 
 */
export type Lead = {
  id: string
  email: string
  name: string
  firstName: string | null
  lastName: string | null
  type: Type
  wallet: string | null
  tag: string | null
  description: string | null
  createdAt: Date
  updatedAt: Date
  replacedBy: string | null
  status: Status
  userId: string | null
  orgId: string | null
}

/**
 * Model Contractor
 * 
 */
export type Contractor = {
  id: string
  email: string
  name: string
  firstName: string | null
  lastName: string | null
  type: Type
  wallet: string | null
  tag: string | null
  description: string | null
  createdAt: Date
  updatedAt: Date
  replacedBy: string | null
  status: Status
  userId: string | null
  orgId: string | null
}

/**
 * Model Organization
 * 
 */
export type Organization = {
  id: string
  email: string
  name: string
  firstName: string | null
  lastName: string | null
  type: Type
  description: string | null
  createdAt: Date
  updatedAt: Date
  replacedBy: string | null
  status: Status
  ownerId: string | null
}

/**
 * Model Owner
 * 
 */
export type Owner = {
  id: string
  email: string
  name: string
  firstName: string | null
  lastName: string | null
  type: Type
  createdAt: Date
  updatedAt: Date
  replacedBy: string | null
  status: Status
  userId: string | null
}

/**
 * Model Profile
 * 
 */
export type Profile = {
  id: string
  identities: Prisma.JsonValue[]
  firstName: string | null
  lastName: string | null
  nickname: string | null
  picture: Buffer
  phone: string | null
  phoneVerified: boolean
  blocked: boolean
  lastIP: string | null
  lastLogin: string | null
  multifactor: Prisma.JsonValue[]
  loginCount: number
  createdAt: Date
  updatedAt: Date
  userId: string | null
}

/**
 * Model AuditEvent
 * 
 */
export type AuditEvent = {
  id: string
  url: string | null
  method: string | null
  params: Prisma.JsonValue | null
  query: Prisma.JsonValue | null
  createdAt: Date
  updatedAt: Date
  userId: string | null
}

/**
 * Model Refresh
 * 
 */
export type Refresh = {
  id: string
  userId: string
  token: string
  expiresAt: Date
  createdAt: Date
  createdByIp: string | null
  revoked: Date | null
  revokedByIp: string | null
  replacedByToken: string | null
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  PARTNER: 'PARTNER',
  DEV: 'DEV'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  ACTIVE: 'ACTIVE',
  PENDING: 'PENDING',
  DEPRECIATED: 'DEPRECIATED',
  REMOVED: 'REMOVED',
  WARNING: 'WARNING',
  REVOKED: 'REVOKED',
  BANNED: 'BANNED',
  SUSPENDED: 'SUSPENDED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Type: {
  CLIENT: 'CLIENT',
  VENDOR: 'VENDOR',
  LEAD: 'LEAD',
  EMPLOYEE: 'EMPLOYEE',
  CONTRACTOR: 'CONTRACTOR',
  OWNER: 'OWNER',
  ORGANIZATION: 'ORGANIZATION'
};

export type Type = (typeof Type)[keyof typeof Type]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more InvoiceItems
 * const invoiceItems = await prisma.invoiceItem.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more InvoiceItems
   * const invoiceItems = await prisma.invoiceItem.findMany()
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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): PrismaPromise<Prisma.JsonObject>;

      /**
   * `prisma.invoiceItem`: Exposes CRUD operations for the **InvoiceItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvoiceItems
    * const invoiceItems = await prisma.invoiceItem.findMany()
    * ```
    */
  get invoiceItem(): Prisma.InvoiceItemDelegate<GlobalReject>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<GlobalReject>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<GlobalReject>;

  /**
   * `prisma.wallet`: Exposes CRUD operations for the **Wallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallet.findMany()
    * ```
    */
  get wallet(): Prisma.WalletDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<GlobalReject>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<GlobalReject>;

  /**
   * `prisma.lead`: Exposes CRUD operations for the **Lead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.lead.findMany()
    * ```
    */
  get lead(): Prisma.LeadDelegate<GlobalReject>;

  /**
   * `prisma.contractor`: Exposes CRUD operations for the **Contractor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contractors
    * const contractors = await prisma.contractor.findMany()
    * ```
    */
  get contractor(): Prisma.ContractorDelegate<GlobalReject>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<GlobalReject>;

  /**
   * `prisma.owner`: Exposes CRUD operations for the **Owner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Owners
    * const owners = await prisma.owner.findMany()
    * ```
    */
  get owner(): Prisma.OwnerDelegate<GlobalReject>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<GlobalReject>;

  /**
   * `prisma.auditEvent`: Exposes CRUD operations for the **AuditEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditEvents
    * const auditEvents = await prisma.auditEvent.findMany()
    * ```
    */
  get auditEvent(): Prisma.AuditEventDelegate<GlobalReject>;

  /**
   * `prisma.refresh`: Exposes CRUD operations for the **Refresh** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Refreshes
    * const refreshes = await prisma.refresh.findMany()
    * ```
    */
  get refresh(): Prisma.RefreshDelegate<GlobalReject>;
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
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.2.1
   * Query Engine version: 2920a97877e12e055c1333079b8d19cee7f33826
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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  : T extends Buffer
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
    InvoiceItem: 'InvoiceItem',
    Invoice: 'Invoice',
    Account: 'Account',
    Wallet: 'Wallet',
    User: 'User',
    Client: 'Client',
    Employee: 'Employee',
    Lead: 'Lead',
    Contractor: 'Contractor',
    Organization: 'Organization',
    Owner: 'Owner',
    Profile: 'Profile',
    AuditEvent: 'AuditEvent',
    Refresh: 'Refresh'
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
   * These options are being passed in to the middleware as "params"
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

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type InvoiceCountOutputType
   */


  export type InvoiceCountOutputType = {
    Items: number
  }

  export type InvoiceCountOutputTypeSelect = {
    Items?: boolean
  }

  export type InvoiceCountOutputTypeGetPayload<
    S extends boolean | null | undefined | InvoiceCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? InvoiceCountOutputType
    : S extends undefined
    ? never
    : S extends InvoiceCountOutputTypeArgs
    ?'include' extends U
    ? InvoiceCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof InvoiceCountOutputType ? InvoiceCountOutputType[P] : never
  } 
    : InvoiceCountOutputType
  : InvoiceCountOutputType




  // Custom InputTypes

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     * 
    **/
    select?: InvoiceCountOutputTypeSelect | null
  }



  /**
   * Count Type WalletCountOutputType
   */


  export type WalletCountOutputType = {
    Accounts: number
  }

  export type WalletCountOutputTypeSelect = {
    Accounts?: boolean
  }

  export type WalletCountOutputTypeGetPayload<
    S extends boolean | null | undefined | WalletCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? WalletCountOutputType
    : S extends undefined
    ? never
    : S extends WalletCountOutputTypeArgs
    ?'include' extends U
    ? WalletCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof WalletCountOutputType ? WalletCountOutputType[P] : never
  } 
    : WalletCountOutputType
  : WalletCountOutputType




  // Custom InputTypes

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the WalletCountOutputType
     * 
    **/
    select?: WalletCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    Invoices: number
    Wallets: number
    AuditEvents: number
    Profile: number
    Refresh: number
    Owners: number
    Clients: number
    Employees: number
    Leads: number
    Contractors: number
  }

  export type UserCountOutputTypeSelect = {
    Invoices?: boolean
    Wallets?: boolean
    AuditEvents?: boolean
    Profile?: boolean
    Refresh?: boolean
    Owners?: boolean
    Clients?: boolean
    Employees?: boolean
    Leads?: boolean
    Contractors?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type OrganizationCountOutputType
   */


  export type OrganizationCountOutputType = {
    Clients: number
    Employees: number
    Leads: number
    Contractors: number
  }

  export type OrganizationCountOutputTypeSelect = {
    Clients?: boolean
    Employees?: boolean
    Leads?: boolean
    Contractors?: boolean
  }

  export type OrganizationCountOutputTypeGetPayload<
    S extends boolean | null | undefined | OrganizationCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? OrganizationCountOutputType
    : S extends undefined
    ? never
    : S extends OrganizationCountOutputTypeArgs
    ?'include' extends U
    ? OrganizationCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof OrganizationCountOutputType ? OrganizationCountOutputType[P] : never
  } 
    : OrganizationCountOutputType
  : OrganizationCountOutputType




  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     * 
    **/
    select?: OrganizationCountOutputTypeSelect | null
  }



  /**
   * Count Type OwnerCountOutputType
   */


  export type OwnerCountOutputType = {
    Organization: number
  }

  export type OwnerCountOutputTypeSelect = {
    Organization?: boolean
  }

  export type OwnerCountOutputTypeGetPayload<
    S extends boolean | null | undefined | OwnerCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? OwnerCountOutputType
    : S extends undefined
    ? never
    : S extends OwnerCountOutputTypeArgs
    ?'include' extends U
    ? OwnerCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof OwnerCountOutputType ? OwnerCountOutputType[P] : never
  } 
    : OwnerCountOutputType
  : OwnerCountOutputType




  // Custom InputTypes

  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the OwnerCountOutputType
     * 
    **/
    select?: OwnerCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model InvoiceItem
   */


  export type AggregateInvoiceItem = {
    _count: InvoiceItemCountAggregateOutputType | null
    _avg: InvoiceItemAvgAggregateOutputType | null
    _sum: InvoiceItemSumAggregateOutputType | null
    _min: InvoiceItemMinAggregateOutputType | null
    _max: InvoiceItemMaxAggregateOutputType | null
  }

  export type InvoiceItemAvgAggregateOutputType = {
    number: number | null
  }

  export type InvoiceItemSumAggregateOutputType = {
    number: number | null
  }

  export type InvoiceItemMinAggregateOutputType = {
    id: string | null
    number: number | null
    name: string | null
    description: string | null
    token: string | null
    amount: string | null
    invoiceId: string | null
  }

  export type InvoiceItemMaxAggregateOutputType = {
    id: string | null
    number: number | null
    name: string | null
    description: string | null
    token: string | null
    amount: string | null
    invoiceId: string | null
  }

  export type InvoiceItemCountAggregateOutputType = {
    id: number
    number: number
    name: number
    description: number
    token: number
    amount: number
    invoiceId: number
    _all: number
  }


  export type InvoiceItemAvgAggregateInputType = {
    number?: true
  }

  export type InvoiceItemSumAggregateInputType = {
    number?: true
  }

  export type InvoiceItemMinAggregateInputType = {
    id?: true
    number?: true
    name?: true
    description?: true
    token?: true
    amount?: true
    invoiceId?: true
  }

  export type InvoiceItemMaxAggregateInputType = {
    id?: true
    number?: true
    name?: true
    description?: true
    token?: true
    amount?: true
    invoiceId?: true
  }

  export type InvoiceItemCountAggregateInputType = {
    id?: true
    number?: true
    name?: true
    description?: true
    token?: true
    amount?: true
    invoiceId?: true
    _all?: true
  }

  export type InvoiceItemAggregateArgs = {
    /**
     * Filter which InvoiceItem to aggregate.
     * 
    **/
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     * 
    **/
    orderBy?: Enumerable<InvoiceItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvoiceItems
    **/
    _count?: true | InvoiceItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceItemMaxAggregateInputType
  }

  export type GetInvoiceItemAggregateType<T extends InvoiceItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoiceItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoiceItem[P]>
      : GetScalarType<T[P], AggregateInvoiceItem[P]>
  }




  export type InvoiceItemGroupByArgs = {
    where?: InvoiceItemWhereInput
    orderBy?: Enumerable<InvoiceItemOrderByWithAggregationInput>
    by: Array<InvoiceItemScalarFieldEnum>
    having?: InvoiceItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceItemCountAggregateInputType | true
    _avg?: InvoiceItemAvgAggregateInputType
    _sum?: InvoiceItemSumAggregateInputType
    _min?: InvoiceItemMinAggregateInputType
    _max?: InvoiceItemMaxAggregateInputType
  }


  export type InvoiceItemGroupByOutputType = {
    id: string
    number: number | null
    name: string | null
    description: string
    token: string | null
    amount: string
    invoiceId: string | null
    _count: InvoiceItemCountAggregateOutputType | null
    _avg: InvoiceItemAvgAggregateOutputType | null
    _sum: InvoiceItemSumAggregateOutputType | null
    _min: InvoiceItemMinAggregateOutputType | null
    _max: InvoiceItemMaxAggregateOutputType | null
  }

  type GetInvoiceItemGroupByPayload<T extends InvoiceItemGroupByArgs> = PrismaPromise<
    Array<
      PickArray<InvoiceItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceItemGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceItemGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceItemSelect = {
    id?: boolean
    number?: boolean
    name?: boolean
    description?: boolean
    token?: boolean
    amount?: boolean
    Invoice?: boolean | InvoiceArgs
    invoiceId?: boolean
  }

  export type InvoiceItemInclude = {
    Invoice?: boolean | InvoiceArgs
  }

  export type InvoiceItemGetPayload<
    S extends boolean | null | undefined | InvoiceItemArgs,
    U = keyof S
      > = S extends true
        ? InvoiceItem
    : S extends undefined
    ? never
    : S extends InvoiceItemArgs | InvoiceItemFindManyArgs
    ?'include' extends U
    ? InvoiceItem  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Invoice' ? InvoiceGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Invoice' ? InvoiceGetPayload<S['select'][P]> | null :  P extends keyof InvoiceItem ? InvoiceItem[P] : never
  } 
    : InvoiceItem
  : InvoiceItem


  type InvoiceItemCountArgs = Merge<
    Omit<InvoiceItemFindManyArgs, 'select' | 'include'> & {
      select?: InvoiceItemCountAggregateInputType | true
    }
  >

  export interface InvoiceItemDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one InvoiceItem that matches the filter.
     * @param {InvoiceItemFindUniqueArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InvoiceItemFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, InvoiceItemFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'InvoiceItem'> extends True ? CheckSelect<T, Prisma__InvoiceItemClient<InvoiceItem>, Prisma__InvoiceItemClient<InvoiceItemGetPayload<T>>> : CheckSelect<T, Prisma__InvoiceItemClient<InvoiceItem | null >, Prisma__InvoiceItemClient<InvoiceItemGetPayload<T> | null >>

    /**
     * Find the first InvoiceItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemFindFirstArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InvoiceItemFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, InvoiceItemFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'InvoiceItem'> extends True ? CheckSelect<T, Prisma__InvoiceItemClient<InvoiceItem>, Prisma__InvoiceItemClient<InvoiceItemGetPayload<T>>> : CheckSelect<T, Prisma__InvoiceItemClient<InvoiceItem | null >, Prisma__InvoiceItemClient<InvoiceItemGetPayload<T> | null >>

    /**
     * Find zero or more InvoiceItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvoiceItems
     * const invoiceItems = await prisma.invoiceItem.findMany()
     * 
     * // Get first 10 InvoiceItems
     * const invoiceItems = await prisma.invoiceItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceItemWithIdOnly = await prisma.invoiceItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InvoiceItemFindManyArgs>(
      args?: SelectSubset<T, InvoiceItemFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<InvoiceItem>>, PrismaPromise<Array<InvoiceItemGetPayload<T>>>>

    /**
     * Create a InvoiceItem.
     * @param {InvoiceItemCreateArgs} args - Arguments to create a InvoiceItem.
     * @example
     * // Create one InvoiceItem
     * const InvoiceItem = await prisma.invoiceItem.create({
     *   data: {
     *     // ... data to create a InvoiceItem
     *   }
     * })
     * 
    **/
    create<T extends InvoiceItemCreateArgs>(
      args: SelectSubset<T, InvoiceItemCreateArgs>
    ): CheckSelect<T, Prisma__InvoiceItemClient<InvoiceItem>, Prisma__InvoiceItemClient<InvoiceItemGetPayload<T>>>

    /**
     * Create many InvoiceItems.
     *     @param {InvoiceItemCreateManyArgs} args - Arguments to create many InvoiceItems.
     *     @example
     *     // Create many InvoiceItems
     *     const invoiceItem = await prisma.invoiceItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InvoiceItemCreateManyArgs>(
      args?: SelectSubset<T, InvoiceItemCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a InvoiceItem.
     * @param {InvoiceItemDeleteArgs} args - Arguments to delete one InvoiceItem.
     * @example
     * // Delete one InvoiceItem
     * const InvoiceItem = await prisma.invoiceItem.delete({
     *   where: {
     *     // ... filter to delete one InvoiceItem
     *   }
     * })
     * 
    **/
    delete<T extends InvoiceItemDeleteArgs>(
      args: SelectSubset<T, InvoiceItemDeleteArgs>
    ): CheckSelect<T, Prisma__InvoiceItemClient<InvoiceItem>, Prisma__InvoiceItemClient<InvoiceItemGetPayload<T>>>

    /**
     * Update one InvoiceItem.
     * @param {InvoiceItemUpdateArgs} args - Arguments to update one InvoiceItem.
     * @example
     * // Update one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InvoiceItemUpdateArgs>(
      args: SelectSubset<T, InvoiceItemUpdateArgs>
    ): CheckSelect<T, Prisma__InvoiceItemClient<InvoiceItem>, Prisma__InvoiceItemClient<InvoiceItemGetPayload<T>>>

    /**
     * Delete zero or more InvoiceItems.
     * @param {InvoiceItemDeleteManyArgs} args - Arguments to filter InvoiceItems to delete.
     * @example
     * // Delete a few InvoiceItems
     * const { count } = await prisma.invoiceItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InvoiceItemDeleteManyArgs>(
      args?: SelectSubset<T, InvoiceItemDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InvoiceItemUpdateManyArgs>(
      args: SelectSubset<T, InvoiceItemUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one InvoiceItem.
     * @param {InvoiceItemUpsertArgs} args - Arguments to update or create a InvoiceItem.
     * @example
     * // Update or create a InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.upsert({
     *   create: {
     *     // ... data to create a InvoiceItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvoiceItem we want to update
     *   }
     * })
    **/
    upsert<T extends InvoiceItemUpsertArgs>(
      args: SelectSubset<T, InvoiceItemUpsertArgs>
    ): CheckSelect<T, Prisma__InvoiceItemClient<InvoiceItem>, Prisma__InvoiceItemClient<InvoiceItemGetPayload<T>>>

    /**
     * Find zero or more InvoiceItems that matches the filter.
     * @param {InvoiceItemFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const invoiceItem = await prisma.invoiceItem.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: InvoiceItemFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a InvoiceItem.
     * @param {InvoiceItemAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const invoiceItem = await prisma.invoiceItem.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: InvoiceItemAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one InvoiceItem that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {InvoiceItemFindUniqueOrThrowArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InvoiceItemFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, InvoiceItemFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__InvoiceItemClient<InvoiceItem>, Prisma__InvoiceItemClient<InvoiceItemGetPayload<T>>>

    /**
     * Find the first InvoiceItem that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemFindFirstOrThrowArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InvoiceItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InvoiceItemFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__InvoiceItemClient<InvoiceItem>, Prisma__InvoiceItemClient<InvoiceItemGetPayload<T>>>

    /**
     * Count the number of InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemCountArgs} args - Arguments to filter InvoiceItems to count.
     * @example
     * // Count the number of InvoiceItems
     * const count = await prisma.invoiceItem.count({
     *   where: {
     *     // ... the filter for the InvoiceItems we want to count
     *   }
     * })
    **/
    count<T extends InvoiceItemCountArgs>(
      args?: Subset<T, InvoiceItemCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvoiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceItemAggregateArgs>(args: Subset<T, InvoiceItemAggregateArgs>): PrismaPromise<GetInvoiceItemAggregateType<T>>

    /**
     * Group by InvoiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemGroupByArgs} args - Group by arguments.
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
      T extends InvoiceItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceItemGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceItemGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvoiceItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__InvoiceItemClient<T> implements PrismaPromise<T> {
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

    Invoice<T extends InvoiceArgs = {}>(args?: Subset<T, InvoiceArgs>): CheckSelect<T, Prisma__InvoiceClient<Invoice | null >, Prisma__InvoiceClient<InvoiceGetPayload<T> | null >>;

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
   * InvoiceItem base type for findUnique actions
   */
  export type InvoiceItemFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     * 
    **/
    select?: InvoiceItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvoiceItemInclude | null
    /**
     * Filter, which InvoiceItem to fetch.
     * 
    **/
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem: findUnique
   */
  export interface InvoiceItemFindUniqueArgs extends InvoiceItemFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * InvoiceItem base type for findFirst actions
   */
  export type InvoiceItemFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     * 
    **/
    select?: InvoiceItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvoiceItemInclude | null
    /**
     * Filter, which InvoiceItem to fetch.
     * 
    **/
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     * 
    **/
    orderBy?: Enumerable<InvoiceItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceItems.
     * 
    **/
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceItems.
     * 
    **/
    distinct?: Enumerable<InvoiceItemScalarFieldEnum>
  }

  /**
   * InvoiceItem: findFirst
   */
  export interface InvoiceItemFindFirstArgs extends InvoiceItemFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * InvoiceItem findMany
   */
  export type InvoiceItemFindManyArgs = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     * 
    **/
    select?: InvoiceItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvoiceItemInclude | null
    /**
     * Filter, which InvoiceItems to fetch.
     * 
    **/
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     * 
    **/
    orderBy?: Enumerable<InvoiceItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvoiceItems.
     * 
    **/
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     * 
    **/
    skip?: number
    distinct?: Enumerable<InvoiceItemScalarFieldEnum>
  }


  /**
   * InvoiceItem create
   */
  export type InvoiceItemCreateArgs = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     * 
    **/
    select?: InvoiceItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvoiceItemInclude | null
    /**
     * The data needed to create a InvoiceItem.
     * 
    **/
    data: XOR<InvoiceItemCreateInput, InvoiceItemUncheckedCreateInput>
  }


  /**
   * InvoiceItem createMany
   */
  export type InvoiceItemCreateManyArgs = {
    /**
     * The data used to create many InvoiceItems.
     * 
    **/
    data: Enumerable<InvoiceItemCreateManyInput>
  }


  /**
   * InvoiceItem update
   */
  export type InvoiceItemUpdateArgs = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     * 
    **/
    select?: InvoiceItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvoiceItemInclude | null
    /**
     * The data needed to update a InvoiceItem.
     * 
    **/
    data: XOR<InvoiceItemUpdateInput, InvoiceItemUncheckedUpdateInput>
    /**
     * Choose, which InvoiceItem to update.
     * 
    **/
    where: InvoiceItemWhereUniqueInput
  }


  /**
   * InvoiceItem updateMany
   */
  export type InvoiceItemUpdateManyArgs = {
    /**
     * The data used to update InvoiceItems.
     * 
    **/
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceItems to update
     * 
    **/
    where?: InvoiceItemWhereInput
  }


  /**
   * InvoiceItem upsert
   */
  export type InvoiceItemUpsertArgs = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     * 
    **/
    select?: InvoiceItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvoiceItemInclude | null
    /**
     * The filter to search for the InvoiceItem to update in case it exists.
     * 
    **/
    where: InvoiceItemWhereUniqueInput
    /**
     * In case the InvoiceItem found by the `where` argument doesn't exist, create a new InvoiceItem with this data.
     * 
    **/
    create: XOR<InvoiceItemCreateInput, InvoiceItemUncheckedCreateInput>
    /**
     * In case the InvoiceItem was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<InvoiceItemUpdateInput, InvoiceItemUncheckedUpdateInput>
  }


  /**
   * InvoiceItem delete
   */
  export type InvoiceItemDeleteArgs = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     * 
    **/
    select?: InvoiceItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvoiceItemInclude | null
    /**
     * Filter which InvoiceItem to delete.
     * 
    **/
    where: InvoiceItemWhereUniqueInput
  }


  /**
   * InvoiceItem deleteMany
   */
  export type InvoiceItemDeleteManyArgs = {
    /**
     * Filter which InvoiceItems to delete
     * 
    **/
    where?: InvoiceItemWhereInput
  }


  /**
   * InvoiceItem findRaw
   */
  export type InvoiceItemFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * InvoiceItem aggregateRaw
   */
  export type InvoiceItemAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * InvoiceItem: findUniqueOrThrow
   */
  export type InvoiceItemFindUniqueOrThrowArgs = InvoiceItemFindUniqueArgsBase
      

  /**
   * InvoiceItem: findFirstOrThrow
   */
  export type InvoiceItemFindFirstOrThrowArgs = InvoiceItemFindFirstArgsBase
      

  /**
   * InvoiceItem without action
   */
  export type InvoiceItemArgs = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     * 
    **/
    select?: InvoiceItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvoiceItemInclude | null
  }



  /**
   * Model Invoice
   */


  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    uuid: string | null
    email: string | null
    title: string | null
    number: string | null
    token: string | null
    issuer: string | null
    due: Date | null
    receiveto: string | null
    createdAt: Date | null
    updatedAt: Date | null
    senderId: string | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    uuid: string | null
    email: string | null
    title: string | null
    number: string | null
    token: string | null
    issuer: string | null
    due: Date | null
    receiveto: string | null
    createdAt: Date | null
    updatedAt: Date | null
    senderId: string | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    invoiceId: number
    uuid: number
    email: number
    title: number
    from: number
    number: number
    token: number
    issuer: number
    due: number
    receiveto: number
    createdAt: number
    updatedAt: number
    senderId: number
    _all: number
  }


  export type InvoiceMinAggregateInputType = {
    id?: true
    invoiceId?: true
    uuid?: true
    email?: true
    title?: true
    number?: true
    token?: true
    issuer?: true
    due?: true
    receiveto?: true
    createdAt?: true
    updatedAt?: true
    senderId?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    invoiceId?: true
    uuid?: true
    email?: true
    title?: true
    number?: true
    token?: true
    issuer?: true
    due?: true
    receiveto?: true
    createdAt?: true
    updatedAt?: true
    senderId?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    invoiceId?: true
    uuid?: true
    email?: true
    title?: true
    from?: true
    number?: true
    token?: true
    issuer?: true
    due?: true
    receiveto?: true
    createdAt?: true
    updatedAt?: true
    senderId?: true
    _all?: true
  }

  export type InvoiceAggregateArgs = {
    /**
     * Filter which Invoice to aggregate.
     * 
    **/
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     * 
    **/
    orderBy?: Enumerable<InvoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs = {
    where?: InvoiceWhereInput
    orderBy?: Enumerable<InvoiceOrderByWithAggregationInput>
    by: Array<InvoiceScalarFieldEnum>
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }


  export type InvoiceGroupByOutputType = {
    id: string
    invoiceId: string
    uuid: string
    email: string
    title: string | null
    from: JsonValue | null
    number: string
    token: string | null
    issuer: string | null
    due: Date | null
    receiveto: string
    createdAt: Date
    updatedAt: Date
    senderId: string | null
    _count: InvoiceCountAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = PrismaPromise<
    Array<
      PickArray<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect = {
    id?: boolean
    invoiceId?: boolean
    uuid?: boolean
    email?: boolean
    title?: boolean
    from?: boolean
    number?: boolean
    token?: boolean
    issuer?: boolean
    due?: boolean
    receiveto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Items?: boolean | InvoiceItemFindManyArgs
    sender?: boolean | UserArgs
    senderId?: boolean
    _count?: boolean | InvoiceCountOutputTypeArgs
  }

  export type InvoiceInclude = {
    Items?: boolean | InvoiceItemFindManyArgs
    sender?: boolean | UserArgs
    _count?: boolean | InvoiceCountOutputTypeArgs
  }

  export type InvoiceGetPayload<
    S extends boolean | null | undefined | InvoiceArgs,
    U = keyof S
      > = S extends true
        ? Invoice
    : S extends undefined
    ? never
    : S extends InvoiceArgs | InvoiceFindManyArgs
    ?'include' extends U
    ? Invoice  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Items' ? Array < InvoiceItemGetPayload<S['include'][P]>>  :
        P extends 'sender' ? UserGetPayload<S['include'][P]> | null :
        P extends '_count' ? InvoiceCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Items' ? Array < InvoiceItemGetPayload<S['select'][P]>>  :
        P extends 'sender' ? UserGetPayload<S['select'][P]> | null :
        P extends '_count' ? InvoiceCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Invoice ? Invoice[P] : never
  } 
    : Invoice
  : Invoice


  type InvoiceCountArgs = Merge<
    Omit<InvoiceFindManyArgs, 'select' | 'include'> & {
      select?: InvoiceCountAggregateInputType | true
    }
  >

  export interface InvoiceDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InvoiceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, InvoiceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Invoice'> extends True ? CheckSelect<T, Prisma__InvoiceClient<Invoice>, Prisma__InvoiceClient<InvoiceGetPayload<T>>> : CheckSelect<T, Prisma__InvoiceClient<Invoice | null >, Prisma__InvoiceClient<InvoiceGetPayload<T> | null >>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InvoiceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, InvoiceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Invoice'> extends True ? CheckSelect<T, Prisma__InvoiceClient<Invoice>, Prisma__InvoiceClient<InvoiceGetPayload<T>>> : CheckSelect<T, Prisma__InvoiceClient<Invoice | null >, Prisma__InvoiceClient<InvoiceGetPayload<T> | null >>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InvoiceFindManyArgs>(
      args?: SelectSubset<T, InvoiceFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Invoice>>, PrismaPromise<Array<InvoiceGetPayload<T>>>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
    **/
    create<T extends InvoiceCreateArgs>(
      args: SelectSubset<T, InvoiceCreateArgs>
    ): CheckSelect<T, Prisma__InvoiceClient<Invoice>, Prisma__InvoiceClient<InvoiceGetPayload<T>>>

    /**
     * Create many Invoices.
     *     @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     *     @example
     *     // Create many Invoices
     *     const invoice = await prisma.invoice.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InvoiceCreateManyArgs>(
      args?: SelectSubset<T, InvoiceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
    **/
    delete<T extends InvoiceDeleteArgs>(
      args: SelectSubset<T, InvoiceDeleteArgs>
    ): CheckSelect<T, Prisma__InvoiceClient<Invoice>, Prisma__InvoiceClient<InvoiceGetPayload<T>>>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InvoiceUpdateArgs>(
      args: SelectSubset<T, InvoiceUpdateArgs>
    ): CheckSelect<T, Prisma__InvoiceClient<Invoice>, Prisma__InvoiceClient<InvoiceGetPayload<T>>>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InvoiceDeleteManyArgs>(
      args?: SelectSubset<T, InvoiceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InvoiceUpdateManyArgs>(
      args: SelectSubset<T, InvoiceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
    **/
    upsert<T extends InvoiceUpsertArgs>(
      args: SelectSubset<T, InvoiceUpsertArgs>
    ): CheckSelect<T, Prisma__InvoiceClient<Invoice>, Prisma__InvoiceClient<InvoiceGetPayload<T>>>

    /**
     * Find zero or more Invoices that matches the filter.
     * @param {InvoiceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const invoice = await prisma.invoice.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: InvoiceFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Invoice.
     * @param {InvoiceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const invoice = await prisma.invoice.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: InvoiceAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Invoice that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, InvoiceFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__InvoiceClient<Invoice>, Prisma__InvoiceClient<InvoiceGetPayload<T>>>

    /**
     * Find the first Invoice that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__InvoiceClient<Invoice>, Prisma__InvoiceClient<InvoiceGetPayload<T>>>

    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
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
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__InvoiceClient<T> implements PrismaPromise<T> {
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

    Items<T extends InvoiceItemFindManyArgs = {}>(args?: Subset<T, InvoiceItemFindManyArgs>): CheckSelect<T, PrismaPromise<Array<InvoiceItem>>, PrismaPromise<Array<InvoiceItemGetPayload<T>>>>;

    sender<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

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
   * Invoice base type for findUnique actions
   */
  export type InvoiceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Invoice
     * 
    **/
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvoiceInclude | null
    /**
     * Filter, which Invoice to fetch.
     * 
    **/
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice: findUnique
   */
  export interface InvoiceFindUniqueArgs extends InvoiceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Invoice base type for findFirst actions
   */
  export type InvoiceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Invoice
     * 
    **/
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvoiceInclude | null
    /**
     * Filter, which Invoice to fetch.
     * 
    **/
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     * 
    **/
    orderBy?: Enumerable<InvoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     * 
    **/
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     * 
    **/
    distinct?: Enumerable<InvoiceScalarFieldEnum>
  }

  /**
   * Invoice: findFirst
   */
  export interface InvoiceFindFirstArgs extends InvoiceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Invoice
     * 
    **/
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvoiceInclude | null
    /**
     * Filter, which Invoices to fetch.
     * 
    **/
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     * 
    **/
    orderBy?: Enumerable<InvoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     * 
    **/
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     * 
    **/
    skip?: number
    distinct?: Enumerable<InvoiceScalarFieldEnum>
  }


  /**
   * Invoice create
   */
  export type InvoiceCreateArgs = {
    /**
     * Select specific fields to fetch from the Invoice
     * 
    **/
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvoiceInclude | null
    /**
     * The data needed to create a Invoice.
     * 
    **/
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }


  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs = {
    /**
     * The data used to create many Invoices.
     * 
    **/
    data: Enumerable<InvoiceCreateManyInput>
  }


  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Invoice
     * 
    **/
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvoiceInclude | null
    /**
     * The data needed to update a Invoice.
     * 
    **/
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     * 
    **/
    where: InvoiceWhereUniqueInput
  }


  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs = {
    /**
     * The data used to update Invoices.
     * 
    **/
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     * 
    **/
    where?: InvoiceWhereInput
  }


  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Invoice
     * 
    **/
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvoiceInclude | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     * 
    **/
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     * 
    **/
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }


  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Invoice
     * 
    **/
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvoiceInclude | null
    /**
     * Filter which Invoice to delete.
     * 
    **/
    where: InvoiceWhereUniqueInput
  }


  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs = {
    /**
     * Filter which Invoices to delete
     * 
    **/
    where?: InvoiceWhereInput
  }


  /**
   * Invoice findRaw
   */
  export type InvoiceFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Invoice aggregateRaw
   */
  export type InvoiceAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Invoice: findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs = InvoiceFindUniqueArgsBase
      

  /**
   * Invoice: findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs = InvoiceFindFirstArgsBase
      

  /**
   * Invoice without action
   */
  export type InvoiceArgs = {
    /**
     * Select specific fields to fetch from the Invoice
     * 
    **/
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvoiceInclude | null
  }



  /**
   * Model Account
   */


  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    address: string | null
    name: string | null
    description: string | null
    tag: string | null
    createdAt: Date | null
    updatedAt: Date | null
    walletId: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    address: string | null
    name: string | null
    description: string | null
    tag: string | null
    createdAt: Date | null
    updatedAt: Date | null
    walletId: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    address: number
    name: number
    description: number
    preferredToken: number
    tag: number
    createdAt: number
    updatedAt: number
    walletId: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    address?: true
    name?: true
    description?: true
    tag?: true
    createdAt?: true
    updatedAt?: true
    walletId?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    address?: true
    name?: true
    description?: true
    tag?: true
    createdAt?: true
    updatedAt?: true
    walletId?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    address?: true
    name?: true
    description?: true
    preferredToken?: true
    tag?: true
    createdAt?: true
    updatedAt?: true
    walletId?: true
    _all?: true
  }

  export type AccountAggregateArgs = {
    /**
     * Filter which Account to aggregate.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs = {
    where?: AccountWhereInput
    orderBy?: Enumerable<AccountOrderByWithAggregationInput>
    by: Array<AccountScalarFieldEnum>
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }


  export type AccountGroupByOutputType = {
    id: string
    address: string
    name: string | null
    description: string | null
    preferredToken: JsonValue | null
    tag: string
    createdAt: Date
    updatedAt: Date
    walletId: string | null
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect = {
    id?: boolean
    address?: boolean
    name?: boolean
    description?: boolean
    preferredToken?: boolean
    tag?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Wallet?: boolean | WalletArgs
    walletId?: boolean
  }

  export type AccountInclude = {
    Wallet?: boolean | WalletArgs
  }

  export type AccountGetPayload<
    S extends boolean | null | undefined | AccountArgs,
    U = keyof S
      > = S extends true
        ? Account
    : S extends undefined
    ? never
    : S extends AccountArgs | AccountFindManyArgs
    ?'include' extends U
    ? Account  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Wallet' ? WalletGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Wallet' ? WalletGetPayload<S['select'][P]> | null :  P extends keyof Account ? Account[P] : never
  } 
    : Account
  : Account


  type AccountCountArgs = Merge<
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }
  >

  export interface AccountDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AccountFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Account'> extends True ? CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>> : CheckSelect<T, Prisma__AccountClient<Account | null >, Prisma__AccountClient<AccountGetPayload<T> | null >>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AccountFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Account'> extends True ? CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>> : CheckSelect<T, Prisma__AccountClient<Account | null >, Prisma__AccountClient<AccountGetPayload<T> | null >>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs>(
      args?: SelectSubset<T, AccountFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Account>>, PrismaPromise<Array<AccountGetPayload<T>>>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs>(
      args: SelectSubset<T, AccountCreateArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs>(
      args?: SelectSubset<T, AccountCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs>(
      args: SelectSubset<T, AccountDeleteArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs>(
      args: SelectSubset<T, AccountUpdateArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs>(
      args?: SelectSubset<T, AccountDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs>(
      args: SelectSubset<T, AccountUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs>(
      args: SelectSubset<T, AccountUpsertArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Find zero or more Accounts that matches the filter.
     * @param {AccountFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const account = await prisma.account.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AccountFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Account.
     * @param {AccountAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const account = await prisma.account.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AccountAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Account that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Find the first Account that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccountClient<T> implements PrismaPromise<T> {
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

    Wallet<T extends WalletArgs = {}>(args?: Subset<T, WalletArgs>): CheckSelect<T, Prisma__WalletClient<Wallet | null >, Prisma__WalletClient<WalletGetPayload<T> | null >>;

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
   * Account base type for findUnique actions
   */
  export type AccountFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where: AccountWhereUniqueInput
  }

  /**
   * Account: findUnique
   */
  export interface AccountFindUniqueArgs extends AccountFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account base type for findFirst actions
   */
  export type AccountFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     * 
    **/
    distinct?: Enumerable<AccountScalarFieldEnum>
  }

  /**
   * Account: findFirst
   */
  export interface AccountFindFirstArgs extends AccountFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account findMany
   */
  export type AccountFindManyArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Accounts to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account create
   */
  export type AccountCreateArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The data needed to create a Account.
     * 
    **/
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs = {
    /**
     * The data used to create many Accounts.
     * 
    **/
    data: Enumerable<AccountCreateManyInput>
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The data needed to update a Account.
     * 
    **/
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs = {
    /**
     * The data used to update Accounts.
     * 
    **/
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     * 
    **/
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The filter to search for the Account to update in case it exists.
     * 
    **/
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     * 
    **/
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter which Account to delete.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs = {
    /**
     * Filter which Accounts to delete
     * 
    **/
    where?: AccountWhereInput
  }


  /**
   * Account findRaw
   */
  export type AccountFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Account aggregateRaw
   */
  export type AccountAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Account: findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs = AccountFindUniqueArgsBase
      

  /**
   * Account: findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs = AccountFindFirstArgsBase
      

  /**
   * Account without action
   */
  export type AccountArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
  }



  /**
   * Model Wallet
   */


  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  export type WalletMinAggregateOutputType = {
    id: string | null
    key: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type WalletMaxAggregateOutputType = {
    id: string | null
    key: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type WalletCountAggregateOutputType = {
    id: number
    key: number
    name: number
    description: number
    preferredToken: number
    method: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type WalletMinAggregateInputType = {
    id?: true
    key?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type WalletMaxAggregateInputType = {
    id?: true
    key?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type WalletCountAggregateInputType = {
    id?: true
    key?: true
    name?: true
    description?: true
    preferredToken?: true
    method?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type WalletAggregateArgs = {
    /**
     * Filter which Wallet to aggregate.
     * 
    **/
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     * 
    **/
    orderBy?: Enumerable<WalletOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wallets
    **/
    _count?: true | WalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletMaxAggregateInputType
  }

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>
  }




  export type WalletGroupByArgs = {
    where?: WalletWhereInput
    orderBy?: Enumerable<WalletOrderByWithAggregationInput>
    by: Array<WalletScalarFieldEnum>
    having?: WalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletCountAggregateInputType | true
    _min?: WalletMinAggregateInputType
    _max?: WalletMaxAggregateInputType
  }


  export type WalletGroupByOutputType = {
    id: string
    key: string
    name: string | null
    description: string | null
    preferredToken: JsonValue | null
    method: JsonValue
    createdAt: Date
    updatedAt: Date
    userId: string | null
    _count: WalletCountAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  type GetWalletGroupByPayload<T extends WalletGroupByArgs> = PrismaPromise<
    Array<
      PickArray<WalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletGroupByOutputType[P]>
            : GetScalarType<T[P], WalletGroupByOutputType[P]>
        }
      >
    >


  export type WalletSelect = {
    id?: boolean
    key?: boolean
    name?: boolean
    description?: boolean
    preferredToken?: boolean
    method?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Accounts?: boolean | AccountFindManyArgs
    User?: boolean | UserArgs
    userId?: boolean
    _count?: boolean | WalletCountOutputTypeArgs
  }

  export type WalletInclude = {
    Accounts?: boolean | AccountFindManyArgs
    User?: boolean | UserArgs
    _count?: boolean | WalletCountOutputTypeArgs
  }

  export type WalletGetPayload<
    S extends boolean | null | undefined | WalletArgs,
    U = keyof S
      > = S extends true
        ? Wallet
    : S extends undefined
    ? never
    : S extends WalletArgs | WalletFindManyArgs
    ?'include' extends U
    ? Wallet  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Accounts' ? Array < AccountGetPayload<S['include'][P]>>  :
        P extends 'User' ? UserGetPayload<S['include'][P]> | null :
        P extends '_count' ? WalletCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Accounts' ? Array < AccountGetPayload<S['select'][P]>>  :
        P extends 'User' ? UserGetPayload<S['select'][P]> | null :
        P extends '_count' ? WalletCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Wallet ? Wallet[P] : never
  } 
    : Wallet
  : Wallet


  type WalletCountArgs = Merge<
    Omit<WalletFindManyArgs, 'select' | 'include'> & {
      select?: WalletCountAggregateInputType | true
    }
  >

  export interface WalletDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Wallet that matches the filter.
     * @param {WalletFindUniqueArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WalletFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WalletFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Wallet'> extends True ? CheckSelect<T, Prisma__WalletClient<Wallet>, Prisma__WalletClient<WalletGetPayload<T>>> : CheckSelect<T, Prisma__WalletClient<Wallet | null >, Prisma__WalletClient<WalletGetPayload<T> | null >>

    /**
     * Find the first Wallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WalletFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WalletFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Wallet'> extends True ? CheckSelect<T, Prisma__WalletClient<Wallet>, Prisma__WalletClient<WalletGetPayload<T>>> : CheckSelect<T, Prisma__WalletClient<Wallet | null >, Prisma__WalletClient<WalletGetPayload<T> | null >>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallet.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletWithIdOnly = await prisma.wallet.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WalletFindManyArgs>(
      args?: SelectSubset<T, WalletFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Wallet>>, PrismaPromise<Array<WalletGetPayload<T>>>>

    /**
     * Create a Wallet.
     * @param {WalletCreateArgs} args - Arguments to create a Wallet.
     * @example
     * // Create one Wallet
     * const Wallet = await prisma.wallet.create({
     *   data: {
     *     // ... data to create a Wallet
     *   }
     * })
     * 
    **/
    create<T extends WalletCreateArgs>(
      args: SelectSubset<T, WalletCreateArgs>
    ): CheckSelect<T, Prisma__WalletClient<Wallet>, Prisma__WalletClient<WalletGetPayload<T>>>

    /**
     * Create many Wallets.
     *     @param {WalletCreateManyArgs} args - Arguments to create many Wallets.
     *     @example
     *     // Create many Wallets
     *     const wallet = await prisma.wallet.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WalletCreateManyArgs>(
      args?: SelectSubset<T, WalletCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Wallet.
     * @param {WalletDeleteArgs} args - Arguments to delete one Wallet.
     * @example
     * // Delete one Wallet
     * const Wallet = await prisma.wallet.delete({
     *   where: {
     *     // ... filter to delete one Wallet
     *   }
     * })
     * 
    **/
    delete<T extends WalletDeleteArgs>(
      args: SelectSubset<T, WalletDeleteArgs>
    ): CheckSelect<T, Prisma__WalletClient<Wallet>, Prisma__WalletClient<WalletGetPayload<T>>>

    /**
     * Update one Wallet.
     * @param {WalletUpdateArgs} args - Arguments to update one Wallet.
     * @example
     * // Update one Wallet
     * const wallet = await prisma.wallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WalletUpdateArgs>(
      args: SelectSubset<T, WalletUpdateArgs>
    ): CheckSelect<T, Prisma__WalletClient<Wallet>, Prisma__WalletClient<WalletGetPayload<T>>>

    /**
     * Delete zero or more Wallets.
     * @param {WalletDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WalletDeleteManyArgs>(
      args?: SelectSubset<T, WalletDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WalletUpdateManyArgs>(
      args: SelectSubset<T, WalletUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Wallet.
     * @param {WalletUpsertArgs} args - Arguments to update or create a Wallet.
     * @example
     * // Update or create a Wallet
     * const wallet = await prisma.wallet.upsert({
     *   create: {
     *     // ... data to create a Wallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet we want to update
     *   }
     * })
    **/
    upsert<T extends WalletUpsertArgs>(
      args: SelectSubset<T, WalletUpsertArgs>
    ): CheckSelect<T, Prisma__WalletClient<Wallet>, Prisma__WalletClient<WalletGetPayload<T>>>

    /**
     * Find zero or more Wallets that matches the filter.
     * @param {WalletFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const wallet = await prisma.wallet.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: WalletFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Wallet.
     * @param {WalletAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const wallet = await prisma.wallet.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: WalletAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Wallet that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {WalletFindUniqueOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WalletFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WalletFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__WalletClient<Wallet>, Prisma__WalletClient<WalletGetPayload<T>>>

    /**
     * Find the first Wallet that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WalletFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WalletFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__WalletClient<Wallet>, Prisma__WalletClient<WalletGetPayload<T>>>

    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallet.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends WalletCountArgs>(
      args?: Subset<T, WalletCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletAggregateArgs>(args: Subset<T, WalletAggregateArgs>): PrismaPromise<GetWalletAggregateType<T>>

    /**
     * Group by Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletGroupByArgs} args - Group by arguments.
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
      T extends WalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletGroupByArgs['orderBy'] }
        : { orderBy?: WalletGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WalletClient<T> implements PrismaPromise<T> {
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

    Accounts<T extends AccountFindManyArgs = {}>(args?: Subset<T, AccountFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Account>>, PrismaPromise<Array<AccountGetPayload<T>>>>;

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

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
   * Wallet base type for findUnique actions
   */
  export type WalletFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Wallet
     * 
    **/
    select?: WalletSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WalletInclude | null
    /**
     * Filter, which Wallet to fetch.
     * 
    **/
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet: findUnique
   */
  export interface WalletFindUniqueArgs extends WalletFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Wallet base type for findFirst actions
   */
  export type WalletFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Wallet
     * 
    **/
    select?: WalletSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WalletInclude | null
    /**
     * Filter, which Wallet to fetch.
     * 
    **/
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     * 
    **/
    orderBy?: Enumerable<WalletOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     * 
    **/
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     * 
    **/
    distinct?: Enumerable<WalletScalarFieldEnum>
  }

  /**
   * Wallet: findFirst
   */
  export interface WalletFindFirstArgs extends WalletFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Wallet findMany
   */
  export type WalletFindManyArgs = {
    /**
     * Select specific fields to fetch from the Wallet
     * 
    **/
    select?: WalletSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WalletInclude | null
    /**
     * Filter, which Wallets to fetch.
     * 
    **/
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     * 
    **/
    orderBy?: Enumerable<WalletOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wallets.
     * 
    **/
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     * 
    **/
    skip?: number
    distinct?: Enumerable<WalletScalarFieldEnum>
  }


  /**
   * Wallet create
   */
  export type WalletCreateArgs = {
    /**
     * Select specific fields to fetch from the Wallet
     * 
    **/
    select?: WalletSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WalletInclude | null
    /**
     * The data needed to create a Wallet.
     * 
    **/
    data: XOR<WalletCreateInput, WalletUncheckedCreateInput>
  }


  /**
   * Wallet createMany
   */
  export type WalletCreateManyArgs = {
    /**
     * The data used to create many Wallets.
     * 
    **/
    data: Enumerable<WalletCreateManyInput>
  }


  /**
   * Wallet update
   */
  export type WalletUpdateArgs = {
    /**
     * Select specific fields to fetch from the Wallet
     * 
    **/
    select?: WalletSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WalletInclude | null
    /**
     * The data needed to update a Wallet.
     * 
    **/
    data: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
    /**
     * Choose, which Wallet to update.
     * 
    **/
    where: WalletWhereUniqueInput
  }


  /**
   * Wallet updateMany
   */
  export type WalletUpdateManyArgs = {
    /**
     * The data used to update Wallets.
     * 
    **/
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     * 
    **/
    where?: WalletWhereInput
  }


  /**
   * Wallet upsert
   */
  export type WalletUpsertArgs = {
    /**
     * Select specific fields to fetch from the Wallet
     * 
    **/
    select?: WalletSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WalletInclude | null
    /**
     * The filter to search for the Wallet to update in case it exists.
     * 
    **/
    where: WalletWhereUniqueInput
    /**
     * In case the Wallet found by the `where` argument doesn't exist, create a new Wallet with this data.
     * 
    **/
    create: XOR<WalletCreateInput, WalletUncheckedCreateInput>
    /**
     * In case the Wallet was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
  }


  /**
   * Wallet delete
   */
  export type WalletDeleteArgs = {
    /**
     * Select specific fields to fetch from the Wallet
     * 
    **/
    select?: WalletSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WalletInclude | null
    /**
     * Filter which Wallet to delete.
     * 
    **/
    where: WalletWhereUniqueInput
  }


  /**
   * Wallet deleteMany
   */
  export type WalletDeleteManyArgs = {
    /**
     * Filter which Wallets to delete
     * 
    **/
    where?: WalletWhereInput
  }


  /**
   * Wallet findRaw
   */
  export type WalletFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Wallet aggregateRaw
   */
  export type WalletAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Wallet: findUniqueOrThrow
   */
  export type WalletFindUniqueOrThrowArgs = WalletFindUniqueArgsBase
      

  /**
   * Wallet: findFirstOrThrow
   */
  export type WalletFindFirstOrThrowArgs = WalletFindFirstArgsBase
      

  /**
   * Wallet without action
   */
  export type WalletArgs = {
    /**
     * Select specific fields to fetch from the Wallet
     * 
    **/
    select?: WalletSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WalletInclude | null
  }



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
    username: string | null
    email: string | null
    passwordHash: string | null
    lastName: string | null
    role: Role | null
    verificationToken: string | null
    verified: boolean | null
    acceptTerms: boolean | null
    resetToken: string | null
    passwordReset: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    lastName: string | null
    role: Role | null
    verificationToken: string | null
    verified: boolean | null
    acceptTerms: boolean | null
    resetToken: string | null
    passwordReset: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    passwordHash: number
    lastName: number
    role: number
    verificationToken: number
    verified: number
    acceptTerms: number
    resetToken: number
    passwordReset: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    lastName?: true
    role?: true
    verificationToken?: true
    verified?: true
    acceptTerms?: true
    resetToken?: true
    passwordReset?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    lastName?: true
    role?: true
    verificationToken?: true
    verified?: true
    acceptTerms?: true
    resetToken?: true
    passwordReset?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    lastName?: true
    role?: true
    verificationToken?: true
    verified?: true
    acceptTerms?: true
    resetToken?: true
    passwordReset?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
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




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    passwordHash: string
    lastName: string | null
    role: Role
    verificationToken: string | null
    verified: boolean
    acceptTerms: boolean
    resetToken: string | null
    passwordReset: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    lastName?: boolean
    role?: boolean
    verificationToken?: boolean
    verified?: boolean
    acceptTerms?: boolean
    resetToken?: boolean
    passwordReset?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Invoices?: boolean | InvoiceFindManyArgs
    Wallets?: boolean | WalletFindManyArgs
    AuditEvents?: boolean | AuditEventFindManyArgs
    Profile?: boolean | ProfileFindManyArgs
    Refresh?: boolean | RefreshFindManyArgs
    Owners?: boolean | OwnerFindManyArgs
    Clients?: boolean | ClientFindManyArgs
    Employees?: boolean | EmployeeFindManyArgs
    Leads?: boolean | LeadFindManyArgs
    Contractors?: boolean | ContractorFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    Invoices?: boolean | InvoiceFindManyArgs
    Wallets?: boolean | WalletFindManyArgs
    AuditEvents?: boolean | AuditEventFindManyArgs
    Profile?: boolean | ProfileFindManyArgs
    Refresh?: boolean | RefreshFindManyArgs
    Owners?: boolean | OwnerFindManyArgs
    Clients?: boolean | ClientFindManyArgs
    Employees?: boolean | EmployeeFindManyArgs
    Leads?: boolean | LeadFindManyArgs
    Contractors?: boolean | ContractorFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Invoices' ? Array < InvoiceGetPayload<S['include'][P]>>  :
        P extends 'Wallets' ? Array < WalletGetPayload<S['include'][P]>>  :
        P extends 'AuditEvents' ? Array < AuditEventGetPayload<S['include'][P]>>  :
        P extends 'Profile' ? Array < ProfileGetPayload<S['include'][P]>>  :
        P extends 'Refresh' ? Array < RefreshGetPayload<S['include'][P]>>  :
        P extends 'Owners' ? Array < OwnerGetPayload<S['include'][P]>>  :
        P extends 'Clients' ? Array < ClientGetPayload<S['include'][P]>>  :
        P extends 'Employees' ? Array < EmployeeGetPayload<S['include'][P]>>  :
        P extends 'Leads' ? Array < LeadGetPayload<S['include'][P]>>  :
        P extends 'Contractors' ? Array < ContractorGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Invoices' ? Array < InvoiceGetPayload<S['select'][P]>>  :
        P extends 'Wallets' ? Array < WalletGetPayload<S['select'][P]>>  :
        P extends 'AuditEvents' ? Array < AuditEventGetPayload<S['select'][P]>>  :
        P extends 'Profile' ? Array < ProfileGetPayload<S['select'][P]>>  :
        P extends 'Refresh' ? Array < RefreshGetPayload<S['select'][P]>>  :
        P extends 'Owners' ? Array < OwnerGetPayload<S['select'][P]>>  :
        P extends 'Clients' ? Array < ClientGetPayload<S['select'][P]>>  :
        P extends 'Employees' ? Array < EmployeeGetPayload<S['select'][P]>>  :
        P extends 'Leads' ? Array < LeadGetPayload<S['select'][P]>>  :
        P extends 'Contractors' ? Array < ContractorGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
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
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

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
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

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
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
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

    Invoices<T extends InvoiceFindManyArgs = {}>(args?: Subset<T, InvoiceFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Invoice>>, PrismaPromise<Array<InvoiceGetPayload<T>>>>;

    Wallets<T extends WalletFindManyArgs = {}>(args?: Subset<T, WalletFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Wallet>>, PrismaPromise<Array<WalletGetPayload<T>>>>;

    AuditEvents<T extends AuditEventFindManyArgs = {}>(args?: Subset<T, AuditEventFindManyArgs>): CheckSelect<T, PrismaPromise<Array<AuditEvent>>, PrismaPromise<Array<AuditEventGetPayload<T>>>>;

    Profile<T extends ProfileFindManyArgs = {}>(args?: Subset<T, ProfileFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Profile>>, PrismaPromise<Array<ProfileGetPayload<T>>>>;

    Refresh<T extends RefreshFindManyArgs = {}>(args?: Subset<T, RefreshFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Refresh>>, PrismaPromise<Array<RefreshGetPayload<T>>>>;

    Owners<T extends OwnerFindManyArgs = {}>(args?: Subset<T, OwnerFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Owner>>, PrismaPromise<Array<OwnerGetPayload<T>>>>;

    Clients<T extends ClientFindManyArgs = {}>(args?: Subset<T, ClientFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Client>>, PrismaPromise<Array<ClientGetPayload<T>>>>;

    Employees<T extends EmployeeFindManyArgs = {}>(args?: Subset<T, EmployeeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Employee>>, PrismaPromise<Array<EmployeeGetPayload<T>>>>;

    Leads<T extends LeadFindManyArgs = {}>(args?: Subset<T, LeadFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Lead>>, PrismaPromise<Array<LeadGetPayload<T>>>>;

    Contractors<T extends ContractorFindManyArgs = {}>(args?: Subset<T, ContractorFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Contractor>>, PrismaPromise<Array<ContractorGetPayload<T>>>>;

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
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Client
   */


  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    firstName: string | null
    lastName: string | null
    title: string | null
    company: string | null
    type: Type | null
    wallet: string | null
    tag: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    replacedBy: string | null
    status: Status | null
    userId: string | null
    orgId: string | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    firstName: string | null
    lastName: string | null
    title: string | null
    company: string | null
    type: Type | null
    wallet: string | null
    tag: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    replacedBy: string | null
    status: Status | null
    userId: string | null
    orgId: string | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    email: number
    name: number
    firstName: number
    lastName: number
    title: number
    company: number
    type: number
    wallet: number
    tag: number
    description: number
    createdAt: number
    updatedAt: number
    replacedBy: number
    status: number
    userId: number
    orgId: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    firstName?: true
    lastName?: true
    title?: true
    company?: true
    type?: true
    wallet?: true
    tag?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    replacedBy?: true
    status?: true
    userId?: true
    orgId?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    firstName?: true
    lastName?: true
    title?: true
    company?: true
    type?: true
    wallet?: true
    tag?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    replacedBy?: true
    status?: true
    userId?: true
    orgId?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    firstName?: true
    lastName?: true
    title?: true
    company?: true
    type?: true
    wallet?: true
    tag?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    replacedBy?: true
    status?: true
    userId?: true
    orgId?: true
    _all?: true
  }

  export type ClientAggregateArgs = {
    /**
     * Filter which Client to aggregate.
     * 
    **/
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     * 
    **/
    orderBy?: Enumerable<ClientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs = {
    where?: ClientWhereInput
    orderBy?: Enumerable<ClientOrderByWithAggregationInput>
    by: Array<ClientScalarFieldEnum>
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }


  export type ClientGroupByOutputType = {
    id: string
    email: string
    name: string
    firstName: string | null
    lastName: string | null
    title: string | null
    company: string | null
    type: Type
    wallet: string | null
    tag: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    replacedBy: string | null
    status: Status
    userId: string | null
    orgId: string | null
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
    firstName?: boolean
    lastName?: boolean
    title?: boolean
    company?: boolean
    type?: boolean
    wallet?: boolean
    tag?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    replacedBy?: boolean
    status?: boolean
    User?: boolean | UserArgs
    userId?: boolean
    Organization?: boolean | OrganizationArgs
    orgId?: boolean
  }

  export type ClientInclude = {
    User?: boolean | UserArgs
    Organization?: boolean | OrganizationArgs
  }

  export type ClientGetPayload<
    S extends boolean | null | undefined | ClientArgs,
    U = keyof S
      > = S extends true
        ? Client
    : S extends undefined
    ? never
    : S extends ClientArgs | ClientFindManyArgs
    ?'include' extends U
    ? Client  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> | null :
        P extends 'Organization' ? OrganizationGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> | null :
        P extends 'Organization' ? OrganizationGetPayload<S['select'][P]> | null :  P extends keyof Client ? Client[P] : never
  } 
    : Client
  : Client


  type ClientCountArgs = Merge<
    Omit<ClientFindManyArgs, 'select' | 'include'> & {
      select?: ClientCountAggregateInputType | true
    }
  >

  export interface ClientDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClientFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ClientFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Client'> extends True ? CheckSelect<T, Prisma__ClientClient<Client>, Prisma__ClientClient<ClientGetPayload<T>>> : CheckSelect<T, Prisma__ClientClient<Client | null >, Prisma__ClientClient<ClientGetPayload<T> | null >>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClientFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ClientFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Client'> extends True ? CheckSelect<T, Prisma__ClientClient<Client>, Prisma__ClientClient<ClientGetPayload<T>>> : CheckSelect<T, Prisma__ClientClient<Client | null >, Prisma__ClientClient<ClientGetPayload<T> | null >>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClientFindManyArgs>(
      args?: SelectSubset<T, ClientFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Client>>, PrismaPromise<Array<ClientGetPayload<T>>>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
    **/
    create<T extends ClientCreateArgs>(
      args: SelectSubset<T, ClientCreateArgs>
    ): CheckSelect<T, Prisma__ClientClient<Client>, Prisma__ClientClient<ClientGetPayload<T>>>

    /**
     * Create many Clients.
     *     @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     *     @example
     *     // Create many Clients
     *     const client = await prisma.client.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClientCreateManyArgs>(
      args?: SelectSubset<T, ClientCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
    **/
    delete<T extends ClientDeleteArgs>(
      args: SelectSubset<T, ClientDeleteArgs>
    ): CheckSelect<T, Prisma__ClientClient<Client>, Prisma__ClientClient<ClientGetPayload<T>>>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClientUpdateArgs>(
      args: SelectSubset<T, ClientUpdateArgs>
    ): CheckSelect<T, Prisma__ClientClient<Client>, Prisma__ClientClient<ClientGetPayload<T>>>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClientDeleteManyArgs>(
      args?: SelectSubset<T, ClientDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClientUpdateManyArgs>(
      args: SelectSubset<T, ClientUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
    **/
    upsert<T extends ClientUpsertArgs>(
      args: SelectSubset<T, ClientUpsertArgs>
    ): CheckSelect<T, Prisma__ClientClient<Client>, Prisma__ClientClient<ClientGetPayload<T>>>

    /**
     * Find zero or more Clients that matches the filter.
     * @param {ClientFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const client = await prisma.client.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ClientFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Client.
     * @param {ClientAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const client = await prisma.client.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ClientAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Client that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ClientFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ClientClient<Client>, Prisma__ClientClient<ClientGetPayload<T>>>

    /**
     * Find the first Client that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ClientFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ClientClient<Client>, Prisma__ClientClient<ClientGetPayload<T>>>

    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClientClient<T> implements PrismaPromise<T> {
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

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Organization<T extends OrganizationArgs = {}>(args?: Subset<T, OrganizationArgs>): CheckSelect<T, Prisma__OrganizationClient<Organization | null >, Prisma__OrganizationClient<OrganizationGetPayload<T> | null >>;

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
   * Client base type for findUnique actions
   */
  export type ClientFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Client
     * 
    **/
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientInclude | null
    /**
     * Filter, which Client to fetch.
     * 
    **/
    where: ClientWhereUniqueInput
  }

  /**
   * Client: findUnique
   */
  export interface ClientFindUniqueArgs extends ClientFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Client base type for findFirst actions
   */
  export type ClientFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Client
     * 
    **/
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientInclude | null
    /**
     * Filter, which Client to fetch.
     * 
    **/
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     * 
    **/
    orderBy?: Enumerable<ClientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     * 
    **/
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     * 
    **/
    distinct?: Enumerable<ClientScalarFieldEnum>
  }

  /**
   * Client: findFirst
   */
  export interface ClientFindFirstArgs extends ClientFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Client findMany
   */
  export type ClientFindManyArgs = {
    /**
     * Select specific fields to fetch from the Client
     * 
    **/
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientInclude | null
    /**
     * Filter, which Clients to fetch.
     * 
    **/
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     * 
    **/
    orderBy?: Enumerable<ClientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     * 
    **/
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ClientScalarFieldEnum>
  }


  /**
   * Client create
   */
  export type ClientCreateArgs = {
    /**
     * Select specific fields to fetch from the Client
     * 
    **/
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientInclude | null
    /**
     * The data needed to create a Client.
     * 
    **/
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }


  /**
   * Client createMany
   */
  export type ClientCreateManyArgs = {
    /**
     * The data used to create many Clients.
     * 
    **/
    data: Enumerable<ClientCreateManyInput>
  }


  /**
   * Client update
   */
  export type ClientUpdateArgs = {
    /**
     * Select specific fields to fetch from the Client
     * 
    **/
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientInclude | null
    /**
     * The data needed to update a Client.
     * 
    **/
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     * 
    **/
    where: ClientWhereUniqueInput
  }


  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs = {
    /**
     * The data used to update Clients.
     * 
    **/
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     * 
    **/
    where?: ClientWhereInput
  }


  /**
   * Client upsert
   */
  export type ClientUpsertArgs = {
    /**
     * Select specific fields to fetch from the Client
     * 
    **/
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientInclude | null
    /**
     * The filter to search for the Client to update in case it exists.
     * 
    **/
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     * 
    **/
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }


  /**
   * Client delete
   */
  export type ClientDeleteArgs = {
    /**
     * Select specific fields to fetch from the Client
     * 
    **/
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientInclude | null
    /**
     * Filter which Client to delete.
     * 
    **/
    where: ClientWhereUniqueInput
  }


  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs = {
    /**
     * Filter which Clients to delete
     * 
    **/
    where?: ClientWhereInput
  }


  /**
   * Client findRaw
   */
  export type ClientFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Client aggregateRaw
   */
  export type ClientAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Client: findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs = ClientFindUniqueArgsBase
      

  /**
   * Client: findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs = ClientFindFirstArgsBase
      

  /**
   * Client without action
   */
  export type ClientArgs = {
    /**
     * Select specific fields to fetch from the Client
     * 
    **/
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientInclude | null
  }



  /**
   * Model Employee
   */


  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    firstName: string | null
    lastName: string | null
    type: Type | null
    wallet: string | null
    tag: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    replacedBy: string | null
    status: Status | null
    userId: string | null
    orgId: string | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    firstName: string | null
    lastName: string | null
    type: Type | null
    wallet: string | null
    tag: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    replacedBy: string | null
    status: Status | null
    userId: string | null
    orgId: string | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    email: number
    name: number
    firstName: number
    lastName: number
    type: number
    wallet: number
    tag: number
    description: number
    createdAt: number
    updatedAt: number
    replacedBy: number
    status: number
    userId: number
    orgId: number
    _all: number
  }


  export type EmployeeMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    firstName?: true
    lastName?: true
    type?: true
    wallet?: true
    tag?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    replacedBy?: true
    status?: true
    userId?: true
    orgId?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    firstName?: true
    lastName?: true
    type?: true
    wallet?: true
    tag?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    replacedBy?: true
    status?: true
    userId?: true
    orgId?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    firstName?: true
    lastName?: true
    type?: true
    wallet?: true
    tag?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    replacedBy?: true
    status?: true
    userId?: true
    orgId?: true
    _all?: true
  }

  export type EmployeeAggregateArgs = {
    /**
     * Filter which Employee to aggregate.
     * 
    **/
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     * 
    **/
    orderBy?: Enumerable<EmployeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs = {
    where?: EmployeeWhereInput
    orderBy?: Enumerable<EmployeeOrderByWithAggregationInput>
    by: Array<EmployeeScalarFieldEnum>
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }


  export type EmployeeGroupByOutputType = {
    id: string
    email: string
    name: string
    firstName: string | null
    lastName: string | null
    type: Type
    wallet: string | null
    tag: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    replacedBy: string | null
    status: Status
    userId: string | null
    orgId: string | null
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
    firstName?: boolean
    lastName?: boolean
    type?: boolean
    wallet?: boolean
    tag?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    replacedBy?: boolean
    status?: boolean
    User?: boolean | UserArgs
    userId?: boolean
    Organization?: boolean | OrganizationArgs
    orgId?: boolean
  }

  export type EmployeeInclude = {
    User?: boolean | UserArgs
    Organization?: boolean | OrganizationArgs
  }

  export type EmployeeGetPayload<
    S extends boolean | null | undefined | EmployeeArgs,
    U = keyof S
      > = S extends true
        ? Employee
    : S extends undefined
    ? never
    : S extends EmployeeArgs | EmployeeFindManyArgs
    ?'include' extends U
    ? Employee  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> | null :
        P extends 'Organization' ? OrganizationGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> | null :
        P extends 'Organization' ? OrganizationGetPayload<S['select'][P]> | null :  P extends keyof Employee ? Employee[P] : never
  } 
    : Employee
  : Employee


  type EmployeeCountArgs = Merge<
    Omit<EmployeeFindManyArgs, 'select' | 'include'> & {
      select?: EmployeeCountAggregateInputType | true
    }
  >

  export interface EmployeeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmployeeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EmployeeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Employee'> extends True ? CheckSelect<T, Prisma__EmployeeClient<Employee>, Prisma__EmployeeClient<EmployeeGetPayload<T>>> : CheckSelect<T, Prisma__EmployeeClient<Employee | null >, Prisma__EmployeeClient<EmployeeGetPayload<T> | null >>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmployeeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EmployeeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Employee'> extends True ? CheckSelect<T, Prisma__EmployeeClient<Employee>, Prisma__EmployeeClient<EmployeeGetPayload<T>>> : CheckSelect<T, Prisma__EmployeeClient<Employee | null >, Prisma__EmployeeClient<EmployeeGetPayload<T> | null >>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EmployeeFindManyArgs>(
      args?: SelectSubset<T, EmployeeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Employee>>, PrismaPromise<Array<EmployeeGetPayload<T>>>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
    **/
    create<T extends EmployeeCreateArgs>(
      args: SelectSubset<T, EmployeeCreateArgs>
    ): CheckSelect<T, Prisma__EmployeeClient<Employee>, Prisma__EmployeeClient<EmployeeGetPayload<T>>>

    /**
     * Create many Employees.
     *     @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     *     @example
     *     // Create many Employees
     *     const employee = await prisma.employee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmployeeCreateManyArgs>(
      args?: SelectSubset<T, EmployeeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
    **/
    delete<T extends EmployeeDeleteArgs>(
      args: SelectSubset<T, EmployeeDeleteArgs>
    ): CheckSelect<T, Prisma__EmployeeClient<Employee>, Prisma__EmployeeClient<EmployeeGetPayload<T>>>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmployeeUpdateArgs>(
      args: SelectSubset<T, EmployeeUpdateArgs>
    ): CheckSelect<T, Prisma__EmployeeClient<Employee>, Prisma__EmployeeClient<EmployeeGetPayload<T>>>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmployeeDeleteManyArgs>(
      args?: SelectSubset<T, EmployeeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmployeeUpdateManyArgs>(
      args: SelectSubset<T, EmployeeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
    **/
    upsert<T extends EmployeeUpsertArgs>(
      args: SelectSubset<T, EmployeeUpsertArgs>
    ): CheckSelect<T, Prisma__EmployeeClient<Employee>, Prisma__EmployeeClient<EmployeeGetPayload<T>>>

    /**
     * Find zero or more Employees that matches the filter.
     * @param {EmployeeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const employee = await prisma.employee.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: EmployeeFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Employee.
     * @param {EmployeeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const employee = await prisma.employee.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: EmployeeAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Employee that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, EmployeeFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__EmployeeClient<Employee>, Prisma__EmployeeClient<EmployeeGetPayload<T>>>

    /**
     * Find the first Employee that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__EmployeeClient<Employee>, Prisma__EmployeeClient<EmployeeGetPayload<T>>>

    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EmployeeClient<T> implements PrismaPromise<T> {
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

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Organization<T extends OrganizationArgs = {}>(args?: Subset<T, OrganizationArgs>): CheckSelect<T, Prisma__OrganizationClient<Organization | null >, Prisma__OrganizationClient<OrganizationGetPayload<T> | null >>;

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
   * Employee base type for findUnique actions
   */
  export type EmployeeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Employee
     * 
    **/
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeInclude | null
    /**
     * Filter, which Employee to fetch.
     * 
    **/
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee: findUnique
   */
  export interface EmployeeFindUniqueArgs extends EmployeeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Employee base type for findFirst actions
   */
  export type EmployeeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Employee
     * 
    **/
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeInclude | null
    /**
     * Filter, which Employee to fetch.
     * 
    **/
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     * 
    **/
    orderBy?: Enumerable<EmployeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     * 
    **/
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     * 
    **/
    distinct?: Enumerable<EmployeeScalarFieldEnum>
  }

  /**
   * Employee: findFirst
   */
  export interface EmployeeFindFirstArgs extends EmployeeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Employee
     * 
    **/
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeInclude | null
    /**
     * Filter, which Employees to fetch.
     * 
    **/
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     * 
    **/
    orderBy?: Enumerable<EmployeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     * 
    **/
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EmployeeScalarFieldEnum>
  }


  /**
   * Employee create
   */
  export type EmployeeCreateArgs = {
    /**
     * Select specific fields to fetch from the Employee
     * 
    **/
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeInclude | null
    /**
     * The data needed to create a Employee.
     * 
    **/
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }


  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs = {
    /**
     * The data used to create many Employees.
     * 
    **/
    data: Enumerable<EmployeeCreateManyInput>
  }


  /**
   * Employee update
   */
  export type EmployeeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Employee
     * 
    **/
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeInclude | null
    /**
     * The data needed to update a Employee.
     * 
    **/
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     * 
    **/
    where: EmployeeWhereUniqueInput
  }


  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs = {
    /**
     * The data used to update Employees.
     * 
    **/
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     * 
    **/
    where?: EmployeeWhereInput
  }


  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Employee
     * 
    **/
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeInclude | null
    /**
     * The filter to search for the Employee to update in case it exists.
     * 
    **/
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     * 
    **/
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }


  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Employee
     * 
    **/
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeInclude | null
    /**
     * Filter which Employee to delete.
     * 
    **/
    where: EmployeeWhereUniqueInput
  }


  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs = {
    /**
     * Filter which Employees to delete
     * 
    **/
    where?: EmployeeWhereInput
  }


  /**
   * Employee findRaw
   */
  export type EmployeeFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Employee aggregateRaw
   */
  export type EmployeeAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Employee: findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs = EmployeeFindUniqueArgsBase
      

  /**
   * Employee: findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs = EmployeeFindFirstArgsBase
      

  /**
   * Employee without action
   */
  export type EmployeeArgs = {
    /**
     * Select specific fields to fetch from the Employee
     * 
    **/
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeInclude | null
  }



  /**
   * Model Lead
   */


  export type AggregateLead = {
    _count: LeadCountAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  export type LeadMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    firstName: string | null
    lastName: string | null
    type: Type | null
    wallet: string | null
    tag: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    replacedBy: string | null
    status: Status | null
    userId: string | null
    orgId: string | null
  }

  export type LeadMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    firstName: string | null
    lastName: string | null
    type: Type | null
    wallet: string | null
    tag: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    replacedBy: string | null
    status: Status | null
    userId: string | null
    orgId: string | null
  }

  export type LeadCountAggregateOutputType = {
    id: number
    email: number
    name: number
    firstName: number
    lastName: number
    type: number
    wallet: number
    tag: number
    description: number
    createdAt: number
    updatedAt: number
    replacedBy: number
    status: number
    userId: number
    orgId: number
    _all: number
  }


  export type LeadMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    firstName?: true
    lastName?: true
    type?: true
    wallet?: true
    tag?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    replacedBy?: true
    status?: true
    userId?: true
    orgId?: true
  }

  export type LeadMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    firstName?: true
    lastName?: true
    type?: true
    wallet?: true
    tag?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    replacedBy?: true
    status?: true
    userId?: true
    orgId?: true
  }

  export type LeadCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    firstName?: true
    lastName?: true
    type?: true
    wallet?: true
    tag?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    replacedBy?: true
    status?: true
    userId?: true
    orgId?: true
    _all?: true
  }

  export type LeadAggregateArgs = {
    /**
     * Filter which Lead to aggregate.
     * 
    **/
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     * 
    **/
    orderBy?: Enumerable<LeadOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leads
    **/
    _count?: true | LeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadMaxAggregateInputType
  }

  export type GetLeadAggregateType<T extends LeadAggregateArgs> = {
        [P in keyof T & keyof AggregateLead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLead[P]>
      : GetScalarType<T[P], AggregateLead[P]>
  }




  export type LeadGroupByArgs = {
    where?: LeadWhereInput
    orderBy?: Enumerable<LeadOrderByWithAggregationInput>
    by: Array<LeadScalarFieldEnum>
    having?: LeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadCountAggregateInputType | true
    _min?: LeadMinAggregateInputType
    _max?: LeadMaxAggregateInputType
  }


  export type LeadGroupByOutputType = {
    id: string
    email: string
    name: string
    firstName: string | null
    lastName: string | null
    type: Type
    wallet: string | null
    tag: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    replacedBy: string | null
    status: Status
    userId: string | null
    orgId: string | null
    _count: LeadCountAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  type GetLeadGroupByPayload<T extends LeadGroupByArgs> = PrismaPromise<
    Array<
      PickArray<LeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadGroupByOutputType[P]>
            : GetScalarType<T[P], LeadGroupByOutputType[P]>
        }
      >
    >


  export type LeadSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
    firstName?: boolean
    lastName?: boolean
    type?: boolean
    wallet?: boolean
    tag?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    replacedBy?: boolean
    status?: boolean
    User?: boolean | UserArgs
    userId?: boolean
    Organization?: boolean | OrganizationArgs
    orgId?: boolean
  }

  export type LeadInclude = {
    User?: boolean | UserArgs
    Organization?: boolean | OrganizationArgs
  }

  export type LeadGetPayload<
    S extends boolean | null | undefined | LeadArgs,
    U = keyof S
      > = S extends true
        ? Lead
    : S extends undefined
    ? never
    : S extends LeadArgs | LeadFindManyArgs
    ?'include' extends U
    ? Lead  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> | null :
        P extends 'Organization' ? OrganizationGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> | null :
        P extends 'Organization' ? OrganizationGetPayload<S['select'][P]> | null :  P extends keyof Lead ? Lead[P] : never
  } 
    : Lead
  : Lead


  type LeadCountArgs = Merge<
    Omit<LeadFindManyArgs, 'select' | 'include'> & {
      select?: LeadCountAggregateInputType | true
    }
  >

  export interface LeadDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Lead that matches the filter.
     * @param {LeadFindUniqueArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LeadFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LeadFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Lead'> extends True ? CheckSelect<T, Prisma__LeadClient<Lead>, Prisma__LeadClient<LeadGetPayload<T>>> : CheckSelect<T, Prisma__LeadClient<Lead | null >, Prisma__LeadClient<LeadGetPayload<T> | null >>

    /**
     * Find the first Lead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LeadFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LeadFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Lead'> extends True ? CheckSelect<T, Prisma__LeadClient<Lead>, Prisma__LeadClient<LeadGetPayload<T>>> : CheckSelect<T, Prisma__LeadClient<Lead | null >, Prisma__LeadClient<LeadGetPayload<T> | null >>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.lead.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.lead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadWithIdOnly = await prisma.lead.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LeadFindManyArgs>(
      args?: SelectSubset<T, LeadFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Lead>>, PrismaPromise<Array<LeadGetPayload<T>>>>

    /**
     * Create a Lead.
     * @param {LeadCreateArgs} args - Arguments to create a Lead.
     * @example
     * // Create one Lead
     * const Lead = await prisma.lead.create({
     *   data: {
     *     // ... data to create a Lead
     *   }
     * })
     * 
    **/
    create<T extends LeadCreateArgs>(
      args: SelectSubset<T, LeadCreateArgs>
    ): CheckSelect<T, Prisma__LeadClient<Lead>, Prisma__LeadClient<LeadGetPayload<T>>>

    /**
     * Create many Leads.
     *     @param {LeadCreateManyArgs} args - Arguments to create many Leads.
     *     @example
     *     // Create many Leads
     *     const lead = await prisma.lead.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LeadCreateManyArgs>(
      args?: SelectSubset<T, LeadCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Lead.
     * @param {LeadDeleteArgs} args - Arguments to delete one Lead.
     * @example
     * // Delete one Lead
     * const Lead = await prisma.lead.delete({
     *   where: {
     *     // ... filter to delete one Lead
     *   }
     * })
     * 
    **/
    delete<T extends LeadDeleteArgs>(
      args: SelectSubset<T, LeadDeleteArgs>
    ): CheckSelect<T, Prisma__LeadClient<Lead>, Prisma__LeadClient<LeadGetPayload<T>>>

    /**
     * Update one Lead.
     * @param {LeadUpdateArgs} args - Arguments to update one Lead.
     * @example
     * // Update one Lead
     * const lead = await prisma.lead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LeadUpdateArgs>(
      args: SelectSubset<T, LeadUpdateArgs>
    ): CheckSelect<T, Prisma__LeadClient<Lead>, Prisma__LeadClient<LeadGetPayload<T>>>

    /**
     * Delete zero or more Leads.
     * @param {LeadDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.lead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LeadDeleteManyArgs>(
      args?: SelectSubset<T, LeadDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LeadUpdateManyArgs>(
      args: SelectSubset<T, LeadUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Lead.
     * @param {LeadUpsertArgs} args - Arguments to update or create a Lead.
     * @example
     * // Update or create a Lead
     * const lead = await prisma.lead.upsert({
     *   create: {
     *     // ... data to create a Lead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lead we want to update
     *   }
     * })
    **/
    upsert<T extends LeadUpsertArgs>(
      args: SelectSubset<T, LeadUpsertArgs>
    ): CheckSelect<T, Prisma__LeadClient<Lead>, Prisma__LeadClient<LeadGetPayload<T>>>

    /**
     * Find zero or more Leads that matches the filter.
     * @param {LeadFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const lead = await prisma.lead.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: LeadFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Lead.
     * @param {LeadAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const lead = await prisma.lead.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: LeadAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Lead that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {LeadFindUniqueOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LeadFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LeadFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__LeadClient<Lead>, Prisma__LeadClient<LeadGetPayload<T>>>

    /**
     * Find the first Lead that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LeadFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LeadFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__LeadClient<Lead>, Prisma__LeadClient<LeadGetPayload<T>>>

    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.lead.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends LeadCountArgs>(
      args?: Subset<T, LeadCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeadAggregateArgs>(args: Subset<T, LeadAggregateArgs>): PrismaPromise<GetLeadAggregateType<T>>

    /**
     * Group by Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadGroupByArgs} args - Group by arguments.
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
      T extends LeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadGroupByArgs['orderBy'] }
        : { orderBy?: LeadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LeadClient<T> implements PrismaPromise<T> {
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

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Organization<T extends OrganizationArgs = {}>(args?: Subset<T, OrganizationArgs>): CheckSelect<T, Prisma__OrganizationClient<Organization | null >, Prisma__OrganizationClient<OrganizationGetPayload<T> | null >>;

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
   * Lead base type for findUnique actions
   */
  export type LeadFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Lead
     * 
    **/
    select?: LeadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LeadInclude | null
    /**
     * Filter, which Lead to fetch.
     * 
    **/
    where: LeadWhereUniqueInput
  }

  /**
   * Lead: findUnique
   */
  export interface LeadFindUniqueArgs extends LeadFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Lead base type for findFirst actions
   */
  export type LeadFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Lead
     * 
    **/
    select?: LeadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LeadInclude | null
    /**
     * Filter, which Lead to fetch.
     * 
    **/
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     * 
    **/
    orderBy?: Enumerable<LeadOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     * 
    **/
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     * 
    **/
    distinct?: Enumerable<LeadScalarFieldEnum>
  }

  /**
   * Lead: findFirst
   */
  export interface LeadFindFirstArgs extends LeadFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Lead findMany
   */
  export type LeadFindManyArgs = {
    /**
     * Select specific fields to fetch from the Lead
     * 
    **/
    select?: LeadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LeadInclude | null
    /**
     * Filter, which Leads to fetch.
     * 
    **/
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     * 
    **/
    orderBy?: Enumerable<LeadOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leads.
     * 
    **/
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LeadScalarFieldEnum>
  }


  /**
   * Lead create
   */
  export type LeadCreateArgs = {
    /**
     * Select specific fields to fetch from the Lead
     * 
    **/
    select?: LeadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LeadInclude | null
    /**
     * The data needed to create a Lead.
     * 
    **/
    data: XOR<LeadCreateInput, LeadUncheckedCreateInput>
  }


  /**
   * Lead createMany
   */
  export type LeadCreateManyArgs = {
    /**
     * The data used to create many Leads.
     * 
    **/
    data: Enumerable<LeadCreateManyInput>
  }


  /**
   * Lead update
   */
  export type LeadUpdateArgs = {
    /**
     * Select specific fields to fetch from the Lead
     * 
    **/
    select?: LeadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LeadInclude | null
    /**
     * The data needed to update a Lead.
     * 
    **/
    data: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
    /**
     * Choose, which Lead to update.
     * 
    **/
    where: LeadWhereUniqueInput
  }


  /**
   * Lead updateMany
   */
  export type LeadUpdateManyArgs = {
    /**
     * The data used to update Leads.
     * 
    **/
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     * 
    **/
    where?: LeadWhereInput
  }


  /**
   * Lead upsert
   */
  export type LeadUpsertArgs = {
    /**
     * Select specific fields to fetch from the Lead
     * 
    **/
    select?: LeadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LeadInclude | null
    /**
     * The filter to search for the Lead to update in case it exists.
     * 
    **/
    where: LeadWhereUniqueInput
    /**
     * In case the Lead found by the `where` argument doesn't exist, create a new Lead with this data.
     * 
    **/
    create: XOR<LeadCreateInput, LeadUncheckedCreateInput>
    /**
     * In case the Lead was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
  }


  /**
   * Lead delete
   */
  export type LeadDeleteArgs = {
    /**
     * Select specific fields to fetch from the Lead
     * 
    **/
    select?: LeadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LeadInclude | null
    /**
     * Filter which Lead to delete.
     * 
    **/
    where: LeadWhereUniqueInput
  }


  /**
   * Lead deleteMany
   */
  export type LeadDeleteManyArgs = {
    /**
     * Filter which Leads to delete
     * 
    **/
    where?: LeadWhereInput
  }


  /**
   * Lead findRaw
   */
  export type LeadFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Lead aggregateRaw
   */
  export type LeadAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Lead: findUniqueOrThrow
   */
  export type LeadFindUniqueOrThrowArgs = LeadFindUniqueArgsBase
      

  /**
   * Lead: findFirstOrThrow
   */
  export type LeadFindFirstOrThrowArgs = LeadFindFirstArgsBase
      

  /**
   * Lead without action
   */
  export type LeadArgs = {
    /**
     * Select specific fields to fetch from the Lead
     * 
    **/
    select?: LeadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LeadInclude | null
  }



  /**
   * Model Contractor
   */


  export type AggregateContractor = {
    _count: ContractorCountAggregateOutputType | null
    _min: ContractorMinAggregateOutputType | null
    _max: ContractorMaxAggregateOutputType | null
  }

  export type ContractorMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    firstName: string | null
    lastName: string | null
    type: Type | null
    wallet: string | null
    tag: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    replacedBy: string | null
    status: Status | null
    userId: string | null
    orgId: string | null
  }

  export type ContractorMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    firstName: string | null
    lastName: string | null
    type: Type | null
    wallet: string | null
    tag: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    replacedBy: string | null
    status: Status | null
    userId: string | null
    orgId: string | null
  }

  export type ContractorCountAggregateOutputType = {
    id: number
    email: number
    name: number
    firstName: number
    lastName: number
    type: number
    wallet: number
    tag: number
    description: number
    createdAt: number
    updatedAt: number
    replacedBy: number
    status: number
    userId: number
    orgId: number
    _all: number
  }


  export type ContractorMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    firstName?: true
    lastName?: true
    type?: true
    wallet?: true
    tag?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    replacedBy?: true
    status?: true
    userId?: true
    orgId?: true
  }

  export type ContractorMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    firstName?: true
    lastName?: true
    type?: true
    wallet?: true
    tag?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    replacedBy?: true
    status?: true
    userId?: true
    orgId?: true
  }

  export type ContractorCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    firstName?: true
    lastName?: true
    type?: true
    wallet?: true
    tag?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    replacedBy?: true
    status?: true
    userId?: true
    orgId?: true
    _all?: true
  }

  export type ContractorAggregateArgs = {
    /**
     * Filter which Contractor to aggregate.
     * 
    **/
    where?: ContractorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contractors to fetch.
     * 
    **/
    orderBy?: Enumerable<ContractorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ContractorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contractors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contractors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contractors
    **/
    _count?: true | ContractorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractorMaxAggregateInputType
  }

  export type GetContractorAggregateType<T extends ContractorAggregateArgs> = {
        [P in keyof T & keyof AggregateContractor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContractor[P]>
      : GetScalarType<T[P], AggregateContractor[P]>
  }




  export type ContractorGroupByArgs = {
    where?: ContractorWhereInput
    orderBy?: Enumerable<ContractorOrderByWithAggregationInput>
    by: Array<ContractorScalarFieldEnum>
    having?: ContractorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractorCountAggregateInputType | true
    _min?: ContractorMinAggregateInputType
    _max?: ContractorMaxAggregateInputType
  }


  export type ContractorGroupByOutputType = {
    id: string
    email: string
    name: string
    firstName: string | null
    lastName: string | null
    type: Type
    wallet: string | null
    tag: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    replacedBy: string | null
    status: Status
    userId: string | null
    orgId: string | null
    _count: ContractorCountAggregateOutputType | null
    _min: ContractorMinAggregateOutputType | null
    _max: ContractorMaxAggregateOutputType | null
  }

  type GetContractorGroupByPayload<T extends ContractorGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ContractorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractorGroupByOutputType[P]>
            : GetScalarType<T[P], ContractorGroupByOutputType[P]>
        }
      >
    >


  export type ContractorSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
    firstName?: boolean
    lastName?: boolean
    type?: boolean
    wallet?: boolean
    tag?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    replacedBy?: boolean
    status?: boolean
    User?: boolean | UserArgs
    userId?: boolean
    Organization?: boolean | OrganizationArgs
    orgId?: boolean
  }

  export type ContractorInclude = {
    User?: boolean | UserArgs
    Organization?: boolean | OrganizationArgs
  }

  export type ContractorGetPayload<
    S extends boolean | null | undefined | ContractorArgs,
    U = keyof S
      > = S extends true
        ? Contractor
    : S extends undefined
    ? never
    : S extends ContractorArgs | ContractorFindManyArgs
    ?'include' extends U
    ? Contractor  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> | null :
        P extends 'Organization' ? OrganizationGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> | null :
        P extends 'Organization' ? OrganizationGetPayload<S['select'][P]> | null :  P extends keyof Contractor ? Contractor[P] : never
  } 
    : Contractor
  : Contractor


  type ContractorCountArgs = Merge<
    Omit<ContractorFindManyArgs, 'select' | 'include'> & {
      select?: ContractorCountAggregateInputType | true
    }
  >

  export interface ContractorDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Contractor that matches the filter.
     * @param {ContractorFindUniqueArgs} args - Arguments to find a Contractor
     * @example
     * // Get one Contractor
     * const contractor = await prisma.contractor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContractorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ContractorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Contractor'> extends True ? CheckSelect<T, Prisma__ContractorClient<Contractor>, Prisma__ContractorClient<ContractorGetPayload<T>>> : CheckSelect<T, Prisma__ContractorClient<Contractor | null >, Prisma__ContractorClient<ContractorGetPayload<T> | null >>

    /**
     * Find the first Contractor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractorFindFirstArgs} args - Arguments to find a Contractor
     * @example
     * // Get one Contractor
     * const contractor = await prisma.contractor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContractorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ContractorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Contractor'> extends True ? CheckSelect<T, Prisma__ContractorClient<Contractor>, Prisma__ContractorClient<ContractorGetPayload<T>>> : CheckSelect<T, Prisma__ContractorClient<Contractor | null >, Prisma__ContractorClient<ContractorGetPayload<T> | null >>

    /**
     * Find zero or more Contractors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contractors
     * const contractors = await prisma.contractor.findMany()
     * 
     * // Get first 10 Contractors
     * const contractors = await prisma.contractor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractorWithIdOnly = await prisma.contractor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContractorFindManyArgs>(
      args?: SelectSubset<T, ContractorFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Contractor>>, PrismaPromise<Array<ContractorGetPayload<T>>>>

    /**
     * Create a Contractor.
     * @param {ContractorCreateArgs} args - Arguments to create a Contractor.
     * @example
     * // Create one Contractor
     * const Contractor = await prisma.contractor.create({
     *   data: {
     *     // ... data to create a Contractor
     *   }
     * })
     * 
    **/
    create<T extends ContractorCreateArgs>(
      args: SelectSubset<T, ContractorCreateArgs>
    ): CheckSelect<T, Prisma__ContractorClient<Contractor>, Prisma__ContractorClient<ContractorGetPayload<T>>>

    /**
     * Create many Contractors.
     *     @param {ContractorCreateManyArgs} args - Arguments to create many Contractors.
     *     @example
     *     // Create many Contractors
     *     const contractor = await prisma.contractor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContractorCreateManyArgs>(
      args?: SelectSubset<T, ContractorCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Contractor.
     * @param {ContractorDeleteArgs} args - Arguments to delete one Contractor.
     * @example
     * // Delete one Contractor
     * const Contractor = await prisma.contractor.delete({
     *   where: {
     *     // ... filter to delete one Contractor
     *   }
     * })
     * 
    **/
    delete<T extends ContractorDeleteArgs>(
      args: SelectSubset<T, ContractorDeleteArgs>
    ): CheckSelect<T, Prisma__ContractorClient<Contractor>, Prisma__ContractorClient<ContractorGetPayload<T>>>

    /**
     * Update one Contractor.
     * @param {ContractorUpdateArgs} args - Arguments to update one Contractor.
     * @example
     * // Update one Contractor
     * const contractor = await prisma.contractor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContractorUpdateArgs>(
      args: SelectSubset<T, ContractorUpdateArgs>
    ): CheckSelect<T, Prisma__ContractorClient<Contractor>, Prisma__ContractorClient<ContractorGetPayload<T>>>

    /**
     * Delete zero or more Contractors.
     * @param {ContractorDeleteManyArgs} args - Arguments to filter Contractors to delete.
     * @example
     * // Delete a few Contractors
     * const { count } = await prisma.contractor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContractorDeleteManyArgs>(
      args?: SelectSubset<T, ContractorDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contractors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contractors
     * const contractor = await prisma.contractor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContractorUpdateManyArgs>(
      args: SelectSubset<T, ContractorUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Contractor.
     * @param {ContractorUpsertArgs} args - Arguments to update or create a Contractor.
     * @example
     * // Update or create a Contractor
     * const contractor = await prisma.contractor.upsert({
     *   create: {
     *     // ... data to create a Contractor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contractor we want to update
     *   }
     * })
    **/
    upsert<T extends ContractorUpsertArgs>(
      args: SelectSubset<T, ContractorUpsertArgs>
    ): CheckSelect<T, Prisma__ContractorClient<Contractor>, Prisma__ContractorClient<ContractorGetPayload<T>>>

    /**
     * Find zero or more Contractors that matches the filter.
     * @param {ContractorFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const contractor = await prisma.contractor.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ContractorFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Contractor.
     * @param {ContractorAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const contractor = await prisma.contractor.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ContractorAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Contractor that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ContractorFindUniqueOrThrowArgs} args - Arguments to find a Contractor
     * @example
     * // Get one Contractor
     * const contractor = await prisma.contractor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContractorFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ContractorFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ContractorClient<Contractor>, Prisma__ContractorClient<ContractorGetPayload<T>>>

    /**
     * Find the first Contractor that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractorFindFirstOrThrowArgs} args - Arguments to find a Contractor
     * @example
     * // Get one Contractor
     * const contractor = await prisma.contractor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContractorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ContractorFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ContractorClient<Contractor>, Prisma__ContractorClient<ContractorGetPayload<T>>>

    /**
     * Count the number of Contractors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractorCountArgs} args - Arguments to filter Contractors to count.
     * @example
     * // Count the number of Contractors
     * const count = await prisma.contractor.count({
     *   where: {
     *     // ... the filter for the Contractors we want to count
     *   }
     * })
    **/
    count<T extends ContractorCountArgs>(
      args?: Subset<T, ContractorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contractor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContractorAggregateArgs>(args: Subset<T, ContractorAggregateArgs>): PrismaPromise<GetContractorAggregateType<T>>

    /**
     * Group by Contractor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractorGroupByArgs} args - Group by arguments.
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
      T extends ContractorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractorGroupByArgs['orderBy'] }
        : { orderBy?: ContractorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContractorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractorGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contractor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ContractorClient<T> implements PrismaPromise<T> {
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

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Organization<T extends OrganizationArgs = {}>(args?: Subset<T, OrganizationArgs>): CheckSelect<T, Prisma__OrganizationClient<Organization | null >, Prisma__OrganizationClient<OrganizationGetPayload<T> | null >>;

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
   * Contractor base type for findUnique actions
   */
  export type ContractorFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Contractor
     * 
    **/
    select?: ContractorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractorInclude | null
    /**
     * Filter, which Contractor to fetch.
     * 
    **/
    where: ContractorWhereUniqueInput
  }

  /**
   * Contractor: findUnique
   */
  export interface ContractorFindUniqueArgs extends ContractorFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Contractor base type for findFirst actions
   */
  export type ContractorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Contractor
     * 
    **/
    select?: ContractorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractorInclude | null
    /**
     * Filter, which Contractor to fetch.
     * 
    **/
    where?: ContractorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contractors to fetch.
     * 
    **/
    orderBy?: Enumerable<ContractorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contractors.
     * 
    **/
    cursor?: ContractorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contractors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contractors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contractors.
     * 
    **/
    distinct?: Enumerable<ContractorScalarFieldEnum>
  }

  /**
   * Contractor: findFirst
   */
  export interface ContractorFindFirstArgs extends ContractorFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Contractor findMany
   */
  export type ContractorFindManyArgs = {
    /**
     * Select specific fields to fetch from the Contractor
     * 
    **/
    select?: ContractorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractorInclude | null
    /**
     * Filter, which Contractors to fetch.
     * 
    **/
    where?: ContractorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contractors to fetch.
     * 
    **/
    orderBy?: Enumerable<ContractorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contractors.
     * 
    **/
    cursor?: ContractorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contractors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contractors.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ContractorScalarFieldEnum>
  }


  /**
   * Contractor create
   */
  export type ContractorCreateArgs = {
    /**
     * Select specific fields to fetch from the Contractor
     * 
    **/
    select?: ContractorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractorInclude | null
    /**
     * The data needed to create a Contractor.
     * 
    **/
    data: XOR<ContractorCreateInput, ContractorUncheckedCreateInput>
  }


  /**
   * Contractor createMany
   */
  export type ContractorCreateManyArgs = {
    /**
     * The data used to create many Contractors.
     * 
    **/
    data: Enumerable<ContractorCreateManyInput>
  }


  /**
   * Contractor update
   */
  export type ContractorUpdateArgs = {
    /**
     * Select specific fields to fetch from the Contractor
     * 
    **/
    select?: ContractorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractorInclude | null
    /**
     * The data needed to update a Contractor.
     * 
    **/
    data: XOR<ContractorUpdateInput, ContractorUncheckedUpdateInput>
    /**
     * Choose, which Contractor to update.
     * 
    **/
    where: ContractorWhereUniqueInput
  }


  /**
   * Contractor updateMany
   */
  export type ContractorUpdateManyArgs = {
    /**
     * The data used to update Contractors.
     * 
    **/
    data: XOR<ContractorUpdateManyMutationInput, ContractorUncheckedUpdateManyInput>
    /**
     * Filter which Contractors to update
     * 
    **/
    where?: ContractorWhereInput
  }


  /**
   * Contractor upsert
   */
  export type ContractorUpsertArgs = {
    /**
     * Select specific fields to fetch from the Contractor
     * 
    **/
    select?: ContractorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractorInclude | null
    /**
     * The filter to search for the Contractor to update in case it exists.
     * 
    **/
    where: ContractorWhereUniqueInput
    /**
     * In case the Contractor found by the `where` argument doesn't exist, create a new Contractor with this data.
     * 
    **/
    create: XOR<ContractorCreateInput, ContractorUncheckedCreateInput>
    /**
     * In case the Contractor was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ContractorUpdateInput, ContractorUncheckedUpdateInput>
  }


  /**
   * Contractor delete
   */
  export type ContractorDeleteArgs = {
    /**
     * Select specific fields to fetch from the Contractor
     * 
    **/
    select?: ContractorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractorInclude | null
    /**
     * Filter which Contractor to delete.
     * 
    **/
    where: ContractorWhereUniqueInput
  }


  /**
   * Contractor deleteMany
   */
  export type ContractorDeleteManyArgs = {
    /**
     * Filter which Contractors to delete
     * 
    **/
    where?: ContractorWhereInput
  }


  /**
   * Contractor findRaw
   */
  export type ContractorFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Contractor aggregateRaw
   */
  export type ContractorAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Contractor: findUniqueOrThrow
   */
  export type ContractorFindUniqueOrThrowArgs = ContractorFindUniqueArgsBase
      

  /**
   * Contractor: findFirstOrThrow
   */
  export type ContractorFindFirstOrThrowArgs = ContractorFindFirstArgsBase
      

  /**
   * Contractor without action
   */
  export type ContractorArgs = {
    /**
     * Select specific fields to fetch from the Contractor
     * 
    **/
    select?: ContractorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ContractorInclude | null
  }



  /**
   * Model Organization
   */


  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    firstName: string | null
    lastName: string | null
    type: Type | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    replacedBy: string | null
    status: Status | null
    ownerId: string | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    firstName: string | null
    lastName: string | null
    type: Type | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    replacedBy: string | null
    status: Status | null
    ownerId: string | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    email: number
    name: number
    firstName: number
    lastName: number
    type: number
    description: number
    createdAt: number
    updatedAt: number
    replacedBy: number
    status: number
    ownerId: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    firstName?: true
    lastName?: true
    type?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    replacedBy?: true
    status?: true
    ownerId?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    firstName?: true
    lastName?: true
    type?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    replacedBy?: true
    status?: true
    ownerId?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    firstName?: true
    lastName?: true
    type?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    replacedBy?: true
    status?: true
    ownerId?: true
    _all?: true
  }

  export type OrganizationAggregateArgs = {
    /**
     * Filter which Organization to aggregate.
     * 
    **/
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     * 
    **/
    orderBy?: Enumerable<OrganizationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs = {
    where?: OrganizationWhereInput
    orderBy?: Enumerable<OrganizationOrderByWithAggregationInput>
    by: Array<OrganizationScalarFieldEnum>
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }


  export type OrganizationGroupByOutputType = {
    id: string
    email: string
    name: string
    firstName: string | null
    lastName: string | null
    type: Type
    description: string | null
    createdAt: Date
    updatedAt: Date
    replacedBy: string | null
    status: Status
    ownerId: string | null
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
    firstName?: boolean
    lastName?: boolean
    type?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    replacedBy?: boolean
    status?: boolean
    Owner?: boolean | OwnerArgs
    ownerId?: boolean
    Clients?: boolean | ClientFindManyArgs
    Employees?: boolean | EmployeeFindManyArgs
    Leads?: boolean | LeadFindManyArgs
    Contractors?: boolean | ContractorFindManyArgs
    _count?: boolean | OrganizationCountOutputTypeArgs
  }

  export type OrganizationInclude = {
    Owner?: boolean | OwnerArgs
    Clients?: boolean | ClientFindManyArgs
    Employees?: boolean | EmployeeFindManyArgs
    Leads?: boolean | LeadFindManyArgs
    Contractors?: boolean | ContractorFindManyArgs
    _count?: boolean | OrganizationCountOutputTypeArgs
  }

  export type OrganizationGetPayload<
    S extends boolean | null | undefined | OrganizationArgs,
    U = keyof S
      > = S extends true
        ? Organization
    : S extends undefined
    ? never
    : S extends OrganizationArgs | OrganizationFindManyArgs
    ?'include' extends U
    ? Organization  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Owner' ? OwnerGetPayload<S['include'][P]> | null :
        P extends 'Clients' ? Array < ClientGetPayload<S['include'][P]>>  :
        P extends 'Employees' ? Array < EmployeeGetPayload<S['include'][P]>>  :
        P extends 'Leads' ? Array < LeadGetPayload<S['include'][P]>>  :
        P extends 'Contractors' ? Array < ContractorGetPayload<S['include'][P]>>  :
        P extends '_count' ? OrganizationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Owner' ? OwnerGetPayload<S['select'][P]> | null :
        P extends 'Clients' ? Array < ClientGetPayload<S['select'][P]>>  :
        P extends 'Employees' ? Array < EmployeeGetPayload<S['select'][P]>>  :
        P extends 'Leads' ? Array < LeadGetPayload<S['select'][P]>>  :
        P extends 'Contractors' ? Array < ContractorGetPayload<S['select'][P]>>  :
        P extends '_count' ? OrganizationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Organization ? Organization[P] : never
  } 
    : Organization
  : Organization


  type OrganizationCountArgs = Merge<
    Omit<OrganizationFindManyArgs, 'select' | 'include'> & {
      select?: OrganizationCountAggregateInputType | true
    }
  >

  export interface OrganizationDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrganizationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrganizationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Organization'> extends True ? CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>> : CheckSelect<T, Prisma__OrganizationClient<Organization | null >, Prisma__OrganizationClient<OrganizationGetPayload<T> | null >>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrganizationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrganizationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Organization'> extends True ? CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>> : CheckSelect<T, Prisma__OrganizationClient<Organization | null >, Prisma__OrganizationClient<OrganizationGetPayload<T> | null >>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrganizationFindManyArgs>(
      args?: SelectSubset<T, OrganizationFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Organization>>, PrismaPromise<Array<OrganizationGetPayload<T>>>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
    **/
    create<T extends OrganizationCreateArgs>(
      args: SelectSubset<T, OrganizationCreateArgs>
    ): CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>>

    /**
     * Create many Organizations.
     *     @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrganizationCreateManyArgs>(
      args?: SelectSubset<T, OrganizationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
    **/
    delete<T extends OrganizationDeleteArgs>(
      args: SelectSubset<T, OrganizationDeleteArgs>
    ): CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrganizationUpdateArgs>(
      args: SelectSubset<T, OrganizationUpdateArgs>
    ): CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrganizationDeleteManyArgs>(
      args?: SelectSubset<T, OrganizationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrganizationUpdateManyArgs>(
      args: SelectSubset<T, OrganizationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
    **/
    upsert<T extends OrganizationUpsertArgs>(
      args: SelectSubset<T, OrganizationUpsertArgs>
    ): CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>>

    /**
     * Find zero or more Organizations that matches the filter.
     * @param {OrganizationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const organization = await prisma.organization.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: OrganizationFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Organization.
     * @param {OrganizationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const organization = await prisma.organization.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: OrganizationAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Organization that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OrganizationFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>>

    /**
     * Find the first Organization that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__OrganizationClient<Organization>, Prisma__OrganizationClient<OrganizationGetPayload<T>>>

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
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
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrganizationClient<T> implements PrismaPromise<T> {
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

    Owner<T extends OwnerArgs = {}>(args?: Subset<T, OwnerArgs>): CheckSelect<T, Prisma__OwnerClient<Owner | null >, Prisma__OwnerClient<OwnerGetPayload<T> | null >>;

    Clients<T extends ClientFindManyArgs = {}>(args?: Subset<T, ClientFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Client>>, PrismaPromise<Array<ClientGetPayload<T>>>>;

    Employees<T extends EmployeeFindManyArgs = {}>(args?: Subset<T, EmployeeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Employee>>, PrismaPromise<Array<EmployeeGetPayload<T>>>>;

    Leads<T extends LeadFindManyArgs = {}>(args?: Subset<T, LeadFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Lead>>, PrismaPromise<Array<LeadGetPayload<T>>>>;

    Contractors<T extends ContractorFindManyArgs = {}>(args?: Subset<T, ContractorFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Contractor>>, PrismaPromise<Array<ContractorGetPayload<T>>>>;

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
   * Organization base type for findUnique actions
   */
  export type OrganizationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Organization
     * 
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrganizationInclude | null
    /**
     * Filter, which Organization to fetch.
     * 
    **/
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization: findUnique
   */
  export interface OrganizationFindUniqueArgs extends OrganizationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Organization base type for findFirst actions
   */
  export type OrganizationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Organization
     * 
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrganizationInclude | null
    /**
     * Filter, which Organization to fetch.
     * 
    **/
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     * 
    **/
    orderBy?: Enumerable<OrganizationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     * 
    **/
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     * 
    **/
    distinct?: Enumerable<OrganizationScalarFieldEnum>
  }

  /**
   * Organization: findFirst
   */
  export interface OrganizationFindFirstArgs extends OrganizationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Organization
     * 
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrganizationInclude | null
    /**
     * Filter, which Organizations to fetch.
     * 
    **/
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     * 
    **/
    orderBy?: Enumerable<OrganizationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     * 
    **/
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     * 
    **/
    skip?: number
    distinct?: Enumerable<OrganizationScalarFieldEnum>
  }


  /**
   * Organization create
   */
  export type OrganizationCreateArgs = {
    /**
     * Select specific fields to fetch from the Organization
     * 
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrganizationInclude | null
    /**
     * The data needed to create a Organization.
     * 
    **/
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }


  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs = {
    /**
     * The data used to create many Organizations.
     * 
    **/
    data: Enumerable<OrganizationCreateManyInput>
  }


  /**
   * Organization update
   */
  export type OrganizationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Organization
     * 
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrganizationInclude | null
    /**
     * The data needed to update a Organization.
     * 
    **/
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     * 
    **/
    where: OrganizationWhereUniqueInput
  }


  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs = {
    /**
     * The data used to update Organizations.
     * 
    **/
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     * 
    **/
    where?: OrganizationWhereInput
  }


  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Organization
     * 
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrganizationInclude | null
    /**
     * The filter to search for the Organization to update in case it exists.
     * 
    **/
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     * 
    **/
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }


  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Organization
     * 
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrganizationInclude | null
    /**
     * Filter which Organization to delete.
     * 
    **/
    where: OrganizationWhereUniqueInput
  }


  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs = {
    /**
     * Filter which Organizations to delete
     * 
    **/
    where?: OrganizationWhereInput
  }


  /**
   * Organization findRaw
   */
  export type OrganizationFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Organization aggregateRaw
   */
  export type OrganizationAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Organization: findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs = OrganizationFindUniqueArgsBase
      

  /**
   * Organization: findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs = OrganizationFindFirstArgsBase
      

  /**
   * Organization without action
   */
  export type OrganizationArgs = {
    /**
     * Select specific fields to fetch from the Organization
     * 
    **/
    select?: OrganizationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrganizationInclude | null
  }



  /**
   * Model Owner
   */


  export type AggregateOwner = {
    _count: OwnerCountAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  export type OwnerMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    firstName: string | null
    lastName: string | null
    type: Type | null
    createdAt: Date | null
    updatedAt: Date | null
    replacedBy: string | null
    status: Status | null
    userId: string | null
  }

  export type OwnerMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    firstName: string | null
    lastName: string | null
    type: Type | null
    createdAt: Date | null
    updatedAt: Date | null
    replacedBy: string | null
    status: Status | null
    userId: string | null
  }

  export type OwnerCountAggregateOutputType = {
    id: number
    email: number
    name: number
    firstName: number
    lastName: number
    type: number
    createdAt: number
    updatedAt: number
    replacedBy: number
    status: number
    userId: number
    _all: number
  }


  export type OwnerMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    firstName?: true
    lastName?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    replacedBy?: true
    status?: true
    userId?: true
  }

  export type OwnerMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    firstName?: true
    lastName?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    replacedBy?: true
    status?: true
    userId?: true
  }

  export type OwnerCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    firstName?: true
    lastName?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    replacedBy?: true
    status?: true
    userId?: true
    _all?: true
  }

  export type OwnerAggregateArgs = {
    /**
     * Filter which Owner to aggregate.
     * 
    **/
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     * 
    **/
    orderBy?: Enumerable<OwnerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Owners
    **/
    _count?: true | OwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnerMaxAggregateInputType
  }

  export type GetOwnerAggregateType<T extends OwnerAggregateArgs> = {
        [P in keyof T & keyof AggregateOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwner[P]>
      : GetScalarType<T[P], AggregateOwner[P]>
  }




  export type OwnerGroupByArgs = {
    where?: OwnerWhereInput
    orderBy?: Enumerable<OwnerOrderByWithAggregationInput>
    by: Array<OwnerScalarFieldEnum>
    having?: OwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnerCountAggregateInputType | true
    _min?: OwnerMinAggregateInputType
    _max?: OwnerMaxAggregateInputType
  }


  export type OwnerGroupByOutputType = {
    id: string
    email: string
    name: string
    firstName: string | null
    lastName: string | null
    type: Type
    createdAt: Date
    updatedAt: Date
    replacedBy: string | null
    status: Status
    userId: string | null
    _count: OwnerCountAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  type GetOwnerGroupByPayload<T extends OwnerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<OwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnerGroupByOutputType[P]>
            : GetScalarType<T[P], OwnerGroupByOutputType[P]>
        }
      >
    >


  export type OwnerSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
    firstName?: boolean
    lastName?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    replacedBy?: boolean
    status?: boolean
    User?: boolean | UserArgs
    userId?: boolean
    Organization?: boolean | OrganizationFindManyArgs
    _count?: boolean | OwnerCountOutputTypeArgs
  }

  export type OwnerInclude = {
    User?: boolean | UserArgs
    Organization?: boolean | OrganizationFindManyArgs
    _count?: boolean | OwnerCountOutputTypeArgs
  }

  export type OwnerGetPayload<
    S extends boolean | null | undefined | OwnerArgs,
    U = keyof S
      > = S extends true
        ? Owner
    : S extends undefined
    ? never
    : S extends OwnerArgs | OwnerFindManyArgs
    ?'include' extends U
    ? Owner  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> | null :
        P extends 'Organization' ? Array < OrganizationGetPayload<S['include'][P]>>  :
        P extends '_count' ? OwnerCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> | null :
        P extends 'Organization' ? Array < OrganizationGetPayload<S['select'][P]>>  :
        P extends '_count' ? OwnerCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Owner ? Owner[P] : never
  } 
    : Owner
  : Owner


  type OwnerCountArgs = Merge<
    Omit<OwnerFindManyArgs, 'select' | 'include'> & {
      select?: OwnerCountAggregateInputType | true
    }
  >

  export interface OwnerDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Owner that matches the filter.
     * @param {OwnerFindUniqueArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OwnerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OwnerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Owner'> extends True ? CheckSelect<T, Prisma__OwnerClient<Owner>, Prisma__OwnerClient<OwnerGetPayload<T>>> : CheckSelect<T, Prisma__OwnerClient<Owner | null >, Prisma__OwnerClient<OwnerGetPayload<T> | null >>

    /**
     * Find the first Owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OwnerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OwnerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Owner'> extends True ? CheckSelect<T, Prisma__OwnerClient<Owner>, Prisma__OwnerClient<OwnerGetPayload<T>>> : CheckSelect<T, Prisma__OwnerClient<Owner | null >, Prisma__OwnerClient<OwnerGetPayload<T> | null >>

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owner.findMany()
     * 
     * // Get first 10 Owners
     * const owners = await prisma.owner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownerWithIdOnly = await prisma.owner.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OwnerFindManyArgs>(
      args?: SelectSubset<T, OwnerFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Owner>>, PrismaPromise<Array<OwnerGetPayload<T>>>>

    /**
     * Create a Owner.
     * @param {OwnerCreateArgs} args - Arguments to create a Owner.
     * @example
     * // Create one Owner
     * const Owner = await prisma.owner.create({
     *   data: {
     *     // ... data to create a Owner
     *   }
     * })
     * 
    **/
    create<T extends OwnerCreateArgs>(
      args: SelectSubset<T, OwnerCreateArgs>
    ): CheckSelect<T, Prisma__OwnerClient<Owner>, Prisma__OwnerClient<OwnerGetPayload<T>>>

    /**
     * Create many Owners.
     *     @param {OwnerCreateManyArgs} args - Arguments to create many Owners.
     *     @example
     *     // Create many Owners
     *     const owner = await prisma.owner.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OwnerCreateManyArgs>(
      args?: SelectSubset<T, OwnerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Owner.
     * @param {OwnerDeleteArgs} args - Arguments to delete one Owner.
     * @example
     * // Delete one Owner
     * const Owner = await prisma.owner.delete({
     *   where: {
     *     // ... filter to delete one Owner
     *   }
     * })
     * 
    **/
    delete<T extends OwnerDeleteArgs>(
      args: SelectSubset<T, OwnerDeleteArgs>
    ): CheckSelect<T, Prisma__OwnerClient<Owner>, Prisma__OwnerClient<OwnerGetPayload<T>>>

    /**
     * Update one Owner.
     * @param {OwnerUpdateArgs} args - Arguments to update one Owner.
     * @example
     * // Update one Owner
     * const owner = await prisma.owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OwnerUpdateArgs>(
      args: SelectSubset<T, OwnerUpdateArgs>
    ): CheckSelect<T, Prisma__OwnerClient<Owner>, Prisma__OwnerClient<OwnerGetPayload<T>>>

    /**
     * Delete zero or more Owners.
     * @param {OwnerDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OwnerDeleteManyArgs>(
      args?: SelectSubset<T, OwnerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OwnerUpdateManyArgs>(
      args: SelectSubset<T, OwnerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Owner.
     * @param {OwnerUpsertArgs} args - Arguments to update or create a Owner.
     * @example
     * // Update or create a Owner
     * const owner = await prisma.owner.upsert({
     *   create: {
     *     // ... data to create a Owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owner we want to update
     *   }
     * })
    **/
    upsert<T extends OwnerUpsertArgs>(
      args: SelectSubset<T, OwnerUpsertArgs>
    ): CheckSelect<T, Prisma__OwnerClient<Owner>, Prisma__OwnerClient<OwnerGetPayload<T>>>

    /**
     * Find zero or more Owners that matches the filter.
     * @param {OwnerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const owner = await prisma.owner.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: OwnerFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Owner.
     * @param {OwnerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const owner = await prisma.owner.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: OwnerAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Owner that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {OwnerFindUniqueOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OwnerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OwnerFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__OwnerClient<Owner>, Prisma__OwnerClient<OwnerGetPayload<T>>>

    /**
     * Find the first Owner that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OwnerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OwnerFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__OwnerClient<Owner>, Prisma__OwnerClient<OwnerGetPayload<T>>>

    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owner.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
    **/
    count<T extends OwnerCountArgs>(
      args?: Subset<T, OwnerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OwnerAggregateArgs>(args: Subset<T, OwnerAggregateArgs>): PrismaPromise<GetOwnerAggregateType<T>>

    /**
     * Group by Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerGroupByArgs} args - Group by arguments.
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
      T extends OwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnerGroupByArgs['orderBy'] }
        : { orderBy?: OwnerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnerGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OwnerClient<T> implements PrismaPromise<T> {
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

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Organization<T extends OrganizationFindManyArgs = {}>(args?: Subset<T, OrganizationFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Organization>>, PrismaPromise<Array<OrganizationGetPayload<T>>>>;

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
   * Owner base type for findUnique actions
   */
  export type OwnerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Owner
     * 
    **/
    select?: OwnerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OwnerInclude | null
    /**
     * Filter, which Owner to fetch.
     * 
    **/
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner: findUnique
   */
  export interface OwnerFindUniqueArgs extends OwnerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Owner base type for findFirst actions
   */
  export type OwnerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Owner
     * 
    **/
    select?: OwnerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OwnerInclude | null
    /**
     * Filter, which Owner to fetch.
     * 
    **/
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     * 
    **/
    orderBy?: Enumerable<OwnerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     * 
    **/
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     * 
    **/
    distinct?: Enumerable<OwnerScalarFieldEnum>
  }

  /**
   * Owner: findFirst
   */
  export interface OwnerFindFirstArgs extends OwnerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Owner findMany
   */
  export type OwnerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Owner
     * 
    **/
    select?: OwnerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OwnerInclude | null
    /**
     * Filter, which Owners to fetch.
     * 
    **/
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     * 
    **/
    orderBy?: Enumerable<OwnerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Owners.
     * 
    **/
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     * 
    **/
    skip?: number
    distinct?: Enumerable<OwnerScalarFieldEnum>
  }


  /**
   * Owner create
   */
  export type OwnerCreateArgs = {
    /**
     * Select specific fields to fetch from the Owner
     * 
    **/
    select?: OwnerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OwnerInclude | null
    /**
     * The data needed to create a Owner.
     * 
    **/
    data: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
  }


  /**
   * Owner createMany
   */
  export type OwnerCreateManyArgs = {
    /**
     * The data used to create many Owners.
     * 
    **/
    data: Enumerable<OwnerCreateManyInput>
  }


  /**
   * Owner update
   */
  export type OwnerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Owner
     * 
    **/
    select?: OwnerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OwnerInclude | null
    /**
     * The data needed to update a Owner.
     * 
    **/
    data: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
    /**
     * Choose, which Owner to update.
     * 
    **/
    where: OwnerWhereUniqueInput
  }


  /**
   * Owner updateMany
   */
  export type OwnerUpdateManyArgs = {
    /**
     * The data used to update Owners.
     * 
    **/
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     * 
    **/
    where?: OwnerWhereInput
  }


  /**
   * Owner upsert
   */
  export type OwnerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Owner
     * 
    **/
    select?: OwnerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OwnerInclude | null
    /**
     * The filter to search for the Owner to update in case it exists.
     * 
    **/
    where: OwnerWhereUniqueInput
    /**
     * In case the Owner found by the `where` argument doesn't exist, create a new Owner with this data.
     * 
    **/
    create: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
    /**
     * In case the Owner was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
  }


  /**
   * Owner delete
   */
  export type OwnerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Owner
     * 
    **/
    select?: OwnerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OwnerInclude | null
    /**
     * Filter which Owner to delete.
     * 
    **/
    where: OwnerWhereUniqueInput
  }


  /**
   * Owner deleteMany
   */
  export type OwnerDeleteManyArgs = {
    /**
     * Filter which Owners to delete
     * 
    **/
    where?: OwnerWhereInput
  }


  /**
   * Owner findRaw
   */
  export type OwnerFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Owner aggregateRaw
   */
  export type OwnerAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Owner: findUniqueOrThrow
   */
  export type OwnerFindUniqueOrThrowArgs = OwnerFindUniqueArgsBase
      

  /**
   * Owner: findFirstOrThrow
   */
  export type OwnerFindFirstOrThrowArgs = OwnerFindFirstArgsBase
      

  /**
   * Owner without action
   */
  export type OwnerArgs = {
    /**
     * Select specific fields to fetch from the Owner
     * 
    **/
    select?: OwnerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OwnerInclude | null
  }



  /**
   * Model Profile
   */


  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    loginCount: number | null
  }

  export type ProfileSumAggregateOutputType = {
    loginCount: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    nickname: string | null
    picture: Buffer | null
    phone: string | null
    phoneVerified: boolean | null
    blocked: boolean | null
    lastIP: string | null
    lastLogin: string | null
    loginCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    nickname: string | null
    picture: Buffer | null
    phone: string | null
    phoneVerified: boolean | null
    blocked: boolean | null
    lastIP: string | null
    lastLogin: string | null
    loginCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    identities: number
    firstName: number
    lastName: number
    nickname: number
    picture: number
    phone: number
    phoneVerified: number
    blocked: number
    lastIP: number
    lastLogin: number
    multifactor: number
    loginCount: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    loginCount?: true
  }

  export type ProfileSumAggregateInputType = {
    loginCount?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    nickname?: true
    picture?: true
    phone?: true
    phoneVerified?: true
    blocked?: true
    lastIP?: true
    lastLogin?: true
    loginCount?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    nickname?: true
    picture?: true
    phone?: true
    phoneVerified?: true
    blocked?: true
    lastIP?: true
    lastLogin?: true
    loginCount?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    identities?: true
    firstName?: true
    lastName?: true
    nickname?: true
    picture?: true
    phone?: true
    phoneVerified?: true
    blocked?: true
    lastIP?: true
    lastLogin?: true
    multifactor?: true
    loginCount?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ProfileAggregateArgs = {
    /**
     * Filter which Profile to aggregate.
     * 
    **/
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs = {
    where?: ProfileWhereInput
    orderBy?: Enumerable<ProfileOrderByWithAggregationInput>
    by: Array<ProfileScalarFieldEnum>
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }


  export type ProfileGroupByOutputType = {
    id: string
    identities: JsonValue[]
    firstName: string | null
    lastName: string | null
    nickname: string | null
    picture: Buffer
    phone: string | null
    phoneVerified: boolean
    blocked: boolean
    lastIP: string | null
    lastLogin: string | null
    multifactor: JsonValue[]
    loginCount: number
    createdAt: Date
    updatedAt: Date
    userId: string | null
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect = {
    id?: boolean
    identities?: boolean
    firstName?: boolean
    lastName?: boolean
    nickname?: boolean
    picture?: boolean
    phone?: boolean
    phoneVerified?: boolean
    blocked?: boolean
    lastIP?: boolean
    lastLogin?: boolean
    multifactor?: boolean
    loginCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserArgs
    userId?: boolean
  }

  export type ProfileInclude = {
    User?: boolean | UserArgs
  }

  export type ProfileGetPayload<
    S extends boolean | null | undefined | ProfileArgs,
    U = keyof S
      > = S extends true
        ? Profile
    : S extends undefined
    ? never
    : S extends ProfileArgs | ProfileFindManyArgs
    ?'include' extends U
    ? Profile  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> | null :  P extends keyof Profile ? Profile[P] : never
  } 
    : Profile
  : Profile


  type ProfileCountArgs = Merge<
    Omit<ProfileFindManyArgs, 'select' | 'include'> & {
      select?: ProfileCountAggregateInputType | true
    }
  >

  export interface ProfileDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProfileFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProfileFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Profile'> extends True ? CheckSelect<T, Prisma__ProfileClient<Profile>, Prisma__ProfileClient<ProfileGetPayload<T>>> : CheckSelect<T, Prisma__ProfileClient<Profile | null >, Prisma__ProfileClient<ProfileGetPayload<T> | null >>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProfileFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProfileFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Profile'> extends True ? CheckSelect<T, Prisma__ProfileClient<Profile>, Prisma__ProfileClient<ProfileGetPayload<T>>> : CheckSelect<T, Prisma__ProfileClient<Profile | null >, Prisma__ProfileClient<ProfileGetPayload<T> | null >>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProfileFindManyArgs>(
      args?: SelectSubset<T, ProfileFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Profile>>, PrismaPromise<Array<ProfileGetPayload<T>>>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
    **/
    create<T extends ProfileCreateArgs>(
      args: SelectSubset<T, ProfileCreateArgs>
    ): CheckSelect<T, Prisma__ProfileClient<Profile>, Prisma__ProfileClient<ProfileGetPayload<T>>>

    /**
     * Create many Profiles.
     *     @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profile = await prisma.profile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProfileCreateManyArgs>(
      args?: SelectSubset<T, ProfileCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
    **/
    delete<T extends ProfileDeleteArgs>(
      args: SelectSubset<T, ProfileDeleteArgs>
    ): CheckSelect<T, Prisma__ProfileClient<Profile>, Prisma__ProfileClient<ProfileGetPayload<T>>>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProfileUpdateArgs>(
      args: SelectSubset<T, ProfileUpdateArgs>
    ): CheckSelect<T, Prisma__ProfileClient<Profile>, Prisma__ProfileClient<ProfileGetPayload<T>>>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProfileDeleteManyArgs>(
      args?: SelectSubset<T, ProfileDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProfileUpdateManyArgs>(
      args: SelectSubset<T, ProfileUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
    **/
    upsert<T extends ProfileUpsertArgs>(
      args: SelectSubset<T, ProfileUpsertArgs>
    ): CheckSelect<T, Prisma__ProfileClient<Profile>, Prisma__ProfileClient<ProfileGetPayload<T>>>

    /**
     * Find zero or more Profiles that matches the filter.
     * @param {ProfileFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const profile = await prisma.profile.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ProfileFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Profile.
     * @param {ProfileAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const profile = await prisma.profile.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ProfileAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Profile that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProfileFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ProfileClient<Profile>, Prisma__ProfileClient<ProfileGetPayload<T>>>

    /**
     * Find the first Profile that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProfileFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ProfileClient<Profile>, Prisma__ProfileClient<ProfileGetPayload<T>>>

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProfileClient<T> implements PrismaPromise<T> {
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

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

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
   * Profile base type for findUnique actions
   */
  export type ProfileFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * Filter, which Profile to fetch.
     * 
    **/
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile: findUnique
   */
  export interface ProfileFindUniqueArgs extends ProfileFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Profile base type for findFirst actions
   */
  export type ProfileFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * Filter, which Profile to fetch.
     * 
    **/
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     * 
    **/
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     * 
    **/
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }

  /**
   * Profile: findFirst
   */
  export interface ProfileFindFirstArgs extends ProfileFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * Filter, which Profiles to fetch.
     * 
    **/
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     * 
    **/
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }


  /**
   * Profile create
   */
  export type ProfileCreateArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * The data needed to create a Profile.
     * 
    **/
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }


  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs = {
    /**
     * The data used to create many Profiles.
     * 
    **/
    data: Enumerable<ProfileCreateManyInput>
  }


  /**
   * Profile update
   */
  export type ProfileUpdateArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * The data needed to update a Profile.
     * 
    **/
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     * 
    **/
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs = {
    /**
     * The data used to update Profiles.
     * 
    **/
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     * 
    **/
    where?: ProfileWhereInput
  }


  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * The filter to search for the Profile to update in case it exists.
     * 
    **/
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     * 
    **/
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }


  /**
   * Profile delete
   */
  export type ProfileDeleteArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * Filter which Profile to delete.
     * 
    **/
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs = {
    /**
     * Filter which Profiles to delete
     * 
    **/
    where?: ProfileWhereInput
  }


  /**
   * Profile findRaw
   */
  export type ProfileFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Profile aggregateRaw
   */
  export type ProfileAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Profile: findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs = ProfileFindUniqueArgsBase
      

  /**
   * Profile: findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs = ProfileFindFirstArgsBase
      

  /**
   * Profile without action
   */
  export type ProfileArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
  }



  /**
   * Model AuditEvent
   */


  export type AggregateAuditEvent = {
    _count: AuditEventCountAggregateOutputType | null
    _min: AuditEventMinAggregateOutputType | null
    _max: AuditEventMaxAggregateOutputType | null
  }

  export type AuditEventMinAggregateOutputType = {
    id: string | null
    url: string | null
    method: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type AuditEventMaxAggregateOutputType = {
    id: string | null
    url: string | null
    method: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type AuditEventCountAggregateOutputType = {
    id: number
    url: number
    method: number
    params: number
    query: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type AuditEventMinAggregateInputType = {
    id?: true
    url?: true
    method?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type AuditEventMaxAggregateInputType = {
    id?: true
    url?: true
    method?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type AuditEventCountAggregateInputType = {
    id?: true
    url?: true
    method?: true
    params?: true
    query?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type AuditEventAggregateArgs = {
    /**
     * Filter which AuditEvent to aggregate.
     * 
    **/
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     * 
    **/
    orderBy?: Enumerable<AuditEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditEvents
    **/
    _count?: true | AuditEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditEventMaxAggregateInputType
  }

  export type GetAuditEventAggregateType<T extends AuditEventAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditEvent[P]>
      : GetScalarType<T[P], AggregateAuditEvent[P]>
  }




  export type AuditEventGroupByArgs = {
    where?: AuditEventWhereInput
    orderBy?: Enumerable<AuditEventOrderByWithAggregationInput>
    by: Array<AuditEventScalarFieldEnum>
    having?: AuditEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditEventCountAggregateInputType | true
    _min?: AuditEventMinAggregateInputType
    _max?: AuditEventMaxAggregateInputType
  }


  export type AuditEventGroupByOutputType = {
    id: string
    url: string | null
    method: string | null
    params: JsonValue | null
    query: JsonValue | null
    createdAt: Date
    updatedAt: Date
    userId: string | null
    _count: AuditEventCountAggregateOutputType | null
    _min: AuditEventMinAggregateOutputType | null
    _max: AuditEventMaxAggregateOutputType | null
  }

  type GetAuditEventGroupByPayload<T extends AuditEventGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AuditEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditEventGroupByOutputType[P]>
            : GetScalarType<T[P], AuditEventGroupByOutputType[P]>
        }
      >
    >


  export type AuditEventSelect = {
    id?: boolean
    url?: boolean
    method?: boolean
    params?: boolean
    query?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserArgs
    userId?: boolean
  }

  export type AuditEventInclude = {
    User?: boolean | UserArgs
  }

  export type AuditEventGetPayload<
    S extends boolean | null | undefined | AuditEventArgs,
    U = keyof S
      > = S extends true
        ? AuditEvent
    : S extends undefined
    ? never
    : S extends AuditEventArgs | AuditEventFindManyArgs
    ?'include' extends U
    ? AuditEvent  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> | null :  P extends keyof AuditEvent ? AuditEvent[P] : never
  } 
    : AuditEvent
  : AuditEvent


  type AuditEventCountArgs = Merge<
    Omit<AuditEventFindManyArgs, 'select' | 'include'> & {
      select?: AuditEventCountAggregateInputType | true
    }
  >

  export interface AuditEventDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one AuditEvent that matches the filter.
     * @param {AuditEventFindUniqueArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuditEventFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AuditEventFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AuditEvent'> extends True ? CheckSelect<T, Prisma__AuditEventClient<AuditEvent>, Prisma__AuditEventClient<AuditEventGetPayload<T>>> : CheckSelect<T, Prisma__AuditEventClient<AuditEvent | null >, Prisma__AuditEventClient<AuditEventGetPayload<T> | null >>

    /**
     * Find the first AuditEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventFindFirstArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuditEventFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AuditEventFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AuditEvent'> extends True ? CheckSelect<T, Prisma__AuditEventClient<AuditEvent>, Prisma__AuditEventClient<AuditEventGetPayload<T>>> : CheckSelect<T, Prisma__AuditEventClient<AuditEvent | null >, Prisma__AuditEventClient<AuditEventGetPayload<T> | null >>

    /**
     * Find zero or more AuditEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditEvents
     * const auditEvents = await prisma.auditEvent.findMany()
     * 
     * // Get first 10 AuditEvents
     * const auditEvents = await prisma.auditEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditEventWithIdOnly = await prisma.auditEvent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AuditEventFindManyArgs>(
      args?: SelectSubset<T, AuditEventFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<AuditEvent>>, PrismaPromise<Array<AuditEventGetPayload<T>>>>

    /**
     * Create a AuditEvent.
     * @param {AuditEventCreateArgs} args - Arguments to create a AuditEvent.
     * @example
     * // Create one AuditEvent
     * const AuditEvent = await prisma.auditEvent.create({
     *   data: {
     *     // ... data to create a AuditEvent
     *   }
     * })
     * 
    **/
    create<T extends AuditEventCreateArgs>(
      args: SelectSubset<T, AuditEventCreateArgs>
    ): CheckSelect<T, Prisma__AuditEventClient<AuditEvent>, Prisma__AuditEventClient<AuditEventGetPayload<T>>>

    /**
     * Create many AuditEvents.
     *     @param {AuditEventCreateManyArgs} args - Arguments to create many AuditEvents.
     *     @example
     *     // Create many AuditEvents
     *     const auditEvent = await prisma.auditEvent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AuditEventCreateManyArgs>(
      args?: SelectSubset<T, AuditEventCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a AuditEvent.
     * @param {AuditEventDeleteArgs} args - Arguments to delete one AuditEvent.
     * @example
     * // Delete one AuditEvent
     * const AuditEvent = await prisma.auditEvent.delete({
     *   where: {
     *     // ... filter to delete one AuditEvent
     *   }
     * })
     * 
    **/
    delete<T extends AuditEventDeleteArgs>(
      args: SelectSubset<T, AuditEventDeleteArgs>
    ): CheckSelect<T, Prisma__AuditEventClient<AuditEvent>, Prisma__AuditEventClient<AuditEventGetPayload<T>>>

    /**
     * Update one AuditEvent.
     * @param {AuditEventUpdateArgs} args - Arguments to update one AuditEvent.
     * @example
     * // Update one AuditEvent
     * const auditEvent = await prisma.auditEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AuditEventUpdateArgs>(
      args: SelectSubset<T, AuditEventUpdateArgs>
    ): CheckSelect<T, Prisma__AuditEventClient<AuditEvent>, Prisma__AuditEventClient<AuditEventGetPayload<T>>>

    /**
     * Delete zero or more AuditEvents.
     * @param {AuditEventDeleteManyArgs} args - Arguments to filter AuditEvents to delete.
     * @example
     * // Delete a few AuditEvents
     * const { count } = await prisma.auditEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuditEventDeleteManyArgs>(
      args?: SelectSubset<T, AuditEventDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditEvents
     * const auditEvent = await prisma.auditEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AuditEventUpdateManyArgs>(
      args: SelectSubset<T, AuditEventUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditEvent.
     * @param {AuditEventUpsertArgs} args - Arguments to update or create a AuditEvent.
     * @example
     * // Update or create a AuditEvent
     * const auditEvent = await prisma.auditEvent.upsert({
     *   create: {
     *     // ... data to create a AuditEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditEvent we want to update
     *   }
     * })
    **/
    upsert<T extends AuditEventUpsertArgs>(
      args: SelectSubset<T, AuditEventUpsertArgs>
    ): CheckSelect<T, Prisma__AuditEventClient<AuditEvent>, Prisma__AuditEventClient<AuditEventGetPayload<T>>>

    /**
     * Find zero or more AuditEvents that matches the filter.
     * @param {AuditEventFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const auditEvent = await prisma.auditEvent.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AuditEventFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AuditEvent.
     * @param {AuditEventAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const auditEvent = await prisma.auditEvent.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AuditEventAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one AuditEvent that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {AuditEventFindUniqueOrThrowArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AuditEventFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AuditEventFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__AuditEventClient<AuditEvent>, Prisma__AuditEventClient<AuditEventGetPayload<T>>>

    /**
     * Find the first AuditEvent that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventFindFirstOrThrowArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AuditEventFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AuditEventFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__AuditEventClient<AuditEvent>, Prisma__AuditEventClient<AuditEventGetPayload<T>>>

    /**
     * Count the number of AuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventCountArgs} args - Arguments to filter AuditEvents to count.
     * @example
     * // Count the number of AuditEvents
     * const count = await prisma.auditEvent.count({
     *   where: {
     *     // ... the filter for the AuditEvents we want to count
     *   }
     * })
    **/
    count<T extends AuditEventCountArgs>(
      args?: Subset<T, AuditEventCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditEventAggregateArgs>(args: Subset<T, AuditEventAggregateArgs>): PrismaPromise<GetAuditEventAggregateType<T>>

    /**
     * Group by AuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventGroupByArgs} args - Group by arguments.
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
      T extends AuditEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditEventGroupByArgs['orderBy'] }
        : { orderBy?: AuditEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditEventGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AuditEventClient<T> implements PrismaPromise<T> {
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

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

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
   * AuditEvent base type for findUnique actions
   */
  export type AuditEventFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the AuditEvent
     * 
    **/
    select?: AuditEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuditEventInclude | null
    /**
     * Filter, which AuditEvent to fetch.
     * 
    **/
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent: findUnique
   */
  export interface AuditEventFindUniqueArgs extends AuditEventFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AuditEvent base type for findFirst actions
   */
  export type AuditEventFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the AuditEvent
     * 
    **/
    select?: AuditEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuditEventInclude | null
    /**
     * Filter, which AuditEvent to fetch.
     * 
    **/
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     * 
    **/
    orderBy?: Enumerable<AuditEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditEvents.
     * 
    **/
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditEvents.
     * 
    **/
    distinct?: Enumerable<AuditEventScalarFieldEnum>
  }

  /**
   * AuditEvent: findFirst
   */
  export interface AuditEventFindFirstArgs extends AuditEventFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AuditEvent findMany
   */
  export type AuditEventFindManyArgs = {
    /**
     * Select specific fields to fetch from the AuditEvent
     * 
    **/
    select?: AuditEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuditEventInclude | null
    /**
     * Filter, which AuditEvents to fetch.
     * 
    **/
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     * 
    **/
    orderBy?: Enumerable<AuditEventOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditEvents.
     * 
    **/
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AuditEventScalarFieldEnum>
  }


  /**
   * AuditEvent create
   */
  export type AuditEventCreateArgs = {
    /**
     * Select specific fields to fetch from the AuditEvent
     * 
    **/
    select?: AuditEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuditEventInclude | null
    /**
     * The data needed to create a AuditEvent.
     * 
    **/
    data: XOR<AuditEventCreateInput, AuditEventUncheckedCreateInput>
  }


  /**
   * AuditEvent createMany
   */
  export type AuditEventCreateManyArgs = {
    /**
     * The data used to create many AuditEvents.
     * 
    **/
    data: Enumerable<AuditEventCreateManyInput>
  }


  /**
   * AuditEvent update
   */
  export type AuditEventUpdateArgs = {
    /**
     * Select specific fields to fetch from the AuditEvent
     * 
    **/
    select?: AuditEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuditEventInclude | null
    /**
     * The data needed to update a AuditEvent.
     * 
    **/
    data: XOR<AuditEventUpdateInput, AuditEventUncheckedUpdateInput>
    /**
     * Choose, which AuditEvent to update.
     * 
    **/
    where: AuditEventWhereUniqueInput
  }


  /**
   * AuditEvent updateMany
   */
  export type AuditEventUpdateManyArgs = {
    /**
     * The data used to update AuditEvents.
     * 
    **/
    data: XOR<AuditEventUpdateManyMutationInput, AuditEventUncheckedUpdateManyInput>
    /**
     * Filter which AuditEvents to update
     * 
    **/
    where?: AuditEventWhereInput
  }


  /**
   * AuditEvent upsert
   */
  export type AuditEventUpsertArgs = {
    /**
     * Select specific fields to fetch from the AuditEvent
     * 
    **/
    select?: AuditEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuditEventInclude | null
    /**
     * The filter to search for the AuditEvent to update in case it exists.
     * 
    **/
    where: AuditEventWhereUniqueInput
    /**
     * In case the AuditEvent found by the `where` argument doesn't exist, create a new AuditEvent with this data.
     * 
    **/
    create: XOR<AuditEventCreateInput, AuditEventUncheckedCreateInput>
    /**
     * In case the AuditEvent was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AuditEventUpdateInput, AuditEventUncheckedUpdateInput>
  }


  /**
   * AuditEvent delete
   */
  export type AuditEventDeleteArgs = {
    /**
     * Select specific fields to fetch from the AuditEvent
     * 
    **/
    select?: AuditEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuditEventInclude | null
    /**
     * Filter which AuditEvent to delete.
     * 
    **/
    where: AuditEventWhereUniqueInput
  }


  /**
   * AuditEvent deleteMany
   */
  export type AuditEventDeleteManyArgs = {
    /**
     * Filter which AuditEvents to delete
     * 
    **/
    where?: AuditEventWhereInput
  }


  /**
   * AuditEvent findRaw
   */
  export type AuditEventFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * AuditEvent aggregateRaw
   */
  export type AuditEventAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * AuditEvent: findUniqueOrThrow
   */
  export type AuditEventFindUniqueOrThrowArgs = AuditEventFindUniqueArgsBase
      

  /**
   * AuditEvent: findFirstOrThrow
   */
  export type AuditEventFindFirstOrThrowArgs = AuditEventFindFirstArgsBase
      

  /**
   * AuditEvent without action
   */
  export type AuditEventArgs = {
    /**
     * Select specific fields to fetch from the AuditEvent
     * 
    **/
    select?: AuditEventSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuditEventInclude | null
  }



  /**
   * Model Refresh
   */


  export type AggregateRefresh = {
    _count: RefreshCountAggregateOutputType | null
    _min: RefreshMinAggregateOutputType | null
    _max: RefreshMaxAggregateOutputType | null
  }

  export type RefreshMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
    createdByIp: string | null
    revoked: Date | null
    revokedByIp: string | null
    replacedByToken: string | null
  }

  export type RefreshMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
    createdByIp: string | null
    revoked: Date | null
    revokedByIp: string | null
    replacedByToken: string | null
  }

  export type RefreshCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    createdAt: number
    createdByIp: number
    revoked: number
    revokedByIp: number
    replacedByToken: number
    _all: number
  }


  export type RefreshMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    createdByIp?: true
    revoked?: true
    revokedByIp?: true
    replacedByToken?: true
  }

  export type RefreshMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    createdByIp?: true
    revoked?: true
    revokedByIp?: true
    replacedByToken?: true
  }

  export type RefreshCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    createdByIp?: true
    revoked?: true
    revokedByIp?: true
    replacedByToken?: true
    _all?: true
  }

  export type RefreshAggregateArgs = {
    /**
     * Filter which Refresh to aggregate.
     * 
    **/
    where?: RefreshWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refreshes to fetch.
     * 
    **/
    orderBy?: Enumerable<RefreshOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RefreshWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refreshes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refreshes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Refreshes
    **/
    _count?: true | RefreshCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshMaxAggregateInputType
  }

  export type GetRefreshAggregateType<T extends RefreshAggregateArgs> = {
        [P in keyof T & keyof AggregateRefresh]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefresh[P]>
      : GetScalarType<T[P], AggregateRefresh[P]>
  }




  export type RefreshGroupByArgs = {
    where?: RefreshWhereInput
    orderBy?: Enumerable<RefreshOrderByWithAggregationInput>
    by: Array<RefreshScalarFieldEnum>
    having?: RefreshScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshCountAggregateInputType | true
    _min?: RefreshMinAggregateInputType
    _max?: RefreshMaxAggregateInputType
  }


  export type RefreshGroupByOutputType = {
    id: string
    userId: string
    token: string
    expiresAt: Date
    createdAt: Date
    createdByIp: string | null
    revoked: Date | null
    revokedByIp: string | null
    replacedByToken: string | null
    _count: RefreshCountAggregateOutputType | null
    _min: RefreshMinAggregateOutputType | null
    _max: RefreshMaxAggregateOutputType | null
  }

  type GetRefreshGroupByPayload<T extends RefreshGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RefreshGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshGroupByOutputType[P]>
        }
      >
    >


  export type RefreshSelect = {
    id?: boolean
    User?: boolean | UserArgs
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    createdByIp?: boolean
    revoked?: boolean
    revokedByIp?: boolean
    replacedByToken?: boolean
  }

  export type RefreshInclude = {
    User?: boolean | UserArgs
  }

  export type RefreshGetPayload<
    S extends boolean | null | undefined | RefreshArgs,
    U = keyof S
      > = S extends true
        ? Refresh
    : S extends undefined
    ? never
    : S extends RefreshArgs | RefreshFindManyArgs
    ?'include' extends U
    ? Refresh  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :  P extends keyof Refresh ? Refresh[P] : never
  } 
    : Refresh
  : Refresh


  type RefreshCountArgs = Merge<
    Omit<RefreshFindManyArgs, 'select' | 'include'> & {
      select?: RefreshCountAggregateInputType | true
    }
  >

  export interface RefreshDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Refresh that matches the filter.
     * @param {RefreshFindUniqueArgs} args - Arguments to find a Refresh
     * @example
     * // Get one Refresh
     * const refresh = await prisma.refresh.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RefreshFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RefreshFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Refresh'> extends True ? CheckSelect<T, Prisma__RefreshClient<Refresh>, Prisma__RefreshClient<RefreshGetPayload<T>>> : CheckSelect<T, Prisma__RefreshClient<Refresh | null >, Prisma__RefreshClient<RefreshGetPayload<T> | null >>

    /**
     * Find the first Refresh that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshFindFirstArgs} args - Arguments to find a Refresh
     * @example
     * // Get one Refresh
     * const refresh = await prisma.refresh.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RefreshFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RefreshFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Refresh'> extends True ? CheckSelect<T, Prisma__RefreshClient<Refresh>, Prisma__RefreshClient<RefreshGetPayload<T>>> : CheckSelect<T, Prisma__RefreshClient<Refresh | null >, Prisma__RefreshClient<RefreshGetPayload<T> | null >>

    /**
     * Find zero or more Refreshes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Refreshes
     * const refreshes = await prisma.refresh.findMany()
     * 
     * // Get first 10 Refreshes
     * const refreshes = await prisma.refresh.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshWithIdOnly = await prisma.refresh.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RefreshFindManyArgs>(
      args?: SelectSubset<T, RefreshFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Refresh>>, PrismaPromise<Array<RefreshGetPayload<T>>>>

    /**
     * Create a Refresh.
     * @param {RefreshCreateArgs} args - Arguments to create a Refresh.
     * @example
     * // Create one Refresh
     * const Refresh = await prisma.refresh.create({
     *   data: {
     *     // ... data to create a Refresh
     *   }
     * })
     * 
    **/
    create<T extends RefreshCreateArgs>(
      args: SelectSubset<T, RefreshCreateArgs>
    ): CheckSelect<T, Prisma__RefreshClient<Refresh>, Prisma__RefreshClient<RefreshGetPayload<T>>>

    /**
     * Create many Refreshes.
     *     @param {RefreshCreateManyArgs} args - Arguments to create many Refreshes.
     *     @example
     *     // Create many Refreshes
     *     const refresh = await prisma.refresh.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RefreshCreateManyArgs>(
      args?: SelectSubset<T, RefreshCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Refresh.
     * @param {RefreshDeleteArgs} args - Arguments to delete one Refresh.
     * @example
     * // Delete one Refresh
     * const Refresh = await prisma.refresh.delete({
     *   where: {
     *     // ... filter to delete one Refresh
     *   }
     * })
     * 
    **/
    delete<T extends RefreshDeleteArgs>(
      args: SelectSubset<T, RefreshDeleteArgs>
    ): CheckSelect<T, Prisma__RefreshClient<Refresh>, Prisma__RefreshClient<RefreshGetPayload<T>>>

    /**
     * Update one Refresh.
     * @param {RefreshUpdateArgs} args - Arguments to update one Refresh.
     * @example
     * // Update one Refresh
     * const refresh = await prisma.refresh.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RefreshUpdateArgs>(
      args: SelectSubset<T, RefreshUpdateArgs>
    ): CheckSelect<T, Prisma__RefreshClient<Refresh>, Prisma__RefreshClient<RefreshGetPayload<T>>>

    /**
     * Delete zero or more Refreshes.
     * @param {RefreshDeleteManyArgs} args - Arguments to filter Refreshes to delete.
     * @example
     * // Delete a few Refreshes
     * const { count } = await prisma.refresh.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RefreshDeleteManyArgs>(
      args?: SelectSubset<T, RefreshDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refreshes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Refreshes
     * const refresh = await prisma.refresh.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RefreshUpdateManyArgs>(
      args: SelectSubset<T, RefreshUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Refresh.
     * @param {RefreshUpsertArgs} args - Arguments to update or create a Refresh.
     * @example
     * // Update or create a Refresh
     * const refresh = await prisma.refresh.upsert({
     *   create: {
     *     // ... data to create a Refresh
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Refresh we want to update
     *   }
     * })
    **/
    upsert<T extends RefreshUpsertArgs>(
      args: SelectSubset<T, RefreshUpsertArgs>
    ): CheckSelect<T, Prisma__RefreshClient<Refresh>, Prisma__RefreshClient<RefreshGetPayload<T>>>

    /**
     * Find zero or more Refreshes that matches the filter.
     * @param {RefreshFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const refresh = await prisma.refresh.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: RefreshFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Refresh.
     * @param {RefreshAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const refresh = await prisma.refresh.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: RefreshAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Refresh that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {RefreshFindUniqueOrThrowArgs} args - Arguments to find a Refresh
     * @example
     * // Get one Refresh
     * const refresh = await prisma.refresh.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RefreshFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RefreshFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__RefreshClient<Refresh>, Prisma__RefreshClient<RefreshGetPayload<T>>>

    /**
     * Find the first Refresh that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshFindFirstOrThrowArgs} args - Arguments to find a Refresh
     * @example
     * // Get one Refresh
     * const refresh = await prisma.refresh.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RefreshFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RefreshFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__RefreshClient<Refresh>, Prisma__RefreshClient<RefreshGetPayload<T>>>

    /**
     * Count the number of Refreshes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshCountArgs} args - Arguments to filter Refreshes to count.
     * @example
     * // Count the number of Refreshes
     * const count = await prisma.refresh.count({
     *   where: {
     *     // ... the filter for the Refreshes we want to count
     *   }
     * })
    **/
    count<T extends RefreshCountArgs>(
      args?: Subset<T, RefreshCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Refresh.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshAggregateArgs>(args: Subset<T, RefreshAggregateArgs>): PrismaPromise<GetRefreshAggregateType<T>>

    /**
     * Group by Refresh.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshGroupByArgs} args - Group by arguments.
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
      T extends RefreshGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshGroupByArgs['orderBy'] }
        : { orderBy?: RefreshGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Refresh.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RefreshClient<T> implements PrismaPromise<T> {
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

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

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
   * Refresh base type for findUnique actions
   */
  export type RefreshFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Refresh
     * 
    **/
    select?: RefreshSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshInclude | null
    /**
     * Filter, which Refresh to fetch.
     * 
    **/
    where: RefreshWhereUniqueInput
  }

  /**
   * Refresh: findUnique
   */
  export interface RefreshFindUniqueArgs extends RefreshFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Refresh base type for findFirst actions
   */
  export type RefreshFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Refresh
     * 
    **/
    select?: RefreshSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshInclude | null
    /**
     * Filter, which Refresh to fetch.
     * 
    **/
    where?: RefreshWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refreshes to fetch.
     * 
    **/
    orderBy?: Enumerable<RefreshOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Refreshes.
     * 
    **/
    cursor?: RefreshWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refreshes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refreshes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Refreshes.
     * 
    **/
    distinct?: Enumerable<RefreshScalarFieldEnum>
  }

  /**
   * Refresh: findFirst
   */
  export interface RefreshFindFirstArgs extends RefreshFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Refresh findMany
   */
  export type RefreshFindManyArgs = {
    /**
     * Select specific fields to fetch from the Refresh
     * 
    **/
    select?: RefreshSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshInclude | null
    /**
     * Filter, which Refreshes to fetch.
     * 
    **/
    where?: RefreshWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refreshes to fetch.
     * 
    **/
    orderBy?: Enumerable<RefreshOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Refreshes.
     * 
    **/
    cursor?: RefreshWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refreshes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refreshes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RefreshScalarFieldEnum>
  }


  /**
   * Refresh create
   */
  export type RefreshCreateArgs = {
    /**
     * Select specific fields to fetch from the Refresh
     * 
    **/
    select?: RefreshSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshInclude | null
    /**
     * The data needed to create a Refresh.
     * 
    **/
    data: XOR<RefreshCreateInput, RefreshUncheckedCreateInput>
  }


  /**
   * Refresh createMany
   */
  export type RefreshCreateManyArgs = {
    /**
     * The data used to create many Refreshes.
     * 
    **/
    data: Enumerable<RefreshCreateManyInput>
  }


  /**
   * Refresh update
   */
  export type RefreshUpdateArgs = {
    /**
     * Select specific fields to fetch from the Refresh
     * 
    **/
    select?: RefreshSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshInclude | null
    /**
     * The data needed to update a Refresh.
     * 
    **/
    data: XOR<RefreshUpdateInput, RefreshUncheckedUpdateInput>
    /**
     * Choose, which Refresh to update.
     * 
    **/
    where: RefreshWhereUniqueInput
  }


  /**
   * Refresh updateMany
   */
  export type RefreshUpdateManyArgs = {
    /**
     * The data used to update Refreshes.
     * 
    **/
    data: XOR<RefreshUpdateManyMutationInput, RefreshUncheckedUpdateManyInput>
    /**
     * Filter which Refreshes to update
     * 
    **/
    where?: RefreshWhereInput
  }


  /**
   * Refresh upsert
   */
  export type RefreshUpsertArgs = {
    /**
     * Select specific fields to fetch from the Refresh
     * 
    **/
    select?: RefreshSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshInclude | null
    /**
     * The filter to search for the Refresh to update in case it exists.
     * 
    **/
    where: RefreshWhereUniqueInput
    /**
     * In case the Refresh found by the `where` argument doesn't exist, create a new Refresh with this data.
     * 
    **/
    create: XOR<RefreshCreateInput, RefreshUncheckedCreateInput>
    /**
     * In case the Refresh was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RefreshUpdateInput, RefreshUncheckedUpdateInput>
  }


  /**
   * Refresh delete
   */
  export type RefreshDeleteArgs = {
    /**
     * Select specific fields to fetch from the Refresh
     * 
    **/
    select?: RefreshSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshInclude | null
    /**
     * Filter which Refresh to delete.
     * 
    **/
    where: RefreshWhereUniqueInput
  }


  /**
   * Refresh deleteMany
   */
  export type RefreshDeleteManyArgs = {
    /**
     * Filter which Refreshes to delete
     * 
    **/
    where?: RefreshWhereInput
  }


  /**
   * Refresh findRaw
   */
  export type RefreshFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Refresh aggregateRaw
   */
  export type RefreshAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Refresh: findUniqueOrThrow
   */
  export type RefreshFindUniqueOrThrowArgs = RefreshFindUniqueArgsBase
      

  /**
   * Refresh: findFirstOrThrow
   */
  export type RefreshFindFirstOrThrowArgs = RefreshFindFirstArgsBase
      

  /**
   * Refresh without action
   */
  export type RefreshArgs = {
    /**
     * Select specific fields to fetch from the Refresh
     * 
    **/
    select?: RefreshSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RefreshInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AccountScalarFieldEnum: {
    id: 'id',
    address: 'address',
    name: 'name',
    description: 'description',
    preferredToken: 'preferredToken',
    tag: 'tag',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    walletId: 'walletId'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const AuditEventScalarFieldEnum: {
    id: 'id',
    url: 'url',
    method: 'method',
    params: 'params',
    query: 'query',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type AuditEventScalarFieldEnum = (typeof AuditEventScalarFieldEnum)[keyof typeof AuditEventScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    firstName: 'firstName',
    lastName: 'lastName',
    title: 'title',
    company: 'company',
    type: 'type',
    wallet: 'wallet',
    tag: 'tag',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    replacedBy: 'replacedBy',
    status: 'status',
    userId: 'userId',
    orgId: 'orgId'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const ContractorScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    firstName: 'firstName',
    lastName: 'lastName',
    type: 'type',
    wallet: 'wallet',
    tag: 'tag',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    replacedBy: 'replacedBy',
    status: 'status',
    userId: 'userId',
    orgId: 'orgId'
  };

  export type ContractorScalarFieldEnum = (typeof ContractorScalarFieldEnum)[keyof typeof ContractorScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    firstName: 'firstName',
    lastName: 'lastName',
    type: 'type',
    wallet: 'wallet',
    tag: 'tag',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    replacedBy: 'replacedBy',
    status: 'status',
    userId: 'userId',
    orgId: 'orgId'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const InvoiceItemScalarFieldEnum: {
    id: 'id',
    number: 'number',
    name: 'name',
    description: 'description',
    token: 'token',
    amount: 'amount',
    invoiceId: 'invoiceId'
  };

  export type InvoiceItemScalarFieldEnum = (typeof InvoiceItemScalarFieldEnum)[keyof typeof InvoiceItemScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    invoiceId: 'invoiceId',
    uuid: 'uuid',
    email: 'email',
    title: 'title',
    from: 'from',
    number: 'number',
    token: 'token',
    issuer: 'issuer',
    due: 'due',
    receiveto: 'receiveto',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    senderId: 'senderId'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const LeadScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    firstName: 'firstName',
    lastName: 'lastName',
    type: 'type',
    wallet: 'wallet',
    tag: 'tag',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    replacedBy: 'replacedBy',
    status: 'status',
    userId: 'userId',
    orgId: 'orgId'
  };

  export type LeadScalarFieldEnum = (typeof LeadScalarFieldEnum)[keyof typeof LeadScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    firstName: 'firstName',
    lastName: 'lastName',
    type: 'type',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    replacedBy: 'replacedBy',
    status: 'status',
    ownerId: 'ownerId'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const OwnerScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    firstName: 'firstName',
    lastName: 'lastName',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    replacedBy: 'replacedBy',
    status: 'status',
    userId: 'userId'
  };

  export type OwnerScalarFieldEnum = (typeof OwnerScalarFieldEnum)[keyof typeof OwnerScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    identities: 'identities',
    firstName: 'firstName',
    lastName: 'lastName',
    nickname: 'nickname',
    picture: 'picture',
    phone: 'phone',
    phoneVerified: 'phoneVerified',
    blocked: 'blocked',
    lastIP: 'lastIP',
    lastLogin: 'lastLogin',
    multifactor: 'multifactor',
    loginCount: 'loginCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RefreshScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    createdByIp: 'createdByIp',
    revoked: 'revoked',
    revokedByIp: 'revokedByIp',
    replacedByToken: 'replacedByToken'
  };

  export type RefreshScalarFieldEnum = (typeof RefreshScalarFieldEnum)[keyof typeof RefreshScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    passwordHash: 'passwordHash',
    lastName: 'lastName',
    role: 'role',
    verificationToken: 'verificationToken',
    verified: 'verified',
    acceptTerms: 'acceptTerms',
    resetToken: 'resetToken',
    passwordReset: 'passwordReset',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WalletScalarFieldEnum: {
    id: 'id',
    key: 'key',
    name: 'name',
    description: 'description',
    preferredToken: 'preferredToken',
    method: 'method',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type InvoiceItemWhereInput = {
    AND?: Enumerable<InvoiceItemWhereInput>
    OR?: Enumerable<InvoiceItemWhereInput>
    NOT?: Enumerable<InvoiceItemWhereInput>
    id?: StringFilter | string
    number?: IntNullableFilter | number | null
    name?: StringNullableFilter | string | null
    description?: StringFilter | string
    token?: StringNullableFilter | string | null
    amount?: StringFilter | string
    Invoice?: XOR<InvoiceRelationFilter, InvoiceWhereInput> | null
    invoiceId?: StringNullableFilter | string | null
  }

  export type InvoiceItemOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    description?: SortOrder
    token?: SortOrder
    amount?: SortOrder
    Invoice?: InvoiceOrderByWithRelationInput
    invoiceId?: SortOrder
  }

  export type InvoiceItemWhereUniqueInput = {
    id?: string
  }

  export type InvoiceItemOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    description?: SortOrder
    token?: SortOrder
    amount?: SortOrder
    invoiceId?: SortOrder
    _count?: InvoiceItemCountOrderByAggregateInput
    _avg?: InvoiceItemAvgOrderByAggregateInput
    _max?: InvoiceItemMaxOrderByAggregateInput
    _min?: InvoiceItemMinOrderByAggregateInput
    _sum?: InvoiceItemSumOrderByAggregateInput
  }

  export type InvoiceItemScalarWhereWithAggregatesInput = {
    AND?: Enumerable<InvoiceItemScalarWhereWithAggregatesInput>
    OR?: Enumerable<InvoiceItemScalarWhereWithAggregatesInput>
    NOT?: Enumerable<InvoiceItemScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    number?: IntNullableWithAggregatesFilter | number | null
    name?: StringNullableWithAggregatesFilter | string | null
    description?: StringWithAggregatesFilter | string
    token?: StringNullableWithAggregatesFilter | string | null
    amount?: StringWithAggregatesFilter | string
    invoiceId?: StringNullableWithAggregatesFilter | string | null
  }

  export type InvoiceWhereInput = {
    AND?: Enumerable<InvoiceWhereInput>
    OR?: Enumerable<InvoiceWhereInput>
    NOT?: Enumerable<InvoiceWhereInput>
    id?: StringFilter | string
    invoiceId?: StringFilter | string
    uuid?: StringFilter | string
    email?: StringFilter | string
    title?: StringNullableFilter | string | null
    from?: JsonNullableFilter
    number?: StringFilter | string
    token?: StringNullableFilter | string | null
    issuer?: StringNullableFilter | string | null
    due?: DateTimeNullableFilter | Date | string | null
    receiveto?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Items?: InvoiceItemListRelationFilter
    sender?: XOR<UserRelationFilter, UserWhereInput> | null
    senderId?: StringNullableFilter | string | null
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    uuid?: SortOrder
    email?: SortOrder
    title?: SortOrder
    from?: SortOrder
    number?: SortOrder
    token?: SortOrder
    issuer?: SortOrder
    due?: SortOrder
    receiveto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Items?: InvoiceItemOrderByRelationAggregateInput
    sender?: UserOrderByWithRelationInput
    senderId?: SortOrder
  }

  export type InvoiceWhereUniqueInput = {
    id?: string
  }

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    uuid?: SortOrder
    email?: SortOrder
    title?: SortOrder
    from?: SortOrder
    number?: SortOrder
    token?: SortOrder
    issuer?: SortOrder
    due?: SortOrder
    receiveto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    senderId?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<InvoiceScalarWhereWithAggregatesInput>
    OR?: Enumerable<InvoiceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<InvoiceScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    invoiceId?: StringWithAggregatesFilter | string
    uuid?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    title?: StringNullableWithAggregatesFilter | string | null
    from?: JsonNullableWithAggregatesFilter
    number?: StringWithAggregatesFilter | string
    token?: StringNullableWithAggregatesFilter | string | null
    issuer?: StringNullableWithAggregatesFilter | string | null
    due?: DateTimeNullableWithAggregatesFilter | Date | string | null
    receiveto?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    senderId?: StringNullableWithAggregatesFilter | string | null
  }

  export type AccountWhereInput = {
    AND?: Enumerable<AccountWhereInput>
    OR?: Enumerable<AccountWhereInput>
    NOT?: Enumerable<AccountWhereInput>
    id?: StringFilter | string
    address?: StringFilter | string
    name?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    preferredToken?: JsonNullableFilter
    tag?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Wallet?: XOR<WalletRelationFilter, WalletWhereInput> | null
    walletId?: StringNullableFilter | string | null
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    name?: SortOrder
    description?: SortOrder
    preferredToken?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Wallet?: WalletOrderByWithRelationInput
    walletId?: SortOrder
  }

  export type AccountWhereUniqueInput = {
    id?: string
  }

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    name?: SortOrder
    description?: SortOrder
    preferredToken?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    walletId?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AccountScalarWhereWithAggregatesInput>
    OR?: Enumerable<AccountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AccountScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    preferredToken?: JsonNullableWithAggregatesFilter
    tag?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    walletId?: StringNullableWithAggregatesFilter | string | null
  }

  export type WalletWhereInput = {
    AND?: Enumerable<WalletWhereInput>
    OR?: Enumerable<WalletWhereInput>
    NOT?: Enumerable<WalletWhereInput>
    id?: StringFilter | string
    key?: StringFilter | string
    name?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    preferredToken?: JsonNullableFilter
    method?: JsonFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Accounts?: AccountListRelationFilter
    User?: XOR<UserRelationFilter, UserWhereInput> | null
    userId?: StringNullableFilter | string | null
  }

  export type WalletOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    description?: SortOrder
    preferredToken?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Accounts?: AccountOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
    userId?: SortOrder
  }

  export type WalletWhereUniqueInput = {
    id?: string
  }

  export type WalletOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    description?: SortOrder
    preferredToken?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: WalletCountOrderByAggregateInput
    _max?: WalletMaxOrderByAggregateInput
    _min?: WalletMinOrderByAggregateInput
  }

  export type WalletScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WalletScalarWhereWithAggregatesInput>
    OR?: Enumerable<WalletScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WalletScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    key?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    preferredToken?: JsonNullableWithAggregatesFilter
    method?: JsonWithAggregatesFilter
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: StringNullableWithAggregatesFilter | string | null
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    username?: StringFilter | string
    email?: StringFilter | string
    passwordHash?: StringFilter | string
    lastName?: StringNullableFilter | string | null
    role?: EnumRoleFilter | Role
    verificationToken?: StringNullableFilter | string | null
    verified?: BoolFilter | boolean
    acceptTerms?: BoolFilter | boolean
    resetToken?: StringNullableFilter | string | null
    passwordReset?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Invoices?: InvoiceListRelationFilter
    Wallets?: WalletListRelationFilter
    AuditEvents?: AuditEventListRelationFilter
    Profile?: ProfileListRelationFilter
    Refresh?: RefreshListRelationFilter
    Owners?: OwnerListRelationFilter
    Clients?: ClientListRelationFilter
    Employees?: EmployeeListRelationFilter
    Leads?: LeadListRelationFilter
    Contractors?: ContractorListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    verificationToken?: SortOrder
    verified?: SortOrder
    acceptTerms?: SortOrder
    resetToken?: SortOrder
    passwordReset?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Invoices?: InvoiceOrderByRelationAggregateInput
    Wallets?: WalletOrderByRelationAggregateInput
    AuditEvents?: AuditEventOrderByRelationAggregateInput
    Profile?: ProfileOrderByRelationAggregateInput
    Refresh?: RefreshOrderByRelationAggregateInput
    Owners?: OwnerOrderByRelationAggregateInput
    Clients?: ClientOrderByRelationAggregateInput
    Employees?: EmployeeOrderByRelationAggregateInput
    Leads?: LeadOrderByRelationAggregateInput
    Contractors?: ContractorOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    username?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    verificationToken?: SortOrder
    verified?: SortOrder
    acceptTerms?: SortOrder
    resetToken?: SortOrder
    passwordReset?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    passwordHash?: StringWithAggregatesFilter | string
    lastName?: StringNullableWithAggregatesFilter | string | null
    role?: EnumRoleWithAggregatesFilter | Role
    verificationToken?: StringNullableWithAggregatesFilter | string | null
    verified?: BoolWithAggregatesFilter | boolean
    acceptTerms?: BoolWithAggregatesFilter | boolean
    resetToken?: StringNullableWithAggregatesFilter | string | null
    passwordReset?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ClientWhereInput = {
    AND?: Enumerable<ClientWhereInput>
    OR?: Enumerable<ClientWhereInput>
    NOT?: Enumerable<ClientWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    name?: StringFilter | string
    firstName?: StringNullableFilter | string | null
    lastName?: StringNullableFilter | string | null
    title?: StringNullableFilter | string | null
    company?: StringNullableFilter | string | null
    type?: EnumTypeFilter | Type
    wallet?: StringNullableFilter | string | null
    tag?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    replacedBy?: StringNullableFilter | string | null
    status?: EnumStatusFilter | Status
    User?: XOR<UserRelationFilter, UserWhereInput> | null
    userId?: StringNullableFilter | string | null
    Organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput> | null
    orgId?: StringNullableFilter | string | null
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    title?: SortOrder
    company?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
    tag?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    User?: UserOrderByWithRelationInput
    userId?: SortOrder
    Organization?: OrganizationOrderByWithRelationInput
    orgId?: SortOrder
  }

  export type ClientWhereUniqueInput = {
    id?: string
  }

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    title?: SortOrder
    company?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
    tag?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ClientScalarWhereWithAggregatesInput>
    OR?: Enumerable<ClientScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ClientScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    firstName?: StringNullableWithAggregatesFilter | string | null
    lastName?: StringNullableWithAggregatesFilter | string | null
    title?: StringNullableWithAggregatesFilter | string | null
    company?: StringNullableWithAggregatesFilter | string | null
    type?: EnumTypeWithAggregatesFilter | Type
    wallet?: StringNullableWithAggregatesFilter | string | null
    tag?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    replacedBy?: StringNullableWithAggregatesFilter | string | null
    status?: EnumStatusWithAggregatesFilter | Status
    userId?: StringNullableWithAggregatesFilter | string | null
    orgId?: StringNullableWithAggregatesFilter | string | null
  }

  export type EmployeeWhereInput = {
    AND?: Enumerable<EmployeeWhereInput>
    OR?: Enumerable<EmployeeWhereInput>
    NOT?: Enumerable<EmployeeWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    name?: StringFilter | string
    firstName?: StringNullableFilter | string | null
    lastName?: StringNullableFilter | string | null
    type?: EnumTypeFilter | Type
    wallet?: StringNullableFilter | string | null
    tag?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    replacedBy?: StringNullableFilter | string | null
    status?: EnumStatusFilter | Status
    User?: XOR<UserRelationFilter, UserWhereInput> | null
    userId?: StringNullableFilter | string | null
    Organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput> | null
    orgId?: StringNullableFilter | string | null
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
    tag?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    User?: UserOrderByWithRelationInput
    userId?: SortOrder
    Organization?: OrganizationOrderByWithRelationInput
    orgId?: SortOrder
  }

  export type EmployeeWhereUniqueInput = {
    id?: string
  }

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
    tag?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EmployeeScalarWhereWithAggregatesInput>
    OR?: Enumerable<EmployeeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EmployeeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    firstName?: StringNullableWithAggregatesFilter | string | null
    lastName?: StringNullableWithAggregatesFilter | string | null
    type?: EnumTypeWithAggregatesFilter | Type
    wallet?: StringNullableWithAggregatesFilter | string | null
    tag?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    replacedBy?: StringNullableWithAggregatesFilter | string | null
    status?: EnumStatusWithAggregatesFilter | Status
    userId?: StringNullableWithAggregatesFilter | string | null
    orgId?: StringNullableWithAggregatesFilter | string | null
  }

  export type LeadWhereInput = {
    AND?: Enumerable<LeadWhereInput>
    OR?: Enumerable<LeadWhereInput>
    NOT?: Enumerable<LeadWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    name?: StringFilter | string
    firstName?: StringNullableFilter | string | null
    lastName?: StringNullableFilter | string | null
    type?: EnumTypeFilter | Type
    wallet?: StringNullableFilter | string | null
    tag?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    replacedBy?: StringNullableFilter | string | null
    status?: EnumStatusFilter | Status
    User?: XOR<UserRelationFilter, UserWhereInput> | null
    userId?: StringNullableFilter | string | null
    Organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput> | null
    orgId?: StringNullableFilter | string | null
  }

  export type LeadOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
    tag?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    User?: UserOrderByWithRelationInput
    userId?: SortOrder
    Organization?: OrganizationOrderByWithRelationInput
    orgId?: SortOrder
  }

  export type LeadWhereUniqueInput = {
    id?: string
  }

  export type LeadOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
    tag?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
    _count?: LeadCountOrderByAggregateInput
    _max?: LeadMaxOrderByAggregateInput
    _min?: LeadMinOrderByAggregateInput
  }

  export type LeadScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LeadScalarWhereWithAggregatesInput>
    OR?: Enumerable<LeadScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LeadScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    firstName?: StringNullableWithAggregatesFilter | string | null
    lastName?: StringNullableWithAggregatesFilter | string | null
    type?: EnumTypeWithAggregatesFilter | Type
    wallet?: StringNullableWithAggregatesFilter | string | null
    tag?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    replacedBy?: StringNullableWithAggregatesFilter | string | null
    status?: EnumStatusWithAggregatesFilter | Status
    userId?: StringNullableWithAggregatesFilter | string | null
    orgId?: StringNullableWithAggregatesFilter | string | null
  }

  export type ContractorWhereInput = {
    AND?: Enumerable<ContractorWhereInput>
    OR?: Enumerable<ContractorWhereInput>
    NOT?: Enumerable<ContractorWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    name?: StringFilter | string
    firstName?: StringNullableFilter | string | null
    lastName?: StringNullableFilter | string | null
    type?: EnumTypeFilter | Type
    wallet?: StringNullableFilter | string | null
    tag?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    replacedBy?: StringNullableFilter | string | null
    status?: EnumStatusFilter | Status
    User?: XOR<UserRelationFilter, UserWhereInput> | null
    userId?: StringNullableFilter | string | null
    Organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput> | null
    orgId?: StringNullableFilter | string | null
  }

  export type ContractorOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
    tag?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    User?: UserOrderByWithRelationInput
    userId?: SortOrder
    Organization?: OrganizationOrderByWithRelationInput
    orgId?: SortOrder
  }

  export type ContractorWhereUniqueInput = {
    id?: string
  }

  export type ContractorOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
    tag?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
    _count?: ContractorCountOrderByAggregateInput
    _max?: ContractorMaxOrderByAggregateInput
    _min?: ContractorMinOrderByAggregateInput
  }

  export type ContractorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ContractorScalarWhereWithAggregatesInput>
    OR?: Enumerable<ContractorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ContractorScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    firstName?: StringNullableWithAggregatesFilter | string | null
    lastName?: StringNullableWithAggregatesFilter | string | null
    type?: EnumTypeWithAggregatesFilter | Type
    wallet?: StringNullableWithAggregatesFilter | string | null
    tag?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    replacedBy?: StringNullableWithAggregatesFilter | string | null
    status?: EnumStatusWithAggregatesFilter | Status
    userId?: StringNullableWithAggregatesFilter | string | null
    orgId?: StringNullableWithAggregatesFilter | string | null
  }

  export type OrganizationWhereInput = {
    AND?: Enumerable<OrganizationWhereInput>
    OR?: Enumerable<OrganizationWhereInput>
    NOT?: Enumerable<OrganizationWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    name?: StringFilter | string
    firstName?: StringNullableFilter | string | null
    lastName?: StringNullableFilter | string | null
    type?: EnumTypeFilter | Type
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    replacedBy?: StringNullableFilter | string | null
    status?: EnumStatusFilter | Status
    Owner?: XOR<OwnerRelationFilter, OwnerWhereInput> | null
    ownerId?: StringNullableFilter | string | null
    Clients?: ClientListRelationFilter
    Employees?: EmployeeListRelationFilter
    Leads?: LeadListRelationFilter
    Contractors?: ContractorListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    Owner?: OwnerOrderByWithRelationInput
    ownerId?: SortOrder
    Clients?: ClientOrderByRelationAggregateInput
    Employees?: EmployeeOrderByRelationAggregateInput
    Leads?: LeadOrderByRelationAggregateInput
    Contractors?: ContractorOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = {
    id?: string
  }

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrganizationScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrganizationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrganizationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    firstName?: StringNullableWithAggregatesFilter | string | null
    lastName?: StringNullableWithAggregatesFilter | string | null
    type?: EnumTypeWithAggregatesFilter | Type
    description?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    replacedBy?: StringNullableWithAggregatesFilter | string | null
    status?: EnumStatusWithAggregatesFilter | Status
    ownerId?: StringNullableWithAggregatesFilter | string | null
  }

  export type OwnerWhereInput = {
    AND?: Enumerable<OwnerWhereInput>
    OR?: Enumerable<OwnerWhereInput>
    NOT?: Enumerable<OwnerWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    name?: StringFilter | string
    firstName?: StringNullableFilter | string | null
    lastName?: StringNullableFilter | string | null
    type?: EnumTypeFilter | Type
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    replacedBy?: StringNullableFilter | string | null
    status?: EnumStatusFilter | Status
    User?: XOR<UserRelationFilter, UserWhereInput> | null
    userId?: StringNullableFilter | string | null
    Organization?: OrganizationListRelationFilter
  }

  export type OwnerOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    User?: UserOrderByWithRelationInput
    userId?: SortOrder
    Organization?: OrganizationOrderByRelationAggregateInput
  }

  export type OwnerWhereUniqueInput = {
    id?: string
  }

  export type OwnerOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    _count?: OwnerCountOrderByAggregateInput
    _max?: OwnerMaxOrderByAggregateInput
    _min?: OwnerMinOrderByAggregateInput
  }

  export type OwnerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OwnerScalarWhereWithAggregatesInput>
    OR?: Enumerable<OwnerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OwnerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    firstName?: StringNullableWithAggregatesFilter | string | null
    lastName?: StringNullableWithAggregatesFilter | string | null
    type?: EnumTypeWithAggregatesFilter | Type
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    replacedBy?: StringNullableWithAggregatesFilter | string | null
    status?: EnumStatusWithAggregatesFilter | Status
    userId?: StringNullableWithAggregatesFilter | string | null
  }

  export type ProfileWhereInput = {
    AND?: Enumerable<ProfileWhereInput>
    OR?: Enumerable<ProfileWhereInput>
    NOT?: Enumerable<ProfileWhereInput>
    id?: StringFilter | string
    identities?: JsonNullableListFilter
    firstName?: StringNullableFilter | string | null
    lastName?: StringNullableFilter | string | null
    nickname?: StringNullableFilter | string | null
    picture?: BytesFilter | Buffer
    phone?: StringNullableFilter | string | null
    phoneVerified?: BoolFilter | boolean
    blocked?: BoolFilter | boolean
    lastIP?: StringNullableFilter | string | null
    lastLogin?: StringNullableFilter | string | null
    multifactor?: JsonNullableListFilter
    loginCount?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput> | null
    userId?: StringNullableFilter | string | null
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    identities?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nickname?: SortOrder
    picture?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    blocked?: SortOrder
    lastIP?: SortOrder
    lastLogin?: SortOrder
    multifactor?: SortOrder
    loginCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByWithRelationInput
    userId?: SortOrder
  }

  export type ProfileWhereUniqueInput = {
    id?: string
  }

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    identities?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nickname?: SortOrder
    picture?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    blocked?: SortOrder
    lastIP?: SortOrder
    lastLogin?: SortOrder
    multifactor?: SortOrder
    loginCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProfileScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProfileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProfileScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    identities?: JsonNullableListFilter
    firstName?: StringNullableWithAggregatesFilter | string | null
    lastName?: StringNullableWithAggregatesFilter | string | null
    nickname?: StringNullableWithAggregatesFilter | string | null
    picture?: BytesWithAggregatesFilter | Buffer
    phone?: StringNullableWithAggregatesFilter | string | null
    phoneVerified?: BoolWithAggregatesFilter | boolean
    blocked?: BoolWithAggregatesFilter | boolean
    lastIP?: StringNullableWithAggregatesFilter | string | null
    lastLogin?: StringNullableWithAggregatesFilter | string | null
    multifactor?: JsonNullableListFilter
    loginCount?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: StringNullableWithAggregatesFilter | string | null
  }

  export type AuditEventWhereInput = {
    AND?: Enumerable<AuditEventWhereInput>
    OR?: Enumerable<AuditEventWhereInput>
    NOT?: Enumerable<AuditEventWhereInput>
    id?: StringFilter | string
    url?: StringNullableFilter | string | null
    method?: StringNullableFilter | string | null
    params?: JsonNullableFilter
    query?: JsonNullableFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput> | null
    userId?: StringNullableFilter | string | null
  }

  export type AuditEventOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    method?: SortOrder
    params?: SortOrder
    query?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByWithRelationInput
    userId?: SortOrder
  }

  export type AuditEventWhereUniqueInput = {
    id?: string
  }

  export type AuditEventOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    method?: SortOrder
    params?: SortOrder
    query?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: AuditEventCountOrderByAggregateInput
    _max?: AuditEventMaxOrderByAggregateInput
    _min?: AuditEventMinOrderByAggregateInput
  }

  export type AuditEventScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AuditEventScalarWhereWithAggregatesInput>
    OR?: Enumerable<AuditEventScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AuditEventScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    url?: StringNullableWithAggregatesFilter | string | null
    method?: StringNullableWithAggregatesFilter | string | null
    params?: JsonNullableWithAggregatesFilter
    query?: JsonNullableWithAggregatesFilter
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: StringNullableWithAggregatesFilter | string | null
  }

  export type RefreshWhereInput = {
    AND?: Enumerable<RefreshWhereInput>
    OR?: Enumerable<RefreshWhereInput>
    NOT?: Enumerable<RefreshWhereInput>
    id?: StringFilter | string
    User?: XOR<UserRelationFilter, UserWhereInput>
    userId?: StringFilter | string
    token?: StringFilter | string
    expiresAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    createdByIp?: StringNullableFilter | string | null
    revoked?: DateTimeNullableFilter | Date | string | null
    revokedByIp?: StringNullableFilter | string | null
    replacedByToken?: StringNullableFilter | string | null
  }

  export type RefreshOrderByWithRelationInput = {
    id?: SortOrder
    User?: UserOrderByWithRelationInput
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    createdByIp?: SortOrder
    revoked?: SortOrder
    revokedByIp?: SortOrder
    replacedByToken?: SortOrder
  }

  export type RefreshWhereUniqueInput = {
    id?: string
  }

  export type RefreshOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    createdByIp?: SortOrder
    revoked?: SortOrder
    revokedByIp?: SortOrder
    replacedByToken?: SortOrder
    _count?: RefreshCountOrderByAggregateInput
    _max?: RefreshMaxOrderByAggregateInput
    _min?: RefreshMinOrderByAggregateInput
  }

  export type RefreshScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RefreshScalarWhereWithAggregatesInput>
    OR?: Enumerable<RefreshScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RefreshScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    token?: StringWithAggregatesFilter | string
    expiresAt?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    createdByIp?: StringNullableWithAggregatesFilter | string | null
    revoked?: DateTimeNullableWithAggregatesFilter | Date | string | null
    revokedByIp?: StringNullableWithAggregatesFilter | string | null
    replacedByToken?: StringNullableWithAggregatesFilter | string | null
  }

  export type InvoiceItemCreateInput = {
    id?: string
    number?: number | null
    name?: string | null
    description: string
    token?: string | null
    amount: string
    Invoice?: InvoiceCreateNestedOneWithoutItemsInput
  }

  export type InvoiceItemUncheckedCreateInput = {
    id?: string
    number?: number | null
    name?: string | null
    description: string
    token?: string | null
    amount: string
    invoiceId?: string | null
  }

  export type InvoiceItemUpdateInput = {
    number?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: StringFieldUpdateOperationsInput | string
    Invoice?: InvoiceUpdateOneWithoutItemsNestedInput
  }

  export type InvoiceItemUncheckedUpdateInput = {
    number?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: StringFieldUpdateOperationsInput | string
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceItemCreateManyInput = {
    id?: string
    number?: number | null
    name?: string | null
    description: string
    token?: string | null
    amount: string
    invoiceId?: string | null
  }

  export type InvoiceItemUpdateManyMutationInput = {
    number?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceItemUncheckedUpdateManyInput = {
    number?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: StringFieldUpdateOperationsInput | string
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceCreateInput = {
    id?: string
    invoiceId: string
    uuid?: string
    email: string
    title?: string | null
    from?: InputJsonValue | null
    number: string
    token?: string | null
    issuer?: string | null
    due?: Date | string | null
    receiveto: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
    sender?: UserCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    invoiceId: string
    uuid?: string
    email: string
    title?: string | null
    from?: InputJsonValue | null
    number: string
    token?: string | null
    issuer?: string | null
    due?: Date | string | null
    receiveto: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
    senderId?: string | null
  }

  export type InvoiceUpdateInput = {
    invoiceId?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    from?: InputJsonValue | InputJsonValue | null
    number?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    issuer?: NullableStringFieldUpdateOperationsInput | string | null
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiveto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
    sender?: UserUpdateOneWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    invoiceId?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    from?: InputJsonValue | InputJsonValue | null
    number?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    issuer?: NullableStringFieldUpdateOperationsInput | string | null
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiveto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceCreateManyInput = {
    id?: string
    invoiceId: string
    uuid?: string
    email: string
    title?: string | null
    from?: InputJsonValue | null
    number: string
    token?: string | null
    issuer?: string | null
    due?: Date | string | null
    receiveto: string
    createdAt?: Date | string
    updatedAt?: Date | string
    senderId?: string | null
  }

  export type InvoiceUpdateManyMutationInput = {
    invoiceId?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    from?: InputJsonValue | InputJsonValue | null
    number?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    issuer?: NullableStringFieldUpdateOperationsInput | string | null
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiveto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    invoiceId?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    from?: InputJsonValue | InputJsonValue | null
    number?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    issuer?: NullableStringFieldUpdateOperationsInput | string | null
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiveto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateInput = {
    id?: string
    address: string
    name?: string | null
    description?: string | null
    preferredToken?: InputJsonValue | null
    tag: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Wallet?: WalletCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    address: string
    name?: string | null
    description?: string | null
    preferredToken?: InputJsonValue | null
    tag: string
    createdAt?: Date | string
    updatedAt?: Date | string
    walletId?: string | null
  }

  export type AccountUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preferredToken?: InputJsonValue | InputJsonValue | null
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Wallet?: WalletUpdateOneWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preferredToken?: InputJsonValue | InputJsonValue | null
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    walletId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    address: string
    name?: string | null
    description?: string | null
    preferredToken?: InputJsonValue | null
    tag: string
    createdAt?: Date | string
    updatedAt?: Date | string
    walletId?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preferredToken?: InputJsonValue | InputJsonValue | null
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preferredToken?: InputJsonValue | InputJsonValue | null
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    walletId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WalletCreateInput = {
    id?: string
    key: string
    name?: string | null
    description?: string | null
    preferredToken?: InputJsonValue | null
    method: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Accounts?: AccountCreateNestedManyWithoutWalletInput
    User?: UserCreateNestedOneWithoutWalletsInput
  }

  export type WalletUncheckedCreateInput = {
    id?: string
    key: string
    name?: string | null
    description?: string | null
    preferredToken?: InputJsonValue | null
    method: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Accounts?: AccountUncheckedCreateNestedManyWithoutWalletInput
    userId?: string | null
  }

  export type WalletUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preferredToken?: InputJsonValue | InputJsonValue | null
    method?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Accounts?: AccountUpdateManyWithoutWalletNestedInput
    User?: UserUpdateOneWithoutWalletsNestedInput
  }

  export type WalletUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preferredToken?: InputJsonValue | InputJsonValue | null
    method?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Accounts?: AccountUncheckedUpdateManyWithoutWalletNestedInput
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WalletCreateManyInput = {
    id?: string
    key: string
    name?: string | null
    description?: string | null
    preferredToken?: InputJsonValue | null
    method: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type WalletUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preferredToken?: InputJsonValue | InputJsonValue | null
    method?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preferredToken?: InputJsonValue | InputJsonValue | null
    method?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    lastName?: string | null
    role?: Role
    verificationToken?: string | null
    verified?: boolean
    acceptTerms?: boolean
    resetToken?: string | null
    passwordReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceCreateNestedManyWithoutSenderInput
    Wallets?: WalletCreateNestedManyWithoutUserInput
    AuditEvents?: AuditEventCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedManyWithoutUserInput
    Refresh?: RefreshCreateNestedManyWithoutUserInput
    Owners?: OwnerCreateNestedManyWithoutUserInput
    Clients?: ClientCreateNestedManyWithoutUserInput
    Employees?: EmployeeCreateNestedManyWithoutUserInput
    Leads?: LeadCreateNestedManyWithoutUserInput
    Contractors?: ContractorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    lastName?: string | null
    role?: Role
    verificationToken?: string | null
    verified?: boolean
    acceptTerms?: boolean
    resetToken?: string | null
    passwordReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceUncheckedCreateNestedManyWithoutSenderInput
    Wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    AuditEvents?: AuditEventUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    Refresh?: RefreshUncheckedCreateNestedManyWithoutUserInput
    Owners?: OwnerUncheckedCreateNestedManyWithoutUserInput
    Clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    Employees?: EmployeeUncheckedCreateNestedManyWithoutUserInput
    Leads?: LeadUncheckedCreateNestedManyWithoutUserInput
    Contractors?: ContractorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    acceptTerms?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUpdateManyWithoutSenderNestedInput
    Wallets?: WalletUpdateManyWithoutUserNestedInput
    AuditEvents?: AuditEventUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateManyWithoutUserNestedInput
    Refresh?: RefreshUpdateManyWithoutUserNestedInput
    Owners?: OwnerUpdateManyWithoutUserNestedInput
    Clients?: ClientUpdateManyWithoutUserNestedInput
    Employees?: EmployeeUpdateManyWithoutUserNestedInput
    Leads?: LeadUpdateManyWithoutUserNestedInput
    Contractors?: ContractorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    acceptTerms?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUncheckedUpdateManyWithoutSenderNestedInput
    Wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    AuditEvents?: AuditEventUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    Refresh?: RefreshUncheckedUpdateManyWithoutUserNestedInput
    Owners?: OwnerUncheckedUpdateManyWithoutUserNestedInput
    Clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    Employees?: EmployeeUncheckedUpdateManyWithoutUserNestedInput
    Leads?: LeadUncheckedUpdateManyWithoutUserNestedInput
    Contractors?: ContractorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    lastName?: string | null
    role?: Role
    verificationToken?: string | null
    verified?: boolean
    acceptTerms?: boolean
    resetToken?: string | null
    passwordReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    acceptTerms?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    acceptTerms?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    title?: string | null
    company?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    User?: UserCreateNestedOneWithoutClientsInput
    Organization?: OrganizationCreateNestedOneWithoutClientsInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    title?: string | null
    company?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    userId?: string | null
    orgId?: string | null
  }

  export type ClientUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    User?: UserUpdateOneWithoutClientsNestedInput
    Organization?: OrganizationUpdateOneWithoutClientsNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientCreateManyInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    title?: string | null
    company?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    userId?: string | null
    orgId?: string | null
  }

  export type ClientUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
  }

  export type ClientUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeCreateInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    User?: UserCreateNestedOneWithoutEmployeesInput
    Organization?: OrganizationCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    userId?: string | null
    orgId?: string | null
  }

  export type EmployeeUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    User?: UserUpdateOneWithoutEmployeesNestedInput
    Organization?: OrganizationUpdateOneWithoutEmployeesNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeCreateManyInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    userId?: string | null
    orgId?: string | null
  }

  export type EmployeeUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
  }

  export type EmployeeUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeadCreateInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    User?: UserCreateNestedOneWithoutLeadsInput
    Organization?: OrganizationCreateNestedOneWithoutLeadsInput
  }

  export type LeadUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    userId?: string | null
    orgId?: string | null
  }

  export type LeadUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    User?: UserUpdateOneWithoutLeadsNestedInput
    Organization?: OrganizationUpdateOneWithoutLeadsNestedInput
  }

  export type LeadUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeadCreateManyInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    userId?: string | null
    orgId?: string | null
  }

  export type LeadUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
  }

  export type LeadUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContractorCreateInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    User?: UserCreateNestedOneWithoutContractorsInput
    Organization?: OrganizationCreateNestedOneWithoutContractorsInput
  }

  export type ContractorUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    userId?: string | null
    orgId?: string | null
  }

  export type ContractorUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    User?: UserUpdateOneWithoutContractorsNestedInput
    Organization?: OrganizationUpdateOneWithoutContractorsNestedInput
  }

  export type ContractorUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContractorCreateManyInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    userId?: string | null
    orgId?: string | null
  }

  export type ContractorUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
  }

  export type ContractorUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganizationCreateInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    Owner?: OwnerCreateNestedOneWithoutOrganizationInput
    Clients?: ClientCreateNestedManyWithoutOrganizationInput
    Employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    Leads?: LeadCreateNestedManyWithoutOrganizationInput
    Contractors?: ContractorCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    ownerId?: string | null
    Clients?: ClientUncheckedCreateNestedManyWithoutOrganizationInput
    Employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    Leads?: LeadUncheckedCreateNestedManyWithoutOrganizationInput
    Contractors?: ContractorUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    Owner?: OwnerUpdateOneWithoutOrganizationNestedInput
    Clients?: ClientUpdateManyWithoutOrganizationNestedInput
    Employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    Leads?: LeadUpdateManyWithoutOrganizationNestedInput
    Contractors?: ContractorUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    Clients?: ClientUncheckedUpdateManyWithoutOrganizationNestedInput
    Employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    Leads?: LeadUncheckedUpdateManyWithoutOrganizationNestedInput
    Contractors?: ContractorUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    ownerId?: string | null
  }

  export type OrganizationUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
  }

  export type OrganizationUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OwnerCreateInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    User?: UserCreateNestedOneWithoutOwnersInput
    Organization?: OrganizationCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    userId?: string | null
    Organization?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    User?: UserUpdateOneWithoutOwnersNestedInput
    Organization?: OrganizationUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    Organization?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerCreateManyInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    userId?: string | null
  }

  export type OwnerUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
  }

  export type OwnerUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileCreateInput = {
    id?: string
    identities?: ProfileCreateidentitiesInput | Enumerable<InputJsonValue>
    firstName?: string | null
    lastName?: string | null
    nickname?: string | null
    picture: Buffer
    phone?: string | null
    phoneVerified?: boolean
    blocked?: boolean
    lastIP?: string | null
    lastLogin?: string | null
    multifactor?: ProfileCreatemultifactorInput | Enumerable<InputJsonValue>
    loginCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    identities?: ProfileCreateidentitiesInput | Enumerable<InputJsonValue>
    firstName?: string | null
    lastName?: string | null
    nickname?: string | null
    picture: Buffer
    phone?: string | null
    phoneVerified?: boolean
    blocked?: boolean
    lastIP?: string | null
    lastLogin?: string | null
    multifactor?: ProfileCreatemultifactorInput | Enumerable<InputJsonValue>
    loginCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type ProfileUpdateInput = {
    identities?: ProfileUpdateidentitiesInput | Enumerable<InputJsonValue>
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: BytesFieldUpdateOperationsInput | Buffer
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    blocked?: BoolFieldUpdateOperationsInput | boolean
    lastIP?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableStringFieldUpdateOperationsInput | string | null
    multifactor?: ProfileUpdatemultifactorInput | Enumerable<InputJsonValue>
    loginCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    identities?: ProfileUpdateidentitiesInput | Enumerable<InputJsonValue>
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: BytesFieldUpdateOperationsInput | Buffer
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    blocked?: BoolFieldUpdateOperationsInput | boolean
    lastIP?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableStringFieldUpdateOperationsInput | string | null
    multifactor?: ProfileUpdatemultifactorInput | Enumerable<InputJsonValue>
    loginCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileCreateManyInput = {
    id?: string
    identities?: ProfileCreateidentitiesInput | Enumerable<InputJsonValue>
    firstName?: string | null
    lastName?: string | null
    nickname?: string | null
    picture: Buffer
    phone?: string | null
    phoneVerified?: boolean
    blocked?: boolean
    lastIP?: string | null
    lastLogin?: string | null
    multifactor?: ProfileCreatemultifactorInput | Enumerable<InputJsonValue>
    loginCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type ProfileUpdateManyMutationInput = {
    identities?: ProfileUpdateidentitiesInput | Enumerable<InputJsonValue>
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: BytesFieldUpdateOperationsInput | Buffer
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    blocked?: BoolFieldUpdateOperationsInput | boolean
    lastIP?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableStringFieldUpdateOperationsInput | string | null
    multifactor?: ProfileUpdatemultifactorInput | Enumerable<InputJsonValue>
    loginCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    identities?: ProfileUpdateidentitiesInput | Enumerable<InputJsonValue>
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: BytesFieldUpdateOperationsInput | Buffer
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    blocked?: BoolFieldUpdateOperationsInput | boolean
    lastIP?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableStringFieldUpdateOperationsInput | string | null
    multifactor?: ProfileUpdatemultifactorInput | Enumerable<InputJsonValue>
    loginCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditEventCreateInput = {
    id?: string
    url?: string | null
    method?: string | null
    params?: InputJsonValue | null
    query?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedOneWithoutAuditEventsInput
  }

  export type AuditEventUncheckedCreateInput = {
    id?: string
    url?: string | null
    method?: string | null
    params?: InputJsonValue | null
    query?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type AuditEventUpdateInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    params?: InputJsonValue | InputJsonValue | null
    query?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutAuditEventsNestedInput
  }

  export type AuditEventUncheckedUpdateInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    params?: InputJsonValue | InputJsonValue | null
    query?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditEventCreateManyInput = {
    id?: string
    url?: string | null
    method?: string | null
    params?: InputJsonValue | null
    query?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type AuditEventUpdateManyMutationInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    params?: InputJsonValue | InputJsonValue | null
    query?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventUncheckedUpdateManyInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    params?: InputJsonValue | InputJsonValue | null
    query?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshCreateInput = {
    id?: string
    User: UserCreateNestedOneWithoutRefreshInput
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    createdByIp?: string | null
    revoked?: Date | string | null
    revokedByIp?: string | null
    replacedByToken?: string | null
  }

  export type RefreshUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    createdByIp?: string | null
    revoked?: Date | string | null
    revokedByIp?: string | null
    replacedByToken?: string | null
  }

  export type RefreshUpdateInput = {
    User?: UserUpdateOneRequiredWithoutRefreshNestedInput
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByIp?: NullableStringFieldUpdateOperationsInput | string | null
    revoked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedByIp?: NullableStringFieldUpdateOperationsInput | string | null
    replacedByToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByIp?: NullableStringFieldUpdateOperationsInput | string | null
    revoked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedByIp?: NullableStringFieldUpdateOperationsInput | string | null
    replacedByToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshCreateManyInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    createdByIp?: string | null
    revoked?: Date | string | null
    revokedByIp?: string | null
    replacedByToken?: string | null
  }

  export type RefreshUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByIp?: NullableStringFieldUpdateOperationsInput | string | null
    revoked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedByIp?: NullableStringFieldUpdateOperationsInput | string | null
    replacedByToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByIp?: NullableStringFieldUpdateOperationsInput | string | null
    revoked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedByIp?: NullableStringFieldUpdateOperationsInput | string | null
    replacedByToken?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
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
    isSet?: boolean
  }

  export type InvoiceRelationFilter = {
    is?: InvoiceWhereInput | null
    isNot?: InvoiceWhereInput | null
  }

  export type InvoiceItemCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    description?: SortOrder
    token?: SortOrder
    amount?: SortOrder
    invoiceId?: SortOrder
  }

  export type InvoiceItemAvgOrderByAggregateInput = {
    number?: SortOrder
  }

  export type InvoiceItemMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    description?: SortOrder
    token?: SortOrder
    amount?: SortOrder
    invoiceId?: SortOrder
  }

  export type InvoiceItemMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    description?: SortOrder
    token?: SortOrder
    amount?: SortOrder
    invoiceId?: SortOrder
  }

  export type InvoiceItemSumOrderByAggregateInput = {
    number?: SortOrder
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

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    isSet?: boolean
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
    isSet?: boolean
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: InputJsonValue | null
    not?: InputJsonValue | null
    isSet?: boolean
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
    isSet?: boolean
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

  export type InvoiceItemListRelationFilter = {
    every?: InvoiceItemWhereInput
    some?: InvoiceItemWhereInput
    none?: InvoiceItemWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type InvoiceItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    uuid?: SortOrder
    email?: SortOrder
    title?: SortOrder
    from?: SortOrder
    number?: SortOrder
    token?: SortOrder
    issuer?: SortOrder
    due?: SortOrder
    receiveto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    senderId?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    uuid?: SortOrder
    email?: SortOrder
    title?: SortOrder
    number?: SortOrder
    token?: SortOrder
    issuer?: SortOrder
    due?: SortOrder
    receiveto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    senderId?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    uuid?: SortOrder
    email?: SortOrder
    title?: SortOrder
    number?: SortOrder
    token?: SortOrder
    issuer?: SortOrder
    due?: SortOrder
    receiveto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    senderId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: InputJsonValue | null
    not?: InputJsonValue | null
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
    isSet?: boolean
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    isSet?: boolean
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

  export type WalletRelationFilter = {
    is?: WalletWhereInput | null
    isNot?: WalletWhereInput | null
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    name?: SortOrder
    description?: SortOrder
    preferredToken?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    walletId?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    name?: SortOrder
    description?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    walletId?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    name?: SortOrder
    description?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    walletId?: SortOrder
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue
    not?: InputJsonValue
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WalletCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    description?: SortOrder
    preferredToken?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type WalletMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type WalletMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue
    not?: InputJsonValue
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type WalletListRelationFilter = {
    every?: WalletWhereInput
    some?: WalletWhereInput
    none?: WalletWhereInput
  }

  export type AuditEventListRelationFilter = {
    every?: AuditEventWhereInput
    some?: AuditEventWhereInput
    none?: AuditEventWhereInput
  }

  export type ProfileListRelationFilter = {
    every?: ProfileWhereInput
    some?: ProfileWhereInput
    none?: ProfileWhereInput
  }

  export type RefreshListRelationFilter = {
    every?: RefreshWhereInput
    some?: RefreshWhereInput
    none?: RefreshWhereInput
  }

  export type OwnerListRelationFilter = {
    every?: OwnerWhereInput
    some?: OwnerWhereInput
    none?: OwnerWhereInput
  }

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type LeadListRelationFilter = {
    every?: LeadWhereInput
    some?: LeadWhereInput
    none?: LeadWhereInput
  }

  export type ContractorListRelationFilter = {
    every?: ContractorWhereInput
    some?: ContractorWhereInput
    none?: ContractorWhereInput
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WalletOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OwnerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    verificationToken?: SortOrder
    verified?: SortOrder
    acceptTerms?: SortOrder
    resetToken?: SortOrder
    passwordReset?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    verificationToken?: SortOrder
    verified?: SortOrder
    acceptTerms?: SortOrder
    resetToken?: SortOrder
    passwordReset?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    verificationToken?: SortOrder
    verified?: SortOrder
    acceptTerms?: SortOrder
    resetToken?: SortOrder
    passwordReset?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type EnumTypeFilter = {
    equals?: Type
    in?: Enumerable<Type>
    notIn?: Enumerable<Type>
    not?: NestedEnumTypeFilter | Type
  }

  export type EnumStatusFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusFilter | Status
  }

  export type OrganizationRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    title?: SortOrder
    company?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
    tag?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    title?: SortOrder
    company?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
    tag?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    title?: SortOrder
    company?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
    tag?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
  }

  export type EnumTypeWithAggregatesFilter = {
    equals?: Type
    in?: Enumerable<Type>
    notIn?: Enumerable<Type>
    not?: NestedEnumTypeWithAggregatesFilter | Type
    _count?: NestedIntFilter
    _min?: NestedEnumTypeFilter
    _max?: NestedEnumTypeFilter
  }

  export type EnumStatusWithAggregatesFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusWithAggregatesFilter | Status
    _count?: NestedIntFilter
    _min?: NestedEnumStatusFilter
    _max?: NestedEnumStatusFilter
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
    tag?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
    tag?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
    tag?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
  }

  export type LeadCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
    tag?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
  }

  export type LeadMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
    tag?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
  }

  export type LeadMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
    tag?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
  }

  export type ContractorCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
    tag?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
  }

  export type ContractorMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
    tag?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
  }

  export type ContractorMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    wallet?: SortOrder
    tag?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    orgId?: SortOrder
  }

  export type OwnerRelationFilter = {
    is?: OwnerWhereInput | null
    isNot?: OwnerWhereInput | null
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
  }

  export type OrganizationListRelationFilter = {
    every?: OrganizationWhereInput
    some?: OrganizationWhereInput
    none?: OrganizationWhereInput
  }

  export type OrganizationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OwnerCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type OwnerMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type OwnerMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replacedBy?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }
  export type JsonNullableListFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase>, Exclude<keyof Required<JsonNullableListFilterBase>, 'path'>>,
        Required<JsonNullableListFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase>, 'path'>>

  export type JsonNullableListFilterBase = {
    equals?: Enumerable<InputJsonValue> | null
    has?: InputJsonValue | null
    hasEvery?: Enumerable<InputJsonValue>
    hasSome?: Enumerable<InputJsonValue>
    isEmpty?: boolean
  }

  export type BytesFilter = {
    equals?: Buffer
    in?: Enumerable<Buffer>
    notIn?: Enumerable<Buffer>
    not?: NestedBytesFilter | Buffer
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

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    identities?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nickname?: SortOrder
    picture?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    blocked?: SortOrder
    lastIP?: SortOrder
    lastLogin?: SortOrder
    multifactor?: SortOrder
    loginCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    loginCount?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nickname?: SortOrder
    picture?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    blocked?: SortOrder
    lastIP?: SortOrder
    lastLogin?: SortOrder
    loginCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nickname?: SortOrder
    picture?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    blocked?: SortOrder
    lastIP?: SortOrder
    lastLogin?: SortOrder
    loginCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    loginCount?: SortOrder
  }

  export type BytesWithAggregatesFilter = {
    equals?: Buffer
    in?: Enumerable<Buffer>
    notIn?: Enumerable<Buffer>
    not?: NestedBytesWithAggregatesFilter | Buffer
    _count?: NestedIntFilter
    _min?: NestedBytesFilter
    _max?: NestedBytesFilter
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

  export type AuditEventCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    method?: SortOrder
    params?: SortOrder
    query?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type AuditEventMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type AuditEventMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type RefreshCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    createdByIp?: SortOrder
    revoked?: SortOrder
    revokedByIp?: SortOrder
    replacedByToken?: SortOrder
  }

  export type RefreshMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    createdByIp?: SortOrder
    revoked?: SortOrder
    revokedByIp?: SortOrder
    replacedByToken?: SortOrder
  }

  export type RefreshMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    createdByIp?: SortOrder
    revoked?: SortOrder
    revokedByIp?: SortOrder
    replacedByToken?: SortOrder
  }

  export type InvoiceCreateNestedOneWithoutItemsInput = {
    create?: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutItemsInput
    connect?: InvoiceWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type InvoiceUpdateOneWithoutItemsNestedInput = {
    create?: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutItemsInput
    upsert?: InvoiceUpsertWithoutItemsInput
    disconnect?: boolean
    delete?: boolean
    connect?: InvoiceWhereUniqueInput
    update?: XOR<InvoiceUpdateWithoutItemsInput, InvoiceUncheckedUpdateWithoutItemsInput>
  }

  export type InvoiceItemCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<Enumerable<InvoiceItemCreateWithoutInvoiceInput>, Enumerable<InvoiceItemUncheckedCreateWithoutInvoiceInput>>
    connectOrCreate?: Enumerable<InvoiceItemCreateOrConnectWithoutInvoiceInput>
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    connect?: Enumerable<InvoiceItemWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    connect?: UserWhereUniqueInput
  }

  export type InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<Enumerable<InvoiceItemCreateWithoutInvoiceInput>, Enumerable<InvoiceItemUncheckedCreateWithoutInvoiceInput>>
    connectOrCreate?: Enumerable<InvoiceItemCreateOrConnectWithoutInvoiceInput>
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    connect?: Enumerable<InvoiceItemWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InvoiceItemUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<Enumerable<InvoiceItemCreateWithoutInvoiceInput>, Enumerable<InvoiceItemUncheckedCreateWithoutInvoiceInput>>
    connectOrCreate?: Enumerable<InvoiceItemCreateOrConnectWithoutInvoiceInput>
    upsert?: Enumerable<InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput>
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    set?: Enumerable<InvoiceItemWhereUniqueInput>
    disconnect?: Enumerable<InvoiceItemWhereUniqueInput>
    delete?: Enumerable<InvoiceItemWhereUniqueInput>
    connect?: Enumerable<InvoiceItemWhereUniqueInput>
    update?: Enumerable<InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput>
    updateMany?: Enumerable<InvoiceItemUpdateManyWithWhereWithoutInvoiceInput>
    deleteMany?: Enumerable<InvoiceItemScalarWhereInput>
  }

  export type UserUpdateOneWithoutInvoicesNestedInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    upsert?: UserUpsertWithoutInvoicesInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<Enumerable<InvoiceItemCreateWithoutInvoiceInput>, Enumerable<InvoiceItemUncheckedCreateWithoutInvoiceInput>>
    connectOrCreate?: Enumerable<InvoiceItemCreateOrConnectWithoutInvoiceInput>
    upsert?: Enumerable<InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput>
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    set?: Enumerable<InvoiceItemWhereUniqueInput>
    disconnect?: Enumerable<InvoiceItemWhereUniqueInput>
    delete?: Enumerable<InvoiceItemWhereUniqueInput>
    connect?: Enumerable<InvoiceItemWhereUniqueInput>
    update?: Enumerable<InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput>
    updateMany?: Enumerable<InvoiceItemUpdateManyWithWhereWithoutInvoiceInput>
    deleteMany?: Enumerable<InvoiceItemScalarWhereInput>
  }

  export type WalletCreateNestedOneWithoutAccountsInput = {
    create?: XOR<WalletCreateWithoutAccountsInput, WalletUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutAccountsInput
    connect?: WalletWhereUniqueInput
  }

  export type WalletUpdateOneWithoutAccountsNestedInput = {
    create?: XOR<WalletCreateWithoutAccountsInput, WalletUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutAccountsInput
    upsert?: WalletUpsertWithoutAccountsInput
    disconnect?: boolean
    delete?: boolean
    connect?: WalletWhereUniqueInput
    update?: XOR<WalletUpdateWithoutAccountsInput, WalletUncheckedUpdateWithoutAccountsInput>
  }

  export type AccountCreateNestedManyWithoutWalletInput = {
    create?: XOR<Enumerable<AccountCreateWithoutWalletInput>, Enumerable<AccountUncheckedCreateWithoutWalletInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutWalletInput>
    createMany?: AccountCreateManyWalletInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutWalletsInput = {
    create?: XOR<UserCreateWithoutWalletsInput, UserUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletsInput
    connect?: UserWhereUniqueInput
  }

  export type AccountUncheckedCreateNestedManyWithoutWalletInput = {
    create?: XOR<Enumerable<AccountCreateWithoutWalletInput>, Enumerable<AccountUncheckedCreateWithoutWalletInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutWalletInput>
    createMany?: AccountCreateManyWalletInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type AccountUpdateManyWithoutWalletNestedInput = {
    create?: XOR<Enumerable<AccountCreateWithoutWalletInput>, Enumerable<AccountUncheckedCreateWithoutWalletInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutWalletInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutWalletInput>
    createMany?: AccountCreateManyWalletInputEnvelope
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutWalletInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutWalletInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type UserUpdateOneWithoutWalletsNestedInput = {
    create?: XOR<UserCreateWithoutWalletsInput, UserUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletsInput
    upsert?: UserUpsertWithoutWalletsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutWalletsInput, UserUncheckedUpdateWithoutWalletsInput>
  }

  export type AccountUncheckedUpdateManyWithoutWalletNestedInput = {
    create?: XOR<Enumerable<AccountCreateWithoutWalletInput>, Enumerable<AccountUncheckedCreateWithoutWalletInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutWalletInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutWalletInput>
    createMany?: AccountCreateManyWalletInputEnvelope
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutWalletInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutWalletInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type InvoiceCreateNestedManyWithoutSenderInput = {
    create?: XOR<Enumerable<InvoiceCreateWithoutSenderInput>, Enumerable<InvoiceUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<InvoiceCreateOrConnectWithoutSenderInput>
    createMany?: InvoiceCreateManySenderInputEnvelope
    connect?: Enumerable<InvoiceWhereUniqueInput>
  }

  export type WalletCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<WalletCreateWithoutUserInput>, Enumerable<WalletUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WalletCreateOrConnectWithoutUserInput>
    createMany?: WalletCreateManyUserInputEnvelope
    connect?: Enumerable<WalletWhereUniqueInput>
  }

  export type AuditEventCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AuditEventCreateWithoutUserInput>, Enumerable<AuditEventUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AuditEventCreateOrConnectWithoutUserInput>
    createMany?: AuditEventCreateManyUserInputEnvelope
    connect?: Enumerable<AuditEventWhereUniqueInput>
  }

  export type ProfileCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ProfileCreateWithoutUserInput>, Enumerable<ProfileUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProfileCreateOrConnectWithoutUserInput>
    createMany?: ProfileCreateManyUserInputEnvelope
    connect?: Enumerable<ProfileWhereUniqueInput>
  }

  export type RefreshCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<RefreshCreateWithoutUserInput>, Enumerable<RefreshUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<RefreshCreateOrConnectWithoutUserInput>
    createMany?: RefreshCreateManyUserInputEnvelope
    connect?: Enumerable<RefreshWhereUniqueInput>
  }

  export type OwnerCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<OwnerCreateWithoutUserInput>, Enumerable<OwnerUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<OwnerCreateOrConnectWithoutUserInput>
    createMany?: OwnerCreateManyUserInputEnvelope
    connect?: Enumerable<OwnerWhereUniqueInput>
  }

  export type ClientCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ClientCreateWithoutUserInput>, Enumerable<ClientUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ClientCreateOrConnectWithoutUserInput>
    createMany?: ClientCreateManyUserInputEnvelope
    connect?: Enumerable<ClientWhereUniqueInput>
  }

  export type EmployeeCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<EmployeeCreateWithoutUserInput>, Enumerable<EmployeeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EmployeeCreateOrConnectWithoutUserInput>
    createMany?: EmployeeCreateManyUserInputEnvelope
    connect?: Enumerable<EmployeeWhereUniqueInput>
  }

  export type LeadCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<LeadCreateWithoutUserInput>, Enumerable<LeadUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LeadCreateOrConnectWithoutUserInput>
    createMany?: LeadCreateManyUserInputEnvelope
    connect?: Enumerable<LeadWhereUniqueInput>
  }

  export type ContractorCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ContractorCreateWithoutUserInput>, Enumerable<ContractorUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ContractorCreateOrConnectWithoutUserInput>
    createMany?: ContractorCreateManyUserInputEnvelope
    connect?: Enumerable<ContractorWhereUniqueInput>
  }

  export type InvoiceUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<Enumerable<InvoiceCreateWithoutSenderInput>, Enumerable<InvoiceUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<InvoiceCreateOrConnectWithoutSenderInput>
    createMany?: InvoiceCreateManySenderInputEnvelope
    connect?: Enumerable<InvoiceWhereUniqueInput>
  }

  export type WalletUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<WalletCreateWithoutUserInput>, Enumerable<WalletUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WalletCreateOrConnectWithoutUserInput>
    createMany?: WalletCreateManyUserInputEnvelope
    connect?: Enumerable<WalletWhereUniqueInput>
  }

  export type AuditEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AuditEventCreateWithoutUserInput>, Enumerable<AuditEventUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AuditEventCreateOrConnectWithoutUserInput>
    createMany?: AuditEventCreateManyUserInputEnvelope
    connect?: Enumerable<AuditEventWhereUniqueInput>
  }

  export type ProfileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ProfileCreateWithoutUserInput>, Enumerable<ProfileUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProfileCreateOrConnectWithoutUserInput>
    createMany?: ProfileCreateManyUserInputEnvelope
    connect?: Enumerable<ProfileWhereUniqueInput>
  }

  export type RefreshUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<RefreshCreateWithoutUserInput>, Enumerable<RefreshUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<RefreshCreateOrConnectWithoutUserInput>
    createMany?: RefreshCreateManyUserInputEnvelope
    connect?: Enumerable<RefreshWhereUniqueInput>
  }

  export type OwnerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<OwnerCreateWithoutUserInput>, Enumerable<OwnerUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<OwnerCreateOrConnectWithoutUserInput>
    createMany?: OwnerCreateManyUserInputEnvelope
    connect?: Enumerable<OwnerWhereUniqueInput>
  }

  export type ClientUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ClientCreateWithoutUserInput>, Enumerable<ClientUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ClientCreateOrConnectWithoutUserInput>
    createMany?: ClientCreateManyUserInputEnvelope
    connect?: Enumerable<ClientWhereUniqueInput>
  }

  export type EmployeeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<EmployeeCreateWithoutUserInput>, Enumerable<EmployeeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EmployeeCreateOrConnectWithoutUserInput>
    createMany?: EmployeeCreateManyUserInputEnvelope
    connect?: Enumerable<EmployeeWhereUniqueInput>
  }

  export type LeadUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<LeadCreateWithoutUserInput>, Enumerable<LeadUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LeadCreateOrConnectWithoutUserInput>
    createMany?: LeadCreateManyUserInputEnvelope
    connect?: Enumerable<LeadWhereUniqueInput>
  }

  export type ContractorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ContractorCreateWithoutUserInput>, Enumerable<ContractorUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ContractorCreateOrConnectWithoutUserInput>
    createMany?: ContractorCreateManyUserInputEnvelope
    connect?: Enumerable<ContractorWhereUniqueInput>
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type InvoiceUpdateManyWithoutSenderNestedInput = {
    create?: XOR<Enumerable<InvoiceCreateWithoutSenderInput>, Enumerable<InvoiceUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<InvoiceCreateOrConnectWithoutSenderInput>
    upsert?: Enumerable<InvoiceUpsertWithWhereUniqueWithoutSenderInput>
    createMany?: InvoiceCreateManySenderInputEnvelope
    set?: Enumerable<InvoiceWhereUniqueInput>
    disconnect?: Enumerable<InvoiceWhereUniqueInput>
    delete?: Enumerable<InvoiceWhereUniqueInput>
    connect?: Enumerable<InvoiceWhereUniqueInput>
    update?: Enumerable<InvoiceUpdateWithWhereUniqueWithoutSenderInput>
    updateMany?: Enumerable<InvoiceUpdateManyWithWhereWithoutSenderInput>
    deleteMany?: Enumerable<InvoiceScalarWhereInput>
  }

  export type WalletUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<WalletCreateWithoutUserInput>, Enumerable<WalletUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WalletCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<WalletUpsertWithWhereUniqueWithoutUserInput>
    createMany?: WalletCreateManyUserInputEnvelope
    set?: Enumerable<WalletWhereUniqueInput>
    disconnect?: Enumerable<WalletWhereUniqueInput>
    delete?: Enumerable<WalletWhereUniqueInput>
    connect?: Enumerable<WalletWhereUniqueInput>
    update?: Enumerable<WalletUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<WalletUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<WalletScalarWhereInput>
  }

  export type AuditEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AuditEventCreateWithoutUserInput>, Enumerable<AuditEventUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AuditEventCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AuditEventUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AuditEventCreateManyUserInputEnvelope
    set?: Enumerable<AuditEventWhereUniqueInput>
    disconnect?: Enumerable<AuditEventWhereUniqueInput>
    delete?: Enumerable<AuditEventWhereUniqueInput>
    connect?: Enumerable<AuditEventWhereUniqueInput>
    update?: Enumerable<AuditEventUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AuditEventUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AuditEventScalarWhereInput>
  }

  export type ProfileUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ProfileCreateWithoutUserInput>, Enumerable<ProfileUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProfileCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ProfileUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ProfileCreateManyUserInputEnvelope
    set?: Enumerable<ProfileWhereUniqueInput>
    disconnect?: Enumerable<ProfileWhereUniqueInput>
    delete?: Enumerable<ProfileWhereUniqueInput>
    connect?: Enumerable<ProfileWhereUniqueInput>
    update?: Enumerable<ProfileUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ProfileUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ProfileScalarWhereInput>
  }

  export type RefreshUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<RefreshCreateWithoutUserInput>, Enumerable<RefreshUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<RefreshCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<RefreshUpsertWithWhereUniqueWithoutUserInput>
    createMany?: RefreshCreateManyUserInputEnvelope
    set?: Enumerable<RefreshWhereUniqueInput>
    disconnect?: Enumerable<RefreshWhereUniqueInput>
    delete?: Enumerable<RefreshWhereUniqueInput>
    connect?: Enumerable<RefreshWhereUniqueInput>
    update?: Enumerable<RefreshUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<RefreshUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<RefreshScalarWhereInput>
  }

  export type OwnerUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<OwnerCreateWithoutUserInput>, Enumerable<OwnerUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<OwnerCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<OwnerUpsertWithWhereUniqueWithoutUserInput>
    createMany?: OwnerCreateManyUserInputEnvelope
    set?: Enumerable<OwnerWhereUniqueInput>
    disconnect?: Enumerable<OwnerWhereUniqueInput>
    delete?: Enumerable<OwnerWhereUniqueInput>
    connect?: Enumerable<OwnerWhereUniqueInput>
    update?: Enumerable<OwnerUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<OwnerUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<OwnerScalarWhereInput>
  }

  export type ClientUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ClientCreateWithoutUserInput>, Enumerable<ClientUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ClientCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ClientUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ClientCreateManyUserInputEnvelope
    set?: Enumerable<ClientWhereUniqueInput>
    disconnect?: Enumerable<ClientWhereUniqueInput>
    delete?: Enumerable<ClientWhereUniqueInput>
    connect?: Enumerable<ClientWhereUniqueInput>
    update?: Enumerable<ClientUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ClientUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ClientScalarWhereInput>
  }

  export type EmployeeUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<EmployeeCreateWithoutUserInput>, Enumerable<EmployeeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EmployeeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<EmployeeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: EmployeeCreateManyUserInputEnvelope
    set?: Enumerable<EmployeeWhereUniqueInput>
    disconnect?: Enumerable<EmployeeWhereUniqueInput>
    delete?: Enumerable<EmployeeWhereUniqueInput>
    connect?: Enumerable<EmployeeWhereUniqueInput>
    update?: Enumerable<EmployeeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<EmployeeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<EmployeeScalarWhereInput>
  }

  export type LeadUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<LeadCreateWithoutUserInput>, Enumerable<LeadUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LeadCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<LeadUpsertWithWhereUniqueWithoutUserInput>
    createMany?: LeadCreateManyUserInputEnvelope
    set?: Enumerable<LeadWhereUniqueInput>
    disconnect?: Enumerable<LeadWhereUniqueInput>
    delete?: Enumerable<LeadWhereUniqueInput>
    connect?: Enumerable<LeadWhereUniqueInput>
    update?: Enumerable<LeadUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<LeadUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<LeadScalarWhereInput>
  }

  export type ContractorUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ContractorCreateWithoutUserInput>, Enumerable<ContractorUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ContractorCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ContractorUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ContractorCreateManyUserInputEnvelope
    set?: Enumerable<ContractorWhereUniqueInput>
    disconnect?: Enumerable<ContractorWhereUniqueInput>
    delete?: Enumerable<ContractorWhereUniqueInput>
    connect?: Enumerable<ContractorWhereUniqueInput>
    update?: Enumerable<ContractorUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ContractorUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ContractorScalarWhereInput>
  }

  export type InvoiceUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<Enumerable<InvoiceCreateWithoutSenderInput>, Enumerable<InvoiceUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<InvoiceCreateOrConnectWithoutSenderInput>
    upsert?: Enumerable<InvoiceUpsertWithWhereUniqueWithoutSenderInput>
    createMany?: InvoiceCreateManySenderInputEnvelope
    set?: Enumerable<InvoiceWhereUniqueInput>
    disconnect?: Enumerable<InvoiceWhereUniqueInput>
    delete?: Enumerable<InvoiceWhereUniqueInput>
    connect?: Enumerable<InvoiceWhereUniqueInput>
    update?: Enumerable<InvoiceUpdateWithWhereUniqueWithoutSenderInput>
    updateMany?: Enumerable<InvoiceUpdateManyWithWhereWithoutSenderInput>
    deleteMany?: Enumerable<InvoiceScalarWhereInput>
  }

  export type WalletUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<WalletCreateWithoutUserInput>, Enumerable<WalletUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WalletCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<WalletUpsertWithWhereUniqueWithoutUserInput>
    createMany?: WalletCreateManyUserInputEnvelope
    set?: Enumerable<WalletWhereUniqueInput>
    disconnect?: Enumerable<WalletWhereUniqueInput>
    delete?: Enumerable<WalletWhereUniqueInput>
    connect?: Enumerable<WalletWhereUniqueInput>
    update?: Enumerable<WalletUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<WalletUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<WalletScalarWhereInput>
  }

  export type AuditEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AuditEventCreateWithoutUserInput>, Enumerable<AuditEventUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AuditEventCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AuditEventUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AuditEventCreateManyUserInputEnvelope
    set?: Enumerable<AuditEventWhereUniqueInput>
    disconnect?: Enumerable<AuditEventWhereUniqueInput>
    delete?: Enumerable<AuditEventWhereUniqueInput>
    connect?: Enumerable<AuditEventWhereUniqueInput>
    update?: Enumerable<AuditEventUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AuditEventUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AuditEventScalarWhereInput>
  }

  export type ProfileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ProfileCreateWithoutUserInput>, Enumerable<ProfileUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProfileCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ProfileUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ProfileCreateManyUserInputEnvelope
    set?: Enumerable<ProfileWhereUniqueInput>
    disconnect?: Enumerable<ProfileWhereUniqueInput>
    delete?: Enumerable<ProfileWhereUniqueInput>
    connect?: Enumerable<ProfileWhereUniqueInput>
    update?: Enumerable<ProfileUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ProfileUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ProfileScalarWhereInput>
  }

  export type RefreshUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<RefreshCreateWithoutUserInput>, Enumerable<RefreshUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<RefreshCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<RefreshUpsertWithWhereUniqueWithoutUserInput>
    createMany?: RefreshCreateManyUserInputEnvelope
    set?: Enumerable<RefreshWhereUniqueInput>
    disconnect?: Enumerable<RefreshWhereUniqueInput>
    delete?: Enumerable<RefreshWhereUniqueInput>
    connect?: Enumerable<RefreshWhereUniqueInput>
    update?: Enumerable<RefreshUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<RefreshUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<RefreshScalarWhereInput>
  }

  export type OwnerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<OwnerCreateWithoutUserInput>, Enumerable<OwnerUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<OwnerCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<OwnerUpsertWithWhereUniqueWithoutUserInput>
    createMany?: OwnerCreateManyUserInputEnvelope
    set?: Enumerable<OwnerWhereUniqueInput>
    disconnect?: Enumerable<OwnerWhereUniqueInput>
    delete?: Enumerable<OwnerWhereUniqueInput>
    connect?: Enumerable<OwnerWhereUniqueInput>
    update?: Enumerable<OwnerUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<OwnerUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<OwnerScalarWhereInput>
  }

  export type ClientUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ClientCreateWithoutUserInput>, Enumerable<ClientUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ClientCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ClientUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ClientCreateManyUserInputEnvelope
    set?: Enumerable<ClientWhereUniqueInput>
    disconnect?: Enumerable<ClientWhereUniqueInput>
    delete?: Enumerable<ClientWhereUniqueInput>
    connect?: Enumerable<ClientWhereUniqueInput>
    update?: Enumerable<ClientUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ClientUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ClientScalarWhereInput>
  }

  export type EmployeeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<EmployeeCreateWithoutUserInput>, Enumerable<EmployeeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EmployeeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<EmployeeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: EmployeeCreateManyUserInputEnvelope
    set?: Enumerable<EmployeeWhereUniqueInput>
    disconnect?: Enumerable<EmployeeWhereUniqueInput>
    delete?: Enumerable<EmployeeWhereUniqueInput>
    connect?: Enumerable<EmployeeWhereUniqueInput>
    update?: Enumerable<EmployeeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<EmployeeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<EmployeeScalarWhereInput>
  }

  export type LeadUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<LeadCreateWithoutUserInput>, Enumerable<LeadUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LeadCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<LeadUpsertWithWhereUniqueWithoutUserInput>
    createMany?: LeadCreateManyUserInputEnvelope
    set?: Enumerable<LeadWhereUniqueInput>
    disconnect?: Enumerable<LeadWhereUniqueInput>
    delete?: Enumerable<LeadWhereUniqueInput>
    connect?: Enumerable<LeadWhereUniqueInput>
    update?: Enumerable<LeadUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<LeadUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<LeadScalarWhereInput>
  }

  export type ContractorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ContractorCreateWithoutUserInput>, Enumerable<ContractorUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ContractorCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ContractorUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ContractorCreateManyUserInputEnvelope
    set?: Enumerable<ContractorWhereUniqueInput>
    disconnect?: Enumerable<ContractorWhereUniqueInput>
    delete?: Enumerable<ContractorWhereUniqueInput>
    connect?: Enumerable<ContractorWhereUniqueInput>
    update?: Enumerable<ContractorUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ContractorUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ContractorScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutClientsInput = {
    create?: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientsInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutClientsInput = {
    create?: XOR<OrganizationCreateWithoutClientsInput, OrganizationUncheckedCreateWithoutClientsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutClientsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type EnumTypeFieldUpdateOperationsInput = {
    set?: Type
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: Status
  }

  export type UserUpdateOneWithoutClientsNestedInput = {
    create?: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientsInput
    upsert?: UserUpsertWithoutClientsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutClientsInput, UserUncheckedUpdateWithoutClientsInput>
  }

  export type OrganizationUpdateOneWithoutClientsNestedInput = {
    create?: XOR<OrganizationCreateWithoutClientsInput, OrganizationUncheckedCreateWithoutClientsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutClientsInput
    upsert?: OrganizationUpsertWithoutClientsInput
    disconnect?: boolean
    delete?: boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<OrganizationUpdateWithoutClientsInput, OrganizationUncheckedUpdateWithoutClientsInput>
  }

  export type UserCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeesInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<OrganizationCreateWithoutEmployeesInput, OrganizationUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutEmployeesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserUpdateOneWithoutEmployeesNestedInput = {
    create?: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeesInput
    upsert?: UserUpsertWithoutEmployeesInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutEmployeesInput, UserUncheckedUpdateWithoutEmployeesInput>
  }

  export type OrganizationUpdateOneWithoutEmployeesNestedInput = {
    create?: XOR<OrganizationCreateWithoutEmployeesInput, OrganizationUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutEmployeesInput
    upsert?: OrganizationUpsertWithoutEmployeesInput
    disconnect?: boolean
    delete?: boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<OrganizationUpdateWithoutEmployeesInput, OrganizationUncheckedUpdateWithoutEmployeesInput>
  }

  export type UserCreateNestedOneWithoutLeadsInput = {
    create?: XOR<UserCreateWithoutLeadsInput, UserUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeadsInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutLeadsInput = {
    create?: XOR<OrganizationCreateWithoutLeadsInput, OrganizationUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutLeadsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserUpdateOneWithoutLeadsNestedInput = {
    create?: XOR<UserCreateWithoutLeadsInput, UserUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeadsInput
    upsert?: UserUpsertWithoutLeadsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutLeadsInput, UserUncheckedUpdateWithoutLeadsInput>
  }

  export type OrganizationUpdateOneWithoutLeadsNestedInput = {
    create?: XOR<OrganizationCreateWithoutLeadsInput, OrganizationUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutLeadsInput
    upsert?: OrganizationUpsertWithoutLeadsInput
    disconnect?: boolean
    delete?: boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<OrganizationUpdateWithoutLeadsInput, OrganizationUncheckedUpdateWithoutLeadsInput>
  }

  export type UserCreateNestedOneWithoutContractorsInput = {
    create?: XOR<UserCreateWithoutContractorsInput, UserUncheckedCreateWithoutContractorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContractorsInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutContractorsInput = {
    create?: XOR<OrganizationCreateWithoutContractorsInput, OrganizationUncheckedCreateWithoutContractorsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutContractorsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserUpdateOneWithoutContractorsNestedInput = {
    create?: XOR<UserCreateWithoutContractorsInput, UserUncheckedCreateWithoutContractorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContractorsInput
    upsert?: UserUpsertWithoutContractorsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutContractorsInput, UserUncheckedUpdateWithoutContractorsInput>
  }

  export type OrganizationUpdateOneWithoutContractorsNestedInput = {
    create?: XOR<OrganizationCreateWithoutContractorsInput, OrganizationUncheckedCreateWithoutContractorsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutContractorsInput
    upsert?: OrganizationUpsertWithoutContractorsInput
    disconnect?: boolean
    delete?: boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<OrganizationUpdateWithoutContractorsInput, OrganizationUncheckedUpdateWithoutContractorsInput>
  }

  export type OwnerCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<OwnerCreateWithoutOrganizationInput, OwnerUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutOrganizationInput
    connect?: OwnerWhereUniqueInput
  }

  export type ClientCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<ClientCreateWithoutOrganizationInput>, Enumerable<ClientUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<ClientCreateOrConnectWithoutOrganizationInput>
    createMany?: ClientCreateManyOrganizationInputEnvelope
    connect?: Enumerable<ClientWhereUniqueInput>
  }

  export type EmployeeCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<EmployeeCreateWithoutOrganizationInput>, Enumerable<EmployeeUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<EmployeeCreateOrConnectWithoutOrganizationInput>
    createMany?: EmployeeCreateManyOrganizationInputEnvelope
    connect?: Enumerable<EmployeeWhereUniqueInput>
  }

  export type LeadCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<LeadCreateWithoutOrganizationInput>, Enumerable<LeadUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<LeadCreateOrConnectWithoutOrganizationInput>
    createMany?: LeadCreateManyOrganizationInputEnvelope
    connect?: Enumerable<LeadWhereUniqueInput>
  }

  export type ContractorCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<ContractorCreateWithoutOrganizationInput>, Enumerable<ContractorUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<ContractorCreateOrConnectWithoutOrganizationInput>
    createMany?: ContractorCreateManyOrganizationInputEnvelope
    connect?: Enumerable<ContractorWhereUniqueInput>
  }

  export type ClientUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<ClientCreateWithoutOrganizationInput>, Enumerable<ClientUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<ClientCreateOrConnectWithoutOrganizationInput>
    createMany?: ClientCreateManyOrganizationInputEnvelope
    connect?: Enumerable<ClientWhereUniqueInput>
  }

  export type EmployeeUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<EmployeeCreateWithoutOrganizationInput>, Enumerable<EmployeeUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<EmployeeCreateOrConnectWithoutOrganizationInput>
    createMany?: EmployeeCreateManyOrganizationInputEnvelope
    connect?: Enumerable<EmployeeWhereUniqueInput>
  }

  export type LeadUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<LeadCreateWithoutOrganizationInput>, Enumerable<LeadUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<LeadCreateOrConnectWithoutOrganizationInput>
    createMany?: LeadCreateManyOrganizationInputEnvelope
    connect?: Enumerable<LeadWhereUniqueInput>
  }

  export type ContractorUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Enumerable<ContractorCreateWithoutOrganizationInput>, Enumerable<ContractorUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<ContractorCreateOrConnectWithoutOrganizationInput>
    createMany?: ContractorCreateManyOrganizationInputEnvelope
    connect?: Enumerable<ContractorWhereUniqueInput>
  }

  export type OwnerUpdateOneWithoutOrganizationNestedInput = {
    create?: XOR<OwnerCreateWithoutOrganizationInput, OwnerUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutOrganizationInput
    upsert?: OwnerUpsertWithoutOrganizationInput
    disconnect?: boolean
    delete?: boolean
    connect?: OwnerWhereUniqueInput
    update?: XOR<OwnerUpdateWithoutOrganizationInput, OwnerUncheckedUpdateWithoutOrganizationInput>
  }

  export type ClientUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Enumerable<ClientCreateWithoutOrganizationInput>, Enumerable<ClientUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<ClientCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<ClientUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: ClientCreateManyOrganizationInputEnvelope
    set?: Enumerable<ClientWhereUniqueInput>
    disconnect?: Enumerable<ClientWhereUniqueInput>
    delete?: Enumerable<ClientWhereUniqueInput>
    connect?: Enumerable<ClientWhereUniqueInput>
    update?: Enumerable<ClientUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<ClientUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<ClientScalarWhereInput>
  }

  export type EmployeeUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Enumerable<EmployeeCreateWithoutOrganizationInput>, Enumerable<EmployeeUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<EmployeeCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<EmployeeUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: EmployeeCreateManyOrganizationInputEnvelope
    set?: Enumerable<EmployeeWhereUniqueInput>
    disconnect?: Enumerable<EmployeeWhereUniqueInput>
    delete?: Enumerable<EmployeeWhereUniqueInput>
    connect?: Enumerable<EmployeeWhereUniqueInput>
    update?: Enumerable<EmployeeUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<EmployeeUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<EmployeeScalarWhereInput>
  }

  export type LeadUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Enumerable<LeadCreateWithoutOrganizationInput>, Enumerable<LeadUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<LeadCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<LeadUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: LeadCreateManyOrganizationInputEnvelope
    set?: Enumerable<LeadWhereUniqueInput>
    disconnect?: Enumerable<LeadWhereUniqueInput>
    delete?: Enumerable<LeadWhereUniqueInput>
    connect?: Enumerable<LeadWhereUniqueInput>
    update?: Enumerable<LeadUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<LeadUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<LeadScalarWhereInput>
  }

  export type ContractorUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Enumerable<ContractorCreateWithoutOrganizationInput>, Enumerable<ContractorUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<ContractorCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<ContractorUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: ContractorCreateManyOrganizationInputEnvelope
    set?: Enumerable<ContractorWhereUniqueInput>
    disconnect?: Enumerable<ContractorWhereUniqueInput>
    delete?: Enumerable<ContractorWhereUniqueInput>
    connect?: Enumerable<ContractorWhereUniqueInput>
    update?: Enumerable<ContractorUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<ContractorUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<ContractorScalarWhereInput>
  }

  export type ClientUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Enumerable<ClientCreateWithoutOrganizationInput>, Enumerable<ClientUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<ClientCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<ClientUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: ClientCreateManyOrganizationInputEnvelope
    set?: Enumerable<ClientWhereUniqueInput>
    disconnect?: Enumerable<ClientWhereUniqueInput>
    delete?: Enumerable<ClientWhereUniqueInput>
    connect?: Enumerable<ClientWhereUniqueInput>
    update?: Enumerable<ClientUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<ClientUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<ClientScalarWhereInput>
  }

  export type EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Enumerable<EmployeeCreateWithoutOrganizationInput>, Enumerable<EmployeeUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<EmployeeCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<EmployeeUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: EmployeeCreateManyOrganizationInputEnvelope
    set?: Enumerable<EmployeeWhereUniqueInput>
    disconnect?: Enumerable<EmployeeWhereUniqueInput>
    delete?: Enumerable<EmployeeWhereUniqueInput>
    connect?: Enumerable<EmployeeWhereUniqueInput>
    update?: Enumerable<EmployeeUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<EmployeeUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<EmployeeScalarWhereInput>
  }

  export type LeadUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Enumerable<LeadCreateWithoutOrganizationInput>, Enumerable<LeadUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<LeadCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<LeadUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: LeadCreateManyOrganizationInputEnvelope
    set?: Enumerable<LeadWhereUniqueInput>
    disconnect?: Enumerable<LeadWhereUniqueInput>
    delete?: Enumerable<LeadWhereUniqueInput>
    connect?: Enumerable<LeadWhereUniqueInput>
    update?: Enumerable<LeadUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<LeadUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<LeadScalarWhereInput>
  }

  export type ContractorUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Enumerable<ContractorCreateWithoutOrganizationInput>, Enumerable<ContractorUncheckedCreateWithoutOrganizationInput>>
    connectOrCreate?: Enumerable<ContractorCreateOrConnectWithoutOrganizationInput>
    upsert?: Enumerable<ContractorUpsertWithWhereUniqueWithoutOrganizationInput>
    createMany?: ContractorCreateManyOrganizationInputEnvelope
    set?: Enumerable<ContractorWhereUniqueInput>
    disconnect?: Enumerable<ContractorWhereUniqueInput>
    delete?: Enumerable<ContractorWhereUniqueInput>
    connect?: Enumerable<ContractorWhereUniqueInput>
    update?: Enumerable<ContractorUpdateWithWhereUniqueWithoutOrganizationInput>
    updateMany?: Enumerable<ContractorUpdateManyWithWhereWithoutOrganizationInput>
    deleteMany?: Enumerable<ContractorScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutOwnersInput = {
    create?: XOR<UserCreateWithoutOwnersInput, UserUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnersInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<OrganizationCreateWithoutOwnerInput>, Enumerable<OrganizationUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<OrganizationCreateOrConnectWithoutOwnerInput>
    createMany?: OrganizationCreateManyOwnerInputEnvelope
    connect?: Enumerable<OrganizationWhereUniqueInput>
  }

  export type OrganizationUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<OrganizationCreateWithoutOwnerInput>, Enumerable<OrganizationUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<OrganizationCreateOrConnectWithoutOwnerInput>
    createMany?: OrganizationCreateManyOwnerInputEnvelope
    connect?: Enumerable<OrganizationWhereUniqueInput>
  }

  export type UserUpdateOneWithoutOwnersNestedInput = {
    create?: XOR<UserCreateWithoutOwnersInput, UserUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnersInput
    upsert?: UserUpsertWithoutOwnersInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutOwnersInput, UserUncheckedUpdateWithoutOwnersInput>
  }

  export type OrganizationUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<OrganizationCreateWithoutOwnerInput>, Enumerable<OrganizationUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<OrganizationCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<OrganizationUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: OrganizationCreateManyOwnerInputEnvelope
    set?: Enumerable<OrganizationWhereUniqueInput>
    disconnect?: Enumerable<OrganizationWhereUniqueInput>
    delete?: Enumerable<OrganizationWhereUniqueInput>
    connect?: Enumerable<OrganizationWhereUniqueInput>
    update?: Enumerable<OrganizationUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<OrganizationUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<OrganizationScalarWhereInput>
  }

  export type OrganizationUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<OrganizationCreateWithoutOwnerInput>, Enumerable<OrganizationUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<OrganizationCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<OrganizationUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: OrganizationCreateManyOwnerInputEnvelope
    set?: Enumerable<OrganizationWhereUniqueInput>
    disconnect?: Enumerable<OrganizationWhereUniqueInput>
    delete?: Enumerable<OrganizationWhereUniqueInput>
    connect?: Enumerable<OrganizationWhereUniqueInput>
    update?: Enumerable<OrganizationUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<OrganizationUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<OrganizationScalarWhereInput>
  }

  export type ProfileCreateidentitiesInput = {
    set: Enumerable<InputJsonValue>
  }

  export type ProfileCreatemultifactorInput = {
    set: Enumerable<InputJsonValue>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type ProfileUpdateidentitiesInput = {
    set?: Enumerable<InputJsonValue>
    push?: InputJsonValue | Enumerable<InputJsonValue>
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Buffer
  }

  export type ProfileUpdatemultifactorInput = {
    set?: Enumerable<InputJsonValue>
    push?: InputJsonValue | Enumerable<InputJsonValue>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutAuditEventsInput = {
    create?: XOR<UserCreateWithoutAuditEventsInput, UserUncheckedCreateWithoutAuditEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditEventsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAuditEventsNestedInput = {
    create?: XOR<UserCreateWithoutAuditEventsInput, UserUncheckedCreateWithoutAuditEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditEventsInput
    upsert?: UserUpsertWithoutAuditEventsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAuditEventsInput, UserUncheckedUpdateWithoutAuditEventsInput>
  }

  export type UserCreateNestedOneWithoutRefreshInput = {
    create?: XOR<UserCreateWithoutRefreshInput, UserUncheckedCreateWithoutRefreshInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshNestedInput = {
    create?: XOR<UserCreateWithoutRefreshInput, UserUncheckedCreateWithoutRefreshInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshInput
    upsert?: UserUpsertWithoutRefreshInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutRefreshInput, UserUncheckedUpdateWithoutRefreshInput>
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

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
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
    isSet?: boolean
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

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    isSet?: boolean
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
    isSet?: boolean
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
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: InputJsonValue | null
    not?: InputJsonValue | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    isSet?: boolean
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
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue
    not?: InputJsonValue
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedEnumTypeFilter = {
    equals?: Type
    in?: Enumerable<Type>
    notIn?: Enumerable<Type>
    not?: NestedEnumTypeFilter | Type
  }

  export type NestedEnumStatusFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusFilter | Status
  }

  export type NestedEnumTypeWithAggregatesFilter = {
    equals?: Type
    in?: Enumerable<Type>
    notIn?: Enumerable<Type>
    not?: NestedEnumTypeWithAggregatesFilter | Type
    _count?: NestedIntFilter
    _min?: NestedEnumTypeFilter
    _max?: NestedEnumTypeFilter
  }

  export type NestedEnumStatusWithAggregatesFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusWithAggregatesFilter | Status
    _count?: NestedIntFilter
    _min?: NestedEnumStatusFilter
    _max?: NestedEnumStatusFilter
  }

  export type NestedBytesFilter = {
    equals?: Buffer
    in?: Enumerable<Buffer>
    notIn?: Enumerable<Buffer>
    not?: NestedBytesFilter | Buffer
  }

  export type NestedBytesWithAggregatesFilter = {
    equals?: Buffer
    in?: Enumerable<Buffer>
    notIn?: Enumerable<Buffer>
    not?: NestedBytesWithAggregatesFilter | Buffer
    _count?: NestedIntFilter
    _min?: NestedBytesFilter
    _max?: NestedBytesFilter
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

  export type InvoiceCreateWithoutItemsInput = {
    id?: string
    invoiceId: string
    uuid?: string
    email: string
    title?: string | null
    from?: InputJsonValue | null
    number: string
    token?: string | null
    issuer?: string | null
    due?: Date | string | null
    receiveto: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sender?: UserCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateWithoutItemsInput = {
    id?: string
    invoiceId: string
    uuid?: string
    email: string
    title?: string | null
    from?: InputJsonValue | null
    number: string
    token?: string | null
    issuer?: string | null
    due?: Date | string | null
    receiveto: string
    createdAt?: Date | string
    updatedAt?: Date | string
    senderId?: string | null
  }

  export type InvoiceCreateOrConnectWithoutItemsInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
  }

  export type InvoiceUpsertWithoutItemsInput = {
    update: XOR<InvoiceUpdateWithoutItemsInput, InvoiceUncheckedUpdateWithoutItemsInput>
    create: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
  }

  export type InvoiceUpdateWithoutItemsInput = {
    invoiceId?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    from?: InputJsonValue | InputJsonValue | null
    number?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    issuer?: NullableStringFieldUpdateOperationsInput | string | null
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiveto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutItemsInput = {
    invoiceId?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    from?: InputJsonValue | InputJsonValue | null
    number?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    issuer?: NullableStringFieldUpdateOperationsInput | string | null
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiveto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceItemCreateWithoutInvoiceInput = {
    id?: string
    number?: number | null
    name?: string | null
    description: string
    token?: string | null
    amount: string
  }

  export type InvoiceItemUncheckedCreateWithoutInvoiceInput = {
    id?: string
    number?: number | null
    name?: string | null
    description: string
    token?: string | null
    amount: string
  }

  export type InvoiceItemCreateOrConnectWithoutInvoiceInput = {
    where: InvoiceItemWhereUniqueInput
    create: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceItemCreateManyInvoiceInputEnvelope = {
    data: Enumerable<InvoiceItemCreateManyInvoiceInput>
  }

  export type UserCreateWithoutInvoicesInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    lastName?: string | null
    role?: Role
    verificationToken?: string | null
    verified?: boolean
    acceptTerms?: boolean
    resetToken?: string | null
    passwordReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Wallets?: WalletCreateNestedManyWithoutUserInput
    AuditEvents?: AuditEventCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedManyWithoutUserInput
    Refresh?: RefreshCreateNestedManyWithoutUserInput
    Owners?: OwnerCreateNestedManyWithoutUserInput
    Clients?: ClientCreateNestedManyWithoutUserInput
    Employees?: EmployeeCreateNestedManyWithoutUserInput
    Leads?: LeadCreateNestedManyWithoutUserInput
    Contractors?: ContractorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvoicesInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    lastName?: string | null
    role?: Role
    verificationToken?: string | null
    verified?: boolean
    acceptTerms?: boolean
    resetToken?: string | null
    passwordReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    AuditEvents?: AuditEventUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    Refresh?: RefreshUncheckedCreateNestedManyWithoutUserInput
    Owners?: OwnerUncheckedCreateNestedManyWithoutUserInput
    Clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    Employees?: EmployeeUncheckedCreateNestedManyWithoutUserInput
    Leads?: LeadUncheckedCreateNestedManyWithoutUserInput
    Contractors?: ContractorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvoicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
  }

  export type InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceItemWhereUniqueInput
    update: XOR<InvoiceItemUpdateWithoutInvoiceInput, InvoiceItemUncheckedUpdateWithoutInvoiceInput>
    create: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceItemWhereUniqueInput
    data: XOR<InvoiceItemUpdateWithoutInvoiceInput, InvoiceItemUncheckedUpdateWithoutInvoiceInput>
  }

  export type InvoiceItemUpdateManyWithWhereWithoutInvoiceInput = {
    where: InvoiceItemScalarWhereInput
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyWithoutItemsInput>
  }

  export type InvoiceItemScalarWhereInput = {
    AND?: Enumerable<InvoiceItemScalarWhereInput>
    OR?: Enumerable<InvoiceItemScalarWhereInput>
    NOT?: Enumerable<InvoiceItemScalarWhereInput>
    id?: StringFilter | string
    number?: IntNullableFilter | number | null
    name?: StringNullableFilter | string | null
    description?: StringFilter | string
    token?: StringNullableFilter | string | null
    amount?: StringFilter | string
    invoiceId?: StringNullableFilter | string | null
  }

  export type UserUpsertWithoutInvoicesInput = {
    update: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
  }

  export type UserUpdateWithoutInvoicesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    acceptTerms?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Wallets?: WalletUpdateManyWithoutUserNestedInput
    AuditEvents?: AuditEventUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateManyWithoutUserNestedInput
    Refresh?: RefreshUpdateManyWithoutUserNestedInput
    Owners?: OwnerUpdateManyWithoutUserNestedInput
    Clients?: ClientUpdateManyWithoutUserNestedInput
    Employees?: EmployeeUpdateManyWithoutUserNestedInput
    Leads?: LeadUpdateManyWithoutUserNestedInput
    Contractors?: ContractorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvoicesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    acceptTerms?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    AuditEvents?: AuditEventUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    Refresh?: RefreshUncheckedUpdateManyWithoutUserNestedInput
    Owners?: OwnerUncheckedUpdateManyWithoutUserNestedInput
    Clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    Employees?: EmployeeUncheckedUpdateManyWithoutUserNestedInput
    Leads?: LeadUncheckedUpdateManyWithoutUserNestedInput
    Contractors?: ContractorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WalletCreateWithoutAccountsInput = {
    id?: string
    key: string
    name?: string | null
    description?: string | null
    preferredToken?: InputJsonValue | null
    method: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedOneWithoutWalletsInput
  }

  export type WalletUncheckedCreateWithoutAccountsInput = {
    id?: string
    key: string
    name?: string | null
    description?: string | null
    preferredToken?: InputJsonValue | null
    method: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type WalletCreateOrConnectWithoutAccountsInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutAccountsInput, WalletUncheckedCreateWithoutAccountsInput>
  }

  export type WalletUpsertWithoutAccountsInput = {
    update: XOR<WalletUpdateWithoutAccountsInput, WalletUncheckedUpdateWithoutAccountsInput>
    create: XOR<WalletCreateWithoutAccountsInput, WalletUncheckedCreateWithoutAccountsInput>
  }

  export type WalletUpdateWithoutAccountsInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preferredToken?: InputJsonValue | InputJsonValue | null
    method?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutWalletsNestedInput
  }

  export type WalletUncheckedUpdateWithoutAccountsInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preferredToken?: InputJsonValue | InputJsonValue | null
    method?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateWithoutWalletInput = {
    id?: string
    address: string
    name?: string | null
    description?: string | null
    preferredToken?: InputJsonValue | null
    tag: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutWalletInput = {
    id?: string
    address: string
    name?: string | null
    description?: string | null
    preferredToken?: InputJsonValue | null
    tag: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutWalletInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutWalletInput, AccountUncheckedCreateWithoutWalletInput>
  }

  export type AccountCreateManyWalletInputEnvelope = {
    data: Enumerable<AccountCreateManyWalletInput>
  }

  export type UserCreateWithoutWalletsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    lastName?: string | null
    role?: Role
    verificationToken?: string | null
    verified?: boolean
    acceptTerms?: boolean
    resetToken?: string | null
    passwordReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceCreateNestedManyWithoutSenderInput
    AuditEvents?: AuditEventCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedManyWithoutUserInput
    Refresh?: RefreshCreateNestedManyWithoutUserInput
    Owners?: OwnerCreateNestedManyWithoutUserInput
    Clients?: ClientCreateNestedManyWithoutUserInput
    Employees?: EmployeeCreateNestedManyWithoutUserInput
    Leads?: LeadCreateNestedManyWithoutUserInput
    Contractors?: ContractorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWalletsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    lastName?: string | null
    role?: Role
    verificationToken?: string | null
    verified?: boolean
    acceptTerms?: boolean
    resetToken?: string | null
    passwordReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceUncheckedCreateNestedManyWithoutSenderInput
    AuditEvents?: AuditEventUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    Refresh?: RefreshUncheckedCreateNestedManyWithoutUserInput
    Owners?: OwnerUncheckedCreateNestedManyWithoutUserInput
    Clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    Employees?: EmployeeUncheckedCreateNestedManyWithoutUserInput
    Leads?: LeadUncheckedCreateNestedManyWithoutUserInput
    Contractors?: ContractorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWalletsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWalletsInput, UserUncheckedCreateWithoutWalletsInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutWalletInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutWalletInput, AccountUncheckedUpdateWithoutWalletInput>
    create: XOR<AccountCreateWithoutWalletInput, AccountUncheckedCreateWithoutWalletInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutWalletInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutWalletInput, AccountUncheckedUpdateWithoutWalletInput>
  }

  export type AccountUpdateManyWithWhereWithoutWalletInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutAccountsInput>
  }

  export type AccountScalarWhereInput = {
    AND?: Enumerable<AccountScalarWhereInput>
    OR?: Enumerable<AccountScalarWhereInput>
    NOT?: Enumerable<AccountScalarWhereInput>
    id?: StringFilter | string
    address?: StringFilter | string
    name?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    preferredToken?: JsonNullableFilter
    tag?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    walletId?: StringNullableFilter | string | null
  }

  export type UserUpsertWithoutWalletsInput = {
    update: XOR<UserUpdateWithoutWalletsInput, UserUncheckedUpdateWithoutWalletsInput>
    create: XOR<UserCreateWithoutWalletsInput, UserUncheckedCreateWithoutWalletsInput>
  }

  export type UserUpdateWithoutWalletsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    acceptTerms?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUpdateManyWithoutSenderNestedInput
    AuditEvents?: AuditEventUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateManyWithoutUserNestedInput
    Refresh?: RefreshUpdateManyWithoutUserNestedInput
    Owners?: OwnerUpdateManyWithoutUserNestedInput
    Clients?: ClientUpdateManyWithoutUserNestedInput
    Employees?: EmployeeUpdateManyWithoutUserNestedInput
    Leads?: LeadUpdateManyWithoutUserNestedInput
    Contractors?: ContractorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWalletsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    acceptTerms?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUncheckedUpdateManyWithoutSenderNestedInput
    AuditEvents?: AuditEventUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    Refresh?: RefreshUncheckedUpdateManyWithoutUserNestedInput
    Owners?: OwnerUncheckedUpdateManyWithoutUserNestedInput
    Clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    Employees?: EmployeeUncheckedUpdateManyWithoutUserNestedInput
    Leads?: LeadUncheckedUpdateManyWithoutUserNestedInput
    Contractors?: ContractorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InvoiceCreateWithoutSenderInput = {
    id?: string
    invoiceId: string
    uuid?: string
    email: string
    title?: string | null
    from?: InputJsonValue | null
    number: string
    token?: string | null
    issuer?: string | null
    due?: Date | string | null
    receiveto: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutSenderInput = {
    id?: string
    invoiceId: string
    uuid?: string
    email: string
    title?: string | null
    from?: InputJsonValue | null
    number: string
    token?: string | null
    issuer?: string | null
    due?: Date | string | null
    receiveto: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutSenderInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutSenderInput, InvoiceUncheckedCreateWithoutSenderInput>
  }

  export type InvoiceCreateManySenderInputEnvelope = {
    data: Enumerable<InvoiceCreateManySenderInput>
  }

  export type WalletCreateWithoutUserInput = {
    id?: string
    key: string
    name?: string | null
    description?: string | null
    preferredToken?: InputJsonValue | null
    method: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Accounts?: AccountCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutUserInput = {
    id?: string
    key: string
    name?: string | null
    description?: string | null
    preferredToken?: InputJsonValue | null
    method: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Accounts?: AccountUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletCreateOrConnectWithoutUserInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
  }

  export type WalletCreateManyUserInputEnvelope = {
    data: Enumerable<WalletCreateManyUserInput>
  }

  export type AuditEventCreateWithoutUserInput = {
    id?: string
    url?: string | null
    method?: string | null
    params?: InputJsonValue | null
    query?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditEventUncheckedCreateWithoutUserInput = {
    id?: string
    url?: string | null
    method?: string | null
    params?: InputJsonValue | null
    query?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditEventCreateOrConnectWithoutUserInput = {
    where: AuditEventWhereUniqueInput
    create: XOR<AuditEventCreateWithoutUserInput, AuditEventUncheckedCreateWithoutUserInput>
  }

  export type AuditEventCreateManyUserInputEnvelope = {
    data: Enumerable<AuditEventCreateManyUserInput>
  }

  export type ProfileCreateWithoutUserInput = {
    id?: string
    identities?: ProfileCreateidentitiesInput | Enumerable<InputJsonValue>
    firstName?: string | null
    lastName?: string | null
    nickname?: string | null
    picture: Buffer
    phone?: string | null
    phoneVerified?: boolean
    blocked?: boolean
    lastIP?: string | null
    lastLogin?: string | null
    multifactor?: ProfileCreatemultifactorInput | Enumerable<InputJsonValue>
    loginCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string
    identities?: ProfileCreateidentitiesInput | Enumerable<InputJsonValue>
    firstName?: string | null
    lastName?: string | null
    nickname?: string | null
    picture: Buffer
    phone?: string | null
    phoneVerified?: boolean
    blocked?: boolean
    lastIP?: string | null
    lastLogin?: string | null
    multifactor?: ProfileCreatemultifactorInput | Enumerable<InputJsonValue>
    loginCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ProfileCreateManyUserInputEnvelope = {
    data: Enumerable<ProfileCreateManyUserInput>
  }

  export type RefreshCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    createdByIp?: string | null
    revoked?: Date | string | null
    revokedByIp?: string | null
    replacedByToken?: string | null
  }

  export type RefreshUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    createdByIp?: string | null
    revoked?: Date | string | null
    revokedByIp?: string | null
    replacedByToken?: string | null
  }

  export type RefreshCreateOrConnectWithoutUserInput = {
    where: RefreshWhereUniqueInput
    create: XOR<RefreshCreateWithoutUserInput, RefreshUncheckedCreateWithoutUserInput>
  }

  export type RefreshCreateManyUserInputEnvelope = {
    data: Enumerable<RefreshCreateManyUserInput>
  }

  export type OwnerCreateWithoutUserInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    Organization?: OrganizationCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUncheckedCreateWithoutUserInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    Organization?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type OwnerCreateOrConnectWithoutUserInput = {
    where: OwnerWhereUniqueInput
    create: XOR<OwnerCreateWithoutUserInput, OwnerUncheckedCreateWithoutUserInput>
  }

  export type OwnerCreateManyUserInputEnvelope = {
    data: Enumerable<OwnerCreateManyUserInput>
  }

  export type ClientCreateWithoutUserInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    title?: string | null
    company?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    Organization?: OrganizationCreateNestedOneWithoutClientsInput
  }

  export type ClientUncheckedCreateWithoutUserInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    title?: string | null
    company?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    orgId?: string | null
  }

  export type ClientCreateOrConnectWithoutUserInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
  }

  export type ClientCreateManyUserInputEnvelope = {
    data: Enumerable<ClientCreateManyUserInput>
  }

  export type EmployeeCreateWithoutUserInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    Organization?: OrganizationCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeUncheckedCreateWithoutUserInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    orgId?: string | null
  }

  export type EmployeeCreateOrConnectWithoutUserInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
  }

  export type EmployeeCreateManyUserInputEnvelope = {
    data: Enumerable<EmployeeCreateManyUserInput>
  }

  export type LeadCreateWithoutUserInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    Organization?: OrganizationCreateNestedOneWithoutLeadsInput
  }

  export type LeadUncheckedCreateWithoutUserInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    orgId?: string | null
  }

  export type LeadCreateOrConnectWithoutUserInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutUserInput, LeadUncheckedCreateWithoutUserInput>
  }

  export type LeadCreateManyUserInputEnvelope = {
    data: Enumerable<LeadCreateManyUserInput>
  }

  export type ContractorCreateWithoutUserInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    Organization?: OrganizationCreateNestedOneWithoutContractorsInput
  }

  export type ContractorUncheckedCreateWithoutUserInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    orgId?: string | null
  }

  export type ContractorCreateOrConnectWithoutUserInput = {
    where: ContractorWhereUniqueInput
    create: XOR<ContractorCreateWithoutUserInput, ContractorUncheckedCreateWithoutUserInput>
  }

  export type ContractorCreateManyUserInputEnvelope = {
    data: Enumerable<ContractorCreateManyUserInput>
  }

  export type InvoiceUpsertWithWhereUniqueWithoutSenderInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutSenderInput, InvoiceUncheckedUpdateWithoutSenderInput>
    create: XOR<InvoiceCreateWithoutSenderInput, InvoiceUncheckedCreateWithoutSenderInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutSenderInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutSenderInput, InvoiceUncheckedUpdateWithoutSenderInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutSenderInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutInvoicesInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: Enumerable<InvoiceScalarWhereInput>
    OR?: Enumerable<InvoiceScalarWhereInput>
    NOT?: Enumerable<InvoiceScalarWhereInput>
    id?: StringFilter | string
    invoiceId?: StringFilter | string
    uuid?: StringFilter | string
    email?: StringFilter | string
    title?: StringNullableFilter | string | null
    from?: JsonNullableFilter
    number?: StringFilter | string
    token?: StringNullableFilter | string | null
    issuer?: StringNullableFilter | string | null
    due?: DateTimeNullableFilter | Date | string | null
    receiveto?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    senderId?: StringNullableFilter | string | null
  }

  export type WalletUpsertWithWhereUniqueWithoutUserInput = {
    where: WalletWhereUniqueInput
    update: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
  }

  export type WalletUpdateWithWhereUniqueWithoutUserInput = {
    where: WalletWhereUniqueInput
    data: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
  }

  export type WalletUpdateManyWithWhereWithoutUserInput = {
    where: WalletScalarWhereInput
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyWithoutWalletsInput>
  }

  export type WalletScalarWhereInput = {
    AND?: Enumerable<WalletScalarWhereInput>
    OR?: Enumerable<WalletScalarWhereInput>
    NOT?: Enumerable<WalletScalarWhereInput>
    id?: StringFilter | string
    key?: StringFilter | string
    name?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    preferredToken?: JsonNullableFilter
    method?: JsonFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    userId?: StringNullableFilter | string | null
  }

  export type AuditEventUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditEventWhereUniqueInput
    update: XOR<AuditEventUpdateWithoutUserInput, AuditEventUncheckedUpdateWithoutUserInput>
    create: XOR<AuditEventCreateWithoutUserInput, AuditEventUncheckedCreateWithoutUserInput>
  }

  export type AuditEventUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditEventWhereUniqueInput
    data: XOR<AuditEventUpdateWithoutUserInput, AuditEventUncheckedUpdateWithoutUserInput>
  }

  export type AuditEventUpdateManyWithWhereWithoutUserInput = {
    where: AuditEventScalarWhereInput
    data: XOR<AuditEventUpdateManyMutationInput, AuditEventUncheckedUpdateManyWithoutAuditEventsInput>
  }

  export type AuditEventScalarWhereInput = {
    AND?: Enumerable<AuditEventScalarWhereInput>
    OR?: Enumerable<AuditEventScalarWhereInput>
    NOT?: Enumerable<AuditEventScalarWhereInput>
    id?: StringFilter | string
    url?: StringNullableFilter | string | null
    method?: StringNullableFilter | string | null
    params?: JsonNullableFilter
    query?: JsonNullableFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    userId?: StringNullableFilter | string | null
  }

  export type ProfileUpsertWithWhereUniqueWithoutUserInput = {
    where: ProfileWhereUniqueInput
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ProfileUpdateWithWhereUniqueWithoutUserInput = {
    where: ProfileWhereUniqueInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateManyWithWhereWithoutUserInput = {
    where: ProfileScalarWhereInput
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyWithoutProfileInput>
  }

  export type ProfileScalarWhereInput = {
    AND?: Enumerable<ProfileScalarWhereInput>
    OR?: Enumerable<ProfileScalarWhereInput>
    NOT?: Enumerable<ProfileScalarWhereInput>
    id?: StringFilter | string
    identities?: JsonNullableListFilter
    firstName?: StringNullableFilter | string | null
    lastName?: StringNullableFilter | string | null
    nickname?: StringNullableFilter | string | null
    picture?: BytesFilter | Buffer
    phone?: StringNullableFilter | string | null
    phoneVerified?: BoolFilter | boolean
    blocked?: BoolFilter | boolean
    lastIP?: StringNullableFilter | string | null
    lastLogin?: StringNullableFilter | string | null
    multifactor?: JsonNullableListFilter
    loginCount?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    userId?: StringNullableFilter | string | null
  }

  export type RefreshUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshWhereUniqueInput
    update: XOR<RefreshUpdateWithoutUserInput, RefreshUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshCreateWithoutUserInput, RefreshUncheckedCreateWithoutUserInput>
  }

  export type RefreshUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshWhereUniqueInput
    data: XOR<RefreshUpdateWithoutUserInput, RefreshUncheckedUpdateWithoutUserInput>
  }

  export type RefreshUpdateManyWithWhereWithoutUserInput = {
    where: RefreshScalarWhereInput
    data: XOR<RefreshUpdateManyMutationInput, RefreshUncheckedUpdateManyWithoutRefreshInput>
  }

  export type RefreshScalarWhereInput = {
    AND?: Enumerable<RefreshScalarWhereInput>
    OR?: Enumerable<RefreshScalarWhereInput>
    NOT?: Enumerable<RefreshScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    token?: StringFilter | string
    expiresAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    createdByIp?: StringNullableFilter | string | null
    revoked?: DateTimeNullableFilter | Date | string | null
    revokedByIp?: StringNullableFilter | string | null
    replacedByToken?: StringNullableFilter | string | null
  }

  export type OwnerUpsertWithWhereUniqueWithoutUserInput = {
    where: OwnerWhereUniqueInput
    update: XOR<OwnerUpdateWithoutUserInput, OwnerUncheckedUpdateWithoutUserInput>
    create: XOR<OwnerCreateWithoutUserInput, OwnerUncheckedCreateWithoutUserInput>
  }

  export type OwnerUpdateWithWhereUniqueWithoutUserInput = {
    where: OwnerWhereUniqueInput
    data: XOR<OwnerUpdateWithoutUserInput, OwnerUncheckedUpdateWithoutUserInput>
  }

  export type OwnerUpdateManyWithWhereWithoutUserInput = {
    where: OwnerScalarWhereInput
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyWithoutOwnersInput>
  }

  export type OwnerScalarWhereInput = {
    AND?: Enumerable<OwnerScalarWhereInput>
    OR?: Enumerable<OwnerScalarWhereInput>
    NOT?: Enumerable<OwnerScalarWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    name?: StringFilter | string
    firstName?: StringNullableFilter | string | null
    lastName?: StringNullableFilter | string | null
    type?: EnumTypeFilter | Type
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    replacedBy?: StringNullableFilter | string | null
    status?: EnumStatusFilter | Status
    userId?: StringNullableFilter | string | null
  }

  export type ClientUpsertWithWhereUniqueWithoutUserInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutUserInput, ClientUncheckedUpdateWithoutUserInput>
    create: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutUserInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutUserInput, ClientUncheckedUpdateWithoutUserInput>
  }

  export type ClientUpdateManyWithWhereWithoutUserInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutClientsInput>
  }

  export type ClientScalarWhereInput = {
    AND?: Enumerable<ClientScalarWhereInput>
    OR?: Enumerable<ClientScalarWhereInput>
    NOT?: Enumerable<ClientScalarWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    name?: StringFilter | string
    firstName?: StringNullableFilter | string | null
    lastName?: StringNullableFilter | string | null
    title?: StringNullableFilter | string | null
    company?: StringNullableFilter | string | null
    type?: EnumTypeFilter | Type
    wallet?: StringNullableFilter | string | null
    tag?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    replacedBy?: StringNullableFilter | string | null
    status?: EnumStatusFilter | Status
    userId?: StringNullableFilter | string | null
    orgId?: StringNullableFilter | string | null
  }

  export type EmployeeUpsertWithWhereUniqueWithoutUserInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutUserInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutUserInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutEmployeesInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: Enumerable<EmployeeScalarWhereInput>
    OR?: Enumerable<EmployeeScalarWhereInput>
    NOT?: Enumerable<EmployeeScalarWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    name?: StringFilter | string
    firstName?: StringNullableFilter | string | null
    lastName?: StringNullableFilter | string | null
    type?: EnumTypeFilter | Type
    wallet?: StringNullableFilter | string | null
    tag?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    replacedBy?: StringNullableFilter | string | null
    status?: EnumStatusFilter | Status
    userId?: StringNullableFilter | string | null
    orgId?: StringNullableFilter | string | null
  }

  export type LeadUpsertWithWhereUniqueWithoutUserInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutUserInput, LeadUncheckedUpdateWithoutUserInput>
    create: XOR<LeadCreateWithoutUserInput, LeadUncheckedCreateWithoutUserInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutUserInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutUserInput, LeadUncheckedUpdateWithoutUserInput>
  }

  export type LeadUpdateManyWithWhereWithoutUserInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutLeadsInput>
  }

  export type LeadScalarWhereInput = {
    AND?: Enumerable<LeadScalarWhereInput>
    OR?: Enumerable<LeadScalarWhereInput>
    NOT?: Enumerable<LeadScalarWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    name?: StringFilter | string
    firstName?: StringNullableFilter | string | null
    lastName?: StringNullableFilter | string | null
    type?: EnumTypeFilter | Type
    wallet?: StringNullableFilter | string | null
    tag?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    replacedBy?: StringNullableFilter | string | null
    status?: EnumStatusFilter | Status
    userId?: StringNullableFilter | string | null
    orgId?: StringNullableFilter | string | null
  }

  export type ContractorUpsertWithWhereUniqueWithoutUserInput = {
    where: ContractorWhereUniqueInput
    update: XOR<ContractorUpdateWithoutUserInput, ContractorUncheckedUpdateWithoutUserInput>
    create: XOR<ContractorCreateWithoutUserInput, ContractorUncheckedCreateWithoutUserInput>
  }

  export type ContractorUpdateWithWhereUniqueWithoutUserInput = {
    where: ContractorWhereUniqueInput
    data: XOR<ContractorUpdateWithoutUserInput, ContractorUncheckedUpdateWithoutUserInput>
  }

  export type ContractorUpdateManyWithWhereWithoutUserInput = {
    where: ContractorScalarWhereInput
    data: XOR<ContractorUpdateManyMutationInput, ContractorUncheckedUpdateManyWithoutContractorsInput>
  }

  export type ContractorScalarWhereInput = {
    AND?: Enumerable<ContractorScalarWhereInput>
    OR?: Enumerable<ContractorScalarWhereInput>
    NOT?: Enumerable<ContractorScalarWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    name?: StringFilter | string
    firstName?: StringNullableFilter | string | null
    lastName?: StringNullableFilter | string | null
    type?: EnumTypeFilter | Type
    wallet?: StringNullableFilter | string | null
    tag?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    replacedBy?: StringNullableFilter | string | null
    status?: EnumStatusFilter | Status
    userId?: StringNullableFilter | string | null
    orgId?: StringNullableFilter | string | null
  }

  export type UserCreateWithoutClientsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    lastName?: string | null
    role?: Role
    verificationToken?: string | null
    verified?: boolean
    acceptTerms?: boolean
    resetToken?: string | null
    passwordReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceCreateNestedManyWithoutSenderInput
    Wallets?: WalletCreateNestedManyWithoutUserInput
    AuditEvents?: AuditEventCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedManyWithoutUserInput
    Refresh?: RefreshCreateNestedManyWithoutUserInput
    Owners?: OwnerCreateNestedManyWithoutUserInput
    Employees?: EmployeeCreateNestedManyWithoutUserInput
    Leads?: LeadCreateNestedManyWithoutUserInput
    Contractors?: ContractorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClientsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    lastName?: string | null
    role?: Role
    verificationToken?: string | null
    verified?: boolean
    acceptTerms?: boolean
    resetToken?: string | null
    passwordReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceUncheckedCreateNestedManyWithoutSenderInput
    Wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    AuditEvents?: AuditEventUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    Refresh?: RefreshUncheckedCreateNestedManyWithoutUserInput
    Owners?: OwnerUncheckedCreateNestedManyWithoutUserInput
    Employees?: EmployeeUncheckedCreateNestedManyWithoutUserInput
    Leads?: LeadUncheckedCreateNestedManyWithoutUserInput
    Contractors?: ContractorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
  }

  export type OrganizationCreateWithoutClientsInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    Owner?: OwnerCreateNestedOneWithoutOrganizationInput
    Employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    Leads?: LeadCreateNestedManyWithoutOrganizationInput
    Contractors?: ContractorCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutClientsInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    ownerId?: string | null
    Employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    Leads?: LeadUncheckedCreateNestedManyWithoutOrganizationInput
    Contractors?: ContractorUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutClientsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutClientsInput, OrganizationUncheckedCreateWithoutClientsInput>
  }

  export type UserUpsertWithoutClientsInput = {
    update: XOR<UserUpdateWithoutClientsInput, UserUncheckedUpdateWithoutClientsInput>
    create: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
  }

  export type UserUpdateWithoutClientsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    acceptTerms?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUpdateManyWithoutSenderNestedInput
    Wallets?: WalletUpdateManyWithoutUserNestedInput
    AuditEvents?: AuditEventUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateManyWithoutUserNestedInput
    Refresh?: RefreshUpdateManyWithoutUserNestedInput
    Owners?: OwnerUpdateManyWithoutUserNestedInput
    Employees?: EmployeeUpdateManyWithoutUserNestedInput
    Leads?: LeadUpdateManyWithoutUserNestedInput
    Contractors?: ContractorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClientsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    acceptTerms?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUncheckedUpdateManyWithoutSenderNestedInput
    Wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    AuditEvents?: AuditEventUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    Refresh?: RefreshUncheckedUpdateManyWithoutUserNestedInput
    Owners?: OwnerUncheckedUpdateManyWithoutUserNestedInput
    Employees?: EmployeeUncheckedUpdateManyWithoutUserNestedInput
    Leads?: LeadUncheckedUpdateManyWithoutUserNestedInput
    Contractors?: ContractorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrganizationUpsertWithoutClientsInput = {
    update: XOR<OrganizationUpdateWithoutClientsInput, OrganizationUncheckedUpdateWithoutClientsInput>
    create: XOR<OrganizationCreateWithoutClientsInput, OrganizationUncheckedCreateWithoutClientsInput>
  }

  export type OrganizationUpdateWithoutClientsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    Owner?: OwnerUpdateOneWithoutOrganizationNestedInput
    Employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    Leads?: LeadUpdateManyWithoutOrganizationNestedInput
    Contractors?: ContractorUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutClientsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    Employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    Leads?: LeadUncheckedUpdateManyWithoutOrganizationNestedInput
    Contractors?: ContractorUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserCreateWithoutEmployeesInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    lastName?: string | null
    role?: Role
    verificationToken?: string | null
    verified?: boolean
    acceptTerms?: boolean
    resetToken?: string | null
    passwordReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceCreateNestedManyWithoutSenderInput
    Wallets?: WalletCreateNestedManyWithoutUserInput
    AuditEvents?: AuditEventCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedManyWithoutUserInput
    Refresh?: RefreshCreateNestedManyWithoutUserInput
    Owners?: OwnerCreateNestedManyWithoutUserInput
    Clients?: ClientCreateNestedManyWithoutUserInput
    Leads?: LeadCreateNestedManyWithoutUserInput
    Contractors?: ContractorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmployeesInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    lastName?: string | null
    role?: Role
    verificationToken?: string | null
    verified?: boolean
    acceptTerms?: boolean
    resetToken?: string | null
    passwordReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceUncheckedCreateNestedManyWithoutSenderInput
    Wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    AuditEvents?: AuditEventUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    Refresh?: RefreshUncheckedCreateNestedManyWithoutUserInput
    Owners?: OwnerUncheckedCreateNestedManyWithoutUserInput
    Clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    Leads?: LeadUncheckedCreateNestedManyWithoutUserInput
    Contractors?: ContractorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmployeesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
  }

  export type OrganizationCreateWithoutEmployeesInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    Owner?: OwnerCreateNestedOneWithoutOrganizationInput
    Clients?: ClientCreateNestedManyWithoutOrganizationInput
    Leads?: LeadCreateNestedManyWithoutOrganizationInput
    Contractors?: ContractorCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutEmployeesInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    ownerId?: string | null
    Clients?: ClientUncheckedCreateNestedManyWithoutOrganizationInput
    Leads?: LeadUncheckedCreateNestedManyWithoutOrganizationInput
    Contractors?: ContractorUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutEmployeesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutEmployeesInput, OrganizationUncheckedCreateWithoutEmployeesInput>
  }

  export type UserUpsertWithoutEmployeesInput = {
    update: XOR<UserUpdateWithoutEmployeesInput, UserUncheckedUpdateWithoutEmployeesInput>
    create: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
  }

  export type UserUpdateWithoutEmployeesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    acceptTerms?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUpdateManyWithoutSenderNestedInput
    Wallets?: WalletUpdateManyWithoutUserNestedInput
    AuditEvents?: AuditEventUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateManyWithoutUserNestedInput
    Refresh?: RefreshUpdateManyWithoutUserNestedInput
    Owners?: OwnerUpdateManyWithoutUserNestedInput
    Clients?: ClientUpdateManyWithoutUserNestedInput
    Leads?: LeadUpdateManyWithoutUserNestedInput
    Contractors?: ContractorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployeesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    acceptTerms?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUncheckedUpdateManyWithoutSenderNestedInput
    Wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    AuditEvents?: AuditEventUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    Refresh?: RefreshUncheckedUpdateManyWithoutUserNestedInput
    Owners?: OwnerUncheckedUpdateManyWithoutUserNestedInput
    Clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    Leads?: LeadUncheckedUpdateManyWithoutUserNestedInput
    Contractors?: ContractorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrganizationUpsertWithoutEmployeesInput = {
    update: XOR<OrganizationUpdateWithoutEmployeesInput, OrganizationUncheckedUpdateWithoutEmployeesInput>
    create: XOR<OrganizationCreateWithoutEmployeesInput, OrganizationUncheckedCreateWithoutEmployeesInput>
  }

  export type OrganizationUpdateWithoutEmployeesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    Owner?: OwnerUpdateOneWithoutOrganizationNestedInput
    Clients?: ClientUpdateManyWithoutOrganizationNestedInput
    Leads?: LeadUpdateManyWithoutOrganizationNestedInput
    Contractors?: ContractorUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutEmployeesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    Clients?: ClientUncheckedUpdateManyWithoutOrganizationNestedInput
    Leads?: LeadUncheckedUpdateManyWithoutOrganizationNestedInput
    Contractors?: ContractorUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserCreateWithoutLeadsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    lastName?: string | null
    role?: Role
    verificationToken?: string | null
    verified?: boolean
    acceptTerms?: boolean
    resetToken?: string | null
    passwordReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceCreateNestedManyWithoutSenderInput
    Wallets?: WalletCreateNestedManyWithoutUserInput
    AuditEvents?: AuditEventCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedManyWithoutUserInput
    Refresh?: RefreshCreateNestedManyWithoutUserInput
    Owners?: OwnerCreateNestedManyWithoutUserInput
    Clients?: ClientCreateNestedManyWithoutUserInput
    Employees?: EmployeeCreateNestedManyWithoutUserInput
    Contractors?: ContractorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLeadsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    lastName?: string | null
    role?: Role
    verificationToken?: string | null
    verified?: boolean
    acceptTerms?: boolean
    resetToken?: string | null
    passwordReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceUncheckedCreateNestedManyWithoutSenderInput
    Wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    AuditEvents?: AuditEventUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    Refresh?: RefreshUncheckedCreateNestedManyWithoutUserInput
    Owners?: OwnerUncheckedCreateNestedManyWithoutUserInput
    Clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    Employees?: EmployeeUncheckedCreateNestedManyWithoutUserInput
    Contractors?: ContractorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLeadsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeadsInput, UserUncheckedCreateWithoutLeadsInput>
  }

  export type OrganizationCreateWithoutLeadsInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    Owner?: OwnerCreateNestedOneWithoutOrganizationInput
    Clients?: ClientCreateNestedManyWithoutOrganizationInput
    Employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    Contractors?: ContractorCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutLeadsInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    ownerId?: string | null
    Clients?: ClientUncheckedCreateNestedManyWithoutOrganizationInput
    Employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    Contractors?: ContractorUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutLeadsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutLeadsInput, OrganizationUncheckedCreateWithoutLeadsInput>
  }

  export type UserUpsertWithoutLeadsInput = {
    update: XOR<UserUpdateWithoutLeadsInput, UserUncheckedUpdateWithoutLeadsInput>
    create: XOR<UserCreateWithoutLeadsInput, UserUncheckedCreateWithoutLeadsInput>
  }

  export type UserUpdateWithoutLeadsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    acceptTerms?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUpdateManyWithoutSenderNestedInput
    Wallets?: WalletUpdateManyWithoutUserNestedInput
    AuditEvents?: AuditEventUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateManyWithoutUserNestedInput
    Refresh?: RefreshUpdateManyWithoutUserNestedInput
    Owners?: OwnerUpdateManyWithoutUserNestedInput
    Clients?: ClientUpdateManyWithoutUserNestedInput
    Employees?: EmployeeUpdateManyWithoutUserNestedInput
    Contractors?: ContractorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLeadsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    acceptTerms?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUncheckedUpdateManyWithoutSenderNestedInput
    Wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    AuditEvents?: AuditEventUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    Refresh?: RefreshUncheckedUpdateManyWithoutUserNestedInput
    Owners?: OwnerUncheckedUpdateManyWithoutUserNestedInput
    Clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    Employees?: EmployeeUncheckedUpdateManyWithoutUserNestedInput
    Contractors?: ContractorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrganizationUpsertWithoutLeadsInput = {
    update: XOR<OrganizationUpdateWithoutLeadsInput, OrganizationUncheckedUpdateWithoutLeadsInput>
    create: XOR<OrganizationCreateWithoutLeadsInput, OrganizationUncheckedCreateWithoutLeadsInput>
  }

  export type OrganizationUpdateWithoutLeadsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    Owner?: OwnerUpdateOneWithoutOrganizationNestedInput
    Clients?: ClientUpdateManyWithoutOrganizationNestedInput
    Employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    Contractors?: ContractorUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutLeadsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    Clients?: ClientUncheckedUpdateManyWithoutOrganizationNestedInput
    Employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    Contractors?: ContractorUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserCreateWithoutContractorsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    lastName?: string | null
    role?: Role
    verificationToken?: string | null
    verified?: boolean
    acceptTerms?: boolean
    resetToken?: string | null
    passwordReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceCreateNestedManyWithoutSenderInput
    Wallets?: WalletCreateNestedManyWithoutUserInput
    AuditEvents?: AuditEventCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedManyWithoutUserInput
    Refresh?: RefreshCreateNestedManyWithoutUserInput
    Owners?: OwnerCreateNestedManyWithoutUserInput
    Clients?: ClientCreateNestedManyWithoutUserInput
    Employees?: EmployeeCreateNestedManyWithoutUserInput
    Leads?: LeadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContractorsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    lastName?: string | null
    role?: Role
    verificationToken?: string | null
    verified?: boolean
    acceptTerms?: boolean
    resetToken?: string | null
    passwordReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceUncheckedCreateNestedManyWithoutSenderInput
    Wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    AuditEvents?: AuditEventUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    Refresh?: RefreshUncheckedCreateNestedManyWithoutUserInput
    Owners?: OwnerUncheckedCreateNestedManyWithoutUserInput
    Clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    Employees?: EmployeeUncheckedCreateNestedManyWithoutUserInput
    Leads?: LeadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContractorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContractorsInput, UserUncheckedCreateWithoutContractorsInput>
  }

  export type OrganizationCreateWithoutContractorsInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    Owner?: OwnerCreateNestedOneWithoutOrganizationInput
    Clients?: ClientCreateNestedManyWithoutOrganizationInput
    Employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    Leads?: LeadCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutContractorsInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    ownerId?: string | null
    Clients?: ClientUncheckedCreateNestedManyWithoutOrganizationInput
    Employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    Leads?: LeadUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutContractorsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutContractorsInput, OrganizationUncheckedCreateWithoutContractorsInput>
  }

  export type UserUpsertWithoutContractorsInput = {
    update: XOR<UserUpdateWithoutContractorsInput, UserUncheckedUpdateWithoutContractorsInput>
    create: XOR<UserCreateWithoutContractorsInput, UserUncheckedCreateWithoutContractorsInput>
  }

  export type UserUpdateWithoutContractorsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    acceptTerms?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUpdateManyWithoutSenderNestedInput
    Wallets?: WalletUpdateManyWithoutUserNestedInput
    AuditEvents?: AuditEventUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateManyWithoutUserNestedInput
    Refresh?: RefreshUpdateManyWithoutUserNestedInput
    Owners?: OwnerUpdateManyWithoutUserNestedInput
    Clients?: ClientUpdateManyWithoutUserNestedInput
    Employees?: EmployeeUpdateManyWithoutUserNestedInput
    Leads?: LeadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContractorsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    acceptTerms?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUncheckedUpdateManyWithoutSenderNestedInput
    Wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    AuditEvents?: AuditEventUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    Refresh?: RefreshUncheckedUpdateManyWithoutUserNestedInput
    Owners?: OwnerUncheckedUpdateManyWithoutUserNestedInput
    Clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    Employees?: EmployeeUncheckedUpdateManyWithoutUserNestedInput
    Leads?: LeadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrganizationUpsertWithoutContractorsInput = {
    update: XOR<OrganizationUpdateWithoutContractorsInput, OrganizationUncheckedUpdateWithoutContractorsInput>
    create: XOR<OrganizationCreateWithoutContractorsInput, OrganizationUncheckedCreateWithoutContractorsInput>
  }

  export type OrganizationUpdateWithoutContractorsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    Owner?: OwnerUpdateOneWithoutOrganizationNestedInput
    Clients?: ClientUpdateManyWithoutOrganizationNestedInput
    Employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    Leads?: LeadUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutContractorsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    Clients?: ClientUncheckedUpdateManyWithoutOrganizationNestedInput
    Employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    Leads?: LeadUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OwnerCreateWithoutOrganizationInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    User?: UserCreateNestedOneWithoutOwnersInput
  }

  export type OwnerUncheckedCreateWithoutOrganizationInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    userId?: string | null
  }

  export type OwnerCreateOrConnectWithoutOrganizationInput = {
    where: OwnerWhereUniqueInput
    create: XOR<OwnerCreateWithoutOrganizationInput, OwnerUncheckedCreateWithoutOrganizationInput>
  }

  export type ClientCreateWithoutOrganizationInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    title?: string | null
    company?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    User?: UserCreateNestedOneWithoutClientsInput
  }

  export type ClientUncheckedCreateWithoutOrganizationInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    title?: string | null
    company?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    userId?: string | null
  }

  export type ClientCreateOrConnectWithoutOrganizationInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutOrganizationInput, ClientUncheckedCreateWithoutOrganizationInput>
  }

  export type ClientCreateManyOrganizationInputEnvelope = {
    data: Enumerable<ClientCreateManyOrganizationInput>
  }

  export type EmployeeCreateWithoutOrganizationInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    User?: UserCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeUncheckedCreateWithoutOrganizationInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    userId?: string | null
  }

  export type EmployeeCreateOrConnectWithoutOrganizationInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput>
  }

  export type EmployeeCreateManyOrganizationInputEnvelope = {
    data: Enumerable<EmployeeCreateManyOrganizationInput>
  }

  export type LeadCreateWithoutOrganizationInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    User?: UserCreateNestedOneWithoutLeadsInput
  }

  export type LeadUncheckedCreateWithoutOrganizationInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    userId?: string | null
  }

  export type LeadCreateOrConnectWithoutOrganizationInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutOrganizationInput, LeadUncheckedCreateWithoutOrganizationInput>
  }

  export type LeadCreateManyOrganizationInputEnvelope = {
    data: Enumerable<LeadCreateManyOrganizationInput>
  }

  export type ContractorCreateWithoutOrganizationInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    User?: UserCreateNestedOneWithoutContractorsInput
  }

  export type ContractorUncheckedCreateWithoutOrganizationInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    userId?: string | null
  }

  export type ContractorCreateOrConnectWithoutOrganizationInput = {
    where: ContractorWhereUniqueInput
    create: XOR<ContractorCreateWithoutOrganizationInput, ContractorUncheckedCreateWithoutOrganizationInput>
  }

  export type ContractorCreateManyOrganizationInputEnvelope = {
    data: Enumerable<ContractorCreateManyOrganizationInput>
  }

  export type OwnerUpsertWithoutOrganizationInput = {
    update: XOR<OwnerUpdateWithoutOrganizationInput, OwnerUncheckedUpdateWithoutOrganizationInput>
    create: XOR<OwnerCreateWithoutOrganizationInput, OwnerUncheckedCreateWithoutOrganizationInput>
  }

  export type OwnerUpdateWithoutOrganizationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    User?: UserUpdateOneWithoutOwnersNestedInput
  }

  export type OwnerUncheckedUpdateWithoutOrganizationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutOrganizationInput, ClientUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ClientCreateWithoutOrganizationInput, ClientUncheckedCreateWithoutOrganizationInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutOrganizationInput, ClientUncheckedUpdateWithoutOrganizationInput>
  }

  export type ClientUpdateManyWithWhereWithoutOrganizationInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutClientsInput>
  }

  export type EmployeeUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutOrganizationInput, EmployeeUncheckedUpdateWithoutOrganizationInput>
    create: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutOrganizationInput, EmployeeUncheckedUpdateWithoutOrganizationInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutOrganizationInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutEmployeesInput>
  }

  export type LeadUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutOrganizationInput, LeadUncheckedUpdateWithoutOrganizationInput>
    create: XOR<LeadCreateWithoutOrganizationInput, LeadUncheckedCreateWithoutOrganizationInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutOrganizationInput, LeadUncheckedUpdateWithoutOrganizationInput>
  }

  export type LeadUpdateManyWithWhereWithoutOrganizationInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutLeadsInput>
  }

  export type ContractorUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ContractorWhereUniqueInput
    update: XOR<ContractorUpdateWithoutOrganizationInput, ContractorUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ContractorCreateWithoutOrganizationInput, ContractorUncheckedCreateWithoutOrganizationInput>
  }

  export type ContractorUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ContractorWhereUniqueInput
    data: XOR<ContractorUpdateWithoutOrganizationInput, ContractorUncheckedUpdateWithoutOrganizationInput>
  }

  export type ContractorUpdateManyWithWhereWithoutOrganizationInput = {
    where: ContractorScalarWhereInput
    data: XOR<ContractorUpdateManyMutationInput, ContractorUncheckedUpdateManyWithoutContractorsInput>
  }

  export type UserCreateWithoutOwnersInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    lastName?: string | null
    role?: Role
    verificationToken?: string | null
    verified?: boolean
    acceptTerms?: boolean
    resetToken?: string | null
    passwordReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceCreateNestedManyWithoutSenderInput
    Wallets?: WalletCreateNestedManyWithoutUserInput
    AuditEvents?: AuditEventCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedManyWithoutUserInput
    Refresh?: RefreshCreateNestedManyWithoutUserInput
    Clients?: ClientCreateNestedManyWithoutUserInput
    Employees?: EmployeeCreateNestedManyWithoutUserInput
    Leads?: LeadCreateNestedManyWithoutUserInput
    Contractors?: ContractorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnersInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    lastName?: string | null
    role?: Role
    verificationToken?: string | null
    verified?: boolean
    acceptTerms?: boolean
    resetToken?: string | null
    passwordReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceUncheckedCreateNestedManyWithoutSenderInput
    Wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    AuditEvents?: AuditEventUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    Refresh?: RefreshUncheckedCreateNestedManyWithoutUserInput
    Clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    Employees?: EmployeeUncheckedCreateNestedManyWithoutUserInput
    Leads?: LeadUncheckedCreateNestedManyWithoutUserInput
    Contractors?: ContractorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnersInput, UserUncheckedCreateWithoutOwnersInput>
  }

  export type OrganizationCreateWithoutOwnerInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    Clients?: ClientCreateNestedManyWithoutOrganizationInput
    Employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    Leads?: LeadCreateNestedManyWithoutOrganizationInput
    Contractors?: ContractorCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutOwnerInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    Clients?: ClientUncheckedCreateNestedManyWithoutOrganizationInput
    Employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    Leads?: LeadUncheckedCreateNestedManyWithoutOrganizationInput
    Contractors?: ContractorUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutOwnerInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput>
  }

  export type OrganizationCreateManyOwnerInputEnvelope = {
    data: Enumerable<OrganizationCreateManyOwnerInput>
  }

  export type UserUpsertWithoutOwnersInput = {
    update: XOR<UserUpdateWithoutOwnersInput, UserUncheckedUpdateWithoutOwnersInput>
    create: XOR<UserCreateWithoutOwnersInput, UserUncheckedCreateWithoutOwnersInput>
  }

  export type UserUpdateWithoutOwnersInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    acceptTerms?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUpdateManyWithoutSenderNestedInput
    Wallets?: WalletUpdateManyWithoutUserNestedInput
    AuditEvents?: AuditEventUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateManyWithoutUserNestedInput
    Refresh?: RefreshUpdateManyWithoutUserNestedInput
    Clients?: ClientUpdateManyWithoutUserNestedInput
    Employees?: EmployeeUpdateManyWithoutUserNestedInput
    Leads?: LeadUpdateManyWithoutUserNestedInput
    Contractors?: ContractorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnersInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    acceptTerms?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUncheckedUpdateManyWithoutSenderNestedInput
    Wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    AuditEvents?: AuditEventUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    Refresh?: RefreshUncheckedUpdateManyWithoutUserNestedInput
    Clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    Employees?: EmployeeUncheckedUpdateManyWithoutUserNestedInput
    Leads?: LeadUncheckedUpdateManyWithoutUserNestedInput
    Contractors?: ContractorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrganizationUpsertWithWhereUniqueWithoutOwnerInput = {
    where: OrganizationWhereUniqueInput
    update: XOR<OrganizationUpdateWithoutOwnerInput, OrganizationUncheckedUpdateWithoutOwnerInput>
    create: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput>
  }

  export type OrganizationUpdateWithWhereUniqueWithoutOwnerInput = {
    where: OrganizationWhereUniqueInput
    data: XOR<OrganizationUpdateWithoutOwnerInput, OrganizationUncheckedUpdateWithoutOwnerInput>
  }

  export type OrganizationUpdateManyWithWhereWithoutOwnerInput = {
    where: OrganizationScalarWhereInput
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type OrganizationScalarWhereInput = {
    AND?: Enumerable<OrganizationScalarWhereInput>
    OR?: Enumerable<OrganizationScalarWhereInput>
    NOT?: Enumerable<OrganizationScalarWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    name?: StringFilter | string
    firstName?: StringNullableFilter | string | null
    lastName?: StringNullableFilter | string | null
    type?: EnumTypeFilter | Type
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    replacedBy?: StringNullableFilter | string | null
    status?: EnumStatusFilter | Status
    ownerId?: StringNullableFilter | string | null
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    lastName?: string | null
    role?: Role
    verificationToken?: string | null
    verified?: boolean
    acceptTerms?: boolean
    resetToken?: string | null
    passwordReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceCreateNestedManyWithoutSenderInput
    Wallets?: WalletCreateNestedManyWithoutUserInput
    AuditEvents?: AuditEventCreateNestedManyWithoutUserInput
    Refresh?: RefreshCreateNestedManyWithoutUserInput
    Owners?: OwnerCreateNestedManyWithoutUserInput
    Clients?: ClientCreateNestedManyWithoutUserInput
    Employees?: EmployeeCreateNestedManyWithoutUserInput
    Leads?: LeadCreateNestedManyWithoutUserInput
    Contractors?: ContractorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    lastName?: string | null
    role?: Role
    verificationToken?: string | null
    verified?: boolean
    acceptTerms?: boolean
    resetToken?: string | null
    passwordReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceUncheckedCreateNestedManyWithoutSenderInput
    Wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    AuditEvents?: AuditEventUncheckedCreateNestedManyWithoutUserInput
    Refresh?: RefreshUncheckedCreateNestedManyWithoutUserInput
    Owners?: OwnerUncheckedCreateNestedManyWithoutUserInput
    Clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    Employees?: EmployeeUncheckedCreateNestedManyWithoutUserInput
    Leads?: LeadUncheckedCreateNestedManyWithoutUserInput
    Contractors?: ContractorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    acceptTerms?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUpdateManyWithoutSenderNestedInput
    Wallets?: WalletUpdateManyWithoutUserNestedInput
    AuditEvents?: AuditEventUpdateManyWithoutUserNestedInput
    Refresh?: RefreshUpdateManyWithoutUserNestedInput
    Owners?: OwnerUpdateManyWithoutUserNestedInput
    Clients?: ClientUpdateManyWithoutUserNestedInput
    Employees?: EmployeeUpdateManyWithoutUserNestedInput
    Leads?: LeadUpdateManyWithoutUserNestedInput
    Contractors?: ContractorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    acceptTerms?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUncheckedUpdateManyWithoutSenderNestedInput
    Wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    AuditEvents?: AuditEventUncheckedUpdateManyWithoutUserNestedInput
    Refresh?: RefreshUncheckedUpdateManyWithoutUserNestedInput
    Owners?: OwnerUncheckedUpdateManyWithoutUserNestedInput
    Clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    Employees?: EmployeeUncheckedUpdateManyWithoutUserNestedInput
    Leads?: LeadUncheckedUpdateManyWithoutUserNestedInput
    Contractors?: ContractorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAuditEventsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    lastName?: string | null
    role?: Role
    verificationToken?: string | null
    verified?: boolean
    acceptTerms?: boolean
    resetToken?: string | null
    passwordReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceCreateNestedManyWithoutSenderInput
    Wallets?: WalletCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedManyWithoutUserInput
    Refresh?: RefreshCreateNestedManyWithoutUserInput
    Owners?: OwnerCreateNestedManyWithoutUserInput
    Clients?: ClientCreateNestedManyWithoutUserInput
    Employees?: EmployeeCreateNestedManyWithoutUserInput
    Leads?: LeadCreateNestedManyWithoutUserInput
    Contractors?: ContractorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditEventsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    lastName?: string | null
    role?: Role
    verificationToken?: string | null
    verified?: boolean
    acceptTerms?: boolean
    resetToken?: string | null
    passwordReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceUncheckedCreateNestedManyWithoutSenderInput
    Wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    Refresh?: RefreshUncheckedCreateNestedManyWithoutUserInput
    Owners?: OwnerUncheckedCreateNestedManyWithoutUserInput
    Clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    Employees?: EmployeeUncheckedCreateNestedManyWithoutUserInput
    Leads?: LeadUncheckedCreateNestedManyWithoutUserInput
    Contractors?: ContractorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditEventsInput, UserUncheckedCreateWithoutAuditEventsInput>
  }

  export type UserUpsertWithoutAuditEventsInput = {
    update: XOR<UserUpdateWithoutAuditEventsInput, UserUncheckedUpdateWithoutAuditEventsInput>
    create: XOR<UserCreateWithoutAuditEventsInput, UserUncheckedCreateWithoutAuditEventsInput>
  }

  export type UserUpdateWithoutAuditEventsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    acceptTerms?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUpdateManyWithoutSenderNestedInput
    Wallets?: WalletUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateManyWithoutUserNestedInput
    Refresh?: RefreshUpdateManyWithoutUserNestedInput
    Owners?: OwnerUpdateManyWithoutUserNestedInput
    Clients?: ClientUpdateManyWithoutUserNestedInput
    Employees?: EmployeeUpdateManyWithoutUserNestedInput
    Leads?: LeadUpdateManyWithoutUserNestedInput
    Contractors?: ContractorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditEventsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    acceptTerms?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUncheckedUpdateManyWithoutSenderNestedInput
    Wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    Refresh?: RefreshUncheckedUpdateManyWithoutUserNestedInput
    Owners?: OwnerUncheckedUpdateManyWithoutUserNestedInput
    Clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    Employees?: EmployeeUncheckedUpdateManyWithoutUserNestedInput
    Leads?: LeadUncheckedUpdateManyWithoutUserNestedInput
    Contractors?: ContractorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRefreshInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    lastName?: string | null
    role?: Role
    verificationToken?: string | null
    verified?: boolean
    acceptTerms?: boolean
    resetToken?: string | null
    passwordReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceCreateNestedManyWithoutSenderInput
    Wallets?: WalletCreateNestedManyWithoutUserInput
    AuditEvents?: AuditEventCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedManyWithoutUserInput
    Owners?: OwnerCreateNestedManyWithoutUserInput
    Clients?: ClientCreateNestedManyWithoutUserInput
    Employees?: EmployeeCreateNestedManyWithoutUserInput
    Leads?: LeadCreateNestedManyWithoutUserInput
    Contractors?: ContractorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    lastName?: string | null
    role?: Role
    verificationToken?: string | null
    verified?: boolean
    acceptTerms?: boolean
    resetToken?: string | null
    passwordReset?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceUncheckedCreateNestedManyWithoutSenderInput
    Wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    AuditEvents?: AuditEventUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    Owners?: OwnerUncheckedCreateNestedManyWithoutUserInput
    Clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    Employees?: EmployeeUncheckedCreateNestedManyWithoutUserInput
    Leads?: LeadUncheckedCreateNestedManyWithoutUserInput
    Contractors?: ContractorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshInput, UserUncheckedCreateWithoutRefreshInput>
  }

  export type UserUpsertWithoutRefreshInput = {
    update: XOR<UserUpdateWithoutRefreshInput, UserUncheckedUpdateWithoutRefreshInput>
    create: XOR<UserCreateWithoutRefreshInput, UserUncheckedCreateWithoutRefreshInput>
  }

  export type UserUpdateWithoutRefreshInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    acceptTerms?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUpdateManyWithoutSenderNestedInput
    Wallets?: WalletUpdateManyWithoutUserNestedInput
    AuditEvents?: AuditEventUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateManyWithoutUserNestedInput
    Owners?: OwnerUpdateManyWithoutUserNestedInput
    Clients?: ClientUpdateManyWithoutUserNestedInput
    Employees?: EmployeeUpdateManyWithoutUserNestedInput
    Leads?: LeadUpdateManyWithoutUserNestedInput
    Contractors?: ContractorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    acceptTerms?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordReset?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUncheckedUpdateManyWithoutSenderNestedInput
    Wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    AuditEvents?: AuditEventUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    Owners?: OwnerUncheckedUpdateManyWithoutUserNestedInput
    Clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    Employees?: EmployeeUncheckedUpdateManyWithoutUserNestedInput
    Leads?: LeadUncheckedUpdateManyWithoutUserNestedInput
    Contractors?: ContractorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InvoiceItemCreateManyInvoiceInput = {
    id?: string
    number?: number | null
    name?: string | null
    description: string
    token?: string | null
    amount: string
  }

  export type InvoiceItemUpdateWithoutInvoiceInput = {
    number?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceItemUncheckedUpdateWithoutInvoiceInput = {
    number?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceItemUncheckedUpdateManyWithoutItemsInput = {
    number?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateManyWalletInput = {
    id?: string
    address: string
    name?: string | null
    description?: string | null
    preferredToken?: InputJsonValue | null
    tag: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutWalletInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preferredToken?: InputJsonValue | InputJsonValue | null
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutWalletInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preferredToken?: InputJsonValue | InputJsonValue | null
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutAccountsInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preferredToken?: InputJsonValue | InputJsonValue | null
    tag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManySenderInput = {
    id?: string
    invoiceId: string
    uuid?: string
    email: string
    title?: string | null
    from?: InputJsonValue | null
    number: string
    token?: string | null
    issuer?: string | null
    due?: Date | string | null
    receiveto: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletCreateManyUserInput = {
    id?: string
    key: string
    name?: string | null
    description?: string | null
    preferredToken?: InputJsonValue | null
    method: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditEventCreateManyUserInput = {
    id?: string
    url?: string | null
    method?: string | null
    params?: InputJsonValue | null
    query?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCreateManyUserInput = {
    id?: string
    identities?: ProfileCreateidentitiesInput | Enumerable<InputJsonValue>
    firstName?: string | null
    lastName?: string | null
    nickname?: string | null
    picture: Buffer
    phone?: string | null
    phoneVerified?: boolean
    blocked?: boolean
    lastIP?: string | null
    lastLogin?: string | null
    multifactor?: ProfileCreatemultifactorInput | Enumerable<InputJsonValue>
    loginCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    createdByIp?: string | null
    revoked?: Date | string | null
    revokedByIp?: string | null
    replacedByToken?: string | null
  }

  export type OwnerCreateManyUserInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
  }

  export type ClientCreateManyUserInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    title?: string | null
    company?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    orgId?: string | null
  }

  export type EmployeeCreateManyUserInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    orgId?: string | null
  }

  export type LeadCreateManyUserInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    orgId?: string | null
  }

  export type ContractorCreateManyUserInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    orgId?: string | null
  }

  export type InvoiceUpdateWithoutSenderInput = {
    invoiceId?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    from?: InputJsonValue | InputJsonValue | null
    number?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    issuer?: NullableStringFieldUpdateOperationsInput | string | null
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiveto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutSenderInput = {
    invoiceId?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    from?: InputJsonValue | InputJsonValue | null
    number?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    issuer?: NullableStringFieldUpdateOperationsInput | string | null
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiveto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutInvoicesInput = {
    invoiceId?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    from?: InputJsonValue | InputJsonValue | null
    number?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    issuer?: NullableStringFieldUpdateOperationsInput | string | null
    due?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiveto?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUpdateWithoutUserInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preferredToken?: InputJsonValue | InputJsonValue | null
    method?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Accounts?: AccountUpdateManyWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutUserInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preferredToken?: InputJsonValue | InputJsonValue | null
    method?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Accounts?: AccountUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateManyWithoutWalletsInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preferredToken?: InputJsonValue | InputJsonValue | null
    method?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventUpdateWithoutUserInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    params?: InputJsonValue | InputJsonValue | null
    query?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventUncheckedUpdateWithoutUserInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    params?: InputJsonValue | InputJsonValue | null
    query?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventUncheckedUpdateManyWithoutAuditEventsInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    params?: InputJsonValue | InputJsonValue | null
    query?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUpdateWithoutUserInput = {
    identities?: ProfileUpdateidentitiesInput | Enumerable<InputJsonValue>
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: BytesFieldUpdateOperationsInput | Buffer
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    blocked?: BoolFieldUpdateOperationsInput | boolean
    lastIP?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableStringFieldUpdateOperationsInput | string | null
    multifactor?: ProfileUpdatemultifactorInput | Enumerable<InputJsonValue>
    loginCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    identities?: ProfileUpdateidentitiesInput | Enumerable<InputJsonValue>
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: BytesFieldUpdateOperationsInput | Buffer
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    blocked?: BoolFieldUpdateOperationsInput | boolean
    lastIP?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableStringFieldUpdateOperationsInput | string | null
    multifactor?: ProfileUpdatemultifactorInput | Enumerable<InputJsonValue>
    loginCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyWithoutProfileInput = {
    identities?: ProfileUpdateidentitiesInput | Enumerable<InputJsonValue>
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: BytesFieldUpdateOperationsInput | Buffer
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    blocked?: BoolFieldUpdateOperationsInput | boolean
    lastIP?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableStringFieldUpdateOperationsInput | string | null
    multifactor?: ProfileUpdatemultifactorInput | Enumerable<InputJsonValue>
    loginCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByIp?: NullableStringFieldUpdateOperationsInput | string | null
    revoked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedByIp?: NullableStringFieldUpdateOperationsInput | string | null
    replacedByToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshUncheckedUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByIp?: NullableStringFieldUpdateOperationsInput | string | null
    revoked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedByIp?: NullableStringFieldUpdateOperationsInput | string | null
    replacedByToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshUncheckedUpdateManyWithoutRefreshInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByIp?: NullableStringFieldUpdateOperationsInput | string | null
    revoked?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedByIp?: NullableStringFieldUpdateOperationsInput | string | null
    replacedByToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OwnerUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    Organization?: OrganizationUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerUncheckedUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    Organization?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerUncheckedUpdateManyWithoutOwnersInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
  }

  export type ClientUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    Organization?: OrganizationUpdateOneWithoutClientsNestedInput
  }

  export type ClientUncheckedUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientUncheckedUpdateManyWithoutClientsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    Organization?: OrganizationUpdateOneWithoutEmployeesNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeUncheckedUpdateManyWithoutEmployeesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeadUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    Organization?: OrganizationUpdateOneWithoutLeadsNestedInput
  }

  export type LeadUncheckedUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeadUncheckedUpdateManyWithoutLeadsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContractorUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    Organization?: OrganizationUpdateOneWithoutContractorsNestedInput
  }

  export type ContractorUncheckedUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContractorUncheckedUpdateManyWithoutContractorsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientCreateManyOrganizationInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    title?: string | null
    company?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    userId?: string | null
  }

  export type EmployeeCreateManyOrganizationInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    userId?: string | null
  }

  export type LeadCreateManyOrganizationInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    userId?: string | null
  }

  export type ContractorCreateManyOrganizationInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    wallet?: string | null
    tag?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
    userId?: string | null
  }

  export type ClientUpdateWithoutOrganizationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    User?: UserUpdateOneWithoutClientsNestedInput
  }

  export type ClientUncheckedUpdateWithoutOrganizationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeUpdateWithoutOrganizationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    User?: UserUpdateOneWithoutEmployeesNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutOrganizationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeadUpdateWithoutOrganizationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    User?: UserUpdateOneWithoutLeadsNestedInput
  }

  export type LeadUncheckedUpdateWithoutOrganizationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContractorUpdateWithoutOrganizationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    User?: UserUpdateOneWithoutContractorsNestedInput
  }

  export type ContractorUncheckedUpdateWithoutOrganizationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganizationCreateManyOwnerInput = {
    id?: string
    email: string
    name: string
    firstName?: string | null
    lastName?: string | null
    type?: Type
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replacedBy?: string | null
    status?: Status
  }

  export type OrganizationUpdateWithoutOwnerInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    Clients?: ClientUpdateManyWithoutOrganizationNestedInput
    Employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    Leads?: LeadUpdateManyWithoutOrganizationNestedInput
    Contractors?: ContractorUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutOwnerInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    Clients?: ClientUncheckedUpdateManyWithoutOrganizationNestedInput
    Employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    Leads?: LeadUncheckedUpdateManyWithoutOrganizationNestedInput
    Contractors?: ContractorUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateManyWithoutOrganizationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTypeFieldUpdateOperationsInput | Type
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replacedBy?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
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