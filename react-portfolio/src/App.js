import logo from './logo.svg';
import Navbar from './components/NavBar';
import './App.css';
import Header from './components/Header';
import Portfolio from './components/pages/Portfolio';
import Form from './components/pages/Form';
import Home from './components/pages/Home';
import PageContainer from './components/Container';
import Footer from './components/Footer';

// import { Link } from 'react-router-dom';
// import BasicCard from './components/boottest';

function App() {

return(
  <div>
    <Header />

      <PageContainer />

      <Footer />
    {/* <Portfolio projects={projects} /> */}
    {/* <Form /> */}
    {/* <PageContainer /> */}
    {/* <Home /> */}
  
 
  </div>
);
}

export default App;
