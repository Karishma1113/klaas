import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ totalSteps, currentStep, stepLabels }) => {
  return (
    <div className="bar-container">
      <div className="wrapper">
        <div className="arrow-steps clearfix">
          {Array.from({ length: totalSteps }, (_, i) => {
            const index = i + 1;
            let className = "step";
            if (index < currentStep) className += " done";
            else if (index === currentStep) className += " current";

            return (
              <div className={className} key={index}>
                <span>{stepLabels[i] || `Step ${index}`}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
