import React, { useContext } from 'react';
import { View, ActivityIndicator } from "react-native";
import { AuthMain } from '../Contexts/AuthContex';


import AppStack from './AppStack.route';
import AuthStack from './AuthStack.route';


const Route = () => {
  const { authentication, isLoading } = AuthMain();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color="#38A69D" />
      </View>
    );
  }

  return authentication ? <AppStack /> : <AuthStack />
}

export default Route;