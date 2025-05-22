import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from '../../ProgressBar';
import "./SecureBrowsing.css";

const SecureBrowsing = () => {
    const navigate = useNavigate();

    const stepLabels = [
        "Overview",
        "AutoSave",
        "Search suggestions",
        "Personalized Adds",
        "Location Sharing",
        "Third Party Apps",
        "Clearing Browsing History",
        "Complete",
    ];

    const totalSteps = stepLabels.length;
    const currentStep = 1;


    return (
        <div className="secure-container">
            {/* Updated ProgressBar with dynamic steps */}
            <ProgressBar
                currentStep={currentStep}
                totalSteps={totalSteps}
                stepLabels={stepLabels}
            />


            <button className="close-btn" onClick={() => navigate("/guides")}>
                Close Guide
            </button>

            <h1 className="mfa-title">
                Setting Up Private Browsing for Your Google Account
            </h1>

            <p className="mfa-desc">
                Securing your browsing history is important because it contains a detailed record of your online activity,
                including the websites you visit, searches you perform, and even sensitive information like medical research,
                financial activity, or personal interests.
            </p>

            <p className="mfa-desc">
                In worse cases, someone you trust might use that information to embarrass you,
                invade your privacy, or control your behavior.
                Protecting your browsing history helps you maintain boundaries and control over your personal life.
            </p>

            <h3 className="mfa-subtitle">How Can You Protect Your Browsing History?</h3>
            <ul className="mfa-list">
                <li>○ Turn off Autosave for Google Searches</li>
                <li>○ Remove Search Suggestions</li>
                <li>○ Turn off Personalized Adds</li>
                <li>○ Stop Location sharing</li>
            </ul>

            <div className="mfa-navigation">
                <div style={{ visibility: "hidden" }}>
                    <button className="back-btn">← Back</button>
                </div>
                <button className="next-btn" onClick={() => navigate("/secure-browsing/autosave")}>
                    Next →
                </button>
            </div>
        </div>
    );
};

export default SecureBrowsing;