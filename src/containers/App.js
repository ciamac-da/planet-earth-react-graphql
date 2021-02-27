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
import SearchFilter from '../components/Search/Search';
import Translate from '../components/Translate/Translate';


const App = () =>{
  const MainPageTitle = "Planet Earth";

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
    {/*   <CountriesContainer /> */}
      <Router>
      <Switch>
       <Route path="/" exact        component={CountriesContainer} />
       <Route path="/search"        component={SearchFilter}       />
       <Route path="/translate"        component={Translate}       />
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


/* "homepage": "https://ciamac-da.github.io/planet-earth-react-graphql", */