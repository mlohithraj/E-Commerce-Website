import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import CartReducer from './Reducer';
// import { faker } from '@faker-js/faker';

const Cart = createContext();

const Context = ({ children }) => {
  const products =  [...Array(1)].map(() =>
  [
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
  ]
  );

  // const [movie, setMovie] = useState([]);

  // const products = async () => {
  //   const res = await fetch('https://swapi.dev/api/films');
  //   const data = await res.json();

  //   // console.log(data)

  //   if (data && data.results) {
  //     const transformedMovies = data.results.map((movieData) => {
  //       return {
  //         title: movieData.title,
  //         imageUrl: movieData.opening_crawl,
  //         price: movieData.episode_id,
  //       };
  //     });
  //     setMovie(transformedMovies);
  //   }
  // };

  // console.log(movie);

  // useEffect(() => {
  //   products();
  // }, []);

  const [state, dispatch] = useReducer(CartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
