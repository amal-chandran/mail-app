import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { withStyles, Checkbox, IconButton, Icon } from "@material-ui/core";

class MailList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <ListGroup flush>
        <ListGroupItem
          className={`${classes.listItem} d-flex align-items-center py-0`}
          tag="a"
          href="#"
        >
          <div>
            <Checkbox color="default" value="checkedG" />
            <IconButton>
              <Icon>star</Icon>
            </IconButton>
          </div>

          <div style={{ width: "150px" }}>Name</div>
          <span className="mx-2" />
          <div>Subject</div>
          <span className="mx-2"> - </span>
          <div>Content</div>
          <div className={`${classes.listHiddenButton} ml-auto`}>
            <IconButton>
              <Icon>delete</Icon>
            </IconButton>
          </div>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

const styles = {
  listItem: {
    background: "rgba(242,245,245,0.8)",
    color: "black",
    fontSize: ".875rem",
    "&:hover": {
      color: "#000",
      boxShadow:
        "inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)",
      "& $listHiddenButton": {
        display: "block"
      }
    }
  },
  listHiddenButton: {
    display: "none"
  }
};

export default withStyles(styles)(MailList);
