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

export class Skills extends React.Component {
  render() {
    return (
      <div className="skills">
        <h1>PROGRAMMING</h1>
        <p>
          HTML, CSS, JavaScript, TypeScript, React, Nodejs, MySQL, Pug, Python3
        </p>
        <h1>ARCHITECTURE</h1>
        <p>AUTO CAD, SKETCH UP, PHOTOSHOP</p>
        <h1>LANGUAGE</h1>
        <p>KOREAN, ENGLISH, basic CHINESE</p>
      </div>
    );
  }
}

export default Projects;
