import React, { useState, useRef, useEffect } from 'react';

import style from './number.module.scss';

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
  number?: number;
  status?: boolean;
}

const Number = ({ number, status }: Props) => {
  const router = useRouter();
  const storeContext = useStoreContext();

  const [theme, setTheme] = useState('');
  const [bg, setBg] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  return <div className={`${style.circle}`}>{number ? number : 1}</div>;
};

export default Number;
