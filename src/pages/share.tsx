import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/index.module.scss';
import Login from 'src/components/Forms/login';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import Image from 'next/image';

import { useStoreContext } from '../context/store';
import { useState, useEffect, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import NFTQrCode from 'src/components/Assets/images/jpg/NFTQrCode.jpg';

import { AngleSmallRight } from 'src/components/Icons';

import xAppService from 'src/services/xapp.service';
import useMobileDetect from 'src/hooks/useMobileDetect';

const urlArray = [
  {
    title: 'xls20d network',
    desc: 'This is a code for adding the xls20d network node to your xumm mobile application',
    url: '',
    comp: <Image src={NFTQrCode} width={240} height={240} className={styles.qrCode} />,
  },
  {
    title: 'our webapp',
    desc: 'share our webapp',
    url: 'https://apex-xapp-six.vercel.app/',
    comp: (
      <QRCodeCanvas
        value={'https://apex-xapp-six.vercel.app/'}
        level={'H'}
        size={240}
        className={styles.qrCode}
      />
    ),
  },
  {
    title: 'our xApp',
    desc: 'This is a code for adding our sandboxed xApp to your xumm mobile application',
    url: 'https://xumm.app/detect/xapp:intercoder.apexdemo',
    comp: (
      <QRCodeCanvas
        value={'https://xumm.app/detect/xapp:intercoder.apexdemo'}
        level={'H'}
        size={240}
        className={styles.qrCode}
      />
    ),
  },
  {
    title: 'linktree',
    desc: 'This is a code for accessing whirledlabs projects',
    url: 'https://linktr.ee/whirledlabs',
    comp: (
      <QRCodeCanvas
        value={'https://linktr.ee/whirledlabs'}
        size={240}
        level={'H'}
        className={styles.qrCode}
      />
    ),
  },
];

const Share: NextPage = () => {
  const storeContext = useStoreContext();
  const mobileDetect = useMobileDetect();

  const [stage, setStage] = useState<number>(0);

  const handleLeft = () => {
    setStage((stage: number) => {
      if (stage == 0) return urlArray.length - 1;
      return stage - 1;
    });
  };

  const handleRight = () => {
    setStage((stage: number) => {
      if (stage == urlArray.length - 1) return 0;
      return stage + 1;
    });
  };

  const openExternalLink = (url: string) => {
    if (mobileDetect.isXApp()) return xAppService.openExternalBrowser(url, window);
    return window.open(url);
  };

  return (
    <>
      <Head>
        <title>apex-xapp</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.page}>
        <div className={`${styles.pageHeader}`}>
          <div>APEX DEVELOPER SUMMIT</div>
          <div>Share</div>
        </div>
        <div className={styles.heroWrapper}>
          <div className={styles.slider}>
            <div className={styles.left} onClick={handleLeft}>
              <AngleSmallRight size={24} fill={'white'} stroke={'white'} />
            </div>

            <div className={styles.qr}>
              <div className={styles.title}>{urlArray[stage].title}</div>
              {urlArray[stage].comp}
              <div className={styles.link}>
                <a onClick={() => openExternalLink(urlArray[stage].url)}>{urlArray[stage].url}</a>
              </div>
              <div className={styles.description}>{urlArray[stage].desc}</div>
            </div>

            <div className={styles.right} onClick={handleRight}>
              <AngleSmallRight size={24} fill={'white'} stroke={'white'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;
