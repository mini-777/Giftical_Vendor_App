import { NativeBaseProvider } from 'native-base';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './src/screen/Main';
import Scan from './src/screen/Scan';
import Login from './src/screen/Login';
import Receipt from './src/screen/Receipt';
import StockOrder from './src/screen/StockOrder';
import React from 'react';

const MainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer theme={MainTheme}>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name='Login'
            component={Login}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='Main'
            component={Main}
            options={{ headerShown: false }}
          />

          <Stack.Screen name='Scan' component={Scan} />

          <Stack.Screen
            name='Receipt'
            component={Receipt}
            options={{ headerShown: false }}
          />

          <Stack.Screen name='StockOrder' component={StockOrder} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
