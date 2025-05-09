import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./tracking.css";

export default function Tracking2A() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/tracking/step2b");
  };

  return (
    <div className="module">
      <ProgressBar
        totalSteps={2}
        currentStep={1}
        stepLabels={["Apple: Overview", "Apple: Disabling"]}
      />

      <div className="header">
        <h2>Tracking Devices: Apple – Overview</h2>
      </div>

      <p>
        <strong>Overview:</strong>
      </p>
      <p>
        In terms of tracking through Bluetooth, Apple devices can only be tracked using other Apple devices.
        Apple's official website provides a simple guide on how to locate such devices.
      </p>

      <p>
        However, sometimes you might not hear the sound right away. In that case, if you have an iPhone version 11 or higher,
        you can use the <strong>Find Nearby Apple</strong> feature. Follow these steps to track the location of the unknown AirTag.
      </p>

      <p>
        <strong>Most likely appearance of the tag:</strong>
        (Insert image or description if needed.)
      </p>

      <div className="step-controls">
        <button className="next-btn" onClick={handleNext}>Next →</button>
      </div>
    </div>
  );
}

