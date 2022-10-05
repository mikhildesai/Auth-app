import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/styles';

export default function Field({label, placeholder, value, onUpdateText, secure, invalid}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
      <TextInput
        style={[styles.textInput, invalid && styles.invalidTextField]}
        placeholder={placeholder}
        value={value}
        onChangeText={onUpdateText}
        secureTextEntry={secure}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
  textInput: {
    backgroundColor: Colors.primary100,
    borderRadius: 8,
  },
  label: {
    color: 'white',
    fontSize: 16,
  },
  invalidLabel:{
    color: Colors.error500,
  },
  invalidTextField:{
    backgroundColor: Colors.error100,
  }
})
