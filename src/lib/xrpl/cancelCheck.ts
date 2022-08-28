import { Client, Wallet, xrpToDrops } from 'xrpl';
import { Transaction } from 'xrpl';

const cancelCheck = async ({
  api,
  key,
  fee,
  id,
}: {
  api: Client;
  key: string;
  fee: number;
  id: string;
}) => {
  try {
    let signer = Wallet.fromSecret(key);

    let transaction: Transaction = {
      Account: signer.classicAddress,
      TransactionType: 'CheckCancel',
      CheckID: id,
    };

    if (fee) transaction.Fee = xrpToDrops(fee.toString());

    let opts = {
      autfill: false,
      failhard: true,
      wallet: signer,
    };

    let tx = await api.submitAndWait(transaction, opts);

    return tx.result;
  } catch (error) {
    return error;
  }
};

export default cancelCheck;
