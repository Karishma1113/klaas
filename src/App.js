import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Survey1 from "./Survey1";
import Survey2 from "./Survey2";
import SurveyResults from "./SurveyResults";
import Resources from "./Resources";
import GuidesHome from "./GuidesHome";

// Google Account Guides
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

// Instagram Module (Steps)
import Instagram1 from "./SecuringSocialMediaAccounts/instagram1";
import Instagram2 from "./SecuringSocialMediaAccounts/instagram2";
import Instagram3 from "./SecuringSocialMediaAccounts/instagram3";

function AppContent() {
  const location = useLocation();

  // Hide navbar on these routes (if needed)
  const hideNavbarRoutes = [
    "/instagram/step1",
    "/instagram/step2",
    "/instagram/step3",
  ];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey1" element={<Survey1 />} />
        <Route path="/survey2" element={<Survey2 />} />
        <Route path="/surveyresults" element={<SurveyResults />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/guides" element={<GuidesHome />} />

        {/* Google Guides */}
        <Route path="/SecuringGoogleAccount/mfa/mfa1" element={<MFA1 />} />
        <Route path="/mfa/mfa2" element={<MFA2 />} />
        <Route path="/mfa/mfa3" element={<MFA3 />} />
        <Route path="/mfa/mfa4" element={<MFA4 />} />
        <Route path="/mfa/mfa5" element={<MFA5 />} />
        <Route path="/mfa/mfa6" element={<MFA6 />} />
        <Route path="/device1" element={<Device1 />} />
        <Route path="/device/device2" element={<Device2 />} />
        <Route path="/device/device3" element={<Device3 />} />
        <Route path="/device/device4" element={<Device4 />} />
        <Route path="/device/device5" element={<Device5 />} />
        <Route path="/password1" element={<Password1 />} />
        <Route path="/password/password2" element={<Password2 />} />

        {/* Instagram Module Steps */}
        <Route path="/instagram/step1" element={<Instagram1 />} />
        <Route path="/instagram/step2" element={<Instagram2 />} />
        <Route path="/instagram/step3" element={<Instagram3 />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
