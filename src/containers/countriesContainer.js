import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_COUNTRIES } from '../graphql/get-countries';
import { Countries } from "../components/Countries/CountriesTable";
import myStyle from "./countriesContainerStyle";
import TableHeader from '../components/Countries/CountriesTableHeader';
import Main from '../components/Main/Main';

export const CountriesContainer = () =>{

    const classes = myStyle()
     const { data: { countries = []} = {}  } = useQuery(GET_COUNTRIES,{
 });
 return(
     <div className={classes.Container}>
         <Main/>
         <TableHeader/>
         {countries && countries.map(country => {
        return  <Countries key={country.code}  myCountries={country} />
         }
         )}
     </div>
 )
}