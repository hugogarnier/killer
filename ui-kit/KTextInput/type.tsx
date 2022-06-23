import { ReactNode } from 'react';
import { TextInputProps, TextStyle, ViewStyle } from 'react-native';

import { Colors } from '@theme';

export type KTextInputProps = TextInputProps & {
  children?: ReactNode;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'body4'
    | 'display1'
    | 'display2'
    | 'display3'
    | 'display4'
    | 'button1'
    | 'button2'
    | 'button3';
  align?: string;
  color?: Colors;
  spacing?: number;
  spacingH?: number;
  spacingV?: number;
  style?: ViewStyle | TextStyle;
};
