import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Routes, Navigate } from 'react-router-native';
import SignInForm from './SignInForm';
import SingleRepoPage from './SingleRepoPage';
import ReviewFormik from './ReviewForm';
import SignUp from './SignUp';

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

        <Route path='/repository/:id' element={<SingleRepoPage/>} exact/>
        <Route path='createreview' element = {<ReviewFormik/>} />
        <Route path='signup' element = {<SignUp/>} exact/>
      </Routes>

    </View>
  );
};


export default Main;
