import React, {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  ReactElement,
  useEffect,
} from 'react';

interface IContextProps {
  data: any;
  setData: Dispatch<SetStateAction<any>>;
  back: boolean;
  setBack: Dispatch<SetStateAction<boolean>>;
}

const ModalContext = createContext({} as IContextProps);

const useModalContext = () => useContext(ModalContext);

const ModalContextProvider = ({ children }: { children: any }) => {
  const [back, setBack] = useState<boolean>(false);
  const [data, setData] = useState<any>(undefined);

  return (
    <ModalContext.Provider
      value={{
        data: data,
        setData: setData,
        back: back,
        setBack: setBack,
      }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContextProvider, useModalContext };
