import React, { useMemo, useState } from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_COUNTRIES } from '../graphql/get-countries';
import { Countries } from "../components/Countries/CountriesTable";
import myStyle from "./countriesContainerStyle";
import TableHeader from '../components/Countries/CountriesTableHeader';
import { Typography, Button, Input } from '@material-ui/core/';
import { AlertTitle } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import ForwardIcon from '@material-ui/icons/Forward';


export const CountriesContainer = () =>{
    const classes = myStyle()
    const { data: { countries = []} = {}  } = useQuery(GET_COUNTRIES,{});
    const [search, setSearch] = useState("")
    const [langs, setLangs] = useState([]);
    const [first, second] = langs
    const selectLang = (lang) => setLangs([lang, ...langs].slice(0,2));
  
    const mycountries = useMemo(() => {
        if (!search)
        return countries
        return countries.filter( country => {
            return country.languages.filter( l=> l.name.toLowerCase().startsWith(search.toLowerCase()) ).length > 0
            })
    }, [search, countries])


 return(
     <div className={classes.Container}>
         <AlertTitle  className={classes.mainStyle}       >
         <Typography  className={classes.firstMainStyle}  >
         <SearchIcon className={classes.searchIcon}      /> 
         &nbsp; Searching through Countries based on Languages...
         <Input
            type="text"
            placeholder="Search here...!"
            autoComplete="off"
            className={classes.inputStyle}
            onChange={e => setSearch(e.target.value)} 
           /> 
         </Typography>
         <Typography  className={classes.secondMainStyle}  >
         <Typography className={classes.TypoStyle}         >   Select 2 Languages and click here to Translate them                </Typography>
         <Button     className={classes.myButton}
            onClick={ e =>
                window.open(`https://translate.google.com/?sl=${first.code}&tl=${second.code}&op=translate`)}> 
                <GTranslateIcon />  
                &nbsp;  Translate              
         </Button>   
         <Button>
        { first  ?  <Button      className={classes.myButton}>   {first.name}  </Button>  : null }  
        { first  ?  <ForwardIcon className={classes.myIcon} />    : null    } 
        { second ?  <Button      className={classes.myButton}>  {second.name}  </Button>  : null }  
         </Button>
        </Typography>    
        </AlertTitle>
         <TableHeader/>
         {mycountries.map(country => {
        return  <Countries key={country.name}  myCountries={country} addLang={selectLang} />
         }
         )}
     </div>
 )
}