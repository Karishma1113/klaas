import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from '../../ProgressBar';
import "./SecureBrowsing.css";

const Autosave = () => {
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
    const currentStep = 2;


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

            <div className="secure-content">
                <div className="step-info">
                    <h3>Step 1</h3>
                    <p>Go to the <b>“Data & Privacy”</b> tab in your account settings.</p>
                </div>

                <div className="step-image">
                    <img src="/img/Data_and_Privacy.png" alt="Data and Privacy" className="signin-img" />
                </div>

                <div className="step-info">
                    <h3>Step 2</h3>
                    <p>Under <b>“History Settings”</b>, click each section (e.g., <b>“Web & App Activity”</b>) and toggle off activity tracking.</p>
                </div>

                <div className="step-image">
                    <img src="/img/web_activity.png" alt="Web Activity Data" />
                </div>

                <div className="secure-navigation">
                    <button className="nav-btn back-btn" onClick={() => navigate("/secure-browsing")}> ← Back</button>
                    <button className="next-btn" onClick={() => navigate("/secure-browsing/search")}>
                        Next →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Autosave;