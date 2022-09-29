import React from 'react';
import { View, StyleSheet, TextInput as NativeTextInput } from 'react-native';

const TextInput = ({ style, error, ...props }) => {

  const NativeInputTextStyle = [style];
  return <NativeTextInput style = {NativeInputTextStyle} {...props}/>;





};

const styles = StyleSheet.create({});

export default TextInput;
