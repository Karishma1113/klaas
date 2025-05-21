import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ProgressBar";
import "./FindMy.css";

const FindMy1 = () => {
  const navigate = useNavigate();

  const stepLabels = [
    "Overview",
    "Managing Find My iPhone",
    "Manage Location Sharing in Apps",
  ];

  const totalSteps = stepLabels.length;
  const currentStep = 1; // Current step for this part of the guide

  return (
    <div className="find-my-container">
      {/* Updated ProgressBar with dynamic steps */}
      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        stepLabels={stepLabels}
      />

      <button className="close-btn" onClick={() => navigate("/guides")}>
        X
      </button>

      <h3 className="find-my-title">Find My iPhone</h3>

      <p className="find-my-desc">
        "Find My iPhone" is a feature that helps you locate your device if it
        gets lost or stolen. You can track it by signing into iCloud. If you're
        worried about someone using it to track your location, the following
        guide will show how you can manage it and turn it off.
      </p>

      <h3 className="find-my-title">Location Sharing in Apps</h3>
      <p className="find-my-desc">
         Location sharing lets apps use your device's GPS to know where you are.
        This is helpful for things like maps to give directions or weather to
        show local forecasts, and food delivery or rideshare apps to find your
        address. But it also means some apps might track your location in the
        background, even when you're not using them. The following guide will also show you how to manage which apps can track your location. 
      </p>
      <div className="find-my-navigation">
        <div style={{ visibility: "hidden" }}>
          <button className="back-btn">← Back</button>
        </div>
        <button
          className="next-btn"
          onClick={() => navigate("/AppleAccounts/FindMyandLocation/FindMy2")}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default FindMy1;
