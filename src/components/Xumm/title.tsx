import React, { useState, useRef, ReactNode, MouseEventHandler } from 'react';

import { useSignContext } from './context';

import style from './index.module.scss';

const Title = () => {
  const signContext = useSignContext();

  return (
    <div className={style.title}>
      {signContext.meta ? (
        <img
          className={style.img}
          src={signContext.meta.application.icon_url}
          width={`45px`}
          height={`45px`}></img>
      ) : (
        <img className={style.img} width={`45px`} height={`45px`}></img>
      )}

      <div>{signContext.meta ? signContext.meta.payload.tx_type : 'unknown'}</div>
    </div>
  );
};

export default Title;
