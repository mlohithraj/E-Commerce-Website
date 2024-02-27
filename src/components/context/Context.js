import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import CartReducer from './Reducer';
// import { faker } from '@faker-js/faker';

const Cart = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
});

const Context = ({ children }) => {
  const products = [...Array(1)].map(() => [
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
  ]);

    const [token, setToken] = useState(null);

      const userIsLoggedIn = !!token;

        const loginHandler = (token) => {
          setToken(token);
        };


  const [state, dispatch, contextValue] = useReducer(CartReducer, {
    products: products,
    cart: [],
    productDetail: [],
    isLoggedIn: userIsLoggedIn,
    token: token,
    login: loginHandler,
  });

  return (
    <Cart.Provider value={{ state, dispatch, contextValue }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
