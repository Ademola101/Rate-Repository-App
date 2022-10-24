import { View, Text, Button, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';
import { CREATE_REVIEW } from '../graphql/mutations';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-native';



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
    <KeyboardAvoidingView behavior= {Platform.OS === 'ios' ? 'padding' : 'height'} >
      <View>
        <Text>ReviewForm</Text>
        <View>
          <FormikTextInput name='username' placeholder = 'Repository Owner Name' />
          <FormikTextInput name='name' placeholder = 'Repository Name' />
          <FormikTextInput name='rating' placeholder = 'Rating between 0 and 100' />
          <FormikTextInput name='review' placeholder = 'Review' multiline />
          <Button onPress = {handleSubmit} title = 'Create a review'/>
        </View>


      </View>
    </KeyboardAvoidingView>
  );
}

export default function ReviewFormik() {
  const navigate = useNavigate();
  const [createReview] = useMutation(CREATE_REVIEW);
  const onSubmit = async(values) => {
    console.log(values);
    const { username, name, rating, review } = values;
    try {
      const { data } = await createReview({
        variables: { ownerName:username, repositoryName: name, rating: Number(rating), text: review }
      });
      console.log(data);
      const id = data.createReview.repositoryId;
      navigate(`repository/${id}`);
    } catch (e) {
      console.log(e);
    }

  };
  return (
    <Formik

      initialValues = {initialValus}
      onSubmit = {values => onSubmit(values)}
      validationSchema = {validationSchema}

    >

      {({ handleSubmit }) => <ReviewForm handleSubmit={handleSubmit}/>}
    </Formik>

  );
}