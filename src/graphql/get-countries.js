import gql from "graphql-tag"


export const GET_COUNTRIES = gql`
query users($limit: Int!) {
     users(limit: $limit){
         id
         name
         rocket
     }
    }
  `