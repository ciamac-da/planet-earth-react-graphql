import React, { useState } from 'react';
import { AlertTitle } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import { Input } from '@material-ui/core';
import { Typography, Button } from '@material-ui/core/';
import { NavLink } from "react-router-dom";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import myStyle from "./SearchStyle";


export default function SearchFilter(){
const classes = myStyle()
    return(
        <>
        <AlertTitle className={classes.mainStyle}>
         <SearchIcon /> &nbsp; Searching through Countries based on Languages...
          <Input
           type="text"
           placeholder="Search a Language..."
           autoComplete="off"
           className={classes.inputStyle}
          />
           <NavLink     className={classes.linkStyle} to="/"          >                                                                       
            <Button     className={classes.myButton}                  >   <NavigateBeforeIcon />   Back to Main   </Button>   
           </NavLink>    
      </AlertTitle>
      </>
    )
}