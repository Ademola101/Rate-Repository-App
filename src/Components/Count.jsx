import  Text from './Text';

import React from 'react';
import { View, StyleSheet } from 'react-native';

const Count = ({ repositories, text }) => {
  return (
    <View>
      <View>
        <Text content={repositories}/>
        <Text content={text}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Count;
