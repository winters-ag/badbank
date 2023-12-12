import React from 'react'
import {UserContext, Card} from '../index.js'

const useState = React.useState;
const useContext = React.useContext;


function Deposit() {
  const [amount, setAmount]          = useState('0');
  const [status, setStatus]          = useState('');
  const [show, setShow]              = useState(true);
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if(!field || field <= 0) {
      setStatus('The Deposit must be larger than $0');
      setTimeout(() => setStatus(''), 10000);
      return false;
    }
  }
  
  function addDeposit() {
    if(!validate(amount,      'amount')) return;
    setShow(false);
  }

  function clearForm() {
    setAmount(0);
    setShow(true);
  }

  return (
    <Card
      bgcolor="info"
      header="Deposit"
      status={status}
      body={show ? (
        <>
        Amount <br />
        <input type="input" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br/>
        <button type="submit" className="btn btn-dark" onClick={addDeposit}>Deposit</button>
        </>
      ):(
        <>
        <h5>Success</h5>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit</button>
        </>
      )}
    />
  )
}

export default Deposit;