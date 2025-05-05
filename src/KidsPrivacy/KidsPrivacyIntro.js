import React from "react";
import { useNavigate } from "react-router-dom";
import "./KidsPrivacy.css";

const KidsPrivacyIntro = () => {
  const navigate = useNavigate();

  return (
    <div className="kidsintro-container">
      <button className="close-btn" onClick={() => navigate("/guides")}>X</button>

      {/* Image at top */}
      <div className="intro-image-container">
        <img src="/img/kids-safety-intro.png" alt="Child using tablet with stuffed animals" className="intro-image" />
      </div>

      {/* Text underneath */}
      <div className="kidsintro-content">
        <h1 className="kidsintro-title">Securing Kids’ Devices & Talking About Online Safety</h1>

        <h2 className="kidsintro-subtitle">Purpose of This Module</h2>
        <p>
          This guide is designed to help parents keep their child’s online activity safe and private.
          Sometimes, others may try to monitor, contact, or track a child through apps, games, or shared devices.
          This module will guide you through steps to prevent that and support your child’s digital safety.
        </p>

        <h2 className="kidsintro-subtitle">What You Will Learn</h2>
        <ul>
          <li>Ways someone might track or contact a child through online platforms</li>
          <li>How to adjust settings to keep accounts private and secure</li>
          <li>How to talk to kids about online safety in a way they understand</li>
          <li>How to turn off location sharing on a child’s device</li>
        </ul>

        <h2 className="kidsintro-subtitle">Section 1: How Others May Track a Child’s Online Activity</h2>
        <ul>
          <li>📍 <strong>Snapchat Snap Map</strong><br />Shows a child’s real-time location if location sharing is turned on.</li>
          <li>📍 <strong>iPad/iPhone Location Settings</strong><br />Others with shared accounts or Family Sharing can view the child’s location.</li>
          <li>📍 <strong>Gaming & Social Media</strong><br />Chat features and friends lists may allow others to message or follow your child.</li>
        </ul>
      </div>
    </div>
  );
};

export default KidsPrivacyIntro;
