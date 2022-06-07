import React, { useCallback, useMemo, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';

import { useForm } from 'react-hook-form';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { yupResolver } from '@hookform/resolvers/yup';

import { UnprotectedRoute } from '@screens/routes';

import FormController from '@components/FormController';
import Typography from '@components/Typography';
import ScreenLayout from '@layouts/ScreenLayout';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import COLORS from '@theme/colors';
import Button from '@components/Button';
import FONTS from '@theme/fonts';
import { useMutation } from '@apollo/client';
import { login } from '@store/slices/authSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@store';
import signUpSchema from './signUpSchema';
import styles from './styles';
import { UnprotectedNavigatorParams } from '../UnprotectedNavigatorParams';
import { SIGN_UP_MUTATION } from './graphql/mutations';

type SignInNavigationProp = NativeStackNavigationProp<
  UnprotectedNavigatorParams,
  typeof UnprotectedRoute
>;

interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
}

const SignUpEmail = () => {
  const navigation: SignInNavigationProp = useNavigation();
  const dispatch = useDispatch<AppDispatch>();

  const [credentialsError, setCredentialsPasswordError] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [signUpMutation] = useMutation(SIGN_UP_MUTATION);

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpCredentials>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(signUpSchema()),
    mode: 'onChange',
  });

  watch(() => {
    if (credentialsError) setCredentialsPasswordError(false);
  });

  const onSubmit = useCallback(
    async ({ name, email, password }: SignUpCredentials) => {
      if (loading) return;

      setLoading(true);

      try {
        const { data } = await signUpMutation({
          variables: {
            name,
            email,
            password,
          },
        });

        dispatch(
          login({
            name: data.signUpWithEmail.user.name,
            email: data.signUpWithEmail.user.email,
          }),
        );

        setLoading(false);
        navigation.navigate('ProtectedRoute', {
          screen: 'ProfileSettingsScreenRoute',
        });
      } catch (error) {
        Keyboard.dismiss();
        setLoading(false);
      }
    },
    [dispatch, loading, navigation, signUpMutation],
  );

  const handleSignUpButtonPress = useCallback(() => {
    handleSubmit(onSubmit)();
  }, [handleSubmit, onSubmit]);

  const InvalidCredentialsError = useMemo(
    () =>
      credentialsError && (
        <Typography>Email or password is not correct</Typography>
      ),
    [credentialsError],
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled={Platform.OS === 'ios'}
      style={styles().keyboardAvoidingView}>
      <ScrollView
        contentContainerStyle={styles().scrollView}
        keyboardShouldPersistTaps="handled">
        <LinearGradient
          colors={[COLORS.maize, COLORS.organish]}
          style={{ flex: 1 }}>
          <ScreenLayout backHeader="Sign up with Email" withoutTopSafeArea>
            <View style={styles().formContainer}>
              <FormController control={control} name="name" label="Your name" />
              <FormController control={control} name="email" label="Email" />
              <FormController
                control={control}
                name="password"
                label="Password"
                hint="(min 6 characters)"
                secureTextEntry
                onSubmit={handleSignUpButtonPress}
              />
            </View>
            {(credentialsError ||
              errors.name?.message ||
              errors.email?.message ||
              errors.password?.message) && (
              <View style={styles().errorMessage}>
                <Typography fontWeight="medium1">
                  {errors.name?.message ||
                    errors.email?.message ||
                    errors.password?.message}
                </Typography>
                {InvalidCredentialsError}
              </View>
            )}
            <View style={{ alignItems: 'center' }}>
              <Button
                variant="rounded"
                mt={14}
                background={COLORS.aquaGreen}
                onPress={handleSignUpButtonPress}
                loading={loading}
                disabled={loading}>
                <Typography fontFamily={FONTS.bold} fontWeight="bold1">
                  SIGN UP
                </Typography>
              </Button>
            </View>
          </ScreenLayout>
        </LinearGradient>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpEmail;
