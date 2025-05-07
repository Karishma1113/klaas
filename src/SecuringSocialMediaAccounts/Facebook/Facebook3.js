import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ProgressBar";
import "../socialmedia.css";

export default function Facebook3() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/facebook/step4");
  };

  return (
    <div className="module">
      <ProgressBar
        totalSteps={4}
        currentStep={3}
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

      <h3>Step 3: Review Active Sessions</h3>

      <p>  Open Facebook and tap the three horizontal lines (<strong>menu</strong>) in the top-right corner (on Android) or bottom-right corner (on iOS). Go to <strong>Settings</strong> → <strong>Settings & Privacy</strong> → <strong>Activity Log</strong>. 
    
      </p>
      <img
        src="/img/facebook1.png"
        alt="Open Facebook menu"
        className="step-img"
      />
      <img
        src="/img/facebook4.png"
        alt="Account center - security"
        className="step-img"
      />

      <p>
      
      Under the <strong>Security & Logged-In Information</strong> section, tap <strong>Where You're Logged In</strong> to view all devices and locations currently logged into your account.
      </p>
      <img
        src="/img/facebook5.png"
        alt="Facebook sessions list"
        className="step-img"
      />

      <p>
      If you notice any unfamiliar devices, tap the three dots next to the session and select <strong>Log Out</strong>.  For extra security, tap <strong>Log Out of All Sessions</strong> and change your password immediately.
      </p>
      <img
        src="/img/facebook6.png"
        alt="Log out of all sessions"
        className="step-img"
      />

      <div className="step-controls">
        <button className="next-btn" onClick={handleNext}>Next →</button>
      </div>
    </div>
  );
}
