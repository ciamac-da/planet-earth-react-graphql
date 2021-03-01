import  React, { useState, useMemo }  from 'react';
import {Paper ,TableContainer, Table, TableRow, TableCell, Typography}  from "@material-ui/core/";
import myStyle from "./CountriesStyle";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';



const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


export function Countries({myCountries}) {
    const classes = myStyle();
    const [search, setSearch] = useState("")
    const countries = useMemo(() => {
    if (!search)
    return myCountries

    return myCountries.filter( country => {
      return country.name.toLowerCase().includes( search.toLocaleLowerCase())
    })

    }, [search, myCountries])


    const [state, setState] = React.useState({
      checkedA: true,
    });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
  
    return( 
<>
      <input
      value={search}
      onChange={e => setSearch(e.target.value)}
       />
  <div className={classes.myList}>
   <TableContainer component={Paper} >
    <Table>
     <TableRow className={classes.mainRow}>
       <TableCell  className={classes.myFlagCell}>      {myCountries.emoji}     </TableCell>
       <TableCell  className={classes.myCell}>       {countries.name}     </TableCell>
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
    </Table>
   </TableContainer>       
</div>
</>

    )
}