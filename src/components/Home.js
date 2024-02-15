import React from 'react';
import { CartState } from './context/Context';
import SingleProducts from './SingleProducts';

const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);

  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products available</div>;
  }

  const innerProductsArray = products[0];

  return (
    <div className="home">
      <div className="productContainer">
        {innerProductsArray.map((prod) => (
        //   <span key={index}>{prod.title}</span>
        <SingleProducts prod={prod} key={prod.title}></SingleProducts>
        ))}
      </div>
    </div>
  );
};

export default Home;
