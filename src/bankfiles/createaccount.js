import React from 'react'
import {UserContext, Card} from '../index.js'

const useState = React.useState;
const useContext = React.useContext;

function CreateAccount() {
  const [show, setShow]          = useState(true);
  const [status, setStatus]      = useState('');
  const [name, setName]          = useState('');
  const [email, setEmail]        = useState('');
  const [password, setPassword]  = useState('');
  const ctx = useContext(UserContext);


  function validate(field, label) {
    if(!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(name,    'name'))          return;
    if (!validate(email,   'email'))         return;
    if (!validate(password,   'password'))   return;
    ctx.users.push({name,email,password,balance:100});
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