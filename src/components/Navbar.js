import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/path/to/logo.png" alt="Logo" className="navbar-logo-img" />
        </Link>
        <div className="navbar-menu-icon" onClick={toggleNav}>
          <i className={isNavOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={isNavOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleNav}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleNav}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleNav}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleNav}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
