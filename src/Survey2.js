import React from "react";
import { useNavigate } from "react-router-dom";
import "./Survey.css";

const Survey2 = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/surveyresults");
  };

  return (
    <div className="survey-container">
      <h2 className="survey-title">Survey</h2>
      <p className="survey-subtitle">Answer the following</p>

      <div className="survey-section">
        <p className="survey-question">
          What form of IT technology do you want to secure the most?
        </p>
        <div className="survey-options">
          <label>
            <input type="checkbox" /> Accounts
          </label>
          <label>
            <input type="checkbox" /> Devices
          </label>
        </div>
      </div>

      <div className="survey-section">
        <p className="survey-question">What kind of software application do you use?</p>
        <div className="yes-no-options">
          <label>
            <input type="radio" name="softwareApplication" value="Android" /> Android
          </label>
          <label>
            <input type="radio" name="softwareApplication" value="IOS" /> IOS
          </label>
        </div>
      </div>

      <div className="survey-section">
        <p className="survey-question">How many personal devices do you have?</p>
        <div className="yes-no-options">
          <label>
            <input type="radio" name="personalDevices" value="1" /> 1
          </label>
          <label>
            <input type="radio" name="personalDevices" value="2" /> 2
          </label>
          <label>
            <input type="radio" name="personalDevices" value=">2" /> More than 2
          </label>
        </div>
      </div>

      <div className="survey-section">
        <p className="survey-question">Does anyone else have access to your personal devices?</p>
        <div className="yes-no-options">
          <label>
            <input type="radio" name="devicesAccess" value="yes" /> Yes
          </label>
          <label>
            <input type="radio" name="devicesAccess" value="no" /> No
          </label>
        </div>
      </div>

      <div className="survey-section">
        <p className="survey-question">
          What steps have you taken to improve your online security and digital safety?
        </p>
        <div className="survey-options">
          <label>
            <input type="checkbox" /> Use strong passwords
          </label>
          <label>
            <input type="checkbox" /> Enable two-factor authentication
          </label>
          <label>
            <input type="checkbox" /> Set up a backup email for account recovery
          </label>
          <label>
            <input type="checkbox" /> I do not take security measures
          </label>
        </div>
      </div>

      <button className="continue-button" onClick={handleSubmit}>Submit →</button>
    </div>
  );
};

export default Survey2;
