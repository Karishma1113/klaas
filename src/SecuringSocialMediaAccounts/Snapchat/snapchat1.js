import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ProgressBar";
import "../socialmedia.css";

export default function Snapchat1() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/snapchat/step2");
  };

  return (
    <div className="module">
      <ProgressBar
        totalSteps={4}
        currentStep={1}
        stepLabels={[
          "Change Password",
          "2FA",
          "Login History",
          "App Access"
        ]}
      />

      <div className="header">
        <h2>Securing Your Snapchat Account</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/512px-Snapchat_logo.svg.png"
          alt="Snapchat logo"
          className="logo"
        />
      </div>

      <h3>Step 1: Change Your Snapchat Password</h3>

      <p>
        Open Snapchat and tap your profile icon (Bitmoji or ghost) in the top-left corner.
      </p>

      <p>
        Tap the gear icon in the top-right corner to access <strong>Settings</strong>.
      </p>
      <img
        src="/img/snap1.png"
        alt="Snapchat settings screen"
        className="step-img"
      />

      <p>
        Scroll down to the <strong>My Account</strong> section and tap <strong>Password</strong>.
      </p>
      <img
        src="/img/snap2.png"
        alt="Snapchat change password screen"
        className="step-img"
      />

      <p>
        Enter your current password, then create a new, stronger password. Tap <strong>Save</strong> to confirm the change.
      </p>

      <div className="step-controls">
        <button className="next-btn" onClick={handleNext}>Next →</button>
      </div>
    </div>
  );
}
