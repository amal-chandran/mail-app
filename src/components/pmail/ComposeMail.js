import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Icon, withStyles, InputAdornment } from "@material-ui/core";
import { Form, Field, Control } from "react-redux-form";
import { connect } from "react-redux";

class ComposeMail extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSend = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          onClick={this.handleClickOpen}
          className="mx-3 pr-4 text-capitalize bg-white"
          variant="extendedFab"
        >
          <Icon style={{ marginRight: "1.4rem" }}>add</Icon>
          Compose
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth
          classes={{ paper: classes.Paper }}
        >
          <DialogTitle
            disableTypography
            classes={{ root: classes.DialogTitle }}
            id="form-dialog-title"
          >
            {this.props.newMailSubject || "New Message"}
          </DialogTitle>
          <DialogContent>
            <ComposeMailForm />
          </DialogContent>
          <DialogActions classes={{ root: classes.DialogActions }}>
            <Button
              variant="raised"
              style={{ boxShadow: "none" }}
              onClick={this.handleClose}
              color="secondary"
            >
              Send
            </Button>
            <Button onClick={this.handleClose} color="default">
              <Icon>delete</Icon>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const styles = {
  DialogTitle: {
    padding: "13px",
    background: "#404040",
    fontSize: "1rem",
    paddingLeft: "22px",
    fontWeight: "bold",
    color: "#fff"
  },
  Paper: {
    height: "100%"
  },
  DialogActions: {
    justifyContent: "space-between"
  }
};

const mapStateToProps = state => {
  return { newMailSubject: state.newMail.subject };
};

export default withStyles(styles)(connect(mapStateToProps)(ComposeMail));

class ComposeMailForm extends Component {
  state = {
    toFocus: false
  };
  handleRecipients = () => {
    this.setState({ toFocus: !this.state.toFocus });
  };
  render() {
    const { toFocus } = this.state;
    return (
      <div>
        <Form model={"newMail"}>
          <div className="form-group mb-0 mt-2">
            <Control.text
              style={{ border: "none", boxShadow: "none" }}
              className="form-control pl-0 border-bottom "
              model="newMail.email"
              placeholder="Recipients"
            />
          </div>
          <div class="form-group">
            <Control.text
              style={{ border: "none", boxShadow: "none" }}
              className="form-control pl-0 border-bottom"
              model="newMail.subject"
              placeholder="Subject"
            />
          </div>
          <div class="form-group">
            <Control.textarea
              className="form-control pl-0 border-0"
              model="newMail.content"
            />
          </div>
        </Form>
      </div>
    );
  }
}
