import React, { Component } from "react";
import { Nav, NavItem, NavLink, Button } from "reactstrap";

export default class NavMailMain extends Component {
  render() {
    return (
      <div className="mt-3">
        <Button className="mx-2" block>
          Compose
        </Button>
        <Nav vertical>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
