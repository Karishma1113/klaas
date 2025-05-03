import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./KidsPrivacy.css";

const SnapModule1 = () => {
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
      <ProgressBar currentStep={1} totalSteps={stepLabels.length} stepLabels={stepLabels} />
      <button className="close-btn" onClick={() => navigate("/guides")}>X</button>
      <h1 className="twofa-title">Open Snapchat Settings</h1>
      <div className="step-info">
        <h3>Step 1 – Open Snapchat</h3>
        <p>Tap your profile icon in the top-left corner. Then tap the gear icon ⚙️ in the top-right to open <strong>Settings</strong>.</p>
        <div className="step-image">
          <img src="/img/snap1-settings.png" alt="Snapchat Settings" />
        </div>
      </div>
      <div className="twofa-navigation">
        <div style={{ visibility: "hidden" }}><button className="back-btn">← Back</button></div>
        <button className="next-btn" onClick={() => navigate("/KidsPrivacy/SnapModule2")}>Next →</button>
      </div>
    </div>
  );
};
export default SnapModule1;