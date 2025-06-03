import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./socialmedia.css";

const Instagram1 = () => {
  const navigate = useNavigate();
  const stepLabels = ["Change Password", "2FA", "Login Activity"];

  return (
    <>
      <ProgressBar currentStep={1} totalSteps={stepLabels.length} stepLabels={stepLabels} />

      <button className="close-btn" onClick={() => navigate("/guides")}>Close Guide</button>
      <h1 className="guide-title">Securing Your Instagram Account</h1>
      
      <p className="guide-desc">
        Open the Instagram app and go to your profile. Tap the three horizontal lines (☰)
        in the top-right corner to open the menu. Then go to <strong>Settings</strong> ➝ <strong>Security</strong> ➝ <strong>Change Password</strong> and enter your new password.
      </p>

      <div className="step-image">
        <img src="/img/instagram1.png" alt="Instagram password change menu screenshot" />
      </div>

      <div className="twofa-navigation">
       
        <button className="next-btn" onClick={() => navigate("/instagram/step2")}>Next →</button>
      </div>
    </>
  );
};

export default Instagram1;
