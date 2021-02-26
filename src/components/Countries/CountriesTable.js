import  React  from 'react';
import Table          from "@material-ui/core/Table";
import TableCell      from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow       from "@material-ui/core/TableRow";
import Paper          from "@material-ui/core/Paper";
import myStyle from "./CountriesStyle";
import Typography  from '@material-ui/core/Typography';



export function Countries({myCountries}) {
    const classes = myStyle();
    
    return( 
  <div className={classes.myList}>
   <TableContainer component={Paper} >
    <Table>
     <TableRow>
       <TableCell  className={classes.myCell}>      {myCountries.emoji}     </TableCell>
       <TableCell  className={classes.myCell}>       {myCountries.name}     </TableCell>
       <TableCell  className={classes.myCell}>       {myCountries.code}     </TableCell>
       <TableCell  className={classes.myCell}>  {myCountries.languages.name} </TableCell>
       <TableCell  className={classes.myProblem}> {myCountries.languages.slice(0, 4).map(individualLanguage => (
       <Typography className={classes.mySpan} component="span"  key={`${individualLanguage.name}`}>{individualLanguage.name}</Typography>
        ))}
      </TableCell>
     </TableRow>
    </Table>
   </TableContainer>       
</div>


    )
}