import React from "react";
import { Link } from "react-router-dom";
import "./navstyle.css";

function Navigation() {
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
    </div>
  );
}

export default Navigation;
