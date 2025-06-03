import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./socialmedia.css";

const Instagram3 = () => {
  const navigate = useNavigate();
  const stepLabels = ["Change Password", "2FA", "Login Activity"];

  return (
    <div className="socialmedia-container"> {/* Matches the guide structure */}
      <ProgressBar currentStep={3} totalSteps={stepLabels.length} stepLabels={stepLabels} />

      <button className="close-btn" onClick={() => navigate("/guides")}>Close Guide</button>
      <h1 className="socialmedia-title">Securing Your Instagram Account</h1>

      <p className="socialmedia-desc">
        In the <strong>Account Center</strong> Security section, tap <strong>Where You’re Logged In</strong> to see all devices currently logged into your account.
      </p>
      
      <p>
        <strong>Step 1:</strong> Go to <b>Settings ➝ Account center ➝ Password and Security</b><br />
        <strong>Step 2:</strong> Tap <b>Where You’re Logged In</b> to review account activity.<br />
        <strong>Step 3:</strong> Log out from any unknown devices and change your password immediately if you notice suspicious activity.
      </p>

      <div className="step-image">
        <img src="/img/instagram6.png" alt="Instagram login activity screenshot" />
      </div>

      <div className="socialmedia-navigation">
        <button className="back-btn" onClick={() => navigate("/instagram/step2")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/guides")}>Done</button>
      </div>
    </div>
  );
};

export default Instagram3;
