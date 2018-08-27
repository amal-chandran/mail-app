import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import { InboxTabs, NavMailMain, NavMailTop } from "./../components/pmail";

export default class PageMail extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col style={{ maxWidth: "15rem" }}>
            <NavMailMain />
          </Col>
          <Col>
            <NavMailTop />
            <InboxTabs />
          </Col>
        </Row>
      </div>
    );
  }
}
