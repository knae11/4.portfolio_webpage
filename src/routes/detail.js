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
        <div className="detail">
          <div className="detail_info">
            <div className="detail_img_container">
              <img
                className="detail_img"
                src={projectdetail.imgpath}
                alt={projectdetail.title}
              />
            </div>
            <ul className="detail_text">
              <li>{projectdetail.title}</li>
              <li>Used skill : {projectdetail.skills}</li>
              <li>{projectdetail.description}</li>
              <div className="detail_a">
                <a href={projectdetail.project_url}>Project</a>
                <a href={projectdetail.github}>Github CODE</a>
              </div>
            </ul>
          </div>

          <div className="detail_contents">
            <div className="video_container">
              <iframe
                src={projectdetail.video}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Detail;
