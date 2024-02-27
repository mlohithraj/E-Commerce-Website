import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartState } from './context/Context';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import './styles.css';

const SingleProducts = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const addToCartHandler = async (product) => {
    try {
      // Make a POST request to add the product to the cart
      const response = await axios.post(
        `https://crudcrud.com/api/b0446aea7fe64d6aa27ddffe67bf3630
/${getUserEmail()}`,
        product,
      );
      // Dispatch an action to update the cart state
      dispatch({
        type: 'ADD_TO_CART',
        payload: product,
      });
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  const removeFromCartHandler = async (product) => {
    try {
      // Make a DELETE request to remove the product from the cart
      const response = await axios.delete(
        `https://crudcrud.com/api/b0446aea7fe64d6aa27ddffe67bf3630
/${getUserEmail()}/${product.id}`,
      );
      // Dispatch an action to update the cart state
      dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product,
      });
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };

  const getUserEmail = () => {
    // Retrieve user email from localStorage or context
    // Replace this with your actual implementation
    return 'useremail';
  };

  return (
    <div className="products">
      <Card>
        <Card.Img
          variant="top"
          src={prod.imageUrl}
          alt={prod.title}
          className="img"
        />
        <Card.Body>
          <Link
            to={{ pathname: `/Store/${prod.id}`, state: { product: prod } }}
          >
            <Card.Title>{prod.title}</Card.Title>
          </Link>
          <Card.Subtitle>
            <span> Rs: {prod.price} </span>
          </Card.Subtitle>
          {cart.some((p) => p.title === prod.title) ? (
            <Button
              variant="danger"
              onClick={() => {
                removeFromCartHandler(prod);
              }}
            >
              Remove From Cart
            </Button>
          ) : (
            <Button
              onClick={() => {
                addToCartHandler(prod);
              }}
            >
              Add to Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProducts;
