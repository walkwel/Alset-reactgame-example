import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import Root from "./router";
import Example1 from "./example1";

render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
  document.getElementById("root")
);
