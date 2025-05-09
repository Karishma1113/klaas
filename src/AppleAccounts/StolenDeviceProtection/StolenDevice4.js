import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ProgressBar";
import "./StolenDevice.css";

const StolenDevice4 = () => {
  const navigate = useNavigate();

  const stepLabels = [
    "Overview",
    "Required Settings",
    "Turn Stolen Device Protection On or Off",
    "[Optional] Always Require Extra Security ",
  ];

  const totalSteps = stepLabels.length;
  const currentStep = 4; // Current step for this part of the guide

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
          <strong>(Optional) Always Require Extra Security – Even at Familiar Locations</strong>
          <p></p>
          <p>If you want extra protection, you can force the device to require identity verification and a delay even in familiar locations like home or work.</p>
          <p>
            <p>1. Open the "Settings app"</p>
            <p>2. Tap "Face ID & Passcode" (or "Touch ID & Passcode")</p>
            <p>3. Enter your device passcode</p>
            <p>4. Scroll down and tap "Stolen Device Protection"</p>
            <p>5. Under "Require Security Delay", choose "Always"</p>
          </p>
          <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
        </div>
      </div>

      <div className="twoFA-navigation">
        <button
          className="back-btn"
          onClick={() =>
            navigate("/AppleAccounts/StolenDeviceProtection/StolenDevice2")
          }
        >
          ← Back
        </button>
        {/* <button
          className="next-btn"
          onClick={() =>
            navigate("/AppleAccounts/StolenDeviceProtection/StolenDevice4")
          }
        >
          Next →
        </button> */}
      </div>
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default StolenDevice4;
