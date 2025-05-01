import React from "react";
import { useNavigate } from "react-router-dom";
import "./DeviceSetup.css";

const Device3 = () => {
  const navigate = useNavigate();

  return (
    <div className="device-container">
      <div className="device-tabs">
        <button className="tab">1. Overview</button>
        <button className="tab">2. Settings App</button>
        <button className="tab active">3. Account Activity</button>
        <button className="tab">4. Recovery Info</button>
        <button className="tab">5. Connected Apps</button>
      </div>

      <button className="close-btn" onClick={() => navigate("/guides")}>X</button>

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