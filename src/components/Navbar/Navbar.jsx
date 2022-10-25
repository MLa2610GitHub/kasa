import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        <li>Accueil</li>
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        <li>A Propos</li>
      </NavLink>
    </nav>
  );
};

export default Navbar;