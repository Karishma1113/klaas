import React from "react";
import { useNavigate } from "react-router-dom";
import "./DeviceSetup.css";

const Device4 = () => {
  const navigate = useNavigate();

  return (
    <div className="device-container">
      <div className="device-tabs">
        <button className="tab">1. Overview</button>
        <button className="tab">2. Settings App</button>
        <button className="tab">3. Account Activity</button>
        <button className="tab active">4. Recovery Info</button>
        <button className="tab">5. Connected Apps</button>
      </div>

      <button className="close-btn" onClick={() => navigate("/guides")}>X</button>

      <h3>Step 3</h3>
      <p>Update recovery information by adding or verifying recovery methods.</p>
      <p>Ensure your recovery phone number and email address are up-to-date in the security section.</p>

      <div className="step-image">
        <img src="/img/device4.png" alt="Recovery settings" />
      </div>

      <div className="device-navigation">
        <button className="back-btn" onClick={() => navigate("/device/device3")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/device/device5")}>Next →</button>
      </div>
    </div>
  );


};

export default Device4;
