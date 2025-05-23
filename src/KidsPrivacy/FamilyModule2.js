import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./KidsPrivacy.css";

const FamilyModule2 = () => {
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
      <ProgressBar currentStep={2} totalSteps={stepLabels.length} stepLabels={stepLabels} />
      <button className="close-btn" onClick={() => navigate("/guides")}>Close Guide</button>
      <h1 className="twofa-title">Tap Family</h1>
      <div className="step-info">
        <h3>Step 2 – Access Family Settings</h3>
        <p>Tap your name or Apple ID at the top, then choose <strong>Family Sharing</strong>.</p>
        <div className="step-image">
          <img src="/img/family2.png" alt="Family Sharing Settings" />
        </div>
      </div>
      <div className="twofa-navigation">
        <button className="back-btn" onClick={() => navigate("/KidsPrivacy/FamilyModule1")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/KidsPrivacy/FamilyModule3")}>Next →</button>
      </div>
    </div>
  );
};
export default FamilyModule2;