import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { CartState } from './context/Context';
import { Link } from 'react-router-dom';
import './styles.css';

const SingleProducts = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    // <div>{prod.title}</div>
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
                dispatch({
                  type: 'REMOVE_FROM_CART',
                  payload: prod,
                });
              }}
            >
              Remove From Cart
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({
                  type: 'ADD_TO_CART',
                  payload: prod,
                });
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
