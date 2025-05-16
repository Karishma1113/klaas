import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ProgressBar";
import "./ChangePassword.css";

const ChangePassword2 = () => {
  const navigate = useNavigate();

  const stepLabels = [
    "Overview",
    "Choose Device or Platform",
    "Change Child’s Account Password",
  ];

  const totalSteps = stepLabels.length;
  const currentStep = 2;

  const deviceOptions = [
    {
      name: "iPhone / iPad / Apple Watch / Apple Vision Pro",
      content: (
        <ul>
          <li>1. Open the Settings app.</li>
           <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
          <li>2. Tap your name at the top.</li>
           <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
          <li>3. Tap “Sign-In & Security.”</li>
           <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
          <li>4. Tap “Change Password.”</li>
           <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
          <li>5. Enter your device passcode if prompted.</li>
           <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
          <li>6. Follow the on-screen steps to reset your password.</li>
           <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
        </ul>
      ),
    },
    {
      name: "Mac",
      content: (
        <ul>
          <li>1. Go to the Apple menu  and choose System Settings.</li>
           <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
          <li>2. Click your name at the top of the sidebar.</li>
           <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
          <li>3. Click “Sign-In & Security.”</li> 
           <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
          <li>4. Click “Change Password.”</li>
           <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
          <li>5. Enter your Mac password if prompted.</li>
           <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
          <li>6. Follow the instructions to reset your password.</li> <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
        </ul>
      ),
    },
    {
      name: "Web Browser",
      content: (
        <ul>
          <li>1. Visit appleid.apple.com and sign in.</li>
           <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
          <li>2. In the Sign-In and Security section, click “Password.”</li>
           <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
          <li>3. Enter your current password, then your new password.</li>
           <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
          <li>4. Click “Change Password.”</li>
           <div className="step-image">
            <img src="/img/" alt="insert later" className="signin-img" />
          </div>
        </ul>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="change-pass-container">
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
          <h2 className="change-pass-title">
            Select the device or platform you’ll use to change your Apple
            Account password:
          </h2>

          {deviceOptions.map((device, index) => (
            <div key={index} className="dropdown-section">
              <div
                className="dropdown-header"
                onClick={() => handleToggle(index)}
              >
                <span className="device-name">{device.name}</span>
                <span className="dropdown-arrow">
                  {openIndex === index ? "▾" : "▸"}
                </span>
              </div>
              {openIndex === index && (
                <div className="dropdown-content">{device.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="change-pass-navigation">
        <button
          className="back-btn"
          onClick={() =>
            navigate("/AppleAccounts/ChangePassword/ChangePassword1")
          }
        >
          ← Back
        </button>
        <button
          className="next-btn"
          onClick={() =>
            navigate("/AppleAccounts/ChangePassword/ChangePassword3")
          }
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default ChangePassword2;
