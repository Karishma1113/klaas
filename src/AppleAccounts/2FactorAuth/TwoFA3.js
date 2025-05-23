import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ProgressBar";
import "./TwoFA.css";

const TwoFA3 = () => {
  const navigate = useNavigate();

  const stepLabels = [
    "Overview",
    "Turning on 2FA",
    "Signing in on New Device/Browser",
    "If You Can't Access a Trusted Device",
    "Manage Trusted Phone Numbers",
  ];

  const totalSteps = stepLabels.length;
  const currentStep = 3; // Current step for this part of the guide

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
          <p>
            <strong>Notification Alert:</strong>
          </p>
          <p>
            When you sign in on a new device, Apple sends a notification to your
            trusted devices (e.g., your iPhone). This shows the approximate
            location of the sign-in (based on IP address).
          </p>
          <div className="step-image">
            <img
              src="/img/"
              alt="insert later"
              className="signin-img"
            />
          </div>
          <p>
            <strong>Review the Alert:</strong>
          </p>
          <p>
            If it’s you signing in, tap "Allow even" if the location looks
            unfamiliar (it may just be network-based). If it’s not you, tap
            "Don’t Allow" to block the attempt.
          </p>
          <div className="step-image">
            <img
              src="/img/"
              alt="insert later"
              className="signin-img"
            />
          </div>
          <p>
            <strong>Enter the Verification Code:</strong>
          </p>
          A 6-digit code appears on your trusted device. Enter this code on the
          new device/browser.
          <p>
            1. Go to{" "}
            <a
              href="https://account.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              account.apple.com
            </a>{" "}
            and sign in.
          </p>
          <p>2. Answer your security questions, then tap "Continue".</p>
          <p>
            3. Tap "Upgrade Account Security", then follow the onscreen
            instructions.
          </p>
          <div className="step-image">
            <img
              src="/img/"
              alt="insert later"
              className="signin-img"
            />
          </div>
        </div>

        <div className="step-image">
          <img src="" alt="" className="" />
        </div>
      </div>

      <div className="twoFA-navigation">
        <button
          className="back-btn"
          onClick={() => navigate("/AppleAccounts/2FactorAuth/TwoFA2")}
        >
          ← Back
        </button>
        <button
          className="next-btn"
          onClick={() => navigate("/AppleAccounts/2FactorAuth/TwoFA4")}
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

export default TwoFA3;
