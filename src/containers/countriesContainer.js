import React, {useMemo, useState} from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_COUNTRIES } from '../graphql/get-countries';
import { Countries } from "../components/Countries/CountriesTable";
import myStyle from "./countriesContainerStyle";
import TableHeader from '../components/Countries/CountriesTableHeader';
import Main from '../components/Main/Main';

export const CountriesContainer = () =>{
    const [search, setSearch] = useState("")

     const classes = myStyle()
     const { data: { countries = []} = {}  } = useQuery(GET_COUNTRIES,{
 });

 const mycountries = useMemo(() => {
    if (!search)
    return countries

    return countries.filter( country => {
      return country.name.toLowerCase().includes( search.toLowerCase())
    })

    }, [search, countries])
 return(
     <div className={classes.Container}>
         <Main/>
         <input 
         style={{position:"relative", top:"-10px", height:"100px"}}
         onChange={e => setSearch(e.target.value)} />
         <TableHeader/>
         {mycountries.map(country => {
        return  <Countries key={country.name}  myCountries={country} />
         }
         )}
     </div>
 )
}