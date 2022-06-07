import COLORS from '@theme/colors';
import { StyleSheet } from 'react-native';

const ACTION_MENU_SIZE = 140;

export const styles = StyleSheet.create({
  actionIcon: {
    height: 44,
    width: 44,
    marginLeft: 4,
  },
  container: {
    flex: 1,
  },
  cardWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  actionWrapper: {
    height: ACTION_MENU_SIZE,
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 25,
    justifyContent: 'space-between',
  },
  above: {
    top: -ACTION_MENU_SIZE - 15,
  },
  below: {
    bottom: -ACTION_MENU_SIZE - 15,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  buttonTitle: {
    color: COLORS.aquaGreen,
  },
});
