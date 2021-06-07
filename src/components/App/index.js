import React from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";
import "./style.css";

export default function App() {
  return (
    <div className="app">
      <Route exact path="process.env.PUBLIC_URL +/" component={Page1} />
      <Route exact path="/page2" component={Page2} />
    </div>
  );
}
