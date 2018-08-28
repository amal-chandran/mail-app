import React, { Component } from "react";
import { Button, FormGroup } from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";
import { isEmpty } from "validator";
import { connect } from "react-redux";
import { push } from "connected-react-router";

class FormLoginSignUp extends Component {
  onFormSubmit = data => {
    this.props.RedirectPage("/inbox");
  };

  render() {
    const { page } = this.props;
    return (
      <div>
        <Form
          model={"user"}
          show="touched"
          validators={{
            "": {
              required: vals => {
                console.log(
                  vals.email,
                  isEmpty(vals.email),
                  vals.password,
                  isEmpty(vals.password)
                );

                return !isEmpty(vals.email) && !isEmpty(vals.password);
              }
            }
          }}
          onSubmit={this.onFormSubmit}
          className="mt-2"
        >
          <Errors
            className="alert alert-danger"
            model="user"
            show={data => data.submitFailed}
            messages={{
              required: "Email and password required."
            }}
          />

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
const mapDispachToProps = dispach => {
  return {
    RedirectPage: data => {
      dispach(push(data));
    }
  };
};
export default connect(
  null,
  mapDispachToProps
)(FormLoginSignUp);
