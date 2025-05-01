import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLeaveSite = () => {
    window.open("https://weather.com/", "_blank"); 
    window.location.href = "https://en.wikipedia.org/wiki/Main_Page"; 
  };
  
  
  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
   <Link to="/Home.js">
  <img src="/img/logo.png" alt="Novaa Logo" className="logo" />
</Link>
        </div>
        <div className="nav-links">
          <Link to="/resources" className="nav-button">Resources</Link>
          <div className="divider"></div>
          <Link to="/survey1" className="nav-button">Survey</Link>
          <div className="divider"></div>
          <Link to="/guides" className="nav-button">Guides</Link>
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