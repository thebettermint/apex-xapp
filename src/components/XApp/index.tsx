import React, { Dispatch, lazy, SetStateAction, Suspense, useEffect } from 'react';
import style from './index.module.scss';
import Button from '../Button';

import SignContextProvider, { useSignContext } from './context';

interface Props {
  request: any;
  size: number;
  baseUrl: string;
  route: string;
  xumm_api_key: string;
  header: Boolean;
  showQR: Boolean;
  showButtons: Boolean;
  setState?: Dispatch<SetStateAction<any>>;
}

const Factory = lazy(() => import('./factory'));

const Index = ({
  request,
  size,
  xumm_api_key,
  baseUrl,
  route,
  header,
  showQR,
  showButtons,
  setState,
}: Props) => {
  return (
    <SignContextProvider setState={setState}>
      <Suspense fallback={<div>Loading...</div>}>
        <Factory
          size={size}
          request={request}
          baseUrl={baseUrl}
          route={route}
          xumm_api_key={xumm_api_key}
          header={header}
          showButtons={showButtons}
          showQR={showQR}
        />
      </Suspense>
    </SignContextProvider>
  );
};

export default Index;
