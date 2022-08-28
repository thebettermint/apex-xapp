import { Client } from 'xrpl';

const account_info = async (api: Client, account: string) => {
  try {
    if (api == undefined) return undefined;

    let request = {
      command: 'account_info',
      account: account,
    };

    let response = await api.request(request);

    console.log(response);

    return response.result;
  } catch (error: any) {
    return Error(error);
  }
};

export default account_info;
