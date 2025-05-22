import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Survey1 from "./Survey1";
import Survey2 from "./Survey2";
import SurveyResults from "./SurveyResults";
import Resources from "./Resources";
import GuidesHome from "./GuidesHome";
import ScrollToTop from "./ScrollToTop";

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
import Password1 from "./SecuringGoogleAccount/PasswordSetup/Password1";
import Password2 from "./SecuringGoogleAccount/PasswordSetup/Password2";
import SecureBrowsing from "./SecuringGoogleAccount/SecureBrowsing/SecureBrowsingOverview";
import Autosave from "./SecuringGoogleAccount/SecureBrowsing/Autosave";
import Adds from "./SecuringGoogleAccount/SecureBrowsing/Adds";
import Location from "./SecuringGoogleAccount/SecureBrowsing/Location";
import Search from "./SecuringGoogleAccount/SecureBrowsing/Search";
import ThirdPartyApps from "./SecuringGoogleAccount/SecureBrowsing/ThirdPartyApps";
import ClearHistory from "./SecuringGoogleAccount/SecureBrowsing/ClearBrowseHistory";
import Complete1 from "./SecuringGoogleAccount/SecureBrowsing/GuideComplete1";
import Overview from "./SecuringGoogleAccount/GoogleSearchSettings/Overview";
import GoogleScan from "./SecuringGoogleAccount/GoogleSearchSettings/GoogleScan";
import RemovalRequest from "./SecuringGoogleAccount/GoogleSearchSettings/RemovalRequest";
import DarkWebReport from "./SecuringGoogleAccount/GoogleSearchSettings/DarkWebReport";

// Apple Modules
import TwoFA1 from "./AppleAccounts/2FactorAuth/TwoFA1";
import TwoFA2 from "./AppleAccounts/2FactorAuth/TwoFA2";
import TwoFA3 from "./AppleAccounts/2FactorAuth/TwoFA3";
import TwoFA4 from "./AppleAccounts/2FactorAuth/TwoFA4";
import TwoFA5 from "./AppleAccounts/2FactorAuth/TwoFA5";
import StolenDevice1 from "./AppleAccounts/StolenDeviceProtection/StolenDevice1";
import StolenDevice2 from "./AppleAccounts/StolenDeviceProtection/StolenDevice2";
import StolenDevice3 from "./AppleAccounts/StolenDeviceProtection/StolenDevice3";
import StolenDevice4 from "./AppleAccounts/StolenDeviceProtection/StolenDevice4";
import ChangePassword1 from "./AppleAccounts/ChangePassword/ChangePassword1";
import ChangePassword2 from "./AppleAccounts/ChangePassword/ChangePassword2";
import ChangePassword3 from "./AppleAccounts/ChangePassword/ChangePassword3";
import FindMy1 from "./AppleAccounts/FindMyandLocation/FindMy1";
import FindMy2 from "./AppleAccounts/FindMyandLocation/FindMy2";
import FindMy3 from "./AppleAccounts/FindMyandLocation/FindMy3";

// Kids Privacy
import LocationModule1 from "./KidsPrivacy/LocationModule1";
import LocationModule2 from "./KidsPrivacy/LocationModule2";
import LocationModule3 from "./KidsPrivacy/LocationModule3";
import LocationModule4 from "./KidsPrivacy/LocationModule4";
import LocationModule5 from "./KidsPrivacy/LocationModule5";
import LocationModule6 from "./KidsPrivacy/LocationModule6";
import SnapModule1 from "./KidsPrivacy/SnapModule1";
import SnapModule2 from "./KidsPrivacy/SnapModule2";
import SnapModule3 from "./KidsPrivacy/SnapModule3";
import SnapModule4 from "./KidsPrivacy/SnapModule4";
import SnapModule5 from "./KidsPrivacy/SnapModule5";
import FamilyModule1 from "./KidsPrivacy/FamilyModule1";
import FamilyModule2 from "./KidsPrivacy/FamilyModule2";
import FamilyModule3 from "./KidsPrivacy/FamilyModule3";
import FamilyModule4 from "./KidsPrivacy/FamilyModule4";
import FamilyModule5 from "./KidsPrivacy/FamilyModule5";
import KidsPrivacyIntro from "./KidsPrivacy/KidsPrivacyIntro";

