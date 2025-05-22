import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ProgressBar";
import "./FindMy.css";

const FindMy3 = () => {
  const navigate = useNavigate();

  const stepLabels = [
    "Overview",
    "Managing Find My iPhone",
    "Manage Location Sharing in Apps",
  ];

  const totalSteps = stepLabels.length;
  const currentStep = 3;

  return (
    <div className="find-my-container">
      {/* Updated ProgressBar with dynamic steps */}
      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        stepLabels={stepLabels}
      />

      <button className="close-btn" onClick={() => navigate("/guides")}>
        X
      </button>

      <div className="find-my-content">
        <div className="step-info">
          <h3>How to Manage Location Sharing in Apps</h3>
          <p></p>

          <p>1. Open the "Settings" app.</p>
      
          <p>2. Tap "Privacy & Security."</p>
        <div className="step-image">
            <img src="/img/apple-privacy.jpg" alt="Apple Privacy & Security" className="find-my-img" />
          </div>
          <p>3. Tap "Location Services."</p>
         <div className="step-image">
            <img src="/img/apple-location.jpg" alt="Apple Location Services screen" className="find-my-img" />
          </div>
          <p>4. Tap on the app whose location access you want to manage.</p>
          
          <p>5. Choose a location access option based on your preference:</p>
    

<ul>
    <li>Never – Blocks location access completely.</li> <p></p>

<li>Ask Next Time or When I Share – The app will ask you each time.</li>
<p></p>
<li>While Using the App – Only gives access when the app is open and visible.</li> <p></p>

<li>Always – Allows background tracking (only available for apps that really need it).</li></ul>
<div className="step-image">
            <img src="/img/apple-app-location.jpg" alt="Apple App Location Preferences" className="find-my-img" />
          </div>
        </div>
      </div>

      <div className="find-my-navigation">
        <button
          className="back-btn"
          onClick={() =>
            navigate("/AppleAccounts/FindMyandLocation/FindMy2")
          }
        >
          ← Back
        </button>
      </div>
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default FindMy3;
