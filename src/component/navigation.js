import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/others">Others</Link>
    </div>
  );
}

export default Navigation;
