import React, {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';

import { wait } from 'src/lib/helpers/wait';

import useLocalStorage from '../hooks/useLocalStorage';
import Router from 'next/router';

import { IWallet } from 'types/general';

import xAppService from 'src/services/xapp.service';
import walletService from 'src/services/wallet.service';

import { Client } from 'xrpl';
import { DEFAULT_NFTDEV } from './../lib/constants/networks';

import { IUser } from 'types/next';
import account_info from '@/lib/xrpl/account_info';

interface IContextProps {
  data: [any, Dispatch<SetStateAction<any>>];

  jwt: string | undefined;
  setJwt: Dispatch<SetStateAction<string | undefined>>;

  wallet: string | undefined;
  setWallet: Dispatch<SetStateAction<string | undefined>>;

  tokenData: any;

  init: (oneTimeToken: string) => void;

  client: Client | undefined;
  connection: boolean;

  validated: boolean;
  setValidated: Dispatch<SetStateAction<boolean>>;

  nftStatus: string | undefined;
  setNftStatus: Dispatch<SetStateAction<string | undefined>>;

  nftToken: string | undefined;
  setNftoken: Dispatch<SetStateAction<undefined | string>>;

  signout: () => void;
}

const StoreContext = createContext({} as IContextProps);

export const useStoreContext = () => useContext(StoreContext);

const StoreContextProvider = (props: any) => {
  const [jwt, setJwt] = useState<string | undefined>(undefined);
  const [wallet, setWallet] = useLocalStorage('key', undefined);

  const [client, setClient] = useState<Client | undefined>(undefined);
  const [connection, setConnection] = useState<boolean>(false);
  const [tokenData, setTokenData] = useState<any>(undefined);
  const [fetched, setFetched] = useState<any>(false);
  const [validated, setValidated] = useState<boolean>(false);
  const [nftStatus, setNftStatus] = useState<string | undefined>(undefined);

  const [nftoken, setNftoken] = useState<undefined | string>(undefined);

  const [data, setData] = useState<any>(undefined);

  const updateClient = async (url: string) => {
    try {
      let api = new Client(url);
      await api.connect();
      setClient(api);
      setConnection(true);
    } catch (e) {
      setConnection(false);
    }
  };

  const init = async (oneTimeToken: string) => {
    if (tokenData) return;
    setWallet(undefined);
    return new Promise(async (resolve) => {
      let count = 0;
      while (true) {
        try {
          count = ++count;
          if (count > 6) return resolve('');
          let data = await xAppService.getTokenData({ ott: oneTimeToken });
          console.log(data);
          if (!(data instanceof Error)) {
            setTokenData(data);
            setWallet(data.account);
            return resolve('');
          }
          await wait(1500);
        } catch (error) {
          await wait(1500);
        }
      }
    });
  };

  const checkValidity = async () => {
    if (!client) return;
    let response = await account_info(client, wallet);
    if (!(response instanceof Error)) return setValidated(true);
    return setValidated(false);
  };

  const checkNFTStatus = async () => {
    console.log(wallet);
    let response = await walletService.getByAddress({ publicAddress: wallet });
    if (response instanceof Error) return setData(undefined);

    if (response.data === 'address not found in database') return setData(undefined);
    return setData(response.data);
  };

  const signout = async () => {
    setWallet(undefined);
  };

  useEffect(() => {
    if (!wallet) {
      setValidated(false);
      return setData(undefined);
    }

    checkValidity();
    checkNFTStatus();
  }, [wallet, client]);

  useEffect(() => {
    setConnection(false);
    updateClient(DEFAULT_NFTDEV);
  }, []);

  return (
    <StoreContext.Provider
      value={{
        data: [data, setData],

        client: client,
        connection: connection,

        jwt: jwt,
        setJwt: setJwt,

        tokenData: tokenData,
        init: init,

        wallet: wallet,
        setWallet: setWallet,

        validated: validated,
        setValidated: setValidated,

        nftStatus: nftStatus,
        setNftStatus: setNftStatus,

        nftToken: nftoken,
        setNftoken: setNftoken,

        signout: signout,
      }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
