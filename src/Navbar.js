import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLeaveSite = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/img/logo.png" alt="Novaa Logo" className="logo" />
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-button">Home</Link>
        <div className="divider"></div>
        <Link to="/survey" className="nav-button">Survey</Link>
        <div className="divider"></div>
        <Link to="/resources" className="nav-button">Resources</Link>
        <div className="divider"></div>
        <Link to="/modules" className="nav-button">Modules</Link>
      </div>
      <button className="leave-button" onClick={handleLeaveSite}>Leave Site</button>
    </nav>
  );
};

export default Navbar;
