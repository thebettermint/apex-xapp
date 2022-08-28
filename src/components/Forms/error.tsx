import React from 'react';

import style from './index.module.scss';

import Button from '../Button';

import Router from 'next/router';

interface Props {
  routes?: any;
}

const Error = ({ routes }: Props) => {
  const handleBack = () => {
    Router.push('/xapp');
  };

  return (
    <>
      <div className={style.title}>Oops</div>
      <div className={style.subtitle}>Something went wrong. Go back to login.</div>

      <div className={style.active}>
        <Button
          className={style.button}
          type="secondary"
          theme="light"
          height={40}
          onClick={handleBack}>
          BACK
        </Button>
      </div>
    </>
  );
};

export default Error;
