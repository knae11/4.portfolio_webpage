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
    <BrowserRouter>
      <Navigation />
      <Route path="/4.portfolio_webpage/projects" exact component={Projects} />
      <Route path="/4.portfolio_webpage" exact={true} component={Home} />
      <Route path="/4.portfolio_webpage/profile" component={Profile} />
      <Route path="/4.portfolio_webpage/others" component={Others} />
      <Route path="/4.portfolio_webpage/projects/:id" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
