import React, { Component } from "react";
import { Button, FormGroup } from "reactstrap";
import { Control, Form } from "react-redux-form";

class FormLoginSignUp extends Component {
  render() {
    const { page } = this.props;
    return (
      <div>
        <Form model={"user"} className="mt-2">
          <FormGroup>
            <Control.text
              model={"user.email"}
              name="email"
              placeholder="Email"
              className="form-control"
            />
          </FormGroup>
          <FormGroup>
            <Control.input
              type="password"
              model={"user.password"}
              name="password"
              placeholder="Password"
              className="form-control"
            />
          </FormGroup>
          <FormGroup>
            {page === "Login" ? (
              <Button color="primary" className="btn btn-primary btn-block">
                Login
              </Button>
            ) : (
              <Button color="success" className="btn btn-success btn-block">
                SignUp
              </Button>
            )}
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default FormLoginSignUp;
