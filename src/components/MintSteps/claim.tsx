import React, { useState, useRef, useEffect, Ref } from 'react';
import style from './index.module.scss';

import bg from './bg.module.scss';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../../context/store';

import Button from 'src/components/Button';

import { ArrowRight, ArrowLeft, Arrowright } from 'src/components/Icons';

interface Props {
  next: any;
}

const Claim = React.forwardRef(({ next }: Props, ref: Ref<any> | undefined) => {
  const storeContext = useStoreContext();

  return (
    <>
      <div ref={ref} className={style.page}>
        <div className={`${bg.punch}`}>
          <div className={`${bg.image}`}></div>
          <div className={`${bg.separator}`}></div>
        </div>
        <div className={style.descWrapper}>
          <div className={style.title}>CLAIM YOUR NFT</div>
          <div className={style.description}>claim your very first nft</div>
        </div>
        <div className={style.buttonContainer}>
          <Button
            className={style.button}
            type="primary"
            theme="light"
            height={40}
            onClick={() => console.log('clicked')}>
            <div className={style.buttonText}>CLAIM</div>
            <div className={style.buttonLogo}>
              <Arrowright size={16} />
            </div>
          </Button>
        </div>
      </div>
    </>
  );
});

export default Claim;
