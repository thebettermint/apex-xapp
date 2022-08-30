import React, { useState, useRef, useEffect } from 'react';
import style from './index.module.scss';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../../context/store';

import Landing from './landing';
import Claim from './claim';
import Fund from './fund';
import View from './view';
import SignIn from './signin';
import useMobileDetect from 'src/hooks/useMobileDetect';

interface Props {
  page?: any;
}

const Index = ({ page }: Props) => {
  const storeContext = useStoreContext();
  const mobileDetect = useMobileDetect();

  return (
    <>
      <Landing />
      {mobileDetect.isXApp() ? null : <SignIn />}
      <Fund />
      <Claim />
      <View />
    </>
  );
};

export default Index;
