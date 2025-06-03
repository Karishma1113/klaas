import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./socialmedia.css";

const Facebook2 = () => {
  const navigate = useNavigate();
  const stepLabels = ["Change Password", "2FA", "Login Activity", "App Access"];

  return (
    <div className="socialmedia-container"> {/* Ensures consistency with your guide structure */}
      <ProgressBar currentStep={2} totalSteps={stepLabels.length} stepLabels={stepLabels} />

      <button className="close-btn" onClick={() => navigate("/guides")}>Close Guide</button>
      <h1 className="socialmedia-title">Securing Your Facebook Account</h1>

      <p className="socialmedia-desc">
        Open Facebook and tap the three horizontal lines (<strong>menu</strong>) in the top-right corner (on Android) or bottom-right corner (on iOS).
      </p>

      <div className="step-image">
        <img src="/img/facebook1.png" alt="Facebook menu icon screenshot" />
      </div>

      <p>
        Scroll down and tap <strong>Settings & Privacy</strong> → <strong>Settings</strong>.
      </p>

      <div className="step-image">
        <img src="/img/facebook2.png" alt="Facebook settings screen screenshot" />
      </div>

      <p>
        Scroll down and go to the <strong>Account Center</strong>. Click on <strong>Password and Security</strong>.
      </p>

      <div className="step-image">
        <img src="/img/facebook3.png" alt="Facebook account center password screenshot" />
      </div>

      <p>
        Tap <strong>Two-Factor Authentication</strong> and choose your preferred method: authentication app or text message. Follow the instructions to complete the setup.
      </p>

      <div className="socialmedia-navigation">
        <button className="back-btn" onClick={() => navigate("/facebook/step1")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/facebook/step3")}>Next →</button>
      </div>
    </div>
  );
};

export default Facebook2;
