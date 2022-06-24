import React, {useEffect, useState} from 'react';

import {getAuth, onAuthStateChanged} from '@firebase/auth';
import {StatusBar} from 'expo-status-bar';
import {initializeApp} from 'firebase/app';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {firebaseConfig} from '@constants';
import {UserContext} from '@contexts';
import {User} from '@customTypes';
import {useCachedResources} from '@hooks';

import Navigation from './navigation';

// Initialize Firebase
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = initializeApp(firebaseConfig);

const App = () => {
  const isLoadingComplete = useCachedResources();
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (userInfo) => {
      if (userInfo && userInfo.displayName) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser({uid: userInfo.uid, displayName: userInfo.displayName});
        setIsLoading(false);
      } else {
        // User is signed out
        setUser({uid: '', displayName: ''});
        setIsLoading(false);
      }
    });
  }, [isLoading]);

  if (!isLoadingComplete || isLoading) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <UserContext.Provider value={{user, setUser}}>
          <Navigation/>
          <StatusBar style="light"/>
        </UserContext.Provider>
      </SafeAreaProvider>
    );
  }
};

export default App;
