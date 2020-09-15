import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/home";
import Projects from "./routes/projects";
import Profile from "./routes/profile";
import Others from "./routes/other";
import Detail from "./routes/detail";

import Navigation from "./component/navigation";

function App() {
  return (
    <BrowserRouter basename="/4.portfolio_webpage">
      <Navigation />
      <Route path="/projects" exact component={Projects} />
      <Route path="/" exact={true} component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/others" component={Others} />
      <Route path="/projects/:id" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
