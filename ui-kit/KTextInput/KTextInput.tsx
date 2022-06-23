import React, {FC} from 'react';
// eslint-disable-next-line no-restricted-imports
import {TextInput, TextStyle} from 'react-native';

import {colors, layout, typography} from '@theme';

import {KTextInputProps} from './type';

const KTextInput: FC<KTextInputProps> = ({
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
    <TextInput
      style={[
        {
          height: 60,
          width: '100%',
          margin: 12,
          padding: 20,
          borderWidth: 1,
          borderColor: colors.primary,
          borderRadius: layout.radius.Nxl,
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
    />
  );
};

export default KTextInput;
