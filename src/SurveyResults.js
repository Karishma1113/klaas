import React from "react";
import "./SurveyResults.css";

const SurveyResults = () => {
  return (
    <div className="survey-container">
      <p className="survey-subtitle">
        Here are some recommendations based on your survey input:
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
          <>Pen America Online Safety</>
          <br />
          <a href="https://onlineharassmentfieldmanual.pen.org/" target="_blank" rel="noopener noreferrer">
            https://onlineharassmentfieldmanual.pen.org/
          </a>
        </p>

        <p>
          <>End Tab</>
          <br />
          <a href="https://www.endtab.org/" target="_blank" rel="noopener noreferrer">
            https://www.endtab.org/
          </a>
        </p>

        <p>
          <>Intel Techniques</>
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
