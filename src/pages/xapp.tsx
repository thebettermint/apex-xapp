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

import useMobileDetect from 'src/hooks/useMobileDetect';
//import useIsTouchDevice from 'src/hooks/useIsTouchDevice';

const XApp: NextPage = () => {
  //const isTouchDevice = useIsTouchDevice();
  const mobileDetect = useMobileDetect();

  const handleSignup = () => {
    Router.push('/signup');
  };

  useEffect(() => {
    //console.log('is touch device :', isTouchDevice);
    console.log('is mobile :', mobileDetect.isMobile());
  }, []);

  return (
    <>
      <Head>
        <title>apex</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.bg}></div>

      <Steps></Steps>
    </>
  );
};

export default XApp;
