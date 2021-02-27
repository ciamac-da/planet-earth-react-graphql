import React from 'react';
import { AlertTitle } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import { Typography, Button } from '@material-ui/core/';
import myStyle from "./MainStyle";
import { Link } from "react-router-dom";


export default function Main(){

    const classes = myStyle()
    

return(
        <>
        <AlertTitle className={classes.mainStyle}              >
        <Typography className={classes.TypoStyle}              > Click here to serach through Countries based on Languages  </Typography>
         <Link      className={classes.linkStyle} to="/search" >                                                                      
         <Button    className={classes.myButton}               >             <SearchIcon />   Search                          </Button>   
         </Link>       
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