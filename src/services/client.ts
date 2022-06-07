import { ApolloClient, InMemoryCache } from '@apollo/client';
import { REACT_APP_ACCESS_TOKEN, REACT_APP_GRAPHQL_BASE_URL } from '@env';

export const client = new ApolloClient({
  uri: REACT_APP_GRAPHQL_BASE_URL,
  cache: new InMemoryCache(),
  // Best way is to use react-native-keychain
  headers: {
    Authorization: `Bearer ${REACT_APP_ACCESS_TOKEN}`,
  },
});
