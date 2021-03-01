import React, {useState, useMemo} from 'react';
import { AlertTitle } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import { Typography, Button, Input } from '@material-ui/core/';
import myStyle from "./MainStyle";
import { NavLink } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { GET_COUNTRIES } from '../../graphql/get-countries';

export default function Main(){

    const classes = myStyle()
    const [search, setSearch] = useState("")

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
        <>
        <AlertTitle  className={classes.mainStyle}                 >
        <Typography  className={classes.firstMainStyle}>
       {/*   <Typography className={classes.TypoStyle}                 >  Click here to serach through Countries based on Languages  </Typography> */}
         <SearchIcon /> &nbsp; Searching through Countries based on Languages...
          <Input
           type="text"
           placeholder="Search a Language..."
           autoComplete="off"
           className={classes.inputStyle}
           onChange={e => setSearch(e.target.value)} 

          />
       {/*   <NavLink    className={classes.linkStyle} to="/search"    >                                                                       
         <Button     className={classes.myButton}                  >              <SearchIcon />   Search                        </Button>   
         </NavLink>     */}   
        </Typography>
        <Typography  className={classes.secondMainStyle}>
         <Typography className={classes.TypoStyle}                 >            Click here to Translate languages                </Typography>
         <NavLink    className={classes.linkStyle} to="/translate" >                                                                      
         <Button     className={classes.myButton}                  >         <GTranslateIcon />  &nbsp;  Translate               </Button>   
         </NavLink>       
        </Typography>
       </AlertTitle>
      </>
    )
}

/* {<Link
to="/"
className={classes.link}
>
     <Button variant="contained"
           className={classes.myButton}
     >
           <NavigateBeforeIcon />
      Back
    </Button>
</Link>} */