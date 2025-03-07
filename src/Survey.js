import React from "react";
import "./Survey.css"; // Import the CSS file

const Survey = () => {
  return (
    <div className="survey-container">
      <h1 className="survey-title">Survey</h1>
      <div className="image-container">
        <img
          src={process.env.PUBLIC_URL + "/img/survey1.png"}

          alt="Survey Screenshot 1"
          className="survey-image"
        />
        <img
          src={process.env.PUBLIC_URL + "img/survey2.png"} 
          alt="Survey Screenshot 2"
          className="survey-image"
        />
        <img
          src={process.env.PUBLIC_URL + "img/result.png"} 
          alt="Survey Result"
          className="survey-image"
        />
      </div>
    </div>
  );
};

export default Survey;
