import React, { useState, useRef, useEffect, createRef } from 'react';
import style from './index.module.scss';

import Spinner from '../Spinner';

const Index = () => {
  return (
    <div className={style.page}>
      <Spinner />
      <div className={style.msg}>hang tight</div>
    </div>
  );
};

export default Index;
