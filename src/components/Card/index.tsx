import React, { useState } from 'react';
import styles from './index.module.scss';

import { MenuDotsVertical, AngleSmallRight, Arrowright, Add } from 'src/components/Icons';

interface Props {
  children?: React.ReactNode;
  data?: any;
}

const Card = ({ children, data }: Props) => {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.title}>{data[index].title.toUpperCase()}</div>
        <div className={styles.menu}>
          <MenuDotsVertical size={12} />
        </div>
      </div>

      <div className={styles.value}>{data[index].value}</div>
      <div className={styles.subtitle}>{data[index].subtitle.toUpperCase()}</div>

      <div className={styles.bottom}>
        <div className={styles.add}>
          <Add size={12} />
        </div>
        <div className={styles.left}>
          <AngleSmallRight size={12} />
        </div>
        <div className={styles.right}>
          <AngleSmallRight size={12} />
        </div>
        <div className={styles.go}>
          <Arrowright size={12} />
        </div>
      </div>
    </div>
  );
};

export default Card;
