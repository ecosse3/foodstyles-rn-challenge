import { TextStyle } from 'react-native';

export type FontWeight =
  | 'default'
  | 'normal'
  | 'medium1'
  | 'medium2'
  | 'bold1'
  | 'bold2'
  | 'heavy';

export type TextAligns = 'center' | 'left' | 'right' | 'auto';

export type FontSize =
  | 'default'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'body5'
  | 'body6'
  | 'subtitle1'
  | 'subtitle2'
  | 'subtitle3'
  | 'subtitle4'
  | 'subtitle5'
  | 'title1'
  | 'title2';

export type LineHeight = 'default' | 'small' | 'medium';

export type TextTransform = TextStyle['textTransform'];
