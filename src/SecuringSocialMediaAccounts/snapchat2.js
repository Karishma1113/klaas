import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./socialmedia.css";

const Snapchat2 = () => {
  const navigate = useNavigate();
  const stepLabels = ["Change Password", "Two-Factor Authentication", "Location Settings"];

  return (
    <div className="socialmedia-container"> {/* Matches previous Snapchat steps */}
      <ProgressBar currentStep={2} totalSteps={stepLabels.length} stepLabels={stepLabels} />

      <button className="close-btn" onClick={() => navigate("/guides")}>Close Guide</button>
      <h1 className="socialmedia-title">Securing Your Snapchat Account</h1>

      <p className="socialmedia-desc">
        Open Snapchat and tap your profile icon (Bitmoji or ghost) in the top-left corner. In <strong>Settings</strong>, scroll down to the My Account section and tap <strong>Two-Factor Authentication</strong>.
      </p>

      <div className="step-image">
        <img src="/img/snap1.png" alt="Snapchat settings showing login verification screenshot" />
      </div>

      <p>Tap <strong>Continue</strong>, then choose between:</p>
      <ul>
        <li><strong>SMS (Text Message)</strong>: Snapchat will send a code to your phone each time you log in.</li>
        <li><strong>Authentication App</strong>: Use apps like Google Authenticator to generate a login code.</li>
      </ul>

      <div className="step-image">
        <img src="/img/snap2.png" alt="Snapchat 2FA method selection screenshot" />
      </div>

      <p>Enter the code you receive and tap <strong>Continue</strong> to finish setup.</p>

      <div className="step-image">
        <img src="/img/snap3.png" alt="Snapchat backup code screenshot" />
      </div>

      <p>Snapchat will prompt you to save backup codes. Store them in a secure location in case you lose access to your phone.</p>

      <div className="socialmedia-navigation">
        <button className="back-btn" onClick={() => navigate("/snapchat/step1")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/snapchat/step3")}>Next →</button>
      </div>
    </div>
  );
};

export default Snapchat2;
