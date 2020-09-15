import React from "react";
import { Link } from "react-router-dom";
import "./projectCard.css";

function ProjectCard({ id, title, skills, imgpath }) {
  return (
    <Link className="link" to={{ pathname: `/projects/${id}` }}>
      <div key={id} className="projectcard_container">
        <div className="projectcard_image_container">
          <img className="projectcard_image" src={imgpath} alt={title} />
        </div>
        <h4 className="projectcard_title">{skills}</h4>
      </div>
    </Link>
  );
}
export default ProjectCard;
