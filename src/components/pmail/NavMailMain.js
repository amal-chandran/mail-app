import React, { Component } from "react";
import { Icon } from "@material-ui/core";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";

export default class NavMailMain extends Component {
  render() {
    return (
      <div className="mt-3">
        <Button
          className="mx-3 pr-4 text-capitalize bg-white"
          variant="extendedFab"
        >
          <Icon>add</Icon>
          Compose
        </Button>

        <ListItemComposition />
      </div>
    );
  }
}

function ListItemComposition(props) {
  const { classes } = props;

  return (
    <MenuList className="mt-3">
      <MenuItem className={classes.menuItem}>
        <ListItemIcon className={classes.icon}>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText classes={{ primary: classes.primary }} primary="Inbox" />
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <ListItemIcon className={classes.icon}>
          <SendIcon />
        </ListItemIcon>
        <ListItemText
          classes={{ primary: classes.primary }}
          primary="Sent mail"
        />
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <ListItemIcon className={classes.icon}>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText classes={{ primary: classes.primary }} primary="Drafts" />
      </MenuItem>
    </MenuList>
  );
}

const styles = theme => ({
  menuItem: {
    borderRadius: "50px",
    borderBottomLeftRadius: "0px",
    borderTopLeftRadius: "0px",
    padding: "7px",
    paddingLeft: "16px",
    "&:focus": {
      backgroundColor: "rgba(255,0,0,.1)",
      "& $primary, & $icon": {
        color: "#d93025"
      }
    }
  },
  primary: {},
  icon: {}
});

ListItemComposition = withStyles(styles)(ListItemComposition);