import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Survey from "./Survey";
import Resources from "./Resources";
import ModulesHome from "./ModulesHome";
import MFA1 from "./MFA/MFA1";

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
          <Route path="/MFA1" element={<MFA1 />} />

          {/* Redirect unknown routes to homepage */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}