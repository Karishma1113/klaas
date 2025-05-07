import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ProgressBar";
import "../socialmedia.css";

export default function Facebook1() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/facebook/step2");
  };

  return (
    <div className="module">
      <ProgressBar
        totalSteps={4}
        currentStep={1}
        stepLabels={[
          "Change Password",
          "2FA",
          "Login Activity",
          "App Access"
        ]}
      />

      <div className="header">
        <h2>Securing Your Facebook Account</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="Facebook logo"
          className="logo"
        />
      </div>

      <h3>Step 1: Change Your Facebook Password</h3>

      <p>
        Open Facebook and tap the three horizontal lines (<strong>menu</strong>) in the top-right corner (on Android) or bottom-right corner (on iOS).
        Scroll down and tap <strong>Settings & Privacy</strong> → <strong>Settings</strong>.
      </p>
      <img
        src="/img/facebook1.png"
        alt="Facebook menu icon"
        className="step-img"
      />

      <p>
      Scroll down and go to the <strong>Account Center</strong>.  Click on <strong>Password and Security</strong>.
      </p>
      <img
        src="/img/facebook2.png"
        alt="Facebook settings screen"
        className="step-img"
      />

      <p>
      Click on <strong>Change Password</strong> and enter your current password. Then choose a new, stronger password.
      </p>
      <img
        src="/img/facebook3.png"
        alt="Facebook account center password screen"
        className="step-img"
      />

      

      <div className="step-controls">
        <button className="next-btn" onClick={handleNext}>Next →</button>
      </div>
    </div>
  );
}
