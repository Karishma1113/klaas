import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ProgressBar";
import "./TwoFA.css";

const TwoFA2 = () => {
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
  const currentStep = 2;

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const deviceOptions = [
    {
      name: "iPhone or iPad",
      content: (
        <>
          <p>1. Go to Settings &gt; [your name] &gt; Sign-In & Security.</p>
          <div className="step-image">
            <img src="/img/settings-icloud.jpg" alt="Apple settings screen" className="2fa-img" />
          </div>
          <p>2. Tap "Turn On Two-Factor Authentication."</p>
          <div className="step-image">
            <img src="/img/settings-security.jpg" alt="Sign-In & Security page" className="2fa-img" />
          </div>
          <p>3. Tap "Continue" and follow the onscreen instructions.</p>
        </>
      ),
    },
    {
      name: "Mac",
      content: (
        <>
          <p>1. Open the Apple menu &gt; System Settings &gt; [your name] &gt; Password & Security.</p>
          <div className="step-image">
            <img src="/img/mac-settings.jpg" alt="Mac settings screen" className="2fa-img" />
          </div>
          <p>2. Next to "Two-Factor Authentication", click "Turn On."</p>
          <p>3. Click "Continue" and follow the onscreen instructions.</p>
        </>
      ),
    },
    {
      name: "Web Browser",
      content: (
        <>
          <p>
            1. Go to{" "}
            <a href="https://account.apple.com" target="_blank" rel="noopener noreferrer" style={{ color: "blue", textDecoration: "underline" }}>
              account.apple.com
            </a>{" "}
            and sign in.
          </p>
          <p>2. Answer your security questions, then tap "Continue".</p>
          <p>3. Click "Account Security", then follow the onscreen instructions.</p>
          <div className="step-image">
            <img src="/img/web-security.jpg" alt="Apple web browser iCloud Settings" className="2fa-img" />
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="twofa-container">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} stepLabels={stepLabels} />

      <button className="close-btn" onClick={() => navigate("/guides")}>
        X
      </button>

      <div className="twoFA-content">
        <div className="step-info">
          <h3>
            Turning on Two-Factor Authentication is different based on the device you are using.
          </h3>
          <p>
            Note: If you’re already using 2FA, you can’t turn it off. If you enabled it recently by mistake, you have two weeks to disable it. After that, turning it off is not possible and some features will require 2FA to work.
          </p>

          {deviceOptions.map((device, index) => (
            <div key={index} className="dropdown-section">
              <div className="dropdown-header" onClick={() => handleToggle(index)}>
                <span className="device-name">{device.name}</span>
                <span className="dropdown-arrow">{openIndex === index ? "▾" : "▸"}</span>
              </div>
              {openIndex === index && <div className="dropdown-content">{device.content}</div>}
            </div>
          ))}
        </div>
      </div>

      <div className="twofa-navigation">
        <button className="back-btn" onClick={() => navigate("/AppleAccounts/2FactorAuth/TwoFA1")}>
          ← Back
        </button>
        <button className="next-btn" onClick={() => navigate("/AppleAccounts/2FactorAuth/TwoFA3")}>
          Next →
        </button>
      </div>
    </div>
  );
};

export default TwoFA2;
