import { gql } from '@apollo/client';
export const SUBSCRIBE_MESSAGE = gql`
  subscription NewUpdate($username: ID!) {
    onNewMessage(username: $username) {
      id
      from
      text
    }
  }
`;
