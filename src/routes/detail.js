import React from "react";
import { projects } from "../data/projectContents.json";
import { render } from "@testing-library/react";

class Detail extends React.Component {
  render() {
    const { match } = this.props;
    const projectdetail = projects.find(
      (project) => project.id === match.params.id
    );
    return (
      <>
        <section className="info_short">
          <img
            style={{ width: "200px", height: "200px" }}
            src={projectdetail.imgpath}
            alt={projectdetail.title}
          />
          <li>
            <h3>title: {projectdetail.title}</h3>
            <h5>skills: {projectdetail.skills}</h5>
            <h5>description: {projectdetail.description}</h5>
          </li>
        </section>
        <section></section>
      </>
    );
  }
}
export default Detail;
