import  React, {useState}  from 'react';
import {Paper ,TableContainer, Table, TableRow, TableCell, Typography, Button}  from "@material-ui/core/";
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
    const [langs, setLangs] = useState([myCountries.languages]);
    const [first, second] = langs
    const selectLang = (lang) => setLangs([ lang, ...langs].slice(0,2));

    const [state, setState] = React.useState({
      checkedA: true,
    });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
  
    return( 
  <div className={classes.myList}>
   <TableContainer component={Paper} >
    <Table>
     <TableRow className={classes.mainRow}>
       <TableCell  className={classes.myFlagCell}>      {myCountries.emoji}     </TableCell>
       <TableCell  className={classes.myCell}>       {myCountries.name}     </TableCell>
       <TableCell  className={classes.myCell}>       {myCountries.code}     </TableCell>
       <TableCell  className={classes.myCell}>  {myCountries.languages.name} </TableCell>
       <TableCell  className={classes.myProblem}> {myCountries.languages.slice(0, 4).map(individualLanguage => (
       <Typography className={classes.mySpan} component="span"  key={`${individualLanguage.name}`}>{individualLanguage.name}</Typography>
        ))}
        <FormControlLabel className={classes.myCheckbox} 
        control={<GreenCheckbox   checkedA={state.checkedA} onChange={handleChange} name="checkedA" />}
        onChange={selectLang}
      />
          <Button     className={classes.myButton}   
         onClick={ e => window.open(`https://translate.google.com/?sl=${first.languages}&tl=${second.languages}&op=translate`)}
                        >          &nbsp;  Translate               </Button>   

      </TableCell>
     </TableRow>
    </Table>
   </TableContainer>       
</div>
    )
}