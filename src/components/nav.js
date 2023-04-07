import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dress">Dress</NavLink>
        <NavLink tp="/top">Top</NavLink>
        <NavLink to="pant">Pant</NavLink>
        <NavLink to="shoes">Shoes</NavLink>
      </nav>
    </>
  );
}
