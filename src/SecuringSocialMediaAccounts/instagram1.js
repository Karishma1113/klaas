import React from "react";
import ProgressBar from "../ProgressBar";
import { useNavigate } from "react-router-dom";
import "./socialmedia.css";

export default function Instagram1() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/instagram/step2");
  };

  return (
    <div className="module">
      <ProgressBar
        totalSteps={3}
        currentStep={1}
        stepLabels={["Change Password", "2FA", "Login Activity"]}
      />

      <div className="header">
        <h2>Securing Your Instagram Account</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram logo"
          className="logo"
        />
      </div>

      <h3>Step 1: Change Your Password</h3>
      <p>
        Open the Instagram app and go to your profile. Tap the three horizontal lines (☰)
        in the top-right corner to open the menu. Then go to <strong>Settings</strong> ➝ <strong>Security</strong> ➝ <strong>Change Password</strong> and enter your new password.
      </p>

      <img
        src="/img/instagram1.png"
        alt="Instagram password change menu screenshot"
        className="step-img"
      />

      <div className="steps-container">
        <div className="step-block">
          <p>
            <strong>1.</strong> Go to <strong>Settings</strong> ➝ <strong>Account center</strong> ➝ <strong>Password and Security</strong> ➝ <strong>Change Password</strong>
          </p>
          <img src="/img/instagram2.png" alt="Instagram Account Center password setting" className="step-img" />
        </div>

        <div className="arrow">➜</div>

        <div className="step-block">
          <p>
            <strong>2.</strong> Choose the account to make changes and follow the prompt.
          </p>
          <img src="/img/instagram3.png" alt="Choose account for password update" className="step-img" />
        </div>

        <div className="arrow">➜</div>

        <div className="step-block">
          <p>
            <strong>3.</strong> Enter your current password, followed by your new, strong password.
          </p>
          <img src="/img/instagram 4.png" alt="Password input screen" className="step-img" />
        </div>
      </div>

      <div className="step-controls">
        <button className="next-btn" onClick={handleNext}>Next →</button>
      </div>
    </div>
  );
}