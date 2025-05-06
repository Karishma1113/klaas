import React from 'react';
import { useNavigate } from 'react-router-dom';
import './socialmedia.css';

export default function Instagram2() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/instagram/step3');
  };

  return (
    <div className="module">
      <div className="top-nav">
        <div className="tabs">
          <div className="tab">Overview</div>
          <div className="tab active">2FA</div>
          <div className="tab">Login Activity</div>
          <div className="tab">Remove Apps</div>
          <div className="tab">App Access</div>
        </div>
        <button className="leave-btn">Leave Site</button>
      </div>

      <div className="header">
        <h2>Enable Two-Factor Authentication (2FA)</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram"
          className="logo"
        />
      </div>

      <p>
        Enabling Two-Factor Authentication (2FA) adds a second layer of protection to your Instagram account.
        Even if someone has your password, they won’t be able to log in without the second factor.
      </p>

      <ul>
        <li>
          Go to <strong>Settings</strong> &gt; <strong>Account center</strong> &gt; <strong>Password and Security</strong> &gt; <strong>Two-Factor Authentication</strong>
        </li>
        <li>Choose the account to make changes and follow prompt.</li>
        <li>Tap <strong>Get Started</strong>, then choose your preferred method for 2FA:</li>
        <ul>
          <li><strong>Authentication App</strong></li>
          <li><strong>Text Message (SMS)</strong></li>
        </ul>
        <li>Follow the prompts to complete the setup.</li>
      </ul>

      <div className="steps-container">
        <div className="step-block">
          <p><strong>Step 1:</strong> Open the Instagram app and go to your profile. Tap the three horizontal lines (☰) in the top-right corner to open the menu. Then go to Settings ➝ Security ➝ Change Password and enter your new password</p>
          <img src="/img/instagram1.png" alt="Step 1" className="step-img" />
          </div>
          <div className="step-block">
          <p>
            <strong> Step 2:</strong> Go to <strong>Settings</strong> ➝ <strong>Account center</strong> ➝ <strong>Password and Security</strong> ➝ <strong/>
          </p>
          <img src="/img/instagram2.png" alt="Step 1a" className="step-img" />
        </div>
        <div className="arrow">➜</div>
        <p><strong>Step 3 :</strong>  Select Two-Factor Authentication .</p>
        <img src="/img/instagram 4.png" alt="Step 2" className="step-img" />

        <div className="step-block">
          <p><strong>Step 4:</strong> Complete the setup and confirm trusted devices.</p>
          <img src="/img/instagram5.png" alt="Step 3" className="step-img" />
        </div>
      </div>

      <div className="nav-next">
        <button className="next-btn" onClick={handleNext}>Next →</button>
      </div>
    </div>
  );
}

