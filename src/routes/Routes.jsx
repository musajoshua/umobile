import React from "react";
import { Route, Switch } from "react-router-dom";

import Landing from "../pages/Landing";
import Rider from "../pages/Rider";
import Driver from "../pages/Driver";
import About from "../pages/About";

/**
 * Routes component
 * @param {Object} props props
 * @returns jsx
 */
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/about" exact component={About} />
      <Route path="/rider" exact component={Rider} />
      <Route path="/driver" exact component={Driver} />

      {/* <Route path="*" component={NotFound} /> */}
    </Switch>
  );
};

export default Routes;
