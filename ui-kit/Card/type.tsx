import {ReactNode} from 'react';
import {ViewProps, ViewStyle} from 'react-native';

export type CardProps = ViewProps & {
  children?: ReactNode;
  uriImage?: string;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onPress?: (() => void) | false;
  size?: 'extraLarge' | 'large' | 'medium' | 'small' | number;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'text' | 'icon' | 'custom' | 'light';
  padding?: number;
  style?: ViewStyle;
};
