import React from 'react'
import {UserContext} from './App.js'

function Home() {
  const ctx = React.useContext(UserContext);
  return (
    <div>
      <h3>Home Component</h3>
      {JSON.stringify(ctx.users)}
    </div>
  )
}

export default Home;