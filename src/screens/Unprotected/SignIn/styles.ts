import COLORS from '@theme/colors';
import { StyleSheet } from 'react-native';

const styles = (props?: { minHeight?: number; paddingTop: number }) =>
  StyleSheet.create({
    keyboardAvoidingView: {
      flex: 1,
    },
    scrollView: {
      flexGrow: 1,
    },
    imageWrapper: {
      paddingTop: props?.paddingTop,
      minHeight: props?.minHeight,
    },
    imageContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    bottomWrapper: {
      flex: 1,
      backgroundColor: 'transparent',
    },
    formContainer: {
      marginBottom: 10,
    },
    welcomeBackText: { paddingTop: 20 },
    header: {
      alignItems: 'center',
      marginBottom: 26,
    },
    errorMessage: {
      alignSelf: 'center',
      backgroundColor: COLORS.orangeRed,
      paddingHorizontal: 9,
      borderRadius: 4,
      width: '80%',
      paddingVertical: 3,
      marginTop: 5,
      marginBottom: 12,
    },
    forgotPasswordLink: {
      marginTop: 20,
    },
  });

export default styles;
