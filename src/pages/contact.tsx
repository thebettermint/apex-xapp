import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/index.module.scss';
import Login from 'src/components/Forms/login';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../context/store';
import { useState, useEffect } from 'react';

import { Twitter, Github, Globe, Link } from 'src/components/Icons';

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
          <div className={styles.content}>
            <div className={styles.contactTitle}>whirledlabs</div>
            <p>
              {`An ideation lab specializing in technological innovation and industry collaboration.`}
            </p>
            <div className={styles.logoContainer}>
              <Link
                size={24}
                fill={'white'}
                onClick={() => window.open(`https://linktr.ee/whirledlabs`)}
              />
              <Github
                size={24}
                fill={'white'}
                onClick={() => window.open(`https://github.com/whirledlabs`)}
              />
              <Twitter
                size={24}
                fill={'white'}
                onClick={() => window.open(`https://twitter.com/whirledlabs`)}
              />
            </div>
            <div className={styles.contactTitle}>TheBetterMint</div>
            <p>
              {`An open-source B2B platform that can enable NFT functionality for your business.`}
            </p>
            <div className={styles.logoContainer}>
              <Globe
                size={24}
                fill={'white'}
                onClick={() => window.open(`https://thebettermint.vercel.app/`)}
              />
              <Github
                size={24}
                fill={'white'}
                onClick={() => window.open(`https://github.com/thebettermint`)}
              />
              <Twitter
                size={24}
                fill={'white'}
                onClick={() => window.open(`https://thebettermint.vercel.app/`)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.page}>
        <div className={`${styles.pageHeader}`}>
          <div className={styles.title}>CONTACT TEAM</div>
        </div>
        <div className={styles.heroWrapper}>
          <div className={styles.content}>
            <div className={styles.contactTitle}>ryan molley</div>
            <p>
              {`Whirledlabs founder, startup innovating on XRP Ledger. Ryan was designing buildings for 10 years as a structural engineer & was inspired by the XRP ledger to build as a developer.`}
            </p>
            <div className={styles.logoContainer}>
              <Github
                size={24}
                fill={'white'}
                onClick={() => window.open(`https://github.com/interc0der`)}
              />
              <Twitter
                size={24}
                fill={'white'}
                onClick={() => window.open(`https://twitter.com/interc0der`)}
              />
            </div>
            <div className={styles.contactTitle}>pablo padillo</div>
            <p>{``}</p>
            <div className={styles.logoContainer}>
              <Twitter
                size={24}
                fill={'white'}
                onClick={() => window.open(`https://twitter.com/CryptoTotalWar`)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
