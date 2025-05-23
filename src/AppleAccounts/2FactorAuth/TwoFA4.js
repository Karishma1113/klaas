import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ProgressBar";
import "./TwoFA.css";

const TwoFA4 = () => {
  const navigate = useNavigate();

  const stepLabels = [
    "Overview",
    "Turning on 2FA",
    "Signing in on New Device/Browser",
    "If You Can't Access a Trusted Device",
    "Manage Trusted Phone Numbers",
  ];

  const totalSteps = stepLabels.length;
  const currentStep = 4; // Current step for this part of the guide

  return (
    <div className="twofa-container">
      {/* Updated ProgressBar with dynamic steps */}
      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        stepLabels={stepLabels}
      />

      <button className="close-btn" onClick={() => navigate("/guides")}>
        Close Guide
      </button>

      <div className="twoFA-content">
        <div className="step-info">
          <h3>
            Here’s what you can do if you can’t access a trusted device to
            receive your verification code...
          </h3>
          <p>
            <strong>Option 1: Use a trusted phone number </strong>
          </p>
          <p>
            A trusted phone number is a number that can receive verification
            codes by text or call.
          </p>
          <p>1. On the sign-in screen, tap “Didn’t Get a Code?”</p>
          <p>2. Choose to send a code to your trusted phone number.</p>
          <p>3. You’ll receive a text like: @icloud.com #123456 %apple.com.</p>
          <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>

          <p>
            <strong>Option 2: Use another trusted device</strong>
          </p>
          <p>
            A trusted device is a device you’ve already signed into with
            two-factor authentication. Examples: iPhone, iPad, Mac, Apple Watch,
            or Apple Vision Pro. These devices can display verification codes
            when you sign in on a new device.
          </p>
          <p>
            1. On your other device, go to "Settings" &gt; [your name] &gt;
            "Sign-In & Security" &gt; "Get Verification Code."
          </p>
          <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
        </div>
      </div>

      <div className="twoFA-navigation">
        <button
          className="back-btn"
          onClick={() => navigate("/AppleAccounts/2FactorAuth/TwoFA3")}
        >
          ← Back
        </button>
        <button
          className="next-btn"
          onClick={() => navigate("/AppleAccounts/2FactorAuth/TwoFA5")}
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

export default TwoFA4;
