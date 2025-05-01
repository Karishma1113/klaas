import React from "react";
import { useNavigate } from "react-router-dom";
import "./Survey.css";

const Survey1 = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/survey2");
  };

  return (
    <div className="survey-container">
      <h1 className="survey-title">Survey</h1>
      <p className="survey-subtitle">*Select all that apply to receive resources and guides based on your situation</p>

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
        <p className="survey-question">Are you currently residing with your abuser?</p>
        <div className="yes-no-options">
          <label>
            <input type="radio" name="residingAbuser" value="yes" /> Yes
          </label>
          <label>
            <input type="radio" name="residingAbuser" value="no" /> No
          </label>
        </div>
      </div>

      <div className="survey-section">
        <p className="survey-question">Do you have any children?</p>
        <div className="yes-no-options">
          <label>
            <input type="radio" name="haveChildren" value="yes" /> Yes
          </label>
          <label>
            <input type="radio" name="haveChildren" value="no" /> No
          </label>
        </div>
      </div>

      <div className="survey-section">
        <p className="survey-question">
          If you are not living with your abuser, do you have any concerns
          regarding potential stalking?
        </p>
        <div className="yes-no-options">
          <label>
            <input type="radio" name="stalkingConcerns" value="yes" /> Yes
          </label>
          <label>
            <input type="radio" name="stalkingConcerns" value="no" /> No
          </label>
        </div>
      </div>


      <button className="continue-button" onClick={handleContinue}>Continue →</button>
    </div>
  );
};

export default Survey1;
