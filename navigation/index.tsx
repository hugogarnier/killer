/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import React, {ReactElement, useContext} from 'react';

import {FontAwesome} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {UserContext} from '@contexts';
import {
  CreateGameScreen,
  GameScreen,
  HomeScreen,
  LoginScreen,
  OnBoardingScreen,
  ProfileScreen,
  SignupScreen,
} from '@screens';
import {colors} from '@theme';
import {RootStackParamList, RootStackScreenProps, RootTabParamList} from '@types';

import LinkingConfiguration from './LinkingConfiguration';


/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}): ReactElement => {
  return <FontAwesome size={30} style={{marginBottom: -3}} {...props} />;
};

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const GameStack = createNativeStackNavigator<RootStackParamList>();

const GameTabNavigator = () => {
  return (
    <GameStack.Navigator>
      <GameStack.Group>
        <GameStack.Screen
          name="GameHome"
          component={HomeScreen}
          options={({navigation}: RootStackScreenProps<'GameHome'>) => ({
            headerShown: false,
          })}
        />
        <GameStack.Screen
          name="Game"
          component={GameScreen}
          options={({navigation}: RootStackScreenProps<'Game'>) => ({
            headerShown: false,
          })}
        />
      </GameStack.Group>
    </GameStack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false,
    }}>
      <BottomTab.Screen
        name="Home"
        component={GameTabNavigator}
        options={() => ({
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => <TabBarIcon name="home" color={color}/>,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.secondary,
        })}
      />
      <BottomTab.Screen name="Create" component={CreateGameScreen} options={() => ({
        tabBarShowLabel: false,
        tabBarIcon: ({color}) => <TabBarIcon name="plus" color={color}/>,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
      })}/>
      <BottomTab.Screen name="Profile" component={ProfileScreen} options={() => ({
        tabBarShowLabel: false,
        tabBarIcon: ({color}) => <TabBarIcon name="user" color={color}/>,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
      })}/>
    </BottomTab.Navigator>
  );
};

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

const globalScreenOptions = {
  headerStyle: {backgroundColor: colors.primary, textAlign: 'center'},
  headerTitleStyle: {
    color: colors.light,
    fontFamily: 'poppins',
    fontSize: 18,
    lineHeight: 26,
  },
  headerTintColor: colors.light,
  headerBackTitleVisible: false,
};

const RootNavigator = () => {
  const {user} = useContext(UserContext);
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      {(!user.uid && (
        <Stack.Group>
          <Stack.Screen
            name="OnBoarding"
            component={OnBoardingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Se connecter'}}/>
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{title: "S'enregistrer"}}
          />
        </Stack.Group>
      )) || (
        <>
          <Stack.Screen
            name="Root"
            component={BottomTabNavigator}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator/>
    </NavigationContainer>
  );
};

export default Navigation;
