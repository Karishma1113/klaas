import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from '../../ProgressBar';
import "./GoogleSearchSettings.css";

const GoogleScan = () => {
    const navigate = useNavigate();

    const stepLabels = [
        "Overview",
        "Google Scan",
        "Submitting Removal request",
        "Dark web Report",
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
                X
            </button>

            <div className="step-info">
                <h3>Step 1</h3>
                <p>Go to the <a href="https://myactivity.google.com/results-about-you" target="_blank" rel="noopener noreferrer">Results About You page</a> while logged into your Google Account.</p>
            </div>

            <div className="step-info">
                <h3>Step 2</h3>
                <p>Click <b>“Get Started.”</b></p>
            </div>

            <div className="step-image">
                <img src="/img/google-get-started.png" alt="Get Started" className="signin-img" />
            </div>

            <div className="step-info">
                <h3>Step 3</h3>
                <p>You'll be prompted to enter personal information that you want to monitor (like your full name, phone number, or email).</p>
            </div>

            <div className="step-info">
                <h3>Step 4</h3>
                <p>Google will automatically start scanning for public search results containing this data.</p>
            </div>


            <div className="step-info">
                <h3>Step 5</h3>
                <p>If results are found, you can request Google to remove them directly through the tool.</p>
            </div>

            <div className="secure-navigation">
                <button className="nav-btn back-btn" onClick={() => navigate("/securinggoogleaccount/googlesearchsettings/overview")}> ← Back</button>
                <button className="next-btn" onClick={() => navigate("/google-search-settings/removal-request")}>
                    Next →
                </button>
            </div>
        </div>
    );
};

export default GoogleScan;