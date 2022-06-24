import React, {FC, useState} from 'react';

import Login from '@assets/svg/Login';
import {useGoogleAuthentication} from '@hooks';
import {RootStackScreenProps} from '@types';
import {Button, Column, KText, KTextInput, Layout, Row} from '@ui-kit';

import {loginDefault} from '@api';

// import loginWithCredential from '../utils/loginWithCredential';

const LoginScreen: FC<RootStackScreenProps<'Login'>> = ({navigation}) => {
  const [googleAuthLoading, authWithGoogle] = useGoogleAuthentication();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const login = async (credential, data) => {
  //   const user = await loginWithCredential(credential, data);
  // };

  // const loginWithGoogle = async () => {
  //   try {
  //     const [credential] = await authWithGoogle();
  //     await login(credential);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const setFirebaseLoginDefault = async () => {
    const userCred = await loginDefault(email, password);
    if (userCred === 'auth/user-not-found' || userCred === 'auth/wrong-password') {
      setError('Mauvais email et/ou mot de passe');
    } else {
      setError('');
    }
  };

  return (
    <Layout>
      <Column spacingV={40}>
        <Login height={200}/>
      </Column>
      <Column spacingV={20}>
        <KText variant="h3">Information de connexion</KText>
      </Column>
      <Column>
        <KTextInput
          autoCapitalize="none"
          placeholder="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <KTextInput
          autoCapitalize="none"
          placeholder="mot de passe"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {(error && (
          <KText variant="body3" color="warning">
            {error}
          </KText>
        )) || <></>}
        <Button onPress={setFirebaseLoginDefault}>
          <KText variant="button3" align="center" color="light">
            SE CONNECTER
          </KText>
        </Button>
        {/*<Button variant="light" googleIcon disabled={!googleAuthLoading}>
          <KText variant="button3" align="center">
            SE CONNECTER AVEC GOOGLE
          </KText>
        </Button>*/}
      </Column>
      <Column spacingV={20}>
        <Row>
          <KText variant="body2" style={{marginRight: 20}}>
            Pas de compte ?
          </KText>
          <Button onPress={() => navigation.navigate('Signup')} variant="tertiary" size="small">
            <KText variant="button3" align="center" color="dark100">
              S&apos;ENREGISTRER
            </KText>
          </Button>
        </Row>
      </Column>
    </Layout>
  );
};

export default LoginScreen;
