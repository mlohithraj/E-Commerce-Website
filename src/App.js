// import { Navbar, Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Store from './components/Link/Store';
import About from './components/Link/About';

const App = () => {
  return (
    // <div className="app-container">
    //   <Header />
    //   <Home />
    // </div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/HomePage" exact element={<HomePage />} />
        <Route path="/Store" exact element={<Store />} />
        <Route path="/About" exact element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
