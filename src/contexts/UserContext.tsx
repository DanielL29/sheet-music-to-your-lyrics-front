import {
  createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState,
} from 'react';

interface IUserContext {
  currentUser: { token: string } | null
  setCurrentUser: Dispatch<SetStateAction<{ token: string } | null>>
}

const initialValues: IUserContext = {
  currentUser: null,
  setCurrentUser: () => { },
};

const UserContext = createContext<IUserContext>(initialValues);

export function UserProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState(initialValues.currentUser);

  useEffect(() => {
    if (localStorage.getItem('userLocal') !== null) {
      setCurrentUser(JSON.parse(localStorage.getItem('userLocal')!));
    }
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
