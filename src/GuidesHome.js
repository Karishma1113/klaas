import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Guides.css";

const guidesData = [
  {
    title: "Securing Google Accounts",
    subGuides: [
      "Multi-Factor Authentication",
      "Device Setup",
      "Password Setup",
      "Secure Browsing",
      "Google Search Settings"
    ],
  },
  {
    title: "Securing Apple Accounts",
    subGuides: [
      "Two-Factor Authentication",
      "Change Password",
      "Find My iPhone + Location Sharing",
      "Stolen/Lost Device Protection",
      "If Account is Already Compromised"
    ],
  },
  {
    title: "Securing Social Media Accounts",
    subGuides: ["Instagram", "Facebook", "Snapchat"],
  },
  {
    title: "Tracking Devices",
    subGuides: ["Android", "Apple", "GPS Trackers"],
  },
  {
    title: "Securing Your Children’s Digital Safety",
    subGuides: [
      "Turn Off Location Tracking",
      "Snapchat Ghost Mode",
      "Review Family Sharing Settings",
    ],
  },
  }
];

const subGuidePaths = {
  // Google
  "Multi-Factor Authentication": "/SecuringGoogleAccount/mfa/mfa1",
  "Device Setup": "/securinggoogleaccount/device/device1",
  "Password Setup": "/securinggoogleaccount/password/password1",
  "Secure Browsing": "/securinggoogleaccount/secure-browsing",
  "Google Search Settings": "/securinggoogleaccount/googlesearchsettings/overview",

  // Apple
  "Two-Factor Authentication": "/AppleAccounts/2FactorAuth/TwoFA1",
  "Stolen/Lost Device Protection": "/AppleAccounts/StolenDeviceProtection/StolenDevice1",

  // Social Media
  "Instagram": "/instagram/step1",
  "Facebook": "/facebook/step1",
  "Snapchat": "/snapchat/step1",

  // Tracking
  "Android": "/tracking/step1a",
  "Apple": "/tracking/step2a",
  "GPS Trackers": "/tracking/step3a",

  // Kids Privacy
  "Turn Off Location Tracking": "/KidsPrivacy/Intro",
  "Snapchat Ghost Mode": "/KidsPrivacy/SnapModule1",
  "Review Family Sharing Settings": "/KidsPrivacy/FamilyModule1",
};

const GuidesHome = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleNavigate = (subTitle) => {
    const path = subGuidePaths[subTitle];
    if (path) {
      navigate(path);
    } else {
      alert("Guide not available yet.");
    }
  };

  return (
    <div className="guides-container">
      <h2 className="page-title">Learning Guides</h2>
      {guidesData.map((guide, index) => (
        <div className="guide" key={index}>
          <div className="guide-header" onClick={() => handleToggle(index)}>
            <h3>{guide.title}</h3>
            <span className="arrow">{openIndex === index ? "▾" : "▸"}</span>
          </div>
          {openIndex === index && (
            <div className="guide-details">
              {guide.subGuides.map((sub, i) => (
                <div className="subguide" key={i}>
                  <span className="subguide-title">{sub}</span>
                  <button onClick={() => handleNavigate(sub)}>Guide →</button>
                </div>
              ))}
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default GuidesHome;
