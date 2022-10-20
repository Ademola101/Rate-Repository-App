import React from 'react';
import { View, StyleSheet, Text as NativeText, Pressable, ScrollView, } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';
import useAuthStorage from '../hooks/useAuthStorage';
import { useMutation, useApolloClient, useQuery } from '@apollo/client';
import { LOGOUT } from '../graphql/queries';
import SignOut from './SignOut';


const AppBar = () => {
  const authStorage = useAuthStorage();
  const { data } = useQuery(LOGOUT);
  const apolloClient = useApolloClient();
  console.log('data', data?.me?.username);
  // const logout = async () => {



  //   await authStorage.removeAccessToken();
  //   apolloClient.resetStore();
  // };


  const signOut = async () => {
    await authStorage.removeToken();
    apolloClient.resetStore();

  };

  return (
    <View style = {styles.container}>


      <ScrollView horizontal>
        <Link to = "/" component = {Pressable} style = {styles.link}>
          <NativeText style = {styles.text}>Repositories</NativeText>
        </Link>

        {
          data?.me ? (
            <SignOut onPress = {signOut} /> ) : (<Link to ='/signin'>
            <NativeText style = {styles.text}> Sign In</NativeText>


          </Link>)
        }

      </ScrollView>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColor.dark,
    alignSelf: 'stretch',
    marginBottom: 40,
  },

  text: {
    color: theme.colors.textLight,
    fontSize: theme.fontSizes.heading,
    margin: 15
  }
});

export default AppBar;
