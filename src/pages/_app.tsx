import '../styles/globals.scss';
import styles from '../styles/index.module.scss';
import type { AppProps } from 'next/app';

import StoreProvider from '../context/store';
import XAppContextProvider from 'src/context/xapp';

import Header from 'src/components/Header';

import useMobileDetect from 'src/hooks/useMobileDetect';

function MyApp({ Component, pageProps }: AppProps) {
  const mobileDetect = useMobileDetect();

  return (
    <>
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
