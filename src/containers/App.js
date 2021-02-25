import React, { Component }  from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/client";
import { CountriesContainer } from './countriesContainer';
function App() {
  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/'
  });

  return (
    <ApolloProvider client={client}>

    <main>
     <h1>hi, I'm a User</h1>
      <CountriesContainer />
    </main>
    </ApolloProvider>
  );
}

export default App;
