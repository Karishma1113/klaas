import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ProgressBar";
import "./TwoFA.css";

const TwoFA1 = () => {
  const navigate = useNavigate();

  const stepLabels = ["Overview", "Turning on 2FA", "Signing in on New Device/Browser", "If You Can't Access a Trusted Device", "Manage Trusted Phone Numbers"];

  const totalSteps = stepLabels.length;
  const currentStep = 1; // Current step for this part of the guide

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

      <h1 className="twofa-title">
        What is Two-Factor Authentication (2FA) for Apple Accounts?
      </h1>

      <p className="twofa-desc">
        Two-Factor Authentication (2FA) is a security feature that helps protect
        your Apple account by requiring two forms of verification when signing
        in: your password and a six-digit code sent to a trusted device or phone
        number. This extra step ensures that even if someone knows your
        password, they can’t access your account without also having access to
        your trusted device.
      </p>

      <p className="twofa-desc">
        2FA helps keep your data secure by preventing unauthorized access,
        especially in cases of phishing attacks or stolen passwords.
      </p>

      <div className="twofa-navigation">
        <div style={{ visibility: "hidden" }}>
          <button className="back-btn">← Back</button>
        </div>
        <button className="next-btn" onClick={() => navigate("/AppleAccounts/2FactorAuth/TwoFA2")}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default TwoFA1;
