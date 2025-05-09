import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./tracking.css";

export default function Tracking3A() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/tracking/step3b");
  };

  const handleBack = () => {
    navigate("/tracking/step2b");
  };

  return (
    <div className="module">
      <ProgressBar
        totalSteps={6}
        currentStep={5}
        stepLabels={[
          "Android: Overview",
          "Android: Disabling",
          "Apple: Overview",
          "Apple: Locating",
          "GPS: Overview",
          "GPS: Disabling"
        ]}
      />

      <div className="header">
        <h2>Tracking Devices: GPS Trackers – Overview</h2>
      </div>

      <p>
        GPS trackers are most likely to be located in your car, but they can also be hidden in items you carry often. 
        It’s rare, but if you're worried, it’s a good idea to check any item your abuser may know you carry.
      </p>

      <p>
        In vehicles, abusers may use:
        <ul>
          <li>Portable GPS trackers</li>
          <li>Hardwired GPS trackers</li>
          <li>Plug-in GPS trackers</li>
        </ul>
      </p>

      <p>
        To detect a tracker, check these common places:
        <strong> Interior:</strong> under seats, floor mats, trunk.
        <br />
        <strong> Exterior:</strong> bumpers, under the hood, wheels, and the car’s undercarriage.
      </p>

      <p>
        If you don’t find one, consider using a GPS bug detector. These usually cost around $30.
      </p>

      <div className="step-controls">
        <button className="back-btn" onClick={handleBack}>← Back</button>
        <button className="next-btn" onClick={handleNext}>Next →</button>
      </div>
    </div>
  );
}
