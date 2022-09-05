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

const Mint = React.forwardRef(({ next }: Props, ref: Ref<any> | undefined) => {
  const storeContext = useStoreContext();
  const mobileDetect = useMobileDetect();

  const [tx, setTx] = useState<any>(undefined);
  const [status, setStatus] = useState<any>(undefined);

  const apiEndPoint =
    process.env.NODE_ENV == 'production'
      ? 'https://apex-xapp-six.vercel.app'
      : 'http://localhost:3000';

  const handleClick = async () => {
    if (!storeContext.wallet) return;

    let response = await walletService.mint({ publicAddress: storeContext.wallet });
    if (response instanceof Error) return;

    return storeContext.data[1](response.data.response);
  };

  useEffect(() => {
    if (storeContext.data[0] && storeContext.data[0].offerId) setStatus(true);
  }, [storeContext.data[0]]);

  return (
    <>
      <div ref={ref} className={style.page}>
        <div className={`${bg.fly}`}>
          <div className={`${bg.image}`}></div>
          <div className={`${bg.separator}`}></div>
        </div>
        <div className={style.descWrapper}>
          <div className={style.title}>MINT YOUR NFT</div>
          <div className={style.description}>Mint your very first nft</div>
        </div>
        <div className={style.buttonContainer}>
          {!status ? (
            <Button
              className={style.button}
              type="primary"
              theme="light"
              height={40}
              onClick={handleClick}>
              <div className={style.buttonText}>MINT</div>
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

export default Mint;
