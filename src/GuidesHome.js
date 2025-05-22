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
      "Google Search Settings"
    ],
  },
  {
    title: "Securing Apple Accounts",
    description: `Apple accounts are used to sign into Apple services such as the App Store, iCloud, Apple Music, iMessage, FaceTime, and more. They also store sensitive information like payment methods, contact details, and personal data, including photos and documents. Protecting your Apple account is important to prevent unauthorized access and keep your private information secure.

These guides will explain why securing your Apple account matters and walk you through the steps to do so effectively.`,
    subGuides: [
      "Two-Factor Authentication",
      "Change Password",
      "Find My iPhone + Location Sharing",
      "Stolen/Lost Device Protection",
    ],
  },
  {
    title: "Securing Social Media Accounts",
    description: `Social media accounts store private messages, photos, and personal connections. If hacked, they can be used to impersonate you or spread harmful content. These guides will help you lock down your profiles.`,
    subGuides: ["Instagram", "Facebook", "Snapchat"],
  },
  {
    title: "Tracking Devices",
    subGuides: ["Android", "Apple", "GPS Trackers"],
  },
  {
    title: "Securing Your Children’s Digital Safety",
    description: `This section is designed to help parents and caregivers keep children safe from digital risks. It includes steps to turn off location tracking, adjust privacy settings, and limit who can see a child's online activity.`,
    subGuides: [
      "Turn Off Location Tracking",
      "Snapchat Ghost Mode",
      "Review Family Sharing Settings",
    ],
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
  "Change Password": "/AppleAccounts/ChangePassword/ChangePassword1",
  "Find My iPhone + Location Sharing": "/AppleAccounts/FindMyandLocation/FindMy1",
  "Stolen/Lost Device Protection": "/AppleAccounts/StolenDeviceProtection/StolenDevice1",
  "If Account is Already Compromised": "/AppleAccounts/StolenDeviceProtection/StolenDevice4",

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
  const [searchQuery, setSearchQuery] = useState("");
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

  const filteredGuides = guidesData
    .map((guide) => {
      const lowerQuery = searchQuery.toLowerCase();
      const matchedSubGuides = guide.subGuides.filter((sub) =>
        sub.toLowerCase().includes(lowerQuery)
      );

      const matchesGuide =
        guide.title.toLowerCase().includes(lowerQuery) ||
        guide.description?.toLowerCase().includes(lowerQuery);

      if (matchesGuide || matchedSubGuides.length > 0) {
        return {
          ...guide,
          subGuides: matchedSubGuides.length > 0 ? matchedSubGuides : guide.subGuides,
        };
      }
      return null;
    })
    .filter(Boolean);

  return (
    <div className="guides-container">
      <h2 className="page-title">Learning Guides</h2>
      <p className="page-description">
        This page contains step-by-step guides to help you secure your digital life.
        Each section covers a different platform or topic and breaks them into
        smaller steps, with visuals to support the process. Click on a topic to
        expand it, then choose a guide to get started.
      </p>

      <label className="search-label">Search guides</label>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search guides..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <span className="search-icon">🔍</span>
      </div>

      {filteredGuides.map((guide, index) => (
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

export default GuidesHome;
