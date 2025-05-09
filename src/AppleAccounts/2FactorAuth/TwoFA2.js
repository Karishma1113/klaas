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
            Turning on Two-Factor Authentication is different based on the
            device you are using.
          </h3>
          <p>Note: If you’re already using 2FA, you can’t turn it off. If you enabled it recently by mistake, you have two weeks to disable it. After that, turning it off is not possible and some features will require 2FA to work.</p>
          <p>
            <strong>On iPhone or iPad:</strong>
          </p>
          <p>1. Go to Settings &gt; [your name] &gt; Sign-In & Security.</p>
          <p>2. Tap "Turn On Two-Factor Authentication."</p>
          <p>3. Tap Continue and follow the onscreen instructions.</p>
          <div className="step-image">
            <img
              src="/img/"
              alt="insert later"
              className="signin-img"
            />
          </div>

          <p>
            <strong>On Mac:</strong>
          </p>
          <p>
            1. Open the Apple menu &gt; System Settings &gt; [your name] &gt;
            Sign-In & Security.
          </p>
          <p>2. Next to "Two-Factor Authentication", click "Turn On."</p>
          <p>3. Tap Continue and follow the onscreen instructions.</p>
          <div className="step-image">
            <img
              src="/img/"
              alt="insert later"
              className="signin-img"
            />
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
          onClick={() => navigate("/AppleAccounts/2FactorAuth/TwoFA1")}
        >
          ← Back
        </button>
        <button
          className="next-btn"
          onClick={() => navigate("/AppleAccounts/2FactorAuth/TwoFA3")}
        >
          Next →
        </button>
      </div>
      <div><p></p><p></p><p></p></div>
    </div>
  );
};

export default TwoFA2;