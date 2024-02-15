import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { CartState } from './context/Context';

const SingleProducts = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    // <div>{prod.title}</div>
    <div className="products">
      <Row xs={1} md={2} className="g-4">
        {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src={prod.imageUrl}
              alt={prod.name}
              className="img"
            />
            <Card.Body>
              <Card.Title>{prod.title} </Card.Title>
              <Card.Subtitle>
                <span> Rs: {prod.price} </span>
              </Card.Subtitle>
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
            </Card.Body>
          </Card>
        </Col>
        {/* ))} */}
      </Row>
    </div>
  );
};

export default SingleProducts;
