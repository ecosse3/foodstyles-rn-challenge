import { theme } from '@theme';
import React from 'react';

import { Text, TextStyle, StyleProp, AccessibilityRole } from 'react-native';

import styles from './styles';

import {
  FontSize,
  FontWeight,
  LineHeight,
  TextAligns,
  TextTransform,
} from './types';

interface Props {
  children: React.ReactNode;
  fontFamily?: string;
  fontWeight?: FontWeight;
  fontSize?: FontSize;
  onPress?: () => void;
  testID?: string;
  color?: string;
  textAlign?: TextAligns;
  lineHeight?: LineHeight;
  mt?: number;
  mb?: number;
  letterSpacing?: number;
  style?: StyleProp<TextStyle>;
  accessibilityLabel?: string;
  accessibilityRole?: AccessibilityRole;
  numberOfLines?: number;
  textTransform?: TextTransform;
}

const Typography = (props: Props) => (
  <Text
    {...props}
    accessibilityLabel={props.accessibilityLabel}
    accessibilityRole={props.accessibilityRole}
    onPress={props.onPress}
    testID={props.testID}
    allowFontScaling={false}
    numberOfLines={props.numberOfLines || 0}
    ellipsizeMode="tail"
    style={[
      props.style,
      styles(
        props.fontFamily || theme.font.regular,
        props.fontSize || 'default',
        props.fontWeight || 'default',
        props.lineHeight || 'default',
        props.textAlign,
        props.mt,
        props.mb,
        props.color || 'white',
        props.letterSpacing,
        props.textTransform,
      ).defaultTextStyles,
    ]}
  />
);

export default Typography;
