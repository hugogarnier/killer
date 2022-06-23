import { getAuth, signInWithCredential } from '@firebase/auth';

const loginWithCredential = async (credential) => {
  const auth = getAuth();
  const { user } = await signInWithCredential(auth, credential);

  return user;
};

export default loginWithCredential;
