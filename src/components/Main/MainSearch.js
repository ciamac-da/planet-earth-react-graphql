import React, { useState } from 'react';
import { AlertTitle } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import { Input } from '@material-ui/core';
import { useLazyQuery } from '@apollo/client';
import gql from 'graphql-tag';
import myStyle from "./MainStyle";
import { Countries } from '../Countries/CountriesTable';
import { useQuery } from '@apollo/react-hooks';
import { GET_COUNTRIES } from '../../graphql/get-countries';


export default function SearhFilter(){
const classes = myStyle()
const [mySearchFilter, mySetSearchFilter] = useState('')
const { data: { countries = []} = {}  } = useQuery(GET_COUNTRIES,{
});
console.log(mySetSearchFilter)
    return(
        <>
        <AlertTitle className={classes.mainStyle}>
          <SearchIcon /> 
           &nbsp;
           Search Countries based on Languages...
          <Input
             type="text"
             placeholder="Search..."
             autoComplete="off"
             onChange={(e) => mySetSearchFilter(e.target.value)}
             className={classes.inputStyle}
           />
             {countries &&
        countries.map((country, index) => (
          <p key={country.name} myCountries={country} index={index} />
        ))}
       </AlertTitle>
      </>
    )
}