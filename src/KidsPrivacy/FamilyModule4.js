import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./KidsPrivacy.css";

const FamilyModule4 = () => {
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
      <ProgressBar currentStep={4} totalSteps={stepLabels.length} stepLabels={stepLabels} />
      <button className="close-btn" onClick={() => navigate("/guides")}>X</button>
      <h1 className="twofa-title">Manage Location Sharing</h1>
      <div className="step-info">
        <h3>Step 4 – Review Location Settings</h3>
        <p>Tap <strong>Location Sharing</strong> and decide if you'd like to enable or disable it for your child.</p>
        <div className="step-image">
          <img src="/img/family4.png" alt="Manage Location Sharing" />
          {/* check if image correct */}
        </div>
      </div>
      <div className="twofa-navigation">
        <button className="back-btn" onClick={() => navigate("/KidsPrivacy/FamilyModule3")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/KidsPrivacy/FamilyModule5")}>Next →</button>
      </div>
    </div>
  );
};
export default FamilyModule4;
