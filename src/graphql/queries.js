import { gql } from '@apollo/client';

export const ALL_REPOSITORIES = gql`

query($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection,  $searchKeyword: String,
   $first: Int, $after: String) {repositories(orderBy: $orderBy,orderDirection: $orderDirection,searchKeyword: $searchKeyword,
       first: $first, after: $after) {
    edges {
      node {
        id

        fullName

        description
        
        language

        forksCount

        stargazersCount

        ratingAverage

        reviewCount


        ownerAvatarUrl

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


export const GET_REVIEW = gql`

query repository($id: ID!) {
  repository(id: $id) {
    id
    fullName
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username  
          }
        }
      }
    }
  }
}
`;