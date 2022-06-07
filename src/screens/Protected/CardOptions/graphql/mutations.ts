import { gql } from "@apollo/client";

export const DELETE_CARD_MUTATION = gql`
  mutation deleteCard($id: ID!) {
    deleteCard(id: $id)
  }
`;

export const DUPLICATE_CARD_MUTATION = gql`
  mutation duplicateCard($id: ID!) {
    duplicateCard(id: $id) {
      id
      name
    }
  }
`;

export const SHARE_CARD_MUTATION = gql`
  mutation shareCard($id: ID!) {
    shareCard(id: $id)
  }
`;
