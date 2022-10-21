import { render, fireEvent } from '@testing-library/react-native';
import { RepositoryListContainer } from '../../Components/RepositoryList';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      // Add your test code here
      const { debug, getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);
      debug();

      const nodes = getAllByTestId('repositoryItem');


      expect(nodes).toHaveLength(2);

      expect(nodes[0]).toHaveTextContent('jaredpalmer/formik');
      expect(nodes[0]).toHaveTextContent('Build forms in React, without the tears');
      expect(nodes[0]).toHaveTextContent('TypeScript');
      expect(nodes[0]).toHaveTextContent('88');
      expect(nodes[0]).toHaveTextContent('21856');
      expect(nodes[0]).toHaveTextContent('1619');
      expect(nodes[0]).toHaveTextContent('3');


      expect(nodes[1]).toHaveTextContent('async-library/react-async');
      expect(nodes[1]).toHaveTextContent('Flexible promise-based React data loader');
      expect(nodes[1]).toHaveTextContent('JavaScript');
      expect(nodes[1]).toHaveTextContent('72');
      expect(nodes[1]).toHaveTextContent('1760');
      expect(nodes[1]).toHaveTextContent('69');
      expect(nodes[1]).toHaveTextContent('3');




    });
  });
});