import React from "react";
import { projects } from "../data/projectContents.json";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return <div>this is detail page I will create.</div>;
  }
}

export default Detail;
