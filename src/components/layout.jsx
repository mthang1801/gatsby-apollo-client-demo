import React from 'react'
import {countMutations} from "../apollo/operations/mutations"
import {GET_COUNT_NUMBER} from "../apollo/operations/queries";
import {useQuery} from "@apollo/client"
import Navigation from "./navigation"
const Layout = ({children}) => {
  const getCount = useQuery(GET_COUNT_NUMBER);
  const {countIncrease, countDecrease} = countMutations
  const count = getCount.data.countNumber ; 

  return (
    <div>
      <Navigation/>
      {children}
      <div>
        <span style={{fontWeight: "bold"}}>Current Number: </span>
        <span style={{color: "red"}}>{count}</span>
      </div>
      <div>
        <button onClick={countIncrease}>+</button>
        <button onClick={countDecrease}>-</button>
      </div>
    </div>
  )
}

export default Layout
