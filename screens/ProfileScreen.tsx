import React, {FC, useContext} from 'react';
import {getAuth, signOut} from 'firebase/auth';

import {StatusBar} from 'expo-status-bar';

import {Button, KText, Layout} from '@ui-kit';
import {UserContext} from "@contexts";


const logout = async () => {
  const {setUser} = useContext(UserContext);
  const auth = getAuth();
  try {
    const test = await signOut(auth);
    console.log(test)
    //setUser({uid: '', displayName: ''});
    
  } catch (error) {
    console.log(error);
  }
};


const ProfileScreen: FC = ({navigation}) => {
  return (
    <Layout logged>
      <StatusBar style="dark"/>
      <KText variant="body2">ProfileScreen</KText>
      <Button onPress={logout}><KText variant="button3" align="center" color="light">
        SE DECONNECTER
      </KText></Button>
    </Layout>
  );
};

export default ProfileScreen;
