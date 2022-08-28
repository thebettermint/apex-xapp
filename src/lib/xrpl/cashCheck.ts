import { Client, Wallet, xrpToDrops } from 'xrpl';
import { Transaction } from 'xrpl';
import { currencyUTF8ToHex } from './hexConversion';
import BigNumber from 'bignumber.js';

const cashCheck = async ({
  api,
  key,
  amount,
  id,
  fee,
  code,
  issuer,
  deliverMin,
}: {
  api: Client;
  key: string;
  id: string;
  amount: string;
  fee: number;
  code: string;
  issuer: string;
  deliverMin: string;
}) => {
  try {
    let signer = Wallet.fromSecret(key);

    let amountObj: any;

    if (issuer) {
      amountObj = {
        currency: currencyUTF8ToHex(code),
        issuer: issuer,
      };
      amountObj.value = deliverMin ? deliverMin : amount;
    }

    if (amountObj == undefined)
      amountObj = deliverMin
        ? xrpToDrops(new BigNumber(deliverMin))
        : xrpToDrops(new BigNumber(amount));

    let transaction: Transaction = {
      Account: signer.classicAddress,
      TransactionType: 'CheckCash',
      Amount: amountObj,
      CheckID: id,
    };

    if (deliverMin)
      transaction = {
        Account: signer.classicAddress,
        TransactionType: 'CheckCash',
        DeliverMin: amountObj,
        CheckID: id,
      };

    if (fee) transaction.Fee = xrpToDrops(fee.toString());

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

export default cashCheck;
