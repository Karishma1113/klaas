import React from "react";
import "./SurveyResults.css";

const SurveyResults = () => {
  return (
    <div className="survey-container">
      <h2 className="survey-title">Survey</h2>
      <p className="survey-subtitle">
        Here are some recommendations based on your input
      </p>

      <h3 className="survey-section-title">Modules</h3>
      <div className="smodules-container">
        <p className="smodule-title">Securing Your Google Account</p>

        <div className="smodule-item">
          <span>MFA Setup</span>
          <button className="smodule-button">Module →</button>
        </div>

        <div className="smodule-item">
          <span>Device Setup</span>
          <button className="smodule-button">Module →</button>
        </div>
      </div>

      <h3 className="survey-section-title">Resources</h3>
      <div className="resources-container">
        <p>
          <strong>Pen America online safety</strong>
          <br />
          <a href="https://onlineharassmentfieldmanual.pen.org/" target="_blank" rel="noopener noreferrer">
            https://onlineharassmentfieldmanual.pen.org/
          </a>
        </p>

        <p>
          <strong>End Tab</strong>
          <br />
          <a href="https://www.endtab.org/" target="_blank" rel="noopener noreferrer">
            https://www.endtab.org/
          </a>
        </p>

        <p>
          <strong>Intel Techniques</strong>
          <br />
          <a href="https://inteltechniques.com/workbook.html" target="_blank" rel="noopener noreferrer">
            https://inteltechniques.com/workbook.html
          </a>
        </p>
      </div>
    </div>
  );
};

export default SurveyResults;
