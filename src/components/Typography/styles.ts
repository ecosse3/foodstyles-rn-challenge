import { StyleSheet } from 'react-native';

import { theme } from '@theme';
import { FontSizes, FontWeights, LineHeights } from '@theme/enums';
import {
  FontSize,
  FontWeight,
  LineHeight,
  TextAligns,
  TextTransform,
} from './types';

const styles = (
  fontFamily: string,
  fontSize: FontSize,
  fontWeight: FontWeight,
  lineHeight: LineHeight,
  textAlign?: TextAligns,
  mt?: number,
  mb?: number,
  color: string = theme.colors.black,
  letterSpacing?: number,
  textTransform?: TextTransform,
) =>
  StyleSheet.create({
    defaultTextStyles: {
      fontFamily,
      fontSize: FontSizes[fontSize],
      fontWeight: FontWeights[fontWeight],
      color,
      textAlign,
      lineHeight: LineHeights[lineHeight] * FontSizes[fontSize],
      marginTop: mt,
      marginBottom: mb,
      letterSpacing,
      textTransform,
    },
  });

export default styles;
