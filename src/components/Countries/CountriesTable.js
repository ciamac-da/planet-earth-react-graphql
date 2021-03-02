import  React, {useState}  from 'react';
import {Paper ,TableContainer, Table, TableRow, TableCell, Typography, Button}  from "@material-ui/core/";
import myStyle from "./CountriesStyle";


export function Countries({myCountries,addLang}) {
    const classes = myStyle();
   
    return( 
  <div className={classes.myList}                 >
   <TableContainer component={Paper}              >
    <Table>
     <TableRow className={classes.mainRow}        >
       <TableCell  className={classes.myFlagCell} >      {myCountries.emoji}      </TableCell>
       <TableCell  className={classes.myCell}     >       {myCountries.name}      </TableCell>
       <TableCell  className={classes.myCell}     >       {myCountries.code}      </TableCell>
       <TableCell  className={classes.myCell}     >  {myCountries.languages.name} </TableCell>
       <TableCell  className={classes.myProblem}  > {myCountries.languages.slice(0, 4).map(individualLanguage => (
       <Button onClick={ e => addLang(individualLanguage) } className={classes.myButton}  key={`${individualLanguage.name}`}>{individualLanguage.name}</Button>
        ))}
      </TableCell>
     </TableRow>
    </Table>
   </TableContainer>       
</div>
    )
}