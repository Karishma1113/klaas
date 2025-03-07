import React from "react";
import { useNavigate } from "react-router-dom";
import "./MFA.css";

const MFA2 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mfa-container">
        <div className="mfa-header">
          <h1>Setting Up Multi-Factor Authentication (MFA) for Your Google Account</h1>
        </div>
        <p>
          Multi-Factor Authentication (MFA) adds an extra layer of security to your Google account by 
          requiring a second form of verification in addition to your password. This helps protect your 
          account from unauthorized access, even if someone steals or guesses your password.
        </p>
        <p>
          MFA is a security feature that requires users to provide two forms of authentication to verify 
          their identity.
        </p>

        <h3>Why set up MFA?</h3>
        <ul className="mfa-list">
          <li> Prevents unauthorized access</li>
          <li> Enhances security for data</li>
          <li> Reduces the risk of identity theft</li>
          <li> Protects against phishing attacks</li>
        </ul>

        <div className="mfa-navigation">
          <button className="next-btn" onClick={() => navigate("/mfa/mfa3")}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default MFA2;
