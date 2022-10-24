import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextInput from './TextInput';
import Text from './Text';
import { useField } from 'formik';
import theme from '../theme';

const FormikTextInput = ({ name, ...props }) => {

  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  const inputStyle = [styles.inputStyle, showError ? styles.errorInput : {

  }];
  return (

    <View>
      <Text content = {name}/>
      <TextInput style={inputStyle} onChangeText = {value => helpers.setValue(value)}
        onBlur = {() => helpers.setTouched(true)}
        value = {field.value}
        error = {showError}
        {...props}
      />

      {showError && <Text style={styles.errorText} content = {meta.error}/>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor:theme.colors.textLightGrey,
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  errorText: {
    color: theme.colors.error,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
  },

  errorInput: {
    borderColor: theme.colors.error,
  }

});

export default FormikTextInput;
