import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./KidsPrivacy.css";

const SnapModule4 = () => {
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
      <ProgressBar currentStep={4} totalSteps={stepLabels.length} stepLabels={stepLabels} />
      <button className="close-btn" onClick={() => navigate("/guides")}>Close Guide</button>
      <h1 className="twofa-title">Adjust Timer (Optional)</h1>
      <div className="step-info">
        <h3>Step 4 – Set Ghost Mode Duration</h3>
        <p>Choose how long Ghost Mode stays on. You can select <strong>3 hours</strong>, <strong>24 hours</strong>, or <strong>Until Turned Off</strong>.</p>
        <div className="step-image">
          <img src="/img/snap4.png" alt="Ghost Mode Timer" />
        </div>
      </div>
      <div className="twofa-navigation">
        <button className="back-btn" onClick={() => navigate("/KidsPrivacy/SnapModule3")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/KidsPrivacy/SnapModule5")}>Next →</button>
      </div>
    </div>
  );
};
export default SnapModule4;