import React from 'react';

import style from './index.module.scss';

import Image from 'next/image';
import Background from 'src/components/Assets/images/png/checksum/background-13.png';
import Title from 'src/components/Assets/images/png/checksum/checksum_title_purple.png';
import Logo from 'src/components/Assets/images/png/checksum/logo_purple.png';

import Link from 'next/link';

import Button from '../Button';

import Router from 'next/router';

import ErrorForm from './error';
import LoadingForm from './loading';

interface Props {
  routes?: any;
  error?: boolean;
  loading?: boolean;
}

const Verified = ({ routes, loading, error }: Props) => {
  const handleLogin = () => {
    Router.push('/login');
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.left}>
          <Image
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            alt="Checksum Background"
            src={Background}></Image>
        </div>
        <div className={style.right}>
          <div className={style.logoContainer}>
            <div className={style.logo}>
              <Image alt="Checksum Logo" src={Logo}></Image>
            </div>
            <div className={style.title}>
              <Image alt="Checksum Title" src={Title}></Image>
            </div>
          </div>

          <form className={style.form} action="">
            {loading ? (
              <LoadingForm />
            ) : error ? (
              <ErrorForm />
            ) : (
              <>
                <div className={style.title}>EMAIL VERIFIED</div>
                <div className={style.subtitle}>
                  Your email has been verified. Try to login using your new account.
                </div>

                <div className={style.active}>
                  <Button
                    className={style.button}
                    type="secondary"
                    theme="light"
                    height={40}
                    onClick={handleLogin}>
                    LOGIN
                  </Button>
                </div>

                <Link href="/signup">
                  <div className={style.signup}>dont have an account? sign up for free</div>
                </Link>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Verified;
