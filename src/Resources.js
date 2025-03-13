import React from "react";
import "./Resources.css";

const Resources = () => {
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
          <p>
            📞 <strong>National Domestic Violence Hotline –</strong> (800) 799-7233
            <br />
            💬 Call, chat, or text 24/7 | <strong>TTY:</strong> (800) 787-3224
          </p>
          <p>
            📞 <strong>Teen Dating Violence Hotline –</strong> (866) 331-9474
            <br />
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
          <p>Shelters are free—no fees required</p>
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
            <li>✔️ Direct connection to a local domestic violence program.</li>
            <li>✔️ Help finding resources like shelter, advocacy, counseling, and legal assistance.</li>
            <li>✔️ Crisis support, safety planning, and emotional assistance.</li>
            <li>✔️ Hotline advocates available in 170+ languages via interpreter services.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resources;
