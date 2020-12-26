import {gql} from "@apollo/client"

export const GET_COUNT_NUMBER = gql`
  query GetCountNumber{
    countNumber @client
  }
`