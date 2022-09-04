import React, { Dispatch, lazy, SetStateAction, Suspense, useEffect } from 'react';
import style from './index.module.scss';
import Button from '../Button';

import SignContextProvider, { useSignContext } from './context';
import useMobileDetect from 'src/hooks/useMobileDetect';

interface XProps {
  request: any;
  baseUrl: string;
  route: string;
  xumm_api_key: string;
  children: any;
  className: any;
  setState?: Dispatch<SetStateAction<any>>;
}

const XButton = ({ request, xumm_api_key, baseUrl, route, className, children }: XProps) => {
  const signContext = useSignContext();
  const mobileDetect = useMobileDetect();

  const open = async () => {
    let qr = await signContext.onDemand({
      request: request,
      baseUrl: baseUrl,
      route: route,
      key: xumm_api_key,
    });

    if (mobileDetect.isMobile()) return window.location.assign(qr.url);
    window.open(qr.url, '_blank');
  };

  return (
    <div className={style.onButtonContainer}>
      <Button className={className} type="primary" theme="light" height={40} onClick={open}>
        {children}
      </Button>
    </div>
  );
};

const XummButton = ({
  request,
  xumm_api_key,
  baseUrl,
  route,
  className,
  children,
  setState,
}: XProps) => {
  return (
    <SignContextProvider setState={setState}>
      <Suspense fallback={<div>Loading...</div>}>
        <XButton
          className={className}
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
