import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';

const httpLink  = createHttpLink({
  uri: Constants.manifest.extra.APOLLO_URI,

});

const createApolloClient = (authStorage) => {
  const authLink = setContext(async(_, { headers }) => {
    try {

      const accessToken = await authStorage.getToken();

      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}`: ''
        }
      };

    } catch (error) {
      console.log(error);
      return headers;

    }
  });
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

};

export default createApolloClient;