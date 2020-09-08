import React from "react";
import ProjectCard from "../component/projectCard";
import { projects } from "../data/projectContents.json";

class Projects extends React.Component {
  render() {
    return (
      <>
        <div className="projects">
          {projects.map((project) => (
            <ProjectCard
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
