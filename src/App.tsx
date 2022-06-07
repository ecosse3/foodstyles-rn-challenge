import React from 'react';

import { Providers } from '@features/providers';
import { StatusBar, useColorScheme, LogBox } from 'react-native';
import MainNavigator from '@screens/MainNavigator';

LogBox.ignoreAllLogs();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Providers>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <MainNavigator />
    </Providers>
  );
}

export default App;
