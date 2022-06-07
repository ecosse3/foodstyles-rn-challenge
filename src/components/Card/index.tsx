import Typography from '@components/Typography';
import COLORS from '@theme/colors';
import FONTS from '@theme/fonts';
import React from 'react';
import { Image, Pressable, View } from 'react-native';
import styles from './styles';

interface CardProps {
  name: string;
  onPress: () => void;
}

const Options = Image.resolveAssetSource(
  require('@assets/images/options.png'),
)?.uri;

export const Card = ({ name, onPress }: CardProps) => {
  return (
    <View style={styles.card}>
      <Typography
        fontFamily={FONTS.bold}
        fontWeight="bold1"
        color={COLORS.black}>
        {name}
      </Typography>
      <Pressable onPress={onPress}>
        <Image source={{ uri: Options }} style={styles.options} />
      </Pressable>
    </View>
  );
};
