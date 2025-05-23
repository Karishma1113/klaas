// Survey7.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Survey.css";

const Survey7 = () => {
  const navigate = useNavigate();

  return (
    <div className="survey-container">
      <h1 className="survey-title">Learning Guide Questionnaire</h1>
      <div className="survey-progress-bar">
        {Array.from({ length: 8 }, (_, index) => (
          <div key={index} className={`progress-step ${index <= 6 ? "active" : ""}`} />
        ))}
      </div>
      <div className="survey-section">
        <p className="survey-question">Does anyone else have access to your personal devices?</p>
        <div className="yes-no-options">
          <label><input type="radio" name="deviceAccess" value="yes" /> Yes</label>
          <label><input type="radio" name="deviceAccess" value="no" /> No</label>
          <label><input type="radio" name="deviceAccess" value="unsure" /> I'm not sure</label>
        </div>
      </div>
      <div className="survey-navigation-between">
        <button className="back-button" onClick={() => navigate("/Survey6")}>← Back</button>
        <button className="next-button" onClick={() => navigate("/Survey8")}>Next →</button>
      </div>
    </div>
  );
};
export default Survey7;