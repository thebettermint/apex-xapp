import axios from 'axios';

const init = async ({ baseUrl, route, key }: { baseUrl: string; route: string; key: string }) => {
  try {
    let url = new URL(`${route}/xumm/init`, baseUrl);
    const auth = await axios.get(url.href, { headers: { 'x-api-key': key } });
    let jwt = auth.data;
    return jwt;
  } catch (e) {
    if (e === '') throw { msg: 'closed', error: false };
    throw e;
  }
};

const headers = ({ jwt, key }: { jwt: boolean | string; key: string }) => {
  return { headers: { Authorization: jwt, 'x-api-key': key } };
};

const payload = async ({
  payload,
  jwt,
  key,
  baseUrl,
  route,
}: {
  payload?: any;
  jwt?: string | undefined;
  key: string;
  baseUrl: string;
  route: string;
}) => {
  try {
    let url = new URL(`${route}/xumm/payload`, baseUrl);
    if (!payload || !jwt) return;
    const res = await axios.post(url.href, payload, headers({ jwt: jwt, key: key }));
    return res;
  } catch (e) {
    if (e === '') throw { msg: 'closed', error: false };
    throw e;
  }
};

const getMetadata = async ({
  uuid,
  key,
  baseUrl,
  route,
}: {
  uuid?: string;
  key: string;
  baseUrl: string;
  route: string;
}) => {
  try {
    let url = new URL(`${route}/xumm/meta/${uuid}`, baseUrl);
    if (!uuid) return;
    const res = await axios.get(url.href, { headers: { 'x-api-key': key } });
    return res;
  } catch (e) {
    if (e === '') throw { msg: 'closed', error: false };
    throw e;
  }
};

const openWebSocket = (url: string) => {
  const ws = new WebSocket(url);
  return ws;
};

const scannedWebSocket = async (url: string) => {
  let ws = openWebSocket(url);
  return new Promise((resolve, reject) => {
    ws.onmessage = function (event) {
      const resp = JSON.parse(event.data);
      if (resp.signed == false) {
        ws.close();
        resolve(new Error('Sign rejected, try again :P'));
      } else if (Object.keys(resp).indexOf('opened') > -1) {
        ws.close();
        resolve({ message: 'QR Code scanned, waiting for your approval :P' });
      }
    };
  });
};

const signedWebSocket = async (url: string) => {
  let ws = openWebSocket(url);
  return new Promise((resolve, reject) => {
    ws.onmessage = function (event) {
      const resp = JSON.parse(event.data);
      if (resp.signed == false) {
        ws.close();
        resolve(new Error('Sign rejected, try again :P'));
      } else if (resp.signed == true) {
        const data = {
          type: 'signed',
          response: resp,
          uuidPayload: resp.payload_uuidv4,
          uuidCall: resp.reference_call_uuidv4,
        };
        ws.close();
        resolve({ message: 'Sign fulfilled :P', data: data });
      }
    };
  });
};

export default {
  payload,
  getMetadata,
  init,
  openWebSocket,
  scannedWebSocket,
  signedWebSocket,
};
