import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Landing.module.scss';
import Login from 'src/components/Forms/login';

import Image from 'next/image';
import Background from '../components/Assets/images/png/checksum/background-12.png';
import Title from '../components/Assets/images/png/checksum/checksum_title_purple.png';
import Logo from '../components/Assets/images/png/checksum/logo_purple.png';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../context/store';
import { useState, useEffect } from 'react';

const LogIn: NextPage = () => {
  const storeContext = useStoreContext();

  return (
    <div className={styles.container}>
      <Head>
        <title>checksum</title>
        <meta name="description" content="check your sum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.bg}>
        <Image
          placeholder="blur"
          layout="fill"
          objectFit="cover"
          alt="Checksum Background"
          src={Background}></Image>
      </div>

      <main className={styles.main}>
        <Login />
      </main>
    </div>
  );
};

export default LogIn;
