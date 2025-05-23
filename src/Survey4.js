import React from "react";
import { useNavigate } from "react-router-dom";
import "./Survey.css";

const Survey4 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/survey5");
  };

  const handleBack = () => {
    navigate("/survey3");
  };

  return (
    <div className="survey-container">
      <h1 className="survey-title">Learning Guide Questionnaire</h1>

      <div className="survey-progress-bar">
        {Array.from({ length: 8 }, (_, index) => (
          <div
            key={index}
            className={`progress-step ${index <= 3 ? "active" : ""}`}
          />
        ))}
      </div>

      <div className="survey-section">
        <p className="survey-question">
          If you no longer live with that person, are you worried they might try to reach you or follow you?
        </p>
        <div className="yes-no-options">
          <label>
            <input type="radio" name="followWorry" value="yes" /> Yes
          </label>
          <label>
            <input type="radio" name="followWorry" value="no" /> No
          </label>
        </div>
      </div>

      <div className="survey-navigation-between">
        <button className="back-button" onClick={handleBack}>← Back</button>
        <button className="next-button" onClick={handleNext}>Next →</button>
      </div>
    </div>
  );
};

export default Survey4;
