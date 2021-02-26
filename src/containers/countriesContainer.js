import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_COUNTRIES } from '../graphql/get-countries';
import { Countries } from "../components/Countries/Countries";
import myStyle from "./countriesContainerStyle";

export const CountriesContainer = () =>{

    const classes = myStyle()
     const { data: { countries = []} = {}  } = useQuery(GET_COUNTRIES,{
 });
 return(
     <div className={classes.Container}>
         {countries && countries.map(country => {
        return  <Countries key={country.code}  myCountries={country} />

         }
         )}
     </div>
 )
}