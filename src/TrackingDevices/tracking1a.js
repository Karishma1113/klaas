import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./tracking.css";

export default function Tracking1A() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/tracking/step1b");
  };

  return (
    <div className="module">
      <ProgressBar
        totalSteps={2}
        currentStep={1}
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
        <h2>Tracking Devices: Android – Overview</h2>
      </div>

      <p>
        There are two main ways to stop a tracker from accessing your location temporarily: 
        turning off Bluetooth or location sharing, or turning on airplane mode. 
        But to fully stop tracking, you’ll need to find and disable the device manually.
      </p>


       <img src="/img/track1.png" 

        alt="Android tracking alert notification"
        className="step-img"
      />

      <p>
        If you’re an Android user and someone is tracking you, your phone will alert you with an “unknown tracking device found” notification. 
        Android offers step-by-step instructions for finding the tracker.
      </p>

      <p>
        Once you locate it, think about your safety. Disabling the tracker might alert the person who placed it. 
        You may want to contact local authorities instead.
      </p>

      <div className="step-controls">
        <button className="next-btn" onClick={handleNext}>Next →</button>
      </div>
    </div>
  );
}
