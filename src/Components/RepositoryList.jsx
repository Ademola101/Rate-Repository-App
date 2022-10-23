import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

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

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes =  repositories?.edges.map(edge => edge.node);

  const renderItem  = ({ item }) => (
    <RepositoryItem repository={item}/>
  );
  return (
    <View style = {styles.view}>

      <FlatList data = {repositoryNodes}

        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />


    </View>
  );
};



const RepositoryList = () => {

  const { repositories } = useRepositories();
  console.log('repositories', repositories);
  return <RepositoryListContainer repositories={repositories}/>;
};



export default RepositoryList;
