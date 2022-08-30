import PKCE from 'js-pkce';
import axios from 'axios';
import { ICommand } from 'types/xApp';

const xummKey = process.env.NEXT_PUBLIC_XUMM_KEY || '';
const apiEndPoint =
  process.env.NODE_ENV == 'production'
    ? 'https://apex-xapp-six.vercel.app/api'
    : 'http://localhost:3000/api';

let tokenData;
let jwt;
let curatedAssets;

const accessToken = () => {
  if (jwt) return jwt;
  else {
    jwt = tokenData.token;
    return jwt;
  }
};

const headers = (getJWT) => {
  if (getJWT) return { headers: { 'x-api-key': xummKey } };
  else return { headers: { Authorization: accessToken(), 'x-api-key': xummKey } };
};

const getTokenData = async (ott) => {
  if (!tokenData) {
    try {
      const res = await axios.get(`${apiEndPoint}/xapp/ott/${ott}`, headers(true));
      tokenData = res.data;
      jwt = res.data.token;
      return tokenData;
    } catch (e) {
      throw 'Error getting Token Data';
    }
  } else {
    return tokenData;
  }
};

const sendCommandtoXumm = (command: ICommand) => {
  if (typeof window.ReactNativeWebView === 'undefined')
    throw new Error('This is not a react native webview');
  window.ReactNativeWebView.postMessage(JSON.stringify(command));
};

const openSignRequest = (uuid: string) => {
  try {
    sendCommandtoXumm({
      command: 'openSignRequest',
      uuid: uuid,
    });
  } catch (e) {
    throw e;
  }
};

const closeXapp = () => {
  try {
    sendCommandtoXumm({
      command: 'close',
      refreshEvents: false,
    });
  } catch (e) {
    throw e;
  }
};

const openExternalBrowser = (url) => {
  try {
    sendCommandtoXumm({
      command: 'openBrowser',
      url: url,
    });
  } catch (e) {
    throw e;
  }
};

const openTxViewer = (tx, account) => {
  try {
    sendCommandtoXumm({
      command: 'txDetails',
      tx,
      account,
    });
  } catch (e) {
    throw e;
  }
};

const getCuratedAssets = async () => {
  if (
    curatedAssets &&
    Object.keys(curatedAssets).length > 0 &&
    curatedAssets.constructor === Object
  )
    return curatedAssets;
  try {
    const res = await axios.get(`${apiEndPoint}/curated-assets`, headers());
    curatedAssets = res.data;
    return curatedAssets;
  } catch (e) {
    throw e;
  }
};

const status = () => {
  return new Promise((resolve, reject) => {
    function message(event) {
      window.removeEventListener('message', message);
      document.removeEventListener('message', message);

      const data = JSON.parse(event.data);
      if (data.method !== 'payloadResolved') return reject('');
      if (data.reason === 'SIGNED') return resolve();
      else return reject('');
    }
    //iOS
    window.addEventListener('message', message);
    //Android
    document.addEventListener('message', message);
  });
};

const payload = async (payload) => {
  try {
    const res = await axios.post(`${apiEndPoint}/payload`, payload, headers());
    openSignRequest(res.data.uuid);
    await status();
    const result = await axios.get(`${apiEndPoint}/payload/${res.data.uuid}`, headers());
    return result;
  } catch (e) {
    if (e === '') throw { msg: 'closed', error: false };
    throw e;
  }
};

const event = async (payload, usertoken) => {
  try {
    const res = await axios.post(`${apiEndPoint}/payload`, payload, headers());
    openSignRequest(res.data.uuid);
    await status();
    const result = await axios.get(`${apiEndPoint}/payload/${res.data.uuid}`, headers());
    return result;
  } catch (e) {
    if (e === '') throw { msg: 'closed', error: false };
    throw e;
  }
};

const push = async (payload) => {
  try {
    const res = await axios.post(`${apiEndPoint}/payload`, payload, headers());
    openSignRequest(res.data.uuid);
    await status();
    const result = await axios.get(`${apiEndPoint}/payload/${res.data.uuid}`, headers());
    return result;
  } catch (e) {
    if (e === '') throw { msg: 'closed', error: false };
    throw e;
  }
};

const versionCheck = (v1, v2) => {
  var v1parts = v1.split('.');
  var v2parts = v2.split('.');

  // First, validate both numbers are true version numbers
  function validateParts(parts) {
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

export default {};
