import axios from 'axios';

const getJSONFromIPFS = async (cid: string) => {
  try {
    let response = await axios.post(`/api/ipfs/json`, {
      cid: cid,
    });

    return response;
  } catch (error: any) {
    return Error(error);
  }
};

const getImageFromIPFS = async (cid: string) => {
  try {
    let response = await axios.post(`/api/ipfs/image`, {
      cid: cid,
    });

    return response;
  } catch (error: any) {
    return Error(error);
  }
};

export { getJSONFromIPFS, getImageFromIPFS };
