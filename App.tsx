import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/routes/MainStack';
import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';

const App = () => {

  return (
    <NativeBaseProvider >
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;