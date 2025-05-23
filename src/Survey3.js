import React from "react";
import { useNavigate } from "react-router-dom";
import "./Survey.css";

const Survey3 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/survey4");
  };

  const handleBack = () => {
    navigate("/survey2");
  };

  return (
    <div className="survey-container">
      <h1 className="survey-title">Learning Guide Questionnaire</h1>

      <div className="survey-progress-bar">
        {Array.from({ length: 8 }, (_, index) => (
          <div
            key={index}
            className={`progress-step ${index <= 1 ? "active" : ""}`}
          />
        ))}
      </div>

      <div className="survey-section">
        <p className="survey-question">
          Are you currently living with someone whom you feel unsafe around?
        </p>
        <div className="yes-no-options">
          <label>
            <input type="radio" name="feelUnsafe" value="yes" /> Yes
          </label>
          <label>
            <input type="radio" name="feelUnsafe" value="no" /> No
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

export default Survey3;