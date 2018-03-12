import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./app";
import Example1 from "./example1.js";
import Example2 from "./example2.js";
import Example3 from "./example3.js";
import Example4 from "./example4.js";
import Example5 from "./example5.js";
import Example6 from "./example6.js";
import Example7 from "./example7.js";

const Root = () => (
  <Switch>
    <Route path="/example2" component={Example2} />
    <Route path="/example1" component={Example1} />
    <Route path="/example3" component={Example3} />
    <Route path="/example4" component={Example4} />
    <Route path="/example5" component={Example5} />
    <Route path="/example6" component={Example6} />
    <Route path="/example7" component={Example7} />
    <Route path="/" component={App} />
  </Switch>
);

export default Root;
