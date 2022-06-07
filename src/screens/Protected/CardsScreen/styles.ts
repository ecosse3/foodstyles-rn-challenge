import COLORS from '@theme/colors';
import { StyleSheet } from 'react-native';

const styles = (props: { bottom: number }) =>
  StyleSheet.create({
    newFoodStyle: {
      top: 0.5 * props.bottom,
    },
    addIcon: {
      width: 33,
      height: 33,
    },
    logo: {
      width: 22,
      height: 26,
    },
    flatlist: {
      marginTop: 26,
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
