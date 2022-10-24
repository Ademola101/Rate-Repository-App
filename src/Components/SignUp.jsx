import { View } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import SignUpForm from './SignUpForm';
import { CREATE_USER } from '../graphql/mutations';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-native';
import useSignIn from '../hooks/useSignIn';

const SignUp = () => {

  const [siginUpMutation] = useMutation(CREATE_USER);
  const navigate = useNavigate();

  const [signIn] = useSignIn();
  const initialValues = {
    username: '',
    password: '',
    passwordConfirm: ''
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
    passwordConfirm: yup.string().required('Password confirmation is required').oneOf([yup.ref('password'), null], 'Passwords must match')

  });

  const onSubmit = async(values) => {

    const  { username, password } = values;
    try { await siginUpMutation({
      variables: {
        username,
        password
      }
    });
    const user = await signIn({ username, password });

    if (user) {
      navigate('/');

    }




    } catch (error) {
      console.log(error);

    }

  };
  return (
    <View>
      <Formik initialValues = {initialValues}
        onSubmit = {values => onSubmit(values)}
        validationSchema = {validationSchema}
      >

        {({ handleSubmit }) => <SignUpForm onSubmit = {handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignUp;