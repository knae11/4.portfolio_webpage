import React from "react";
import Projects from "./projects";

class Home extends React.Component {
  render() {
    return (
      <>
        <p>Port.Nauni</p>
        <section>
          <Projects />
        </section>
      </>
    );
  }
}

export default Home;
