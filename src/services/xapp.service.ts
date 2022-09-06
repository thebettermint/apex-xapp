import axios from 'axios';
import { ICommand } from 'types/xApp';

const xummKey = process.env.NEXT_PUBLIC_XUMM_KEY || '';
const apiEndPoint =
  process.env.NODE_ENV == 'production'
    ? 'https://apex-xapp-six.vercel.app/api'
    : 'http://localhost:3000/api';

const accessToken = ({ jwt, tokenData }: { jwt?: string; tokenData?: any }) => {
  if (jwt) return jwt;
  else {
    jwt = tokenData.token;
    if (jwt) return jwt;
    return '';
  }
};

const headers = ({ tokenData }: { tokenData?: any }) => {
  if (!tokenData) {
    return { headers: { Authorization: '', 'x-api-key': xummKey } };
  } else
    return {
      headers: {
        Authorization: accessToken({ jwt: tokenData.token, tokenData: tokenData }),
        'x-api-key': xummKey,
      },
    };
};

const getTokenData = async ({ ott, tokenData }: { ott: string; tokenData?: any }) => {
  if (!tokenData) {
    try {
      const res = await axios.post(`${apiEndPoint}/xapp/ott`, { ott: ott }, headers({}));
      return res.data;
    } catch (e: any) {
      console.log(e);
      throw 'Error getting Token Data';
    }
  } else {
    return tokenData;
  }
};

const sendCommandtoXumm = (command: ICommand | any, window: Window) => {
  try {
    if (typeof window['ReactNativeWebView'] === 'undefined') {
      throw new Error('This is not a react native webview');
    }
    window['ReactNativeWebView'].postMessage(JSON.stringify(command));
  } catch (e) {
    console.log(e);
  }
};

const openSignRequest = (uuid: string) => {
  try {
    window.sdk.openSignRequest({ uuid: uuid });
  } catch (e) {
    throw e;
  }
};

const closeXapp = (window: any) => {
  try {
    sendCommandtoXumm(
      {
        command: 'close',
        refreshEvents: false,
      },
      window
    );
  } catch (e) {
    throw e;
  }
};

const openExternalBrowser = (url: string, window: any) => {
  try {
    window.sdk.openBrowser({ url: url });
  } catch (e) {
    throw e;
  }
};

const openTxViewer = (tx: any, account: string) => {
  try {
    sendCommandtoXumm(
      {
        command: 'txDetails',
        tx,
        account,
      },
      window
    );
  } catch (e) {
    throw e;
  }
};

const openScanner = () => {
  try {
    window.sdk.scanQr();
  } catch (e) {
    throw e;
  }
};

const getCuratedAssets = async ({
  curatedAssets,
  tokenData,
}: {
  curatedAssets: any;
  tokenData?: any;
}) => {
  if (
    curatedAssets &&
    Object.keys(curatedAssets).length > 0 &&
    curatedAssets.constructor === Object
  )
    return curatedAssets;
  try {
    const res = await axios.get(
      `${apiEndPoint}/xumm/curated-assets`,
      headers({ tokenData: tokenData })
    );
    curatedAssets = res.data;
    return curatedAssets;
  } catch (e) {
    throw e;
  }
};

const scanStatus = () => {
  return new Promise((resolve: any, reject: any) => {
    const message = (event: any) => {
      window.removeEventListener('message', message);
      document.removeEventListener('message', message);

      const data = JSON.parse(event.data);
      if (data.reason === 'USER_CLOSE') return resolve(data);
      if (data.reason === 'INVALID_QR') return resolve(data);
      if (data.reason === 'SCANNED') return resolve(data);
      else return reject(Error('scan promise rejected'));
    };
    //iOS
    window.addEventListener('message', message);
    //Android
    document.addEventListener('message', message);
  });
};

const status = () => {
  return new Promise((resolve, reject) => {
    const message = (event: any) => {
      window.removeEventListener('message', message);
      document.removeEventListener('message', message);

      const data = JSON.parse(event.data);
      if (data.method !== 'payloadResolved') return reject('');
      if (data.reason === 'payloadResolved') return resolve('');
      else return reject('');
    };
    //iOS
    window.addEventListener('message', message);
    //Android
    document.addEventListener('message', message);
  });
};

const payload = async ({ payload, tokenData }: { payload: any; tokenData?: any }) => {
  try {
    const res = await axios.post(
      `${apiEndPoint}/xumm/payload`,
      payload,
      headers({ tokenData: tokenData })
    );
    openSignRequest(res.data.uuid);
    await status();
    const result = await axios.get(`${apiEndPoint}/xumm/payload/${res.data.uuid}`, headers({}));
    return result;
  } catch (e) {
    if (e === '') throw { msg: 'closed', error: false };
    throw e;
  }
};

const event = async ({ payload, tokenData }: { payload: any; tokenData?: any }) => {
  try {
    const res = await axios.post(
      `${apiEndPoint}/xumm/payload`,
      payload,
      headers({ tokenData: tokenData })
    );
    openSignRequest(res.data.uuid);
    await status();
    const result = await axios.get(
      `${apiEndPoint}/xumm/payload/${res.data.uuid}`,
      headers({ tokenData: tokenData })
    );
    return result;
  } catch (e) {
    if (e === '') throw { msg: 'closed', error: false };
    throw e;
  }
};

const push = async ({ payload, tokenData }: { payload: any; tokenData?: any }) => {
  try {
    const res = await axios.post(
      `${apiEndPoint}/payload`,
      payload,
      headers({ tokenData: tokenData })
    );
    openSignRequest(res.data.uuid);
    await status();
    const result = await axios.get(
      `${apiEndPoint}/payload/${res.data.uuid}`,
      headers({ tokenData: tokenData })
    );
    return result;
  } catch (e) {
    if (e === '') throw { msg: 'closed', error: false };
    throw e;
  }
};

const versionCheck = (v1: string, v2: string) => {
  var v1parts = v1.split('.');
  var v2parts = v2.split('.');

  // First, validate both numbers are true version numbers
  function validateParts(parts: string[]) {
    for (var i = 0; i < parts.length; ++i) {
      if (!/^\d+$/.test(parts[i])) {
        return false;
      }
    }
    return true;
  }
  if (!validateParts(v1parts) || !validateParts(v2parts)) {
    return NaN;
  }

  for (var i = 0; i < v1parts.length; ++i) {
    if (v2parts.length === i) {
      return 1;
    }

    if (v1parts[i] === v2parts[i]) {
      continue;
    }
    if (v1parts[i] > v2parts[i]) {
      return 1;
    }
    return -1;
  }

  if (v1parts.length != v2parts.length) {
    return -1;
  }

  return 0;
};

export default {
  openExternalBrowser,
  versionCheck,
  getTokenData,
  closeXapp,
  push,
  event,
  payload,
  getCuratedAssets,
  openSignRequest,
  scanStatus,
  openScanner,
};
