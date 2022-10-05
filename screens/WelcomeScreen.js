import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../constants/styles';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.message}>Authentication Sucessfull!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    color: Colors.primary500,
  },
  message: {
    fontSize: 16,
    color: 'green',
  }
})