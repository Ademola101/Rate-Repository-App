import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import useSignIn from '../hooks/useSignIn';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';



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

export const SignInContainer = ({ onSubmit, }) => {

  const initialValues = {
    username:'',
    password: ''
  };
  return (
    <Formik initialValues={initialValues}
      onSubmit = {(values) => onSubmit(values)}
      validationSchema = {validationSchmea}

    >

      {({ handleSubmit }) => <SignIn handleSubmit={handleSubmit}/>}
    </Formik>
  );
};


const SignInForm = () => {

  const navigate = useNavigate();

  const [signIn] = useSignIn();
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const user =  await signIn({ username, password });
      if (user) {
        navigate('/');
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <SignInContainer onSubmit={onSubmit}/>
  );
};
const styles = StyleSheet.create({
  Button: {
    margin: 10,
  }
});

export default SignInForm;
