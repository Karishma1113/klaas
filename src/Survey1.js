import React from "react";
import { useNavigate } from "react-router-dom";
import "./Survey.css";

const Survey1 = () => {
  const navigate = useNavigate();

  const handleStartSurvey = () => {
    navigate("/survey2");
  };

  return (
    <div className="survey-container" style={{ textAlign: "center" }}>
      <h1 className="survey1-title">
        Learning Guide Questionnaire
      </h1>
      <p className="survey1-subtitle">
        Tell us a little about your current situation so we can connect you with the right support tools.
      </p>
      <button className="continue-button" onClick={handleStartSurvey}>
        Take survey →
      </button>
    </div>
  );
};

export default Survey1;
