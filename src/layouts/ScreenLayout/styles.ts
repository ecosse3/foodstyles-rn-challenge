import { theme } from '@theme';
import { StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';

const styles = (safeAreaInsets: EdgeInsets, withoutTopSafeArea?: boolean) =>
  StyleSheet.create({
    layout: {
      flex: 1,
      paddingLeft: safeAreaInsets.left + theme.spacing.default * 2.5,
      paddingRight: safeAreaInsets.right + theme.spacing.default * 2.5,
      paddingTop: withoutTopSafeArea
        ? 0
        : safeAreaInsets.top + theme.spacing.default * 4.5,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginBottom: 26,
    },
  });

export default styles;
