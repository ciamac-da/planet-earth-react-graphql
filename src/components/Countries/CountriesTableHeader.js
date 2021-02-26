import React from "react";
import Table          from "@material-ui/core/Table";
import TableCell      from "@material-ui/core/TableCell";
import TableHead      from "@material-ui/core/TableHead";
import TableRow       from "@material-ui/core/TableRow";
import myStyle from "./CountriesStyle";
import Typography  from '@material-ui/core/Typography';

export default function TableHeader(){
    const classes = myStyle();
    return(
        <Table className={classes.myTable}>
            <TableHead>
                <TableRow       className={classes.myRow} >
                    <TableCell  className={classes.myCellHead}>
                    <Typography className={classes.myTypoFlag}>    Flag      </Typography>
                    </TableCell>
                    <TableCell  className={classes.myCellHead}>
                    <Typography className={classes.myTypoCountry}>    Country Name </Typography>
                    </TableCell>
                    <TableCell  className={classes.myCellHead}> 
                    <Typography className={classes.myTypoCode}>       Code      </Typography>
                     </TableCell>
                    <TableCell  className={classes.myCellHead}> 
                    <Typography className={classes.myTypoLanguage}>     Language/s  </Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
        </Table>
    )
}