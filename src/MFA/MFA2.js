import React from "react";
import { useNavigate } from "react-router-dom";
import "./MFA.css";

const MFA2 = () => {
  const navigate = useNavigate();

  return (
    <div className="mfa-container">
      <div className="mfa-tabs">
        <button className="tab">1. Overview</button>
        <button className="tab active">2. Access Account</button>
        <button className="tab">3. Security Settings</button>
        <button className="tab">4. Get Started</button>
        <button className="tab">5. Verification Methods</button>
        <button className="tab">6. Complete</button>
      </div>

      <button className="close-btn">X</button>

      <div className="mfa-content">
        <div className="step-info">
          <h3>Step 1</h3>
          <p><strong>Access Your Google Account</strong></p>
          <p>Sign in at:<br /><a href="https://myaccount.google.com" target="_blank" rel="noopener noreferrer">myaccount.google.com</a></p>
        </div>

        <div className="google-signin">
          <img src="/google-signin.png" alt="Google Sign In" className="signin-img" />
        </div>
      </div>

      <div className="mfa-navigation">
        <button className="back-btn" onClick={() => navigate("/mfa1")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/mfa/mfa3")}>Next →</button>
      </div>
    </div>
  );
};

export default MFA2;
