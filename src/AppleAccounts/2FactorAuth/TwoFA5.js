import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ProgressBar";
import "./TwoFA.css";

const TwoFA5 = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const stepLabels = [
    "Overview",
    "Turning on 2FA",
    "Signing in on New Device/Browser",
    "If You Can't Access a Trusted Device",
    "Manage Trusted Phone Numbers",
  ];

  const totalSteps = stepLabels.length;
  const currentStep = 5;

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const deviceOptions = [
    {
      name: "iPhone or iPad",
      content: (
        <>
          <ol>
            <li>Go to "Settings" &gt; [your name] &gt; "Sign-In & Security" &gt; "Two-Factor Authentication."</li>
          </ol>
          <div className="step-image">
            <img src="/img/settings-security.jpg" alt="Sign-In & Security page" className="2fa-img" />
          </div>
          <ol start={2}>
            <li>Tap "Add a Trusted Phone Number."</li>
          </ol>
          <div className="step-image">
            <img src="/img/settings-2fa.jpg" alt="Settings screen for adding a trusted phone number" className="2fa-img" />
          </div>
        </>
      ),
    },
    {
      name: "Mac",
      content: (
        <>
          <ol>
            <li>Open the Apple menu &gt; "System Settings" &gt; [your name] &gt; "Password & Security".</li>
          </ol>
          <div className="step-image">
            <img src="/img/mac-settings.jpg" alt="Mac settings screen" className="2fa-img" />
          </div>
          <ol start={2}>
            <li>Click the plus sign to edit "Trusted Phone Numbers."</li>
          </ol>
          <div className="step-image">
            <img src="/img/mac-security.jpg" alt="Password & Security page on Mac" className="2fa-img" />
          </div>
        </>
      ),
    },
    {
      name: "Web Browser",
      content: (
        <>
          <ol>
            <li>
              Go to{" "}
              <a
                href="https://account.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                account.apple.com
              </a>
            </li>
            <li>Go to "Sign-In and Security" &gt; "Account Security."</li>
            <li>Manage your trusted numbers by clicking the plus sign.</li>
          </ol>
          <div className="step-image">
            <img src="/img/web-2fa.jpg" alt="Apple's two-factor authentication page on web browser" className="2fa-img" />
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="twofa-container">
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
          {deviceOptions.map((device, index) => (
            <div key={index} className="dropdown-section">
              <div className="dropdown-header" onClick={() => handleToggle(index)}>
                <span className="device-name">{device.name}</span>
                <span className="dropdown-arrow">{openIndex === index ? "▾" : "▸"}</span>
              </div>
              {openIndex === index && (
                <div className="dropdown-content">{device.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="twofa-navigation">
        <button
          className="back-btn"
          onClick={() => navigate("/AppleAccounts/2FactorAuth/TwoFA4")}
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default TwoFA5;
