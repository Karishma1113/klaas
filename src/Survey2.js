import React from "react";
import { useNavigate } from "react-router-dom";
import "./Survey.css";

const Survey2 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/survey3");
  };

  return (
    <div className="survey-container">
      <h1 className="survey-title">Learning Guide Questionnaire</h1>

      <div className="survey-progress-bar">
        {Array.from({ length: 8 }, (_, index) => (
          <div
            key={index}
            className={`progress-step ${index === 0 ? "active" : ""}`}
          />
        ))}
      </div>

      <div className="survey-card">
        <p className="survey-question">
          What’s your current living situation?
        </p>
        <div className="survey-options">
          <label><input type="checkbox" /> Living alone</label>
          <label><input type="checkbox" /> Living with family</label>
          <label><input type="checkbox" /> Living with roommates</label>
          <label><input type="checkbox" /> Living in a dormitory</label>
        </div>
      </div>

      <div className="survey-navigation">
        <button className="next-button" onClick={handleNext}>Next →</button>
      </div>
    </div>
  );
};

export default Survey2;
