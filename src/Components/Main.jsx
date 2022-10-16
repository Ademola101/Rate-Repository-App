import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Routes, Navigate } from 'react-router-native';
import SignInForm from './SignIn';

const styles = StyleSheet.create({

  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow : 1,
  }
});

const Main = () => {
  return (
    <View style = {styles.container} >
      <AppBar/>
      <Routes>
        <Route path="/" element={<RepositoryList/>} exact/>
        <Route path='signin' element = {<SignInForm/>} exact />
        <Route path= '*' element={<Navigate to="/"  replace/> }/>
      </Routes>

    </View>
  );
};


export default Main;
