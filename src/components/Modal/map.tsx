import NewInvoice from './NewInvoice';
import NewDeposit from './NewDeposit';
import NewPayLink from './NewPayLink';
import NewWidthdrawal from './NewWidthdrawal';
import NewPayment from './NewPayment';
import NewAccount from './NewAccount';
import NewEmployee from './NewEmployee';
import NewContractor from './NewContractor';
import NewClient from './NewClient';
import NewLead from './NewLead';
import NewPayroll from './NewPayroll';
import NewVendor from './NewVendor';
import NewWallet from './NewWallet';
import NewTrustline from './NewTrustline';

const map: any = {
  'new-invoice': NewInvoice,
  'new-payment': NewPayment,
  'new-deposit': NewDeposit,
  'new-widthdrawal': NewWidthdrawal,
  'new-pay-link': NewPayLink,
  'new-payroll': NewPayroll,
  'new-employee': NewEmployee,
  'new-contractor': NewContractor,
  'new-client': NewClient,
  'new-vendor': NewVendor,
  'new-lead': NewLead,
  'new-account': NewAccount,
  'new-wallet': NewWallet,
  'new-trustline': NewTrustline,
};

export default map;
