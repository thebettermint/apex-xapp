import React, { useState, useRef, useEffect } from 'react';
import style from './index.module.scss';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../../context/store';

import { Caretdoubleright } from 'src/components/Icons';

import Button from 'src/components/Button';
import useMobileDetect from 'src/hooks/useMobileDetect';

interface Props {
  page?: any;
}

const Landing = ({ page }: Props) => {
  const storeContext = useStoreContext();
  const mobileDetect = useMobileDetect();

  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    window.onscroll = function () {
      setShow(false);
    };

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        setShow(true);
        return;
      }
    });
  });

  return (
    <>
      <div className={style.page}>
        <div className={`${style.pageHeader}`}>
          <div>APEX DEVELOPER SUMMIT</div>
          <div>NFT Workshop</div>
        </div>
        <div className={`${style.heroWrapper}`}>
          <div className={`${style.hero}`}></div>
          <div className={`${style.title}`}>BRINGING NFTs TO LIFE ON THE XRP LEDGER</div>
          <div className={`${style.subtitle}`}>YOUR XRPL NFT WORKSHOP</div>

          <div className={style.buttonContainer}>
            <Button
              className={style.button}
              type="secondary"
              theme="light"
              height={40}
              onClick={() => console.log('clicked')}>
              <div className={style.buttonText}>START</div>
            </Button>
            {mobileDetect.isMobile() && !mobileDetect.isXApp() ? (
              <Button
                className={style.button}
                type="secondary"
                theme="light"
                height={40}
                onClick={() => console.log('clicked')}>
                <div className={style.buttonText}>OPEN AS XAPP</div>
              </Button>
            ) : null}
          </div>
        </div>
        <div className={`${style.pageFooter}`}>
          <div className={`${style.scrollDown} ${show ? style.opacity : null}`}>
            <div className={style.text}>scroll down to start</div>
            <div className={style.logo}>
              <Caretdoubleright size={24} stroke={'whitesmoke'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
