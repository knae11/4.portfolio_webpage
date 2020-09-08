import React from "react";
import { projects } from "../data/projectContents.json";
import "./detail.css";

class Detail extends React.Component {
  render() {
    const { match } = this.props;
    const projectdetail = projects.find(
      (project) => project.id === match.params.id
    );
    return (
      <>
        <p className="detail_info">
          <img
            className="detail_image"
            src={projectdetail.imgpath}
            alt={projectdetail.title}
          />
          <li className="detail_text">
            <h1>Title: {projectdetail.title}</h1>
            <h1>Skills: {projectdetail.skills}</h1>
            <h1>Description </h1>
            <p>{projectdetail.description}</p>
          </li>
        </p>
        <p></p>
      </>
    );
  }
}
export default Detail;
