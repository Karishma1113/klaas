import React from "react";
import "./Survey.css";

const Survey1 = () => {
  return (
    <div className="survey-container">
      <h2 className="survey-title">Survey</h2>
      <p className="survey-subtitle">Select all that apply</p>

      <div className="survey-section">
        <p className="survey-question">
          What is your current living situation? (Check all that apply)
        </p>
        <div className="survey-options">
          <label>
            <input type="checkbox" /> Living alone
          </label>
          <label>
            <input type="checkbox" /> Living with family
          </label>
          <label>
            <input type="checkbox" /> Living with roommates
          </label>
          <label>
            <input type="checkbox" /> Living in a dormitory
          </label>
        </div>
      </div>

      <div className="survey-section">
        <p className="survey-question">
          Are you currently living with your abuser?
        </p>
        <div className="survey-options">
          <label>
            <input type="checkbox" /> Yes
          </label>
          <label>
            <input type="checkbox" /> No
          </label>
        </div>
      </div>

      <div className="survey-section">
        <p className="survey-question">
          Do you have any children?
        </p>
        <div className="survey-options">
          <label>
            <input type="checkbox" /> Yes
          </label>
          <label>
            <input type="checkbox" /> No
          </label>
        </div>
      </div>

      <div className="survey-section">
        <p className="survey-question">
          If you are not living with your abuser, do you have any concerns regarding potential stalking?
        </p>
        <div className="survey-options">
          <label>
            <input type="checkbox" /> Yes
          </label>
          <label>
            <input type="checkbox" /> No
          </label>
        </div>
      </div>


      <button className="continue-button">Continue →</button>
    </div>
  );
};

export default Survey1;
