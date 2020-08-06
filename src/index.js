import React from "react";
import ReactDOM from "react-dom";
import {cache} from './cache'
import App from './app'

import {
  ApolloClient,
  ApolloProvider,
} from "@apollo/client";


const client = new ApolloClient({
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root"),
);
