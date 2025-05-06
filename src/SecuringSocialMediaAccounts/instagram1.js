import React from "react";
import { useNavigate } from "react-router-dom";
import "./socialmedia.css";

export default function Instagram1() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/instagram/step2");
  };

  return (
    <div className="module">
      <div className="top-nav">
        <div className="tabs">
          <div className="tab active">Overview</div>
          <div className="tab">2FA</div>
          <div className="tab">Login Activity</div>
          <div className="tab">Remove Apps</div>
          <div className="tab">App Access</div>
        </div>
        <button className="leave-btn">Leave Site</button>
      </div>

      <div className="header">
        <h2>Securing Your Instagram Account</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram"
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
        alt="Instagram menu screenshot"
        className="step-img"
      />

      <div className="steps-container">
        <div className="step-block">
          <p>
            <strong>1.</strong> Go to <strong>Settings</strong> ➝ <strong>Account center</strong> ➝ <strong>Password and Security</strong> ➝ <strong>Change Password</strong>
          </p>
          <img src="/img/instagram2.png" alt="Step 1a" className="step-img" />
        </div>

        <div className="arrow">➜</div>

        <div className="step-block">
          <p>
            <strong>2.</strong> Choose the account to make changes and follow the prompt.
          </p>
          <img src="/img/instagram3.png" alt="Step 1b" className="step-img" />
        </div>

        <div className="arrow">➜</div>

        <div className="step-block">
          <p>
            <strong>3.</strong> Enter your current password, followed by your new, strong password.
          </p>
          <img src="/img/instagram4.png" alt="Step 1c" className="step-img" />
        </div>
      </div>

      <div className="step-controls">
        <button className="next-btn" onClick={handleNext}>Next →</button>
      </div>
    </div>
  );
}
