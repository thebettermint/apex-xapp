import React, { useState, useEffect, useRef, ReactElement } from 'react';
import style from './index.module.scss';

import FormInput from '../Input/FormInput';
import Button from 'src/components/Button';

import ModalHeader from './ModalHeader';

const NewPayment = (props: any) => {
  const usernameRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const handleClick = () => {
    console.log('clicked');
  };
  return (
    <>
      <ModalHeader close={props.close} title={props.title} />
      <div className={style.modalContent}>
        <form action="">
          <div className={`${style.sectionTitle} ${style.blank}`}></div>

          <div className={style.inputContainer}>
            <div className={style.inputTitle}>Payment To</div>
            <FormInput
              ref={usernameRef}
              className={style.input}
              type="text"
              value=""
              placeholder="XRPL Wallet Address"
              onChange={handleChange}></FormInput>
          </div>

          <div className={style.inputContainer}>
            <div className={style.inputTitle}>Destination Tag</div>
            <FormInput
              ref={usernameRef}
              className={style.input}
              type="text"
              value=""
              placeholder="Destination tag"
              onChange={handleChange}></FormInput>
          </div>

          <div className={style.inputContainer}>
            <div className={style.inputTitle}>Amount</div>
            <FormInput
              ref={usernameRef}
              className={style.input}
              type="text"
              value=""
              placeholder="Select a currency"
              onChange={handleChange}></FormInput>
          </div>

          <div className={style.inputContainer}>
            <div className={style.inputTitle}>Memo</div>
            <FormInput
              ref={usernameRef}
              className={style.input}
              type="text"
              value=""
              placeholder="Attach a memo to the transaction"
              onChange={handleChange}></FormInput>
          </div>

          <div className={style.buttonContainer}>
            <Button
              className={style.button}
              type="secondary"
              theme="light"
              height={36}
              onClick={() => console.log('clicked')}>
              SUBMIT
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewPayment;
