import React  from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/client";
import { CountriesContainer } from './countriesContainer';
import Page from "react-page-loading";
import { Helmet } from "react-helmet";
import WrongPath from "../components/common/404/404";
import MyAppBar from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';


const App = () =>{
  const MainPageTitle = "Planet Earth Countries";
  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/'
  });
  return (
    <Page loader={"bar"} color={"#fff"} size={9} duration={1}>
    <Helmet>
    <title>{MainPageTitle}</title>
    </Helmet>
    <ApolloProvider client={client}>
    <MyAppBar />
      <Router>
      <Switch>
       <Route path="/" exact        component={CountriesContainer} />
       <Route                       component={WrongPath}          /> 
       <Route path="*" exact        component={WrongPath}          />
        </Switch>
      </Router>
      <Footer />
    </ApolloProvider>
    </Page>
  );
}

export default App;


