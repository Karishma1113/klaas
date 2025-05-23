import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./KidsPrivacy.css";

const LocationModule6 = () => {
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
      <ProgressBar currentStep={6} totalSteps={stepLabels.length} stepLabels={stepLabels} />

      <button className="close-btn" onClick={() => navigate("/guides")}>Close Guide</button>
      <h1 className="twofa-title">Location Tracking is Turned Off</h1>
      <div className="step-info">
        <h3>✅ All Done!</h3>
        <p>Your child’s location is no longer shared through their iPhone or apps. You can update these settings anytime if needed.</p>
        <div className="step-image">
          {/* <img src="/img/step6-complete.png" alt="Success" /> */}
        </div>
      </div>
      <div className="twofa-navigation">
        <button className="back-btn" onClick={() => navigate("/KidsPrivacy/LocationModule5")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/guides")}>Done ✓</button>
      </div>
    </div>
  );
};
export default LocationModule6;
