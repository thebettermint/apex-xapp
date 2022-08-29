import React, { useState, useRef, ReactNode, MouseEventHandler } from 'react';

import { useSignContext } from './context';

import { MenuDotsVertical, Cross } from '../Icons';

import Pixelation from '../Animations';

import style from './index.module.scss';

import Button from '../Button';

interface Props {
  size: number;
}

const XummButtons = () => {
  const signContext = useSignContext();

  const open = () => {
    window.open(signContext.qr?.url);
  };

  return (
    <div className={style.buttonWrapper}>
      <Button
        className={style.button}
        type="secondary"
        theme="light"
        height={40}
        margin={0}
        border={{ radius: 12 }}
        onClick={() => signContext.refresh()}>
        refresh
      </Button>
      <Button
        className={style.button}
        type="secondary"
        theme="light"
        height={40}
        margin={0}
        border={{ radius: 12 }}
        onClick={open}>
        open
      </Button>
      <div className={style.decline}>DECLINE REQUEST</div>
    </div>
  );
};

export default XummButtons;
