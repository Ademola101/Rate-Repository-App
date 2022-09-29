import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
const SignIn = ({ handleSubmit }) => {


  return (
    <View>
      <Text content= 'Sign' />


      <FormikTextInput name= 'username' placeholder = 'Username'/>
      <FormikTextInput name= 'password' placeholder = 'Password'/>
      <Button onPress={handleSubmit} title="Sign in"/>




    </View>
  );
};


const SignInForm = () => {
  const initialValues = {
    username:'',
    password: ''
  };
  return (
    <Formik initialValues={initialValues}
      onSubmit = {values => console.log(values)}>

      {({ handleSubmit }) => <SignIn handleSubmit={handleSubmit}/>}
    </Formik>
  );
};
const styles = StyleSheet.create({});

export default SignInForm;
