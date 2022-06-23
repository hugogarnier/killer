import React, { FC } from 'react';
// eslint-disable-next-line no-restricted-imports
import { Text, TextStyle } from 'react-native';

import { colors, typography } from '@theme';

import { KTextProps } from './type';

const KText: FC<KTextProps> = ({
  children,
  variant = 'body2',
  align = 'auto',
  color = 'dark100',
  spacingV,
  spacing,
  spacingH,
  style,
  ...props
}) => {
  return (
    <Text
      style={[
        {
          fontFamily: typography[variant].fontFamily,
          fontSize: typography[variant].fontSize,
          lineHeight: typography[variant].lineHeight,
          textAlign:
            (align === 'center' && 'center') ||
            (align === 'left' && 'left') ||
            (align === 'right' && 'right') ||
            'auto',
          color: colors[color],
          marginTop: (spacingV && spacingV) || spacing,
          marginBottom: (spacingV && spacingV) || spacing,
          paddingLeft: (spacingH && spacingH) || spacing,
          paddingRight: (spacingH && spacingH) || spacing,
        } as TextStyle,
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default KText;
