import React from "react";
import { useNavigate } from "react-router-dom";
import "./DeviceSetup.css";

const Device5 = () => {
  const navigate = useNavigate();

  return (
    <div className="device-container">
      <div className="device-tabs">
        <button className="tab">1. Overview</button>
        <button className="tab">2. Settings App</button>
        <button className="tab">3. Account Activity</button>
        <button className="tab">4. Recovery Info</button>
        <button className="tab active">5. Connected Apps</button>
      </div>

      <button className="close-btn" onClick={() => navigate("/guides")}>X</button>

      <h3>Step 4</h3>
      <p>Review connection apps:</p>
      <ul className="device-list">
        <li>○ In the “Security” tab, under “Third-party apps with account access,” review apps and services connected to your account</li>
        <li>○ Remove any that you no longer use or recognize</li>
      </ul>

      <div className="step-image-row">
        <img src="/img/device5a.png" alt="Third-party apps list" />
         <img src="/img/device5b.png" alt="LinkedIn connected app view" />
      </div>

      <div className="device-navigation">
        <button className="back-btn" onClick={() => navigate("/device/device4")}>← Back</button>
      </div>
    </div>
  );
};

export default Device5;