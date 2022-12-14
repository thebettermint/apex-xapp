import React, { useEffect, useState, Suspense, lazy, Dispatch, SetStateAction } from 'react';

import { useSignContext } from './context';

import XummButtons from './buttons';
import Qr from './container';
import Title from './title';

import style from './index.module.scss';
import useMobileDetect from 'src/hooks/useMobileDetect';

interface IRequest {
  name: string;
  address: string;
  color: string;
}

interface IQr {
  url: string;
  qrcode: string;
  websocket: string;
  uuid: string;
}

interface Props {
  request: any;
  size: number;
  baseUrl: string;
  route: string;
  xumm_api_key: string;
  header: Boolean;
  showQR: Boolean;
  showButtons: Boolean;
  setState?: Dispatch<SetStateAction<any>>;
}

export const XummQr = ({
  request,
  size,
  xumm_api_key,
  baseUrl,
  route,
  header,
  showQR,
  showButtons,
  setState,
}: Props) => {
  const signContext = useSignContext();
  const mobileDetect = useMobileDetect();

  useEffect(() => {
    if (!signContext.qr) return;
    if (mobileDetect.isMobile()) return window.location.assign(signContext.qr.url);
    window.open(signContext.qr.url, '_blank');
  }, [signContext.qr]);

  useEffect(() => {
    signContext.setXummData({
      request: request,
      baseUrl: baseUrl,
      route: route,
      key: xumm_api_key,
    });
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={style.wrapper}>
        {header ? <Title /> : null}
        {showQR ? <Qr size={size} /> : null}
        {showButtons ? <XummButtons /> : null}
      </div>
    </Suspense>
  );
};

export default XummQr;
