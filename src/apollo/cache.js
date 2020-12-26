import {InMemoryCache, makeVar} from "@apollo/client"
import Count from "./models/Count"

export const countVar = makeVar(Count);

export const cache = new InMemoryCache({
  typePolicies : {
    Query : {
      fields : {
        countNumber : {
          read : () => countVar()
        }
      }
    }
  }
});