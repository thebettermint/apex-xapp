import React, {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  ReactElement,
} from 'react';

interface IContextProps {
  close(): void | Promise<void>;
  current: string;
  setPage: Dispatch<SetStateAction<string>>;
  data: any;
  setData: Dispatch<SetStateAction<any>>;
  nav: (page: string) => void;
  back: (page?: string) => void;
  next: () => void;
  prev: () => void;
}

const StepContext = createContext({} as IContextProps);

const useStepContext = () => useContext(StepContext);

const StepContextProvider = ({
  steps,
  close,
  children,
}: {
  steps: string[];
  close: () => void;
  children: any;
}) => {
  const [step, setStep] = useState<number>(0);
  const [page, setPage] = useState<string>(steps[step]);
  const [data, setData] = useState<any>(undefined);
  const [history, setHistory] = useState<any>(undefined);

  const nav = (nextPage: string) => {
    if (!history) setHistory([page]);
    if (history) setHistory((previous: string[]) => [page, ...previous]);
    setPage(nextPage);
  };

  const back = (page?: string) => {
    if (page) setPage(page);
    if (!page) setPage(history[0]);
    setHistory(history.slice(1));
  };

  const next = () => {
    setStep((step) => step + 1);
    setPage((page) => page[step]);
  };

  const prev = () => {
    setStep((step) => step - 1);
    setPage((page) => page[step]);
  };

  return (
    <StepContext.Provider
      value={{
        current: page,
        setPage: setPage,
        data: data,
        setData: setData,
        nav: nav,
        back: back,
        next: next,
        prev: prev,
        close: close,
      }}>
      {children}
    </StepContext.Provider>
  );
};

const StepRouter = (context: any, directory: any) => {
  let page = context.current;
  console.log(page);
  console.log(directory);
  if (page == 'unset') return null;
  if (!page) return null;
  let Element = directory[page];

  return <Element />;
};

export { StepRouter, StepContextProvider, useStepContext };
