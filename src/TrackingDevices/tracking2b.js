import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./tracking.css";

const Tracking2B = () => {
  const navigate = useNavigate();
  const stepLabels = [
    "Android: Overview",
    "Android: Disable Tracker",
    
  ];

  return (
    <>
      <ProgressBar currentStep={2} totalSteps={stepLabels.length} stepLabels={stepLabels} />

      <button className="close-btn" onClick={() => navigate("/guides")}>Close Guide</button>
      <h1 className="tracking-title">Apple – Disabling Common Bluetooth Trackers</h1>
      <p className="tracking-desc">Step 2: How to Disable Each Tracker</p>

      <h3>Apple Airtag</h3>
      <p>
        To disable an Apple Airtag, remove the battery by **pushing down and twisting counterclockwise** on the back cover.
      </p>
      <p>
        You can report the serial number of an Apple AirTag here:  
        <a href="https://found.apple.com/airtag/disable" target="_blank" rel="noopener noreferrer">
          https://found.apple.com/airtag/disable
        </a>
      </p>

      <h3>Chipolo trackers</h3>
      <p>Hold the button for **30 seconds**, wait for **10 beeps**, and release to disable.</p>

      <h4>Chipolo CARD</h4>
      <p>Main button located on the bottom left.</p>
      <img src="/img/track2.png" alt="Chipolo CARD" className="tracking-image" />

      <h4>Chipolo ONE</h4>
      <p>Main button located at the center.</p>
      <img src="/img/tack3.png" alt="Chipolo ONE" className="tracking-image" />

      <h3>Motorola Moto Tag</h3>
      <p>
        Press the **M button** three times, then hold for **20 seconds** until you hear two beeps.
      </p>
      <img src="/img/track4.png" alt="Motorola Moto Tag" className="tracking-image" />

      <h3>Pebblebee trackers</h3>
      <p>Double press the button, hold for **10 seconds**, release **after second beep**.</p>

      <h4>Pebblebee CARD</h4>
      <p>Main button located in the center.</p>
      <img src="/img/track5.png" alt="Pebblebee CARD" className="tracking-image" />

      <h4>Pebblebee ONE</h4>
      <p>Main button located at the front under the logo.</p>
      <img src="/img/track 8.png" alt="Pebblebee ONE" className="tracking-image" />

      <h4>Pebblebee TAG</h4>
      <p>Main button located at the front under the logo.</p>
      <img src="/img/track9.png" alt="Pebblebee TAG" className="tracking-image" />

      <h3>Overview:</h3>
      <p>Apple devices use **Bluetooth tracking**, only detectable by other Apple devices.</p>

      <h3>Find Nearby Feature (iPhone 11+)</h3>
     
      <img src="/img/track6.png" alt="Apple Airtag appearance" className="tracking-image"/>
      <img src="/img/track7.png" alt="Find Nearby screen" className="tracking-image"/>
      <img src="/img/track10.png" alt="Apple tag appearance" className="tracking-image"/>

      <div className="tracking-navigation">
        <button className="back-btn" onClick={() => navigate("/tracking/step2a")}>← Back</button>
        <button className="next-btn" onClick={() => navigate("/guides")}>Done</button>
      </div>

      <div className="step-controls">
        <p><strong>You’ve completed the Apple tracking disable guide!</strong></p>
      </div>
    </>
  );
};

export default Tracking2B;
