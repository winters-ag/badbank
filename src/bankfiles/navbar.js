import  { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  return(
    <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link navbar-brand" to="/">Bad Bank</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/createaccount/">Create Account</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login/">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/deposit/">Deposit</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/withdraw/">Withdraw</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/balance/">Balance</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/alldata/">All Data</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;