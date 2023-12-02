import React from 'react'
import {UserContext, Card} from '../index.js'


function Home() {
 

  return (
    <Card 
      bgcolor="info"
      txtcolor="black"
      header="BadBank Landing Page"
      title="Welcome to the Bad Bank"
      text="You can use this bank to keep track of your savings"
      body={(<img src="/bank.png" className="img-fluid" alt="Responsive image" />)}
      footer="Please come back and see us again!"
    />
  )
}

export default Home;