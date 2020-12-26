import {ApolloClient, createHttpLink} from "@apollo/client"
import {cache} from "./cache";
import fetch from "isomorphic-fetch"
const link = createHttpLink({
  uri : "http://countries.trevorblades.com/",
  fetch
})

export const client = new ApolloClient({  
  link,
  cache
})

