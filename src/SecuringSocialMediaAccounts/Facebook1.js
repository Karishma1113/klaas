import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./socialmedia.css";

const Facebook1 = () => {
  const navigate = useNavigate();
  const stepLabels = ["Change Password", "Two-Factor Authentication", "Login Activity", "App Access"];

  return (
    <div className="socialmedia-container"> {/* Matches guide structure */}
      <ProgressBar currentStep={1} totalSteps={stepLabels.length} stepLabels={stepLabels} />

      <button className="close-btn" onClick={() => navigate("/guides")}>Close Guide</button>
      <h1 className="socialmedia-title">Securing Your Facebook Account</h1>

      <p className="socialmedia-desc">
        Open Facebook and tap the three horizontal lines (<strong>menu</strong>) in the top-right corner (on Android) or bottom-right corner (on iOS).
        Scroll down and tap <strong>Settings & Privacy</strong> → <strong>Settings</strong>.
      </p>

      <div className="step-image">
        <img src="/img/facebook1.png" alt="Facebook menu icon screenshot" />
      </div>

      <p>
        Scroll down and go to the <strong>Account Center</strong>. Click on <strong>Password and Security</strong>.
      </p>

      <div className="step-image">
        <img src="/img/facebook2.png" alt="Facebook settings screen screenshot" />
      </div>

      <p>
        Click on <strong>Change Password</strong> and enter your current password. Then choose a new, stronger password.
      </p>

      <div className="step-image">
        <img src="/img/facebook3.png" alt="Facebook account center password screenshot" />
      </div>

      <div className="socialmedia-navigation">
       
        <button className="next-btn" onClick={() => navigate("/facebook/step2")}>Next →</button>
      </div>
    </div>
  );
};

export default Facebook1;
