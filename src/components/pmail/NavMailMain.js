import React, { Component } from "react";
import { Icon } from "@material-ui/core";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ComposeMail from "./ComposeMail";

export default class NavMailMain extends Component {
  render() {
    return (
      <div className="mt-3">
        <ComposeMail />
        <NavMail />
      </div>
    );
  }
}

let NavMail = props => {
  const { classes } = props;
  const MenuItems = [
    {
      name: "Inbox",
      icon: "inbox"
    },
    {
      name: "Sent mail",
      icon: "send"
    },
    {
      name: "Drafts",
      icon: "drafts"
    }
  ];

  const SelectedMenu = "Inbox";
  return (
    <MenuList className="mt-3">
      {MenuItems.map((menuItem, index) => (
        <MenuItem
          key={index}
          selected={menuItem.name === SelectedMenu}
          classes={{ root: classes.menuItem, selected: classes.selected }}
        >
          <ListItemIcon className={classes.icon}>
            <Icon>{menuItem.icon}</Icon>
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            primary={menuItem.name}
          />
        </MenuItem>
      ))}
    </MenuList>
  );
};

const styles = theme => ({
  menuItem: {
    borderRadius: "50px",
    borderBottomLeftRadius: "0px",
    borderTopLeftRadius: "0px",
    padding: "7px",
    paddingLeft: "16px",
    "&$selected": {
      backgroundColor: "rgba(255,0,0,.1)",
      "& $primary, & $icon": {
        color: "#d93025"
      }
    }
  },
  selected: {},
  primary: {},
  icon: { marginLeft: "1rem" }
});

NavMail = withStyles(styles)(NavMail);
