import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Checkbox, IconButton, Icon } from "@material-ui/core";

export default class NavMailTop extends Component {
  render() {
    return (
      <div className="d-flex pt-2 border-bottom justify-content-between">
        <div>
          <Checkbox defaultChecked color="default" value="checkedG" />
          <IconButton>
            <Icon>refresh</Icon>
          </IconButton>
          <IconButton>
            <Icon>more_vert</Icon>
          </IconButton>
        </div>
        <div>
          <IconButton>
            <Icon>settings</Icon>
          </IconButton>
        </div>
      </div>
    );
  }
}
