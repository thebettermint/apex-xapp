import React, { useState } from 'react';
import styles from './index.module.scss';

import { MenuDotsVertical, AngleSmallRight, Arrowright, Add } from 'src/components/Icons';

interface Props {
  children?: React.ReactNode;
  title?: any;
}

const NewCard = ({ children, title }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.value}>
        <Add size={24} fill={'#6e30d7ff'} />
      </div>
      <div className={styles.subtitle}>{title.toUpperCase()}</div>
    </div>
  );
};

export default NewCard;
