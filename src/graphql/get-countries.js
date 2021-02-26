import gql from "graphql-tag"


export const GET_COUNTRIES = gql`
query {countries{
  name
  emoji
  phone
  languages{
    name
  }
}
}
  `