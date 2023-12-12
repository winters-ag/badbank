import React from 'react'
import {UserContext} from '../index.js'

function Alldata() {
  const ctx = React.useContext(UserContext);
  return (
    <div>
      <h3>Alldata Component</h3>
      {JSON.stringify(ctx.accounts)}
      <br/>
      {JSON.stringify(ctx.transactions)}
    </div>
  )
}

export default Alldata;