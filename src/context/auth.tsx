import React, { useState, createContext, useContext, Dispatch, SetStateAction } from 'react';

interface IContextProps {
  auth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
  user: any;
  setUser: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext({} as IContextProps);
export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = (props: any) => {
  const [auth, setAuth] = useState<boolean>(true);
  const [user, setUser] = useState<any>(undefined);

  return (
    <AuthContext.Provider
      value={{
        auth: auth,
        setAuth: setAuth,
        user: user,
        setUser: setUser,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
