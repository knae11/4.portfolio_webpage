import React from "react";
import { Link } from "react-router-dom";
import "./navstyle.css";

export default function Navigation() {
  function toggleClick(e) {
    const navs = document.querySelector(".navs");
    navs.classList.toggle("active");
  }

  return (
    <div className="naviagation">
      <div className="logo">
        <Link to="/">Port.Nauni</Link>
      </div>
      <div className="navs">
        <Link className="an" to="/projects">
          Projects
        </Link>
        <Link className="an" to="/profile">
          Profile
        </Link>
        <Link className="an" to="/others">
          Others
        </Link>
      </div>
      <button onClick={toggleClick} className="toggleBtn hidden">
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
}
