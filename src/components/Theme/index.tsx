import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

import { useStoreContext } from '../../context/store';

interface Props {
  children?: React.ReactNode;
}

const Theme = ({ children }: Props) => {
  const [theme, setTheme] = useState(undefined);
  const storeContext = useStoreContext();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTheme(storeContext.theme[0]);
    }
  }, [storeContext.theme[0]]);

  return <div className={theme}>{children}</div>;
};

export default Theme;
