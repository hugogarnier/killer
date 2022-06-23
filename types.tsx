/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface RootParamList extends RootStackParamList {
    }
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Home: NavigatorScreenParams<RootTabParamList> | undefined;
  OnBoarding: undefined;
  Login: undefined;
  Signup: undefined;
  Modal: undefined;
  NotFound: undefined;
  GameHome: undefined;
  Game: { result: string; name: string };
  Create: undefined;
  Profile: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList,
  Screen>;

export type RootTabParamList = {
  Home: undefined;
  Create: undefined;
  Profile: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>>;
