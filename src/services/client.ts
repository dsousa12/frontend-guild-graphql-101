import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({
  uri: 'https://xgeeks-go-chat.herokuapp.com/gql'
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'ws://xgeeks-go-chat.herokuapp.com/gql'
  })
);

const configLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);

    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  httpLink,
  wsLink
);

export const client = new ApolloClient({
  link: configLink,
  cache: new InMemoryCache()
});
