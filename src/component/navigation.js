import React from "react";
import { Link } from "react-router-dom";
import "./navstyle.css";

function Navigation() {
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
    </div>
  );
}

export default Navigation;
