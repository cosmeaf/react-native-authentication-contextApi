import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';


const Vehicle = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>
          VEHICLE PAGE
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Vehicle;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

