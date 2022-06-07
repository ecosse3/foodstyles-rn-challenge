import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignInRoute, SignInOptionsRoute, SignUpEmailRoute } from './routes';

import SignInOptions from './SignInOptions';
import SignIn from './SignIn';

import { UnprotectedNavigatorParams } from './UnprotectedNavigatorParams';
import SignUpEmail from './SignUpEmail';

const Stack = createNativeStackNavigator<UnprotectedNavigatorParams>();

const UnprotectedNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SignInOptionsRoute}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SignInOptionsRoute} component={SignInOptions} />
      <Stack.Screen name={SignInRoute} component={SignIn} />
      <Stack.Screen name={SignUpEmailRoute} component={SignUpEmail} />
    </Stack.Navigator>
  );
};

export default UnprotectedNavigator;
