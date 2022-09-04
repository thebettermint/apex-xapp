import React, { useState, useRef, useEffect, Ref } from 'react';
import style from './index.module.scss';

import bg from './bg.module.scss';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../../context/store';

import Button from 'src/components/Button';

import { ArrowRight, ArrowLeft, Arrowright } from 'src/components/Icons';

import useMobileDetect from 'src/hooks/useMobileDetect';

import walletService from 'src/services/wallet.service';

interface Props {
  next: any;
}

const Fund = React.forwardRef(({ next }: Props, ref: Ref<any> | undefined) => {
  const storeContext = useStoreContext();
  const mobileDetect = useMobileDetect();

  const [status, setStatus] = useState<any>(undefined);
  const [isXApp, setIsXApp] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    setIsMobile(mobileDetect.isMobile());
    setIsXApp(mobileDetect.isXApp());
    if (storeContext.validated) setStatus(true);
  }, [storeContext.validated]);

  const handleClick = async () => {
    if (storeContext.wallet) {
      let params = {
        publicAddress: storeContext.wallet,
        network: 'nft',
      };

      let response = await walletService.fund(params);

      if (response instanceof Error) return;
      storeContext.setValidated(true);
      return setStatus(true);
    } else {
      return;
    }
  };

  return (
    <>
      <div ref={ref} className={style.page}>
        <div className={`${bg.fly}`}>
          <div className={`${bg.image}`}></div>
          <div className={`${isXApp ? bg.opacity : bg.separator}`}></div>
        </div>
        <div className={style.descWrapper}>
          <div className={style.title}>ACTIVATE YOUR WALLET</div>
          <div className={style.description}>auto fund your wallet using the public faucet</div>
        </div>
        <div className={style.buttonContainer}>
          {!status ? (
            <Button
              className={style.button}
              type="primary"
              theme="light"
              height={40}
              onClick={() => handleClick()}>
              <div className={style.buttonText}>FUND</div>
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
    </>
  );
});

export default Fund;
