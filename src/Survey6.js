
// Survey6.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Survey.css";

const Survey6 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/survey7");
  };

  const handleBack = () => {
    navigate("/survey5");
  };

  return (
    <div className="survey-container">
      <h1 className="survey-title">Learning Guide Questionnaire</h1>
      <div className="survey-progress-bar">
        {Array.from({ length: 8 }, (_, index) => (
          <div
            key={index}
            className={`progress-step ${index <= 5 ? "active" : ""}`}
          />
        ))}
      </div>
      <div className="survey-section">
        <p className="survey-question">What is your main tech safety concern as of now?</p>
        <div className="yes-no-options">
          <label>
            <input type="checkbox" name="concern1" /> Securing personal accounts (Google, Apple)
          </label>
          <label>
            <input type="checkbox" name="concern2" /> Securing social media accounts (Facebook, Instagram, Snapchat)
          </label>
          <label>
            <input type="checkbox" name="concern3" /> Finding and disabling tracking devices
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

export default Survey6;
