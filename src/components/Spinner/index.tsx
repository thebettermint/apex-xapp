import React from 'react';
import styles from './index.module.scss';

import { Hex } from 'src/components/Icons';

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <Hex size={32} />
    </div>
  );
};

export default Spinner;
