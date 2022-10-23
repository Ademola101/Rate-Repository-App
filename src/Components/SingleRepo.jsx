import { View,  Button, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import RepositoryItem from './RepositoryItem';
import { Linking } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    flexShrink: 1,
    marginBottom: 15,
  }

});


export default function SingleRepo({ data }) {


  return (
    <View>
      <View style = {styles.container}>
        <RepositoryItem repository={data?.repository}/>
      </View>
      <Pressable>
        <Button onPress={

          () => Linking.openURL(data?.repository.url)
        } title = 'Open in Github'/>
      </Pressable>



    </View>
  );
}