import React, { useState, useRef, useEffect, forwardRef, Ref } from 'react';
import style from './index.module.scss';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../../context/store';

import { Caretdoubleright } from 'src/components/Icons';

import Button from 'src/components/Button';
import useMobileDetect from 'src/hooks/useMobileDetect';

import socials from 'src/lib/sample/socials';

interface Props {
  start?: any;
}

const Landing = React.forwardRef(({ start }: Props, ref: Ref<any> | undefined) => {
  const storeContext = useStoreContext();
  const mobileDetect = useMobileDetect();

  const [show, setShow] = useState<boolean>(true);
  const [isXApp, setIsXApp] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(true);

  const openExternalLink = (url: string) => {
    if (mobileDetect.isMobile()) return window.location.assign(url);
    window.open(url, '_blank');
  };

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

  useEffect(() => {
    setIsMobile(mobileDetect.isMobile());
    setIsXApp(mobileDetect.isXApp());
  }, []);

  return (
    <>
      <div ref={ref} className={style.page}>
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
              onClick={() =>
                start.current.scrollIntoView({
                  behavior: 'smooth',
                  block: 'end',
                  inline: 'nearest',
                })
              }>
              <div className={style.buttonText}>START</div>
            </Button>
            {isMobile && !isXApp ? (
              <Button
                className={style.button}
                type="secondary"
                theme="light"
                height={40}
                onClick={() => openExternalLink(socials[2].url)}>
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
});

export default Landing;
