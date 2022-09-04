import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/index.module.scss';
import target from '../styles/wallet.module.scss';
import Login from 'src/components/Forms/login';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../context/store';
import { useState, useEffect } from 'react';

import { InboxOut, Arrowright } from 'src/components/Icons';

import account_balance from '../lib/xrpl/account_bal';
import account_nft from '../lib/xrpl/account_nft';

import Button from 'src/components/Button';
import XummButton from 'src/components/Xumm/button';
import walletService from 'src/services/wallet.service';
import Spinner from 'src/components/Spinner';

const Container = () => {};

const Wallet: NextPage = () => {
  const storeContext = useStoreContext();

  const [wallet, setWallet] = useState<undefined | string>(undefined);
  const [balance, setBalance] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [signIn, setSignIn] = useState<any>(undefined);
  const [select, setSelect] = useState<string>('tokens');

  const apiEndPoint =
    process.env.NODE_ENV == 'production'
      ? 'https://apex-xapp-six.vercel.app'
      : 'http://localhost:3002';

  const handleSignIn = async () => {
    if (
      signIn.response.response.environment_nodetype !== 'CUSTOM' ||
      signIn.response.response.environment_nodeuri !== 'xls20-sandbox.rippletest.net:51233'
    )
      return;

    setWallet(signIn.response.response.account);
    storeContext.setWallet(signIn.response.response.account);
  };

  const getAccountTokens = async (wallet: string | undefined) => {
    if (!storeContext.client) return;
    if (!wallet) return setBalance('error');
    let response = await account_balance(storeContext.client, wallet);
    console.log(response);
    if (response instanceof Error) return setBalance('error');
    setBalance(response);
    setIsLoading(false);
    return;
  };

  const getAccountNFTokens = async (wallet: string | undefined) => {
    if (!storeContext.client) return;
    if (!wallet) return setBalance('error');
    let response = await account_nft(storeContext.client, wallet);
    console.log(response);
    if (response instanceof Error) return setBalance('error');
    setBalance(response.account_nfts);
    setIsLoading(false);
    return;
  };

  const handleFund = async () => {
    if (storeContext.wallet) {
      let params = {
        publicAddress: storeContext.wallet,
        network: 'nft',
      };

      let response = await walletService.fund(params);
      if (response instanceof Error) return;
      storeContext.setValidated(true);
    } else {
      return;
    }
  };

  const handleSignOut = () => {
    storeContext.signout();
  };

  const handleSelect = (type: string) => {
    setIsLoading(true);
    setSelect(type);
  };

  useEffect(() => {
    if (signIn == undefined) return;
    if (signIn.state == 'signed') handleSignIn();
  }, [signIn]);

  useEffect(() => {
    setWallet(storeContext.wallet);
    setIsLoading(true);
    if (select == 'tokens') getAccountTokens(storeContext.wallet);
    if (select == 'nftokens') getAccountNFTokens(storeContext.wallet);
  }, [storeContext.wallet, storeContext.client, select]);

  return (
    <>
      <Head>
        <title>apex-xapp</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.page}>
        <div className={`${styles.pageHeader}`}>
          <div>APEX DEVELOPER SUMMIT</div>
          <div>Wallet</div>
        </div>
        <div className={target.wrapper}>
          <div className={target.top}>
            {wallet ? (
              <>
                <div className={target.wallet}>{wallet}</div>
                <div className={target.logo} onClick={handleSignOut}>
                  <InboxOut size={18} fill={'whitesmoke'} />
                </div>
              </>
            ) : null}
          </div>
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
              <div className={target.msg}>account not actived</div>
              <div className={target.help}>how can I activate my account?</div>
              <div className={target.buttonContainer}>
                <Button
                  className={target.button}
                  type="primary"
                  theme="light"
                  height={40}
                  onClick={handleFund}>
                  <div className={target.buttonText}>FUND</div>
                  <div className={target.buttonLogo}>
                    <Arrowright size={16} />
                  </div>
                </Button>
              </div>
            </div>
          ) : isLoading ? (
            <div className={target.inner}>
              <Spinner />
              <div className={target.msg}>loading</div>
            </div>
          ) : balance ? (
            <div className={`${target.inner} ${target.alignTop}`}>
              <div className={target.selectorContainer}>
                <div
                  className={`${target.selector} ${select == 'tokens' ? target.active : null}`}
                  onClick={() => handleSelect('tokens')}>
                  tokens
                </div>
                <div className={target.divider}></div>
                <div
                  className={`${target.selector} ${select == 'tokens' ? null : target.active}`}
                  onClick={() => handleSelect('nftokens')}>
                  nftokens
                </div>
              </div>
              <div className={target.assetContainer}>
                {select == 'tokens'
                  ? balance.map((asset: any, index: number) => (
                      <div className={target.asset} key={index}>
                        <div className={target.assetWrapper}>
                          <div className={target.currency}>{asset.currency}</div>
                          <div className={target.value}>{asset.value}</div>
                        </div>
                        <div className={target.issuer}>{asset.issuer ? asset.issuer : ''}</div>
                      </div>
                    ))
                  : select == 'nftokens'
                  ? balance.map((asset: any, index: number) => (
                      <div className={target.asset} key={index}>
                        <div className={target.assetWrapper}>
                          <div className={target.id}>{`${asset.NFTokenID.substring(
                            0,
                            6
                          )}...${asset.NFTokenID.substring(
                            asset.NFTokenID.length - 6,
                            asset.NFTokenID.length
                          )}`}</div>
                        </div>
                        <div className={target.issuer}>{asset.Issuer ? asset.Issuer : ''}</div>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Wallet;
