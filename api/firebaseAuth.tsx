import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile,} from 'firebase/auth';

export const loginDefault = async (email: string, password: string) => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    return error.code;
  }
};

export const signupDefault = async (username: string, email: string, password: string) => {
  const auth = getAuth();
  try {
    const newUser = await createUserWithEmailAndPassword(auth, email, password).then(
      async (userCredential) => {
        const user = userCredential.user;
        // Updating user name
        if (auth.currentUser) {
          await updateProfile(auth.currentUser, {displayName: username});
          return user;
        }
        return user
      },
    );
    return newUser;
  } catch (error: any) {
    return error.code;
  }
};
