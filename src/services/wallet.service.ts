import axios from 'axios';

const fund = async (params: { publicAddress: string; network: string }) => {
  try {
    let response = await axios.post(`/api/wallets/fund`, {
      publicAddress: params.publicAddress,
      network: params.network,
    });

    return response;
  } catch (error: any) {
    return Error(error);
  }
};

export default {
  fund,
};
