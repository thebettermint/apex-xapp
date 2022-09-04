import React, { useState, useRef, useEffect, Ref } from 'react';
import style from './index.module.scss';

import bg from './bg.module.scss';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../../context/store';

import Button from 'src/components/Button';

import { ArrowRight, ArrowLeft, Arrowright } from 'src/components/Icons';
import Router, { useRouter } from 'next/router';

interface Props {
  next?: any;
}

const View = React.forwardRef(({ next }: Props, ref: Ref<any> | undefined) => {
  const storeContext = useStoreContext();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/visualize`);
  };

  return (
    <>
      <div ref={ref} className={style.page}>
        <div className={`${bg.spark}`}>
          <div className={`${bg.image}`}></div>
          <div className={`${bg.separator}`}></div>
        </div>
        <div className={style.descWrapper}>
          <div className={style.title}>VIEW YOUR NFT</div>
          <div className={style.description}>
            open up our visualizer to view your newly claimed nft
          </div>
        </div>

        <div className={style.buttonContainer}>
          <Button
            className={style.button}
            type="primary"
            theme="light"
            height={40}
            onClick={handleClick}>
            <div className={style.buttonText}>VIEW</div>
            <div className={style.buttonLogo}>
              <Arrowright size={16} />
            </div>
          </Button>
        </div>
      </div>
    </>
  );
});

export default View;
