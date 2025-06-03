import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./socialmedia.css";

const Facebook4 = () => {
  const navigate = useNavigate();
  const stepLabels = ["Change Password", "2FA", "Login Activity", "App Access"]; // Ensures correct progress bar labeling

  return (
    <div className="socialmedia-container"> {/* Matches previous Facebook steps */}
      <ProgressBar currentStep={4} totalSteps={stepLabels.length} stepLabels={stepLabels} /> {/* Progress bar now correctly shows "App Access" */}

      <button className="close-btn" onClick={() => navigate("/guides")}>Close Guide</button>
      <h1 className="socialmedia-title">Securing Your Facebook Account</h1>

      <p className="socialmedia-desc">
        <strong>1.</strong> In Settings, use the search bar and type <strong>"Apps and Websites"</strong>.
      </p>

      <div className="step-image">
        <img src="/img/facebook7.png" alt="Search apps and websites screenshot" />
      </div>

      <p>
        <strong>2.</strong> Review apps and websites that have access to your Facebook account. If any seem unfamiliar, click <strong>Remove</strong> next to them.
      </p>

      <div className="step-image">
        <img src="/img/facebook8.png" alt="Facebook apps connected screenshot" />
      </div>

      <div className="socialmedia-navigation">
        <button className="back-btn" onClick={() => navigate("/facebook/step3")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/guides")}>Done</button> {/* Added Done button */}
      </div>

      <div className="step-controls">
        <p><strong>You’ve completed the Facebook security guide!</strong></p>
      </div>
    </div>
  );
};

export default Facebook4;
