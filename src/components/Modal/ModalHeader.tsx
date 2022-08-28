import React from 'react';
import style from './index.module.scss';

import { Cross, ArrowLeft } from 'src/components/Icons';

import { useModalContext } from 'src/context/modal';
import { useStepContext } from 'src/context/step';

const ModalHeader = (props: any) => {
  const modalContext = useModalContext();
  const stepContext = useStepContext();

  const handleClose = () => {
    props.close(undefined);
  };

  const handleBack = () => {
    stepContext.back();
  };

  return (
    <>
      <div className={style.titleContainer}>
        {!modalContext.back ? (
          <div className={style.buttonWrapper} onClick={handleClose}>
            <Cross size={12} />
          </div>
        ) : (
          <div className={style.buttonWrapper} onClick={handleBack}>
            <ArrowLeft size={16} />
          </div>
        )}
        <div className={style.title}>{props.title.toUpperCase()}</div>
      </div>
      {props.children}
    </>
  );
};

export default ModalHeader;
