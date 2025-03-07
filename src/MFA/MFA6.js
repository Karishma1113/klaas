import React from "react";
import { useNavigate } from "react-router-dom";
import "./MFA.css";

const MFA6 = () => {
  const navigate = useNavigate();

  return (
    <div className="mfa-container">
      <div className="mfa-tabs">
        <button className="tab">1. Overview</button>
        <button className="tab">2. Access Account</button>
        <button className="tab">3. Security Settings</button>
        <button className="tab">4. Get Started</button>
        <button className="tab">5. Verification Methods</button>
        <button className="tab active">6. Complete</button>
      </div>

      <button className="close-btn">X</button>

      <div className="mfa-content">
        <div className="mfa-steps">
          <div className="step">
            <h3>Step 1</h3>
            <div className="instruction-box">
              <p>Complete the Process: Follow the on-screen instructions to finish setting up</p>
            </div>
          </div>
        </div>

        <div className="mfa-steps">
          <div className="step">
            <h3>Need Help?</h3>
            <div className="instruction-box">
              <p>For detailed guidance, visit Google's 2-Step Verification Help Page</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mfa-navigation">
        <button className="nav-btn back-btn" onClick={() => navigate("/mfa/mfa5")}> ← Back</button>
      </div>
    </div>
  );
};

export default MFA6;
