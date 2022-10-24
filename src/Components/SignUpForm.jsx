import { View, Text, Button } from 'react-native';
import React from 'react';
import FormikTextInput from './FormikTextInput';

const SignUpForm = ({ onSubmit }) => {
  return (
    <View>
      <Text>SignUpForm</Text>
      <FormikTextInput name = 'username' placeholder = 'Username'/>
      <FormikTextInput name = 'password' placeholder = 'Password'/>
      <FormikTextInput name = 'passwordConfirm' placeholder = 'Password Confirmation'/>
      <Button title = 'submit' onPress = {onSubmit}/>

    </View>
  );
};

export default SignUpForm;