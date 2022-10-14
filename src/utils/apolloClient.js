import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const httpLink  = createHttpLink({
  uri: 'http://192.168.43.203:5000/graphql',

});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: InMemoryCache
  });

};

export default createApolloClient;