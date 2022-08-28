import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';

import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('landing');
  }, []);
  return <div className={styles.container}>{}</div>;
};

export default Home;
