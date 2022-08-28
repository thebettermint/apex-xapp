import { Client } from 'xrpl';

const account_objects = async (api: Client | undefined, account: string) => {
  try {
    if (api == undefined) return undefined;

    let request = {
      command: 'account_objects',
      account: account,
    };

    let response = await api.request(request);

    console.log(response);

    return response;
  } catch (error: any) {
    console.log(error);
    return undefined;
  }
};

export default account_objects;
