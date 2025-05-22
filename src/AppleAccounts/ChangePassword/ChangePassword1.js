import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ProgressBar";
import "./ChangePassword.css";

const ChangePassword1 = () => {
  const navigate = useNavigate();

  const stepLabels = [
    "Overview",
    "Choose Device or Platform",
    "Change Child’s Account Password",
  ];

  const totalSteps = stepLabels.length;
  const currentStep = 1; // Current step for this part of the guide

  return (
    <div className="change-pass-container">
      {/* Updated ProgressBar with dynamic steps */}
      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        stepLabels={stepLabels}
      />

      <button className="close-btn" onClick={() => navigate("/guides")}>
        Close Guide
      </button>

      <h1 className="change-pass-title">
        Changing Your Apple Account Password{" "}
      </h1>

      <p className="change-pass-desc">
        Keeping your Apple Account secure is essential for protecting your
        personal data, purchases, iCloud information, and more. Whether you're
        using an iPhone, Mac, or browser, Apple makes it easy to update your
        password in just a few steps. This guide walks you through how to change
        your password on different devices, including for your child’s account
        if you're using Family Sharing.
      </p>
      <p className="change-pass-desc">
        Apple Family Sharing is a service that allows up to five family members
        to share Apple subscriptions, purchases, and more, without sharing each
        other's Apple IDs. This includes access to services like iCloud+, Apple
        Music, Apple TV+, and Apple Arcade, as well as shared access to App
        Store, iTunes, and Apple Books purchases. Family members can also share
        iCloud storage, photo albums, and calendars.{" "}
      </p>

      <h2 className="change-pass-title">Tips for Creating a Strong Password</h2>
      <p className="change-pass-desc">To keep your account safe, follow these best practices:</p>
      <ul className="change-pass-list">
        <li>○ Use a strong password with eight or more characters.</li>
        <li>○ Include both uppercase and lowercase letters.</li>
        <li>○ Use at least one number.</li>
        <li>○ Avoid common words, personal details, or reused passwords.</li>
        <li>
          ○ Consider using a password manager to store and generate secure
          passwords.
        </li>
      </ul>
      <div className="change-pass-navigation">
        <div style={{ visibility: "hidden" }}>
          <button className="back-btn">← Back</button>
        </div>
        <button
          className="next-btn"
          onClick={() =>
            navigate("/AppleAccounts/ChangePassword/ChangePassword2")
          }
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default ChangePassword1;
