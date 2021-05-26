import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/movieLogo.png';

// import './Navbar.css';

export default function NavBar() {
  return (
    <header className="navbar navbar-light bg-light">
      <nav className="container-fluid">
        <div className="navbar-brand">
          <img
            src={Logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Movies Logo"
          />
        </div>
        <menu id="navbarNav">
          <ul className="navbar-nav container-fluid">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/favs" className="nav-link">
                Favorites
              </NavLink>
            </li>
          </ul>
        </menu>
      </nav>
    </header>
  );
}
