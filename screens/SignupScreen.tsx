import React, { FC, useState } from 'react';

import Register from '@assets/svg/Register';
import { RootStackScreenProps } from '@types';
import { Button, Column, KText, KTextInput, Layout, Row } from '@ui-kit';

import { signupDefault } from '../api/firebaseAuth';

export type SignupScreenProp = RootStackScreenProps<'Signup'>;

const SignupScreen: FC<SignupScreenProp> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('hugo3@test.com');
  const [password, setPassword] = useState<string>('azerty');
  const [username, setUsername] = useState<string>('hugo');
  const [error, setError] = useState<string>('');

  const setFirebaseSignupDefault = async () => {
    const userCred = await signupDefault(username, email, password);
    if (userCred === 'auth/email-already-in-use') {
      setError('Email déjà utilisé');
    } else {
      setError('');
    }
  };

  return (
    <Layout>
      <Column spacingV={40}>
        <Register height={200} />
      </Column>
      <Column spacingV={20}>
        <KText variant="h3">Information de connexion</KText>
      </Column>
      <Column>
        <KTextInput
          autoCapitalize="none"
          placeholder="username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
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
        <Button onPress={setFirebaseSignupDefault}>
          <KText variant="button3" align="center" color="light">
            S&apos;ENREGISTRER
          </KText>
        </Button>
      </Column>
      <Column spacingV={20}>
        <Row>
          <KText variant="body2" style={{ marginRight: 20 }}>
            Pas de compte ?
          </KText>
          <Button onPress={() => navigation.navigate('Login')} variant="tertiary" size="small">
            <KText variant="button3" align="center" color="dark100">
              SE CONNECTER
            </KText>
          </Button>
        </Row>
      </Column>
    </Layout>
  );
};

export default SignupScreen;
