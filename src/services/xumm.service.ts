import PKCE from 'js-pkce';
import axios from 'axios';

const xummKey = process.env.NEXT_PUBLIC_XUMM_KEY || '';

export const pkce = async ({ key, state }: { key?: any; state?: any }) => {
  const storage = window.localStorage;
  const instance = new PKCE({
    client_id: key ? key : xummKey,
    redirect_uri: 'http://localhost:3000/auth',
    authorization_endpoint: 'https://oauth2.xumm.app/auth',
    token_endpoint: 'https://oauth2.xumm.app/token',
    requested_scopes: '*',
    storage: storage,
  });

  const url = instance.authorizeUrl({ state: state ? JSON.stringify(state) : null });

  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const width = 400;
  const height = 700;
  window.open(
    url,
    'popup',
    `location=no,width=${width},height=${height},top=0,left=${screenWidth - width},resizable=no`
  );
  return window;
};

export const pkceJWT = async (url: string) => {
  //const ebrowser:any = browser.storage.local
  const ebrowser: any = window.localStorage;
  const instance = new PKCE({
    client_id: xummKey,
    redirect_uri: 'http://localhost:3000/auth',
    authorization_endpoint: 'https://oauth2.xumm.app/auth',
    token_endpoint: 'https://oauth2.xumm.app/token',
    requested_scopes: '*',
    storage: ebrowser,
  });

  let resp = await instance.exchangeForAccessToken(url);
  const token = resp.access_token;
  return token;
};

export const authenticate = ({ state, api }: { state?: string; api?: string }) => {
  const nonce =
    Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15); //random string
  const qstring = new URLSearchParams({
    client_id: xummKey,
    redirect_uri: 'http://localhost:3000/auth',
    scope: 'somescope',
    response_type: 'token',
    response_mode: 'query',
    state: '',
    nonce: nonce,
  });

  window.open(`https://oauth2.xumm.app/auth?${qstring}`);
};

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
