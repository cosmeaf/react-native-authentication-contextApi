import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';


const Schedule = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>
          SCHEDULE PAGE
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Schedule;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

