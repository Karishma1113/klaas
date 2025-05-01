import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Guides.css";

const GuidesHome = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const guides = [
    {
      title: "Securing Your Google Account",
      subguides: [
        { name: "MFA Setup", path: "/mfa1" },
        { name: "Device Setup", path: "/Device1" },
        { name: "Password Setup", path: "/Password1" },
        { name: "Private Browsing", path: "/private-browsing" },
        { name: "Recovery Email", path: "/recovery-email" },
      ],
    },
    {
      title: "Securing Kids’ Devices & Talking About Online Safety",
      subguides: [],
    },
    {
      title: "Guide Title",
      subguides: [],
    },
    {
      title: "Guide Title",
      subguides: [],
    },
  ];

  const filteredGuides = guides.filter((guide) =>
    guide.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="guides-container">
      <input
        type="text"
        placeholder="Search guides..."
        className="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <h1 className="guides-title">Guides</h1>

      <div className="guides-grid">
        {filteredGuides.length > 0 ? (
          filteredGuides.map((guide, index) => (
            <div key={index} className="guides-card">
              <div className="guide-header">
                <h2 className="guide-title">{guide.title}</h2>
                <button className="btn overview-btn" onClick={() => navigate(`/guides/${index}`)}>
                  Overview →
                </button>
              </div>

              {guide.subguides.length > 0 && (
                <div className="subguides-list">
                  {guide.subguides.map((subguide, idx) => (
                    <div key={idx} className="subguide-item">
                      {subguide.name}
                      <button className="btn guide-btn" onClick={() => navigate(subguide.path)}>
                        Guide →
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="no-results">No guides found</p>
        )}
      </div>
    </div>
  );
};

export default GuidesHome;