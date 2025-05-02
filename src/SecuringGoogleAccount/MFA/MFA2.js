import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from '../../ProgressBar';
import "./MFA.css";

const MFA2 = () => {
  const navigate = useNavigate();

  const stepLabels = [
    "Overview",
    "Access Account",
    "Security Settings",
    "Get Started",
    "Verification Methods",
    "Complete",
  ];

  const totalSteps = stepLabels.length;
  const currentStep = 2; 

  return (
    <div className="mfa-container">
      {/* Updated ProgressBar with dynamic steps */}
      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        stepLabels={stepLabels}
      />

      <button className="close-btn" onClick={() => navigate("/guides")}>X</button>

      <div className="mfa-content">
        <div className="step-info">
          <h3>Step 1</h3>
          <p><strong>Access Your Google Account</strong></p>
          <p>Sign in at:<br />
            <a href="https://myaccount.google.com" target="_blank" rel="noopener noreferrer">myaccount.google.com</a>
          </p>
        </div>

        <div className="step-image">
          <img src="/img/google-signin.png" alt="Google Sign In" className="signin-img" />
        </div>
      </div>

      <div className="mfa-navigation">
        <button className="back-btn" onClick={() => navigate("/SecuringGoogleAccount/mfa/mfa1")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/mfa/mfa3")}>Next →</button>
      </div>
    </div>
  );
};

export default MFA2;
