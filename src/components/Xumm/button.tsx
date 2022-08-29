import React, { Dispatch, lazy, SetStateAction, Suspense, useEffect } from 'react';
import style from './index.module.scss';
import Button from '../Button';

import SignContextProvider, { useSignContext } from './context';

interface XProps {
  request: any;
  baseUrl: string;
  route: string;
  xumm_api_key: string;
  children: any;
  setState?: Dispatch<SetStateAction<any>>;
}

const XButton = ({ request, xumm_api_key, baseUrl, route, children }: XProps) => {
  const signContext = useSignContext();

  const open = () => {
    window.open(signContext.qr?.url);
  };

  useEffect(() => {
    signContext.setXummData({
      request: request,
      baseUrl: baseUrl,
      route: route,
      key: xumm_api_key,
    });
  }, []);

  return (
    <div className={style.buttonWrapper}>
      <Button
        className={style.button}
        type="secondary"
        theme="light"
        height={40}
        margin={0}
        border={{ radius: 12 }}
        onClick={open}>
        {children}
      </Button>
    </div>
  );
};

const XummButton = ({ request, xumm_api_key, baseUrl, route, children, setState }: XProps) => {
  return (
    <SignContextProvider setState={setState}>
      <Suspense fallback={<div>Loading...</div>}>
        <XButton
          request={request}
          xumm_api_key={xumm_api_key}
          baseUrl={baseUrl}
          route={route}
          children={children}
        />
      </Suspense>
    </SignContextProvider>
  );
};

export default XummButton;
