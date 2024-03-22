import { auth } from './fb.js';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState, useContext } from 'react';
import {Card, UserContext} from '../index.js'




function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [email, setEmail]               = useState('');
  const ctx = useContext(UserContext);
  const ctxUser = ctx.user;

  
  useEffect(() => {
    fetch(`/account/${ctx.user}`)
    .then(response => response.json())
    .then(response => {
      setTransactions(response.transactions);
      setEmail(response.email);
    })
  },[])



  return(
    <div className="col">
      <Card
        bgcolor="primary"
        header={`${email}: Transactions`}
        body={
          transactions.map((item) => {
            return <Card
              bgcolor="success"
              header={`Amount: ${item.amount} || Type: ${item.type}`}
              body={`Date: ${Date(item.date)} || Running Balance: ${item.balance}`}
            />
          })
        }
      />
    </div>
  )
}


export default Transactions