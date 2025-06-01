import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./tracking.css";

export default function Tracking1B() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/tracking/step2a");
  };

  const handleBack = () => {
    navigate("/tracking/step1a");
  };

  return (
    <div className="module">
      <ProgressBar
        totalSteps={2}
        currentStep={2}
        stepLabels={["Android: Overview", "Android: Disabling"]}
      />

      <div className="header">
        <h2>Tracking Devices: Android – Disabling</h2>
      </div>

      <p>
        Once you locate the tracker, you have to consider whether it is safe for you to disable it or
        whether you should contact the authorities, so that they can find the owner of the tracker and take legal actions against them.
        One thing to consider is that once the tracker is disabled, the owner still has the information about its last known location.
      </p>

      <p>
        If you decide to disable the tracker, first you need to identify the type of tracker, because each different type of tracker has its own disabling instructions.
        You’ll be able to find the information on what type of tracker your device is connected to in the original android pop up alert.
      </p>

      <p>
        Overall, there are 4 common types of trackers:<br />
        – Apple trackers<br />
        – Chipolo trackers<br />
        – Motorola tracker<br />
        – Pebblebee trackers
      </p>

      <div className="step-controls">
        <button className="back-btn" onClick={handleBack}>← Back</button>
        <button className="next-btn" onClick={handleNext}>Next →</button>
      </div>
    </div>
  );
}
