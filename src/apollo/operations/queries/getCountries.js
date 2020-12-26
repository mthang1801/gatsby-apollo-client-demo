import { gql } from "@apollo/client"

export const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      native
      phone
      capital
      currency
      emoji
      emojiU
    }
  }
`
