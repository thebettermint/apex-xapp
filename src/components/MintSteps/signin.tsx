import React, { useState, useRef, useEffect, Ref } from 'react';
import style from './index.module.scss';

import bg from './bg.module.scss';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../../context/store';

import Button from 'src/components/Button';
import XummButton from '../Xumm/button';
import Number from 'src/components/Header/number';

import { ArrowRight, ArrowLeft, Arrowright } from 'src/components/Icons';

import Swirl from 'src/components/Assets/images/svg/paths/swirl.svg';

interface Props {
  page?: any;
  next: any;
}

const SignIn = React.forwardRef(({ next, page }: Props, ref: Ref<any> | undefined) => {
  const storeContext = useStoreContext();

  const [status, setStatus] = useState<any>(undefined);
  const [wallet, setWallet] = useState<any>(storeContext.wallet?.key);

  const apiEndPoint =
    process.env.NODE_ENV == 'production'
      ? 'https://apex-xapp-six.vercel.app'
      : 'http://localhost:3002';

  const handleSignIn = async (status: any) => {
    if (
      status.response.response.environment_nodetype !== 'CUSTOM' ||
      status.response.response.environment_nodeuri !== 'xls20-sandbox.rippletest.net:51233'
    )
      return;

    setWallet({
      key: status.response.response.account,
      method: 'xumm',
    });
    storeContext.setWallet({
      key: status.response.response.account,
      method: 'xumm',
    });
  };

  useEffect(() => {
    if (status == undefined) return;
    if (status.state == 'signed') handleSignIn(status);
  }, [status]);

  return (
    <>
      <div ref={ref} className={`${style.page} ${style.anime}`}>
        <div className={`${bg.anime}`}>
          <div className={`${bg.image}`}></div>
          <div className={`${bg.opacity}`}></div>
        </div>
        <div className={`${style.descWrapper}`}>
          <div className={style.title}>SIGN IN</div>
          <div className={style.description}>sign in using a wallet on the xls20d network</div>
        </div>
        <div className={style.buttonContainer}>
          {!wallet ? (
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
});

export default SignIn;
