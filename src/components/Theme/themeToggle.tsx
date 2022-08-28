import React, { useEffect, useState } from 'react';

import { Sun } from '../Icons';
import { useStoreContext } from '../../context/store';
import style from './index.module.scss';

const ThemeToggle = () => {
  const storeContext = useStoreContext();

  const [theme, setTheme] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTheme(storeContext.theme[0]);
    }
  }, [storeContext.theme[0]]);

  const handleThemeChange = () => {
    if (storeContext.theme[0] == 'light') storeContext.theme[1]('dark');
    if (storeContext.theme[0] == 'dark') storeContext.theme[1]('light');
  };

  return (
    <div onClick={handleThemeChange} className={style.toggle}>
      <Sun color={theme === 'light' ? 'black' : 'white'} size={18} />
    </div>
  );
};

export default ThemeToggle;
