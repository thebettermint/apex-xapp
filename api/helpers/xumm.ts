import { XummSdk } from 'xumm-sdk';
import config from 'config';

const Sdk = new XummSdk(config.xumm.key, config.xumm.secret);

//Open up channel with the user. Fetch and trigger a scannable QR code for signing
const signIn = async () => {
  const request: any = {
    txjson: { TransactionType: 'SignIn' },
    options: { submit: true },
  };
  const payload: any = await Sdk.payload.create(request, true);

  return {
    url: payload.next.always,
    qrcode: payload.refs.qr_png,
    websocket: payload.refs.websocket_status,
    uuid: payload.uuid,
  };
};

//Server side listening to the siqn request. Population data once the user information on sign
async function subscribe(data: any) {
  const subscribe = await Sdk.payload.subscribe(data.uuid, (event: any) => {
    if (Object.keys(event.data).indexOf('signed') > -1) {
      return event.data;
    } else {
      console.log(event.data);
    }
  });

  const resolvedData: any = await subscribe.resolved;
  if (resolvedData.signed == false) {
    console.log('Signed request rejected');
  } else {
    console.log('Signed request signed');
    const result = await Sdk.payload.get(resolvedData.payload_uuidv4);
    const resolved = { status: 'This subscription is resolved' };
    return resolved;
  }
}

//Getting public address after the user signs in
const getPayloadArray = async (array: any) => {
  let query = [];
  for (let i = 0; i < array.length; i++) {
    let result = await Sdk.payload.get(array[i]);
    query.push(result);
  }
  return query;
};

const getAddress = async (uuid: string) => {
  const result: any = await Sdk.payload.get(uuid);
  return {
    key: result.response.account,
    node: result.response.dispatched_nodetype,
  };
};

const getPayload = async (uuid: string) => {
  const result = await Sdk.payload.get(uuid);
  return result;
};

const getUserToken = async (data: any) => {
  const result = await Sdk.payload.get(data.uuid);
  data.userToken = result;
  return data;
};

//Back-end transactions preparation and push notification
const tx = async (data: any) => {
  const request: any = {
    txjson: {
      TransactionType: 'Payment',
      Account: String(data.account),
      Destination: String(data.destination),
      Amount: String(data.amount * 1000000),
    },
    user_token: String(data.user),
  };
  const payload: any = await Sdk.payload.create(request, true);

  return {
    url: payload.next.no_push_msg_received,
    qrcode: payload.refs.qr_png,
    websocket: payload.refs.websocket_status,
    uuid: payload.uuid,
    amount: data.amount,
  };
};

export default {
  signIn,
  subscribe,
  getAddress,
  tx,
  getUserToken,
  getPayload,
  getPayloadArray,
};
