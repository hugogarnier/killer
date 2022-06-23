import React, {FC} from 'react';
// eslint-disable-next-line no-restricted-imports
import {ImageBackground, Pressable, ViewStyle} from 'react-native';

import * as theme from '@theme';

import {CardProps} from './type';

const Card: FC<CardProps> = ({
                               children,
                               uriImage,
                               disabled = false,
                               onPress,
                               variant = 'primary',
                               size,
                               padding = 20,
                               style,
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
            marginVertical: 10,
            //padding: padding,
            //backgroundColor:
            //  variant === 'primary' &&
            //  ((pressed && theme.colors['primary-60']) || theme.colors.primary),
            backgroundColor: ((pressed && theme.colors['primary-60']) || theme.colors.transparent),
            borderRadius: theme.layout.radius.Nxl,
            width:
              (size === 'small' && 150) ||
              (size === 'medium' && 200) ||
              (size === 'large' && 250) ||
              (size === 'extraLarge' && 320) ||
              size ||
              '100%',
            zIndex: 200,
          },
          style,
        ] as ViewStyle
      }
      disabled={disabled}
      accessibilityRole="button"
      {...props}
    >
      <ImageBackground
        source={{uri: uriImage}}
        imageStyle={{borderRadius: theme.layout.radius.Nxl, opacity: 0.7}}
        style={{padding: padding}}>
        {children}
      </ImageBackground>

    </Pressable>
  );
};

export default Card;
