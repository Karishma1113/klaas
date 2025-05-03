import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./KidsPrivacy.css";

const FamilyModule1 = () => {
  const navigate = useNavigate();
  const stepLabels = [
    "Open Settings",
    "Tap Family",
    "Select Child’s Name",
    "Manage Location Sharing",
    "Success"
  ];

  return (
    <div className="twofa-container">
      <ProgressBar currentStep={1} totalSteps={stepLabels.length} stepLabels={stepLabels} />
      <button className="close-btn" onClick={() => navigate("/guides")}>X</button>
      <h1 className="twofa-title">Open Settings</h1>
      <div className="step-info">
        <h3>Step 1 – Open Settings App</h3>
        <p>Tap the <strong>Settings</strong> app on your device.</p>
        <div className="step-image">
          <img src="/img/family1-settings.png" alt="iPhone Settings" />
        </div>
      </div>
      <div className="twofa-navigation">
        <div style={{ visibility: "hidden" }}><button className="back-btn">← Back</button></div>
        <button className="next-btn" onClick={() => navigate("/KidsPrivacy/FamilyModule2")}>Next →</button>
      </div>
    </div>
  );
};
export default FamilyModule1;