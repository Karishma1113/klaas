import React from "react";
import "./Modules.css";

const ModulesHome = () => {
  const modules = [
    {
      title: "Securing Your Google Account",
      submodules: ["MFA Setup", "Device Setup", "Password Setup", "Private Browsing", "Recovery Email"],
    },
    {
      title: "Securing Kids’ Devices & Talking About Online Safety",
      submodules: [],
    },
    {
      title: "Module Title",
      submodules: [],
    },
    {
      title: "Module Title",
      submodules: [],
    },
  ];

  return (
    <div className="modules-container">
      <input type="text" placeholder="Search modules..." className="search-bar" />

      <h1 className="modules-title">MODULES</h1>

      <div className="modules-grid">
        {modules.map((module, index) => (
          <div key={index} className="module-card">
            <div className="module-header">
              <h2 className="module-title">{module.title}</h2>
              <button className="overview-btn">Overview →</button>
            </div>

            {module.submodules.length > 0 && (
              <div className="submodules-list">
                {module.submodules.map((submodule, idx) => (
                  <div key={idx} className="submodule-item">
                    {submodule}
                    <button className="module-btn">Module →</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModulesHome;
