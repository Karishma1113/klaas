import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Modules.css";

const ModulesHome = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredModules = modules.filter((module) =>
    module.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="modules-container">
      <input
        type="text"
        placeholder="Search modules..."
        className="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <h1 className="modules-title">MODULES</h1>

      <div className="modules-grid">
        {filteredModules.length > 0 ? (
          filteredModules.map((module, index) => (
            <div key={index} className="module-card">
              <div className="module-header">
                <h2 className="module-title">{module.title}</h2>
                <button className="btn overview-btn" onClick={() => navigate(`/module/${index}`)}>
                  Overview →
                </button>
              </div>

              {module.submodules.length > 0 && (
                <div className="submodules-list">
                  {module.submodules.map((submodule, idx) => (
                    <div key={idx} className="submodule-item">
                      {submodule}
                      <button className="btn module-btn" onClick={() => navigate(`/mfa1`)}>
                        Module →
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="no-results">No modules found</p>
        )}
      </div>
    </div>
  );
};

export default ModulesHome;