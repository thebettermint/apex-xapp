import { Client } from 'xrpl';

const account_nft = async (api: Client, account: string) => {
  try {
    let request = {
      command: 'account_nfts',
      account: account,
    };

    let response: any = await api.request(request);

    return response.result;
  } catch (error: any) {
    return Error(error);
  }
};

export default account_nft;
