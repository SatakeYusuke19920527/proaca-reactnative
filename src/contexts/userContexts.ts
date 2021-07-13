import { createContext } from 'react';
import { UserType } from '../types/UserType';

type UserContextType = {
  userInfo: UserType | null | undefined;
  setUserInfo: (userInfo: UserType | null) => void;
};

export const UserContext = createContext<UserContextType>({
  userInfo: null,
  setUserInfo: () => {},
});