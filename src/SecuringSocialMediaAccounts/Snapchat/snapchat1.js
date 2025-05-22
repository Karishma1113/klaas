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
          "Two-Factor Authentication",
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
          style={{ width: "50px", height: "auto" }} // Adjusted logo size
        />
      </div>

      <div className="content">
        <h3>Step: Change Your Snapchat Password</h3>

        <p>
          Here's how to enhance your Snapchat account security:
        </p>

        <p>
          Open Snapchat and tap your profile icon (Bitmoji or ghost) in the top-left corner. Tap the gear icon in the top-right corner to access <strong>Settings</strong>.
        </p>

        <img
          src="/img/snap1.png"
          alt="Snapchat settings screen"
          className="step-img"
          style={{ maxWidth: "200px", height: "auto" }} // Adjusted image size
        />

        <p>
          Scroll down to the <strong>My Account</strong> section and tap <strong>Password</strong>.
        </p>

        <img
          src="/img/snap2.png"
          alt="Snapchat change password screen"
          className="step-img"
          style={{ maxWidth: "200px", height: "auto" }} // Adjusted image size
        />

        <p>
          Enter your current password and create a new, stronger password. Tap <strong>Save</strong> to confirm.
        </p>
      </div>

      <div className="step-controls">
        <button className="next-btn" onClick={handleNext}>Next →</button>
      </div>
    </div>
  );
}
