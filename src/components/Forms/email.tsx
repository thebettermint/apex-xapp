import React, { useState, useRef, useEffect } from 'react';

import style from './index.module.scss';

import { useStoreContext } from '../../context/store';
import { Router, useRouter } from 'next/router';

import Image from 'next/image';
import Background from 'src/components/Assets/images/png/checksum/background-13.png';
import Title from 'src/components/Assets/images/png/checksum/checksum_title_purple.png';
import Logo from 'src/components/Assets/images/png/checksum/logo_purple.png';

import userService from 'src/services/user.service';

import Link from 'next/link';

import Input from '../Input';

import Button from '../Button';

interface Props {
  email?: string;
}

const Email = ({ email }: Props) => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/landing');
  };

  return (
    <>
      <div className={style.title}>Email Sent</div>
      <div className={style.subtitle}>
        {`We sent a verification email. Verify your address to finish
              setting up your account.`}
      </div>

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

export default Email;
