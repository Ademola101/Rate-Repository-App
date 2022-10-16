import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';
const SignIn = ({ handleSubmit }) => {


  return (
    <View>
      <Text content= 'Enter your username and password' />


      <FormikTextInput name= 'username' placeholder = 'Username'/>
      <FormikTextInput name= 'password' placeholder = 'Password' secureTextEntry= {true} />
      <View style = {styles.Button}>
        <Button  onPress={handleSubmit} title="Sign in"/>
      </View>





    </View>
  );
};

const validationSchmea = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignInForm = () => {
  const initialValues = {
    username:'',
    password: ''
  };
  return (
    <Formik initialValues={initialValues}
      onSubmit = {values => console.log(values)}
      validationSchema = {validationSchmea}

    >

      {({ handleSubmit }) => <SignIn handleSubmit={handleSubmit}/>}
    </Formik>
  );
};
const styles = StyleSheet.create({
  Button: {
    margin: 10,
  }
});

export default SignInForm;
