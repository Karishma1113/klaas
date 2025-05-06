import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Guides.css";

const guidesData = [
  {
    title: "Securing Google Accounts",
    description: `Your Google account is connected to many personal details, including emails, saved passwords, and location history. Keeping it secure is essential for protecting your privacy and preventing unauthorized access.

    These guides will introduce why securing your Google account matters, how accounts can be accessed without your knowledge, and ways Google tracks your activity and what that means for your privacy.

    Understanding these risks will help you take control of your account security as you move through the guides.`,
    subGuides: [
      "MFA Setup",
      "Device Setup",
      "Password Setup",
      "Private Browsing",
      "Recovery Email",
    ],
  },
  {
    title: "Securing Apple Accounts",
    subGuides: [],
  },
  {
    title: "Tracking Devices",
    subGuides: [],
  },
  {
    title: "Securing Social Media Accounts",
    description: `Social media accounts store private messages, photos, and personal connections. If hacked, they can be used to impersonate you or spread harmful content. These guides will help you lock down your profiles.`,
    subGuides: ["Instagram"], // ✅ You want this label
  },
  {
    title: "Securing Your Children’s Digital Safety",
    subGuides: [],
  },
];

// ✅ Match route to the plain Instagram title
const subGuidePaths = {
  "MFA Setup": "/SecuringGoogleAccount/mfa/mfa1",
  "Device Setup": "/device1",
  "Password Setup": "/password1",
  "Instagram": "/instagram/step1", // ✅ Routes to step 1
};

const LearningGuides = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleNavigate = (subguideTitle) => {
    const path = subGuidePaths[subguideTitle];
    if (path) {
      navigate(path);
    } else {
      alert("Guide not available yet.");
    }
  };

  return (
    <div className="guides-container">
      <h2 className="page-title">Learning Guides</h2>
      <label className="search-label">Search guides</label>
      <div className="search-bar">
        <input type="text" placeholder=" " />
        <span className="search-icon">🔍</span>
      </div>

      {guidesData.map((guide, index) => (
        <div className="guide" key={index}>
          <div className="guide-header" onClick={() => handleToggle(index)}>
            <h3>{guide.title}</h3>
            <span className="arrow">{openIndex === index ? "▾" : "▸"}</span>
          </div>

          {openIndex === index && (
            <div className="guide-details">
              {guide.description && <p>{guide.description}</p>}
              {guide.subGuides?.length > 0 && (
                <div className="subguides">
                  {guide.subGuides.map((sub, i) => (
                    <div className="subguide" key={i}>
                      <span className="subguide-title">{sub}</span>
                      <button onClick={() => handleNavigate(sub)}>Guide →</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default LearningGuides;
