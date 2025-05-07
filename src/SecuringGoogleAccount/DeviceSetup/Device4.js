import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from '../../ProgressBar';
import "./DeviceSetup.css";

const Device4 = () => {
  const navigate = useNavigate();

  const stepLabels = [
    "Overview",
    "Settings",
    "Account Activity",
    "Recovery Information",
  ];

  const totalSteps = stepLabels.length;
  const currentStep = 4;


  return (
    <div className="secure-container">
      {/* Updated ProgressBar with dynamic steps */}
      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        stepLabels={stepLabels}
      />


      <button className="close-btn" onClick={() => navigate("/guides")}>
        X
      </button>
      <h3>Step 3</h3>
      <p>Update recovery information by adding or verifying recovery methods.</p>
      <p>Ensure your recovery phone number and email address are up-to-date in the security section.</p>

      <div className="step-image">
        <img src="/img/device4.png" alt="Recovery settings" />
      </div>

      <div className="device-navigation">
        <button className="back-btn" onClick={() => navigate("/device/device3")}>← Back</button>
      </div>
    </div>
  );


};

export default Device4;
