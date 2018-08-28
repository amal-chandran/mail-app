import { combineReducers } from "redux";
import { createForms } from "react-redux-form";
import MailListReducer from "./MailListReducer";

const initUserState = {
  email: "",
  password: ""
};

const initMailState = {
  email: "",
  subject: "",
  content: ""
};

export default combineReducers({
  MailList: MailListReducer,
  ...createForms({
    user: initUserState,
    newMail: initMailState
  })
});
