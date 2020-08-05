import React from "react";
import ReactDOM from "react-dom";
import { Query } from "@apollo/client/react/components";

import {
  gql,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from "@apollo/client";

// This is your average React Component just querying GraphQL
// the only difference is you need to add "@client" to any
// piece of query data that is coming from local state
function App() {
  const GET_POKEMONS = gql(`
      user @client {
        name
      }
    }
  `);

  const renderContent = ({ loading, error, data }) => {
    if (loading) return <h4>Loading...</h4>;
    if (error) return <h4>Error...</h4>;

    return (
      <div className="App">
        <h1>Hello {data.user.name}</h1>
      </div>
    );
  };

  return <Query query={GET_POKEMONS}>{renderContent}</Query>;
}

// You can define resolvers + typeDefs and/or link
// they do not depend on each other.
// When you add resolvers + typeDefs you're just
// extending your remote GraphQL API with one that
// is defined locally
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: "https://graphql-pokemon.now.sh/graphql" }),
  resolvers: {
    Query: {
      user: () => ({ __typename: "User", name: "Trainer" }),
    },
  },
  typeDefs: `
    type Query {
      user: {
        name: String
      }
    }
  `,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root"),
);
