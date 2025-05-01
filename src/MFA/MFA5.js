import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBarMFA";
import "./MFA.css";

const MFA5 = () => {
  const navigate = useNavigate();

  return (
    <div className="mfa-container">
      <ProgressBar 
      currentStep={5}
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

      <div className="mfa-content">
        <div className="mfa-steps">
          <div className="step">
            <h3>Step 1</h3>
            <div className="instruction-box">
              <p>Choose a verification method from the provided options</p>
            </div>
          </div>
        </div>

        <div className="mfa-steps">
          <div className="step">
            <h3>Options</h3>
            <div className="instruction-box">
              <p>Google Prompts: Approve sign-ins from your smartphone</p>
              <p>Authentication App: Use an app like Google Authenticator for codes</p>
              <p>Text Message or Call: Receive code via SMS or voice call</p>
            </div>
          </div>
          <div className="step-image">
            <img src="/img/second-steps.png" alt="Second steps" />
          </div>
        </div>
      </div>

      <div className="mfa-navigation">
        <button className="nav-btn back-btn" onClick={() => navigate("/mfa/mfa4")}> ← Back</button>
        <button className="nav-btn next-btn" onClick={() => navigate("/mfa/mfa6")}> Next →</button>
      </div>
    </div>
  );
};

export default MFA5;
