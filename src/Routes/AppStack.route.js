import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from '../screens/Dashboard';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name='Home' component={Home} options={{ title: 'Home' }} />
    </Stack.Navigator>
  );
}

export default AppStack;