import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./KidsPrivacy.css";

const SnapModule3 = () => {
  const navigate = useNavigate();
  const stepLabels = [
    "Open Snapchat Settings",
    "Access Ghost Mode",
    "Enable Ghost Mode",
    "Adjust Timer (Optional)",
    "Success"
  ];

  return (
    <div className="twofa-container">
      <ProgressBar currentStep={3} totalSteps={stepLabels.length} stepLabels={stepLabels} />
      <button className="close-btn" onClick={() => navigate("/guides")}>X</button>
      <h1 className="twofa-title">Enable Ghost Mode</h1>
      <div className="step-info">
        <h3>Step 3 – Turn on Ghost Mode</h3>
        <p>Toggle the <strong>Ghost Mode</strong> switch to the ON position.</p>
        <div className="step-image">
          <img src="/img/snap3-ghostmode.png" alt="Enable Ghost Mode" />
        </div>
      </div>
      <div className="twofa-navigation">
        <button className="back-btn" onClick={() => navigate("/KidsPrivacy/SnapModule2")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/KidsPrivacy/SnapModule4")}>Next →</button>
      </div>
    </div>
  );
};
export default SnapModule3;
