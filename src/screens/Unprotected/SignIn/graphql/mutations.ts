import { gql } from '@apollo/client';

export const SIGN_IN_MUTATION = gql`
  mutation loginWithEmail($email: EmailAddress!, $password: NonEmptyString!) {
    loginWithEmail(email: $email, password: $password) {
      user {
        id
        email
        name
        facebookId
        googleId
        appleId
      }
      accessToken
      refreshToken
    }
  }
`;
