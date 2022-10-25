import { StyleSheet, FlatList, View } from 'react-native';
import React from 'react';
import SingleRepo from './SingleRepo';
import { REPOSITORY } from '../graphql/queries';
import Review from './Review';
import { GET_REVIEW } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-native';

const itemSeparator = () => <View style = {styles.separator}/>;

const SingleRepoPage = () => {
  const { id } = useParams();
  const result = useQuery(GET_REVIEW, {
    variables: {
      id: id
    }
  });

  const { data } = useQuery(REPOSITORY,{
    variables: {
      id: id
    },
    fetchPolicy: 'cache-and-network'
  });
  console.log(result);

  const review = result?.data?.repository?.reviews?.edges.map(edge => edge.node);
  console.log('review', review);

  return (

    <FlatList
      data = {review}
      renderItem = {({ item }) => <Review review={item}/>}
      keyExtractor = {({ id }) => id}
      ListHeaderComponent = {() => <SingleRepo data={data}/>}
      ItemSeparatorComponent = {itemSeparator}
      contentContainerStyle={{ paddingBottom: 100
      }}

    />
  );
};

export default SingleRepoPage;

const styles = StyleSheet.create({

  separator: {
    height: 10,
    backgroundColor: 'lightgray',
    marginBottom: 10,
    marginTop: 10,
  },
});