import React, { useState, useRef, useEffect } from 'react';
import style from './index.module.scss';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../../context/store';

import Button from 'src/components/Button';

import { ArrowRight, ArrowLeft, Arrowright } from 'src/components/Icons';
import useMobileDetect from 'src/hooks/useMobileDetect';

interface Props {
  page?: any;
}

const SignIn = ({ page }: Props) => {
  const storeContext = useStoreContext();
  const mobileDetect = useMobileDetect();

  console.log(mobileDetect.isXApp());

  return (
    <>
      <div className={style.page}>
        <div className={style.descWrapper}>
          <div className={style.title}>SIGN IN</div>
          <div className={`${style.title}`}>{mobileDetect.isXApp() ? 'true' : 'false'}</div>
          <div className={style.description}>sign in using a wallet on the xls20d network</div>
        </div>
        <div className={style.buttonContainer}>
          <Button
            className={style.button}
            type="primary"
            theme="light"
            height={40}
            onClick={() => console.log('clicked')}>
            <div className={style.buttonText}>SIGN IN</div>
            <div className={style.buttonLogo}>
              <Arrowright size={16} />
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
