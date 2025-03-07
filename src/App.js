import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Survey from "./Survey";
import Resources from "./Resources";
import ModulesHome from "./ModulesHome";
import MFA1 from "./MFA/MFA1";
import MFA2 from "./MFA/MFA2";
import MFA3 from "./MFA/MFA3";
import MFA4 from "./MFA/MFA4";
import MFA5 from "./MFA/MFA5";
import MFA6 from "./MFA/MFA6";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/modules" element={<ModulesHome />} />
          <Route path="/mfa1" element={<MFA1 />} />
          <Route path="/mfa/mfa2" element={<MFA2 />} />
          <Route path="/mfa/mfa3" element={<MFA3 />} />
          <Route path="/mfa/mfa4" element={<MFA4 />} />
          <Route path="/mfa/mfa5" element={<MFA5 />} />
          <Route path="/mfa/mfa6" element={<MFA6 />} />

          {/* Redirect unknown routes to homepage */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}