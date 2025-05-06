import React from "react";
import { NavLink } from "react-router-dom";
import "./socialmedia.css";

export default function InstagramNav() {
  return (
    <div className="step-nav">
      <NavLink to="/instagram/step1" className={({ isActive }) => isActive ? "step-tab active" : "step-tab"}>
        Overview
      </NavLink>
      <NavLink to="/instagram/step2" className="step-tab">2FA</NavLink>
      <NavLink to="/instagram/step3" className="step-tab">Login Activity</NavLink>
      <NavLink to="/instagram/step4" className="step-tab">Remove Apps</NavLink>
      <NavLink to="/instagram/step5" className="step-tab">App Access</NavLink>
    </div>
  );
}
