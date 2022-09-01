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

  useEffect(() => {
    setIsMobile(mobileDetect.isMobile());
    setIsXApp(mobileDetect.isXApp());
  }, []);

  return (
    <div ref={containerRef} className={style.container}>
      <Landing
        refContainer={containerRef}
        ref={landingRef}
        start={mobileDetect.isXApp() ? fundRef : signInRef}
      />
      {isXApp ? null : <SignIn ref={signInRef} />}
      <Fund ref={fundRef} />
      <Claim ref={claimRef} />
      <View ref={viewRef} />
    </div>
  );
};

export default Index;
