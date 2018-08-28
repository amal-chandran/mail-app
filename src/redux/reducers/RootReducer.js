import { combineReducers } from "redux";
import { createForms } from "react-redux-form";

const initUserState = {
  email: "",
  password: ""
};

export default combineReducers({
  ...createForms({
    user: initUserState
  })
});
