import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./KidsPrivacy.css";

const FamilyModule5 = () => {
  const navigate = useNavigate();
  const stepLabels = [
    "Open Settings",
    "Tap Family",
    "Select Child’s Name",
    "Manage Location Sharing",
    "Success"
  ];

  return (
    <div className="twofa-container">
      <ProgressBar currentStep={5} totalSteps={stepLabels.length} stepLabels={stepLabels} />
      <button className="close-btn" onClick={() => navigate("/guides")}>Close Guide</button>
      <h1 className="twofa-title">Location Settings Updated</h1>
      <div className="step-info">
        <h3>Step 5 – You’re All Set</h3>
        <p>Location settings for your child have been reviewed. You can return to your Family Sharing dashboard.</p>
        <div className="step-image">
          {/* <img src="/img/family5.png" alt="Success Confirmation" /> */}
        </div>
      </div>
      <div className="twofa-navigation">
        <button className="back-btn" onClick={() => navigate("/KidsPrivacy/FamilyModule4")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/guides")}>Done ✓</button>
      </div>
    </div>
  );
};
export default FamilyModule5;
