import React from 'react';
import Text from './Text';
import { View,  Image, StyleSheet, Pressable } from 'react-native';
import theme from '../theme';
import Count from './Count';
import { useNavigate } from 'react-router-native';


const RepositoryItem = ({ repository }) => {
  const navigate = useNavigate();

  return (
    <Pressable onPress={() => navigate(`/repository/${repository.id}`)}>

      <View>
        <View testID = 'repositoryItem' style = {styles.wrapper}


        >
          <Image source = {{ uri: repository?.ownerAvatarUrl }}  style={styles.image}/>
          <View style = {styles.heading} >
            <Text color= 'primary' fontWeight= 'bold' fontSize= 'subheading' content={repository?.fullName} />
            <Text color= 'primary'  fontSize= 'subheading' content={repository?.description} style = {styles.margin}/>
            <Text style={styles.blueText} align= 'start' bg= 'blue' color= 'primary'  fontSize= 'subheading' content={repository?.language} />

          </View>


        </View>
        <View style = {styles.count}>


          <Count text= 'Forks' repository={repository?.forksCount}/>
          <Count text= 'Stars' repository={repository?.stargazersCount}/>
          <Count text= 'Reviews' repository={repository?.reviewCount}/>
          <Count text= 'Rating' repository={repository?.ratingAverage}/>






        </View>


      </View>
    </Pressable>
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
