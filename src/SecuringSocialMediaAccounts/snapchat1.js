import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./socialmedia.css";

const Snapchat1 = () => {
  const navigate = useNavigate();
  const stepLabels = ["Change Password", "Two-Factor Authentication", "Login History", "App Access"];

  return (
    <div className="socialmedia-container"> {/* Matches previous security steps */}
      <ProgressBar currentStep={1} totalSteps={stepLabels.length} stepLabels={stepLabels} />

      <button className="close-btn" onClick={() => navigate("/guides")}>Close Guide</button>
      <h1 className="socialmedia-title">Securing Your Snapchat Account</h1>

      <p className="socialmedia-desc">
        Open Snapchat and tap your profile icon (Bitmoji or ghost) in the top-left corner. Then tap the gear icon in the top-right corner to access <strong>Settings</strong>.
      </p>

      <div className="step-image">
        <img src="/img/snap1.png" alt="Snapchat settings screen screenshot" />
      </div>

      <p>
        Scroll down to the <strong>My Account</strong> section and tap <strong>Password</strong>.
      </p>

      <div className="step-image">
        <img src="/img/snap2.png" alt="Snapchat change password screenshot" />
      </div>

      <p>
        Enter your current password and create a new, stronger password. Tap <strong>Save</strong> to confirm.
      </p>

      <div className="socialmedia-navigation">
        <button className="next-btn" onClick={() => navigate("/snapchat/step2")}>Next →</button>
      </div>
    </div>
  );
};

export default Snapchat1;
