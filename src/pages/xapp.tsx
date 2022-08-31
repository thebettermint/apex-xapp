import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/index.module.scss';
import Link from 'next/link';
import Router from 'next/router';
import Button from '../components/Button';

import { useEffect } from 'react';

import Image from 'next/image';

import Fund from 'src/components/MintSteps/fund';
import Claim from 'src/components/MintSteps/claim';
import Landing from 'src/components/MintSteps/landing';
import Steps from 'src/components/MintSteps';
import Header from 'src/components/Header';

import { useRouter } from 'next/router';

import React, { useState } from 'react';

import useMobileDetect from 'src/hooks/useMobileDetect';
import { useXAppContext } from 'src/context/xapp';
//import useIsTouchDevice from 'src/hooks/useIsTouchDevice';

const XApp: NextPage = () => {
  //const isTouchDevice = useIsTouchDevice();
  const mobileDetect = useMobileDetect();
  const XAppContext = useXAppContext();

  const router = useRouter();

  const [token, setToken] = useState<string | undefined>(undefined);
  const [style, SetStyle] = useState<string | undefined>(undefined);

  const handleSignup = () => {
    Router.push('/signup');
  };

  useEffect(() => {
    console.log('is mobile :', mobileDetect.isMobile());
    console.log('is style :', style);
    console.log('is token :', token);
    if (token) XAppContext.init(token);
  }, [token]);

  useEffect(() => {
    let { xAppToken, xAppStyle } = router.query;
    if (typeof xAppStyle == 'object') xAppStyle = xAppStyle[0];
    if (typeof xAppToken == 'object') xAppToken = xAppToken[0];
    setToken(xAppToken);
  });

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <>
        {/*       
      <Head>
        <title>apex</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

        <div className={styles.bg}></div>

        <Steps></Steps>
      </>
    );
  }
};

export default XApp;
