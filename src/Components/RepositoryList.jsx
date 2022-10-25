import React, { useState, useRef } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useGRrepositories';
import { Picker } from '@react-native-picker/picker';

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

  const repositoryNodes =  repositories?.repositories?.edges?.map(edge => edge.node);
  console.log(repositories);

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

  const itemRef = useRef();
  const [orderBy, setOrderBy]  = useState();
  const [orderDirection, setOrderDirection] = useState();
  const  onValueChange = (itemValue) => {
    setOrderBy(itemValue);
  };

  const { repositories } = useRepositories({
    orderBy,
    orderDirection,
  });

  return (<>
    <Picker

      selectedValue={orderBy}
      onValueChange={(itemValue) => {
        setOrderBy(itemValue);

      }}
    >
      <Picker.Item label="Higest rated repository" value="RATING_AVERAGE" />
      <Picker.Item label="Latest repository" value="CREATED_AT" />
      <Picker.Item label="Lowest rated repository" value="RATING_AVERAGE" />

    </Picker>

    <RepositoryListContainer repositories={repositories}  onValueChange= {onValueChange}/>
  </> );
};



export default RepositoryList;
