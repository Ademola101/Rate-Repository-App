import SignIn from '../Components/SignIn';
import { render, fireEvent } from '@testing-library/react-native';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import AuthStorage from '../utils/authStorage';
import createApolloClient from '../utils/apolloClient';
import AuthStorageContext from '../contexts/AuthStorageContext';


const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);


describe('SignInForm', () => {
  it('calls function provided by the onSubmit props after pressing the button', () => {
    const onSubmit = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <SignIn onSubmit={onSubmit} />

          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>);
    fireEvent.changeText(getByPlaceholderText('Username'), 'Kalle');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password');
    fireEvent.press(getByText('Sign in'));
    expect(onSubmit).toHaveBeenCalledTimes(1);

    // fireEvent.press(getByTestId('submitButton'));
    // expect(onSubmit).toHaveBeenCalledTimes(1);

  });

});
