import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

import Title from '../Assets/images/svg/thebettermint/boilerplate.svg';
import LinkLogo from '../Assets/images/png/thebettermint/horizontal.png';

import Image from 'next/image';

import { Discord, Facebook, Twitter, Github, Telegram } from '../Icons';

import { useStoreContext } from '../../context/store';

const Footer = () => {
  const storeContext = useStoreContext();

  const [theme, setTheme] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTheme(storeContext.theme[0]);
    }
  }, [storeContext.theme[0]]);

  return (
    <footer className={styles.footer}>
      <div className={styles.tag}>
        <Title
          fill={theme === 'dark' ? 'white' : null}
          width={'90%'}
          height={42}
          style={{ margin: '10px' }}
        />

        <div className={styles.imgWrapper}>
          <Image src={LinkLogo} height={154} width={668} />
        </div>
      </div>

      <div className={styles.socials}>
        <Discord fill={theme === 'dark' ? 'white' : null} size={24} />
        <Facebook fill={theme === 'dark' ? 'white' : null} size={24} />
        <Twitter fill={theme === 'dark' ? 'white' : null} size={24} />
        <Telegram fill={theme === 'dark' ? 'white' : null} size={24} />
        <Github fill={theme === 'dark' ? 'white' : null} size={24} />
      </div>
    </footer>
  );
};

export default Footer;
