
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.2.1
 * Query Engine version: 2920a97877e12e055c1333079b8d19cee7f33826
 */
Prisma.prismaVersion = {
  client: "4.2.1",
  engine: "2920a97877e12e055c1333079b8d19cee7f33826"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AccountScalarFieldEnum = makeEnum({
  id: 'id',
  address: 'address',
  name: 'name',
  description: 'description',
  preferredToken: 'preferredToken',
  tag: 'tag',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  walletId: 'walletId'
});

exports.Prisma.AuditEventScalarFieldEnum = makeEnum({
  id: 'id',
  url: 'url',
  method: 'method',
  params: 'params',
  query: 'query',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
});

exports.Prisma.ClientScalarFieldEnum = makeEnum({
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
});

exports.Prisma.ContractorScalarFieldEnum = makeEnum({
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
});

exports.Prisma.EmployeeScalarFieldEnum = makeEnum({
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
});

exports.Prisma.InvoiceItemScalarFieldEnum = makeEnum({
  id: 'id',
  number: 'number',
  name: 'name',
  description: 'description',
  token: 'token',
  amount: 'amount',
  invoiceId: 'invoiceId'
});

exports.Prisma.InvoiceScalarFieldEnum = makeEnum({
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
});

exports.Prisma.LeadScalarFieldEnum = makeEnum({
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
});

exports.Prisma.OrganizationScalarFieldEnum = makeEnum({
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
});

exports.Prisma.OwnerScalarFieldEnum = makeEnum({
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
});

exports.Prisma.ProfileScalarFieldEnum = makeEnum({
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
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.RefreshScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  token: 'token',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt',
  createdByIp: 'createdByIp',
  revoked: 'revoked',
  revokedByIp: 'revokedByIp',
  replacedByToken: 'replacedByToken'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
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
});

exports.Prisma.WalletScalarFieldEnum = makeEnum({
  id: 'id',
  key: 'key',
  name: 'name',
  description: 'description',
  preferredToken: 'preferredToken',
  method: 'method',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
});
exports.Role = makeEnum({
  USER: 'USER',
  ADMIN: 'ADMIN',
  PARTNER: 'PARTNER',
  DEV: 'DEV'
});

exports.Status = makeEnum({
  ACTIVE: 'ACTIVE',
  PENDING: 'PENDING',
  DEPRECIATED: 'DEPRECIATED',
  REMOVED: 'REMOVED',
  WARNING: 'WARNING',
  REVOKED: 'REVOKED',
  BANNED: 'BANNED',
  SUSPENDED: 'SUSPENDED'
});

exports.Type = makeEnum({
  CLIENT: 'CLIENT',
  VENDOR: 'VENDOR',
  LEAD: 'LEAD',
  EMPLOYEE: 'EMPLOYEE',
  CONTRACTOR: 'CONTRACTOR',
  OWNER: 'OWNER',
  ORGANIZATION: 'ORGANIZATION'
});

exports.Prisma.ModelName = makeEnum({
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
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
