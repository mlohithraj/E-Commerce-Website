// import { Navbar, Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Link/HomePage';
import About from './components/Link/About';
import Contact from './components/Link/Contact';

const App = () => {
  // const URL =
  //   'https://movie-list-62da6-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json';

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
    <BrowserRouter>
      <Header />
      <Route path="/Store">
        <Home />
      </Route>
      <Route path="/HomePage">
        <HomePage />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Contact">
        <Contact onAddContact={contactUsPage} />
      </Route>
    </BrowserRouter>
  );
};

export default App;
