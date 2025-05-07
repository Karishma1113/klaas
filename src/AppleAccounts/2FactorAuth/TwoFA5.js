import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ProgressBar";
import "./TwoFA.css";

const TwoFA5 = () => {
  const navigate = useNavigate();

  const stepLabels = [
    "Overview",
    "Turning on 2FA",
    "Signing in on New Device/Browser",
    "If You Can't Access a Trusted Device",
    "Manage Trusted Phone Numbers",
  ];

  const totalSteps = stepLabels.length;
  const currentStep = 5; // Current step for this part of the guide

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
          <p>
            <strong>On iPhone or iPad:</strong>
          </p>
          <p>
            Go to "Settings" &gt; [your name] &gt; "Sign-In & Security" &gt;
            "Two-Factor Authentication."
          </p>
          <p>Tap "Edit" next to "Trusted Phone Numbers."</p>
          <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>

          <p>
            <strong>On Mac:</strong>
          </p>
          <p>
            1. Open the Apple menu &gt; "System Settings" &gt; [your name] &gt;
            "Sign-In & Security."
          </p>
          <p>2. Edit under "Trusted Phone Numbers."</p>
          <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>

          <p>
            <strong>On the Web:</strong>
          </p>
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
          </p>
          <p>2. Go to "Sign-In and Security" &gt; "Account Security."</p>
          <p>3. Manage your trusted numbers from there.</p>
          <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
        </div>
      </div>

      <div className="twoFA-navigation">
        <button
          className="back-btn"
          onClick={() => navigate("/AppleAccounts/2FactorAuth/TwoFA4")}
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

export default TwoFA5;
