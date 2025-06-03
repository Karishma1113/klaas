import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./socialmedia.css";

const Instagram2 = () => {
  const navigate = useNavigate();
  const stepLabels = ["Change Password", "2FA", "Login Activity"];

  return (
    <div className="socialmedia-container"> {/* Matches example structure */}
      <ProgressBar currentStep={2} totalSteps={stepLabels.length} stepLabels={stepLabels} />

      <button className="close-btn" onClick={() => navigate("/guides")}>Close Guide</button>
      <h1 className="socialmedia-title">Securing Your Instagram Account</h1>

      <p className="socialmedia-desc">
        Enabling Two-Factor Authentication (2FA) adds a second layer of protection to your Instagram account.
        Even if someone has your password, they won’t be able to log in without the second factor.
      </p>

      <p>
        <strong>Go to:</strong> <b>Settings ➝ Account center ➝ Password and Security ➝ Two-Factor Authentication</b><br />
        Choose the account to make changes and follow the prompt.<br /><br />
        Tap <b>Get Started</b>, then choose your preferred method for 2FA:<br />
        <b>Authentication App</b> or <b>Text Message (SMS)</b>.<br />
        Follow the prompts to complete the setup.
      </p>

      <div className="step-image">
        <img src="/img/instagram5.png" alt="2FA method selection screenshot" />
      </div>

      <div className="socialmedia-navigation">
        <button className="back-btn" onClick={() => navigate("/instagram/step1")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/instagram/step3")}>Next →</button>
      </div>
    </div>
  );
};

export default Instagram2;
