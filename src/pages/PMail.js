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

    return (
      <div>
        <Row className="mr-0">
          <Col style={{ maxWidth: "15rem" }}>
            <NavMailMain />
          </Col>
          <Col>
            <NavMailTop match={match} />
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
