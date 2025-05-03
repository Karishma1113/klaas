import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Survey1 from "./Survey1";
import Survey2 from "./Survey2";
import SurveyResults from "./SurveyResults";
import Resources from "./Resources";
import GuidesHome from "./GuidesHome";
import MFA1 from "./SecuringGoogleAccount/MFA/MFA1";
import MFA2 from "./SecuringGoogleAccount/MFA/MFA2";
import MFA3 from "./SecuringGoogleAccount/MFA/MFA3";
import MFA4 from "./SecuringGoogleAccount/MFA/MFA4";
import MFA5 from "./SecuringGoogleAccount/MFA/MFA5";
import MFA6 from "./SecuringGoogleAccount/MFA/MFA6";
import Device1 from "./SecuringGoogleAccount/DeviceSetup/Device1";
import Device2 from "./SecuringGoogleAccount/DeviceSetup/Device2";
import Device3 from "./SecuringGoogleAccount/DeviceSetup/Device3";
import Device4 from "./SecuringGoogleAccount/DeviceSetup/Device4";
import Device5 from "./SecuringGoogleAccount/DeviceSetup/Device5";
import Password1 from "./SecuringGoogleAccount/PasswordSetup/Password1";
import Password2 from "./SecuringGoogleAccount/PasswordSetup/Password2";
import TwoFA1 from "./AppleAccounts/2FactorAuth/TwoFA1";
import TwoFA2 from "./AppleAccounts/2FactorAuth/TwoFA2";



export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey1" element={<Survey1 />} />
          <Route path="/survey2" element={<Survey2 />} />
          <Route path="/surveyresults" element={<SurveyResults />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/guides" element={<GuidesHome />} />
          <Route path="/SecuringGoogleAccount/mfa/mfa1" element={<MFA1 />} />
          <Route path="/mfa/mfa2" element={<MFA2 />} />
          <Route path="/mfa/mfa3" element={<MFA3 />} />
          <Route path="/mfa/mfa4" element={<MFA4 />} />
          <Route path="/mfa/mfa5" element={<MFA5 />} />
          <Route path="/mfa/mfa6" element={<MFA6 />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/device1" element={<Device1 />} />
          <Route path="/device/device2" element={<Device2 />} />
          <Route path="/device/device3" element={<Device3 />} />
          <Route path="/device/device4" element={<Device4 />} />
          <Route path="/device/device5" element={<Device5 />} />
          <Route path="/password1" element={<Password1 />} />
          <Route path="password/password2" element={<Password2 />} />
          <Route path="/AppleAccounts/2FactorAuth/TwoFA1" element={<TwoFA1 />} />
          <Route path="/AppleAccounts/2FactorAuth/TwoFA2" element={<TwoFA2 />} />
        </Routes>
      </div>
    </Router>
  );
}
