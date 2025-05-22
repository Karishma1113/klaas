import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ProgressBar";
import "../socialmedia.css";

export default function Facebook2() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/facebook/step3");
  };

  const handleBack = () => {
    navigate("/facebook/step1"); // Replace with appropriate back route
  };

  return (
    <div className="module">
      <ProgressBar
        totalSteps={4}
        currentStep={2}
        stepLabels={[
          "Change Password",
          "Two-Factor Authentication",
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

      <h3>Step 2: Enable Two-Factor Authentication (2FA)</h3>

      <p>
        Open Facebook and tap the three horizontal lines (<strong>menu</strong>) in the top-right corner (on Android) or bottom-right corner (on iOS).
      </p>
      <img
        src="/img/facebook1.png"
        alt="Facebook menu icon"
        className="step-img"
        style={{ maxWidth: "300px", height: "auto" }} // Adjusted image size
      />

      <p>
        Scroll down and tap <strong>Settings & Privacy</strong> → <strong>Settings</strong>.
      </p>
      <img
        src="/img/facebook2.png"
        alt="Facebook settings screen"
        className="step-img"
        style={{ maxWidth: "300px", height: "auto" }} // Adjusted image size
      />

      <p>
        Scroll down and go to the <strong>Account Center</strong>. Click on <strong>Password and Security</strong>.
      </p>
      <img
        src="/img/facebook3.png"
        alt="Facebook account center password screen"
        className="step-img"
        style={{ maxWidth: "300px", height: "auto" }} // Adjusted image size
      />

      <p>
        Tap <strong>Two-Factor Authentication</strong> and choose your preferred method: authentication app or text message. Follow the instructions to complete setup.
      </p>

      <div className="step-controls">
        <button className="back-btn" onClick={handleBack}>← Back</button>
        <button className="next-btn" onClick={handleNext}>Next →</button>
      </div>
    </div>
  );
}

