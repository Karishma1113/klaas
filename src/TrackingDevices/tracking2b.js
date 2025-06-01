import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import "./tracking.css";

export default function Tracking2B() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/tracking/step2a");
  };

  const handleNext = () => {
    navigate("/tracking/step3a");
  };

  return (
    <div className="module">
      <ProgressBar
        totalSteps={2}
        currentStep={2}
        stepLabels={[
          "Android: Overview",
          "Android: Disable Tracker",
          "Apple: Overview",
          "Apple: Disable Tracker",
          "GPS: Overview",
          "GPS: Disable Tracker"
        ]}
      />

      <div className="header">
        <h2>Apple – Disabling Common Bluetooth Trackers</h2>
        <p>Step 2: How to Disable Each Tracker</p>
      </div>

      <h3>Apple Airtag</h3>
      <p>
        Basically, to disable Apple Airtag you need to remove the battery. To remove the battery push down and twist counterclockwise on the back of the Apple Airtag. That will allow you to remove the back cover and remove the battery.
      </p>
      <p>
        You can report the serial number of the Apple AirTag here:
        <br />
        <a href="https://found.apple.com/airtag/disable" target="_blank" rel="noopener noreferrer">
          https://found.apple.com/airtag/disable
        </a>
      </p>

      <h3>Chipolo trackers</h3>
      <p>
        Generally to turn off the Chipolo tracker you need to start by locating the main button. Hold the button for 30 seconds until you hear that the tracker is starting beeping. Wait until the tracker beeps 10 times and release the button. If the turn off was successful, you’ll hear a confirmation sound
      </p>

      <h4>Chipolo CARD</h4>
      <p>Main button located on the bottom left of the tracker.</p>
      <img src="/img/track2.png" alt="Chipolo CARD" className="step-img" />

      <h4>Chipolo ONE</h4>
      <p>Main button located in the center of the tracker</p>
      <img src="/img/track3.png" alt="Chipolo ONE" className="step-img" />

      <h3>Motorola Moto Tag</h3>
      <p>
        Locate the button with a letter M at the center of the tracker. Press it three times and then hold it for 20 seconds. Once you hear a beep, release the button. Second beep will mean that the tracker has been disabled
      </p>
      <img src="/img/track4.png" alt="Motorola Moto Tag" className="step-img" />

      <h3>Pebblebee trackers</h3>
      <p>
        Generally to turn off the Pebblebee tracker you need to start by locating the main button. Double press it and hold for 10 seconds. Once you start hearing beeping, wait until you hear a second beep, and release the button before the second beep ends. After the release, the tracker will beep one more time to confirm its disablement.
      </p>

      <h4>Pebblebee CARD</h4>
      <p>Main button located at the center of the tracker</p>
      <img src="/img/track5.png" alt="Pebblebee CARD" className="step-img" />

      <h4>Pebblebee ONE</h4>
      <p>Main button located at the front of the device under the logo</p>
      <img src="/img/track 8.png" alt="Pebblebee ONE" className="step-img" />

      <h4>Pebblebee TAG</h4>
      <p>Main button located at the front of the device under the logo</p>
      <img src="/img/track9.png" alt="Pebblebee TAG" className="step-img" />

      <h3>Overview:</h3>
      <p>
        In terms of tracking through bluetooth, Apple devices can only be tracked using other Apple devices. Apple's official website provides a simple guide on how to locate such devices.
      </p>
      <p>Here it is:</p>
      <p>
        However sometimes you might not hear the sound right away. In that case if you have an iPhone of a version 11 or higher, you can use a Find Nearby Apple feature. Follow these steps:
      </p>
    
      <img src="/img/track6.png" alt="Apple Airtag - Typical appearance" className="step-img" />
      <img src="/img/track7.png" alt="Find Nearby screen" className="step-img" />
      <img src="/img/track10.png" alt="Additional appearance of Apple tag" className="step-img" />

      <div className="step-controls">
        <button className="back-btn" onClick={handleBack}>← Back</button>
        <button className="next-btn" onClick={handleNext}>Next →</button>
        <p>Most likely appearance of the tag:</p>
      </div>
    </div>
  );
}

