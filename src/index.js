import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/App";
import "./index.css";
import GithubLink from "./components/github-link";

ReactDOM.render(
  <BrowserRouter>
    <DndProvider backend={HTML5Backend}>
      <App />
      <GithubLink />
    </DndProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);
