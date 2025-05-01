import React, { useState } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ totalSteps = 6, currentStep = 1, stepLabels = [] }) => {
  const [step] = useState(currentStep);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="arrow-steps clearfix">
          {Array.from({ length: totalSteps }, (_, i) => {
            const index = i + 1;
            let className = "step";
            if (index < step) className += " done";
            else if (index === step) className += " current";

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
