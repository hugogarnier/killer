import { ReactNode } from 'react';
import { FlexStyle, ViewProps, ViewStyle } from 'react-native';

import { Colors, layout } from '@theme';

export type LayoutProps = ViewProps & {
  children?: ReactNode;
  bg?: Colors;
  logged?: boolean;
  alignItems?: FlexStyle['alignItems'];
  justifyContent?: FlexStyle['justifyContent'];
  show?: 'none' | 'flex';
  spacing?: number;
  spacingH?: number;
  spacingV?: number;
  spacingI?: number;
  width?: keyof typeof layout.size;
  style?: ViewStyle;
};
