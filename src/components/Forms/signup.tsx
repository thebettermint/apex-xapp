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

import Email from './email';
import ErrorForm from './error';

interface Props {
  routes?: any;
}

const Signup = ({ routes }: Props) => {
  const router = useRouter();

  const [buttonActive, setButtonActive] = useState<Boolean>(false);
  const [stage, setStage] = useState<number>(0);

  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (
      usernameRef.current?.value &&
      emailRef.current?.value &&
      confirmRef.current?.value &&
      passwordRef.current?.value
    )
      return setButtonActive(true);
    if (buttonActive) return setButtonActive(false);
  });

  const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
    if (
      !e.target?.value ||
      !usernameRef.current?.value ||
      !emailRef.current?.value ||
      !confirmRef.current?.value ||
      !passwordRef.current?.value
    )
      return setButtonActive(false);
    return setButtonActive(true);
  };

  const handleNewUser = async () => {
    if (
      !usernameRef.current?.value ||
      !emailRef.current?.value ||
      !confirmRef.current?.value ||
      !passwordRef.current?.value
    )
      return;

    let response = await userService.register({
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmRef.current.value,
      acceptTerms: false,
    });
    if (response instanceof Error) return setStage(2);
    setStage(1);
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
          {/* <div className={style.headerBar}></div> */}
          <div className={style.logoContainer}>
            <div className={style.logo}>
              <Image alt="Checksum Logo" src={Logo}></Image>
            </div>
            <div className={style.title}>
              <Image alt="Checksum Title" src={Title}></Image>
            </div>
          </div>

          <form className={style.form} action="">
            {stage == 0 ? (
              <>
                <div className={style.title}>SIGN UP</div>
                <div className={style.subtitle}>
                  Welcome to checksum. Please enter your details.
                </div>
                <Input
                  ref={usernameRef}
                  className={style.input}
                  type="text"
                  value=""
                  placeholder="username"
                  label="username"
                  onChange={handleChange}></Input>

                <Input
                  ref={emailRef}
                  className={style.input}
                  type="text"
                  value=""
                  placeholder="email"
                  label="email"
                  onChange={handleChange}></Input>

                <Input
                  ref={passwordRef}
                  className={style.input}
                  type="password"
                  value=""
                  placeholder="password"
                  label="password"
                  onChange={handleChange}></Input>

                <Input
                  ref={confirmRef}
                  className={style.input}
                  type="password"
                  value=""
                  placeholder="confirm password"
                  label="confirm password"
                  onChange={handleChange}></Input>

                <div className={buttonActive ? style.active : style.disable}>
                  <Button
                    className={style.button}
                    type="secondary"
                    theme="light"
                    height={36}
                    onClick={handleNewUser}>
                    SIGN UP
                  </Button>
                </div>

                <Link href="/login">
                  <div className={style.signup}>already have an account? login</div>
                </Link>
              </>
            ) : stage == 1 ? (
              <Email email={emailRef.current?.value} />
            ) : (
              <ErrorForm />
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
