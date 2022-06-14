import { gql } from '@apollo/client';

export const POST_MESSAGE = gql`
  mutation PostMessage($input: NewMessage!) {
    sendMessage(input: $input)
  }
`;
