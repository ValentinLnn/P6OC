import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav-header">
      <NavLink to="/home" className={({ isActive }) => (isActive ? 'nav-header_home-on' : 'nav-header_home-off')} >
        Accueil
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-header_about-on' : 'nav-header_about-off')}>
        À Propos
      </NavLink>
    </nav>
  );
};

export default Nav;