import React from 'react';
import style from './index.module.scss';

const ModalWrapper = (props: any) => {
  return (
    <>
      <div className={style.modalOverlay}></div>
      <div className={style.modal}>
        <div className={style.modalWrapper}>
          <div className={style.banner}></div>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default ModalWrapper;
