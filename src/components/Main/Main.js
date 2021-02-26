import React from 'react';
import { AlertTitle } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import { Input } from '@material-ui/core';
import myStyle from "./MainStyle";

export default function SearhFilter(){
const classes = myStyle()
    
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
             className={classes.inputStyle}
           />
       </AlertTitle>
      </>
    )
}