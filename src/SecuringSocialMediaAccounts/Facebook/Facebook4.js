import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ProgressBar";
import "../socialmedia.css";

export default function Facebook4() {
  const navigate = useNavigate();

  return (
    <div className="module">
      <ProgressBar
        totalSteps={4}
        currentStep={4}
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

      <h3>Step 4: Check App Permissions and Third-Party Access</h3>

      <p>
      <strong> 1.</strong> In Settings, use the search bar and type <strong>"Apps and Websites"</strong>.
      </p>
      <img
        src="/img/facebook7.png"
        alt="Search apps and websites"
        className="step-img"
      />

      <p>
      <strong>  2. </strong>Review apps and websites that have access to your Facebook account. If any seem unfamiliar, click <strong>Remove</strong> next to them.
      </p>

      <img
        src="/img/facebook8.png"
        alt="Facebook apps connected"
        className="step-img"
      />

      <div className="step-controls">
        <p><strong>You’ve completed the Facebook security guide!</strong></p>
      </div>
    </div>
  );
}
