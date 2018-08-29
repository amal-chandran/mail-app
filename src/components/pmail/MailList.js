import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { withStyles, Checkbox, IconButton, Icon } from "@material-ui/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class MailList extends Component {
  render() {
    const { classes, MailList, match } = this.props;

    const CurrentListItems = MailList.inbox;

    return (
      <ListGroup className="mb-4" flush>
        {CurrentListItems.map((ListItem, index) => (
          <ListGroupItem
            key={index}
            className={`${classes.listItem} d-flex align-items-center py-0`}
            tag={({ children, ...props }) => {
              return <Link {...props}>{children}</Link>;
            }}
            to={`${match.url}/${ListItem.Id}`}
          >
            <div>
              <Checkbox color="default" value="checkedG" />
              <IconButton>
                <Icon>star</Icon>
              </IconButton>
            </div>

            <div style={{ width: "150px" }}>{ListItem.Name}</div>
            <span className="mx-2" />
            <span
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                height: "23px",
                maxWidth: "50%",
                wordWrap: "normal"
              }}
            >
              <span>{ListItem.Subject}</span>
              <span className="mx-2"> - </span>
              <span>{ListItem.Content}</span>
            </span>
            <div className={`${classes.listHiddenButton} ml-auto`}>
              <IconButton>
                <Icon>delete</Icon>
              </IconButton>
            </div>
          </ListGroupItem>
        ))}
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
const mapStateToProps = state => {
  return {
    MailList: state.MailList
  };
};
export default connect(mapStateToProps)(withStyles(styles)(MailList));
