import React, { useState, useEffect, useRef, ReactElement } from 'react';
import style from './index.module.scss';
import ModalHeader from './ModalHeader';

const NewPayLink = (props: any) => {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <>
      <ModalHeader close={props.close} title={props.title} />
      <div className={style.modalContent}>
        <form className="bg-white m-3 p-3 position-relative overflow-visible">
          <div className="mb-0 mt-2">Common Issuers</div>

          <button className="custom-button" type="button" onClick={handleClick}>
            Custom
          </button>

          <div className="mb-2 mt-3">Estimated Fee: 0.0000001 XRP</div>

          <div className="d-flex justify-content-end pt-3"></div>
        </form>
      </div>
    </>
  );
};

export default NewPayLink;
