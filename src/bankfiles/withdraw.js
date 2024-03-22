import React from 'react'
import {UserContext, Card} from '../index.js'
import { useEffect, useState, useContext } from 'react';
import { auth } from './fb.js'
import { onAuthStateChanged } from 'firebase/auth';
import Container from 'react-bootstrap/Container';
import 'bootstrap';


function Withdraw() {
  const [amount, setAmount]          = useState('0');
  const [status, setStatus]          = useState('');
  const [show, setShow]              = useState(true);
  const [accBalance, setAccBalance]  = useState('');
  const [user, setUser]              = useState({})
  const ctx = useContext(UserContext);
  let accounts = ctx.accounts;

  useEffect(() => {
    onAuthStateChanged(auth, (currUser) => {
      if(currUser) {
        setUser(currUser.uid);
      }
    })
  }, []);

  function validate(field, label) {
    if(isNaN(field)) {
      setStatus('This is not a number');
      setTimeout(() => setStatus(''),10000);
      return false;
    }
    if(!field || field <= 0) {
      setStatus('The withdraw must be larger than $0');
      setTimeout(() => setStatus(''), 10000);
      return false;
    } else if(field > accBalance) {
      setStatus('Not enough funds for this withdrawal');
      setTimeout(() => setStatus(''), 10000);
      return false;
    }
    return true;
  }
  
  function subAccount() {
    //if(!validate(amount, 'amount')) return;
    const withdraw = amount * -1;
    console.log(withdraw);
    const url = `/account/transaction/${user}/${withdraw}/Withdrawal`
    fetch(url)
      .then(data => {
        console.log(`Withdrawal Made: ${data}`);
        setShow(false);
      })
      .catch(error => {
        console.log(error);
      })
  }

  function clearForm() {
    setAmount(0);
    setShow(true);
  }

  return (
    <Container>
      <Card
        bgcolor="info"
        header="Withdraw"
        status={status}
        body={show ? (
          <>
            Amount <br />
            <input type="input" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br/>
            <button type="submit" className="btn btn-danger" onClick={subAccount} disabled={!amount}>Withdraw</button>
          </>
        ):(
          <>
          <h5>You have successfully withdrawn {amount} dollars</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawal</button>
          </>
        )}
      />
    </Container>
  )
}

export default Withdraw;