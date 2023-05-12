import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="pendant">Pendentif</NavLink>
        <NavLink to="earring">Boucle d'oreille</NavLink>
        <NavLink to="ring">Bague</NavLink>
        <NavLink to="watch">Montre</NavLink>
        <NavLink to="bracelet">Bracelet</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
    </>
  );
}
