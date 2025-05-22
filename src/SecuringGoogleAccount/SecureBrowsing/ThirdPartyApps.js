import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from '../../ProgressBar';
import "./SecureBrowsing.css";

const ThirdPartyApps = () => {
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
    const currentStep = 6;


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


            <h3>Review Connected Apps:</h3>
            <ul className="secure-list">
                <li>○ In the “Security” tab, under “Third-party apps with account access,” review apps and services connected to your account</li>
                <li>○ Remove any that you no longer use or recognize</li>
            </ul>

            <div className="step-image-row">
                <img src="/img/device5a.png" alt="Third-party apps list" />
                <img src="/img/device5b.png" alt="LinkedIn connected app view" />
            </div>

            <div className="secure-navigation">
                <button className="back-btn" onClick={() => navigate("/secure-browsing/location")}>← Back</button>
                <button className="next-btn" onClick={() => navigate("/secure-browsing/clearing-browsing-history")}>
                    Next →
                </button>
            </div>
        </div>
    );
};

export default ThirdPartyApps;