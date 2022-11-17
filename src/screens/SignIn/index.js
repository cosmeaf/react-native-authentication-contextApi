import React, { useContext } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthMain } from '../../Contexts/AuthContex';

const SignIn = () => {
  const { isLogged, signin } = AuthMain();

  function handleSignIn() {
    const username = 'cosmeaf';
    const password = 'qweasd32'
    signin(username, password);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        LOGIN PAGE
      </Text>
      <TouchableOpacity style={styles.primaryButton} onPress={handleSignIn}>
        <Text style={styles.textButton}>Sign-In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default SignIn;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButton: {
    width: 100,
    backgroundColor: '#69A38D',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#FFF'
  }
})

