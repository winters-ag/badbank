import  { Link } from 'react-router-dom';
import 'react-bootstrap'

function Nav() {
  return(
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/alldata/">All Data</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/balance/">Balance</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/context/">Context</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/createaccount/">Create Account</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/deposit/">Deposit</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login/">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/withdraw/">Withdraw</Link>
      </li>
    </ul>
  );
}

export default Nav