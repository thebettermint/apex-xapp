import React, {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';

import useLocalStorage from '../hooks/useLocalStorage';
import Router from 'next/router';

import { IUser } from 'types/next';

interface IContextProps {
  data: [string, Dispatch<SetStateAction<string>>];
  theme: any;
  collapse: any;
  user: IUser | undefined;
  setUser: Dispatch<SetStateAction<IUser | undefined>>;
  jwt: string | undefined;
  setJwt: Dispatch<SetStateAction<string | undefined>>;
  router: (path: string) => void;
}

const StoreContext = createContext({} as IContextProps);

export const useStoreContext = () => useContext(StoreContext);

const StoreContextProvider = (props: any) => {
  const [data, setData] = useState<string>('');
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [jwt, setJwt] = useState<string | undefined>(undefined);
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [collapsed, toggleCollapse] = useLocalStorage('collapsed', false);

  const router = (path: string) => {
    Router.push(path);
  };

  return (
    <StoreContext.Provider
      value={{
        data: [data, setData],
        theme: [theme, setTheme],
        collapse: [collapsed, toggleCollapse],
        user: user,
        setUser: setUser,
        jwt: jwt,
        setJwt: setJwt,
        router: router,
      }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
