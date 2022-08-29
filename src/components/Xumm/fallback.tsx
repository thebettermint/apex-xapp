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

  if (signContext.scanned) {
    return (
      <div className={style.container}>
        <div className="spinner"></div>
      </div>
    );
  }

  if (signContext.error) {
    return (
      <div className={style.container}>
        <Cross size={'100px'} color={'#ff8080'} />
      </div>
    );
  }

  return (
    <div className={style.container}>
      <Pixelation height={`${size - 2}px`} width={`${size - 2}px`} size={size - 2} />

      {signContext.qr ? (
        <img src={signContext.qr.qrcode} width={`${size}px`} height={`${size}px`}></img>
      ) : null}
    </div>
  );
};

export default QR;
