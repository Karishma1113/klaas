import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./GuideOverview.css";

const GuideOverview = () => {
  const { guideId } = useParams();
  const navigate = useNavigate();

  const guideContent = {
    0: {
      title: "Securing Your Google Account",
      image: "/img/GoogleAccOverview.png", 
      imageSource: "https://guidebooks.google.com/android/getstarted/keepyourgoogleaccountsecure",
      content: `
        Your Google account is connected to many personal details, including emails, saved passwords, and location history. Keeping it secure is essential for protecting your privacy and preventing unauthorized access.

        This guide will introduce:
        ○ Why securing your Google account matters
        ○ How accounts can be accessed without your knowledge
        ○ Ways Google tracks your activity and what that means for your privacy

        Understanding these risks will help you take control of your account security as you move through the guide.
      `,
    },
    // Add more guides
  };

  const guide = guideContent[guideId];

  if (!guide) {
    return <div>Guide not found</div>;
  }

  return (
    <div className="overview-container">
      <button className="close-btn" onClick={() => navigate("/guides")}>X</button>
      <h1 className="title">{guide.title}</h1>
      {guide.image && ( 
        <div className="image-container">
          <img
            src={guide.image}
            alt="Guide Image"
            className="guide-image"
          />
          <p className="image-credit">
            Image: <a href={guide.imageSource} target="_blank" rel="noopener noreferrer">Google Guidebooks</a>
          </p>
        </div>
      )}
      <div className="overview-content">
        {guide.content.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default GuideOverview;
