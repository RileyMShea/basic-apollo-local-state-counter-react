import { InMemoryCache, gql, makeVar } from "@apollo/client";

/**
 * Client-side only query
 */
export const GET_COUNTER = gql`
  query GetCounter {
    counter @client
  }
`;

/**
 * Set initial value of counter
 */
export const currentCounterVar = makeVar(0);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        counter: {
          read() {
            return currentCounterVar();
          },
        },
      },
    },
  },
});
