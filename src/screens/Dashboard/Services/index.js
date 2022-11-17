import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';


const Services = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>
          SERVICES PAGE
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Services;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

