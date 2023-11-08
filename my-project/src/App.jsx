import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import Baner from './components/banner/Baner';
import Novosti from './components/News/Novosti';
import Footer from './components/Footer/Footer.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';

function App() {
  return (
    <Router>
    <div className='main-container'>
      <Navbar />
      <Routes>
        <Route path="/" exact component={<Home/>} />
        <Route path="/about" component={<About/>} />
      </Routes>
      <Baner />
      <Novosti />
      <Footer />
    </div>
   </Router>
    
  );
}

export default App;
