import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/index.module.scss';
import Login from 'src/components/Forms/login';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../context/store';
import { useState, useEffect } from 'react';

const Contact: NextPage = () => {
  const storeContext = useStoreContext();

  return (
    <>
      <Head>
        <title>apex-xapp</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.page}>
        <div className={`${styles.pageHeader}`}>
          <div>APEX DEVELOPER SUMMIT</div>
          <div>Contact Us</div>
        </div>
        <div className={styles.heroWrapper}>
          <div className={styles.title}></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
