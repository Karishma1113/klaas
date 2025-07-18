import React from "react";
import ProgressBar from "../../ProgressBar";
import "../socialmedia.css";

export default function Snapchat3() {
  return (
    <div className="module">
      <ProgressBar
        totalSteps={3}
        currentStep={3}
        stepLabels={["Change Password", "2FA", "Location Settings"]}
      />

      <div className="header">
        <h2>Securing Your Snapchat Account</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/512px-Snapchat_logo.svg.png"
          alt="Snapchat logo"
          className="logo"
        />
      </div>

      <h3>Step 3: Turn Off Location for Snapchat in the App</h3>

      <p>
        1. Open the Snapchat app and tap your profile icon (Bitmoji or ghost icon) in the top-left corner.
        <br />
        2. Tap the gear icon in the top-right corner to go to <strong>Settings</strong>.
        <br />
        3. Scroll down to the <strong>Privacy Controls</strong> section and tap <strong>See My Location</strong>.
      </p>

      <img src="/img/snap1.png" alt="Snapchat profile screen" className="step-img" />
      <img src="/img/snap4.png" alt="Snapchat location settings menu" className="step-img" />

      <p>Here, you’ll have a few options:</p>

      <ul>
        <li>
          <strong>Ghost Mode:</strong> Toggle Ghost Mode on to prevent others from seeing your location on Snap Map.
        </li>
        <li>
          <strong>My Friends / Custom:</strong> Limit who can see your location.
        </li>
      </ul>

      <p><em>Note: You can also disable Snapchat's location access from your phone's settings completely.</em></p>
    </div>
  );
}
