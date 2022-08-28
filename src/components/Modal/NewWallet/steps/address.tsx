import React, { useState, useEffect, useRef, ReactElement } from 'react';

import modalStyles from '../../index.module.scss';
import targetStyles from './index.module.scss';

import { Walletalt, Plus, Disc, Pluscircle } from 'src/components/Icons';

import { useStepContext } from 'src/context/step';

import FormInput from 'src/components/Input/FormInput';
import Button from 'src/components/Button';

const Address = () => {
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
          <div className={targetStyles.inputTitle}>Public Address</div>
          <FormInput
            ref={usernameRef}
            className={targetStyles.input}
            type="text"
            value=""
            placeholder="XRPL public address"
            onChange={handleChange}></FormInput>
        </div>

        <div className={targetStyles.inputContainer}>
          <div className={targetStyles.inputTitle}>Name</div>
          <FormInput
            ref={usernameRef}
            className={targetStyles.input}
            type="text"
            value=""
            placeholder="Name"
            onChange={handleChange}></FormInput>
        </div>

        <div className={targetStyles.inputContainer}>
          <div className={targetStyles.inputTitle}>Description</div>
          <FormInput
            ref={usernameRef}
            className={targetStyles.input}
            type="text"
            value=""
            placeholder="Add a desciption for this wallet"
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

export default Address;
