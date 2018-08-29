import React, { Component } from "react";
import { Avatar, IconButton, Icon } from "@material-ui/core";
import { connect } from "react-redux";

class MailDetailedView extends Component {
  render() {
    const { match, MailList } = this.props;
    console.log(match);
    const { Id } = match.params;
    const AllListItems = MailList.inbox;
    const SelectedItem = AllListItems.filter(Item => Item.Id == Id)[0];

    return (
      <div>
        <h3 className="mt-4  ml-5">{SelectedItem.Subject}</h3>
        <div className="d-flex flex-row">
          <div>
            <Avatar>{SelectedItem.Name.charAt(0)}</Avatar>
          </div>
          <div className="d-flex flex-column w-100">
            <div className="pl-3">
              <div className="d-flex justify-content-between ">
                <div className="font-weight-bold">{SelectedItem.Email}</div>
                <div
                  style={{
                    height: "20px",
                    marginTop: "-15px"
                  }}
                >
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
            <div className="mt-2 ml-3">{SelectedItem.Content}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    MailList: state.MailList
  };
};
export default connect(mapStateToProps)(MailDetailedView);
