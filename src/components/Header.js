import React from 'react';
import { Badge, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
// import CartReducer from './context/Reducer';
import { CartState } from './context/Context';
import { AiFillDelete } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import './styles.css';
import { Link } from 'react-router-dom';

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
          <Link to="/HomePage">Home</Link>
          <Link to="/Store">Store</Link>
          <Link to="/About">About</Link>
          <Nav>
            <Dropdown alignRight>
              <Dropdown.Toggle>
                <FaShoppingCart color="white" fontSize="25px" />
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
                          alt={prod.title}
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
