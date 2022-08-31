import React, { useState, useRef, useEffect } from 'react';
import style from './index.module.scss';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../../context/store';

import Button from 'src/components/Button';

import { ArrowRight, ArrowLeft, Arrowright } from 'src/components/Icons';
import { useXAppContext } from 'src/context/xapp';
import useMobileDetect from 'src/hooks/useMobileDetect';

interface Props {
  page?: any;
}

const Fund = ({ page }: Props) => {
  const storeContext = useStoreContext();
  const xappContext = useXAppContext();
  const mobileDetect = useMobileDetect();

  return (
    <>
      <div className={style.page}>
        <div className={style.descWrapper}>
          <div className={style.title}>ACTIVATE YOUR WALLET</div>
          <div className={style.description}>auto fund your wallet using the public faucet</div>
          {mobileDetect.isXApp() ? xappContext.tokenData : null}
        </div>
        <div className={style.buttonContainer}>
          <Button
            className={style.button}
            type="primary"
            theme="light"
            height={40}
            onClick={() => console.log('clicked')}>
            <div className={style.buttonText}>FUND</div>
            <div className={style.buttonLogo}>
              <Arrowright size={16} />
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Fund;
