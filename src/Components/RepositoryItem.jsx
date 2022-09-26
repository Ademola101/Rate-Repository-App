import React from 'react';
import {View,  Text, Image} from 'react-native';

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
      <Image source = {{uri: repositories.ownerAvatarUrl}}  style={{width: 400, height: 400}}/>
    </View>
  );
}

// const styles = StyleSheet.create({})

export default RepositoryItem;
