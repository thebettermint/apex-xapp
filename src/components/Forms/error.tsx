import React from 'react';

import style from './index.module.scss';

import Image from 'next/image';
import Background from 'src/components/Assets/images/png/checksum/background-13.png';
import Title from 'src/components/Assets/images/png/checksum/checksum_title_purple.png';
import Logo from 'src/components/Assets/images/png/checksum/logo_purple.png';

import Button from '../Button';

import Router from 'next/router';

interface Props {
  routes?: any;
}

const Error = ({ routes }: Props) => {
  const handleBack = () => {
    Router.push('/landing');
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
