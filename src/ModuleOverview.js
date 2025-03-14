import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ModuleOverview.css";

const ModuleOverview = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();

  const moduleContent = {
    0: {
      title: "Securing Your Google Account",
      image: "/img/GoogleAccOverview.png", 
      imageSource: "https://guidebooks.google.com/android/getstarted/keepyourgoogleaccountsecure",
      content: `
        Your Google account is connected to many personal details, including emails, saved passwords, and location history. Keeping it secure is essential for protecting your privacy and preventing unauthorized access.

        This module will introduce:
        ○ Why securing your Google account matters
        ○ How accounts can be accessed without your knowledge
        ○ Ways Google tracks your activity and what that means for your privacy

        Understanding these risks will help you take control of your account security as you move through the module.
      `,
    },
    // Add more modules
  };

  const module = moduleContent[moduleId];

  if (!module) {
    return <div>Module not found</div>;
  }

  return (
    <div className="overview-container">
      <button className="close-btn" onClick={() => navigate("/modules")}>X</button>
      <h1 className="title">{module.title}</h1>
      {module.image && ( 
        <div className="image-container">
          <img
            src={module.image}
            alt="Module Image"
            className="module-image"
          />
          <p className="image-credit">
            Image: <a href={module.imageSource} target="_blank" rel="noopener noreferrer">Google Guidebooks</a>
          </p>
        </div>
      )}
      <div className="overview-content">
        {module.content.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default ModuleOverview;
