import React from 'react';
import { View, StyleSheet, Text as NativeText } from 'react-native';
import theme from '../theme';
const Text = ({ color, fontSize, fontWeight, style, bg, content, align }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'blue' && styles.colorBlue,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeigthBold,
    bg === 'blue' && styles.bgBlue,
    align === 'start' && styles.alignStart,

    style
  ];
  return (
    <View>
      <NativeText style = {textStyle}> {content}</NativeText>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color : theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
    flexShrink: 1,
    flexGrow: 1,
  },

  colorTextSecondary: {
    color: theme.colors.textSecondary,

  },
  colorBlue: {
    color: theme.colors.textBlue,
  },

  colorPrimary:{
    color: theme.colors.textPrimary
  },

  fontSizeSubHeading : {
    fontSize: theme.fontSizes.subheading
  },

  fontWeightBold: {
    fontWeight: theme.fontWeights.bold
  },

  bgBlue: {
    backgroundColor: theme.backgroundColor.blue
  },
  alignStart: {
    alignSelf: theme.alignSelf.start
  }

});

export default Text;
