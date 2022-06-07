import { gql } from '@apollo/client';

export const GET_CARDS_QUERY = gql`
  query getCards {
    cards {
      id
      name
    }
  }
`;
