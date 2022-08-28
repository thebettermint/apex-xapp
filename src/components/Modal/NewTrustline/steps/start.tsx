import React, { useState, useEffect, useRef, ReactElement } from 'react';

import modalStyles from '../../index.module.scss';
import targetStyles from './index.module.scss';

import { Walletalt, Plus, Disc, Pluscircle, AngleSmallRight } from 'src/components/Icons';

import Button from 'src/components/Button';

import FlagUSA from 'src/components/Assets/images/svg/flags/Flag_of_the_United_States.svg';
import FlagCol from 'src/components/Assets/images/svg/flags/Flag_of_Colombia.svg';
import FlagEU from 'src/components/Assets/images/svg/flags/Flag_of_Europe.svg';
import FlagJapan from 'src/components/Assets/images/svg/flags/Flag_of_Japan.svg';
import FlagFin from 'src/components/Assets/images/svg/flags/Flag_of_Finland.svg';

import CircleUSA from 'src/components/Assets/images/svg/circles/us-circle.svg';
import CircleCol from 'src/components/Assets/images/svg/circles/cop-circle.svg';
import CircleEU from 'src/components/Assets/images/svg/circles/eur-circle.svg';
import CircleJapan from 'src/components/Assets/images/svg/circles/jpy-circle.svg';
import CircleFin from 'src/components/Assets/images/svg/circles/fin-circle.svg';

import { useStepContext } from 'src/context/step';
import { useModalContext } from 'src/context/modal';

const flagArray = [
  {
    title: 'US Digital Currency',
    currency: 'US Dollar',
    description: 'Federal Reserve of the United States',
    issuer: 'rzQaZYpTJdzBcRvcCjarvpuatJVnYNmWi',
    ticker: 'mUSD',
    hex: '6D55534400000000000000000000000000000000',
    svg: <FlagUSA />,
    logo: <CircleUSA height={56} width={56} />,
  },
  {
    title: 'Colombian Digital Currency',
    currency: 'Colombian Peso',
    description: 'Bank of Colombia',
    issuer: 'rp2YsQ3p8p2Exujrat16Saz7SxWfF1VjR7',
    ticker: 'mCOP',
    hex: '6D434F5000000000000000000000000000000000',
    svg: <FlagCol />,
    logo: <CircleCol height={56} width={56} />,
  },
  {
    title: 'European Digital Currency',
    currency: 'Euro',
    description: 'European Central Bank',
    issuer: 'rnHT3AKAD7UYpAjNx5vg8cnbWmzhq6PFRz',
    ticker: 'mEUR',
    hex: '6D45555200000000000000000000000000000000',
    svg: <FlagEU />,
    logo: <CircleEU height={56} width={56} />,
  },
  {
    title: 'Japan Digital Currency',
    currency: 'Yen',
    description: 'Bank of Japan',
    issuer: 'rLVBQjwG9MB9nJcmUdYKS9AVsqEKaAyCg2',
    ticker: 'mJPY',
    hex: '6D4A505900000000000000000000000000000000',
    svg: <FlagJapan />,
    logo: <CircleJapan height={56} width={56} />,
  },
  {
    title: 'Finnish Digital Currency',
    currency: 'Markka',
    description: 'Bank of Finland',
    issuer: 'rnMgRCqXKmrTLHAuFkV2dx5qvJybYta1Ya',
    ticker: 'mFIM',
    hex: '6D46494D00000000000000000000000000000000',
    svg: <FlagFin />,
    logo: <CircleFin height={56} width={56} />,
  },
];

const Start = () => {
  const [card, setCard] = useState<number>(0);
  const stepContext = useStepContext();
  const modalContext = useModalContext();

  const handleClick = (page: string) => {
    stepContext.nav(page);
    modalContext.setBack(true);
  };

  const handleLeft = () => {
    setCard((card: number) => {
      if (card == 0) return flagArray.length - 1;
      return card - 1;
    });
  };

  const handleRight = () => {
    setCard((card: number) => {
      if (card == flagArray.length - 1) return 0;
      return card + 1;
    });
  };

  useEffect(() => {
    modalContext.setBack(false);
  });

  return (
    <form action="">
      <div className={targetStyles.start}>
        <div className={targetStyles.container}>
          <div className={targetStyles.flagContainer}>
            <div className={targetStyles.flag}>{flagArray[card].svg}</div>
          </div>

          <div className={targetStyles.slider}>
            <div className={targetStyles.left} onClick={handleLeft}>
              <AngleSmallRight size={24} stroke={'black'} />
            </div>

            <div className={targetStyles.content}>
              <div className={targetStyles.title}>{flagArray[card].title.toUpperCase()}</div>
              <div className={targetStyles.currency}>{flagArray[card].currency}</div>
              <div className={targetStyles.desc}>{flagArray[card].description}</div>
              <div className={targetStyles.issuer}>{flagArray[card].issuer}</div>
              <div className={targetStyles.ticker}>{flagArray[card].ticker}</div>
              <div className={targetStyles.logo}>{flagArray[card].logo}</div>
            </div>

            <div className={targetStyles.right} onClick={handleRight}>
              <AngleSmallRight size={24} stroke={'black'} />
            </div>
          </div>
        </div>

        <div className={targetStyles.buttonContainer}>
          <Button
            className={targetStyles.button}
            type="secondary"
            theme="light"
            height={36}
            onClick={() => stepContext.close()}>
            ADD TRUST
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Start;
