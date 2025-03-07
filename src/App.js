import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Survey from "./survey1"; // Corrected path
import Resources from "./Resources"; // Corrected path
import ModulesHome from "./ModulesHome"; // Corrected path

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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}
