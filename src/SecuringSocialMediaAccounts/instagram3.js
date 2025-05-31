import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./socialmedia.css";

export default function Instagram3() {
  const navigate = useNavigate();

  const handleDone = () => {
    navigate("/guides");
  };

  return (
    <div className="module">
      <ProgressBar
        totalSteps={3}
        currentStep={3}
        stepLabels={["Change Password", "2FA", "Login Activity"]}
      />

      <div className="header">
        <h2>Securing Your Instagram Account</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram logo"
          className="logo"
        />
      </div>

      <h3>Step 3: Review Account Activity</h3>
      <p>
        In the <strong>Account Center</strong> Security section, tap <strong>Where You’re Logged In</strong> to see all devices currently logged into your account.
        <br />
        <br />
        Log out from any unknown devices and change your password immediately if you notice suspicious activity.
      </p>

      <div className="steps-container">
        <div className="step-block">
          <p><strong>1.</strong> Go to <strong>Settings</strong> ➝ <strong>Account center</strong></p>
          <img src="/img/instagram2.png" alt="Instagram Account Center screen" className="step-img" />
        </div>

        <div className="arrow">➜</div>

        <div className="step-block">
          <p><strong>2.</strong> Click on <strong>Password and Security</strong></p>
          <img src="/img/instagram3.png" alt="Instagram Password and Security option" className="step-img" />
        </div>

        <div className="arrow">➜</div>

        <div className="step-block">
          <p><strong>3.</strong> Tap <strong>Where You're Logged In</strong> to review account activity and see all devices currently logged into your account.</p>
          <img src="/img/instagram6.png" alt="Instagram login activity screen" className="step-img" />
        </div>

        <div className="arrow">➜</div>

        <div className="step-block">
          <p><strong>4.</strong> Log out from any unknown devices and change your password immediately if you notice suspicious activity.</p>
          <img src="/img/instagram7.png" alt="Logout from unknown devices" className="step-img" />
        </div>
      </div>

      <div className="step-controls">
        <button className="next-btn" onClick={handleDone}>Done</button>
      </div>
    </div>
  );
}
