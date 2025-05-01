import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBarMFA";
import "./MFA.css";

const MFA3 = () => {
  const navigate = useNavigate();

  return (
    <div className="mfa-container">
      <ProgressBar 
      currentStep={3}
      stepLabels={[
        "Overview",
        "Access Account",
        "Security Settings",
        "Get Started",
        "Verification Methods",
        "Complete"
      ]}
      />

      <button className="close-btn" onClick={() => navigate("/guides")}>X</button>

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
