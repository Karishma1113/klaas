import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from '../../ProgressBar';
import "./SecureBrowsing.css";

const Adds = () => {
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
                <p>Scroll down in the <b>“Data & Privacy”</b> until you locate the <b>Personalized Adds</b> tab.
                    Click an arrow at the side of the tab to manage your <b>Personalized Adds</b></p>
            </div>

            <div className="step-image">
                <img src="/img/personalized_adds.png" alt="Personalized Adds" className="signin-img" />
            </div>
            <div className="step-info">
                <h3>Step 2</h3>
                <p>For additional security consider installing an <b> Add Block</b> extension on your browser</p>
            </div>

            <div className="secure-navigation">
                <button className="nav-btn back-btn" onClick={() => navigate("/secure-browsing/search")}> ← Back</button>
                <button className="next-btn" onClick={() => navigate("/secure-browsing/location")}>
                    Next →
                </button>
            </div>
        </div>
    );
};

export default Adds;