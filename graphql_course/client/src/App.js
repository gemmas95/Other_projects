import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

// Components
import BookList from "./components/BookList";

const client = new ApolloClient({
  uri: "https://localhost:9000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Hello World!</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
