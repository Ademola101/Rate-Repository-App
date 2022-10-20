import { View, Text, Pressable, StyleSheet } from 'react-native';
import theme from '../theme';
import React from 'react';

export default function SignOut({ onPress }) {
  return (
    <View style = {
      styles.container
    }>
      <Pressable onPress = {onPress} >
        <Text style = {
          styles.text
        } >Sign Out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({

  text: {
    color: theme.colors.textLight,
    fontSize: theme.fontSizes.heading,
    margin: 15
  },
});