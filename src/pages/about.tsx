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
          <div>About</div>
        </div>
        <div className={styles.heroWrapper}>
          <div className={styles.about}></div>
          <div className={styles.title}></div>
        </div>
        <div className={`${styles.pageHeader}`}>
          <div className={styles.bottomTitle}>a whirledlabs presentation</div>
        </div>
      </div>

      <div className={styles.page}>
        <div className={`${styles.pageHeader}`}>
          <div className={styles.title}>INSPIRATION</div>
        </div>
        <div className={styles.heroWrapper}>
          <div className={styles.content}>
            <p>
              {`The broader XRP Ledger community has been extremely passionate about the upcoming
              XLS20d ledger amendment. Despite this fervor, many still have little to no experience
              minting & claiming nonfungible tokens on the XRP Ledger. We built this demo to enable
              community to participate in the XLS-20d devnet through a simple step-by-step process.`}
            </p>
            <p>
              {`Ripple's call-to-action - developers are encouraged build nft applications on the 
              devnet to threshold test before adoption on the mainnet. In order to preserve the 
              experience that we have all come to love on the mainnet, we need to test the 
              devnet for any fatal issues or threshold limitations. We built this application 
              to stress test, the xumm application, the ripple testnet node, and the overall 
              xls20d proposal chain.`}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.page}>
        <div className={`${styles.pageHeader}`}>
          <div className={styles.title}>TEAM</div>
        </div>
        <div className={styles.heroWrapper}>
          <div className={styles.socialWrapper}>
            <div className={styles.social1}></div>
            <div className={styles.social2}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
