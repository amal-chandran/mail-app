import React, { Component } from "react";
import { connect } from "react-redux";
import { FormLoginSignUp } from "./../components/plogin";
import { withStyles } from "@material-ui/core";

class PLogin extends Component {
  constructor() {
    super();
    this.state = {
      page: "Login"
    };
  }

  toggleLoginSignUp = () => {
    const page = this.state.page === "Login" ? "SignUp" : "Login";
    this.setState({ page });
  };
  componentDidMount() {}

  render() {
    const { page } = this.state;

    return (
      <div className=" mt-5 mx-auto" style={{ maxWidth: "350px" }}>
        <div className="border p-4 shadow-sm" style={{ background: "#fff" }}>
          <div className="d-flex justify-content-between">
            <p className="font-weight-bold">Member Login</p>
            <div className="text-right">
              <a onClick={this.toggleLoginSignUp}>
                {page === "Login" ? "SignUp" : "Login"}
              </a>
            </div>
          </div>
          <FormLoginSignUp page={page} />
        </div>
      </div>
    );
  }
}

const styles = {
  "@global": {
    body: {
      background: "#e9ecef"
    }
  }
};

export default withStyles(styles)(connect()(PLogin));
