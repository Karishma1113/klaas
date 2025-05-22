import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from '../../ProgressBar';
import "./GoogleSearchSettings.css";

const DarkWebReport = () => {
    const navigate = useNavigate();

    const stepLabels = [
        "Overview",
        "Google Scan",
        "Submitting Removal request",
        "Dark web Report",
    ];

    const totalSteps = stepLabels.length;
    const currentStep = 4;


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
                <p>On your computer, go to <a href="https://myactivity.google.com/dark-web-report?utm_campaign=dwr_helpcenter" target="_blank" rel="noopener noreferrer">Dark web report</a>.</p>
            </div>

            <div className="step-info">
                <h3>Step 2</h3>
                <p>Click <b>“Set up monitoring.”</b></p>
            </div>

            <div className="step-info">
                <h3>Step 3</h3>
                <p>You'll be asked to confirm which personal information (like your email or address) you want monitored.</p>
            </div>

            <div className="step-info">
                <h3>Step 4</h3>
                <p>Google will scan dark web sources and alert you if your info appears in any data breaches or leaks.</p>
            </div>

            <div className="secure-navigation">
                <button className="nav-btn back-btn" onClick={() => navigate("/google-search-settings/removal-request")}> ← Back</button>
            </div>
        </div>
    );
};

export default DarkWebReport;