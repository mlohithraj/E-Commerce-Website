// import { Navbar, Container } from 'react-bootstrap';
import './App.css';
import Page from './components/Page';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Page />
      <Footer />
    </div>
  );
};

export default App;
