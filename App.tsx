import { NativeBaseProvider } from 'native-base';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './src/screen/Main';
import Scan from './src/screen/Scan';
import Login from './src/screen/Login';
import Receipt from './src/screen/Receipt';
import StockOrder from './src/screen/StockOrder';
import Signup from './src/screen/Signup';
import SelectStore from './src/screen/SelectStore';
import React from 'react';
import EnrollProduct from './src/screen/EnrollProduct';
import ManageProduct from './src/screen/ManageProduct';

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
            name='Signup'
            component={Signup}
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
          <Stack.Screen name='SelectStore' component={SelectStore} />
          <Stack.Screen name='EnrollProduct' component={EnrollProduct} />
          <Stack.Screen name='ManageProduct' component={ManageProduct} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
