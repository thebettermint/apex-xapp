import React, { useState, useRef, useEffect, createRef } from 'react';
import style from './index.module.scss';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../../context/store';

import Landing from './landing';
import Claim from './claim';
import Fund from './fund';
import View from './view';
import SignIn from './signin';
import useMobileDetect from 'src/hooks/useMobileDetect';

interface Props {
  page?: any;
}

const Index = ({ page }: Props) => {
  const storeContext = useStoreContext();
  const mobileDetect = useMobileDetect();

  const landingRef = useRef<any>(null);
  const signInRef = useRef<any>(null);
  const fundRef = useRef<any>(null);
  const claimRef = useRef<any>(null);
  const viewRef = useRef<any>(null);
  const containerRef = useRef<any>(null);

  const [isXApp, setIsXApp] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const [data, setData] = useState<any>(undefined);
  const [wallet, setWallet] = useState<any>(undefined);
  const [validated, setValidated] = useState<any>(undefined);

  useEffect(() => {
    setIsMobile(mobileDetect.isMobile());
    setIsXApp(mobileDetect.isXApp());
    if (storeContext.wallet) setWallet(storeContext.wallet);
    if (storeContext.validated) setValidated(storeContext.validated);
    if (storeContext.data[0]) setData(storeContext.data[0]);
  }, [storeContext.wallet, storeContext.validated, storeContext.data[0]]);

  return (
    <div ref={containerRef} className={style.container}>
      <Landing
        refContainer={containerRef}
        ref={landingRef}
        start={mobileDetect.isXApp() ? fundRef : signInRef}
      />
      {isXApp ? null : <SignIn next={fundRef} ref={signInRef} />}
      {!wallet ? null : <Fund next={claimRef} ref={fundRef} />}
      {!validated ? null : <Claim next={viewRef} ref={claimRef} />}
      {data && data.claimedAt ? <View ref={viewRef} /> : null}
    </div>
  );
};

export default Index;
