import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  token: null,
  isLoggedIn: false,
  userEmail: null,
  login: (token, email) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('token');
  const initialUserEmail = localStorage.getItem('userEmail');
  const [token, setToken] = useState(initialToken);
  const [userEmail, setUserEmail] = useState(initialUserEmail);

  const userIsLoggedIn = !!token;

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  useEffect(() => {
    if (userEmail) {
      localStorage.setItem('userEmail', userEmail);
    } else {
      localStorage.removeItem('userEmail');
    }
  }, [userEmail]);

  const loginHandler = (token, email) => {
    setToken(token);
    setUserEmail(email);
  };

  const logoutHandler = () => {
    setToken(null);
    setUserEmail(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    userEmail: userEmail,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
