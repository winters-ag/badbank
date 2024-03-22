import React from 'react'
import {UserContext, Card} from '../index.js'
import Container from 'react-bootstrap/Container';
import 'bootstrap';
import TriggerExample from './overlay'
import { auth } from './fb.js';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react'

const useState = React.useState;
const useContext = React.useContext;

function Deposit() {
  const [amount, setAmount]             = useState('0');
  const [status, setStatus]             = useState('');
  const [show, setShow]                 = useState(true);
  const [user, setUser]                 = useState({});
  const [balance, setBalance]           = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [account, setAccount]           = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currUser) => {
      if(currUser) {
        setUser(currUser.uid);
      }
    })
  }, []);

  function getAccount(){
    if(!user) return;
    console.log(user);
    const url = `/account/${user}`;
        fetch(url)
          .then(response => response.json())
          .then(response => {
            console.log(response);
            console.log(`Transact: ${response.transactions}`);
            const resTransactions = response.transactions;
            setTransactions(resTransactions);
            console.log(`Transactions: ${transactions}`);
          })
          .catch(err => console.log(err))
  }
  function validate(field, label) {
    if(isNaN(field)) {
      setStatus('This is not a number');
      setTimeout(() => setStatus(''),10000);
      return false;
    }
    if(!field || field <= 0) {
      setStatus('The Deposit must be larger than $0');
      setTimeout(() => setStatus(''), 10000);
      return false;
    }
    return true;
  }
  
  function addDeposit() {
    const url = `/account/transaction/${user}/${amount}/Deposit`;
    fetch(url)
      .then(response => console.log(response))
      .then(data => {
        console.log(`Front End: ${data}`);
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
        header="Deposit"
        status={status}
        body={show ? (
          <>
          Current Balance: <br/>
          Amount <br />
          <input type="input" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br/>
          <button type="submit" className="btn btn-success" onClick={addDeposit} disabled={(!amount)}>Deposit</button>
          </>
        ):(
          <>
          <h5>You have successfully deposited {amount} dollars</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit</button>
          <button className="btn btn-light" onClick={getAccount}>Get Account Info</button>
          </>
        )}
      />
    </Container>
  )
}

export default Deposit;