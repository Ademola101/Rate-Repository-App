import  Text from './Text';

import React from 'react';
import { View, StyleSheet } from 'react-native';

const Count = ({ repositories, text }) => {
  return (
    <View style = {styles.container}>
      <Text content={repositories}/>
      <Text content={text}/>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
  }
});

export default Count;
