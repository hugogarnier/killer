import React, {FC} from 'react';
// eslint-disable-next-line no-restricted-imports
import {Pressable, Text, ViewStyle} from 'react-native';

import GoogleLogo from '@assets/svg/GoogleLogo';
import * as theme from '@theme';
import Row from '@ui-kit/Row';

import {ButtonProps} from './type';

const Button: FC<ButtonProps> = ({
                                   children,
                                   disabled = false,
                                   onPress,
                                   variant = 'primary',
                                   size,
                                   padding = 10,
                                   googleIcon,
                                   ...props
                                 }) => {
  const handlePress = async (): Promise<void> => {
    if (onPress) {
      onPress();
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({pressed}) =>
        [
          {
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
            padding: padding,
            backgroundColor:
              (variant === 'primary' &&
                ((pressed && theme.colors['primary-60']) || theme.colors.primary)) ||
              (variant === 'secondary' &&
                ((pressed && theme.colors['secondary-60']) || theme.colors.secondary)) ||
              (variant === 'tertiary' &&
                ((pressed && theme.colors['tertiary-60']) || theme.colors.tertiary)) ||
              (variant === 'light' &&
                ((pressed && theme.colors['grey350-40']) || theme.colors.light)),

            width:
              (size === 'small' && 150) ||
              (size === 'medium' && 200) ||
              (size === 'large' && 250) ||
              (size === 'extraLarge' && 300) ||
              '100%',
            borderRadius: theme.layout.radius.Nxl,
          },
        ] as ViewStyle
      }
      disabled={disabled}
      accessibilityRole="button"
      {...props}
    >
      {(googleIcon && (
        <Row style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          {googleIcon && <GoogleLogo/>}
          <Text style={{marginLeft: 10}}>{children}</Text>
        </Row>
      )) || <Text>{children}</Text>}
    </Pressable>
  );
};

export default Button
