import  React  from 'react';
import Table          from "@material-ui/core/Table";
import TableCell      from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow       from "@material-ui/core/TableRow";
import Paper          from "@material-ui/core/Paper";



export function Countries({myCountries}) {
    return( 
<div className="myCountries"
style={{position:"relative", top:"150px"}}
>
<TableContainer 
component={Paper} >
<Table>
<TableRow 
>
<TableCell
style={{width:"70px"}}
 >{myCountries.emoji}</TableCell>

<TableCell  
style={{width:"70px"}}
>{myCountries.name}</TableCell>

<TableCell 
style={{width:"70px"}}
>{myCountries.code}</TableCell>

<TableCell 
style={{width:"70px"}}
>{myCountries.languages.name}</TableCell>
</TableRow>
</Table>
</TableContainer>       

</div>


    )
}