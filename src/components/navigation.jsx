import React from 'react'
import {Link} from "gatsby"
const Navigation = () => {
  return (
    <div>
      <Link to="/" style={{marginRight: "1rem"}}>Home</Link>
      <Link to="/countries">Countries</Link>
    </div>
  )
}

export default Navigation
