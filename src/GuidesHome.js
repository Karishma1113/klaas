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
      "Multi-Factor Authentication",
      "Device Setup",
      "Password Setup",
      "Secure Browsing",
      "Google Search Settings",
    ],
  },
  {
    title: "Securing Apple Accounts",
    description: `Apple accounts are used to sign into  Apple services such as the App Store, iCloud, Apple Music, iMessage, FaceTime, and more. They also store sensitive information like payment methods, contact details, and personal data, including photos and documents. Protecting your Apple account is important to prevent unauthorized access and keep your private information secure.

    These guides will explain why securing your Apple account matters and walk you through the steps to do so effectively.`,
    subGuides: [
      "Two-Factor Authentication",
      "Find My iPhone",
      "Location Sharing",
      "Stolen/Lost Device Protection",
      "If Account is Already Compromised",
    ],
  },
  {
    title: "Tracking Devices",
  },
  {
    title: "Securing Social Media Accounts",
  },
  {
    title: "Securing Your Children’s Digital Safety",
  },
];

// Map subguide titles to their respective paths
const subGuidePaths = {
  "Multi-Factor Authentication": "/SecuringGoogleAccount/mfa/mfa1",
  // add more like:
  'Device Setup': '/securinggoogleaccount/device/device1',
  'Password Setup': '/securinggoogleaccount/password/password1',
  'Secure Browsing': "/securinggoogleaccount/secure-browsing",
  'Google Search Settings': "/securinggoogleaccount/googlesearchsettings/overview",
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
          {openIndex === index && guide.description && (
            <div className="guide-details">
              <p>{guide.description}</p>
              <div className="subguides">
                {guide.subGuides.map((sub, i) => (
                  <div className="subguide" key={i}>
                    <span className="subguide-title">{sub}</span>
                    <button onClick={() => handleNavigate(sub)}>Guide →</button>
                  </div>
                ))}
              </div>
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default LearningGuides;
