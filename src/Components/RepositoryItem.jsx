import React from 'react';
import Text from './Text';
import { View,  Image, StyleSheet, ScrollView } from 'react-native';
import theme from '../theme';
import Count from './Count';


const RepositoryItem = ({ repositories }) => {
  console.log(repositories.reviewCount);
  return (

    <ScrollView>
      <View style = {styles.wrapper}>
        <Image source = {{ uri: repositories.ownerAvatarUrl }}  style={styles.image}/>
        <View >
          <Text color= 'primary' fontWeight= 'bold' fontSize= 'subheading' content={repositories.description} />
          <Text color= 'primary' fontWeight= 'bold' fontSize= 'subheading' content={repositories.language} />

        </View>


      </View>
      <View style = {styles.count}>


        <Count text= 'Forks' repositories={repositories.forksCount}/>
        <Count text= 'Stars' repositories={repositories.stargazersCount}/>
        <Count text= 'Reviews' repositories={repositories.reviewCount}/>
        <Count text= 'Rating' repositories={repositories.ratingAverage}/>






      </View>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  fullname: {
    fontWeight: theme.fontWeights.bold,
    marginBottom: 5,
  },
  count:{
    flexDirection: 'row',
    alignItems: 'space-around',
    justifyContent: 'space-around'
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

  }
});

export default RepositoryItem;
