import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/index.module.scss';
import Login from 'src/components/Forms/login';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../context/store';
import { useState, useEffect } from 'react';

import { Twitter, Github, Globe, Link } from 'src/components/Icons';

import NLink from 'next/link';

import xAppService from 'src/services/xapp.service';
import useMobileDetect from 'src/hooks/useMobileDetect';

const Contact: NextPage = () => {
  const storeContext = useStoreContext();
  const mobileDetect = useMobileDetect();

  const openExternalLink = (url: string) => {
    if (mobileDetect.isXApp()) return xAppService.openExternalBrowser(url, window);
    if (mobileDetect.isMobile()) return window.location.assign(url);
    return window.open(url, '_blank');
  };

  return (
    <>
      <Head>
        <title>apex-xapp</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.page} ${styles.contactPage}`}>
        <div className={`${styles.pageHeader}`}>
          <div>APEX DEVELOPER SUMMIT</div>
          <div>Contact Us</div>
        </div>
        <div className={styles.heroWrapper}>
          <div className={`${styles.pageHeader} ${styles.contactPage}`}>
            <div className={styles.title}>PROJECTS</div>
          </div>
          <div className={styles.content}>
            <div className={styles.contactTitle}>whirledlabs</div>
            <p>
              {`An ideation lab specializing in technological innovation and industry collaboration.`}
            </p>
            <div className={styles.logoContainer}>
              <Link
                size={24}
                fill={'white'}
                onClick={() => openExternalLink(`https://linktr.ee/whirledlabs`)}
              />
              <Github
                size={24}
                fill={'white'}
                onClick={() => openExternalLink(`https://github.com/whirledlabs`)}
              />
              <Twitter
                size={24}
                fill={'white'}
                onClick={() => openExternalLink(`https://twitter.com/whirledlabs`)}
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
                onClick={() => openExternalLink(`https://thebettermint.vercel.app/`)}
              />
              <Github
                size={24}
                fill={'white'}
                onClick={() => openExternalLink(`https://github.com/thebettermint`)}
              />
              <Twitter
                size={24}
                fill={'white'}
                onClick={() => openExternalLink(`https://thebettermint.vercel.app/`)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.page} ${styles.contactPage}`}>
        <div className={`${styles.pageHeader} ${styles.contactPage}`}>
          <div className={styles.title}>TEAM</div>
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
                onClick={() => openExternalLink(`https://github.com/interc0der`)}
              />
              <Twitter
                size={24}
                fill={'white'}
                onClick={() => openExternalLink(`https://twitter.com/interc0der`)}
              />
            </div>
            <div className={styles.contactTitle}>pablo padillo</div>
            <p>{`Coming from a fintech background, I learned firsthand the challenges faced by businesses to execute cross-border payments. By offering an intermediary asset, the XRP Ledger solves the cross-border problem by eliminating the need for pooled capital in offshore accounts.`}</p>
            <div className={styles.logoContainer}>
              <Twitter
                size={24}
                fill={'white'}
                onClick={() => openExternalLink(`https://twitter.com/CryptoTotalWar`)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
