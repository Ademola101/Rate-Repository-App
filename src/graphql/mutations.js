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


export const CREATE_REVIEW = gql`

mutation createReview($repositoryName: String!, $ownerName: String!, $rating: Int!, $text: String) {
  createReview(review: {repositoryName: $repositoryName, ownerName: $ownerName, rating: $rating, text: $text }) {
    repositoryId
    user {
      username
    }
    rating
    createdAt
    text


  }
}
`;
