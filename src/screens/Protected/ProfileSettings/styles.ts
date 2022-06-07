import COLORS from '@theme/colors';
import { StyleSheet } from 'react-native';

const styles = (props: { bottom: number }) =>
  StyleSheet.create({
    logout: {
      minWidth: 162,
      minHeight: 44,
      backgroundColor: COLORS.transparent,
      alignSelf: 'center',
      borderRadius: 24.5,
      justifyContent: 'center',
    },
    done: {
      alignSelf: 'center',
      top: 0.5 * props.bottom,
    },
    bottomComponent: {
      backgroundColor: COLORS.white,
      height: 2 * props.bottom,
      shadowColor: COLORS.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 0,
      elevation: 5,
    },
  });

export default styles;
