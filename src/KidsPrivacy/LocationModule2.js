import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./KidsPrivacy.css";

const LocationModule2 = () => {
  const navigate = useNavigate();
  const stepLabels = [
    // "Intro",
    "Open Settings",
    "Tap Apple ID",
    "Turn Off Share My Location",
    "Open Location Services",
    "Disable Location for Apps",
    "Success!"
  ];

  return (
    <div className="twofa-container">
      <ProgressBar currentStep={2} totalSteps={stepLabels.length} stepLabels={stepLabels} />

      <button className="close-btn" onClick={() => navigate("/guides")}>Close Guide</button>
      <h1 className="twofa-title">Tap Your Child’s Name</h1>
      <div className="step-info">
        <h3>Step 2 – Tap Apple ID</h3>
        <p>At the top of the Settings screen, tap your child’s name or Apple ID.</p>
        <div className="step-image">
          <img src="/img/location2.png" alt="Tap Apple ID" />
        </div>
      </div>
      <div className="twofa-navigation">
        <button className="back-btn" onClick={() => navigate("/KidsPrivacy/LocationModule1")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/KidsPrivacy/LocationModule3")}>Next →</button>
      </div>
    </div>
  );
};
export default LocationModule2;