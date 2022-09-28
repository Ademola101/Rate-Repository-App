import React from 'react';
import { View,  Text, Image, StyleSheet } from 'react-native';
import theme from '../theme';

const RepositoryItem = ({ repositories }) => {
  console.log(repositories.reviewCount);
  return (

    <View>
      <View style = {styles.wrapper}>
        <Image source = {{ uri: repositories.ownerAvatarUrl }}  style={styles.image}/>
        <View >
          <Text style = {styles.fullname}>
            {repositories.fullName}
          </Text>

          <Text>
            {repositories.description}
          </Text>

          <Text>
            {repositories.language}
          </Text>
        </View>


      </View>
      <View style = {styles.count}>

        <View>
          <Text>
            {repositories.forksCount}
          </Text>
          <Text>
            Forks
          </Text>

        </View>
        <View>
          <Text>
            {repositories.stargazersCount}
          </Text>
          <Text>
            Stars
          </Text>

        </View>

        <View>
          <Text>
            {repositories.reviewCount}
          </Text>
          <Text>
            Reviews
          </Text>

        </View>

        <View>
          <Text>
            {repositories.ratingAverage}
          </Text>
          <Text>
            Rating
          </Text>

        </View>


      </View>


    </View>
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
