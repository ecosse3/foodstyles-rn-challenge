import COLORS from '@theme/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 6,
    marginTop: 6,
  },
  options: {
    width: 24,
    height: 24,
  },
});

export default styles;
