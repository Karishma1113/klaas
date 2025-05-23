import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from '../../ProgressBar';
import "./GoogleSearchSettings.css";

const Overview = () => {
    const navigate = useNavigate();

    const stepLabels = [
        "Overview",
        "Google Scan",
        "Submitting Removal request",
        "Dark web Report",
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
                Monitoring what shows up about you in Google searches is crucial when dealing with a romantic partner
                who might not respect your boundaries. If too much personal information—like your workplace,
                home address, or social profiles—is easy to find, it can give them ways to track your movements,
                show up uninvited, or pressure you in uncomfortable ways.
                Being aware of your digital footprint helps you limit how much access someone can gain to your private life,
                especially if you start to feel unsafe or unsure about their intentions.

            </p>

            <h3 className="mfa-subtitle">How Can You Protect Your Personal Information from Being Discovered Online?</h3>
            <ul className="mfa-list">
                <li>○ Setting up Google Scan</li>
                <li>○ Submitting Information removal Requests</li>
                <li>○ Setting up Dark Web Report</li>
            </ul>

            <div className="mfa-navigation">
                <div style={{ visibility: "hidden" }}>
                    <button className="back-btn">← Back</button>
                </div>
                <button className="next-btn" onClick={() => navigate("/google-search-settings/google-scan")}>
                    Next →
                </button>
            </div>
        </div>
    );
};

export default Overview;