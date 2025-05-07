import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from '../../ProgressBar';
import "./SecureBrowsing.css";

const Location = () => {
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
    const currentStep = 5;


    return (
        <div className="secure-container">
            {/* Updated ProgressBar with dynamic steps */}
            <ProgressBar
                currentStep={currentStep}
                totalSteps={totalSteps}
                stepLabels={stepLabels}
            />


            <button className="close-btn" onClick={() => navigate("/guides")}>
                X
            </button>

            <div className="step-info">
                <h3>Step 1</h3>
                <p>Scroll down tin the <b>“Data & Privacy”</b> until you locate the <b>Location sharing</b> tab.
                    Click an arrow at the side of the tab to manage your <b>Location Sharing</b></p>
            </div>
            <div className="step-info">
                <h3>Step 2</h3>
                <p>Note: <b>Location Sharing</b> works from your phone, so check and disable it in your Google phone settings as well.</p>
            </div>

            <div className="step-image">
                <img src="/img/location_sharing.png" alt="Location Sharing" className="signin-img" />
            </div>

            <div className="secure-navigation">
                <button className="nav-btn back-btn" onClick={() => navigate("/secure-browsing/adds")}> ← Back</button>
                <button className="next-btn" onClick={() => navigate("/secure-browsing/trird-party-apps")}>
                    Next →
                </button>
            </div>
        </div>
    );
};

export default Location;