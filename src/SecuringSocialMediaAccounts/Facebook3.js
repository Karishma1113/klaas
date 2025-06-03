import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./socialmedia.css";

const Facebook3 = () => {
  const navigate = useNavigate();
  const stepLabels = ["Change Password", "2FA", "Login Activity", "App Access"];

  return (
    <div className="socialmedia-container"> {/* Matches your guide structure */}
      <ProgressBar currentStep={3} totalSteps={stepLabels.length} stepLabels={stepLabels} />

      <button className="close-btn" onClick={() => navigate("/guides")}>Close Guide</button>
      <h1 className="socialmedia-title">Securing Your Facebook Account</h1>

      <p className="socialmedia-desc">
        Open Facebook and tap the three horizontal lines (<strong>menu</strong>) in the top-right corner (on Android) or bottom-right corner (on iOS). 
        Go to <strong>Settings</strong> → <strong>Settings & Privacy</strong> → <strong>Activity Log</strong>.
      </p>

      <div className="step-image">
        <img src="/img/facebook1.png" alt="Facebook menu screenshot" />
      </div>

      <p>
        Under the <strong>Security & Logged-In Information</strong> section, tap <strong>Where You're Logged In</strong> to view all devices and locations currently logged into your account.
      </p>

      <div className="step-image">
        <img src="/img/facebook5.png" alt="Facebook sessions list screenshot" />
      </div>

      <p>
        If you notice any unfamiliar devices, tap the three dots next to the session and select <strong>Log Out</strong>. 
        For extra security, tap <strong>Log Out of All Sessions</strong> and change your password immediately.
      </p>

      <div className="step-image">
        <img src="/img/facebook6.png" alt="Logout from all sessions screenshot" />
      </div>

      <div className="socialmedia-navigation">
        <button className="back-btn" onClick={() => navigate("/facebook/step2")}>← Back</button>
       
        <button className="next-btn" onClick={() => navigate("/facebook/step4")}>Next →</button>

      </div>
    </div>
  );
};

export default Facebook3;
