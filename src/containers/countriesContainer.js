import React, {useMemo, useState} from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_COUNTRIES } from '../graphql/get-countries';
import { Countries } from "../components/Countries/CountriesTable";
import myStyle from "./countriesContainerStyle";
import TableHeader from '../components/Countries/CountriesTableHeader';
import { Typography, Button, Input } from '@material-ui/core/';
import { AlertTitle } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from "react-router-dom";
import GTranslateIcon from '@material-ui/icons/GTranslate';


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
            <AlertTitle  className={classes.mainStyle}                 >
            <Typography  className={classes.firstMainStyle}>
         <SearchIcon className={classes.searchIcon} /> &nbsp; Searching through Countries based on Languages...
         <Input
            type="text"
            placeholder="Search a Language..."
            autoComplete="off"
            className={classes.inputStyle}
            onChange={e => setSearch(e.target.value)} 
           />
      
        </Typography>
        <Typography  className={classes.secondMainStyle}>
         <Typography className={classes.TypoStyle}                 >            Select 2 Languages and click here to Translate them                </Typography>
         <NavLink    className={classes.linkStyle} to="/translate" >                                                                      
         <Button     className={classes.myButton}                  >         <GTranslateIcon />  &nbsp;  Translate               </Button>   
         </NavLink>       
        </Typography>
        

        </AlertTitle>
         <TableHeader/>
         {mycountries.map(country => {
        return  <Countries key={country.name}  myCountries={country} />
         }
         )}
     </div>
 )
}