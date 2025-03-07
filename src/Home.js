import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-text">
          <h1>
            navigating online vulnerability and achieving autonomy
          </h1>
          <p>
            Our platform is dedicated to supporting domestic violence survivors by providing{" "}
            <span className="highlight">resources</span> and{" "}
            <span className="highlight">guidance</span> to{" "}
            <span className="highlight-2">enhance your digital safety</span> and{" "}
            <span className="highlight-2">reclaim your online presence</span>.
          </p>
        </div>
        <div className="home-graphic">
          <img src="/img/home-graphic.png" alt="Home Graphic" className="home-image" />
        </div>
      </div>

      <div className="content-section">
        <div className="content-box">
          <h2>
            The Importance of Digital Safety and Your Online Presence{" "}
            <span className="purple-ribbon">🎗️</span>
          </h2>
          <div className="info-box">
            Many people don’t realize how easily their personal information can be accessed or how abusers exploit digital tools.
          </div>
          <div className="info-box">
            Learning how to recognize tech-enabled abuse and secure your online presence is crucial for protecting privacy, regaining control, and preventing further harm.
          </div>
        </div>

        <div className="content-box">
          <h2>
            Recognizing Tech-Enabled Abuse and Online Violence{" "}
            <span className="purple-ribbon">🎗️</span>
          </h2>
          <div className="info-box">
            Tracking a location using GPS, social media check-ins, or shared accounts.
          </div>
          <div className="info-box">
            Using spyware or hidden apps to read messages, listen to calls, or monitor browsing history.
          </div>
          <div className="info-box">
            Hacking into email, social media, or cloud storage to access personal information.
          </div>
          <div className="info-box">
            Posting personal information (doxxing) to expose, humiliate, or endanger the survivor.
          </div>
          <button className="learn-more-button">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
