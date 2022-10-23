import { View, Text, Button } from 'react-native';
import React from 'react';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';


const validationSchema = yup.object().shape({
  username: yup.string().required(),
  name: yup.string().required(),
  rating: yup.number().required().min(0).max(100),
  review: yup.string()
});

const initialValus = {
  username: '',
  name: '',
  rating: '',
  review: ''
};
function ReviewForm({ handleSubmit }) {
  return (
    <View>
      <Text>ReviewForm</Text>
      <View>
        <FormikTextInput name='username' placeholder = 'Enter Github username' />
        <FormikTextInput name='name' placeholder = 'Enter Github Repo name' />
        <FormikTextInput name='rating' placeholder = 'Enter rating' />
        <FormikTextInput name='review' placeholder = 'Enter review' />
        <Button onPress = {handleSubmit} title = 'submit'/>
      </View>

    </View>
  );
}

export default function ReviewFormik() {
  return (
    <Formik

      initialValues = {initialValus}
      onSubmit = {values => console.log(values)}
      validationSchema = {validationSchema}

    >

      {({ handleSubmit }) => <ReviewForm handleSubmit={handleSubmit}/>}
    </Formik>

  );
}