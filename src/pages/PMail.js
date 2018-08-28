import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import {
  InboxTabs,
  NavMailMain,
  NavMailTop,
  MailDetailedView
} from "./../components/pmail";
import { Switch, Route } from "react-router-dom";

export default class PageMail extends Component {
  render() {
    const { match } = this.props;
    console.log(match);
    return (
      <div>
        <Row>
          <Col style={{ maxWidth: "15rem" }}>
            <NavMailMain />
          </Col>
          <Col>
            <NavMailTop />
            <Switch>
              <Route exact path={`${match.url}`} component={InboxTabs} />
              <Route
                exact
                path={`${match.url}/:Id`}
                component={MailDetailedView}
              />
            </Switch>
          </Col>
        </Row>
      </div>
    );
  }
}
