import React, { useState } from 'react';
import { AlertTitle } from '@material-ui/lab';
import { Input } from '@material-ui/core';
import myStyle from "./TranslateStyle";
import { Typography, Button } from '@material-ui/core/';
import { NavLink } from "react-router-dom";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import GTranslateIcon from '@material-ui/icons/GTranslate';


export default function Translate(){
const classes = myStyle()

    return(
        <>
        <AlertTitle className={classes.mainStyle}>
        <GTranslateIcon />
           &nbsp;
           Translate...
          <Typography
             className={classes.inputStyle}
           />
              <NavLink     className={classes.linkStyle} to="/"           >                                                                       
            <Button        className={classes.myButton }                  >   <NavigateBeforeIcon />   Back to Main   </Button>   
           </NavLink> 
       </AlertTitle>
      </>
    )
}