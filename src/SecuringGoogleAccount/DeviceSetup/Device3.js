import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from '../../ProgressBar';
import "./DeviceSetup.css";

const Device3 = () => {
  const navigate = useNavigate();

  const stepLabels = [
    "Overview",
    "Settings",
    "Account Activity",
    "Recovery Information",
  ];

  const totalSteps = stepLabels.length;
  const currentStep = 3;


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
      <h3>Step 2</h3>
      <p>Review account activity by checking recent security events and managing devices:</p>
      <ul className="device-list">
        <li>○ In the security section, review any recent security events</li>
        <li>○ Under “Your devices,” view devices that have accessed your account</li>
        <li>○ If you see unfamiliar devices, select “Don’t recognize this device?” and follow the instructions</li>
      </ul>

      <div className="step-image-row">
        <img src="/img/device3a.png" alt="Recent Security Events" />
        <img src="/img/device3b.png" alt="Your Devices List" />
      </div>


      <div className="device-navigation">
        <button className="back-btn" onClick={() => navigate("/device/device2")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/device/device4")}>Next →</button>
      </div>
    </div>
  );
};

export default Device3;