import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./KidsPrivacy.css";

const LocationModule5 = () => {
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
      <ProgressBar currentStep={5} totalSteps={stepLabels.length} stepLabels={stepLabels} />

      <button className="close-btn" onClick={() => navigate("/guides")}>X</button>
      <h1 className="twofa-title">Disable App Location Access</h1>
      <div className="step-info">
        <h3>Step 5 – Adjust App Permissions</h3>
        <p>Scroll through the list of apps. Tap each one (like <strong>Snapchat</strong> or <strong>Instagram</strong>) and set location access to <strong>“Never”</strong> or <strong>“While Using”</strong>.</p>
        <div className="step-image">
          {/* <img src="/img/location5.png" alt="App Location Access" /> */}
          <img src="/img/location6.png" alt="App Location Access" />
        </div>
      </div>
      <div className="twofa-navigation">
        <button className="back-btn" onClick={() => navigate("/KidsPrivacy/LocationModule4")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/KidsPrivacy/LocationModule6")}>Next →</button>
      </div>
    </div>
  );
};
export default LocationModule5;