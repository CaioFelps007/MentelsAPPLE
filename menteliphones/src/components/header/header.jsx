import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

function NavHeader() {
  return (
    <nav>
      <div className="nav-sup">
        <ul>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/catalogo">Catalogo</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/suporte">Suporte</NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default NavHeader;