// Social Media Accounts
import Instagram1 from "./SecuringSocialMediaAccounts/instagram1";
import Instagram2 from "./SecuringSocialMediaAccounts/instagram2";
import Instagram3 from "./SecuringSocialMediaAccounts/instagram3";
import Facebook1 from "./SecuringSocialMediaAccounts/Facebook/Facebook1";
import Facebook2 from "./SecuringSocialMediaAccounts/Facebook/Facebook2";
import Facebook3 from "./SecuringSocialMediaAccounts/Facebook/Facebook3";
import Facebook4 from "./SecuringSocialMediaAccounts/Facebook/Facebook4";
import Snapchat1 from "./SecuringSocialMediaAccounts/Snapchat/snapchat1";
import Snapchat2 from "./SecuringSocialMediaAccounts/Snapchat/snapchat2";
import Snapchat3 from "./SecuringSocialMediaAccounts/Snapchat/snapchat3";

// Tracking Device Modules
import Tracking1A from "./TrackingDevices/tracking1a";
import Tracking1B from "./TrackingDevices/tracking1b";
import Tracking2A from "./TrackingDevices/tracking2a";
import Tracking2B from "./TrackingDevices/tracking2b";
import Tracking3A from "./TrackingDevices/tracking3a";
import Tracking3B from "./TrackingDevices/tracking3b";

