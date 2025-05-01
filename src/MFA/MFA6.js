import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBarMFA";
import "./MFA.css";

const MFA6 = () => {
  const navigate = useNavigate();

  return (
    <div className="mfa-container">
      <ProgressBar 
      currentStep={6}
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
              <p>Complete the process by following the on-screen instructions to finish setting up</p>
            </div>
          </div>
        </div>

        <div className="mfa-steps">
          <div className="step">
            <h3>Need Help?</h3>
            <div className="instruction-box">
              <p>For detailed guidance, visit <a href="https://support.google.com/accounts/answer/10956730" target="_blank" rel="noopener noreferrer">Google's 2-Step Verification Help Page</a></p>
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
