import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Theertha</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;