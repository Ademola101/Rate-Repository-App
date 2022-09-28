import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';

const styles = StyleSheet.create({

  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow : 1,
    flex: 1,
  }
});

const Main = () => {
  return (
    <View style = {styles.container} >
      <AppBar/>

      <RepositoryList/>

    </View>
  );
};


export default Main;
