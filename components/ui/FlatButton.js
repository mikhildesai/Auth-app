import {View, Text, Pressable, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/styles';

export default function FlatButton({title, onPress}) {
  return (

      <View style={styles.buttonContainer}>
            <TouchableOpacity  onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      </View>
  
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primary500,
    padding: 10,
    marginHorizontal: 40,
    marginVertical: 10,
    borderRadius: 8,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },

  
});
