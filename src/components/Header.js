import React from 'react';
import { Badge, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
// import CartReducer from './context/Reducer';
import { CartState } from './context/Context';
import { AiFillDelete } from 'react-icons/ai';
import './styles.css';

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

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
                <Badge>{cart.length}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu variant="Secondary">
                {cart.length > 0 ? (
                  <>
                    {cart.map((prod) => (
                      <span className="cartitem" key={prod.title}>
                        <img
                          src={prod.imageUrl}
                          alt="prod.name"
                          className="cartItemImg"
                        />
                        <div className="cartItemDetail">
                          <span>{prod.title}</span>
                          <span>₹ {prod.price}</span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: 'pointer' }}
                          onClick={() =>
                            dispatch({
                              type: 'REMOVE_FROM_CART',
                              payload: prod,
                            })
                          }
                        />
                      </span>
                    ))}
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is Empty!</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
