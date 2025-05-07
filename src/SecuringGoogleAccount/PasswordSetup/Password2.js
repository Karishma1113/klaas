import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from '../../ProgressBar';
import "./PasswordSetup.css";

const Password2 = () => {
  const navigate = useNavigate();

  const stepLabels = [
    "Overview",
    "Tips and Best Practices",
  ];

  const totalSteps = stepLabels.length;
  const currentStep = 2;


  return (
    <div className="mfa-container">
      {/* Updated ProgressBar with dynamic steps */}
      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        stepLabels={stepLabels}
      />


      <button className="close-btn" onClick={() => navigate("/guides")}>
        X
      </button>
      <h1 className="password-title">Tips and Best Practices</h1>
      <p>
        <b>1.</b>Follow best practices for a strong password: make it long, include <b>capital letters</b>,
        <b>numbers</b>, and at least one <b>special character </b>(like !, @, #, etc.).
      </p>
      <p>
        <b>2.</b>Avoid using Google's <b>“Generate Strong Password”</b> feature.
        These passwords are automatically saved to your Google account and synced across every device you're signed into. They're also very hard to remember.
      </p>
      <p>
        <b>3.</b>Instead, create your own password that’s secure but memorable.
      </p>
      <p>
        <b>4.</b>Write it down in a physical <b>password book</b> that only you have access to, or use a password you can reliably remember.
      </p>

      <div className="password-navigation">
        <button className="back-btn" onClick={() => navigate("/password1")}>← Back</button>
      </div>
    </div>
  );
};

export default Password2;