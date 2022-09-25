import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Constants from 'expo-constants';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({

  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow : 1,
    flexShrink : 1,
  }
})

const Main = () => {
  return (
    <View styles = {styles.container}>
      <Text>Rate repository app</Text>
      
      <RepositoryList/>
      
    </View>
  );
}


export default Main;
