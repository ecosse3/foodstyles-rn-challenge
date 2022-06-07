import React from 'react';
import { navigationRef } from '@screens/MainNavigator';
import COLORS from '@theme/colors';
import { Image, TouchableOpacity } from 'react-native';

const Back = Image.resolveAssetSource(
  require('@assets/images/backIcoon.png'),
)?.uri;

const HeaderBackButton = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 41 / 2,
        height: 41,
        justifyContent: 'center',
        position: 'absolute',
        width: 41,
        left: 0,
      }}
      onPress={navigationRef.current?.goBack}>
      <Image
        source={{ uri: Back }}
        style={{
          width: 20,
          height: 20,
          marginLeft: 6,
          marginTop: 2,
        }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default HeaderBackButton;
