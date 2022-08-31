import '../styles/globals.scss';
import styles from '../styles/index.module.scss';
import type { AppProps } from 'next/app';

import StoreProvider from '../context/store';
import XAppContextProvider from 'src/context/xapp';

import Header from 'src/components/Header';

import Head from 'next/head';

import useMobileDetect from 'src/hooks/useMobileDetect';

function MyApp({ Component, pageProps }: AppProps) {
  const mobileDetect = useMobileDetect();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {mobileDetect.isXApp() ? (
        <StoreProvider>
          <XAppContextProvider>
            <div className={styles.main}>
              <Header />
              <Component {...pageProps} />
            </div>
          </XAppContextProvider>
        </StoreProvider>
      ) : (
        <StoreProvider>
          <div className={styles.main}>
            <Header />
            <Component {...pageProps} />
          </div>
        </StoreProvider>
      )}
    </>
  );
}

export default MyApp;
