import React from 'react';
import { ApolloProvider } from '@apollo/client';
import ChildrenProps from '@interfaces/ChildrenProps';
import { client } from '@services/client';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '@screens/MainNavigator';
import { Provider } from 'react-redux';
import store from '@store';

export function Providers({ children }: ChildrenProps) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          {children}
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
}
