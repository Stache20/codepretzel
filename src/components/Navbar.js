import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import WebPretzelLogo from "./WebPretzelLogo";

function MainNavbar() {
  return (
    <Navbar fixed="top" variant="dark" expand="lg" className="main-navbar" style={{ background: '#000', borderBottom: '1.5px solid #222' }}>
      <Container fluid>
        <Navbar.Brand href="/">
          <WebPretzelLogo height="30px" width="30px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-responsive" />
        <Navbar.Collapse id="navbar-responsive">
          <Nav className="ms-auto nav-links">
            <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="/services" className="nav-link-custom">Services</Nav.Link>
            <Nav.Link href="/about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="/blog" className="nav-link-custom">Blog</Nav.Link>
            <Nav.Link href="/contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
