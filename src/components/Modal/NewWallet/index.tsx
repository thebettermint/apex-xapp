import React, { Suspense, lazy, useState } from 'react';
import style from '../index.module.scss';

import { StepRouter, StepContextProvider, useStepContext } from 'src/context/step';
import { directory, steps } from './directory';
import ModalHeader from '../ModalHeader';

const App = () => {
  const stepContext = useStepContext();
  return <div className={style.modalContent}>{StepRouter(stepContext, directory)}</div>;
};

const Index = (props: any) => {
  return (
    <StepContextProvider steps={steps} close={props.close}>
      <ModalHeader close={props.close} title={props.title} />
      <App />
    </StepContextProvider>
  );
};

export default Index;
