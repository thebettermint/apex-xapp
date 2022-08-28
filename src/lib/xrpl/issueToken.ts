import {
  Client,
  Wallet,
  AccountSet,
  TrustSet,
  Payment,
  AccountSetAsfFlags,
  AccountSetTfFlags,
} from 'xrpl';
import wallets from '../../../config/wallets';

/* const stringToUTF8Bytes = (string: string) => {
  return new TextEncoder().encode(string);
};
 */

const currencyUTF8ToHex = (code: string) => {
  if (/^[a-zA-Z0-9\?\!\@\#\$\%\^\&\*\<\>\(\)\{\}\[\]\|\]\{\}]{3}$/.test(code)) return code;

  if (/^[A-Z0-9]{40}$/.test(code)) return code;

  let hex = '';

  for (let i = 0; i < code.length; i++) {
    hex += code.charCodeAt(i).toString(16);
  }

  return hex.toUpperCase().padEnd(40, '0');
};

const main = async (url: string, coldkey: string, hotkey: string, code: string, limit: string) => {
  const api = new Client(url);

  await api.connect();
  console.log('Connected');

  const signer_cold = Wallet.fromSecret(coldkey);
  const signer_hot = Wallet.fromSecret(hotkey);

  console.log(signer_cold);
  console.log(signer_hot);

  // Configure issuer (cold address) settings ----------------------------------
  let cold_transaction: AccountSet = {
    TransactionType: 'AccountSet',
    Account: signer_cold.classicAddress,
    TransferRate: 0,
    TickSize: 5,
    SetFlag: AccountSetAsfFlags.asfDefaultRipple,
    // Using tf flags, we can enable more flags in one transaction
    Flags: AccountSetTfFlags.tfDisallowXRP | AccountSetTfFlags.tfRequireDestTag,
  };

  let cold_opts = {
    autfill: true,
    failhard: true,
    wallet: signer_cold,
  };

  const hot_settings_tx: AccountSet = {
    TransactionType: 'AccountSet',
    Account: signer_hot.classicAddress,
    // enable Require Auth so we can't use trust lines that users
    // make to the hot address, even by accident:
    SetFlag: AccountSetAsfFlags.asfRequireAuth,
    Flags: AccountSetTfFlags.tfDisallowXRP,
  };

  let hot_opts = {
    autfill: true,
    failhard: true,
    wallet: signer_hot,
  };

  let cold_tx = await api.submitAndWait(cold_transaction, cold_opts);
  console.log(cold_tx);

  let hot_tx = await api.submitAndWait(hot_settings_tx, hot_opts);
  console.log(hot_tx);

  // Create trust line from hot to cold address --------------------------------
  let currency_code = code;
  if (code.length > 3) currency_code = currencyUTF8ToHex(code);

  const trust_set_tx: TrustSet = {
    TransactionType: 'TrustSet',
    Account: signer_hot.classicAddress,
    LimitAmount: {
      currency: currency_code,
      issuer: signer_cold.classicAddress,
      value: limit, // Large limit, arbitrarily chosen
    },
  };

  let trust_set_tx_opts = {
    autfill: true,
    failhard: true,
    wallet: signer_hot,
  };

  let trustset = await api.submitAndWait(trust_set_tx, trust_set_tx_opts);
  console.log(trustset);

  const issue_quantity = limit;
  const send_token_tx: Payment = {
    TransactionType: 'Payment',
    Account: signer_cold.classicAddress,
    Amount: {
      currency: currency_code,
      value: issue_quantity,
      issuer: signer_cold.classicAddress,
    },
    Destination: signer_hot.classicAddress,
  };

  let send_tx_opts = {
    autfill: true,
    failhard: true,
    wallet: signer_cold,
  };

  let send = await api.submitAndWait(send_token_tx, send_tx_opts);
  console.log(send);

  // Check balances ------------------------------------------------------------
  console.log('Getting hot address balances...');
  const hot_balances = await api.request({
    command: 'account_lines',
    account: signer_hot.classicAddress,
    ledger_index: 'validated',
  });
  console.log(hot_balances.result);

  console.log('Getting cold address balances...');
  const cold_balances = await api.request({
    command: 'gateway_balances',
    account: signer_cold.classicAddress,
    ledger_index: 'validated',
    hotwallet: [signer_hot.classicAddress],
  });
  console.log(cold_balances.result);

  api.disconnect();
};

/* main(
  'wss://s.altnet.rippletest.net:51233',
  'ssinN7btvb36PegnPmFUSi4wGvDX8',
  'saU2r2ksHz3T9m4axaxPSuNy16M8R',
  'WRLD',
  '10000000000'
); */

const groupIssue = async (wallets: any) => {
  for (let i = 0; i < wallets.length; i++) {
    let hot = wallets[i].hotSecret;
    let cold = wallets[i].coldSecret;
    let limit = wallets[i].limit;
    let code = wallets[i].ticker;

    await main('wss://s.altnet.rippletest.net:51233', cold, hot, code, limit);
  }
};

groupIssue(wallets.wallets);

export { main, groupIssue };
