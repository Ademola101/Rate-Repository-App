import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useQuery } from '@apollo/client';
import { ALL_REPOSITORIES } from '../graphql/queries';


const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: 'lightgray',
    marginBottom: 40,
    marginTop: 40,
  },
  view: {
    flex: 1,
  }
});
const ItemSeparator = () => <View style = {styles.separator}/>;

const RepositoryList = () => {

  const { data } = useQuery(ALL_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  });
  const repositoryNodes = data?.repositories.edges.map(edge => edge.node);
  console.log(repositoryNodes);

  const renderItem  = ({ item }) => (
    <RepositoryItem repositories={item}/>
  );

  return ( <View style = {styles.view}>

    <FlatList data = {repositoryNodes}

      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />


  </View>

  );
};



export default RepositoryList;
