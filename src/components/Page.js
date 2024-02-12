import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';

const Page = () => {
  const productsArr = [
    {
      title: 'Colors',
      price: 100,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
  ];

  return (
    <Container style={{ justifyContent: 'space=between', marginLeft: '15%' }}>
      <Row>
        {productsArr.map((product, index) => (
          <Col md={6} key={index}>
            <div style={{ padding: '10px' }}>
              <img
                src={product.imageUrl}
                alt={product.title}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <h2>{product.title}</h2>
              <p>{product.price}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Page;
