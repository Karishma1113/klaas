import "./Home.css";

function NovaaWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container hero-section">
        <div className="hero-content">
          <h1 className="hero-title">reclaim your digital presence</h1>
          <h2 className="hero-subtitle">
            with <span className="highlight">novaa</span> — navigating online
            vulnerability and achieving autonomy
          </h2>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img
              src="/img/home2.png"
              alt="Person with digital elements illustration"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mission-section">
        <p className="mission-text">
          Our platform is dedicated to supporting survivors of
          relationship-based harm by providing{" "}
          <span className="highlight-diff">resources</span> and{" "}
          <span className="highlight-diff">guidance</span> to{" "}
          <span className="highlight-diff">enhance your digital safety</span>{" "}
          and{" "}
          <span className="highlight-diff">reclaim your online presence</span>.
        </p>
        <p className="mission-text secondary">
          Each step of that journey is supported by lessons and guides for key
          areas of concern, created to help you feel informed and in control.
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
        <div className="digital-safety-highlight">
          <h2 className="section-title">
            The Importance of Digital Safety and Your Online Presence
          </h2>
          <p className="section-description">
            It's easy to overlook just how quickly our personal information can
            spread, sometimes without us even realizing it. A casual post, a
            shared location, or a forgotten account can open doors for others to
            see more of your life than you intended or would like. That loss of
            control can feel overwhelming, even frightening.
          </p>

          <p className="section-description">
            We understand how important it is to feel safe and secure,
            especially online. That's why we've created simple, step-by-step
            tools and lessons designed to support you. You don’t need experience
            with technology as we created guides for real life and for real
            people to learn from.
          </p>

          <p className="section-description">
            {" "}
            Whether you're taking your first steps or looking for peace of mind,
            these resources are here to help you feel more in control. By
            learning how to protect your privacy, you’re not just securing your
            information. You’re reclaiming your sense of safety, confidence, and
            freedom.
          </p>
          <div className="safety-image-container">
            <img
              src="/img/home-digital-safety2.png"
              alt="Person with digital security elements"
              className="safety-image"
            />
          </div>
        </div>

        <h2 className="section-heading secondary">
          Understanding Digital Harm and How to Protect Yourself
        </h2>
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
            <h3 className="scenario-title">
              Is someone accessing your accounts without permission?
            </h3>
            <div className="scenario-content">
              <p className="scenario-label">This might look like:</p>
              <p className="scenario-description">
                Someone getting into your email, social media, or cloud storage
                to view or steal personal information.
              </p>
            </div>
          </div>

          {/* Scenario 2 */}
          <div className="scenario">
            <h3 className="scenario-title">
              Do you feel like you are being watched or followed?
            </h3>
            <div className="scenario-content">
              <p className="scenario-label">This might look like:</p>
              <p className="scenario-description">
                Using GPS, shared apps, or social media to follow where you go.
              </p>
            </div>
          </div>

          {/* Scenario 3 */}
          <div className="scenario">
            <h3 className="scenario-title">
              Has someone shared your private information online?
            </h3>
            <div className="scenario-content">
              <p className="scenario-label">This might look like:</p>
              <p className="scenario-description">
                Posting your name, address, or other details to shame, scare, or
                hurt you (also known as doxxing).
              </p>
            </div>
          </div>

          {/* Scenario 4 */}
          <div className="scenario">
            <h3 className="scenario-title">
              Are you worried someone is secretly reading or listening in?
            </h3>
            <div className="scenario-content">
              <p className="scenario-label">This might look like:</p>
              <p className="scenario-description">
                Using hidden apps or tools that read your messages, track your
                calls, or view your web history without your knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="container footer-section">
        <p className="footer-text">
          You are not alone. You deserve safety, privacy, and support.
        </p>
        <button className="footer-button">Learn more</button>
      </section>
    </div>
  );
}

export default NovaaWebsite;
