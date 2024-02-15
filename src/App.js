// import { Navbar, Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Home />
    </div>
  );
};

export default App;
