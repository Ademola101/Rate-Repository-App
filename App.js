import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Main from './src/Components/Main';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';

import createApolloClient from './src/utils/apolloClient';
const apolloClient = createApolloClient();

export default function App() {
  return (
    <View style={styles.container}>

      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
          <StatusBar style="auto" />
        </ApolloProvider>
      </NativeRouter>


    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    flexGlow: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
