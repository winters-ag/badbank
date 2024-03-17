import React from 'react'
import {UserContext, Card} from '../index.js'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap';
import TriggerExample from './overlay'


const useState = React.useState;
const useContext = React.useContext;

function Deposit() {
  const [amount, setAmount]          = useState('0');
  const [status, setStatus]          = useState('');
  const [show, setShow]              = useState(true);
  const [accEmail, setAccEmail]      = useState('');
  const [accName, setAccName]        = useState('');
  const [accBalance, setAccBalance]  = useState('');
  const ctx = React.useContext(UserContext);
  let accounts = ctx.accounts;

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
  
  function setAccount(selectedEmail) {
    let currAccount = accounts.filter((el) => el.email === selectedEmail);
    setAccBalance(currAccount[0].balance);
    setAccEmail(currAccount[0].email);
    setAccName(currAccount[0].name);
  }

  function addDeposit(selectedEmail) {
    if(!validate(amount,      'amount')) return;

    let currAccount = accounts.filter((el) => el.email === accEmail);
    let currID = currAccount[0].id;
    let newBalance = accBalance + Number(amount);
    setAccBalance(newBalance);
    currAccount[0].balance = newBalance;
    ctx.transactions.push({account:currID,type:'deposit',amount,balance:newBalance,timestamp:Date.now()})

    

    setShow(false);
  }
  function accountDropdown() {

    return (
      <div className="container">
        <div className="row align-items-start">
          <div className="col">Current Balance: <b>{accBalance}</b></div>
          <div className="col">Account: <b>{accEmail}</b></div>
          <div className="col">
            <Dropdown>
              <Dropdown.Toggle variant="warning" id="dropdown-basic">
                {accName ? "Change Account" : "Select Account"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {accounts.map((item) => {
                  return <Dropdown.Item key={item.id} onClick={() => setAccount(item.email)}>{item.name}</Dropdown.Item>
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    );
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
        {accountDropdown()}
        Amount <br />
        <input type="input" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br/>
        <button type="submit" className="btn btn-success" onClick={addDeposit} disabled={(!amount) || (accEmail==='')}>Deposit</button>
        </>
      ):(
        <>
        <h5>You have successfully deposited {amount} dollars</h5>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit</button>
        </>
      )}
    />
  )
}

export default Deposit;