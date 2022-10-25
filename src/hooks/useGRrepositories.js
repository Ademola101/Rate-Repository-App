import { ALL_REPOSITORIES } from '../graphql/queries';

import { useQuery } from '@apollo/client';

const useRepositories = (
  { orderBy,
    //  orderDirection, searchKeyword, first, after
  },
) => {
  const { data, loading, refetch } = useQuery(ALL_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy,
    },
  });

  return { repositories: data, loading, refetch };
};

export default useRepositories;