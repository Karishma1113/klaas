import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ProgressBar";
import "./TwoFA.css";

const TwoFA2 = () => {
  const navigate = useNavigate();

  const stepLabels = [
    "Overview",
    "Turning on 2FA",
    "Signing in on New Device/Browser",
    "If You Can't Access a Trusted Device",
    "Manage Trusted Phone Numbers",
  ];

  const totalSteps = stepLabels.length;
  const currentStep = 2; // Current step for this part of the guide

  return (
    <div className="twofa-container">
      {/* Updated ProgressBar with dynamic steps */}
      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        stepLabels={stepLabels}
      />

      <button className="close-btn" onClick={() => navigate("/guides")}>
        X
      </button>

      <div className="twoFA-content">
        <div className="step-info">
          <h3>
            Turning on Two-Factor Authentication is different ased on the device
            you are using.
          </h3>
          <p>
            <strong>On iPhone or iPad:</strong>
          </p>
          <p>1. Go to Settings &gt; [your name] &gt; Sign-In & Security.</p>
          <p>2. Tap "Turn On Two-Factor Authentication".</p>
          <p>3. Tap Continue and follow the onscreen instructions.</p>
        </div>

        <div className="step-image">
          <img
            src=""
            alt=""
            className=""
          />
        </div>
      </div>

      <div className="twoFA-navigation">
        <button
          className="back-btn"
          onClick={() => navigate("/SecuringGoogleAccount/mfa/mfa1")}
        >
          ← Back
        </button>
        <button className="next-btn" onClick={() => navigate("/mfa/twoFA")}>
          Next →
        </button>
      </div>
    </div>
  );
};

export default TwoFA2;
