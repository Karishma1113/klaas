import React from "react";
import { useNavigate } from "react-router-dom";
import "./DeviceSetup.css";

const Device2 = () => {
  const navigate = useNavigate();

  return (
    <div className="device-container">
      <div className="device-tabs">
        <button className="tab">1. Overview</button>
        <button className="tab active">2. Settings App</button>
        <button className="tab">3. Account Activity</button>
        <button className="tab">4. Recovery Info</button>
        <button className="tab">5. Connected Apps</button>
      </div>

      <button className="close-btn" onClick={() => navigate("/guides")}>X</button>

      <h3>Step 1</h3>
      <p>On your device, locate and open the Settings app, then navigate to Google Settings.</p>
      <ul className="device-list">
        <li>○ Scroll to find and select Google</li>
        <li>○ OR Go to Gmail/Youtube App and select your user icon</li>
        <li>○ Tap on "Manage Your Google Account"</li>
      </ul>

      <div className="step-image">
        <img src="/img/device2.png" alt="Settings navigation" />
      </div>

      <div className="device-navigation">
        <button className="back-btn" onClick={() => navigate("/device1")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/device/device3")}>Next →</button>
      </div>
    </div>
  );
};

export default Device2;