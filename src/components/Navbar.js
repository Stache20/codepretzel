import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import WebPretzelLogo from "./WebPretzelLogo";

function Header() {
  return (
    <Navbar fixed="top" variant="dark" bg="" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <WebPretzelLogo height="30px" weight="30px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-white-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown id="nav-dropdown-dark-example" title="WebPretzel">
              <NavDropdown.Item href="/">Home</NavDropdown.Item>
              <NavDropdown.Item href="/services">Services</NavDropdown.Item>
              <NavDropdown.Item href="/about">About</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
