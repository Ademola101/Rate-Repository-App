import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';
import AuthStorage from '../utils/authStorage';

const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN);
  const authStorage = useAuthStorage();
  const signIn = async ({ username, password }) => {


    // call the mutate function here with the right arguments
    const { data } = await mutate({ variables: { username, password } });
    await authStorage.setToken(data.authenticate.accessToken);
    return data;
  };

  return [signIn, result];





};

export default useSignIn;