import "./Home.css"

function NovaaWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container hero-section">
        <div className="hero-content">
          <h1 className="hero-title">reclaim your digital presence</h1>
            <h2 className="hero-subtitle">
              with <span className="highlight">novaa</span> — navigating online vulnerability and achieving autonomy
            </h2>

        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img
              src="/img/home-graphic.png"
              alt="Person with digital elements illustration"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mission-section">
        <p className="mission-text">
          Our platform is dedicated to supporting survivors of relationship-based harm by providing{" "}
          <span className="highlight-diff">resources</span> and <span className="highlight-diff">guidance</span> to{" "}
          <span className="highlight-diff">enhance your digital safety</span> and{" "}
          <span className="highlight-diff">reclaim your online presence</span>.
        </p>
        <p className="mission-text secondary">
          Each step of that journey is supported by lessons and guides for key areas of concern, created to help you
          feel informed and in control.
        </p>
        <div className="action-buttons">
          <a href="/resources" className="action-button">
            Explore resources <span className="arrow">→</span>
          </a>
          <a href="/guides" className="action-button">
            Explore lessons & guides <span className="arrow">→</span>
          </a>
        </div>
      </section>

      {/* Digital Safety Section */}
      <section className="container safety-section">
        <h2 className="section-title">The Importance of Digital Safety and Your Online Presence</h2>
        <p className="section-description">
          It's not always obvious how quickly personal details can be accessed or shared without your knowledge. We
          offer simple tools and guides to help you stay aware, feel more secure, and protect your privacy. Learning
          these steps can help you feel more in control and reduce future risks.
        </p>
        <div className="safety-image-container">
          <img
            src="/img/home-digital-safety.png"
            alt="Person with digital security elements"
            className="safety-image"
          />
        </div>

        <h2 className="section-title secondary">Understanding Digital Harm and How to Protect Yourself</h2>
        <div className="protection-image-container">
          <img
            src="/img/home-digital-harm.png"
            alt="Digital security illustration"
            className="protection-image"
          />
        </div>

        {/* Digital Harm Scenarios */}
        <div className="scenarios-grid">
          {/* Scenario 1 */}
          <div className="scenario">
            <h3 className="scenario-title">Is someone accessing your accounts without permission?</h3>
            <div className="scenario-content">
              <p className="scenario-label">This might look like:</p>
              <p className="scenario-description">
                Someone getting into your email, social media, or cloud storage to view or steal personal information.
              </p>
            </div>
          </div>

          {/* Scenario 2 */}
          <div className="scenario">
            <h3 className="scenario-title">Do you feel like you are being watched or followed?</h3>
            <div className="scenario-content">
              <p className="scenario-label">This might look like:</p>
              <p className="scenario-description">
                Using GPS, shared apps, or social media to follow where you go.
              </p>
            </div>
          </div>

          {/* Scenario 3 */}
          <div className="scenario">
            <h3 className="scenario-title">Has someone shared your private information online?</h3>
            <div className="scenario-content">
              <p className="scenario-label">This might look like:</p>
              <p className="scenario-description">
                Posting your name, address, or other details to shame, scare, or hurt you (also known as doxxing).
              </p>
            </div>
          </div>

          {/* Scenario 4 */}
          <div className="scenario">
            <h3 className="scenario-title">Are you worried someone is secretly reading or listening in?</h3>
            <div className="scenario-content">
              <p className="scenario-label">This might look like:</p>
              <p className="scenario-description">
                Using hidden apps or tools that read your messages, track your calls, or view your web history without
                your knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="container footer-section">
        <p className="footer-text">You are not alone. You deserve safety, privacy, and support.</p>
        <button className="footer-button">Learn more</button>
      </section>
    </div>
  )
}

export default NovaaWebsite
