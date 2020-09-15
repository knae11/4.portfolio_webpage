import React from "react";
import { Link } from "react-router-dom";
import "./navstyle.css";

export default function Navigation() {
  function toggleClick(e) {
    const navs = document.querySelector(".navs");
    e.preventDefault();
    navs.classList.toggle("active");
  }

  return (
    <div className="naviagation">
      <div className="logo">
        <Link to="/4.portfolio_webpage/">Port.Nauni</Link>
      </div>
      <div className="navs">
        <Link to="/4.portfolio_webpage/projects">Projects</Link>
        <Link to="/4.portfolio_webpage/profile">Profile</Link>
        <Link to="/4.portfolio_webpage/others">Others</Link>
      </div>
      <button onClick={toggleClick} className="toggleBtn hidden">
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
}
