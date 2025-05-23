import React from "react";
import { useNavigate } from "react-router-dom";
import "./Survey.css";

const Survey9 = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/survey8");
  };

  const handleSubmit = () => {
    navigate("/surveyresults");
  };

  return (
    <div className="survey-container">
      <h1 className="survey-title">Learning Guide Questionnaire</h1>

      <div className="survey-progress-bar">
        {Array.from({ length: 9 }, (_, index) => (
          <div
            key={index}
            className={`progress-step ${index <= 8 ? "active" : ""}`}
          />
        ))}
      </div>

      <div className="survey-section">
        <p className="survey-question">
          What steps have you taken to improve your online security and digital safety?
        </p>
        <div className="yes-no-options">
          <label>
            <input type="radio" name="securitySteps" value="android" /> Android
          </label>
          <label>
            <input type="radio" name="securitySteps" value="ios" /> iOS
          </label>
          <label>
            <input type="radio" name="securitySteps" value="both" /> Both
          </label>
        </div>
      </div>

      <div className="survey-navigation-between">
        <button className="back-button" onClick={handleBack}>← Back</button>
        <button className="next-button" onClick={handleSubmit}>Submit →</button>
      </div>
    </div>
  );
};

export default Survey9;
