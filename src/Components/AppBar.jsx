import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const AppBar = () => {
  return (
    <View style = {styles.container}>
      <Pressable>
      <Text style = {styles.text}>
        Repositories
      </Text>
      </Pressable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColor.dark,
    alignSelf: 'stretch',
    

  },

  text: {
    color: theme.colors.textLight,
    fontSize: theme.fontSizes.heading,
    margin: 15
  }
})

export default AppBar;
