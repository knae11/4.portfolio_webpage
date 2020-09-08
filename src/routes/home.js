import React from "react";
import Projects from "./projects";
import "./homestyle.css";
class Home extends React.Component {
  render() {
    return (
      <>
        <p className="main">Port. Nauni</p>
        <section>
          <h4 className="home_title">Projects</h4>
          <Projects />
        </section>
      </>
    );
  }
}

export default Home;
