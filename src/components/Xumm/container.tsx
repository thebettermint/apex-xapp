import React, { useState, useRef, ReactNode, MouseEventHandler } from 'react';

import { useSignContext } from './context';

import { MenuDotsVertical, Cross } from '../Icons';

import Pixelation from '../Animations';

import style from './index.module.scss';

import Button from '../Button';

interface Props {
  size: number;
}

const QR = ({ size }: Props) => {
  const signContext = useSignContext();

  const [isClicked, setIsClicked] = useState<boolean>(false);

  if (signContext.error) {
    return (
      <div
        className={style.circleContainer}
        style={{ height: `${size - 2}px`, width: `${size - 2}px` }}>
        <Cross size={'50px'} color={'#ff8080'} />
        <div className={style.status}>sign declined</div>
        <div className={style.msg}>refresh to try again</div>
      </div>
    );
  }

  if (signContext.scanned) {
    return (
      <>
        <div
          className={style.animatedContainer}
          style={{ height: `${size - 2}px`, width: `${size - 2}px` }}></div>
        <div className={style.absoluteContainer}>
          <div className={style.status} style={{ marginTop: `${size / 2.5}px` }}>
            scanned
          </div>
          <div className={style.msg}>awaiting action...</div>
        </div>
      </>
    );
  }

  return (
    <div className={style.container} onClick={() => setIsClicked(!isClicked)}>
      {isClicked ? (
        <div className={style.meta} style={{ height: `${size - 2}px`, width: `${size - 2}px` }}>
          <div className={style.json}>{JSON.stringify(signContext.meta.payload.request_json)}</div>
          <div>App: {signContext.meta.application.name}</div>
          <div>Desc: {signContext.meta.application.description}</div>
          <div>Created at: {signContext.meta.payload.created_at}</div>
          <div>Expires at: {signContext.meta.payload.expires_at}</div>
          <div>Expires in {signContext.expire} seconds...</div>
        </div>
      ) : (
        <>
          <div className={style.instruction}>scan qr code with xumm app</div>
          <Pixelation height={`${size - 2}px`} width={`${size - 2}px`} size={size - 2} />

          {signContext.qr ? (
            <img
              className={style.qr}
              src={signContext.qr.qrcode}
              width={`${size}px`}
              height={`${size}px`}></img>
          ) : null}

          {signContext.qr ? <div className={style.uuid}>{signContext.qr.uuid}</div> : null}
        </>
      )}
    </div>
  );
};

export default QR;
