import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';

import React, {useContext, useState} from 'react';
import {Colors} from '../../constants/styles';
import Field from './Field';
import FlatButton from './FlatButton';
import {useNavigation} from '@react-navigation/native';
import {signIn, signUp} from '../../utils/auth';
import Loader from './Loader';
import {AuthContext} from '../../store/auth-context';

export default function Form({toggle}) {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const AuthCntx = useContext(AuthContext);

  const emailIsValid = email.includes('@');
  const confirmEmailIsValid = email === confirmEmail;
  const passwordIsValid = password.length > 6;
  const confirmPasswordIsValid = password === confirmPassword;

  // if (
  //   !emailIsValid ||
  //   !confirmEmailIsValid ||
  //   !passwordIsValid ||
  //   !confirmPasswordIsValid
  // ) {
  //   Alert.alert(
  //     'some fields are not valid',
  //     'Please Check your input data and try again!',
  //   );
  // }

  function updateValueHandler(type, value) {
    switch (type) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmEmail':
        setConfirmEmail(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
    }
  }

  async function PressHandler() {
    const obj = {
      email: email,
      password: password,
      confirmEmail: confirmEmail,
      confirmPassword: confirmPassword,
    };

    if (toggle) {
      setIsLoading(true);
      try {
        const token = await signIn(obj.email, obj.password);
        AuthCntx.authenticate(token);
      } catch (error) {
        Alert.alert(
          'Something Went Wrong!',
          'Please check Your Credentails and Try Again!',
        );
        setIsLoading(false);
      }
    } else {
      setIsLoading(true);
      try {
        const token = await signUp(obj.email, obj.password);
        AuthCntx.authenticate(token);
      } catch (error) {
        Alert.alert('Something Went Wrong!', 'Please Check Your Input Data');
        setIsLoading(false);
      }
    }
  }
  if (isLoading) {
    return <Loader message="Please Wait ..." />;
  }
  return (
    <View style={styles.container}>
      <Field
        label="Email"
        placeholder="Enter your email address"
        value={email}
        invalid={!emailIsValid}
        onUpdateText={updateValueHandler.bind(this, 'email')}
      />
      {!toggle && (
        <Field
          label="Confirm Email"
          placeholder="Enter your email again"
          value={confirmEmail}
          invalid={!confirmEmailIsValid}
          onUpdateText={updateValueHandler.bind(this, 'confirmEmail')}
        />
      )}
      <Field
        label="Password"
        placeholder="Enter your password"
        value={password}
        secure={true}
        invalid={!passwordIsValid}
        onUpdateText={updateValueHandler.bind(this, 'password')}
      />
      {!toggle && (
        <Field
          label="Confirm Password"
          placeholder="Enter your password Again"
          secure={true}
          invalid={!confirmPasswordIsValid}
          value={confirmPassword}
          onUpdateText={updateValueHandler.bind(this, 'confirmPassword')}
        />
      )}
      <FlatButton
        title={toggle ? 'Log In' : 'Sign Up'}
        onPress={PressHandler}
      />

      {!toggle ? (
        <Pressable
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.text}>Existing User? Login here</Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text style={styles.text}>New User? Signup here</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
});
