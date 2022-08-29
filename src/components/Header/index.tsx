import React, { useState, useRef, useEffect } from 'react';

import style from './index.module.scss';

import { useStoreContext } from '../../context/store';
import { useRouter } from 'next/router';

import Nav from 'src/components/Nav';

import {
  Plus,
  MenuDotsVertical,
  AngleSmallRight,
  Arrowright,
  Magnifyingglass,
  Bell,
  Bellsimple,
  Ham,
  Cross,
} from '../Icons';

import DropDownButton from '../Button/dropdown';

import Link from 'next/link';

interface Props {
  routes?: any;
}

const Header = ({ routes }: Props) => {
  const router = useRouter();
  const storeContext = useStoreContext();

  const [theme, setTheme] = useState('');
  const [bg, setBg] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  const parseRoute = () => {
    let parse = router.pathname.split('/').map((route: string) => {
      if (routes.indexOf(route) > -1) return;
      return route;
    });
    console.log(parse);
  };

  useEffect(() => {
    window.onscroll = function () {
      setBg(true);
    };

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        setBg(false);
        return;
      }
    });
  });

  return (
    <>
      <div className={`${style.header}`}>
        <div className={`${style.bg} ${bg ? style.opacity : null}`}></div>
        <div className={style.headerLeft}></div>

        <div className={`${style.headerCenter}`}></div>

        <div className={style.headerRight} onClick={() => setActive(!active)}>
          {!active ? <Ham size={18} fill={'white'} /> : <Cross size={18} fill={'white'} />}
        </div>
      </div>

      <Nav show={active ? true : false} setShow={setActive} />
    </>
  );
};

export default Header;
