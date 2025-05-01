import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBarMFA";
import "./MFA.css";

const MFA1 = () => {
  const navigate = useNavigate();

  return (
    <div className="mfa-container">
      {/* Replace the old progress bar with the new one */}
      <ProgressBar 
      currentStep={1}
      stepLabels={[
        "Overview",
        "Access Account",
        "Security Settings",
        "Get Started",
        "Verification Methods",
        "Complete"
      ]}
      />

      <button className="close-btn" onClick={() => navigate("/modules")}>X</button>

      <h1 className="mfa-title">Setting Up Multi-Factor Authentication (MFA) for Your Google Account</h1>

      <p>
      Multi-Factor Authentication (MFA), or 2-step verification, adds an extra layer of security to your 
      Google account by requiring a second form of verification in addition to your password. 
      </p>

      <p>
      This helps protect your account from unauthorized access, even if someone steals or guesses your password.
      MFA is a security feature that requires users to provide two forms of authentication to verify their identity.
      </p>

      <h3>Why set up MFA?</h3>
      <ul className="mfa-list">
        <li>○ Prevents unauthorized access</li>
        <li>○ Enhances security for data</li>
        <li>○ Reduces the risk of identity theft</li>
        <li>○ Protects against phishing attacks</li>
      </ul>

      <div className="mfa-navigation">
        <button className="next-btn" onClick={() => navigate("/mfa/mfa2")}>
          Next →
        </button>
      </div>
    </div>
  );
};

export default MFA1;
