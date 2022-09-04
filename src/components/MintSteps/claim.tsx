import React, { useState, useRef, useEffect, Ref } from 'react';
import style from './index.module.scss';

import bg from './bg.module.scss';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../../context/store';
import walletService from 'src/services/wallet.service';

import Button from 'src/components/Button';

import { ArrowRight, ArrowLeft, Arrowright } from 'src/components/Icons';

import Xumm from 'src/components/Xumm';
import XApp from 'src/components/XApp';

import useMobileDetect from 'src/hooks/useMobileDetect';

interface Props {
  next: any;
}

const Claim = React.forwardRef(({ next }: Props, ref: Ref<any> | undefined) => {
  const storeContext = useStoreContext();
  const mobileDetect = useMobileDetect();

  const [isXApp, setIsXApp] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(true);

  const [tx, setTx] = useState<any>(undefined);
  const [status, setStatus] = useState<any>(undefined);
  const [data, setData] = useState<any>(undefined);

  const apiEndPoint =
    process.env.NODE_ENV == 'production'
      ? 'https://apex-xapp-six.vercel.app'
      : 'http://localhost:3002';

  const handleClick = async () => {
    if (!storeContext.wallet) return;

    if (data && data.offerId) {
      let tx = {
        TransactionType: 'NFTokenAcceptOffer',
        Account: storeContext.wallet,
        NFTokenSellOffer: storeContext.data[0].offerId,
      };

      return setTx(tx);
    }

    let response = await walletService.mint({ publicAddress: storeContext.wallet });
    if (response instanceof Error) return;

    setData(response.data.response);

    let tx = {
      TransactionType: 'NFTokenAcceptOffer',
      Account: storeContext.wallet,
      NFTokenSellOffer: response.data.response.offerId,
    };

    return setTx(tx);
  };

  const updateRecord = async () => {
    let response = await walletService.claimed({ uuid: data.uuid });
    console.log(response);
  };

  useEffect(() => {
    setIsMobile(mobileDetect.isMobile());
    setIsXApp(mobileDetect.isXApp());
    setData(storeContext.data[0]);
    if (storeContext.data[0] && storeContext.data[0].claimedAt) setStatus(true);
  }, [storeContext.data[0]]);

  useEffect(() => {
    if (status && !data.claimedAt) {
      //storeContext.setNftoken(storeContext.data[0].tokenId);
      updateRecord();
    }
  }, [status]);

  return (
    <>
      <div ref={ref} className={style.page}>
        <div className={`${bg.punch}`}>
          <div className={`${bg.image}`}></div>
          <div className={`${bg.separator}`}></div>
        </div>
        <div className={style.descWrapper}>
          <div className={style.title}>CLAIM YOUR NFT</div>
          <div className={style.description}>claim your very first nft</div>
        </div>
        <div className={style.buttonContainer}>
          {!status ? (
            <Button
              className={style.button}
              type="primary"
              theme="light"
              height={40}
              onClick={handleClick}>
              <div className={style.buttonText}>CLAIM</div>
              <div className={style.buttonLogo}>
                <Arrowright size={16} />
              </div>
            </Button>
          ) : (
            <Button
              className={style.button}
              type="complete"
              theme="light"
              height={40}
              onClick={() =>
                next.current.scrollIntoView({
                  behavior: 'smooth',
                  block: 'end',
                  inline: 'nearest',
                })
              }>
              <div className={style.buttonText}>COMPLETED</div>
              <div className={style.buttonLogoComplete}>
                <Arrowright size={16} />
              </div>
            </Button>
          )}
        </div>
      </div>
      {tx && isXApp ? (
        <XApp
          request={tx}
          size={200}
          xumm_api_key={process.env.NEXT_PUBLIC_XUMM_KEY || ''}
          baseUrl={apiEndPoint}
          route={'api'}
          setState={setStatus}
          header={false}
          showButtons={true}
          showQR={true}
        />
      ) : tx && !isXApp ? (
        <Xumm
          request={tx}
          size={200}
          xumm_api_key={process.env.NEXT_PUBLIC_XUMM_KEY || ''}
          baseUrl={apiEndPoint}
          route={'api'}
          setState={setStatus}
          header={true}
          showButtons={true}
          showQR={true}
          show={false}
        />
      ) : null}
    </>
  );
});

export default Claim;
