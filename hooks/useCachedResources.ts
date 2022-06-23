import { useEffect, useState } from 'react';

import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export const useCachedResources = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
          poppins: require('../assets/fonts/Poppins-Regular.ttf'),
          'poppins-semiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
          'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
          'poppins-extraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    };

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
};
