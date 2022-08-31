import React, {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  ReactElement,
  useEffect,
} from 'react';

import xAppService from 'src/services/xapp.service';

interface IContextProps {
  tokenData: any;
}

const XAppContext = createContext({} as IContextProps);

export const useXAppContext = () => useContext(XAppContext);

const XAppContextProvider = (props: any) => {
  const [tokenData, setTokenData] = useState<any>(undefined);

  const init = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const oneTimeToken = urlParams.get('xAppToken') || '';
    let data = await xAppService.getTokenData({ ott: oneTimeToken });
    setTokenData(data);
  };

  useEffect(() => {
    if (tokenData) return;
    init();
  }, []);

  return (
    <XAppContext.Provider value={{ tokenData: tokenData }}>{props.children}</XAppContext.Provider>
  );
};

export default XAppContextProvider;