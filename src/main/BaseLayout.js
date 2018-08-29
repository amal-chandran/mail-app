import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import Avatar from "@material-ui/core/Avatar";
import Logo from "./../assets/logo.svg";

/**
 * Base Layout
 * @prop children required
 * @export
 * @class BaseLayout
 * @extends {Component}
 */
export default class BaseLayout extends Component {
  render() {
    // Get deconstruct the children
    const { children } = this.props;

    return (
      <div>
        <MainNav />
        <div>{children}</div>
      </div>
    );
  }
}

/**
 * Main Navigation for Dashbord
 *
 * @export MainNav
 * @class MainNav
 * @extends {Component}
 */
export class MainNav extends Component {
  /**
   * Creates an instance of MainNav
   * Set the component state
   *
   * @param {*} props
   * @memberof MainNav
   */
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  /**
   * To toggle menu state changer
   * userd in Mobile Responsive view
   *
   * @memberof MainNav
   */
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">
          <img src={Logo} alt="Logo" style={{ maxHeight: "40px" }} srcset="" />
          <span className="ml-2">Mail App</span>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">
                <Avatar>B</Avatar>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
