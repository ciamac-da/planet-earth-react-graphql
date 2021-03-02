import gql from "graphql-tag"


export const GET_COUNTRIES = gql`
query {countries{
  name
  code
  emoji
  languages{
    name
    code
  }
}
}
  `