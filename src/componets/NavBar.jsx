import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar () {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Deco HOME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/category/beauty'>beauty</Nav.Link>
            <Nav.Link as={Link} to='/category/fragrances'>fragrances</Nav.Link>
            <Nav.Link as={Link} to='/category/furniture'>furniture</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}


export default NavBar;