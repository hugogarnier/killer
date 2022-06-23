import React, { FC } from 'react';
// eslint-disable-next-line no-restricted-imports
import { View } from 'react-native';

import * as theme from '@theme';

import { RowProps } from './type';

const Row: FC<RowProps> = ({
  children,
  bg = 'transparent',
  show = 'flex',
  alignItems = 'center',
  justifyContent = 'center',
  spacing = 0,
  spacingH = 0,
  spacingV = 0,
  spacingI = 0,
  ...props
}) => {
  return (
    <View
      style={{
        display: (show && 'flex') || 'none',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: alignItems,
        justifyContent: justifyContent,
        backgroundColor: theme.colors[bg],
        width: 'auto',
        marginTop: (spacingV && spacingV) || spacing,
        marginBottom: (spacingI && spacingI) || (spacingV && spacingV) || spacing,
        paddingLeft: (spacingH && spacingH) || spacing,
        paddingRight: (spacingH && spacingH) || spacing,
      }}
      {...props}
    >
      {children}
    </View>
  );
};

export default Row;
