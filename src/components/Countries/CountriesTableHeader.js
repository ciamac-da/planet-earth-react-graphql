import React from "react";
import Table          from "@material-ui/core/Table";
import TableCell      from "@material-ui/core/TableCell";
import TableHead      from "@material-ui/core/TableHead";
import TableRow       from "@material-ui/core/TableRow";
import myStyle from "./CountriesTableHeaderStyle";

export default function TableHeader(){
    const classes = myStyle();
    return(
        <Table className={classes.myTable}>
            <TableHead>
                <TableRow>
                    <TableCell  className={classes.myCell}> Flag         </TableCell>
                    <TableCell  className={classes.myCell}> Country Name </TableCell>
                    <TableCell  className={classes.myCell}> Code         </TableCell>
                    <TableCell  className={classes.myCell}> Language     </TableCell>
                </TableRow>
            </TableHead>
        </Table>
    )
}