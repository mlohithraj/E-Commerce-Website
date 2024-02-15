import React from 'react';
import { Badge, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Brand href="/">Store</Navbar.Brand>
          <Navbar.Brand href="/">About</Navbar.Brand>
          <Nav>
            <Dropdown alignRight>
              <Dropdown.Toggle>
                {/* <FaShoppingCart color="white" fontSize="25px" /> */}
                <Badge>Cart</Badge>
                <Badge>0</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu variant="Secondary">Cart is Empty</Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
