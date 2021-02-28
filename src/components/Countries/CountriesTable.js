import  React  from 'react';
import Table          from "@material-ui/core/Table";
import TableCell      from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow       from "@material-ui/core/TableRow";
import Paper          from "@material-ui/core/Paper";
import myStyle from "./CountriesStyle";
import Typography  from '@material-ui/core/Typography';
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
     <TableRow>
       <TableCell  className={classes.myFlagCell}>      {myCountries.emoji}     </TableCell>
       <TableCell  className={classes.myCell}>       {myCountries.name}     </TableCell>
       <TableCell  className={classes.myCell}>       {myCountries.code}     </TableCell>
       <TableCell  className={classes.myCell}>  {myCountries.languages.name} </TableCell>
      
       <TableCell  className={classes.myProblem}> {myCountries.languages.slice(0, 4).map(individualLanguage => (
       <Typography className={classes.mySpan} component="span"  key={`${individualLanguage.name}`}>{individualLanguage.name}</Typography>
        ))}
        <FormControlLabel
        control={<GreenCheckbox checkedA={state.checkedA} onChange={handleChange} name="checkedA" />}
        label=""
      />
      </TableCell>
     </TableRow>
    </Table>
   </TableContainer>       
</div>


    )
}