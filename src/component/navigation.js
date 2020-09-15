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
        <Link to="/">Port.Nauni</Link>
      </div>
      <div className="navs">
        <Link to="/projects">Projects</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/others">Others</Link>
      </div>
      <button onClick={toggleClick} className="toggleBtn hidden">
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
}
