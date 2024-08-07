import React from "react";
import { Switch } from "react-router-dom";

import Hub from "../pages/Hub";
import Route from "./Route";
import Login from "../pages/Login";

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Hub} isPrivate />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Routes;
