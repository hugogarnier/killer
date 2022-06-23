import React, {FC} from 'react';
// eslint-disable-next-line no-restricted-imports
import {View, ViewStyle} from 'react-native';

import * as theme from '@theme';

import {ColumnProps} from './type';

const Column: FC<ColumnProps> = ({
                                   children,
                                   bg = 'transparent',
                                   width = 'full',
                                   show = 'flex',
                                   alignItems = 'center',
                                   justifyContent = 'center',
                                   spacing = 0,
                                   spacingH = 0,
                                   spacingV = 0,
                                   spacingI = 0,
                                   style,
                                   ...props
                                 }) => {
  return (
    <View
      style={[{
        display: (show && 'flex') || 'none',
        flexDirection: 'column',
        alignItems: alignItems,
        justifyContent: justifyContent,
        backgroundColor: theme.colors[bg],
        width: theme.layout.size[width] || theme.layout.size.full,
        marginTop: (spacingV && spacingV) || spacing,
        marginBottom: (spacingI && spacingI) || (spacingV && spacingV) || spacing,
        paddingLeft: (spacingH && spacingH) || spacing,
        paddingRight: (spacingH && spacingH) || spacing,
      }, style] as ViewStyle}
      {...props}
    >
      {children}
    </View>
  );
};

export default Column;
