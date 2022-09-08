import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/index.module.scss';
import target from '../styles/visual.module.scss';
import Login from 'src/components/Forms/login';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../context/store';
import { useState, useEffect } from 'react';

import { InboxOut, Arrowright, Arrowclockwiseback } from 'src/components/Icons';

import account_balance from '../lib/xrpl/account_bal';
import account_nft from '../lib/xrpl/account_nft';

import Button from 'src/components/Button';
import XummButton from 'src/components/Xumm/button';
import walletService from 'src/services/wallet.service';
import Spinner from 'src/components/Spinner';
import { getImageFromIPFS, getJSONFromIPFS } from 'src/services/ipfs.service';

import { convertStringToHex, convertHexToString } from 'xrpl';
import Router from 'next/router';

interface NFT {
  Flags: number;
  Issuer: String;
  NFTokenID: string;
  NFTokenTaxon: number;
  TransferFee: number;
  URI: string;
  nft_serial: number;
}

const Visualizer: NextPage = () => {
  const storeContext = useStoreContext();

  const [wallet, setWallet] = useState<undefined | string>(undefined);
  const [image, setImage] = useState<undefined | string>(undefined);
  const [balance, setBalance] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(undefined);

  const [signIn, setSignIn] = useState<any>(undefined);

  const apiEndPoint =
    process.env.NODE_ENV == 'production'
      ? 'https://apex-xapp-six.vercel.app'
      : 'http://localhost:3000';

  const handleSignIn = async () => {
    if (
      signIn.response.response.environment_nodetype !== 'CUSTOM' ||
      signIn.response.response.environment_nodeuri !== 'xls20-sandbox.rippletest.net:51233'
    )
      return;

    setWallet(signIn.response.response.account);
    storeContext.setWallet(signIn.response.response.account);
  };

  const getTarget = async (nfts: NFT[]) => {
    let token: any;
    for (const nft of nfts) {
      if (nft.NFTokenID == storeContext.data[0].tokenId) return (token = nft);
    }
    if (!token) return Error();
    return token;
  };

  const getAccountNFT = async (wallet: any) => {
    setIsLoading(true);
    setBalance(undefined);

    try {
      if (!storeContext.client || !storeContext.data[0]) return setBalance('error');
      if (!storeContext.wallet) return setBalance('error');

      let response: any = await account_nft(storeContext.client, storeContext.wallet);
      if (response instanceof Error) return setBalance('error');

      let nft = await getTarget(response.account_nfts);
      if (nft instanceof Error) return setBalance('error');

      let uri = convertHexToString(nft.URI);
      let cid = uri.substr(7);

      let r = await getJSONFromIPFS(cid);
      if (r instanceof Error) return setBalance('error');

      let imageCID = r.data.response.image.substr(7);

      let i = await getImageFromIPFS(imageCID);
      if (i instanceof Error) return setBalance('error');

      let url = URL.createObjectURL(new Blob([Buffer.from(i.data.response.data)]));
      setImage(url);

      return;
    } finally {
      setIsLoading(false);
    }
  };

  const checkNFTStatus = async () => {
    if (!storeContext.wallet) return;
    setIsLoading(true);

    let response = await walletService.getByAddress({ publicAddress: storeContext.wallet });
    try {
      if (response instanceof Error) throw Error();
      console.log(response);

      if (response.data === 'address not found in database') {
        setData(undefined);
        return setBalance('error');
      }
      return setData(response.data);
    } catch (error) {
      setBalance('error');
      return setData(undefined);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    Router.push('/');
  };

  useEffect(() => {
    if (signIn == undefined) return;
    if (signIn.state == 'signed') handleSignIn();
  }, [signIn]);

  /*   useEffect(() => {
    if (!storeContext.wallet || !data) return;
    getAccountNFT(storeContext.wallet);
  }, [data]); */

  useEffect(() => {
    setWallet(storeContext.wallet);
    setIsLoading(true);
    setData(storeContext.data[0]);
    getAccountNFT(storeContext.wallet);
  }, [storeContext.wallet, storeContext.client, storeContext.data[0]]);

  return (
    <>
      <Head>
        <title>apex-xapp</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={target.page}>
        <div className={`${target.pageHeader}`}>
          <div>APEX DEVELOPER SUMMIT</div>
          <div>Visualize</div>
        </div>
        <div className={target.wrapper}>
          {!wallet ? (
            <div className={target.inner}>
              <div className={target.msg}>account not found</div>
              <div className={target.buttonContainer}>
                <XummButton
                  className={target.button}
                  request={{ TransactionType: 'SignIn' }}
                  xumm_api_key={process.env.NEXT_PUBLIC_XUMM_KEY || ''}
                  baseUrl={apiEndPoint}
                  route={'api'}
                  setState={setSignIn}>
                  <div className={target.buttonText}>SIGN IN</div>
                  <div className={target.buttonLogo}>
                    <Arrowright size={16} />
                  </div>
                </XummButton>
              </div>
            </div>
          ) : balance == 'error' ? (
            <div className={target.inner}>
              <div className={target.msg}>nft not found</div>
              <div className={target.buttonContainer}>
                <Button
                  className={target.button}
                  type="primary"
                  theme="light"
                  height={40}
                  onClick={checkNFTStatus}>
                  <div className={target.buttonText}>TRY AGAIN</div>
                </Button>
                <Button
                  className={target.button}
                  type="primary"
                  theme="light"
                  height={40}
                  onClick={handleBack}>
                  <div className={target.buttonText}>BACK TO HOME</div>
                </Button>
              </div>
            </div>
          ) : isLoading ? (
            <div className={target.inner}>
              <Spinner />
              <div className={target.msg}>loading</div>
            </div>
          ) : image ? (
            <div className={target.inner}>
              <div className={target.hero}></div>
              <div className={target.assetContainer}>
                <div className={target.id}>{data.tokenId}</div>
                <div className={target.image}>
                  <img width={'100%'} height={'100%'} src={image} />
                </div>
                <div className={target.status}>{`STATUS: ${data.status.toUpperCase()}`}</div>
                <div className={target.logo} onClick={checkNFTStatus}>
                  <Arrowclockwiseback size={18} stroke={'white'} />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Visualizer;
