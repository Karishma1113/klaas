import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ProgressBar";

import "../socialmedia.css";

export default function Snapchat2() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/snapchat/step3");
  };

  return (
    <div className="module">
      <ProgressBar
        totalSteps={3}
        currentStep={2}
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

      <h3>Step 2: Enable Two-Factor Authentication (2FA)</h3>
      <p>
     1. Open Snapchat and tap your profile icon (Bitmoji or ghost) in the top-left corner.


        In <strong>Settings</strong>, Scroll down to the My Account section and tap Two Factor Authentication
      </p>.
      <img src="/img/snap1.png" alt="Snapchat settings showing login verification" className="step-img" />
    
      <img src="/img/snap2.png" alt="Snapchat 2FA method selection" className="step-img" />

      <p>
        Tap <strong>Continue</strong>. Choose between:
        <ul>
          <li>
            <strong>SMS (Text Message)</strong>: Snapchat will send a code to your phone each time you log in.
          </li>
          <li>
            <strong>Authentication App</strong>: Use apps like Google Authenticator to generate a login code.
          </li>
        </ul>
        Enter the code you receive and tap <strong>Continue</strong> to finish setup.
      </p>
      

      <p>
        Snapchat will prompt you to save backup codes. Store them in a secure location in case you lose access to your phone.
      </p>
      <img src="/img/snap3.png" alt="Snapchat 2FA method selection" className="step-img" />

      <div className="step-controls">
        <button className="next-btn" onClick={handleNext}>Next →</button>
      </div>
    </div>
  );
}
