import { createContext } from 'react';

import { UserContextProps } from '@customTypes';

export const defaultState = {
  user: {
    uid: '',
    displayName: '',
  },
  setUser: () => {},
};

const UserContext = createContext<UserContextProps>(defaultState);

export { UserContext };
