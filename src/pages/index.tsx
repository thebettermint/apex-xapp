import type { NextPage } from 'next';
import styles from '../styles/index.module.scss';

import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import Button from '../components/Button';

import Image from 'next/image';

import Fund from 'src/components/MintSteps/fund';
import Claim from 'src/components/MintSteps/claim';
import Landing from 'src/components/MintSteps/landing';
import Steps from 'src/components/MintSteps';
import Header from 'src/components/Header';

import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import useMobileDetect from 'src/hooks/useMobileDetect';
//import useIsTouchDevice from 'src/hooks/useIsTouchDevice';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    //router.push('xapp');
  }, []);
  //const isTouchDevice = useIsTouchDevice();
  const mobileDetect = useMobileDetect();

  useEffect(() => {
    //console.log('is touch device :', isTouchDevice);
    console.log('is mobile :', mobileDetect.isMobile());
    console.log('is xApp :', mobileDetect.isXApp());
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

export default Home;
