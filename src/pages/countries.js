import React from 'react'
import {GET_COUNTRIES} from "../apollo/operations/queries"
import {useQuery} from "@apollo/client";
import Layout from "../components/layout"
const Countries = () => {
  const getCountries = useQuery(GET_COUNTRIES);
  let countries ; 
  if(getCountries.data){
    countries = getCountries.data.countries;
  }
 
  return (
    <Layout>
      {countries && countries.map(country => (
        <div>
          <span>{country.code}-</span>
          <span>{country.name}-</span>
          <span>{country.emoji}</span>
        </div>
      ))}
    </Layout>
  )
}

export default Countries
