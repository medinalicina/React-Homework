import React from 'react'
import '../../components/navbar/navbar.css'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <Link to="/">
        <img src="logo.png" alt='logo'/>
        </Link>
      </div>
      <ul className='navbar-links'>
        <li>
        <Link to="/about">About us</Link>
        </li>
      </ul>
    </nav>
  );
}



export default Navbar