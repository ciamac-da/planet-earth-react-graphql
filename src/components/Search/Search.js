import React, { useState } from 'react';
import { AlertTitle } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import { Input } from '@material-ui/core';
import {  Button } from '@material-ui/core/';
import { NavLink } from "react-router-dom";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import myStyle from "./SearchStyle";
import {Paper ,TableContainer, Table, TableRow, TableCell, Typography}  from "@material-ui/core/";


export default function SearchFilter({myCountries}){
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
   {/*    <Table>
      {myCountries.reverse().map((myCountries) => (
     <TableRow className={classes.mainRow}>
       <TableCell  className={classes.myFlagCell}>      {myCountries.emoji}     </TableCell>
       <TableCell  className={classes.myCell}>       {myCountries.name}     </TableCell>
       <TableCell  className={classes.myCell}>       {myCountries.code}     </TableCell>
       <TableCell  className={classes.myCell}>  {myCountries.languages.name} </TableCell>
      
       <TableCell  className={classes.myProblem}> {myCountries.languages.slice(0, 4).map(individualLanguage => (
       <Typography className={classes.mySpan} component="span"  key={`${individualLanguage.name}`}>{individualLanguage.name}</Typography>
        ))}
        <FormControlLabel className={classes.myCheckbox}
        control={<GreenCheckbox  checkedA={state.checkedA} onChange={handleChange} name="checkedA" />}
        label=""
      />
      </TableCell>
     </TableRow>
     ))}
    
    </Table> */}
      </>
    )
}