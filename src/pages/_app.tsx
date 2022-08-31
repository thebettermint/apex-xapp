import '../styles/globals.scss';
import styles from '../styles/index.module.scss';
import type { AppProps } from 'next/app';

import StoreProvider from '../context/store';
import XAppContextProvider from 'src/context/xapp';

import Header from 'src/components/Header';

import React, { useState, useEffect } from 'react';

import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          <script
            data-consolejs-channel="7ec8c9da-257b-4e52-9918-453a2cef4aa4"
            src="https://remotejs.com/agent/agent.js"></script>
          <StoreProvider>
            <div className={styles.main}>
              <Header />
              <Component {...pageProps} />
            </div>
          </StoreProvider>
        </>
      )}
    </>
  );
}

export default MyApp;
