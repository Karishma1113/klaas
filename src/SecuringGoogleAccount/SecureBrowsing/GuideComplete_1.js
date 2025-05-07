import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from '../../ProgressBar';
//import "./MFA.css";

const Complete_1 = () => {
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
    const currentStep = 8;


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
            <div className="secure-content">

                <div className="secure-steps">
                    <div className="step">
                        <h3>Need Help?</h3>
                        <div className="instruction-box">
                            <p>For detailed guidance, visit <a href="https://myaccount.google.com/privacycheckup" target="_blank" rel="noopener noreferrer">Privacy Checkup</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="secure-navigation">
                <button className="nav-btn back-btn" onClick={() => navigate("/secure-browsing/clearing-browsing-history")}> ← Back</button>
            </div>
        </div>
    );
};

export default Complete_1;
