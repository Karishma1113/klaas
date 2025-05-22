import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from '../../ProgressBar';
import "./DeviceSetup.css";

const Device1 = () => {
  const navigate = useNavigate();

  const stepLabels = [
    "Overview",
    "Settings",
    "Account Activity",
    "Recovery Information",
  ];

  const totalSteps = stepLabels.length;
  const currentStep = 1;


  return (
    <div className="secure-container">
      {/* Updated ProgressBar with dynamic steps */}
      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        stepLabels={stepLabels}
      />


      <button className="close-btn" onClick={() => navigate("/guides")}>
        Close Guide
      </button>

      <h1 className="device-title">Google Device Setup</h1>
      <p>
        Setting up your Google account on a device ensures secure access to emails,
        apps, and personalized settings while allowing you to manage security features
        like backups and account recovery.
      </p>
      <p>
        Proper setup helps protect your data, prevents unauthorized access, and ensures
        seamless synchronization across devices.
      </p>
      <p>
        MFA is a security feature that requires users to provide two forms of authentication
        to verify their identity.
      </p>

      <h3>Why is device setup important?</h3>
      <ul className="device-list">
        <li>○ Ensures only you can sign in and manage your account</li>
        <li>○ Enables security features like remote device management and recovery</li>
        <li>○ Keeps emails, contacts, and app preferences updated across devices</li>
        <li>○ Helps you regain access if you lose your password or device</li>
      </ul>


      <div className="device-navigation">
        <button className="next-btn" onClick={() => navigate("/device/device2")}>Next →</button>
      </div>
    </div>
  );
};

export default Device1;