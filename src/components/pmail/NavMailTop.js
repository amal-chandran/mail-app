import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Checkbox, IconButton, Icon } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class NavMailTop extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="d-flex pt-2 border-bottom justify-content-between">
        <div>
          <Link to={match.url}>
            <IconButton>
              <Icon>arrow_back</Icon>
            </IconButton>
          </Link>
          <Checkbox color="default" value="checkedG" />
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
