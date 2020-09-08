import React from "react";
import ProjectCard from "../component/projectCard";
import { projects } from "../data/projectContents.json";
import "./projects.css";

class Projects extends React.Component {
  render() {
    return (
      <>
        <div className="projects">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              skills={project.skills}
              imgpath={project.imgpath}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Projects;
