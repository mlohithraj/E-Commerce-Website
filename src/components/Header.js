import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Cart from './Cart';

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Nav className="me-auto" style={{ marginLeft: '550px' }}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Cart />
        </Container>
      </Navbar>
      <h1
        style={{
          backgroundColor: 'grey',
          display: 'flex',
          justifyContent: 'center',
          padding: '30px',
          fontSize: '50px',
          color: 'white',
        }}
      >
        The Generics
      </h1>
    </div>
  );
};

export default Header;
