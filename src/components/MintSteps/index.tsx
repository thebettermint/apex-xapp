import React, { useState, useRef, useEffect } from 'react';
import style from './index.module.scss';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../../context/store';

import Landing from './landing';
import Claim from './claim';
import Fund from './fund';
import View from './view';

interface Props {
  page?: any;
}

const Index = ({ page }: Props) => {
  const storeContext = useStoreContext();

  return (
    <>
      <Landing />
      <Fund />
      <Claim />
      <View />
    </>
  );
};

export default Index;
