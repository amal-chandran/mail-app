import { combineReducers } from "redux";
import { createForms } from "react-redux-form";
import MailListReducer from "./MailListReducer";

const initUserState = {
  email: "",
  password: ""
};

export default combineReducers({
  MailList: MailListReducer,
  ...createForms({
    user: initUserState
  })
});
