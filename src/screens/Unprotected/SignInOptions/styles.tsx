import COLORS from '@theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  stripContainer: {
    position: 'absolute',
    backgroundColor: COLORS.tomato,
    height: 40,
    width: '100%',
    top: '3%',
    left: '-15%',
    transform: [{ rotate: '-35deg' }],
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    elevation: 5,
  },
  stripText: {
    left: '15%',
    top: '20%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 50,
    marginBottom: 15,
    alignSelf: 'center',
  },
  underline: {
    borderBottomColor: COLORS.white,
    borderBottomWidth: 2,
  },
});
