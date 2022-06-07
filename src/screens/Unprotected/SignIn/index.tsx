import React, { useCallback, useEffect, useMemo, useState } from 'react';
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

import { ProtectedRoute } from '@screens/routes';

import FormController from '@components/FormController';
import Typography from '@components/Typography';
import ScreenLayout from '@layouts/ScreenLayout';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import COLORS from '@theme/colors';
import Button from '@components/Button';
import FONTS from '@theme/fonts';
import { ProtectedNavigatorParams } from '@screens/Protected/ProtectedNavigatorParams';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@store';
import { login } from '@store/slices/authSlice';
import signInSchema from './signInSchema';
import styles from './styles';
import { SIGN_IN_MUTATION } from './graphql/mutations';

type SignInNavigationProp = NativeStackNavigationProp<
  ProtectedNavigatorParams,
  typeof ProtectedRoute
>;

interface SignInCredentials {
  email: string;
  password: string;
}

const SignIn = () => {
  const navigation: SignInNavigationProp = useNavigation();

  const [loginMutation, { error }] = useMutation(SIGN_IN_MUTATION);
  const dispatch = useDispatch<AppDispatch>();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignInCredentials>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(signInSchema()),
    mode: 'onChange',
  });

  const [credentialsError, setCredentialsPasswordError] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  watch(() => {
    if (credentialsError) setCredentialsPasswordError(false);
  });

  const onSubmit = useCallback(
    async ({ email, password }: SignInCredentials) => {
      if (loading) return;

      setLoading(true);

      try {
        const { data } = await loginMutation({
          variables: { email, password },
        });

        dispatch(
          login({
            name: data.loginWithEmail.user.name,
            email: data.loginWithEmail.user.email,
          }),
        );

        setLoading(false);
        navigation.navigate('ProtectedRoute', {
          screen: 'ProfileSettingsScreenRoute',
        });
      } catch (err) {
        Keyboard.dismiss();
        setLoading(false);
      }
    },
    [dispatch, loading, loginMutation, navigation],
  );

  const handleLoginButtonPress = useCallback(() => {
    handleSubmit(onSubmit)();
  }, [handleSubmit, onSubmit]);

  const InvalidCredentialsError = useMemo(
    () =>
      credentialsError && (
        <Typography>Email or password is not correct</Typography>
      ),
    [credentialsError],
  );

  const ValidationError = useMemo(
    () =>
      (errors.email?.message || errors.password?.message) && (
        <Typography fontWeight="medium1">
          {errors.email?.message || errors.password?.message}
        </Typography>
      ),
    [errors.email?.message, errors.password?.message],
  );

  useEffect(() => {
    if (error) {
      setCredentialsPasswordError(true);
    } else {
      setCredentialsPasswordError(false);
    }
  }, [error]);

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
          <ScreenLayout
            backHeader="Log in"
            withoutTopSafeArea
            style={styles().bottomWrapper}>
            <View style={styles().formContainer}>
              <FormController
                control={control}
                name="email"
                label="Email"
                keyboardType="email-address"
              />
              <FormController
                control={control}
                name="password"
                label="Password"
                secureTextEntry
                onSubmit={handleLoginButtonPress}
              />
            </View>
            {(credentialsError ||
              errors.email?.message ||
              errors.password?.message) && (
              <View style={styles().errorMessage}>
                {ValidationError}
                {InvalidCredentialsError}
              </View>
            )}
            <View style={{ alignItems: 'center' }}>
              <Button
                variant="rounded"
                mt={14}
                background={COLORS.aquaGreen}
                onPress={handleLoginButtonPress}
                loading={loading}
                disabled={loading}>
                <Typography fontFamily={FONTS.bold} fontWeight="bold1">
                  LOG IN
                </Typography>
              </Button>
              <Button
                variant="primary"
                mt={21}
                onPress={() => {}}
                disabled={loading}>
                <Typography fontFamily={FONTS.bold} fontWeight="bold1">
                  Forgot my password
                </Typography>
              </Button>
            </View>
          </ScreenLayout>
        </LinearGradient>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
