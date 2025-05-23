import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./KidsPrivacy.css";

const FamilyModule3 = () => {
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
      <ProgressBar currentStep={3} totalSteps={stepLabels.length} stepLabels={stepLabels} />
      <button className="close-btn" onClick={() => navigate("/guides")}>Close Guide</button>
      <h1 className="twofa-title">Select Child’s Name</h1>
      <div className="step-info">
        <h3>Step 3 – Choose Your Child</h3>
        <p>From the Family list, tap your child’s name to view their account options.</p>
        <div className="step-image">
          <img src="/img/family3.png" alt="Child's Profile" />
          {/* checkk image if correct */}
        </div>
      </div>
      <div className="twofa-navigation">
        <button className="back-btn" onClick={() => navigate("/KidsPrivacy/FamilyModule2")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/KidsPrivacy/FamilyModule4")}>Next →</button>
      </div>
    </div>
  );
};
export default FamilyModule3;