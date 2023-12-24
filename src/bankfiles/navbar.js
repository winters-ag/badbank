import  { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function BankNav() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
      <Navbar.Brand>
        <img
              alt="banklogo"
              src="/bank.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
        />
        </Navbar.Brand>
        <Navbar.Brand>
          <Link className="nav-link" to="/">Bad Bank</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link alt="Create Accounts on this page" className="nav-link" to="/createaccount">Create Account</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/deposit">Deposit</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/withdraw">Withdraw</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/alldata">All Data</Link>
            </Nav.Link>          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default BankNav;