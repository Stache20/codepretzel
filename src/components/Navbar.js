import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CodePretzelLogo from './CodePretzelLogo'
import Linkedin from './Linkedin'

function Header() {
  return (
    <Navbar fixed="top" variant="dark" bg="" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><CodePretzelLogo height='30px' weight='30px'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-white-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="CodePretzel"
            
            >
            <NavDropdown.Item href="/">
                Home
              </NavDropdown.Item>
              <NavDropdown.Item href="/services">Services</NavDropdown.Item>
              <NavDropdown.Item href="/about">
                About
              </NavDropdown.Item>
              <NavDropdown.Item href="/references">References</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/contact">
                Contact
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}


export default Header