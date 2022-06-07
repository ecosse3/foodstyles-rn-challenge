import { ApolloClient, InMemoryCache } from '@apollo/client';
import { REACT_APP_GRAPHQL_BASE_URL } from '@env';

export const client = new ApolloClient({
  uri: REACT_APP_GRAPHQL_BASE_URL,
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzY0LCJ0eXBlIjoiQUNDRVNTIiwiaWF0IjoxNjU0NTg2OTgzLCJleHAiOjE2NTUxOTE3ODN9.aZGqtolxZKiTWMKZv9KOgs_6NGfVatDDRXSs2_62iYWg3e_uLPjjN0KMsDC5vlhF8DuG6bIfTwoJDn-fwXx7YJLXllzr-DqGFa1huz_jKSm9ZSVIttkREibJSG5xhc7U4udjaERIQg7-cwJbgfGAB_JMIjA2Isy53cKBCAdyQYAkmYGCsMhduRvNGdfwzJ_NMKnxdyNhO8toqGFhrR1-YuBLZDealvq8REEdlEC2xewoh1tCgZcVe5_KzouFJNIhSimwLYIaqKVi2_PvZJbxR7TTRk4fS1OWSAxEPZKeuz6MZFsyljeF1AVicHLZOgQUldqfeX1KkGZSv0Qdn2Mpbg',
  },
});
