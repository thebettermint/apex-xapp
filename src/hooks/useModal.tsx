import React from 'react';
import { useState, ReactElement } from 'react';
import style from 'src/components/Modal/index.module.scss';

import { Cross } from 'src/components/Icons';

const useModal = (initialValue: boolean, close_button: boolean) => {
  const [isOpen, SetIsOpen] = useState<boolean>(initialValue);

  const element = (props: any) => {
    const closeButton = (close_button: boolean) => {
      if (close_button) return <Cross onClick={close} size="24px" className="close-button" />;
      return null;
    };

    return isOpen ? (
      <>
        <div className={style.modalOverlay}></div>
        <div className={style.modal}>
          <div className={style.modalWrapper}>
            <div className="button-wrapper">{closeButton(close_button)}</div>
            <header>{props.title}</header>
            <div className="content-wrapper">{props.children}</div>
          </div>
        </div>
      </>
    ) : null;
  };

  const open = () => {
    SetIsOpen(true);
  };

  const close = () => {
    SetIsOpen(false);
  };

  return [element, open, close, isOpen] as const;
};

export default useModal;
