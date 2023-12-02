import React from 'react'
import {UserContext} from '../index.js'

function Login() {
  const ctx = React.useContext(UserContext);
  return (
    <div>
      <h3>Login Component</h3>
      {JSON.stringify(ctx.users)}
    </div>
  )
}

export default Login;