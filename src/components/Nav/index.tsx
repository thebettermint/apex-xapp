import React, { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';
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

import { useRouter } from 'next/router';

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

const Nav = ({ show, setShow }: Props) => {
  const router = useRouter();
  const hamRef = useRef<HTMLDivElement>(null);
  const storeContext = useStoreContext();
  const [user, setUser] = useState<undefined | string>(undefined);
  const [page, setPage] = useState<string>(router.pathname.split('/')[1]);

  //const [isOpen, setIsOpen] = useState<boolean>(show);

  const handleNavClick = (page: string) => {
    router.push(`/${page}`);
    setShow(!show);
    setPage(page);
  };

  return (
    <>
      <div className={`${style.panel} ${show ? style.show : null}`}>
        <div className={style.header}>
          {
            //YOUR VERY FIRST NFT WORKSHOP
          }
        </div>
        <div className={style.navCategories}>
          <div onClick={() => handleNavClick('')} className={page == '' ? style.active : 'null'}>
            home
          </div>
          <div
            onClick={() => handleNavClick('wallet')}
            className={page == 'wallet' ? style.active : 'null'}>
            wallet
          </div>
          <div
            onClick={() => handleNavClick('visualize')}
            className={page == 'visualize' ? style.active : 'null'}>
            visualize
          </div>
          <div
            onClick={() => handleNavClick('share')}
            className={page == 'share' ? style.active : 'null'}>
            share
          </div>
          <div
            onClick={() => handleNavClick('contact')}
            className={page == 'contact' ? style.active : 'null'}>
            contact
          </div>
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
