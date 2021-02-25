import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_COUNTRIES } from '../graphql/get-countries';
import { Countries } from "../components/Countries/Countries";
import myStyle from "./countriesContainerStyle";

export const CountriesContainer = () =>{

    const classes = myStyle()
     const { data: { users = []} = {}  } = useQuery(GET_COUNTRIES,{
     variables: { limit: 20}
 });
 return(
     <div className={classes.Container}>
         {users && users.map(users => {
         console.log(users)
        return  <Countries key={users.id}  users={users} />
     //   return  <li key={users.id}>{users.name}</li>
     //   return JSON.stringify(users, null, 2)

         }
         )}
     </div>
 )
}