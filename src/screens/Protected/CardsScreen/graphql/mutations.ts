import { gql } from '@apollo/client';

export const CREATE_CARD_MUTATION = gql`
  mutation CreateCard($name: NonEmptyString!) {
    createCard(
      data: {
        name: $name
        minPrice: null
        maxPrice: null
        locationTypeIds: []
        locationCuisineTypeIds: []
        dishTypeIds: []
        courseTypeIds: []
        dietIds: []
        excludedIngredientIds: []
      }
    ) {
      id
      name
    }
  }
`;
