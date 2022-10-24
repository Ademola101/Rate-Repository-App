import { useMutation, useApolloClient } from '@apollo/client';
import { LOGIN } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN);
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const signIn = async ({ username, password }) => {


    // call the mutate function here with the right arguments
    const { data } = await mutate({ variables: { username, password } });
    console.log(data);
    await authStorage.setToken(data.authenticate.accessToken);
    apolloClient.resetStore();

    return data;
  };

  return [signIn, result];





};

export default useSignIn;