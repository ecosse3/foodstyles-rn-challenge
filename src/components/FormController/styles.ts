import COLORS from '@theme/colors';
import FONTS from '@theme/fonts';
import { StyleSheet } from 'react-native';
import { Mode } from './types';

const FONT_SIZE = 16;
const PASSWORD_DOT_FONT_SIZE = 35;

const styles = (props?: { secureTextEntry?: boolean; mode?: Mode }) =>
  StyleSheet.create({
    contentBackground: {
      backgroundColor: props?.mode === 'dark' ? COLORS.white : COLORS.inputGray,
      borderColor:
        props?.mode === 'dark' ? `rgba(0,0,0,0.1)` : COLORS.transparent,
      borderRadius: 4,
      borderWidth: 1,
      elevation: 2,
      letterSpacing: 0,
      minHeight: 35,
      height: 35,
      shadowColor: `rgba(0,0,0,0.6)`,
      shadowOffset:
        props?.mode === 'dark'
          ? { width: 0, height: 2 }
          : { width: 0, height: 0 },
      shadowOpacity: 0.2,
      shadowRadius: props?.mode === 'dark' ? 2 : 0,
    },
    gap: {
      marginBottom: 12,
    },
    text: {
      color: COLORS.greyishBrown,
      fontFamily: FONTS.semibold,
      fontSize: props?.secureTextEntry ? PASSWORD_DOT_FONT_SIZE : FONT_SIZE,
      lineHeight: props?.secureTextEntry
        ? 1.15 * PASSWORD_DOT_FONT_SIZE
        : 1.2 * FONT_SIZE,
      letterSpacing: props?.secureTextEntry ? -10 : 0,
      fontWeight: '600',
      textAlign: 'auto',
      paddingHorizontal: props?.secureTextEntry ? 8 : 11,
    },
    error: {
      color: COLORS.orangeRed,
    },
  });

export default styles;
