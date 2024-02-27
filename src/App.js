import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProductDetails from './components/Link/ProductDetails';
import HomePage from './components/Link/HomePage';
import About from './components/Link/About';
import Contact from './components/Link/Contact';
import Form from './components/Link/Form';
import AuthContext from './components/context/auth-context';

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/HomePage">
            <HomePage />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Store/:productId">
            {authCtx.isLoggedIn ? <ProductDetails /> : <Redirect to="/Form" />}
          </Route>
          <Route path="/Store">
            {authCtx.isLoggedIn ? (
              <Home to="/Store" />
            ) : (
              <Redirect to="/Form" />
            )}
          </Route>
          <Route path="/Form">
            <Form />
          </Route>
          {/* <Route path="*">
            <Redirect to="/HomePage" />
          </Route> */}
        </Switch>
      </main>
    </div>
  );
};

export default App;
