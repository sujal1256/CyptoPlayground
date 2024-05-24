import React from 'react';
import './Navbar.css';
import logo from '../../images/svg/logo-white.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo"  className="logo" />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">Contact</Link>
        </li>
      </ul>
      <ul className="navbar-signup">
        <li className="navbar-item">
          <a href="#" className="navbar-link">Signup</a>
        </li>
        <li className="navbar-item">
          <a href="" className="navbar-link">Signin</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;