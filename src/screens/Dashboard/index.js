import React, { useContext } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthMain } from '../../Contexts/AuthContex';

const Home = () => {
  const { isLogged, signout } = AuthMain();

  const handlerSignOut = () => {
    signout();
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        HOME PAGE
      </Text>
      <TouchableOpacity style={styles.primaryButton} onPress={handlerSignOut}>
        <Text style={styles.textButton}>Sign-Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home;


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
    borderRadius: 25,
  },
  textButton: {
    color: '#FFF'
  }
})

