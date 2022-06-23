import React, { FC } from 'react';

import Logo from '@assets/svg/Logo';
import { RootStackScreenProps } from '@types';
import { Button, Column, KText, Layout } from '@ui-kit';

export type OnBoardingScreenProp = RootStackScreenProps<'OnBoarding'>;

const OnBoardingScreen: FC<OnBoardingScreenProp> = ({ navigation }) => {
  return (
    <Layout>
      <Column>
        <Logo width={150} height={300} />
        <Button
          onPress={() => navigation.navigate('Login')}
          variant="primary"
          size="medium"
          padding={20}
        >
          <KText align="center" variant="button3" color="light">
            SE CONNECTER
          </KText>
        </Button>
        <Button
          onPress={() => navigation.navigate('Signup')}
          variant="tertiary"
          size="medium"
          padding={20}
        >
          <KText align="center" variant="button3">
            S&apos;ENREGISTRER
          </KText>
        </Button>
      </Column>
    </Layout>
  );
};

export default OnBoardingScreen;
