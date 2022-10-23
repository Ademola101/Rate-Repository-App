import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import theme from '../theme';
const Review = ({ review }) => {

  const dateFormater = (date) => {
    const d = new Date(date);
    const newDate = d.toISOString().split('T')[0];
    return newDate;
  };

  return (
    <View style = {styles.container}>

      <View style = {styles.textcontainer} >
        <Text style = {styles.ratingNumber}>{review.rating}</Text>
      </View>

      <View style = {styles.usercontainer}>
        <Text style = {styles.name}>{review.user.username}</Text>
        <Text style = {styles.date}>{dateFormater(review.createdAt)}</Text>
        <Text style = {styles.reviewtext} >{review.text}</Text>
      </View>

    </View>
  );
};

export default Review;

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    flexShrink: 1,
    marginBottom: 15,
    marginTop: 15,
    flexDirection: 'row',
    gap:20

  },

  ratingNumber: {
    flexGrow: 1,
    flexShrink: 1,
    marginBottom: 15,
    backgroundColor: 'lightgray',
    borderRadius: 50,
    padding: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'solid',
    color: theme.colors.primary,
  },

  textcontainer: {
    flex: 1
  },

  usercontainer: {
    flex:5,
    gap: 10,
  },

  name: {
    fontWeight: theme.fontWeights.bold,
  },

  reviewtext: {
    marginBottom: 15,
    marginTop: 15,
    flexDirection: 'row',
  },

  date: {
    color: 'gray',
  }
});