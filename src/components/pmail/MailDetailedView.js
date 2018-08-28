import React, { Component } from "react";
import { Avatar, IconButton, Icon } from "@material-ui/core";

class MailDetailedView extends Component {
  render() {
    return (
      <div>
        <h3 className="mt-4  ml-5">Hello World</h3>
        <div className="d-flex flex-row">
          <div>
            <Avatar>A</Avatar>
          </div>
          <div className="d-flex flex-column w-100">
            <div className="pl-3">
              <div className="d-flex justify-content-between ">
                <div className="font-weight-bold">email</div>
                <div>
                  <IconButton>
                    <Icon>reply</Icon>
                  </IconButton>
                  <IconButton>
                    <Icon>star</Icon>
                  </IconButton>
                  <IconButton>
                    <Icon>delete</Icon>
                  </IconButton>
                  <IconButton>
                    <Icon>more_vert</Icon>
                  </IconButton>
                </div>
              </div>
              <div>to me</div>
            </div>
            <div className="mt-2 ml-3">hello world</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MailDetailedView;
