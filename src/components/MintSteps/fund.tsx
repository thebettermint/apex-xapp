import React, { useState, useRef, useEffect, Ref } from 'react';
import style from './index.module.scss';

import bg from './bg.module.scss';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../../context/store';

import Button from 'src/components/Button';

import { ArrowRight, ArrowLeft, Arrowright } from 'src/components/Icons';
import { useXAppContext } from 'src/context/xapp';
import useMobileDetect from 'src/hooks/useMobileDetect';

import walletService from 'src/services/wallet.service';

interface Props {
  next: any;
}

const Fund = React.forwardRef(({ next }: Props, ref: Ref<any> | undefined) => {
  const storeContext = useStoreContext();
  const xappContext = useXAppContext();
  const mobileDetect = useMobileDetect();

  const [status, setStatus] = useState<any>(undefined);

  const handleClick = async () => {
    /*     const api = new Client('wss://xls20-sandbox.rippletest.net:51233');
    await api.connect(); */

    if (storeContext.wallet?.key) {
      /*       let Wallet = new xrpl.Wallet(storeContext.wallet?.key, '');
      const { wallet, balance } = await api.fundWallet(Wallet);
      console.log(wallet);
      console.log(balance);
    } */

      let params = {
        publicAddress: storeContext.wallet?.key,
        network: 'nft',
      };

      let response = await walletService.fund(params);
      console.log(response);
      setStatus(true);
    }
  };

  return (
    <>
      <div ref={ref} className={style.page}>
        <div className={`${bg.fly}`}>
          <div className={`${bg.image}`}></div>
          <div className={`${bg.separator}`}></div>
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
