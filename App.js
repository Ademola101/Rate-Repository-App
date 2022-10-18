import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Main from './src/Components/Main';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import AuthStorage from './src/utils/authStorage';
import createApolloClient from './src/utils/apolloClient';
import { AuthStorageProvider } from './src/contexts/AuthStorageContext';


const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

export default function App() {
  return (
    <View style={styles.container}>

      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageProvider value={authStorage}>
            <Main />
            <StatusBar style="auto" />
          </AuthStorageProvider>
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
