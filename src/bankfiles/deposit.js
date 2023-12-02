import React from 'react'
import {UserContext} from '../index.js'

function Deposit() {
  const ctx = React.useContext(UserContext);
  return (
    <div>
      <h3>Deposit Component</h3>
      {JSON.stringify(ctx.users)}
    </div>
  )
}

export default Deposit;