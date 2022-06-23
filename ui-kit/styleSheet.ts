import { StyleSheet } from 'react-native';

import { colors, layout } from '@theme';

export const Styles = StyleSheet.create({
  textLightCenter: {
    color: colors.light,
    textAlign: 'center',
  },
  textDarkCenter: {
    color: colors.dark100,
    textAlign: 'center',
  },
  textLight: {
    color: colors.light,
  },
  textDark: {
    color: colors.dark100,
  },
  padding5: {
    padding: 5,
  },
  padding10: {
    padding: 10,
  },
  padding15: {
    padding: 15,
  },
  padding20: {
    padding: 20,
  },
  h1: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 30,
    lineHeight: 36,
  },
  h2: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 24,
    lineHeight: 32,
  },
  h3: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    lineHeight: 28,
  },
  h4: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,
    lineHeight: 26,
  },

  //**********   BODY   **********//
  body1: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    lineHeight: 22,
  },
  body2: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 20,
  },
  body3: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 18,
  },
  body4: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 10,
    lineHeight: 14,
  },

  //**********   DISPLAY   **********//
  display1: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 50,
    lineHeight: 70,
  },
  display2: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 40,
    lineHeight: 50,
  },
  display3: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 36,
    lineHeight: 46,
  },
  display4: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,
    lineHeight: 22,
  },

  //**********   BUTTON   **********//
  button1: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,
    lineHeight: 24,
  },
  button2: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    lineHeight: 24,
  },
  button3: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 14,
    lineHeight: 24,
  },

  //**********   INPUT   **********//
  input: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 20,
    borderRadius: layout.radius.Nxxl,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 20,
  },
  //**********   LINE   **********//
  line: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: colors.dark100,
  },
});
