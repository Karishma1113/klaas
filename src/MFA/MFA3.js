import React from "react";
import { useNavigate } from "react-router-dom";
import "./MFA.css";

const MFA3 = () => {
  const navigate = useNavigate();

  return (
    <div className="mfa-container">
      <div className="mfa-tabs">
        <button className="tab">1. Overview</button>
        <button className="tab">2. Access Account</button>
        <button className="tab active">3. Security Settings</button>
        <button className="tab">4. Get Started</button>
        <button className="tab">5. Verification Methods</button>
        <button className="tab">6. Complete</button>
      </div>

      <button className="close-btn" onClick={() => navigate("/modules")}>X</button>

      <div className="mfa-content">
        <div className="mfa-steps">
          <div className="step">
            <h3>Step 1</h3>
            <div className="instruction-box">
              <p>Navigate to your account’s security settings</p>
              <p>Click on the “Security” tab</p>
            </div>
          </div>
          <div className="step-image">
            <img src="/img/security-settings.png" alt="Google Security Settings" />
          </div>
        </div>

        <div className="mfa-steps">
          <div className="step">
            <h3>Step 2</h3>
            <div className="instruction-box">
              <p>Under “Signing into Google,” select “2-Step Verification”</p>
            </div>
          </div>
          <div className="step-image">
            <img src="/img/2-step-verification.png" alt="Google 2-Step Verification" />
          </div>
        </div>
      </div>

      <div className="mfa-navigation">
        <button className="nav-btn back-btn" onClick={() => navigate("/mfa/mfa2")}> ← Back</button>
        <button className="nav-btn next-btn" onClick={() => navigate("/mfa/mfa4")}> Next →</button>
      </div>
    </div>
  );
};

export default MFA3;
