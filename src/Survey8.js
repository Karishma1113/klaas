// Survey8.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Survey.css";

const Survey8 = () => {
  const navigate = useNavigate();

  return (
    <div className="survey-container">
      <h1 className="survey-title">Learning Guide Questionnaire</h1>
      <div className="survey-progress-bar">
        {Array.from({ length: 8 }, (_, index) => (
          <div key={index} className={`progress-step ${index <= 7 ? "active" : ""}`} />
        ))}
      </div>
      <div className="survey-section">
        <p className="survey-question">What kind of devices do you own?</p>
        <div className="yes-no-options">
          <label><input type="checkbox" /> Phone</label>
          <label><input type="checkbox" /> Laptop/Desktop Computer</label>
          <label><input type="checkbox" /> Smart Watch</label>
        </div>
      </div>
      <div className="survey-navigation-between">
        <button className="back-button" onClick={() => navigate("/survey7")}>← Back</button>
        <button className="next-button" onClick={() => navigate("/survey9")}>Next →</button>
      </div>
    </div>
  );
};
export default Survey8;
