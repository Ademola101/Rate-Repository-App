import { gql } from '@apollo/client';

export const LOGIN = gql`

mutation authenticate($username: String!, $password: String!) {
  authenticate(credentials: { username: $username, password: $password }) {
    user {
      username

      
    }
    accessToken
  }

}

`;