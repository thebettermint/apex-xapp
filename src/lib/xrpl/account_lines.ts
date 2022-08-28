import { Client } from 'xrpl';

const account_lines = async (api: Client, account: string) => {
  try {
    let request = {
      command: 'account_lines',
      account: account,
    };

    let response = await api.request(request);

    return response.result;
  } catch (error: any) {
    return Error(error);
  }
};

export default account_lines;
