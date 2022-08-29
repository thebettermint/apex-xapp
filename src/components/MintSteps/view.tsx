import React, { useState, useRef, useEffect } from 'react';
import style from './index.module.scss';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../../context/store';

import Button from 'src/components/Button';

import { ArrowRight, ArrowLeft, Arrowright } from 'src/components/Icons';

interface Props {
  page?: any;
}

const View = ({ page }: Props) => {
  const storeContext = useStoreContext();

  return (
    <>
      <div className={style.page}>
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
            onClick={() => console.log('clicked')}>
            <div className={style.buttonText}>VIEW</div>
            <div className={style.buttonLogo}>
              <Arrowright size={16} />
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default View;
