import React, { useState, createContext, useContext } from 'react';

import xAppService from 'src/services/xapp.service';

interface IContextProps {
  tokenData: any;
  init: (oneTimeToken: string) => void;
}

const XAppContext = createContext({} as IContextProps);

export const useXAppContext = () => useContext(XAppContext);

const XAppContextProvider = (props: any) => {
  const [tokenData, setTokenData] = useState<any>(undefined);
  const [fetched, setFetched] = useState<any>(false);

  const init = async (oneTimeToken: string) => {
    if (tokenData && !fetched) return;
    setFetched(true);

    let data = await xAppService.getTokenData({ ott: oneTimeToken });
    console.log(data);

    setTokenData(data);
  };

  return (
    <XAppContext.Provider value={{ tokenData: tokenData, init: init }}>
      {props.children}
    </XAppContext.Provider>
  );
};

export default XAppContextProvider;
