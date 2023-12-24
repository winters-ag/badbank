import React from 'react';
import {UserContext, Card} from '../index.js';
import axios from 'axios';

const useState = React.useState;
const useContext = React.useContext;

function CreateAccount() {
  const [show, setShow]          = useState(true);
  const [status, setStatus]      = useState('');
  const [name, setName]          = useState('');
  const [email, setEmail]        = useState('');
  const [password, setPassword]  = useState('');
  const ctx = useContext(UserContext);
  let accounts = ctx.accounts;


  function validate(field, label) {
    if(label === 'password' && field.length < 8) {
      setStatus('Password must be 8 characters long');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if(!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if(label === 'email' && accounts.filter((el) => el.email === field)) {
      setStatus('Account already exists');
      setTimeout(() => setStatus(''), 10000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(name,    'name'))          return;
    if (!validate(email,   'email'))         return;
    if (!validate(password,   'password'))   return;
    ctx.accounts.push({name,email,password,balance:100});
    //comment out axios until decide if I want to use it.
    //axios.post('./accounts.json',ctx.accounts);
    setShow(false);
  }

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="info"
      header="Create Account"
      status={status}
      body={show ? (
        <>
          Name <br />
          <input type="input" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
          Email Address<br/>
          <input type="input" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
          Password<br />
          <input type="password" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
          <button type="submit" className="btn btn-dark" onClick={handleCreate}>Create Account</button>
        </>
      ):(
        <>
        <h5>Success</h5>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
        </>
      )}
    />
  )
}

export default CreateAccount;