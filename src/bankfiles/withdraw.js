import React from 'react'
import {UserContext, Card} from '../index.js'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap';


const useState = React.useState;
const useContext = React.useContext;

function Withdraw() {
  const [amount, setAmount]          = useState('0');
  const [status, setStatus]          = useState('');
  const [show, setShow]              = useState(true);
  const [accEmail, setAccEmail]      = useState('');
  const [accName, setAccName]        = useState('');
  const [accBalance, setAccBalance]  = useState('');
  const ctx = React.useContext(UserContext);
  let accounts = ctx.accounts;

  function validate(field, label) {
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
  
  function setAccount(selectedEmail) {
    let currAccount = accounts.filter((el) => el.email === selectedEmail);
    setAccBalance(currAccount[0].balance);
    setAccEmail(currAccount[0].email);
    setAccName(currAccount[0].name);
  }

  function subAccount(selectedEmail) {
    if(!validate(amount,      'amount')) return;

    let currAccount = accounts.filter((el) => el.email === accEmail);
    let newBalance = accBalance - Number(amount);
    setAccBalance(newBalance);
    currAccount[0].balance = newBalance;

    setShow(false);
  }
  function accountDropdown() {

    return (
      <div className="container">
        <div class="row align-items-start">
          <div className="col"><b>{accName}</b> Current Balance: {accBalance}</div>
          <div className="col">Account: {accEmail}</div>
          <div className="col">
            <Dropdown>
              <Dropdown.Toggle variant="warning" id="dropdown-basic">
                {accName ? "Change Account" : "Select Account"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {accounts.map((item) => {
                  return <Dropdown.Item onClick={() => setAccount(item.email)}>{item.name}</Dropdown.Item>
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
      header="Withdraw"
      status={status}
      body={show ? (
        <>
          {accountDropdown()}
          Amount <br />
          <input type="input" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br/>
          <button type="submit" className="btn btn-danger" onClick={subAccount}>Withdraw</button>
        </>
      ):(
        <>
        <h5>Success</h5>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawal</button>
        </>
      )}
    />
  )
}

export default Withdraw;