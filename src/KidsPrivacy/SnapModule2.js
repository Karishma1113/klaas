import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./KidsPrivacy.css";

const SnapModule2 = () => {
  const navigate = useNavigate();
  const stepLabels = [
    "Open Snapchat Settings",
    "Access Ghost Mode",
    "Enable Ghost Mode",
    "Adjust Timer (Optional)",
    "Success"
  ];

  return (
    <div className="twofa-container">
      <ProgressBar currentStep={2} totalSteps={stepLabels.length} stepLabels={stepLabels} />
      <button className="close-btn" onClick={() => navigate("/guides")}>X</button>
      <h1 className="twofa-title">Access Ghost Mode</h1>
      <div className="step-info">
        <h3>Step 2 – Go to Snap Map Settings</h3>
        <p>Scroll down in Settings and tap <strong>See My Location</strong>.</p>
        <div className="step-image">
          <img src="/img/snap2.png" alt="Snap Map Settings" />
          {/* <img src="/img/snap3.png" alt="Snap Map Settings" /> */}
        </div>
      </div>
      <div className="twofa-navigation">
        <button className="back-btn" onClick={() => navigate("/KidsPrivacy/SnapModule1")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/KidsPrivacy/SnapModule3")}>Next →</button>
      </div>
    </div>
  );
};
export default SnapModule2;