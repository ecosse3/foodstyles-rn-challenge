import React, { useLayoutEffect } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { useSelector } from 'react-redux';
import { selectUser } from '@store/slices/authSlice';
import { UnprotectedRoute } from '../routes';
import { SignInRoute } from '../Unprotected/routes';

import { UnprotectedNavigatorParams } from '../Unprotected/UnprotectedNavigatorParams';

import { ProtectedNavigatorParams } from './ProtectedNavigatorParams';
import {
  CardOptionsScreenRoute,
  CardsScreenRoute,
  ProfileSettingsScreenRoute,
} from './routes';
import { ProfileSettingsScreen } from './ProfileSettings';
import { CardsScreen } from './CardsScreen';
import CardOptions from './CardOptions';

const Stack = createNativeStackNavigator<ProtectedNavigatorParams>();

type ProtectedNavigationProp = NativeStackNavigationProp<
  UnprotectedNavigatorParams,
  typeof UnprotectedRoute
>;

interface ProtectedNavigationProps {
  navigation: ProtectedNavigationProp;
}

const ProtectedNavigator = ({ navigation }: ProtectedNavigationProps) => {
  const user = useSelector(selectUser);

  useLayoutEffect(() => {
    if (!user) {
      navigation.reset({
        index: 0,
        routes: [{ name: UnprotectedRoute, params: { screen: SignInRoute } }],
      });
    }
  }, [navigation, user]);

  return (
    <Stack.Navigator
      initialRouteName={ProfileSettingsScreenRoute}
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        presentation: 'transparentModal',
      }}>
      <Stack.Screen
        name={ProfileSettingsScreenRoute}
        component={ProfileSettingsScreen}
      />
      <Stack.Screen name={CardsScreenRoute} component={CardsScreen} />
      <Stack.Screen name={CardOptionsScreenRoute} component={CardOptions} />
    </Stack.Navigator>
  );
};

export default ProtectedNavigator;
