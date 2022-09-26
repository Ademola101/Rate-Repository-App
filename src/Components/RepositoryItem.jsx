import React from 'react';
import {View,  Text} from 'react-native';

const RepositoryItem = ({ repositories }) => {
  return (
    <View>
      <Text>
       Full Name: {repositories.fullName}
      </Text>
      <Text>
        Language: {repositories.language}
      </Text>
      <Text>
       Fork Counts: {repositories.forksCount}
      </Text>
      <Text>
       Stargazers Count: {repositories.stargazersCount}
      </Text>
      <Text>
       Rating Average: {repositories.ratingAverage}
      </Text>
      <Text>
       Review Count: {repositories.reviewCount}
      </Text>
      
    </View>
  );
}

// const styles = StyleSheet.create({})

export default RepositoryItem;
