import React, { useState, useRef, useEffect } from 'react';
import style from './index.module.scss';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../../context/store';

interface Props {
  page?: any;
}

const Landing = ({ page }: Props) => {
  const storeContext = useStoreContext();

  return (
    <>
      <div className={style.page}>
        <div className={`${style.pageHeader}`}>
          <div>APEX DEVELOPER SUMMIT</div>
          <div>NFT Workshop</div>
        </div>
        <div className={`${style.heroWrapper}`}>
          <div className={`${style.hero}`}></div>
          <div className={`${style.title}`}>EXTREMELY LOUD AND INCREDIBLY CLOSE</div>
          <div className={`${style.subtitle}`}>YOUR FIRST XRPL NFT WORKSHOP</div>
        </div>
      </div>
    </>
  );
};

export default Landing;
