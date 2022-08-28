import '../styles/globals.scss';
import type { AppProps } from 'next/app';

import StoreProvider from '../context/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
