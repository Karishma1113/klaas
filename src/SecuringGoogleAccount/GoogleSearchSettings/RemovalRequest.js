import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from '../../ProgressBar';
import "./GoogleSearchSettings.css";

const RemovalRequest = () => {
    const navigate = useNavigate();

    const stepLabels = [
        "Overview",
        "Google Scan",
        "Submitting Removal request",
        "Dark web Report",
    ];

    const totalSteps = stepLabels.length;
    const currentStep = 3;


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

            <div className="step-info">
                <h3>Step 1</h3>
                <p>Visit the <a href="https://support.google.com/websearch/troubleshooter/9685456?hl=en" target="_blank" rel="noopener noreferrer">Google Content Removal Request Form</a></p>
            </div>

            <div className="step-info">
                <h3>Step 2</h3>
                <p>Under <b>“What do you want to do?”</b> choose:</p>
                <ul className="secure-list">
                    <li>○ “Remove information you see in Google Search”</li>
                    <li>○ Then choose “In Google's search results and on a website” if it's still live on the internet</li>
                    <li>○ Or “In Google’s search results only” if the page is already taken down but still appears in search</li>
                </ul>
            </div>

            <div className="step-info">
                <h3>Step 3</h3>
                <p>Fill in the form with:</p>
                <ul className="secure-list">
                    <li>○ The exact URLs where the info appears</li>
                    <li>○ Screenshots of the content</li>
                    <li>○ The type of info exposed (e.g., phone number, address, etc.)</li>
                </ul>
            </div>

            <div className="step-info">
                <h3>Step 4</h3>
                <p>Submit the request and wait for Google’s response, which usually takes a few days.</p>
            </div>

            <div className="secure-navigation">
                <button className="nav-btn back-btn" onClick={() => navigate("/google-search-settings/google-scan")}> ← Back</button>
                <button className="next-btn" onClick={() => navigate("/google-search-settings/dark-web-report")}>
                    Next →
                </button>
            </div>
        </div>
    );
};

export default RemovalRequest;