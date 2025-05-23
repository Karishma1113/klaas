import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./KidsPrivacy.css";

const LocationModule3 = () => {
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
      <ProgressBar currentStep={3} totalSteps={stepLabels.length} stepLabels={stepLabels} />

      <button className="close-btn" onClick={() => navigate("/guides")}>Close Guide</button>
      <h1 className="twofa-title">Turn Off Share My Location</h1>
      <div className="step-info">
        <h3>Step 3 – Disable Location Sharing</h3>
        <p>Tap <strong>Find My</strong> → Toggle OFF <strong>Share My Location</strong>.</p>
        <div className="step-image">
          <img src="/img/location3.png" alt="Toggle Share My Location Off" />
        </div>
      </div>
      <div className="twofa-navigation">
        <button className="back-btn" onClick={() => navigate("/KidsPrivacy/LocationModule2")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/KidsPrivacy/LocationModule4")}>Next →</button>
      </div>
    </div>
  );
};
export default LocationModule3;