import React, { useState, useEffect, useRef, ReactElement } from 'react';
import style from './index.module.scss';

import FormInput from '../Input/FormInput';
import Button from 'src/components/Button';
import ModalHeader from './ModalHeader';

const NewContractor = (props: any) => {
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
            <div className={style.inputTitle}>Name</div>
            <FormInput
              ref={usernameRef}
              className={style.input}
              type="text"
              value=""
              placeholder="Name"
              onChange={handleChange}></FormInput>
          </div>

          <div className={style.inputContainer}>
            <div className={style.inputTitle}>Email</div>
            <FormInput
              ref={usernameRef}
              className={style.input}
              type="text"
              value=""
              placeholder="Email address"
              onChange={handleChange}></FormInput>
          </div>

          <div className={style.inputContainer}>
            <div className={style.inputTitle}>Wallet</div>
            <FormInput
              ref={usernameRef}
              className={style.input}
              type="text"
              value=""
              placeholder="xrpl wallet address"
              onChange={handleChange}></FormInput>
          </div>

          <div className={style.inputContainer}>
            <div className={style.inputTitle}>Destination Tag</div>
            <FormInput
              ref={usernameRef}
              className={style.input}
              type="text"
              value=""
              placeholder="Destination Tag"
              onChange={handleChange}></FormInput>
          </div>

          <div className={style.inputContainer}>
            <div className={style.inputTitle}>Description</div>
            <FormInput
              ref={usernameRef}
              className={style.input}
              type="text"
              value=""
              placeholder="Add a description"
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

export default NewContractor;
