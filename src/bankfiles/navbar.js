import  { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TriggerExample from './overlay';


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
          <TriggerExample tooltip="Return to the home page">
            <Link className="nav-link" to="/">Bad Bank</Link>
          </TriggerExample>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <TriggerExample tooltip="Create an account on this page">
                <Link className="nav-link" to="/createaccount">Create Account</Link>
              </TriggerExample>
            </Nav.Link>
            <Nav.Link>
              <TriggerExample tooltip="Deposit funds on this page">
                <Link className="nav-link" to="/deposit">Deposit</Link>
              </TriggerExample>
            </Nav.Link>
            <Nav.Link>
              <TriggerExample tooltip="Withdraw funds on this page">
                <Link className="nav-link" to="/withdraw">Withdraw</Link>
              </TriggerExample>
            </Nav.Link>
            <Nav.Link>
              <TriggerExample tooltip="View all data on this page">
                <Link className="nav-link" to="/alldata">All Data</Link>
              </TriggerExample>
            </Nav.Link>          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default BankNav;