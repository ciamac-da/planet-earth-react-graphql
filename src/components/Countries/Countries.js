import  React  from 'react';
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "List", width: 130 },
  { field: "flag", headerName: "Flag", width: 130 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "code", headerName: "Code", width: 130 },
  { field: "language", headerName: "Language/s", width: 130 }
];

const rows = [
  { id: 1, flag: "x", name: "Jon", code: 35, language: "lang" },
  { id: 2, flag: "x", name: "Cersei", code: 42, language: "lang" },
  { id: 3, flag: "x", name: "Jaime", code: 45, language: "lang" },
  { id: 4, flag: "x", name: "Arya", code: 16, language: "lang" },
  { id: 5, flag: "x", name: "Daenerys", code: 10, language: "lang" },
  { id: 6, flag: "x", name: "", code: 15, language: "lang" },
  { id: 7, flag: "x", name: "Ferrara", code: 44, language: "lang" },
  { id: 8, flag: "x", name: "Rossini", code: 36, language: "lang" },
  { id: 9, flag: "x", name: "Harvey", code: 65, language: "lang" }
];

export function Countries({myCountries}) {
    return(
<div className="myCountries">
{/* <div className="countryName">   <p>{myCountries.name}</p> </div>
<div className="countryCode">   <p>{myCountries.code}</p> </div>
<div className="countryFlag"> <p>{myCountries.emoji}</p> </div>
<div className="countryLanguage"> <p>{myCountries.languages.name}</p> </div> */}
<div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxselection />
    </div>
</div>


    )
}