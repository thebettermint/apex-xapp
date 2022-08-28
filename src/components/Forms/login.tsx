import React, { useState, useRef, useEffect } from 'react';

import style from './index.module.scss';

import { useStoreContext } from '../../context/store';
import { useRouter } from 'next/router';

import Link from 'next/link';

import Input from '../Input';

import Button from '../Button';

import userService from 'src/services/user.service';
import Router from 'next/router';

import { Profile, Emailclosed, Keyhold, Arrowclockwiseback, User } from 'src/components/Icons';

interface Props {
  routes?: any;
}

const Login = ({ routes }: Props) => {
  const router = useRouter();

  const [buttonActive, setButtonActive] = useState<Boolean>(false);
  const [vis, setVis] = useState<boolean>(false);

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (usernameRef.current?.value && passwordRef.current?.value) return setButtonActive(true);
    if (buttonActive) return setButtonActive(false);
  }, []);

  const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target?.value || !usernameRef.current?.value || !passwordRef.current?.value)
      return setButtonActive(false);
    return setButtonActive(true);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    if (
      !e.clipboardData.getData('text') ||
      !usernameRef.current?.value ||
      !passwordRef.current?.value
    )
      return setButtonActive(false);
    return setButtonActive(true);
  };

  const handleLogin = async () => {
    if (!usernameRef.current?.value || !passwordRef.current?.value) return;
    let response = await userService.authenticate({
      user: usernameRef.current.value,
      pass: passwordRef.current.value,
    });
    if (response instanceof Error) return console.log(response);
    Router.push('/dashboard');
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.right}>
          <form className={style.form} action="">
            <div className={style.title}>WELCOME BACK</div>
            <div className={style.subtitle}>Welcome back. Please enter your details.</div>
            <Input
              ref={usernameRef}
              className={style.input}
              type="text"
              value=""
              placeholder="username"
              label="username"
              onChange={handleChange}>
              <div className={style.icon}>
                <Profile size={16} className={style.profile} />
              </div>
            </Input>

            <Input
              ref={passwordRef}
              className={style.input}
              type={!vis ? 'password' : 'text'}
              value=""
              placeholder="password"
              label="password"
              onChange={handleChange}>
              <div className={style.icon} onClick={() => setVis(!vis)}>
                <Keyhold size={16} />
              </div>
              <Link href="/forgot-password">
                <div className={style.forgot}>forgot password?</div>
              </Link>
            </Input>

            <div className={buttonActive ? style.active : style.disable}>
              <Button
                className={style.button}
                type="secondary"
                theme="light"
                height={40}
                onClick={handleLogin}>
                ENTER
              </Button>
            </div>

            <Link href="/signup">
              <div className={style.signup}>dont have an account? sign up for free</div>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
