import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./socialmedia.css";

export default function Instagram2() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/instagram/step3");
  };

  return (
    <div className="module">
      {/* Progress bar with current step 2 */}
      <ProgressBar
  totalSteps={3}
  currentStep={2}
  stepLabels={["Change Password", "2FA", "Login Activity"]}
/>


      {/* Centered heading and logo */}
      <div className="header">
        <h2>Securing Your Instagram Account</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram logo"
          className="logo"
        />
      </div>

      {/* Main title and instructions */}
      <h3>Step 2: Enable Two-Factor Authentication (2FA)</h3>
      <p>
        Enabling Two-Factor Authentication (2FA) adds a second layer of protection to your Instagram account.
        Even if someone has your password, they won’t be able to log in without the second factor.
      </p>
      <p>
        <strong>Go to</strong> <b>Settings ➝ Account center ➝ Password and Security ➝ Two-Factor Authentication</b><br />
        Choose the account to make changes and follow prompt.<br /><br />
        Tap <b>Get Started</b>, then choose your preferred method for 2FA:<br />
        <b>Authentication App</b><br />
        <b>Text Message (SMS)</b><br />
        Follow the prompts to complete the setup.
      </p>

      {/* Visual steps */}
      <div className="steps-container">
        <div className="step-block">
          <p>
            <strong>1.</strong> Go to <strong>Settings</strong> ➝ <strong>Account center</strong>
          </p>
          <img src="/img/instagram2.png" alt="Settings > Account Center" className="step-img" />
        </div>

        <div className="arrow">➜</div>

        <div className="step-block">
          <p>
            <strong>2.</strong> Click on <strong>Password and Security</strong>
          </p>
          <img src="/img/instagram3.png" alt="Password and Security screen" className="step-img" />
        </div>

        <div className="arrow">➜</div>

        <div className="step-block">
          <p>
            <strong>3.</strong> Select <strong>Two-Factor Authentication</strong> and choose your method.
          </p>
          <img src="/img/instagram5.png" alt="2FA method selection" className="step-img" />
        </div>
      </div>

      {/* Next button */}
      <div className="step-controls">
        <button className="next-btn" onClick={handleNext}>Next →</button>
      </div>
    </div>
  );
}
