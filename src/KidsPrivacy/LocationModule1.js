import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./KidsPrivacy.css";

const LocationModule1 = () => {
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
      <ProgressBar currentStep={1} totalSteps={stepLabels.length} stepLabels={stepLabels} />

      <button className="close-btn" onClick={() => navigate("/guides")}>Close Guide</button>
      <h1 className="twofa-title">Turn Off Location on iPhone or iPad</h1>
      <div className="step-info">
        <h3>Step 1 – Open Settings</h3>
        <p>Tap the <strong>Settings</strong> app on your child’s device.</p>
        <div className="step-image">
          <img src="/img/location1.png" alt="Open Settings" />
        </div>
      </div>
      <div className="twofa-navigation">
        <div style={{ visibility: "hidden" }}><button className="back-btn">← Back</button></div>
        <button className="next-btn" onClick={() => navigate("/KidsPrivacy/LocationModule2")}>Next →</button>
      </div>
    </div>
  );
};
export default LocationModule1;