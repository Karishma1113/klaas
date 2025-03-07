import React from "react";
import { useNavigate } from "react-router-dom";
import "./MFA.css";

const MFA4 = () => {
  const navigate = useNavigate();

  return (
    <div className="mfa-container">
      <div className="mfa-tabs">
        <button className="tab">1. Overview</button>
        <button className="tab">2. Access Account</button>
        <button className="tab">3. Security Settings</button>
        <button className="tab active">4. Get Started</button>
        <button className="tab">5. Verification Methods</button>
        <button className="tab">6. Complete</button>
      </div>

      <button className="close-btn">X</button>

      <div className="mfa-content">
        <div className="step-info">
          <h3>Step 1</h3>
          <p><strong>Start the set up process:</strong></p>
          <p>Click "Turn on 2 step verification" and follow the prompts.</p>
        </div>

        <div className="2-step-verification2">
          <img src="/2-step-verification2.png" alt="2-step verification" />
        </div>
      </div>

      <div className="mfa-navigation">
        <button className="back-btn" onClick={() => navigate("/mfa/mfa3")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/mfa/mfa5")}>Next →</button>
      </div>
    </div>
  );
};

export default MFA4;
