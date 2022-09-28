import React from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import RepositoryItem from './RepositoryItem';
import repositories from '../data/repository';


const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: 'lightgray',
    marginBottom: 40,
    marginTop: 40,
  },
  view: {
    flexGrow: 1,
    height: '100%',
  }
});
const ItemSeparator = () => <View style = {styles.separator}/>;

const RepositoryList = () => {
  const renderItem  = ({ item }) => (
    <RepositoryItem repositories={item}/>
  );

  return ( <View style = {styles.view}>

    <FlatList data = {repositories}

      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />


  </View>

  );
};



export default RepositoryList;
