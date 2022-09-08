import React, { useState, useRef, useEffect, Ref } from 'react';
import style from './index.module.scss';

import bg from './bg.module.scss';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../../context/store';
import walletService from 'src/services/wallet.service';

import Button from 'src/components/Button';

import { ArrowRight, ArrowLeft, Arrowright } from 'src/components/Icons';

import XummButton from 'src/components/Xumm/button';

import useMobileDetect from 'src/hooks/useMobileDetect';

interface Props {
  next: any;
}

const Claim = React.forwardRef(({ next }: Props, ref: Ref<any> | undefined) => {
  const storeContext = useStoreContext();
  const mobileDetect = useMobileDetect();

  const [status, setStatus] = useState<any>(undefined);
  const [data, setData] = useState<any>(undefined);
  const [isClaimed, setIsClaimed] = useState<boolean>(false);

  const apiEndPoint =
    process.env.NODE_ENV == 'production'
      ? 'https://apex-xapp-six.vercel.app'
      : 'http://localhost:3000';

  const updateRecord = async () => {
    if (storeContext.data[0].claimedAt) return;
    let response = await walletService.claimed({ uuid: storeContext.data[0].uuid });
    if (response instanceof Error) return;
    console.log(response);
    storeContext.data[1](response.data.response);
    return setIsClaimed(true);
  };

  useEffect(() => {
    if (storeContext.data[0] && storeContext.data[0].claimedAt) setIsClaimed(true);
  }, [storeContext.data[0]]);

  useEffect(() => {
    if (status == undefined) return;
    if (status.state == 'signed' && status.response.dispatched_result == 'tesSUCCESS')
      updateRecord();
  }, [status]);

  return (
    <>
      <div ref={ref} className={style.page}>
        <div className={`${bg.claim}`}>
          <div className={`${bg.image}`}></div>
          <div className={`${bg.separator}`}></div>
        </div>
        <div className={style.descWrapper}>
          <div className={style.title}>CLAIM YOUR NFT</div>
          <div className={style.description}>claim your nft</div>
        </div>
        <div className={style.buttonContainer}>
          {!isClaimed ? (
            <XummButton
              className={style.button}
              request={{
                TransactionType: 'NFTokenAcceptOffer',
                Account: storeContext.wallet,
                NFTokenSellOffer: storeContext.data[0].offerId,
              }}
              xumm_api_key={process.env.NEXT_PUBLIC_XUMM_KEY || ''}
              baseUrl={apiEndPoint}
              route={'api'}
              setState={setStatus}>
              <div className={style.buttonText}>CLAIM</div>
              <div className={style.buttonLogo}>
                <Arrowright size={16} />
              </div>
            </XummButton>
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
    </>
  );
});

export default Claim;
