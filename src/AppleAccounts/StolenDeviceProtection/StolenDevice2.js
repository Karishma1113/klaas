import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ProgressBar";
import "./StolenDevice.css";

const StolenDevice2 = () => {
  const navigate = useNavigate();

  const stepLabels = [
    "Overview",
    "Required Settings",
    "Turn Stolen Device Protection On or Off",
    "[Optional] Always Require Extra Security ",
  ];

  const totalSteps = stepLabels.length;
  const currentStep = 2; // Current step for this part of the guide

  return (
    <div className="stolen-device-container">
      {/* Updated ProgressBar with dynamic steps */}
      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        stepLabels={stepLabels}
      />

      <button className="close-btn" onClick={() => navigate("/guides")}>
        X
      </button>

      <div className="stolen-device-content">
        <div className="step-info">
          <strong>
            Before you can turn on Stolen Device Protection, make sure the
            following settings are already enabled on your iPhone:
          </strong>
          <p></p>
          <p>
          <p>1. Two-Factor Authentication for your Apple ID</p>
          <p>2. A device passcode.</p>
          <p> 3. Face ID or Touch ID</p>
  
          <p>5. Find My iPhone (cannot be turned off while this feature is on)</p>
          </p>
  
        </div>
      </div>

      <div className="stolen-device-navigation">
        <button
          className="back-btn"
          onClick={() =>
            navigate("/AppleAccounts/StolenDeviceProtection/StolenDevice1")
          }
        >
          ← Back
        </button>
        <button
          className="next-btn"
          onClick={() =>
            navigate("/AppleAccounts/StolenDeviceProtection/StolenDevice3")
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

export default StolenDevice2;
