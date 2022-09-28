import React from 'react';
import Text from './Text';
import { View,  Image, StyleSheet, } from 'react-native';
import theme from '../theme';
import Count from './Count';


const RepositoryItem = ({ repositories }) => {
  return (

    <View>
      <View style = {styles.wrapper}>
        <Image source = {{ uri: repositories.ownerAvatarUrl }}  style={styles.image}/>
        <View style = {styles.heading} >
          <Text color= 'primary' fontWeight= 'bold' fontSize= 'subheading' content={repositories.fullName} />
          <Text color= 'primary'  fontSize= 'subheading' content={repositories.description} style = {styles.margin}/>
          <Text style={styles.blueText} align= 'start' bg= 'blue' color= 'primary'  fontSize= 'subheading' content={repositories.language} />

        </View>


      </View>
      <View style = {styles.count}>


        <Count text= 'Forks' repositories={repositories.forksCount}/>
        <Count text= 'Stars' repositories={repositories.stargazersCount}/>
        <Count text= 'Reviews' repositories={repositories.reviewCount}/>
        <Count text= 'Rating' repositories={repositories.ratingAverage}/>






      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  fullname: {
    fontWeight: theme.fontWeights.bold,
    marginBottom: 5,
  },
  count:{
    flexDirection: 'row',
    alignItems: 'space-around',
    justifyContent: 'space-around',
    marginLeft: 50,
  },

  number: {
    fontWeight: theme.fontWeights.bold
  },
  numbercontainer: {
    alignItems: 'space-around'

  },

  image : {
    width: 50,
    height: 50,
    marginRight:20,
    marginLeft: 20

  },
  heading: {
    flexShrink: 1,
    gap: 10,
    justifyContent: 'space-around'
  },

  blueText: {
    padding: 5,
    borderRadius: 5,
    margingTop: 10,
  },
  margin: {
    margin: 10
  }
});

export default RepositoryItem;
