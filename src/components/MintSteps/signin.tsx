import React, { useState, useRef, useEffect } from 'react';
import style from './index.module.scss';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../../context/store';

import Button from 'src/components/Button';
import XummButton from '../Xumm/button';

import { ArrowRight, ArrowLeft, Arrowright } from 'src/components/Icons';

interface Props {
  page?: any;
}

const SignIn = ({ page }: Props) => {
  const storeContext = useStoreContext();

  const [status, setStatus] = useState<any>(undefined);

  const apiEndPoint =
    process.env.NODE_ENV == 'production'
      ? 'https://apex-xapp-six.vercel.app'
      : 'http://localhost:3000';

  const handleSignIn = async (status: any) => {
    let obj = {
      wallet: {
        key: status.response.response.account,
        method: 'xumm',
      },
      account: null,
    };

    console.log(obj);
  };

  useEffect(() => {
    if (status == undefined) return;
    if (status.state == 'signed') handleSignIn(status);
  }, [status]);

  return (
    <>
      <div className={style.page}>
        <div className={style.descWrapper}>
          <div className={style.title}>SIGN IN</div>
          <div className={style.description}>sign in using a wallet on the xls20d network</div>
        </div>
        <div className={style.buttonContainer}>
          <XummButton
            className={style.button}
            request={{ TransactionType: 'SignIn' }}
            xumm_api_key={process.env.NEXT_PUBLIC_XUMM_KEY || ''}
            baseUrl={apiEndPoint}
            route={'api'}
            setState={setStatus}>
            <div className={style.buttonText}>SIGN IN</div>
            <div className={style.buttonLogo}>
              <Arrowright size={16} />
            </div>
          </XummButton>
          {/*           <Button
            className={style.button}
            type="primary"
            theme="light"
            height={40}
            onClick={() => console.log('clicked')}>
            <div className={style.buttonText}>SIGN IN</div>
            <div className={style.buttonLogo}>
              <Arrowright size={16} />
            </div>
          </Button> */}
        </div>
      </div>
    </>
  );
};

export default SignIn;
