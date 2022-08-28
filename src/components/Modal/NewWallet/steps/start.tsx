import React, { useState, useEffect, useRef, ReactElement } from 'react';

import modalStyles from '../../index.module.scss';
import targetStyles from './index.module.scss';

import { Walletalt, Plus, Disc, Pluscircle } from 'src/components/Icons';

import { useStepContext } from 'src/context/step';
import { useModalContext } from 'src/context/modal';

const Start = () => {
  const stepContext = useStepContext();
  const modalContext = useModalContext();

  const handleClick = (page: string) => {
    stepContext.nav(page);
    modalContext.setBack(true);
  };

  useEffect(() => {
    modalContext.setBack(false);
  });

  return (
    <form action="">
      <div className={targetStyles.start}>
        <div className={targetStyles.container} onClick={() => handleClick('new')}>
          <div className={targetStyles.logo}>
            <Walletalt size={26} fill={'#6e30d7ff'} stroke={'#6e30d7ff'} />
          </div>
          <div className={targetStyles.wrapper}>
            <div className={targetStyles.title}>CREATE A NEW WALLET</div>
            <p className={targetStyles.description}>Create a new wallet with checksum</p>
          </div>
        </div>

        <div className={targetStyles.container} onClick={() => handleClick('address')}>
          <div className={targetStyles.logo}>
            <Pluscircle size={24} fill={'#6e30d7ff'} stroke={'#6e30d7ff'} />
          </div>
          <div className={targetStyles.wrapper}>
            <div className={targetStyles.title}>ADD PUBLIC WALLET ADDRESS</div>
            <p className={targetStyles.description}>
              Add a wallet with a public address. You will be able to receive funds, but you will
              not be able to send funds until you add your recovery key.
            </p>
          </div>
        </div>

        <div className={targetStyles.container} onClick={() => handleClick('restore')}>
          <div className={targetStyles.logo}>
            <Disc size={24} fill={'#6e30d7ff'} stroke={'#6e30d7ff'} />
          </div>
          <div className={targetStyles.wrapper}>
            <div className={targetStyles.title}>RECOVER WALLET FROM BACKUP</div>
            <p className={targetStyles.description}>Add a recovery key for wallet</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Start;
