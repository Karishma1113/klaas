import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./KidsPrivacy.css";

const LocationModule4 = () => {
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
      <ProgressBar currentStep={4} totalSteps={stepLabels.length} stepLabels={stepLabels} />

      <button className="close-btn" onClick={() => navigate("/guides")}>Close Guide</button>
      <h1 className="twofa-title">Open Location Services</h1>
      <div className="step-info">
        <h3>Step 4 – Open Location Settings</h3>
        <p>Go back to <strong>Settings</strong> → Tap <strong>Privacy & Security</strong> → Tap <strong>Location Services</strong>.</p>
        <div className="step-image">
          <img src="/img/location4.png" alt="Open Location Services" />
        </div>
      </div>
      <div className="twofa-navigation">
        <button className="back-btn" onClick={() => navigate("/KidsPrivacy/LocationModule3")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/KidsPrivacy/LocationModule5")}>Next →</button>
      </div>
    </div>
  );
};
export default LocationModule4;