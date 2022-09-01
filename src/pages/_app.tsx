import '../styles/globals.scss';
import styles from '../styles/index.module.scss';
import type { AppProps } from 'next/app';

import StoreProvider from '../context/store';

import Header from 'src/components/Header';

import Head from 'next/head';

import dynamic from 'next/dynamic';

const DynamicHeader = dynamic(() => import('src/components/Header'), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <script
        data-consolejs-channel="7ec8c9da-257b-4e52-9918-453a2cef4aa4"
        src="https://remotejs.com/agent/agent.js"
        defer
      />
      {/*       <script src="https://xumm.app/assets/cdn/xumm-xapp-sdk.min.js"></script> */}
      <StoreProvider>
        <div className={styles.main}>
          <DynamicHeader />
          <Component {...pageProps} />
        </div>
      </StoreProvider>
    </>
  );
}

export default MyApp;
