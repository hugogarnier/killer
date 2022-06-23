export type User = {
  uid: string;
  displayName: string | null;
};

export type UserContextProps = {
  user: User | undefined;
  setUser?: (user: User) => void;
};
