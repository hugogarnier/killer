import { GoogleAuthProvider } from '@firebase/auth';
import { useIdTokenAuthRequest } from 'expo-auth-session/providers/google';

import { ENV } from '@constants';

const login = (id_token) => {
  // console.log("Signing in with Google...", { id_token });

  const credential = GoogleAuthProvider.credential(id_token);
  return credential;
};

export const useGoogleAuthentication = () => {
  const [request, _, promptAsync] = useIdTokenAuthRequest({
    clientId: ENV.FIREBASE_CLIENT_ID,
  });

  const prompt = async () => {
    const response = await promptAsync();

    if (response?.type !== 'success') {
      throw new Error(response.type);
    }
    const credential = login(response.params.id_token);

    return [credential];
  };

  return [!!request, prompt];
};
