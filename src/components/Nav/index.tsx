import React, { useState, useRef, useEffect } from 'react';
import style from './index.module.scss';
import { categories } from './categories';
import Link from 'next/link';
import Title from 'src/components/Assets/images/png/checksum/checksum_title_purple.png';
import Logo from 'src/components/Assets/images/png/checksum/logo_purple.png';
import Image from 'next/image';
import LogoGapped from 'src/components/Assets/images/svg/checksum/logo_white_final.svg';
import LogoTitle from 'src/components/Assets/images/svg/checksum/title_white_final.svg';

import { axiosPublic } from '@/lib/axios/axiosPublic';
import { axiosPrivate } from '@/lib/axios/axiosPrivate';

import { useStoreContext } from '../../context/store';

interface Props {
  show: boolean;
}

const Nav = ({ show }: Props) => {
  const hamRef = useRef<HTMLDivElement>(null);
  const storeContext = useStoreContext();
  const [user, setUser] = useState<undefined | string>(undefined);

  const handleCollapse = () => storeContext.collapse[1](!storeContext.collapse[0]);

  return (
    <>
      <div className={`${style.panel} ${show ? style.show : null}`}>
        <div className={style.header}>
          {
            //YOUR VERY FIRST NFT WORKSHOP
          }
        </div>
        <div className={style.navCategories}>
          <div>home</div>
          <div>wallet</div>
          <div>visualize</div>
          <div>share</div>
          <div>contact</div>
        </div>
        <div className={style.pageHeader}>
          <div>APEX DEVELOPER SUMMIT</div>
          <div>NFT Workshop</div>
        </div>
      </div>
    </>
  );
};

export default Nav;
