import { ReactNode } from 'react';
import { ViewProps } from 'react-native';

export type ButtonProps = ViewProps & {
  children?: ReactNode;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  googleIcon?: ReactNode;
  onPress?: (() => void) | false;
  size?: 'extraLarge' | 'large' | 'medium' | 'small';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'text' | 'icon' | 'custom' | 'light';
  padding?: number;
};
