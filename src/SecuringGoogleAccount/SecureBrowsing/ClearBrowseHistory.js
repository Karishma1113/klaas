import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from '../../ProgressBar';
import "./SecureBrowsing.css";

const ClearHistory = () => {
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
    const currentStep = 7;


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
                <p>Click the <b>three-dot menu</b> in the top-right of Chrome.</p>
            </div>

            <div className="step-image">
                <img src="/img/three_dot_menu.png" alt="Three Dot Menu" className="signin-img" />
            </div>
            <div className="step-info">
                <h3>Step 2</h3>
                <p>Go to <b>“Settings”</b> → scroll down to <b>“Privacy and Security.”</b></p>
            </div>

            <div className="step-image">
                <img src="/img/privacy_and_security.png" alt="Privacy and Security" className="signin-img" />
            </div>

            <div className="step-info">
                <h3>Step 3</h3>
                <p>Click <b>“Delete browsing data.”</b></p>
            </div>

            <div className="step-image">
                <img src='/img/delete_browse_data.png' alt="Delete Browsing Data" />
            </div>

            <div className="step-info">
                <h3>Step 4</h3>
                <p>Choose your desired <b>time range </b>. You can also use <b>“Basic”</b> or <b>“Advanced” </b>tabs to select the types of data to delete.(e.g., last hour, last 7 days).</p>
            </div>

            <div className="step-image">
                <img src="/img/delete_data_tab.png" alt="Delete Data Tab" className="signin-img" />
            </div>

            <div className="secure-navigation">
                <button className="nav-btn back-btn" onClick={() => navigate("/secure-browsing/location")}> ← Back</button>
                <button className="next-btn" onClick={() => navigate("/secure-browsing/complete")}>
                    Next →
                </button>
            </div>
        </div>
    );
};

export default ClearHistory;