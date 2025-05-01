import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBarMFA";
import "./MFA.css";

const MFA4 = () => {
  const navigate = useNavigate();

  return (
    <div className="mfa-container">
      <ProgressBar 
      currentStep={4}
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
        <div className="step-info">
          <h3>Step 1</h3>
          <p><strong>Start the set up process:</strong></p>
          <p>Click "Turn on 2 step verification" and follow the prompts.</p>
        </div>

        <div className="step-image">
          <img src="/img/2-step-verification2.png" alt="2-step verification" />
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
