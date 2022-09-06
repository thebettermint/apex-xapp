import axios from 'axios';

const fund = async (params: { publicAddress: string; network: string }) => {
  try {
    let response = await axios.post(`/api/wallets/fund`, {
      publicAddress: params.publicAddress,
      network: params.network,
    });

    return response;
  } catch (error: any) {
    return Error(error.response.data);
  }
};

const mint = async (params: { publicAddress: string }) => {
  try {
    let response = await axios.post(`/api/wallets/mint`, {
      address: params.publicAddress,
    });

    return response;
  } catch (error: any) {
    return Error(error.response.data);
  }
};

const getByAddress = async (params: { publicAddress: string }) => {
  try {
    let response = await axios.post(`/api/wallets/findByAddress`, {
      address: params.publicAddress,
    });

    return response;
  } catch (error: any) {
    return Error(error.response.data);
  }
};

const claimed = async (params: { uuid: string }) => {
  try {
    let response = await axios.post(`/api/wallets/claimed`, {
      uuid: params.uuid,
    });

    return response;
  } catch (error: any) {
    return Error(error.response.data);
  }
};

const consumed = async (params: { uuid: string }) => {
  try {
    let response = await axios.post(`/api/wallets/consumed`, {
      uuid: params.uuid,
    });

    return response;
  } catch (error: any) {
    return Error(error.response.data);
  }
};

export default {
  fund,
  mint,
  getByAddress,
  claimed,
  consumed,
};
