import React, { Component } from "react";
import BaseLayout from "./BaseLayout";
import { PMail, PLogin } from "./../pages";

export default class Router extends Component {
  render() {
    return (
      <BaseLayout>
        <PMail />
        {/* <PLogin /> */}
      </BaseLayout>
    );
  }
}
