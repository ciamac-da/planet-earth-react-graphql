import React, { Fragment }  from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/client";
import { CountriesContainer } from './countriesContainer';
import WrongPath from "../components/common/404/404";



const App = () =>{
  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/'
  });
  return (
    <ApolloProvider client={client}>
    {/*   <CountriesContainer /> */}
      <Router>
      <Switch>
       <Route path="/" exact        component={CountriesContainer} />
      <Route                        component={WrongPath}     /> 
      <Route path="*" exact         component={WrongPath}     />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;


/* "homepage": "https://ciamac-da.github.io/planet-earth-react-graphql", */