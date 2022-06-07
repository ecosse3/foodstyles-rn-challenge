import COLORS from '@theme/colors';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';

type ButtonVariants = 'primary' | 'rounded' | 'outline' | 'square';
type ButtonSizes = 'primary' | 'social';

interface ButtonProps extends TouchableOpacityProps {
  background?: ViewStyle['backgroundColor'];
  children: React.ReactNode;
  icon?: React.ReactNode;
  loading?: boolean;
  mt?: number;
  style?: ViewStyle;
  variant: ButtonVariants;
  width?: ButtonSizes;
}

const Button = ({
  background,
  children,
  icon,
  loading,
  mt,
  onPress,
  style,
  variant,
  width = 'primary',
}: ButtonProps) => {
  const variantStyle = StyleSheet.create({
    primary: {},
    rounded: {
      width: width === 'primary' ? 'auto' : 236,
      paddingHorizontal: 40,
      height: 43,
      borderRadius: 100,
      backgroundColor: background || COLORS.white,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 0,
      elevation: 4,
    },
    outline: {
      width: width === 'primary' ? 'auto' : 236,
      paddingHorizontal: 40,
      height: 43,
      borderRadius: 100,
      backgroundColor: COLORS.transparent,
      borderWidth: 1,
      borderColor: COLORS.gray2,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    square: {
      width: '100%',
      paddingHorizontal: 40,
      height: 43,
      borderRadius: 6,
      backgroundColor: COLORS.white,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      shadowColor: 'rgba(176, 176, 176, 0.4)',
      shadowOffset: {
        width: -2,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 6,
      elevation: 4,
    },
  });

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[variantStyle[`${variant}`], { marginTop: mt || 0 }, style]}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator size="small" color={COLORS.white} />
      ) : (
        <>
          {icon || null}
          <View style={{ width: 8 }} />
          {children}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
