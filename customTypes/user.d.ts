export type User = {
  uid: string;
  displayName: string;
};

export type UserContextProps = {
  user: User;
  setUser: (user: User) => void;
};
