import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./tracking.css";

export default function Tracking3B() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/tracking/step3a");
  };

  const handleDone = () => {
    navigate("/guides");
  };

  return (
    <div className="module">
      <ProgressBar
        totalSteps={2}
        currentStep={2}
        stepLabels={[
          "Android: Overview",
          "Android: Disable Tracker",
          "Apple: Overview",
          "Apple: Disable Tracker",
          "GPS: Overview",
          "GPS: Disable Tracker"
        ]}
      />

      <div className="header">
        <h2>GPS Trackers – Disabling the Device</h2>
        <p>Step 2: Disabling the GPS Tracker</p>
      </div>

      <p>
        To disable the tracker, simply remove the batteries or wrap it in tin foil.
        This prevents the GPS signal from being transmitted.
      </p>

      <p>
        This type of tracker can vary greatly in its appearance. It can be square and palm-sized or come in mini sizes and shapes such as squares or tablets.
      </p>

      <img src="/img/track11.png" alt="Palm-sized GPS Tracker" className="step-img" />
      <img src="/img/track12.png" alt="Mini GPS Tracker" className="step-img" />

      <h3>Hardwired GPS Trackers</h3>
      <p>
        This tracker is most likely to be located in the dashboard and is very difficult to disable
        since it requires taking the dashboard apart. If you think your car has a hardwired GPS tracker installed,
        take your car to a mechanic and let them disable it.
      </p>
     
      <h3>Plugin GPS Trackers</h3>
      <p>
        Check under the driver's wheel in the diagnostic port. That’s the only place where this kind of tracker can be located.
      </p>
      <p>It will typically look something like this:</p>
      <img src="/img/track13.png" alt="Hardwired GPS Tracker Example" className="step-img" />

      <div className="step-controls">
        <button className="back-btn" onClick={handleBack}>← Back</button>
        <button className="next-btn" onClick={handleDone}>Done</button>
      </div>
    </div>
  );
}
