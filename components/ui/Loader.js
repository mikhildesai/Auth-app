import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';;
import React from 'react';

export default function Loader({message}) {
  return (
    <View style={styles.container}>
        
      <ActivityIndicator color="blue" size="large" />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:32,
  },
  message:{
    fontSize:16,
    fontWeight:'bold',
    color:'blue'
  }
})
