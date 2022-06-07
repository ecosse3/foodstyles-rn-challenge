import COLORS from './colors';
import FONTS from './fonts';

const theme = {
  colors: COLORS,
  font: FONTS,
  spacing: {
    default: 8,
  },
} as const;

export default theme;
