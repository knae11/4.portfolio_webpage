import React from "react";
import Projects, { Skills } from "./projects";
import "./homestyle.css";
class Home extends React.Component {
  render() {
    return (
      <>
        <p className="main">Port. Nauni</p>
        <section>
          <h2 className="home_title">Projects</h2>
          <Projects />
          <h2 className="home_title">Skills</h2>
          <Skills />
          <h2 className="home_footer">Made by Naeun @2020</h2>
        </section>
      </>
    );
  }
}

export default Home;
