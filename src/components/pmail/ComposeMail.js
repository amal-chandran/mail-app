import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Icon, withStyles, InputAdornment } from "@material-ui/core";

class ComposeMail extends Component {
  state = {
    open: true
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
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
            Subscribe
          </DialogTitle>
          <DialogContent>
            <ComposeMailForm />
          </DialogContent>
          <DialogActions>
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
  }
};

export default withStyles(styles)(ComposeMail);

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
        <TextField
          placeholder={!toFocus ? "Recipients" : ""}
          className="border-bottom mt-2"
          fullWidth
          onFocus={this.handleRecipients}
          onBlur={this.handleRecipients}
          InputProps={{
            disableUnderline: "true",
            startAdornment: toFocus ? (
              <InputAdornment position="start">To</InputAdornment>
            ) : (
              ""
            )
          }}
        />
        <TextField
          placeholder="Subject"
          className="border-bottom mt-2"
          fullWidth
          InputProps={{
            disableUnderline: "true"
          }}
        />
        <TextField
          className="mt-2"
          fullWidth
          multiline
          InputProps={{
            disableUnderline: "true"
          }}
        />
      </div>
    );
  }
}