function AppContent() {
  const location = useLocation();

  const hideNavbarRoutes = [
    "/instagram/step1", "/instagram/step2", "/instagram/step3",
    "/facebook/step1", "/facebook/step2", "/facebook/step3", "/facebook/step4",
    "/snapchat/step1", "/snapchat/step2", "/snapchat/step3",
    "/tracking/step1a", "/tracking/step1b",
    "/tracking/step2a", "/tracking/step2b",
    "/tracking/step3a", "/tracking/step3b"
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

        {/* Google Account */}
        <Route path="/SecuringGoogleAccount/mfa/mfa1" element={<MFA1 />} />
        <Route path="/mfa/mfa2" element={<MFA2 />} />
        <Route path="/mfa/mfa3" element={<MFA3 />} />
        <Route path="/mfa/mfa4" element={<MFA4 />} />
        <Route path="/mfa/mfa5" element={<MFA5 />} />
        <Route path="/mfa/mfa6" element={<MFA6 />} />
        <Route path="/securinggoogleaccount/device/device1" element={<Device1 />} />
        <Route path="/device/device2" element={<Device2 />} />
        <Route path="/device/device3" element={<Device3 />} />
        <Route path="/device/device4" element={<Device4 />} />
        <Route path="/securinggoogleaccount/password/password1" element={<Password1 />} />
        <Route path="/password/password2" element={<Password2 />} />
        <Route path="/securinggoogleaccount/secure-browsing" element={<SecureBrowsing />} />
        <Route path="/secure-browsing/autosave" element={<Autosave />} />
        <Route path="/secure-browsing/adds" element={<Adds />} />
        <Route path="/secure-browsing/location" element={<Location />} />
        <Route path="/secure-browsing/search" element={<Search />} />
        <Route path="/secure-browsing/trird-party-apps" element={<ThirdPartyApps />} />
        <Route path="/secure-browsing/clearing-browsing-history" element={<ClearHistory />} />
        <Route path="/secure-browsing/complete" element={<Complete1 />} />
        <Route path="/securinggoogleaccount/googlesearchsettings/overview" element={<Overview />} />
        <Route path="/google-search-settings/google-scan" element={<GoogleScan />} />
        <Route path="/google-search-settings/removal-request" element={<RemovalRequest />} />
        <Route path="/google-search-settings/dark-web-report" element={<DarkWebReport />} />

        {/* Apple */}
        <Route path="/AppleAccounts/2FactorAuth/TwoFA1" element={<TwoFA1 />} />
        <Route path="/AppleAccounts/2FactorAuth/TwoFA2" element={<TwoFA2 />} />
        <Route path="/AppleAccounts/2FactorAuth/TwoFA3" element={<TwoFA3 />} />
        <Route path="/AppleAccounts/2FactorAuth/TwoFA4" element={<TwoFA4 />} />
        <Route path="/AppleAccounts/2FactorAuth/TwoFA5" element={<TwoFA5 />} />
        <Route path="/AppleAccounts/StolenDeviceProtection/StolenDevice1" element={<StolenDevice1 />} />
        <Route path="/AppleAccounts/StolenDeviceProtection/StolenDevice2" element={<StolenDevice2 />} />
        <Route path="/AppleAccounts/StolenDeviceProtection/StolenDevice3" element={<StolenDevice3 />} />
        <Route path="/AppleAccounts/StolenDeviceProtection/StolenDevice4" element={<StolenDevice4 />} />
        <Route path="/AppleAccounts/ChangePassword/ChangePassword1" element={<ChangePassword1 />} />
        <Route path="/AppleAccounts/ChangePassword/ChangePassword2" element={<ChangePassword2 />} />
        <Route path="/AppleAccounts/ChangePassword/ChangePassword3" element={<ChangePassword3 />} />
        <Route path="/AppleAccounts/FindMyandLocation/FindMy1" element={<FindMy1 />} />
        <Route path="/AppleAccounts/FindMyandLocation/FindMy2" element={<FindMy2 />} />
        <Route path="/AppleAccounts/FindMyandLocation/FindMy3" element={<FindMy3 />} />

        {/* Kids Privacy */}
        <Route path="/KidsPrivacy/LocationModule1" element={<LocationModule1 />} />
        <Route path="/KidsPrivacy/LocationModule2" element={<LocationModule2 />} />
        <Route path="/KidsPrivacy/LocationModule3" element={<LocationModule3 />} />
        <Route path="/KidsPrivacy/LocationModule4" element={<LocationModule4 />} />
        <Route path="/KidsPrivacy/LocationModule5" element={<LocationModule5 />} />
        <Route path="/KidsPrivacy/LocationModule6" element={<LocationModule6 />} />
        <Route path="/KidsPrivacy/SnapModule1" element={<SnapModule1 />} />
        <Route path="/KidsPrivacy/SnapModule2" element={<SnapModule2 />} />
        <Route path="/KidsPrivacy/SnapModule3" element={<SnapModule3 />} />
        <Route path="/KidsPrivacy/SnapModule4" element={<SnapModule4 />} />
        <Route path="/KidsPrivacy/SnapModule5" element={<SnapModule5 />} />
        <Route path="/KidsPrivacy/FamilyModule1" element={<FamilyModule1 />} />
        <Route path="/KidsPrivacy/FamilyModule2" element={<FamilyModule2 />} />
        <Route path="/KidsPrivacy/FamilyModule3" element={<FamilyModule3 />} />
        <Route path="/KidsPrivacy/FamilyModule4" element={<FamilyModule4 />} />
        <Route path="/KidsPrivacy/FamilyModule5" element={<FamilyModule5 />} />
        <Route path="/KidsPrivacy/Intro" element={<KidsPrivacyIntro />} />

        {/* Social Media */}
        <Route path="/instagram/step1" element={<Instagram1 />} />
        <Route path="/instagram/step2" element={<Instagram2 />} />
        <Route path="/instagram/step3" element={<Instagram3 />} />
        <Route path="/facebook/step1" element={<Facebook1 />} />
        <Route path="/facebook/step2" element={<Facebook2 />} />
        <Route path="/facebook/step3" element={<Facebook3 />} />
        <Route path="/facebook/step4" element={<Facebook4 />} />
        <Route path="/snapchat/step1" element={<Snapchat1 />} />
        <Route path="/snapchat/step2" element={<Snapchat2 />} />
        <Route path="/snapchat/step3" element={<Snapchat3 />} />

        {/* Tracking Devices */}
        <Route path="/tracking/step1a" element={<Tracking1A />} />
        <Route path="/tracking/step1b" element={<Tracking1B />} />
        <Route path="/tracking/step2a" element={<Tracking2A />} />
        <Route path="/tracking/step2b" element={<Tracking2B />} />
        <Route path="/tracking/step3a" element={<Tracking3A />} />
        <Route path="/tracking/step3b" element={<Tracking3B />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
       <ScrollToTop />
      <AppContent />
    </Router>
  );
}
