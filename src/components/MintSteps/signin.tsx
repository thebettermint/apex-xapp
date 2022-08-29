import React, { useState, useRef, useEffect } from 'react';
import style from './index.module.scss';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../../context/store';

import Button from 'src/components/Button';

interface Props {
  page?: any;
}

const SignIn = ({ page }: Props) => {
  const storeContext = useStoreContext();

  return (
    <>
      <div className={style.page}>
        <div className={style.descWrapper}>
          <div className={style.title}>SIGN IN</div>
          <div className={style.description}>sign in using a wallet on the xls20d network</div>
        </div>
        <div className={style.buttonContainer}>
          <Button
            className={style.button}
            type="primary"
            theme="light"
            height={40}
            onClick={() => console.log('clicked')}>
            SIGN IN
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
