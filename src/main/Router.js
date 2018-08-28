import React, { Component } from "react";
import BaseLayout from "./BaseLayout";
import { PMail, PLogin } from "./../pages";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./../redux/store";
import { Switch, Route } from "react-router-dom";

export default class Router extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={PLogin} />
            <Route exact path="/inbox" component={PMail} />
          </Switch>
        </BaseLayout>
      </ConnectedRouter>
    );
  }
}
