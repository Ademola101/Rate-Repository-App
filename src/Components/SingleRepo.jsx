import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import RepositoryItem from './RepositoryItem';
import { useParams } from 'react-router-native';
import { REPOSITORY } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import { Linking } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    flexShrink: 1,
    marginBottom: 15,
  }

});


export default function SingleRepo() {
  const { id } = useParams();
  const { data } = useQuery(REPOSITORY, {
    variables: { id:id },
  });



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