import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ProgressBar";
import "./ChangePassword.css";

const ChangePassword3 = () => {
  const navigate = useNavigate();

  const stepLabels = [
    "Overview",
    "Choose Device or Platform",
    "Change Child’s Account Password",
  ];

  const totalSteps = stepLabels.length;
  const currentStep = 3;

  return (
    <div className="change-pass-container">
      {/* Updated ProgressBar with dynamic steps */}
      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        stepLabels={stepLabels}
      />

      <button className="close-btn" onClick={() => navigate("/guides")}>
        X
      </button>

      <div className="change-pass-content">
        <div className="step-info">
          <h3>Change Child’s Account Password (Family Sharing)</h3>
          <p></p>
          <p>
            Available if you're using iOS/iPadOS/visionOS with two-factor
            authentication.
          </p>

          <p>1. Open "Settings" on your iPhone, iPad, or Apple Vision Pro.</p>
          <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
          <p>2. Tap "Family."</p>
          <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
          <p>3. Tap your child’s account.</p>
          <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
          <p>4. Tap "Apple Account & Password".</p>
          <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
          <p>5. Tap "Change [Child’s Name] Password".</p><div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
          <p>6. Enter your device passcode.</p>
          <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
          <p>
            7. Follow the onscreen instructions to complete the password change.
          </p>
          <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>

        </div>
      </div>

      <div className="change-pass-navigation">
        <button
          className="back-btn"
          onClick={() =>
            navigate("/AppleAccounts/ChangePassword/ChangePassword2")
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

export default ChangePassword3;
