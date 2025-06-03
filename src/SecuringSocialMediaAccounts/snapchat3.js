import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./socialmedia.css";

const Snapchat3 = () => {
  const navigate = useNavigate();
  const stepLabels = ["Change Password", "Two-Factor Authentication", "Location Settings"];

  return (
    <div className="socialmedia-container"> {/* Matches previous Snapchat steps */}
      <ProgressBar currentStep={3} totalSteps={stepLabels.length} stepLabels={stepLabels} />

      <button className="close-btn" onClick={() => navigate("/guides")}>Close Guide</button>
      <h1 className="socialmedia-title">Securing Your Snapchat Account</h1>

      <p className="socialmedia-desc">
        Open Snapchat and tap your profile icon (Bitmoji or ghost icon) in the top-left corner.
        Then tap the gear icon in the top-right corner to go to <strong>Settings</strong>.
      </p>

      <div className="step-image">
        <img src="/img/snap1.png" alt="Snapchat profile screen screenshot" />
      </div>

      <p>
        Scroll down to the <strong>Privacy Controls</strong> section and tap <strong>See My Location</strong>.
      </p>

      <div className="step-image">
        <img src="/img/snap4.png" alt="Snapchat location settings menu screenshot" />
      </div>

      <p>Here, you’ll have a few options:</p>
      <ul>
        <li><strong>Ghost Mode:</strong> Toggle Ghost Mode on to prevent others from seeing your location on Snap Map.</li>
        <li><strong>My Friends / Custom:</strong> Limit who can see your location.</li>
      </ul>

      <p><em>Note: You can also disable Snapchat's location access from your phone's settings completely.</em></p>

      <div className="socialmedia-navigation">
        <button className="back-btn" onClick={() => navigate("/snapchat/step2")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/guides")}>Done</button> {/* Added Done button */}
      </div>

      <div className="step-controls">
        <p><strong>You’ve completed the Snapchat security guide!</strong></p>
      </div>
    </div>
  );
};

export default Snapchat3;
