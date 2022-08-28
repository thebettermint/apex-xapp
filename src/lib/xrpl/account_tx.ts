import { Client, rippleTimeToUnixTime } from 'xrpl';

const account_tx = async (api: Client | undefined, account: string) => {
  try {
    if (api == undefined) return undefined;

    let request = {
      command: 'account_tx',
      account: account,
    };

    let response: any = await api.request(request);

    for (let i = 0; i < response.result.transactions.length; i++) {
      if (response.result.transactions[i].tx.date)
        response.result.transactions[i].tx.date = rippleTimeToUnixTime(
          response.result.transactions[i].tx.date
        );
    }

    return response.result;
  } catch (error: any) {
    return Error(error);
  }
};

export default account_tx;
