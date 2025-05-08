import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ProgressBar";
import "./StolenDevice.css";

const StolenDevice1 = () => {
  const navigate = useNavigate();

  const stepLabels = [
    "Overview",
    "Required Settings",
    "Turn Stolen Device Protection On or Off",
    "[Optional] Always Require Extra Security ",
  ];

  const totalSteps = stepLabels.length;
  const currentStep = 1; // Current step for this part of the guide

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

      <h1 className="stolen-device-title">
        What is Apple's Stolen Device Protection?
      </h1>

      <p className="stolen-device-desc">
        Stolen Device Protection is a security feature designed to stop someone
        who steals your iPhone and knows your passcode from making important
        changes to your account or device. When enabled, certain actions and
        settings require extra verification if your iPhone is not in a familiar
        location, like your home or workplace.
      </p>

      <p className="stolen-device-desc">In this module, you'll learn how to:</p>
      <ul className="stolen-device-list">
        <li>
          ○ Check if you meet the requirements to use Stolen Device Protection
        </li>
        <li>○ Turn the feature on or off</li>
        <li>
          ○ Enable optional settings for added protection, even at familiar
          locations
        </li>
      </ul>

      <div className="stolen-device-navigation">
        <div style={{ visibility: "hidden" }}>
          <button className="back-btn">← Back</button>
        </div>
        <button
          className="next-btn"
          onClick={() => navigate("/AppleAccounts/StolenDeviceProtection/StolenDevice2")}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default StolenDevice1;
