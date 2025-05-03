import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./KidsPrivacy.css";

const SnapModule5 = () => {
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
      <ProgressBar currentStep={5} totalSteps={stepLabels.length} stepLabels={stepLabels} />
      <button className="close-btn" onClick={() => navigate("/guides")}>X</button>
      <h1 className="twofa-title">Ghost Mode Enabled</h1>
      <div className="step-info">
        <h3>Step 5 – You’re All Set</h3>
        <p>Your location is now hidden from others on Snap Map. You can return here anytime to adjust this setting.</p>
        <div className="step-image">
          <img src="/img/snap5-success.png" alt="Ghost Mode Success" />
        </div>
      </div>
      <div className="twofa-navigation">
        <button className="back-btn" onClick={() => navigate("/KidsPrivacy/SnapModule4")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/guides")}>Done ✓</button>
      </div>
    </div>
  );
};
export default SnapModule5;