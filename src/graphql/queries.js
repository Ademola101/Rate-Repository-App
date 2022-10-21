import { gql } from '@apollo/client';

export const ALL_REPOSITORIES = gql`

query {
  repositories {
    edges {
      node {
        ownerAvatarUrl
        fullName
        description
        language
        forksCount
        stargazersCount
        reviewCount
        ratingAverage

      }

    }
  }
}

`;


export const LOGOUT = gql`

query {
  me {
    username
  }
}
`;

export const REPOSITORY = gql`

query repository($id: ID!) {
  repository(id: $id) {
    id
    fullName
    url
    ownerAvatarUrl
    description
    language
    forksCount
    stargazersCount
    ratingAverage
    reviewCount
  }
}
`;