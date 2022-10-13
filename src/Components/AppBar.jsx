import React from 'react';
import { View, StyleSheet, Text as NativeText, Pressable, ScrollView, } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';
const AppBar = () => {
  return (
    <View style = {styles.container}>

      <ScrollView horizontal>
        <Pressable>
          <NativeText style = {styles.text}>
        Repositories
          </NativeText>
        </Pressable>


        <Link to ='/signin'>
          <NativeText style = {styles.text}> Sign in </NativeText>

        </Link>
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
