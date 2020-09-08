import React from "react";
//import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { projects } from "../data/projectContents.json";

// console.log(projects);
// console.log(projects.map((project) => project.title));

function ProjectCard({ id, title, skills, imgpath }) {
  return (
    <Link to={{ pathname: `/projects/${id}` }}>
      <li key={id} style={{ backgroundColor: "yellow", margin: "20px" }}>
        <img
          style={{ height: "200px", width: "200px" }}
          src={imgpath}
          alt={title}
        />
        <div>{title}</div>
        <div>{skills}</div>
      </li>
    </Link>
  );
}
export default ProjectCard;
