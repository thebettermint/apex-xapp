import React, { Dispatch, LegacyRef } from 'react';
import map from './map';
import ModalWrapper from './ModalWrapper';
import Portal from 'src/components/Portal';
import { ModalContextProvider } from 'src/context/modal';

interface Props {
  ref?: LegacyRef<SVGSVGElement>;
  name: string;
  title?: string;
  close: Dispatch<any>;
}

const Modal = ({ ref, title, name, close, ...rest }: Props) => {
  const ModalComponent = map[name];

  return Portal(
    <ModalContextProvider>
      <ModalWrapper>
        <ModalComponent ref={ref} title={title} close={close} {...rest} />
      </ModalWrapper>
    </ModalContextProvider>
  );
};

export default Modal;
