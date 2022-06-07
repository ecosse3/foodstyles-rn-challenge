import Button from '@components/Button';
import Typography from '@components/Typography';
import ScreenLayout from '@layouts/ScreenLayout';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { UnprotectedRoute } from '@screens/routes';
import { theme } from '@theme';
import COLORS from '@theme/colors';
import React from 'react';
import { Image, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { UnprotectedNavigatorParams } from '../UnprotectedNavigatorParams';
import { styles } from './styles';

const Logo = Image.resolveAssetSource(
  require('@assets/images/logo-3x.png'),
)?.uri;

const Facebook = Image.resolveAssetSource(
  require('@assets/images/facebook.png'),
)?.uri;

const Apple = Image.resolveAssetSource(
  require('@assets/images/apple.png'),
)?.uri;

const Google = Image.resolveAssetSource(
  require('@assets/images/google.png'),
)?.uri;

type SignInOptionsNavigationProp = NativeStackNavigationProp<
  UnprotectedNavigatorParams,
  typeof UnprotectedRoute
>;

const SignInOptions = () => {
  const navigation: SignInOptionsNavigationProp = useNavigation();
  const safeAreaInsets = useSafeAreaInsets();

  const handleSignUpEmailPress = () => {
    navigation.navigate('SignUpEmailRoute');
  };

  const handleLoginPress = () => {
    navigation.navigate('SignInRoute');
  };

  return (
    <LinearGradient
      colors={[COLORS.maize, COLORS.organish]}
      style={{ flex: 1 }}>
      <View style={styles.stripContainer}>
        <Typography
          fontFamily={theme.font.bold}
          fontWeight="bold1"
          fontSize="subtitle1"
          color="white"
          style={styles.stripText}>
          BETA VERSION
        </Typography>
      </View>
      <ScreenLayout>
        <Image
          source={{ uri: Logo }}
          resizeMode="contain"
          style={styles.logo}
        />
        <Typography
          fontFamily={theme.font.bold}
          fontWeight="bold2"
          fontSize="subtitle4"
          textAlign="center"
          letterSpacing={-0.5}
          color="white">
          FoodStyles
        </Typography>
        <Typography
          textAlign="center"
          mt={32}
          mb={30}
          style={{ alignSelf: 'center', width: '80%' }}>
          Sign in to be able to save your preferences and settings.
        </Typography>
        <View style={{ alignItems: 'center' }}>
          <Button
            variant="rounded"
            width="social"
            icon={
              <Image
                source={{ uri: Apple }}
                style={{
                  width: 20,
                  height: 20,
                }}
                resizeMode="contain"
              />
            }>
            <Typography color="black">Sign in with Apple</Typography>
          </Button>
          <Button
            variant="rounded"
            width="social"
            icon={
              <Image
                source={{ uri: Facebook }}
                style={{
                  width: 20,
                  height: 20,
                }}
                resizeMode="contain"
              />
            }
            mt={15}>
            <Typography color="black">Sign in with Facebook</Typography>
          </Button>
          <Button
            variant="rounded"
            width="social"
            icon={
              <Image
                source={{ uri: Google }}
                style={{
                  width: 20,
                  height: 20,
                }}
                resizeMode="contain"
              />
            }
            mt={15}>
            <Typography color="black">Sign in with Google</Typography>
          </Button>
          <Button
            variant="rounded"
            width="social"
            mt={15}
            onPress={handleSignUpEmailPress}>
            <Typography color="black">Sign up with Email</Typography>
          </Button>
          <Button
            variant="primary"
            width="social"
            mt={20}
            onPress={handleLoginPress}>
            <Typography>Login with Email</Typography>
          </Button>
        </View>
      </ScreenLayout>
      <Typography
        textAlign="center"
        style={{ bottom: safeAreaInsets.bottom + 5 }}>
        By signing in you accept the{'\n'}
        <Text style={styles.underline}>General Terms</Text> and{' '}
        <Text style={styles.underline}>Privacy Policy</Text>
      </Typography>
    </LinearGradient>
  );
};

export default SignInOptions;
