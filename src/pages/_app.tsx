import '../styles/globals.scss';
import styles from '../styles/index.module.scss';
import type { AppProps } from 'next/app';

import StoreProvider from '../context/store';

import Header from 'src/components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <div className={styles.main}>
        <Header />
        <Component {...pageProps} />
      </div>
    </StoreProvider>
  );
}

export default MyApp;
