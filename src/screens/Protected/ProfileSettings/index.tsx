import React, { useCallback, useState } from 'react';
import FormController from '@components/FormController';
import ScreenLayout from '@layouts/ScreenLayout';
import { useForm } from 'react-hook-form';
import { Dimensions, View } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import Typography from '@components/Typography';
import COLORS from '@theme/colors';
import FONTS from '@theme/fonts';
import Button from '@components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProtectedRoute } from '@screens/routes';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '@store/slices/authSlice';
import { AppDispatch } from '@store';
import { ProtectedNavigatorParams } from '../ProtectedNavigatorParams';
import styles from './styles';
import profileSettingsSchema from './profileSettingsSchema';

interface ProfileSettingsFields {
  name: string;
  email: string;
}

type SignInNavigationProp = NativeStackNavigationProp<
  ProtectedNavigatorParams,
  typeof ProtectedRoute
>;

export const ProfileSettingsScreen = () => {
  const { bottom } = useSafeAreaInsets();

  const user = useSelector(selectUser);
  const dispatch = useDispatch<AppDispatch>();

  const navigation: SignInNavigationProp = useNavigation();

  const [loading, setLoading] = useState<boolean>(false);

  const { control, handleSubmit } = useForm<ProfileSettingsFields>({
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
    },
    resolver: yupResolver(profileSettingsSchema()),
    mode: 'onChange',
  });

  const onSubmit = useCallback(async () => {
    if (loading) return;

    setLoading(true);

    try {
      setLoading(false);
      navigation.navigate('ProtectedRoute', { screen: 'CardsScreenRoute' });
    } catch (error) {
      setLoading(false);
    }
  }, [loading, navigation]);

  const handleDoneButtonPress = useCallback(() => {
    handleSubmit(onSubmit)();
  }, [handleSubmit, onSubmit]);

  const handleLogoutPress = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <View>
      <View style={{ height: Dimensions.get('screen').height - 2 * bottom }}>
        <ScreenLayout>
          <View>
            <Typography
              fontFamily={FONTS.bold}
              fontWeight="bold1"
              color={COLORS.greyishBrown}
              mb={10}>
              PROFILE
            </Typography>
          </View>
          <View>
            <FormController
              control={control}
              name="name"
              label="Name shown on your shared cards"
              mode="light"
            />
            <FormController
              control={control}
              name="email"
              label="Email"
              keyboardType="email-address"
              mode="light"
            />
          </View>
        </ScreenLayout>
      </View>
      <View style={styles({ bottom }).bottomComponent} />
      <View
        style={{
          position: 'absolute',
          bottom: 1.5 * bottom,
          alignSelf: 'center',
        }}>
        <Button
          style={styles({ bottom }).logout}
          variant="outline"
          onPress={handleLogoutPress}>
          <Typography
            fontFamily={FONTS.bold}
            fontWeight="medium1"
            fontSize="body3"
            color={COLORS.greyishBrown}>
            LOG OUT
          </Typography>
        </Button>
        <View style={{ height: 41 }} />

        <Button
          loading={loading}
          disabled={loading}
          style={styles({ bottom }).done}
          variant="rounded"
          background={COLORS.aquaGreen}
          onPress={handleDoneButtonPress}>
          <Typography fontFamily={FONTS.bold} fontWeight="bold1">
            DONE
          </Typography>
        </Button>
      </View>
    </View>
  );
};
