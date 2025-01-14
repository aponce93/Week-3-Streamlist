import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { FaHome, FaFilm, FaShoppingCart, FaInfoCircle } from "react-icons/fa"; // Font Awesome icons

function Navigation() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">
            <FaHome className="nav-icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/movies">
            <FaFilm className="nav-icon" /> Movies
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <FaShoppingCart className="nav-icon" /> Cart
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaInfoCircle className="nav-icon" /> About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
