// import { Navbar, Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import ProductDetails from './components/Link/ProductDetails';
import HomePage from './components/Link/HomePage';
import About from './components/Link/About';
import Contact from './components/Link/Contact';

const App = () => {
  const contactUsPage = async (contact) => {
    const response = await fetch(
      'https://movie-list-62da6-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json',
      {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
          'COntent-Type': 'application/json',
        },
      },
    );
    const data = await response.json();
    console.log(data);
  };

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
            <Contact onAddContact={contactUsPage} />
          </Route>
          <Route path="/Store/:productId">
            <ProductDetails />
          </Route>
          <Route path="/Store">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
