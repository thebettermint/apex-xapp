import React, { useState, useEffect, useRef, ReactElement } from 'react';

import modalStyles from '../../index.module.scss';
import targetStyles from './index.module.scss';

import { Walletalt, Plus, Disc, Pluscircle } from 'src/components/Icons';

import FormInput from 'src/components/Input/FormInput';
import Button from 'src/components/Button';

import { useStepContext } from 'src/context/step';

const Restore = () => {
  const stepContext = useStepContext();

  const usernameRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <form action="">
      <div className={targetStyles.walletInputModal}>
        <div className={`${modalStyles.sectionTitle} ${modalStyles.blank}`}></div>
        <div className={targetStyles.inputContainer}>
          <div className={targetStyles.inputTitle}>Select a wallet type</div>
        </div>

        <div className={targetStyles.fullButtonContainer}>
          <Button
            className={targetStyles.button}
            type="secondary"
            theme="light"
            height={36}
            onClick={() => console.log('clicked')}>
            familySeed
          </Button>
        </div>

        <div className={targetStyles.inputFullContainer}>
          <div className={targetStyles.inputFullTitle}>
            Please enter your secret recovery key for your wallet
          </div>
        </div>

        <div className={targetStyles.inputFullContainer}>
          <FormInput
            ref={usernameRef}
            className={targetStyles.input}
            type="text"
            value=""
            placeholder="Recovery seed"
            onChange={handleChange}></FormInput>
        </div>

        <div className={`${modalStyles.sectionTitle} ${modalStyles.blank}`}></div>

        <div className={targetStyles.inputContainer}>
          <div className={targetStyles.inputTitle}>Name</div>
          <FormInput
            ref={usernameRef}
            className={targetStyles.input}
            type="text"
            value=""
            placeholder="Tag"
            onChange={handleChange}></FormInput>
        </div>

        <div className={targetStyles.inputContainer}>
          <div className={targetStyles.inputTitle}>Description</div>
          <FormInput
            ref={usernameRef}
            className={targetStyles.input}
            type="text"
            value=""
            placeholder="Add a desciption for this account"
            onChange={handleChange}></FormInput>
        </div>

        <div className={targetStyles.buttonContainer}>
          <Button
            className={targetStyles.button}
            type="secondary"
            theme="light"
            height={36}
            onClick={() => stepContext.close()}>
            NEXT
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Restore;
