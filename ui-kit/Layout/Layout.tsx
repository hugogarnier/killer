import React, { FC } from 'react';
// eslint-disable-next-line no-restricted-imports
import { Platform, View } from 'react-native';

import { LayoutProps } from './type';

const Layout: FC<LayoutProps> = ({ children, logged, ...props }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: (logged && ((Platform.OS === 'ios' && 44) || 20)) || 0,
      }}
      {...props}
    >
      {children}
    </View>
  );
};

export default Layout;
