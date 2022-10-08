import {
  createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState,
} from 'react';

interface IUserContext {
  currentUser: { token: string, teacher: boolean } | null
  setCurrentUser: Dispatch<SetStateAction<{ token: string, teacher: boolean } | null>>
}

const initialValues: IUserContext = {
  currentUser: null,
  setCurrentUser: () => { },
};

const UserContext = createContext<IUserContext>(initialValues);

export function UserProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState(initialValues.currentUser);

  const userLocal = JSON.parse(localStorage.getItem('userLocal')!);

  if (currentUser?.token !== undefined) {
    localStorage.setItem('userLocal', JSON.stringify(currentUser));
  } else if (localStorage.getItem('userLocal') !== null) {
    setCurrentUser(userLocal);
  }

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
