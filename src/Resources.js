import React, { useState, useRef } from "react";
import "./Resources.css";

const Resources = () => {
  const [showMore, setShowMore] = useState(false);
  const [activeTab, setActiveTab] = useState("domestic");
  const moreResourcesRef = useRef(null);

  const handleNext = () => {
    setShowMore(true);
    setTimeout(() => {
      moreResourcesRef.current.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <div className="resources-container">
      {/* Top Filters */}
      <div className="filters">
        <button className="filter-button">🌍 English ⬇️</button>
        <button className="filter-button">📍 Location ⬇️</button>
        <button className="filter-button">📑 Topics ⬇️</button>
        <button className="filter-button">🔎 Search Resources</button>
      </div>

      {/* Main Title */}
      <h1 className="resources-title">Supporting Survivors, Connecting Resources</h1>

      {/* Emergency Hotlines Section */}
      <section className="resource-section">
        <h2>🚨 Emergency Hotlines:</h2>
        <div className="hotlines-list">
          <p>📞 <strong>Domestic Violence Hopeline –</strong> (877) 737-0242</p>
          <p>📞 <strong>National Domestic Violence Hotline –</strong> (800) 799-7233 <br />
             💬 Call, chat, or text 24/7 | <strong>TTY:</strong> (800) 787-3224
          </p>
          <p>📞 <strong>Teen Dating Violence Hotline –</strong> (866) 331-9474 <br />
             💬 Call, chat, or text 24/7
          </p>
          <p>📞 <strong>National Domestic Violence Hotline Deaf Services:</strong></p>
          <div className="sub-list">
            <p>🔹 <strong>Videophone (24/7):</strong> (855) 812-1001</p>
            <p>🔹 <strong>TTY:</strong> (800) 787-3224</p>
            <p>🔹 <strong>Live Chat:</strong> Available 24/7</p>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="resource-box">
        <h2>📍 What to Expect When Seeking Help</h2>
        <div className="info-box">
          <h3>🏡 If You Go to a Shelter</h3>
          <ul>
            <li>✔️ Family accommodations—children stay with parents in the same room.</li>
            <li>✔️ Support for pets—service animals allowed; pet accommodations can be arranged.</li>
            <li>✔️ Safety & privacy measures—locations are confidential, visitors are not allowed.</li>
            <li>✔️ Basic necessities provided—food, clothing, and toiletries for the first few days.</li>
            <li>✔️ Access to laundry, computers, and emergency phones.</li>
          </ul>
        </div>

        <div className="info-box">
          <h3>📞 If You Call a Hotline</h3>
          <ul>
            <li>Direct connection to a local domestic violence program.</li>
            <li>Help finding resources like shelter, advocacy, counseling, and legal assistance.</li>
            <li>Crisis support, safety planning, and emotional assistance.</li>
            <li>Hotline advocates available in 170+ languages via interpreter services.</li>
          </ul>
        </div>
      </section>

      {/* NEXT BUTTON */}
      {!showMore && (
        <div className="next-section">
          <button className="next-button" onClick={handleNext}>Next ⏭️</button>
        </div>
      )}

      {/* ADDITIONAL RESOURCES (Revealed on "Next" Click) */}
      {showMore && (
        <div ref={moreResourcesRef}>
          {/* Tabs Navigation */}
          <div className="tabs-container">
            <button
              className={`tab-button ${activeTab === "domestic" ? "active" : ""}`}
              onClick={() => setActiveTab("domestic")}
            >
              Domestic Violence Support
            </button>
            <button
              className={`tab-button ${activeTab === "mental" ? "active" : ""}`}
              onClick={() => setActiveTab("mental")}
            >
              Mental Health & Recovery
            </button>
            <button
              className={`tab-button ${activeTab === "assault" ? "active" : ""}`}
              onClick={() => setActiveTab("assault")}
            >
              Sexual Assault & Elder Abuse
            </button>
          </div>

          {/* Domestic Violence Support */}
          {activeTab === "domestic" && (
            <div className="tab-content">
              <h2>🏠 Domestic Violence Support</h2>
              <div className="grid-container">
                <div className="resource-box">
                  <h3>🏠 Local DV Shelters & Support</h3>
                  <p>📌 <strong>New Beginnings (Seattle)</strong> 🔗 <a href="#">newbegin.org</a> | 📞 (206) 522-9472</p>
                  <p>📌 <strong>LifeWire (East King County)</strong> 🔗 <a href="#">lifewire.org</a> | 📞 (425) 746-1940 | ☎️ (800) 827-8840</p>
                </div>

                <div className="resource-box">
                  <h3>🌎 Culturally-Specific Support</h3>
                  <p>📌 <strong>Asian Pacific Islander Chaya</strong> 🔗 <a href="#">apichaya.org</a> | 📞 (206) 325-0325 | ☎️ (877) 922-4292</p>
                </div>

                <div className="resource-box">
                  <h3>⛪ Faith-Based Resources</h3>
                  <p>📌 <strong>Northwest Family Life (Christian)</strong> 🔗 <a href="#">northwestfamilylife.org</a> | 📞 (206) 363-9601 | ☎️ (800) 244-5767</p>
                </div>
              </div>
            </div>
          )}

          {/* Mental Health & Recovery */}
          {activeTab === "mental" && (
            <div className="tab-content">
              <h2>🧠 Mental Health & Recovery</h2>
              <p>📌 Resources coming soon...</p>
            </div>
          )}

          {/* Sexual Assault & Elder Abuse */}
          {activeTab === "assault" && (
            <div className="tab-content">
              <h2>⚖️ Sexual Assault & Elder Abuse Support</h2>
              <p>📌 Resources coming soon...</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Resources;
