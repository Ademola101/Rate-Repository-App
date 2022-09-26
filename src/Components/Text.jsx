import React from 'react';
import {View, StyleSheet, Text as NativeText} from 'react-native';
import theme from '../theme';

const Text = ({color, fontSize, fontWeight, style, ...props}) => {
  const textStyle = [
    style.text,
    color === 'textSecondary' && style.colorTextSecondary,
    color === 'primary' && style.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && style.fontWeigthBold,
    style
  ]
  return (
    <View>
      <NativeText style = {textStyle} {...props}/>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color : theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal

  },

  colorTextSecondary: {
    color: theme.colors.textSecondary,

  },

  colorPrimary:{
    color: theme.colors.textPrimary
  },

  fontSizeSubHeading : {
    fontSize: theme.fontSizes.subheading
  },

  fontWeightBold: {
    fontWeight: theme.fontWeights.bold
  }
  
})

export default Text;
