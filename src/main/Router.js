import React, { Component } from "react";
import BaseLayout from "./BaseLayout";
import { PMail } from "./../pages";

export default class Router extends Component {
  render() {
    return (
      <BaseLayout>
        <PMail />
      </BaseLayout>
    );
  }
}
