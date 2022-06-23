export type User = {
  uid: string;
  displayName: string | null;
};

export type UserContextProps = {
  user: User;
  setUser: (user: User) => void;
};
