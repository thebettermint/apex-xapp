import { Client, Wallet, xrpToDrops, unixTimeToRippleTime } from 'xrpl';
import { Transaction } from 'xrpl';
import { currencyUTF8ToHex } from './hexConversion';

const createCheck = async ({
  api,
  receiver,
  key,
  amount,
  fee,
  expire,
  id,
  code,
  issuer,
}: {
  api: Client;
  receiver: string;
  key: string;
  id: string;
  amount: string;
  fee: number;
  expire: string;
  code: string;
  issuer: string;
  deliverMin: string;
}) => {
  try {
    let signer = Wallet.fromSecret(key);

    let amountObj: any;

    if (issuer) amountObj = { value: amount, currency: currencyUTF8ToHex(code), issuer: issuer };
    if (amountObj == undefined) amountObj = xrpToDrops(amount.toString());

    let transaction: Transaction = {
      Account: signer.classicAddress,
      Destination: receiver,
      SendMax: amountObj,
      TransactionType: 'CheckCreate',
    };

    if (fee) transaction.Fee = xrpToDrops(fee.toString());

    if (expire) {
      let parse = Date.parse(expire);
      let handleExpiredTime = unixTimeToRippleTime(parse);
      transaction.Expiration = handleExpiredTime;
    }

    if (id) transaction.InvoiceID = id;

    let opts = {
      autfill: false,
      failhard: true,
      wallet: signer,
    };

    let tx = await api.submitAndWait(transaction, opts);
    console.log(tx);

    return tx.result;
  } catch (error) {
    return error;
  }
};

export default createCheck;
