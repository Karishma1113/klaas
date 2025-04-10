import React from "react";
import { useNavigate } from "react-router-dom";
import "./PasswordSetup.css";

const Password1 = () => {
  const navigate = useNavigate();

  return (
    <div className="password-container">
      <div className="password-tabs">
        <button className="tab active">1. Overview</button>
        <button className="tab">2. Tips and Best Practices</button>
      </div>

      <button className="close-btn" onClick={() => navigate("/modules")}>X</button>

      <h1 className="password-title">Secure Password Setup</h1>
      <p>
        Creating a strong, secure password is one of the most important steps in protecting your Google account 
        from unauthorized access. A secure password helps prevent hacking, identity theft, and data breaches.
      </p>
      
      <div className="step-image">
        <img src="/img/password1.png" alt="Settings navigation" />
      </div>

      <div className="password-navigation">
        <button className="next-btn" onClick={() => navigate("/password/password2")}>Next →</button>
      </div>
    </div>
  );
};

export default Password1;