import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLeaveSite = () => {
    window.open("https://weather.com/", "_blank");
  };
  
  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <img src="/img/logo.png" alt="Novaa Logo" className="logo" />
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-button">Home</Link>
          <div className="divider"></div>
          <Link to="/resources" className="nav-button">Resources</Link>
          <div className="divider"></div>
          <Link to="/survey1" className="nav-button">Survey</Link>
          <div className="divider"></div>
          <Link to="/modules" className="nav-button">Modules</Link>
        </div>
        <div className="spacer"></div> {/* spacer for the Leave Site button */}
      </nav>
      <button onClick={handleLeaveSite} className="leave-button">
        Leave Site
      </button>
    </>
  );
};

export default Navbar;