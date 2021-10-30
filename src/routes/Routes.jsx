import React from "react";
import { Route, Switch } from "react-router-dom";

import Landing from "../pages/Landing";

/**
 * Routes component
 * @param {Object} props props
 * @returns jsx
 */
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />

      {/* <Route path="*" component={NotFound} /> */}
    </Switch>
  );
};

export default Routes;
