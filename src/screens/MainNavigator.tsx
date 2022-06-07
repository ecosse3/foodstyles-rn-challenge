import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createNavigationContainerRef } from '@react-navigation/native';

import UnprotectedNavigator from './Unprotected/UnprotectedNavigator';
import ProtectedNavigator from './Protected/ProtectedNavigator';

import { MainNavigatorParams } from './MainNavigatorParams';

// import ProtectedNavigator from './Protected/ProtectedNavigator';

import { ProtectedRoute, UnprotectedRoute } from './routes';

const Stack = createNativeStackNavigator<MainNavigatorParams>();

export const navigationRef = createNavigationContainerRef();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
      initialRouteName={UnprotectedRoute}>
      <Stack.Screen name={UnprotectedRoute} component={UnprotectedNavigator} />
      <Stack.Screen name={ProtectedRoute} component={ProtectedNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
