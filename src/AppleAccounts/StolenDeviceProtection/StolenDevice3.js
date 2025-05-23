import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ProgressBar";
import "./StolenDevice.css";

const StolenDevice3 = () => {
  const navigate = useNavigate();

  const stepLabels = [
    "Overview",
    "Required Settings",
    "Turn Stolen Device Protection On or Off",
    "[Optional] Always Require Extra Security ",
  ];

  const totalSteps = stepLabels.length;
  const currentStep = 3; // Current step for this part of the guide

  return (
    <div className="stolen-device-container">
      {/* Updated ProgressBar with dynamic steps */}
      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        stepLabels={stepLabels}
      />

      <button className="close-btn" onClick={() => navigate("/guides")}>
        Close Guide
      </button>

      <div className="stolen-device-content">
        <div className="step-info">
          <strong>Manage Stolen Device Protection</strong>
          <p></p>
          <p>
            <p>1. Open the "Settings app."</p>
            
            <p>2. Tap "Face ID & Passcode" (or "Touch ID & Passcode").</p>
            <div className="step-image">
            <img src="/img/apple-faceid.jpg" alt="Face ID & Passcode button in settings" className="stolen-dev-img" />
          </div>
            <p>3. Enter your device passcode.</p>
            <p>4. Scroll down and tap "Stolen Device Protection."</p>
            <div className="step-image">
            <img src="/img/stolen-dev.jpg" alt="Stolen Device Protection button" className="stolen-dev-img" />
          </div>
            <p>5. Toggle the switch on if it is off.</p>
          </p>
          <div className="step-image">
            <img src="/img/stolen-dev-toggle.jpg" alt="Stolen Device Protection button" className="stolen-dev-img" />
          </div>
        </div>
      </div>

      <div className="stolen-device-navigation">
        <button
          className="back-btn"
          onClick={() =>
            navigate("/AppleAccounts/StolenDeviceProtection/StolenDevice2")
          }
        >
          ← Back
        </button>
        <button
          className="next-btn"
          onClick={() =>
            navigate("/AppleAccounts/StolenDeviceProtection/StolenDevice4")
          }
        >
          Next →
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

export default StolenDevice3;
