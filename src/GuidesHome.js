import React, { useState } from 'react';
import './Guides.css';

const guidesData = [
  {
    title: 'Securing Google Accounts',
    description: `Your Google account is connected to many personal details, including emails, saved passwords, and location history. Keeping it secure is essential for protecting your privacy and preventing unauthorized access.

These guides will introduce why securing your Google account matters, how accounts can be accessed without your knowledge, and ways Google tracks your activity and what that means for your privacy.

Understanding these risks will help you take control of your account security as you move through the guides.`,
    subGuides: ['MFA Setup', 'Device Setup', 'Password Setup', 'Private Browsing', 'Recovery Email'],
  },
  {
    title: 'Securing Apple Accounts',
  },
  {
    title: 'Tracking Devices',
  },
  {
    title: 'Securing Social Media Accounts',
  },
  {
    title: "Securing Your Children’s Digital Safety",
  },
];

const LearningGuides = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="guides-container">
      <h2 className="page-title">Learning Guide</h2>
      <label className="search-label">Search guides</label>
      <div className="search-bar">
        <input type="text" placeholder=" " />
        <span className="search-icon">🔍</span>
      </div>

      {guidesData.map((guide, index) => (
        <div className="guide" key={index}>
          <div className="guide-header" onClick={() => handleToggle(index)}>
            <h3>{guide.title}</h3>
            <span className="arrow">{openIndex === index ? '▾' : '▸'}</span>
          </div>
          {openIndex === index && guide.description && (
            <div className="guide-details">
              <p>{guide.description}</p>
              <div className="subguides">
                {guide.subGuides.map((sub, i) => (
                  <div className="subguide" key={i}>
                    <span>{sub}</span>
                    <button>Guide →</button>
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
